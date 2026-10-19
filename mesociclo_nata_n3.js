// ============================================================
// MESOCICLO N3 — NATA
// Powerbuilding — Entreno A/B/C x3 — 8 semanas (7 construcción + 1 descarga)
// ============================================================
//
// POR QUÉ ESTE BLOQUE SE DISEÑÓ ASÍ:
//
// 1. CIERRE REAL DE N2 (no el planeado): aplicando "chuleado sin dato
//    = no se hizo" a los 6 semanas de N2, el entrenamiento real fue
//    mucho más irregular que el diseño — S4 sin ningún registro, S5
//    solo con el día A, Hip Thrust en cero series reales en TODO el
//    bloque, Curl Nórdico con solo 2 exposiciones reales separadas
//    por 4 semanas. Causa confirmada por Samuel: semanas de vida
//    excepcional (no un problema de día ni de ejercicio).
//
// 2. ARRANQUE POR e1RM REAL, NO POR EL ÚLTIMO PESO ENTRENADO: usando
//    Epley (peso × (1 + (reps+RIR)/30)) sobre el mejor set con RIR
//    real anotado en N2 — no sobre números sin RIR ni sobre el
//    último peso entrenado — se encontró que Press Inclinado, RDL y
//    Remo Pendlay venían entrenando al 87-92% de su e1RM real, sin
//    margen de base. Eso explica el estancamiento de N2 mejor que
//    "mala suerte": no había piso desde donde subir.
//      Sentadilla   e1RM ~65kg (52.9x7 RIR0, S2) → arranca 75% = 49kg
//      P. Inclinado e1RM ~31kg (25x6 RIR1, S1)   → arranca 70% = 21.5kg
//      RDL          e1RM ~36kg (28.4x8 RIR0, S1) → arranca 70% = 25kg
//      Remo Pendlay e1RM ~30kg (22.94x9 RIR0,S1) → arranca 70% = 21kg
//    Sentadilla arranca más alto (75%) porque fue el único básico
//    con margen real demostrado en N2.
//
// 3. HIP THRUST Y CURL NÓRDICO NO TIENEN e1RM REAL — cero sets con
//    dato completo en todo N2. No se les puede calcular un punto de
//    partida desde un pico que nunca existió: arrancan como
//    recalibración/test real, conservador, no como continuación.
//
// 4. POR QUÉ 8 SEMANAS Y NO 6: un bloque corto (3-4 semanas) es para
//    lifters avanzados con poco margen de mejora semanal — Nata
//    todavía tiene ganancia lineal rápida disponible (curl bíceps
//    pasó de 14 a 19 reps al mismo peso en pocas semanas). Un bloque
//    de 6 no dio margen para absorber una semana de vida excepcional
//    sin perder una fracción grande del bloque — eso fue exactamente
//    lo que pasó. 8 semanas da resiliencia real ante eso.
//
// 5. ENTRENO A/B/C EN VEZ DE LUN/MIÉ/VIE: la app fuerza el día de hoy
//    según el calendario SOLO cuando el mesociclo tiene `fechas`
//    definido (ver detectPosition() en index.html) — por eso este
//    bloque NO lleva `fechas`. Sin fechas, la app usa la última
//    posición guardada (localStorage) en vez de saltar al día de
//    calendario. El avance automático al completar una sesión
//    (A→B→C sin importar el día) todavía no existe en el código —
//    queda pendiente como cambio de app aparte.
//
// 6. CLASIFICACIÓN DEL BLOQUE: powerbuilding, no fuerza puro ni
//    hipertrofia puro ni técnico — los 4 básicos (Sentadilla, Press
//    Inclinado, RDL, Remo Pendlay) llevan progresión por RIR/lineal
//    apuntando a e1RM; los accesorios llevan doble progresión por
//    reps, sin techo de carga como objetivo. Coherente con el
//    objetivo declarado desde el inicio: recomposición corporal.
//
// 7. DELTOIDE POSTERIOR: entra Y-T en banco inclinado (Entreno B) —
//    mismo hueco identificado desde N1, resuelto con el mismo
//    ejercicio que se usó en el M6 de Samuel.
//
// 8. CURL BÍCEPS: la mancuerna fija de 2x5kg tocó techo de reps en
//    N2 (x15). El salto a 2x10kg (20kg total) es demasiado grande —
//    por eso Nata ya había resuelto esto sola usando la barra a
//    15kg total como escalón intermedio real. Ese escalón queda
//    fijo en el diseño, no a criterio de cada sesión.
//
// LA DEFINICIÓN REAL DE CADA EJERCICIO (prog, series, semanas) vive
// embebida en MESOCICLOS.N3 dentro de index.html — este archivo es
// la referencia legible para discutir el diseño, no lo que la app
// lee en tiempo real. Ver el bloque "N3" en index.html para la
// fuente de verdad.
// ============================================================
