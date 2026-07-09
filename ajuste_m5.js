// ============================================================
// AJUSTE M5 — Tren inferior (rediseño completo S2-S6)
//            + Tren superior (recalibración progresión)
// Contexto: S1 ya ejecutada (lunes y miércoles), no se toca.
// Este ajuste aplica desde S2 en adelante.
// ============================================================

// ── CAMBIO 1: Estructura de Lower A/B ──
// Sentadilla parcial reemplaza búlgaras como ejercicio principal
// de cuádriceps. Búlgaras salen del programa.
// Hip thrust entra como accesorio de glúteo (nuevo).
// RDL mantiene rol principal de isquios/glúteo, con técnica
// corregida (sin flexión de rodilla — RDL rígido real).
//
// Lógica fuerza/técnico por día (igual que M3/M4):
// - Miércoles (Lower A): Sentadilla = FUERZA (peso alto, primero
//   en la sesión). RDL = técnico/volumen moderado.
// - Sábado (Lower B): RDL = FUERZA (peso alto, primero en la
//   sesión). Sentadilla = TÉCNICO (peso menor, foco en control
//   y profundidad, segundo lugar).
//
// Sentadilla parcial: el rango de movimiento actual (~110-115°,
// por encima de 90°) está limitado por dorsiflexión de tobillo,
// que progresa en timeline independiente vía protocolo de rehab
// (pestaña Rehab). NO se le pide al usuario "bajar más" como
// objetivo de progresión — el ejercicio progresa por CARGA dentro
// del rango disponible cada semana, igual que cualquier otro
// ejercicio. Si el rango mejora por el lado del protocolo de
// rehab, se aprovecha y se registra, pero no es la métrica de
// progresión activa de este ejercicio.

const LOWER_A_MIE = [
  {
    nombre: "Sentadilla parcial (barra)",
    rol: "fuerza",
    series: 4,
    nota: "Peso corporal actual del rango: ~110-115° flexión de rodilla (por encima de paralelo). Dato base: 55kg × 8 a RIR 4 (28 jun).",
    progresion: {
      S2: "60kg × 8 (RIR ~3)",
      S3: "65kg × 6-8",
      S4: "70kg × 5-6",
      S5: "75kg × 5 (pico)",
      S6: "45kg × 8 (descarga)"
    }
  },
  {
    nombre: "RDL sin flexión de rodilla (barra)",
    rol: "tecnico",
    series: 3,
    nota: "Técnica corregida desde 28 jun — RDL rígido real, no híbrido con flexión de rodilla. Dato base: 55kg × 4 a RIR 2 (28 jun) — recalibrar desde aquí, NO desde el peso de la técnica anterior.",
    progresion: {
      S2: "52.5kg × 6-8",
      S3: "55kg × 6-8",
      S4: "57.5kg × 6",
      S5: "60kg × 5-6 (pico)",
      S6: "37.5kg × 8 (descarga)"
    }
  },
  {
    nombre: "Hip thrust (mancuerna en banco)",
    rol: "accesorio",
    series: 3,
    nota: "Ejercicio nuevo — sin barra ni rack, mancuerna apoyada sobre cadera en banco. Dato base: 25kg × 10 sin fallo (28 jun), previo 15kg × 15. Rango de trabajo objetivo: 10-15 reps (no bajar a rangos de fuerza 6-8 todavía, técnica aún asentándose).",
    progresion: {
      S2: "25kg × 12",
      S3: "27.5kg × 12",
      S4: "30kg × 10-12",
      S5: "32.5kg × 10 (pico)",
      S6: "20kg × 12 (descarga)"
    }
  },
  {
    nombre: "Elevación de pie o sentado (gemelo/sóleo)",
    rol: "accesorio",
    series: 3,
    nota: "Alternar variante (de pie / sentado) según estado del tobillo ese día — si la sentadilla dejó el tobillo fatigado, usar variante sentada (sóleo) que no depende de dorsiflexión bajo carga de pie.",
    progresion: {
      S2: "× 12-15",
      S3: "× 12-15",
      S4: "× 15",
      S5: "× 15 (pico)",
      S6: "× 12 (descarga)"
    }
  }
];

