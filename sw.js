const CACHE = "forge-v3";
const FILES = [
  "/House-Gym/index.html",
  "/House-Gym/manifest.json",
  "/House-Gym/icon-192.png",
  "/House-Gym/icon-512.png",
  "/House-Gym/icon-180.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Deja pasar sin cache: llamadas a APIs externas
  if (url.hostname !== self.location.hostname) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Para archivos propios: network first, cache como fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
