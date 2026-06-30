# Forge — Contexto del proyecto

App de tracking personal: entrenamiento (mesociclos), rehabilitación de tobillo, y cutting phase (composición corporal). PWA instalada en iPhone y PC, hosteada en GitHub Pages.

## Arquitectura

- **index.html** — único archivo, todo el código (HTML + CSS + JS inline). Sin build step, sin frameworks.
- **manifest.json** — metadata de PWA (nombre "Forge", iconos, theme color).
- **sw.js** — service worker. Estrategia network-first para archivos propios; deja pasar sin cache las llamadas a dominios externos (api.github.com).
- **data.json** — almacena TODOS los datos del usuario (registros de sesión, rehab, cut). Es la fuente de verdad para sync entre dispositivos.
- **icon-*.png, splash-*.png** — assets de PWA, generados con Python/PIL (estilo MacroFactor: fondo negro, letras "FO" blancas).

No hay backend propio. Todo el "backend" es la API de GitHub (Contents API) llamada directamente desde el navegador con un Personal Access Token que el usuario pega en Config.

## Sync entre dispositivos — cómo funciona

- **NO se usa Google Sheets.** Se intentó primero y se abandonó por problemas de CORS irresolubles desde un dominio externo (github.io) hacia Apps Script. No reintentar esa ruta.
- El sync es vía `data.json` en este mismo repo, leído/escrito con la API de GitHub (`api.github.com/repos/.../contents/data.json` para escribir, `raw.githubusercontent.com/.../data.json` para leer — este último sí soporta CORS).
- Dos botones explícitos en el header: **↑ upload** (sube datos del dispositivo actual) y **↓ download** (descarga y mergea). Se decidió NO usar un solo botón de "sync automático" porque genera ambigüedad sobre qué dirección ganó en caso de conflicto.
- El merge es por timestamp: cada registro individual tiene su propio `timestamp`, y al hacer pull se compara remoto vs local, gana el más reciente.
- **Orden crítico:** al hacer pull+push combinado, push debe ir ANTES que pull. Si pull va primero y el remoto está vacío/desactualizado, sobreescribe los datos locales antes de que se puedan subir. (Bug ya resuelto, no reintroducir.)

## Botón ↻ update (actualización de código, no de datos)

Separado del sync de datos. Sirve para que el usuario actualice el código de la app sin pasar por reinstalar la PWA. Usa el token de GitHub para traer el `index.html` más reciente del repo.

## Errores ya resueltos (no reintroducir)

1. **Caracteres especiales rompen el parser JS dentro de template literals con backticks anidados.** Específicamente: em dash (—), en dash (–) dentro de strings de datos, y backticks anidados sin escapar dentro de otro template literal ya abierto. Validar siempre con `node --check` antes de subir.
2. **Fechas con `new Date("YYYY-MM-DD")` se interpretan como UTC medianoche**, lo cual en Colombia (UTC-5) se traduce a las 7pm del día anterior — desplaza todas las fechas un día. Siempre parsear como `new Date(year, month-1, day)` (constructor numérico = hora local).
3. **El router de vistas (`render()`) es un if/else manual por cada vista.** Cada vez que se agrega una vista nueva (`rehab`, `cut`, `profile`) hay que agregarla en TRES lugares: el array de nav (`forEach`), el if/else del router, y el bottom-nav HTML. Olvidar uno de los tres causa que la pestaña "no entre" sin error visible. Checklist al agregar vista nueva: (a) botón en bottom-nav, (b) entrada en el array de clases activas, (c) rama en el if/else de `render()`.
4. **El service worker cachea agresivamente.** Si se edita `sw.js`, hay que subir versión de CACHE incrementada (`forge-v3` → `forge-v4`) o el cambio no se aplica aunque se suba el archivo nuevo a GitHub. Actualmente usa estrategia network-first para que esto importe menos, pero si se vuelve a cache-first, recordar esto.
5. **Argument list too long en curl con `-d payload`** si el HTML es grande (~90kb+ en base64). Solución: escribir el payload a un archivo temporal y usar `-d @archivo` en vez de pasar el string directo.
6. **Tras hacer pull de datos remotos, hay que re-renderizar la vista actual explícitamente** si no es la vista por defecto (`session`). `render()` solo refresca según `state.view`, pero si el pull ocurre en background hay que forzar `renderRehab()` / `renderCut()` si el usuario está parado ahí.

## Decisiones de diseño deliberadas (no son bugs, no "arreglar")

- El wizard de Cut (3 pasos) es solo para el setup INICIAL. La edición posterior usa un modal con todos los campos a la vez — no el wizard. Si alguien pide "editar mi target", es el modal (`editCutSetup()` → `saveEditModal()`), no reabrir el wizard.
- Pliegues semanales: solo se trackean los 3 pliegues que el sistema detectó automáticamente como los más altos al inicio (los de mayor mm), más cintura. NO se vuelve a calcular % de grasa con esos 3 — eso solo se hace con los 7 pliegues completos en una revisión mensual (feature pendiente, no implementada aún).
- La progresión de pérdida de peso semanal es fija (no rango), tirando siempre al extremo conservador: >15% grasa → 0.5kg/sem, 12-15% → 0.35kg/sem, <12% → 0.25kg/sem.
- Auto-detección de posición (qué mesociclo/semana/día mostrar al abrir) se basa en la fecha real comparada contra el campo `fechas` de cada mesociclo en `MESOCICLOS`. Si un mesociclo no tiene `fechas` definido, cae a memoria de última posición guardada en localStorage (`forge-position`). Esto es intencional, no fallback temporal.

## Estilo visual

Tema claro por defecto, oscuro disponible via toggle (botón en header), variables CSS en `:root` vs `body.dark`. Acento verde oliva (`--accent: #5C7A00` light / `#c8ff00` dark). Tipografía monoespaciada para todos los datos numéricos (pesos, fechas, RMs). Sin sombras, separación de cards por borde de 1px. Inputs en dark mode necesitan override explícito con `!important` porque los estilos nativos de los inputs no heredan bien las variables CSS en todos los navegadores — ya está resuelto en el bloque `body.dark input` del CSS, no quitar.

## Convención de capitalización

Headers de sección usan mayúscula solo en la primera letra ("Pesos", "Objetivo", no "PESOS", "OBJETIVO"), salvo los `.cut-title` y `.rehab-title` que usan letra pequeña + tracking ancho como estilo de eyebrow/label (esos sí van en mayúsculas por diseño, no cambiar).

## Pendientes conocidos (mencionados en conversación, no implementados aún)

- Splash screen: agregado solo para iPhone 15 y 3 tamaños más comunes. Si el usuario reporta que no aparece en su modelo específico, puede faltar el tamaño exacto en las meta tags `apple-touch-startup-image`.
- Revisión mensual de pliegues completos (7) con recálculo de % grasa real — mencionada como concepto pero sin UI construida.
- Multi-usuario: arquitectura pensada para escalar (cada usuario su propio `data-{nombre}.json`) pero no implementada — actualmente todo es un solo usuario, un solo `data.json`.

## Flujo de deploy

No hay CI/CD. Cada cambio a `index.html` (o cualquier asset) se sube directo al repo vía API de GitHub (o manualmente desde la interfaz web). GitHub Pages redeploya automáticamente en 1-2 minutos tras cualquier push a `main`. Verificar siempre sintaxis JS con `node --check` antes de subir — no hay otro paso de validación.