const LOWER_B_SAB = [
  {
    nombre: "RDL sin flexión de rodilla (barra)",
    rol: "fuerza",
    series: 4,
    nota: "Mismo ejercicio que miércoles, rol invertido — aquí es el principal de fuerza del día, va primero en la sesión.",
    progresion: {
      S2: "55kg × 6-8",
      S3: "57.5kg × 6-8",
      S4: "60kg × 5-6",
      S5: "62.5kg × 5 (pico)",
      S6: "40kg × 8 (descarga)"
    }
  },
  {
    nombre: "Sentadilla parcial (barra)",
    rol: "tecnico",
    series: 3,
    nota: "Mismo ejercicio que miércoles, rol invertido — aquí es técnico, peso menor que el día de fuerza, foco en control y profundidad. Segundo lugar en la sesión.",
    progresion: {
      S2: "52.5kg × 8-10",
      S3: "55kg × 8-10",
      S4: "57.5kg × 8",
      S5: "60kg × 6-8 (pico)",
      S6: "37.5kg × 10 (descarga)"
    }
  },
  {
    nombre: "Hip thrust (mancuerna en banco)",
    rol: "accesorio",
    series: 3,
    nota: "Mismo esquema que miércoles.",
    progresion: {
      S2: "25kg × 12",
      S3: "27.5kg × 12",
      S4: "30kg × 10-12",
      S5: "32.5kg × 10 (pico)",
      S6: "20kg × 12 (descarga)"
    }
  },
  {
    nombre: "Elevación de pie o sentado (gemelo/sóleo)",
    rol: "accesorio",
    series: 3,
    nota: "Mismo esquema que miércoles.",
    progresion: {
      S2: "× 12-15",
      S3: "× 12-15",
      S4: "× 15",
      S5: "× 15 (pico)",
      S6: "× 12 (descarga)"
    }
  }
];

// ── CAMBIO 2: Recalibración tren superior ──
// S1 ejecutada mostró colapso de volumen en set 3 (RIR 0-1,
// caída a 3 reps desde objetivo de 5) — arrancó demasiado alto.
// S1 NO se modifica (ya ejecutada), el ajuste aplica desde S2.

const PRESS_INCLINADO_AJUSTE = {
  nombre: "Press Inclinado (barra)",
  nota: "S1 real: 62.5kg × 5,5,3 (RIR 1,0,1) — colapso en set 3, punto de partida fue alto. Recalibrar progresión desde S2 con incremento más conservador.",
  progresion_original: {
    S2: "65kg × 5", S3: "67.5kg × 4-5", S4: "70kg × 3-4", S5: "72.5kg × 3+", S6: "47kg × 10"
  },
  progresion_ajustada: {
    S2: "62.5kg × 5 (repetir, buscar 5-5-5 limpio antes de subir)",
    S3: "65kg × 5",
    S4: "67.5kg × 4-5",
    S5: "70kg × 3-5 (pico)",
    S6: "45kg × 10 (descarga)"
  }
};

const CURL_BICEPS_AJUSTE = {
  nombre: "Curl Bíceps (barra)",
  nota: "S1 real: 27.5kg × 7,6,5 (RIR 1 en las tres) — también al límite para S1. Recalibrar desde S2.",
  progresion_original: {
    S2: "29kg × 8", S3: "30kg × 6-8", S4: "31kg × 6", S5: "32kg × 4-6", S6: "21kg × 10"
  },
  progresion_ajustada: {
    S2: "27.5kg × 7-8 (repetir, buscar consistencia entre sets)",
    S3: "29kg × 6-8",
    S4: "30kg × 6",
    S5: "31-32kg × 5-6 (pico)",
    S6: "20kg × 10 (descarga)"
  }
};

// ============================================================
// NOTA PARA CLAUDE CODE:
// - Búlgaras se ELIMINAN del Lower A y Lower B del M5 (no de
//   mesociclos anteriores, que quedan como registro histórico).
// - S1 (lunes y miércoles) YA ESTÁ EJECUTADA — no modificar esos
//   registros ni el plan de esa semana específica.
// - El campo "rol" (fuerza/tecnico/accesorio) es informativo para
//   mostrar en la UI si se desea, no es obligatorio renderizarlo
//   distinto — pero sí debe respetarse el ORDEN de ejercicios
//   dentro de cada día según como está listado arriba (el de
//   rol "fuerza" siempre va primero).
// - Ondulación de volumen (variar número de series por semana)
//   queda explícitamente pendiente para M6 — no implementar en
//   este ajuste, mantener series fijas como están especificadas.
// ============================================================
