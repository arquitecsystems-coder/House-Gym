// ============================================================
// MESOCICLO 6 — SAMUEL
// PPL x2 (6 días) — 6 semanas — Fuerza/Técnico por ejercicio
// Calibrado desde cierre real de M5 con margen RIR 2-3 en S1
// ============================================================
//
// ESTRUCTURA DE DÍAS:
//   Lun: Push fuerza    | Jue: Push técnico
//   Mar: Pull fuerza    | Vie: Pull técnico
//   Mié: Legs A         | Sáb: Legs B
//
// REGLA FUERZA/TÉCNICO (opción A elegida):
// La calidad de estímulo se define POR EJERCICIO, no por día.
//   - Fuerza:  3-5 reps, RPE 8-9, ~85-90% 1RM
//   - Técnico: 8-12 reps, RPE 7, ~70-75% 1RM
// Push y Pull siguen el patrón Lun-Mar (fuerza) / Jue-Vie (técnico).
// En piernas se cruzan: Sentadilla pesada mié / técnica sáb,
// RDL pesado sáb / técnico mié.
//
// EXCEPCIÓN — REMO PENDLAY:
// Nunca baja de 5 reps ni sube de 10. Es un ejercicio técnicamente
// exigente (reset completo cada rep, pierde tensión, técnica se
// degrada rápido bajo fatiga). Cargarlo a RIR 0-1 contribuyó a la
// compensación escapular documentada en M5.
//   - Día fuerza: 5-6 reps @ ~80%
//   - Día técnico: 8-10 reps @ ~70%
//   - S5 (pico): AMRAP con TECHO de 5 reps (si llegas a 5 limpias,
//     paras aunque queden más — mide si llegas a 5, no cuánto más)
//
// 1RM ESTIMADOS BASE (cierre M5):
//   Sentadilla 101kg | Press inclinado 81kg | Press banca 95kg (dato
//   real histórico M3, no estimado) | RDL 78kg | Pendlay 76kg |
//   Curl bíceps 38.5kg | Press francés 40.7kg | Curl martillo 15.7kg
//
// LECCIÓN APLICADA: ningún peso se proyecta hacia marcas históricas
// objetivo. Todo sale del dato real del M5 con margen conservador.

