// ============================================================
// MESOCICLO 1 — DOLLY (versión corregida)
// Split: Cadena Anterior (sáb) / Cadena Posterior (dom)
// Basado en test real, con correcciones de equipo aplicadas
// ============================================================
//
// CORRECCIONES APLICADAS SOBRE EL TEST ORIGINAL:
//
// 1. "Press inclinado con mancuerna (unilateral)" — el test se
//    ejecutó con BARRA de 15kg × 5 (en casa de Samuel, único
//    equipo disponible ese día). El programa real usa mancuerna
//    unilateral. Conversión aproximada bilateral→unilateral:
//    ~50-60% del peso total por lado (ajustado hacia abajo por
//    mayor exigencia de estabilización unilateral).
//    15kg barra → referencia de fuerza general, NO carga directa.
//    Punto de partida real estimado: 8kg por lado.
//
// 2. "Negativas de fondo (excéntrico)" — CONFIRMADO correcto,
//    ejecutado en banco (apoyo de manos en el borde), 5 reps.
//    Sin cambios respecto al dato original.
//
// 3. "Dominada" — el test registró esto como "Negativa de
//    dominada" (8 reps, 0s bajada), pero la ejecución REAL fue
//    dominada asistida con DOBLE BANDA combinada (15-35lb +
//    40-90lb ≈ 25-57kg de asistencia total, variable según punto
//    del recorrido), movimiento COMPLETO (sube hasta barbilla
//    sobre la barra, baja, repite) — 8 reps limpias.
//    Esto es un nivel de progresión más avanzado que "negativa
//    pura": ya está en fase de "dominada asistida con banda" de
//    la escala de progresión, no en fase de negativas.
//    Progresión correcta: reducir asistencia de banda
//    gradualmente (quitar banda gruesa primero, quedar solo con
//    la delgada, luego sin banda) — NO trabajar negativas puras,
//    ya las superó.

// ────────────────────────────────────────────────────────────
// ESCALA DE PROGRESIÓN ACTUALIZADA — DOMINADA
// (reemplaza la escala genérica original para Dolly específicamente,
// dado que ya está más avanzada de lo previsto)
// ────────────────────────────────────────────────────────────
const ESCALA_DOMINADA_DOLLY = [
  "Asistida doble banda (15-35lb + 40-90lb) — ACTUAL: 8 reps limpias",
  "Asistida banda única gruesa (40-90lb) — quitar la banda delgada",
  "Asistida banda única delgada (15-35lb)",
  "Negativas lentas sin banda (bajada controlada 4-5s)",
  "Dominada completa sin asistencia"
];

