// ============================================================
// MESOCICLO 7 — SAMUEL
// PPL x2 (6 días) — 6 semanas
// DOBLE PROGRESIÓN (no pesos prescritos por semana)
// ============================================================
//
// CAMBIO DE MODELO RESPECTO A M5/M6:
// Ya no se prescribe el peso semana por semana. Cada ejercicio
// tiene: peso de arranque + rango de reps + regla de salto.
// Razón: la tasa real de progresión de Samuel (0.25%-1.3% por
// semana según ejercicio) no encaja con progresiones lineales
// prescritas, y la adherencia real (~4 sesiones/semana, con
// desfase de días por carga del pie) hace que cualquier
// "peso que tocaba esta semana" se incumpla. La doble progresión
// depende de rendimiento, no de calendario.
//
// TRES TIPOS DE PROGRESIÓN EN ESTE BLOQUE:
//   A) Doble progresión (rango de reps → sube peso al tope)
//   B) Reps fijas + carga (Pendlay a 8, RDL a 5)
//   C) Patrón motor (Dragon Flag: progresa por variante)

// ── DATOS BASE (mejores sets reales del M6) ──
// Sentadilla      95x3   → 1RM ~104.5
// RDL             70x6   → 1RM ~84
// Press Banca     55x15  → 1RM ~82.5
// Press Inclinado 72.5x3 → 1RM ~79.8
// Remo Pendlay    70x4   → 1RM ~79.3
// Remo Supino     60x6   → 1RM ~72
// Press Francés   35x6   → 1RM ~42
// Curl Bíceps     33.5x5 → 1RM ~39
// Pullover        20x8   → 1RM ~25 (topado en mancuerna fija)
// Curl Martillo   10x16  → topado
// Elev. Lateral   10x11  → topado