const MESOCICLO_M6 = {
  label: "M6 — 2026",
  tipo: "activo",
  semanas: 6,
  dias: [
    { key: "lun", label: "Lun", titulo: "Push — Fuerza" },
    { key: "mar", label: "Mar", titulo: "Pull — Fuerza" },
    { key: "mie", label: "Mié", titulo: "Legs A" },
    { key: "jue", label: "Jue", titulo: "Push — Técnico" },
    { key: "vie", label: "Vie", titulo: "Pull — Técnico" },
    { key: "sab", label: "Sáb", titulo: "Legs B" },
  ],
  plan: {
    // ── LUNES — PUSH FUERZA ──
    lun: [
      { nombre: "Press Inclinado (barra)", series: 3, rol: "fuerza",
        semanas: ["62.5kg x 6","65kg x 5","67.5kg x 5","70kg x 4","72.5kg x 4 (pico)","45kg x 10"] },
      { nombre: "Press Banca (barra)", series: 3, rol: "fuerza",
        nota: "Reingreso tras meses sin el patrón. Si S1 sale RIR 0-1 no recalibrar de inmediato — dar 1 semana de adaptación.",
        semanas: ["72.5kg x 8","77.5kg x 6","80kg x 5","82.5kg x 5","87.5kg x 5 (pico)","55kg x 10"] },
      { nombre: "Elevación Lateral (DB)", series: 2, rol: "accesorio",
        nota: "Sin salto de peso disponible (10kg -> 20kg es +100%). Progresión por reps y luego banda. Ver nota de equipo.",
        semanas: ["10kg x 12","10kg x 14","10kg x 16","10kg x 18","10kg x 20 (pico)","10kg x 12"] },
      { nombre: "Curl Bíceps (barra)", series: 2, rol: "accesorio",
        semanas: ["29kg x 8","30kg x 7","31kg x 6","32.5kg x 6","35kg x 5 (pico)","20kg x 12"] },
      { nombre: "Curl Martillo (DB)", series: 2, rol: "accesorio",
        nota: "Braquial rezagado respecto a bíceps — este es su único estímulo específico.",
        semanas: ["10kg x 12","10kg x 14","12.5kg x 10","12.5kg x 12","12.5kg x 14 (pico)","10kg x 12"] }
    ],

    // ── MARTES — PULL FUERZA ──
    mar: [
      { nombre: "Remo Pendlay (barra)", series: 3, rol: "fuerza",
        nota: "Techo de 5 reps en pico. Nunca a fallo — la técnica se degrada y compromete escápula.",
        semanas: ["55kg x 6","57.5kg x 6","60kg x 5","62.5kg x 5","65kg x AMRAP<=5 (pico)","40kg x 10"] },
      { nombre: "Remo Supino (barra)", series: 3, rol: "fuerza",
        nota: "Reemplaza Remo 1 mano (DB) — bilateral, corrige mejor descompensación.",
        semanas: ["45kg x 8","47.5kg x 8","50kg x 6","52.5kg x 6","57.5kg x 6 (pico)","35kg x 10"] },
      { nombre: "Pullover (DB)", series: 2, rol: "accesorio",
        semanas: ["20kg x 12","20kg x 14","22.5kg x 12","22.5kg x 12","22.5kg x 14 (pico)","15kg x 12"] },
      { nombre: "Press Francés (barra)", series: 2, rol: "accesorio",
        semanas: ["30kg x 10","32.5kg x 8","33kg x 8","35kg x 7","37.5kg x 6 (pico)","22.5kg x 12"] }
    ],

    // ── MIÉRCOLES — LEGS A (Sentadilla fuerza / RDL técnico) ──
    mie: [
      { nombre: "Sentadilla (barra + cuña)", series: 3, rol: "fuerza",
        nota: "Nombre corregido: ya pasa paralelo con disco bajo talón izquierdo, no es parcial. Cuádriceps a 6 series/semana — por debajo de MEV, decisión deliberada. CRITERIO DE PARADA: si hay meseta 2 semanas seguidas (mismo peso/reps/RIR), colapso sostenido, o regresión, entra 2do ejercicio de cuádriceps.",
        semanas: ["80kg x 5","85kg x 5","90kg x 4","95kg x 3","100kg x 3 (pico)","60kg x 8"] },
      { nombre: "RDL sin flexión de rodilla (barra)", series: 3, rol: "tecnico",
        semanas: ["55kg x 10","57.5kg x 10","60kg x 8","62.5kg x 8","65kg x 8 (pico)","40kg x 12"] },
      { nombre: "Hip Thrust (barra)", series: 2, rol: "accesorio",
        semanas: ["40kg x 12","45kg x 12","47.5kg x 10","50kg x 10","55kg x 8 (pico)","30kg x 15"] },
      { nombre: "Crunch Abdominal", series: 2, rol: "core",
        semanas: ["x 15","x 18","x 20","x 20","x 25 (pico)","x 15"] }
    ],

    // ── JUEVES — PUSH TÉCNICO ──
    jue: [
      { nombre: "Press Inclinado (barra)", series: 3, rol: "tecnico",
        nota: "Separación REAL vs día de fuerza: ~72% 1RM y 10 reps, no 2.5kg menos como en M5.",
        semanas: ["47.5kg x 10","50kg x 10","52.5kg x 10","55kg x 9","57.5kg x 8 (pico)","40kg x 12"] },
      { nombre: "Press Banca (barra)", series: 3, rol: "tecnico",
        semanas: ["55kg x 10","57.5kg x 10","60kg x 10","62.5kg x 9","65kg x 8 (pico)","45kg x 12"] },
      { nombre: "Elevación Lateral (DB)", series: 2, rol: "accesorio",
        semanas: ["10kg x 12","10kg x 14","10kg x 16","10kg x 18","10kg x 20 (pico)","10kg x 12"] },
      { nombre: "Curl Bíceps (barra)", series: 2, rol: "accesorio",
        semanas: ["24kg x 12","25kg x 12","26kg x 10","27.5kg x 10","29kg x 10 (pico)","18kg x 15"] },
      { nombre: "Curl Martillo (DB)", series: 2, rol: "accesorio",
        semanas: ["10kg x 14","10kg x 16","10kg x 18","12.5kg x 12","12.5kg x 14 (pico)","10kg x 15"] }
    ],

    // ── VIERNES — PULL TÉCNICO ──
    vie: [
      { nombre: "Remo Pendlay (barra)", series: 3, rol: "tecnico",
        semanas: ["45kg x 10","47.5kg x 10","50kg x 9","52.5kg x 8","55kg x 8 (pico)","35kg x 12"] },
      { nombre: "Remo Supino (barra)", series: 3, rol: "tecnico",
        semanas: ["37.5kg x 12","40kg x 10","42.5kg x 10","45kg x 10","47.5kg x 10 (pico)","30kg x 12"] },
      { nombre: "Pullover (DB)", series: 2, rol: "accesorio",
        semanas: ["17.5kg x 15","20kg x 12","20kg x 14","20kg x 15","20kg x 16 (pico)","15kg x 15"] },
      { nombre: "Press Francés (barra)", series: 2, rol: "accesorio",
        semanas: ["25kg x 12","26kg x 12","27.5kg x 10","29kg x 10","30kg x 10 (pico)","20kg x 15"] }
    ],

    // ── SÁBADO — LEGS B (RDL fuerza / Sentadilla técnico) ──
    sab: [
      { nombre: "RDL sin flexión de rodilla (barra)", series: 3, rol: "fuerza",
        nota: "Técnica corregida en M5 (rígido real, sin flexión). Base calibrada desde ahí, no desde pesos de la técnica híbrida anterior.",
        semanas: ["60kg x 8","62.5kg x 8","65kg x 6","70kg x 6","75kg x 5 (pico)","45kg x 10"] },
      { nombre: "Sentadilla (barra + cuña)", series: 3, rol: "tecnico",
        semanas: ["62.5kg x 10","65kg x 10","70kg x 8","72.5kg x 8","75kg x 8 (pico)","50kg x 10"] },
      { nombre: "Hip Thrust (barra)", series: 2, rol: "accesorio",
        semanas: ["40kg x 12","45kg x 12","47.5kg x 10","50kg x 10","55kg x 8 (pico)","30kg x 15"] },
      { nombre: "Elevación Gemelo (de pie o sentado)", series: 2, rol: "accesorio",
        nota: "Alternar variante según estado del tobillo — si la sentadilla lo dejó fatigado, usar sentado (sóleo).",
        semanas: ["20kg x 15","20kg x 18","22.5kg x 15","22.5kg x 15","25kg x 15 (pico)","15kg x 20"] },
      { nombre: "Crunch Abdominal", series: 2, rol: "core",
        semanas: ["x 15","x 18","x 20","x 20","x 25 (pico)","x 15"] }
    ]
  }
};