const MESOCICLO_DOLLY_1 = {
  label: "M1 — Dolly",
  tipo: "activo",
  semanas: 6,
  dias: [
    { key: "sab", label: "Sáb", titulo: "Cadena Anterior — Cuádriceps + Empuje" },
    { key: "dom", label: "Dom", titulo: "Cadena Posterior — Isquios/Glúteo + Tracción" },
  ],
  plan: {
    sab: [
      {
        nombre: "Flexión inclinada (banco)",
        rol: "patron_motor",
        series: 4,
        nota: "Test: Banco alto, 18 reps logradas — nivel de asistencia alto todavía superado con facilidad. Progresar bajando la altura del banco (banco alto → medio) esta semana, no repetir banco alto.",
        semanas: [
          "Banco medio × 8-10",
          "Banco medio × 10-12",
          "Banco medio-bajo × 8-10",
          "Banco bajo × 6-8",
          "Banco bajo × 8-10 (pico)",
          "Banco medio × 12 (descarga)"
        ]
      },
      {
        nombre: "Búlgaras con mancuerna",
        rol: "fuerza",
        series: 3,
        nota: "Test: 17.5kg × 8/8.",
        semanas: [
          "15kg × 8/8",
          "16kg × 8/8",
          "17.5kg × 6-8/8",
          "18kg × 6/6",
          "19kg × 5-6 (pico)",
          "12kg × 10/10"
        ]
      },
      {
        nombre: "Press inclinado con mancuerna (unilateral)",
        rol: "fuerza",
        series: 3,
        nota: "Referencia de test fue con barra (15kg×5) — NO trasladar directo. Punto de partida real estimado en mancuerna unilateral: 8kg/lado con margen conservador.",
        semanas: [
          "8kg × 8 (por lado)",
          "8.5kg × 8",
          "9kg × 6-8",
          "9.5kg × 6",
          "10kg × 5-6 (pico)",
          "6kg × 10"
        ]
      },
      {
        nombre: "Negativas de fondo (banco)",
        rol: "patron_motor",
        series: 4,
        nota: "Test: 5 reps logradas, banco. Confirmado correcto tal como se registró.",
        semanas: [
          "6 reps",
          "6-7 reps",
          "7 reps",
          "8 reps",
          "8-9 reps (pico)",
          "5 reps (descarga)"
        ]
      },
      {
        nombre: "Copa a una mano (tríceps)",
        rol: "accesorio",
        series: 3,
        nota: "Test: 5kg × 10.",
        semanas: [
          "5kg × 10",
          "5.5kg × 10",
          "6kg × 8-10",
          "6kg × 8",
          "6.5kg × 6-8 (pico)",
          "4kg × 12"
        ]
      }
    ],
    dom: [
      {
        nombre: "Dominada asistida (doble banda)",
        rol: "patron_motor",
        series: 4,
        nota: "Test: 8 reps limpias con doble banda (15-35lb + 40-90lb). Ya superó fase de negativas — progresión es REDUCIR asistencia, no repetir. Ver ESCALA_DOMINADA_DOLLY.",
        semanas: [
          "Doble banda × 8-9",
          "Doble banda × 10",
          "Solo banda gruesa (40-90lb) × 6-8",
          "Solo banda gruesa × 8-9",
          "Solo banda gruesa × 9-10 (pico)",
          "Doble banda × 10 (descarga, recuperar margen)"
        ]
      },
      {
        nombre: "RDL unilateral con mancuerna",
        rol: "fuerza",
        series: 3,
        nota: "Test: 17.5kg × 14/14 — RIR alto probable, margen amplio para subir.",
        semanas: [
          "17.5kg × 10/10",
          "19kg × 10/10",
          "20kg × 8-10",
          "21kg × 8",
          "22.5kg × 6-8 (pico)",
          "14kg × 12"
        ]
      },
      {
        nombre: "Remo unilateral con mancuerna",
        rol: "fuerza",
        series: 3,
        nota: "Test: 10kg × 9.",
        semanas: [
          "9kg × 8-10",
          "9.5kg × 8-10",
          "10kg × 8",
          "10.5kg × 6-8",
          "11kg × 6 (pico)",
          "7kg × 12"
        ]
      },
      {
        nombre: "Curl bíceps con mancuerna",
        rol: "accesorio",
        series: 3,
        nota: "Test: 5kg × 8.",
        semanas: [
          "4.5kg × 10",
          "5kg × 10",
          "5.5kg × 8-10",
          "6kg × 8",
          "6.5kg × 6-8 (pico)",
          "4kg × 12"
        ]
      },
      {
        nombre: "Lateral inclinado contra pared",
        rol: "accesorio",
        series: 3,
        nota: "Test: 2.5kg × 15 — peso muy conservador, hay margen amplio.",
        semanas: [
          "3kg × 12",
          "3kg × 12-15",
          "3.5kg × 10-12",
          "3.5kg × 10",
          "4kg × 8-10 (pico)",
          "2.5kg × 15"
        ]
      }
    ]
  }
};

// ============================================================
// NOTA PARA CLAUDE CODE:
// - Verificar si ya existe un mesociclo previo de Dolly en el
//   código o en data-dolly.json que haya que reemplazar/sobreescribir,
//   o si esta es la primera versión que se integra.
// - Pendiente definir fecha de inicio real con Dolly para el
//   campo `fechas` (mismo patrón que Samuel y Nata) antes de dar
//   por completa la auto-detección de posición.
// ============================================================
