// ============================================================
// MESOCICLO N2 — NATA
// Full Body x3 — 6 semanas
// ============================================================
//
// CONTEXTO — LECCIONES DEL N1:
// 1. Curl bíceps con "barra" fue un error de diseño irrealizable
//    (barra vacía pesa 15kg, se prescribieron 9-11kg). Nata usó
//    2 mancuernas de 5kg en su lugar. N2 usa mancuerna real desde
//    el inicio, RM calculado sobre ese dato.
// 2. Elevación lateral, pullover, aperturas: mancuernas fijas
//    5/10/20kg, prescripciones anteriores (4kg, 8kg, 6kg) no
//    existen. Pullover se resuelve con mancuerna de 15kg como
//    escalón intermedio. Lateral y aperturas siguen topadas —
//    resuelto con volumen extra (2x/semana) en vez de más carga.
// 3. Zancada estática (mancuernas a los lados) quedó limitada por
//    agarre, no por pierna — sale del programa, reemplazada por
//    sentadilla técnica los viernes.
// 4. Press inclinado: mantenido deliberadamente en 15kg (barra
//    sola) todo el N1 por decisión técnica (desbalance), NO por
//    fallo de fuerza. N2 empieza con RE-TEST real de esta carga.
// 5. Deltoide posterior sigue sin ejercicio directo — pendiente
//    para N3, mismo hueco que se identificó y resolvió en el M6
//    de Samuel con Y-T.
//
// EQUIPO CONFIRMADO:
//   - Barra olímpica 15kg + discos de 5/10/20kg (kg) y pares de
//     5/2.5/1.25/0.5 lb — permite progresión fina en ejercicios
//     de barra.
//   - Mancuernas FIJAS: 5kg, 10kg, 15kg, 20kg únicamente. Sin
//     progresión fina en ejercicios de mancuerna — de ahí la
//     estrategia de volumen (2x/semana) en vez de carga para
//     laterales y aperturas.