const MESOCICLO_M7 = {
  label: "M7 — 2026",
  tipo: "activo",
  semanas: 6,
  modeloProgresion: "doble_progresion",
  dias: [
    { key: "lun", label: "Lun", titulo: "Push — Pesado" },
    { key: "mar", label: "Mar", titulo: "Pull — Pesado" },
    { key: "mie", label: "Mié", titulo: "Legs A" },
    { key: "jue", label: "Jue", titulo: "Push — Volumen" },
    { key: "vie", label: "Vie", titulo: "Pull — Volumen" },
    { key: "sab", label: "Sáb", titulo: "Legs B" },
  ],
  plan: {
    lun: [
      { nombre: "Press Banca (barra)", orden: 1, series: 3,
        tipo: "doble_progresion", arranque: "62.5kg", rango: "6-10",
        regla: "Cuando logres 10 reps en las 3 series con técnica limpia → +2.5kg",
        nota: "AHORA ES EL PRINCIPAL. Razón: ratio inclinado/banca estaba en 97% cuando lo normal es 80-85% — el banca estaba subdesarrollado. Entró recién en S2 del M6, poco tiempo de exposición." },
      { nombre: "Press Inclinado (barra)", orden: 2, series: 3,
        tipo: "doble_progresion", arranque: "60kg", rango: "8-12",
        regla: "Al tope del rango en las 3 series → +2.5kg",
        nota: "Pasa a secundario. CUANDO LLEGUEN LAS MANCUERNAS AJUSTABLES (10-90lb): cambiar a press inclinado con mancuerna, sin cortar el bloque — es secundario, el cambio de implemento no rompe la progresión principal. La mancuerna además permite trayectoria humeral libre, terapéutico para la asimetría escapular izquierda documentada." },
      { nombre: "Curl Bíceps (barra)", orden: 3, series: 2,
        tipo: "doble_progresion", arranque: "30kg", rango: "8-12",
        regla: "Al tope → +2.5kg" },
      { nombre: "Curl Martillo (DB)", orden: 4, series: 2,
        tipo: "doble_progresion", arranque: "10kg", rango: "12-25",
        regla: "Topado en 10kg hasta que lleguen las ajustables. Progresa por reps hasta 25, luego +2.3kg cuando haya equipo.",
        nota: "Braquial rezagado respecto a bíceps — único estímulo específico." },
      { nombre: "Elevación Lateral (DB)", orden: 5, series: 2,
        tipo: "doble_progresion", arranque: "10kg", rango: "12-25",
        regla: "Igual que martillo — reps hasta 25, luego carga cuando haya equipo.",
        nota: "El rango 12-25 NO es subóptimo. Evidencia: estímulo equivalente entre 5-30 reps cuando las series van cerca del fallo (Schoenfeld 2017, meta-análisis 21 estudios). OJO: por encima de 20 reps el RIR percibido suele estar subestimado 1-2 reps — el limitante es ardor, no capacidad muscular. Ajustar en consecuencia." }
    ],
    mar: [
      { nombre: "Remo Pendlay (barra)", orden: 1, series: 3,
        tipo: "reps_fijas", arranque: "62.5kg", reps: 8,
        regla: "SIEMPRE 8 reps. Cuando las 3 series salgan a 8 con RIR>=2 y técnica limpia → +2.5kg. Nunca bajar del rango.",
        nota: "Reps fijas protege la técnica, que es lo que importa en este ejercicio (reset completo cada rep, se degrada rápido bajo fatiga). Con la tasa real de progresión (+4.4%/bloque), esperar un salto de peso cada 2-3 semanas, no cada semana. PICO: romper el rango con AMRAP techo 5." },
      { nombre: "Remo Supino (barra)", orden: 2, series: 3,
        tipo: "doble_progresion", arranque: "52.5kg", rango: "8-12",
        regla: "Al tope → +2.5kg",
        nota: "CUANDO LLEGUEN LAS MANCUERNAS: este SALE, entra Remo Unilateral. Razón: supino y Pendlay comparten patrón (tracción horizontal con barra). El unilateral aporta mayor rango de movimiento (escápula viaja más sin barra), corrige asimetría, y carga menos erectores (apoyado en banco) — relevante con RDL x2 días." },
      { nombre: "Pullover (DB)", orden: 3, series: 3,
        tipo: "doble_progresion", arranque: "20kg", rango: "12-25",
        regla: "Topado en 20kg. Reps hasta 25, luego +2.3kg cuando haya equipo.",
        nota: "VUELVE AL PROGRAMA. Se quitó por una lectura mía incorrecta ('los tres remos hacen lo mismo'). Es el ÚNICO ejercicio que carga el dorsal en estiramiento largo — ángulo que ningún remo alcanza. Pendlay y supino sí se solapan parcialmente entre sí; el pullover no se solapa con ninguno." },
      { nombre: "Press Francés (barra)", orden: 4, series: 2,
        tipo: "doble_progresion", arranque: "32.5kg", rango: "8-12",
        regla: "Al tope → +2.5kg",
        nota: "Antagonista correcto del día de tracción." }
    ],
    mie: [
      { nombre: "Sentadilla (barra + cuña)", orden: 1, series: 3,
        tipo: "reps_fijas", arranque: "87.5kg", reps: "3-5",
        regla: "Rango pesado. Cuando logres 5 en las 3 series con RIR>=1 → +2.5-5kg. PICO puede ir a RIR 0.",
        nota: "Cuña bajo talón izquierdo — confirmado necesario: sin ella el cuerpo compensa con sentadilla sumo funcional (dolor de aductores documentado). El salto neuromotor del M5 ya se agotó (+3.2% pico a pico en M6), ahora es progresión normal." },
      { nombre: "RDL sin flexión de rodilla (barra)", orden: 2, series: 3,
        tipo: "reps_fijas_rir", arranque: "65kg", reps: 5,
        regla: "SIEMPRE 5 reps. Progresión por RIR, no por reps: S1-S2 a RIR 3 | S3-S4 a RIR 2 | S5 (pico) a RIR 1. Cuando RIR 3 se sienta fácil → +2.5kg manteniendo 5 reps.",
        nota: "LIMITE DURO: RDL NUNCA va a RIR 0. El mecanismo de fallo es redondeo lumbar bajo carga máxima. Sentadilla sí puede ir a RIR 0 en el pico; RDL no. Erectores ya en zona alta (RDL x2 días + sentadilla)." },
      { nombre: "Hip Thrust (barra)", orden: 3, series: 2,
        tipo: "doble_progresion", arranque: "40kg", rango: "8-12",
        regla: "Al tope → +5kg",
        nota: "Dato del M6 corrupto (25x9 cuando en M5 hacía 32.5kg) — recalibrar desde cero con este arranque." },
      { nombre: "Dragon Flag (negativas)", orden: 4, series: 3,
        tipo: "patron_motor",
        regla: "Progresión por VARIANTE, no por peso ni reps. Escala: (1) Elevación de piernas → (2) Negativas de Dragon Flag [ACTUAL] → (3) Tuck Dragon Flag (rodillas flexionadas) → (4) Una pierna extendida → (5) Dragon Flag completo. Avanzar cuando controles 3x8 limpias en el nivel actual.",
        nota: "Objetivo declarado: llegar al Dragon Flag completo. Va PRIMERO en el bloque de core — exige más control técnico, se compensa con lumbar si llega fatigado." },
      { nombre: "Crunch Abdominal", orden: 5, series: 2,
        tipo: "doble_progresion", arranque: "20kg", rango: "12-30",
        regla: "Al tope → +2.5kg",
        nota: "Va DESPUÉS del Dragon Flag. Patrón distinto (flexión de tronco vs anti-extensión isométrica) — no redundante." }
    ],
    jue: [
      { nombre: "Press Banca (barra)", orden: 1, series: 3,
        tipo: "doble_progresion", arranque: "50kg", rango: "10-15",
        regla: "Al tope → +2.5kg",
        nota: "Día de volumen: ~72-75% del peso del día pesado, reps altas, RPE 7. La separación debe SENTIRSE distinta — en el M5 la diferencia fue de 2.5kg y no se notó nada." },
      { nombre: "Press Inclinado (barra)", orden: 2, series: 3,
        tipo: "doble_progresion", arranque: "47.5kg", rango: "10-15",
        regla: "Al tope → +2.5kg" },
      { nombre: "Curl Bíceps (barra)", orden: 3, series: 2,
        tipo: "doble_progresion", arranque: "25kg", rango: "12-20",
        regla: "Al tope → +2.5kg" },
      { nombre: "Curl Martillo (DB)", orden: 4, series: 2,
        tipo: "doble_progresion", arranque: "10kg", rango: "15-30",
        regla: "Reps hasta 30, luego carga cuando haya equipo." },
      { nombre: "Elevación Lateral (DB)", orden: 5, series: 2,
        tipo: "doble_progresion", arranque: "10kg", rango: "15-30",
        regla: "Reps hasta 30, luego carga cuando haya equipo." }
    ],
    vie: [
      { nombre: "Remo Pendlay (barra)", orden: 1, series: 3,
        tipo: "doble_progresion", arranque: "50kg", rango: "10-12",
        regla: "Al tope → +2.5kg",
        nota: "Día de volumen: aquí SÍ se usa rango, no reps fijas. Las reps fijas a 8 son solo para el día pesado." },
      { nombre: "Remo Supino (barra)", orden: 2, series: 3,
        tipo: "doble_progresion", arranque: "42.5kg", rango: "10-15",
        regla: "Al tope → +2.5kg" },
      { nombre: "Pullover (DB)", orden: 3, series: 3,
        tipo: "doble_progresion", arranque: "20kg", rango: "15-30",
        regla: "Reps hasta 30, luego carga cuando haya equipo." },
      { nombre: "Press Francés (barra)", orden: 4, series: 2,
        tipo: "doble_progresion", arranque: "27.5kg", rango: "12-15",
        regla: "Al tope → +2.5kg" }
    ],
    sab: [
      { nombre: "Curl Nórdico Asistido", orden: 1, series: 3,
        tipo: "patron_motor",
        regla: "SIEMPRE PRIMERO. Progresión por rango controlado antes de caer, no por carga.",
        nota: "Sin perilla de ajuste — no puede absorber fatiga previa, por eso va primero. Primera exposición en M6 generó DOMS severo de varios días (esperado: es el ejercicio con mayor daño excéntrico documentado). Segunda exposición genera mucho menos (efecto de repetición). Mantener volumen bajo." },
      { nombre: "RDL sin flexión de rodilla (barra)", orden: 2, series: 3,
        tipo: "doble_progresion", arranque: "55kg", rango: "8-12",
        regla: "Al tope → +2.5kg",
        nota: "Día de volumen para RDL — aquí sí rango amplio. Las 5 reps fijas son solo miércoles." },
      { nombre: "Sentadilla (barra + cuña)", orden: 3, series: 3,
        tipo: "doble_progresion", arranque: "70kg", rango: "8-12",
        regla: "Al tope → +2.5kg",
        nota: "Día técnico de sentadilla." },
      { nombre: "Hip Thrust (barra)", orden: 4, series: 2,
        tipo: "doble_progresion", arranque: "40kg", rango: "12-15",
        regla: "Al tope → +5kg" },
      { nombre: "Dragon Flag (negativas)", orden: 5, series: 3,
        tipo: "patron_motor",
        regla: "Misma escala que miércoles." },
      { nombre: "Crunch Abdominal", orden: 6, series: 2,
        tipo: "doble_progresion", arranque: "20kg", rango: "15-30",
        regla: "Al tope → +2.5kg" }
    ]
  }
};

