// ============================================================
// INSTRUCCIÓN PARA CLAUDE CODE — 3 tareas independientes
// ============================================================

// ────────────────────────────────────────────────────────────
// TAREA 1 — Ajuste de progresión M5 (press inclinado / curl)
// ────────────────────────────────────────────────────────────
//
// Contexto: S1 y S2 de press inclinado y curl bíceps arrancaron
// calibrados muy altos (proyectando hacia la marca prelesión en
// vez de partir del cierre real de M4), causando fallo/rest-pause
// en ambas semanas. Decisión tomada: S3 repite exactamente S2
// (mismo peso, buscando que salga con más margen), y desde S4 se
// retoma progresión normal de +2.5kg/semana.
//
// CAMBIAR en MESOCICLOS.M5.plan.lun, ejercicio "Press Inclinado (barra)":
//   S3 (índice 2 del array semanas): de "65kg × 5" a "62.5kg × 5"
//   S4 (índice 3): de "67.5kg × 4-5" a "65kg × 5"
//   S5 (índice 4): de "70kg × 3-4" a "67.5kg × 4-5"
//   S5 pico si aplica índice 4 es pico, verificar cuál índice es
//     el pico real (semana 5 de 6) y ajustar en cascada +2.5kg
//     menos que el valor original en cada semana restante.
//   S6 descarga: recalcular en base al nuevo pico (60-65% de la
//     carga de pico ajustada, no de la original).
//
// CAMBIAR en MESOCICLOS.M5.plan.lun, ejercicio "Curl Bíceps (barra)":
//   S3: de "29kg × 8" a "27.5kg × 8"
//   S4: de "30kg × 6-8" a "30kg × 8" (retoma progresión normal aquí)
//   S5: de "31kg × 6" a "32.5kg × 6"
//   S6 descarga: recalcular en base al nuevo pico.
//
// Verificar si estos mismos ejercicios aparecen también en
// MESOCICLOS.M5.plan.jue (sesión técnica) con las mismas cargas
// — si es así, aplicar el mismo desfase de -2.5kg en cascada
// desde S3 en adelante ahí también, para mantener coherencia
// entre el día de fuerza y el día técnico.

// ────────────────────────────────────────────────────────────
// TAREA 2 — Bug: auto-detección de día no funciona en M5
// ────────────────────────────────────────────────────────────
//
// La función de auto-detección de posición al abrir la app
// (detecta mesociclo + semana por fecha, y día de la semana por
// el día real) funcionaba correctamente hasta M4, pero dejó de
// funcionar en M5 — la app no abre en el día que corresponde hoy.
//
// Revisar la función `detectPosition()` y el flujo que la usa al
// cargar la app. Hipótesis a verificar en orden:
//   1. El campo `fechas` de MESOCICLOS.M5 — confirmar que el
//      array de rangos de fecha por semana esté completo y bien
//      formado (mismo formato que M4, que sí funciona).
//   2. La lógica de detección de día de semana (`diasSemana` /
//      mapeo de `new Date().getDay()`) — confirmar que M5 tiene
//      la misma clave de días (`lun`, `mar`, `mie`, `jue`, `vie`,
//      `sab`) que sus `dias` en MESOCICLOS.M5, y que no hay un
//      día faltante o con key distinta que rompa el match.
//   3. Verificar si `state.meso` se está seteando correctamente a
//      "M5" antes de que se ejecute la detección de día, o si hay
//      una condición de carrera donde el día se calcula antes de
//      que el mesociclo esté determinado.
//
// Reproducir abriendo la app hoy y confirmando que aterriza en
// MESOCICLOS.M5, la semana correcta según fecha, Y el día de hoy
// específicamente — no solo el mesociclo/semana.

// ────────────────────────────────────────────────────────────
// TAREA 3 — Plantilla de usuario nuevo (perfil limpio)
// ────────────────────────────────────────────────────────────
//
// Se va a crear un perfil nuevo para otro usuario (Nata). La
// última vez (Dolly) el nuevo perfil arrancó heredando datos o
// vistas del usuario Samuel, y hubo que limpiar manualmente.
// Esto no debe volver a pasar — cada usuario nuevo debe arrancar
// en un estado limpio predecible, sin intervención manual.
//
// Definir explícitamente qué significa "usuario nuevo, limpio":
//
//   - Pestaña Sesión: sin mesociclos cargados. Debe mostrar un
//     estado vacío claro (ej: "Aún no hay un mesociclo diseñado
//     para este usuario") en vez de heredar o mostrar los
//     MESOCICLOS de otro usuario. El objeto de mesociclos debe
//     ser específico por usuario, no global — si actualmente
//     MESOCICLOS es una constante compartida entre todos los
//     usuarios, hay que separarlo (ej: `MESOCICLOS_${usuario}` o
//     una estructura de datos por usuario en el JSON de datos,
//     no hardcodeado en el HTML compartido).
//   - Pestaña Rehab: NO debe aparecer por defecto para un usuario
//     nuevo. Solo debe activarse/mostrarse si explícitamente se
//     agrega esa configuración para ese usuario (definir cómo se
//     activa — puede ser un flag simple en la config del usuario,
//     ej: `usuarios[nombre].tieneRehab = true/false`).
//   - Pestaña Cut: arranca en el wizard de setup inicial (estado
//     ya existente para "sin setup"), no heredado de otro usuario.
//   - Pestaña Perfil: RMs y composición corporal en estado vacío
//     ("sin datos aún") hasta que el usuario tenga registros
//     propios — no debe mostrar datos de otro usuario ni placeholders
//     con números de ejemplo.
//   - El archivo de datos remoto debe crearse automáticamente como
//     `data-{nombreUsuario}.json` la primera vez que ese usuario
//     hace un upload, sin necesidad de crearlo manualmente en GitHub
//     de antemano (verificar que `pushToGithub` maneje bien el caso
//     de archivo inexistente — creación en vez de update, sin
//     requerir SHA previo).
//
// El resultado esperado: crear un usuario nuevo debe ser tan simple
// como agregar su nombre a la lista de usuarios disponibles, sin
// ningún paso de limpieza manual de datos heredados.
// ============================================================