const MESOCICLO_NATA_N2 = {
  label: "N2 — Nata",
  tipo: "activo",
  semanas: 6,
  dias: [
    { key: "lun", label: "Lun", titulo: "Full Body A — Pesado" },
    { key: "mie", label: "Mié", titulo: "Full Body B — Tracción" },
    { key: "vie", label: "Vie", titulo: "Full Body A — Técnico" },
  ],
  plan: {
    lun: [
      { nombre: "Sentadilla trasera (barra)", orden: 1, rol: "fuerza",
        nota: "RM real N1: 68kg estimado (55kg x7 RIR1, S5). Arranca con margen conservador.",
        series: 4,
        semanas: ["50kg x 6","52.5kg x 6","55kg x 5","57.5kg x 5","60kg x 4-5 (pico)","37.5kg x 10"] },
      { nombre: "Press Inclinado (barra)", orden: 2, rol: "fuerza",
        nota: "RE-TEST real — se mantuvo en 15kg (barra sola) todo N1 por decisión técnica, no por límite de fuerza. S1 es rampa para encontrar peso real de trabajo.",
        series: 3,
        semanas: ["RAMPA — encontrar peso a RIR2-3 x6-8","+2.5kg sobre S1","+2.5kg sobre S2","+2.5kg sobre S3","peso más alto logrado x5 (pico)","60% del pico x10"] },
      { nombre: "Curl Bíceps (2 mancuernas)", orden: 3, rol: "accesorio",
        nota: "RM real N1: 2x5kg (10kg total) x10-15 diversas RIR. Confirmado con mancuerna real, no barra.",
        series: 3,
        semanas: ["2x5kg x 12","2x5kg x 15","2x10kg x 8-10","2x10kg x 10","2x10kg x 10-12 (pico)","2x5kg x 15"] },
      { nombre: "Elevación de Piernas", orden: 4, rol: "core",
        series: 3,
        semanas: ["x 10","x 12","x 12","x 15","x 15 (pico)","x 10"] },
      { nombre: "Elevación Lateral (mancuerna)", orden: 5, rol: "accesorio",
        nota: "Topada en equipo (5-10-20kg sin intermedio). Progresión por reps; frecuencia 2x/semana compensa el techo de carga.",
        series: 2,
        semanas: ["5kg x 12","5kg x 15","5kg x 18","5kg x 20","5kg x 20+ (pico)","5kg x 12"] }
    ],
    mie: [
      { nombre: "RDL (barra)", orden: 1, rol: "fuerza",
        nota: "RM real N1: 36.59kg x6 RIR1 (S5) — usando discos de libra fina.",
        series: 4,
        semanas: ["27.5kg x 8","30kg x 8","32.5kg x 6-8","35kg x 6","37.5kg x 5-6 (pico)","22.5kg x 10"] },
      { nombre: "Remo Pendlay (barra)", orden: 2, rol: "fuerza",
        nota: "Dato N1 inconsistente (bajó a 20kg en S2, subió a 31.8kg en S5) — arrancar conservador, priorizar consistencia sobre carga máxima.",
        series: 3,
        semanas: ["22.5kg x 8","25kg x 8","27.5kg x 6-8","28.75kg x 6","30kg x 6 (pico)","20kg x 10"] },
      { nombre: "Press Francés (barra)", orden: 3, rol: "accesorio",
        nota: "Ejercicio NUEVO — cubre hueco de tríceps directo (antes casi en cero). Antagonista correcto de Pendlay/tracción.",
        series: 3,
        semanas: ["15kg x 10","16.25kg x 10","17.5kg x 8-10","18.75kg x 8","20kg x 6-8 (pico)","15kg x 12"] },
      { nombre: "Pullover (mancuerna)", orden: 4, rol: "accesorio",
        nota: "Escalera de techo: 10kg puro → mezcla 10/15kg → 15kg puro. NO usar barra (biomecánica distinta — barra cambia el énfasis a pecho/tríceps por el ancho de agarre que fuerza flexión de codo).",
        series: 3,
        semanas: ["10kg x 12","10kg x 15","10kg+15kg alternado x10","15kg x 10","15kg x 10-12 (pico)","10kg x 15"] },
      { nombre: "Aperturas en banco (mancuerna)", orden: 5, rol: "accesorio",
        nota: "Topada en equipo, mismo criterio que elevación lateral — progresión por reps.",
        series: 3,
        semanas: ["5kg x 12","5kg x 15","5kg x 15","5kg x 18","5kg x 18-20 (pico)","5kg x 12"] }
    ],
    vie: [
      { nombre: "Curl Nórdico Asistido (banda)", orden: 1, rol: "patron_motor",
        nota: "SIEMPRE PRIMERO — sin perilla de ajuste, no puede absorber fatiga previa. Primera sesión: 3-4 reps por serie, detener al perder control, sin buscar el límite. Banda reduce carga excéntrica real en todo el recorrido, no solo catch final.",
        series: 3,
        semanas: ["Calibración: 3-4 reps controladas","según respuesta S1","+control/reps","+control/reps","tope de control (pico)","reps bajas (descarga)"] },
      { nombre: "Sentadilla trasera (barra)", orden: 2, rol: "tecnico",
        series: 3,
        semanas: ["45kg x 10","47.5kg x 10","50kg x 8","52.5kg x 8","55kg x 8 (pico)","35kg x 12"] },
      { nombre: "Hip Thrust (barra)", orden: 3, rol: "accesorio",
        nota: "RM real N1: 45kg x10 RIR2-4 (S4) — el ejercicio mejor calibrado de todo N1.",
        series: 3,
        semanas: ["40kg x 10","42.5kg x 10","45kg x 8-10","47.5kg x 8","50kg x 8-10 (pico)","30kg x 12"] },
      { nombre: "Crunch con peso", orden: 4, rol: "core",
        nota: "RM real N1: 20kg x30 (S5) — progresión sólida y limpia.",
        series: 3,
        semanas: ["20kg x 20","20kg x 22","22.5kg x 18","22.5kg x 20","25kg x 15-18 (pico)","15kg x 25"] },
      { nombre: "Elevación Lateral (mancuerna)", orden: 5, rol: "accesorio",
        nota: "Segunda frecuencia semanal — mismo criterio que lunes.",
        series: 2,
        semanas: ["5kg x 12","5kg x 15","5kg x 18","5kg x 20","5kg x 20+ (pico)","5kg x 12"] }
    ]
  }
};

// ============================================================
// VOLUMEN SEMANAL — VERIFICADO POR MÚSCULO
// ============================================================
// Cuádriceps: 7 series (sentadilla x2)
// Isquios: 7 series (RDL 4 + nórdico 3)
// Glúteo: ~8-9 series
// Pectoral: 6 series (press inclinado 3 + aperturas 3)
// Espalda: 6 series (Pendlay 3 + pullover 3)
// Tríceps: 4.5 series (Francés 3 + indirecto press)
// Bíceps: 4.5 series (curl 3 + indirecto remo)
// Deltoide lateral: 6 series (topado en carga, 2x/semana: lun+vie)
// Deltoide posterior: ~1.5, SIN ejercicio directo — pendiente N3,
//   mismo hueco resuelto en Samuel M6 con Y-T
// Core: 6 series (elevación piernas + crunch)
// ============================================================