// ============================================================
// OBJETIVOS DE PICO (S5) Y PROYECCIÓN
// ============================================================
// Sentadilla 100x3    -> 1RM proy ~110kg (+8%)  = 1.43x peso corporal
// Press inclinado 72.5x4 -> ~82kg (+6%)
// Press banca 87.5x5  -> ~100kg
// RDL 75x5            -> ~87kg (+8%)
// Pendlay 65xAMRAP<=5 -> ~75kg (+7%)
//
// Proyección deliberadamente conservadora (+6-8%) vs el +11-18%
// del M5. Las ganancias neurales post-desbloqueo se agotan.
// LECTURA DE RESULTADOS:
//   +6-8%  -> sistema funcionando como se espera
//   <4%    -> entró fase de hipertrofia; el volumen bajo de
//             cuádriceps (6 series) pasa a ser el limitante real

// ============================================================
// RESTRICCIONES Y NOTAS DE DISEÑO
// ============================================================
//
// 1. VOLUMEN: 3 series en principales, 2 en accesorios. Tope de 3
//    series en el ejercicio principal del día — más de 3 pesadas
//    drenan y comprometen el resto de la sesión (documentado en
//    M5-S3: 4 series de sentadilla -> colapso la semana siguiente).
//
// 2. SIN progresiones por tempo. SIN ejercicios unilaterales.
//
// 3. ESCÁPULA IZQUIERDA: en press, retracción y depresión activas
//    ANTES de sacar la barra del rack, mantener presión de omóplatos
//    contra el banco toda la serie. Si se pierde la posición en
//    alguna serie, esa serie termina ahí. Criterio objetivo, no
//    sensación. (Notas M5-S5: manguito izquierdo compensando.)
//
// 4. ELEVACIÓN LATERAL — problema de equipo sin solución limpia:
//    mancuernas fijas, salto de 10kg a 20kg es +100%. Progresión
//    por reps hasta 20, luego opciones: banda + mancuerna
//    (preferida), inclinación contra pared (cambia perfil de
//    resistencia, tipo polea), o barra de 15kg a una mano.
//    Deltoide lateral queda en ~5 series/semana, bajo MEV — igual
//    que cuádriceps, es dosis mínima deliberada.
//
// 5. PRESS MILITAR: fuera del bloque por el tema de escápula.
//    Reevaluar en M7 con historial limpio. (Nota: la evidencia EMG
//    está dividida sobre si sustituye a laterales para deltoide
//    medio — Campos 2020 sugiere activación similar, pero el peso
//    de la evidencia favorece laterales. No es sustituto.)
//
// 6. DELTOIDE POSTERIOR: sin trabajo directo (face pull descartado).
//    Recibe ~8 series efectivas indirectas de remos. Decisión
//    deliberada, no vacío sin resolver.
//
// 7. CUT ACTIVO durante todo el bloque (objetivo 9%, actualmente
//    ~13.9%). Pliegues confirmaron recomposición real: abdominal
//    20->19mm, suprailíaco 20->18mm, muslo 17->15mm con peso
//    estable. Terreno favorable, no déficit puro.
//    LECTURA SI HAY ESTANCAMIENTO:
//      Solo en sentadilla, resto progresando -> falta volumen
//      Generalizado en varios levantamientos -> déficit energético
//
// 8. FECHAS: pendiente definir fecha de inicio real para el campo
//    `fechas` (formato "DD-DD mes") — necesario para que la
//    auto-detección de semana/día funcione desde el arranque.
// ============================================================