// ============================================================
// REGLAS TRANSVERSALES
// ============================================================
//
// 1. ESCÁPULA IZQUIERDA (en todo press): retracción y depresión
//    ACTIVAS antes de sacar la barra del rack. Mantener omóplatos
//    contra el banco toda la serie. Si se pierde la posición,
//    esa serie TERMINA AHÍ. Criterio objetivo, no sensación.
//    (Punzón de manguito documentado en M6-S1.)
//
// 2. PIE / CARGA DE PASOS: el pie tiene presupuesto diario de
//    carga que compiten pasos de vida real y sentadilla. Umbral
//    óptimo actual ~6000 pasos; tolera 15000 con 2 días de
//    recuperación (antes: 8000 con 3-5 días — mejora grande).
//    Programar sentadilla en días de baja carga de pasos.
//    PENDIENTE: registrar pasos en la app — cero registros hasta
//    ahora, es el dato que más decide el entrenamiento de pierna.
//
// 3. CUANDO LLEGUEN LAS MANCUERNAS AJUSTABLES (10-90lb):
//    - Press inclinado: barra → mancuerna (sin cortar el bloque)
//    - Remo Supino SALE, entra Remo Unilateral
//    - Pullover, curl martillo, elevación lateral: desbloquean
//      progresión por carga
//    - VERIFICAR FÍSICAMENTE la tabla de incrementos antes de
//      prescribir nada (probablemente saltos de 5lb/2.3kg, pero
//      no está publicado — contar y pesar discos al recibirlas).
//    - Elevación lateral seguirá necesitando reps aunque llegue
//      el equipo: 2.3kg sobre 10kg es +23%, demasiado grueso.
//
// 4. SEMANA DE PICO (S5): romper rangos.
//    - Pendlay: AMRAP techo 5
//    - Sentadilla: puede ir a RIR 0
//    - RDL: máximo RIR 1, NUNCA RIR 0
//
// 5. DESCARGA (S6): ~60% de las cargas del pico, reps altas.
//
// ============================================================
// QUÉ SE MIDE EN ESTE BLOQUE
// ============================================================
// - Adherencia REAL por semana calendario (no por etiqueta del
//   mesociclo). En M6 fueron 3.95 sesiones/semana reales sobre
//   6 planeadas. Si M7 termina otra vez en ~4, el diseño de 6
//   días no corresponde a la realidad y se recorta en M8.
// - Progresión PICO CONTRA PICO vs M6 (no S1 vs S5 del mismo
//   bloque — eso infla el número porque S1 arranca conservador).
//   Referencia M6: sentadilla +3.2%, RDL +7.7%, Pendlay +4.4%,
//   curl +1.5%, press inclinado -1.5%.
// - Proteína: 116g promedio en M6 (~1.7 g/kg de masa magra).
//   Objetivo 150-180g (2.2-2.6 g/kg). Es el factor con más peso
//   sobre el resultado, más que cualquier decisión de diseño.
// ============================================================
