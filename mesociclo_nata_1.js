// ============================================================
// MESOCICLO 1 — NATA
// Full Body x3 (Lun/Mié/Vie) — Híbrido técnico — Progresión lineal
// Basado en test real del 18 jul 2026
// ============================================================
//
// CONTEXTO:
// - Nivel: principiante-intermedia, sin periodización previa
// - Objetivo: recomposición corporal (fuerza/músculo + composición)
// - Equipo: barra olímpica, discos, banco, mancuernas fijas hasta 20kg,
//   rack completo. Sin mancuerna ajustable. Sin soporte de dominadas.
// - Press banca: técnica no consolidada, se retira. Press inclinado
//   (sí domina, 25kg×8 limpio) queda como brújula de empuje horizontal.
// - Press militar: chasquido de hombro sin dolor, mejora parcial con
//   depresión escapular activa mejora. Se PAUSA. Sustituido por
//   elevación lateral + pullover en banco (fortalecer estabilización
//   escapular antes de reintroducir empuje vertical en M2).
// - Tipo de bloque: híbrido con sesgo técnico — cargas submáximas,
//   prioridad en consolidar patrón motor antes que fuerza máxima.
// - Progresión: LINEAL (no ondulante) — apropiado para primer bloque
//   sin base de periodización previa.
//
// RMs estimados del test (Epley) — usados para calcular %RM de S1:
//   Sentadilla trasera: 45kg×8 → RM ~57kg
//   RDL: 35kg×8 → RM ~44kg
//   Remo Pendlay: 30kg×8 → RM ~38kg
//   Press inclinado: 25kg×8 → RM ~32kg
//   Zancada estática: 30kg×8/8 → RM ~38kg por pierna
//   Curl bíceps (barra): 10kg×12 → RM ~13kg
//   Hip thrust: 45kg×6 → RM ~54kg
//   Crunch con peso: 20kg×14 → RM ~26kg
//
// S1 arranca en 70-75% del RM estimado (margen conservador, RIR 2-3
// esperado — aplicando la lección aprendida del M5 de Samuel: NUNCA
// proyectar hacia una marca objetivo, partir SIEMPRE del dato real
// con margen amplio).

const MESOCICLO_NATA_1 = {
  label: "M1 — Nata (Full Body técnico)",
  tipo: "activo",
  semanas: 6,
  dias: [
    { key: "lun", label: "Lun", titulo: "Full Body A" },
    { key: "mie", label: "Mié", titulo: "Full Body B" },
    { key: "vie", label: "Vie", titulo: "Full Body A (técnico)" },
  ],
  plan: {
    lun: [
      {
        nombre: "Sentadilla trasera (barra)",
        series: 4,
        semanas: [
          "40kg × 8",      // S1 — 70% RM estimado
          "42.5kg × 8",    // S2
          "45kg × 6-8",    // S3
          "47.5kg × 6",    // S4
          "50kg × 5-6",    // S5 pico
          "32.5kg × 10"    // S6 descarga
        ]
      },
      {
        nombre: "Press inclinado (barra)",
        series: 3,
        semanas: [
          "22.5kg × 8",
          "23.5kg × 8",
          "25kg × 6-8",
          "26kg × 6",
          "27.5kg × 5-6",
          "18kg × 10"
        ]
      },
      {
        nombre: "Curl bíceps (barra)",
        series: 3,
        semanas: [
          "9kg × 10",
          "9.5kg × 10",
          "10kg × 8-10",
          "10.5kg × 8",
          "11kg × 6-8",
          "7kg × 12"
        ]
      },
      {
        nombre: "Plancha (core)",
        series: 3,
        semanas: [
          "35s",
          "40s",
          "40s",
          "45s",
          "45s (pico)",
          "30s"
        ]
      }
    ],
    mie: [
      {
        nombre: "RDL (barra)",
        series: 4,
        semanas: [
          "27.5kg × 8",
          "30kg × 8",
          "32.5kg × 6-8",
          "35kg × 6",
          "37.5kg × 5-6",
          "22.5kg × 10"
        ]
      },
      {
        nombre: "Remo Pendlay (barra)",
        series: 3,
        semanas: [
          "27.5kg × 8",
          "28.5kg × 8",
          "30kg × 6-8",
          "31kg × 6",
          "32.5kg × 5-6",
          "20kg × 10"
        ]
      },
      {
        nombre: "Elevación lateral (mancuerna)",
        series: 3,
        semanas: [
          "4kg × 10",
          "4kg × 12",
          "5kg × 10",
          "5kg × 10",
          "5kg × 8-10 (pico)",
          "3kg × 12"
        ]
      },
      {
        nombre: "Pullover (mancuerna, banco)",
        series: 3,
        semanas: [
          "8kg × 10",
          "8kg × 12",
          "10kg × 10",
          "10kg × 10",
          "10kg × 8-10 (pico)",
          "6kg × 12"
        ]
      }
    ],
    vie: [
      {
        nombre: "Zancada estática (barra)",
        series: 3,
        semanas: [
          "22.5kg × 8/8",
          "24kg × 8/8",
          "25kg × 6-8/8",
          "26kg × 6/6",
          "27.5kg × 5-6 (pico)",
          "17.5kg × 10/10"
        ]
      },
      {
        nombre: "Hip thrust (barra)",
        series: 3,
        semanas: [
          "35kg × 8",
          "37.5kg × 8",
          "40kg × 6-8",
          "42.5kg × 6",
          "45kg × 5-6 (pico)",
          "27.5kg × 10"
        ]
      },
      {
        nombre: "Aperturas en banco (mancuerna)",
        series: 3,
        semanas: [
          "6kg × 10",
          "6kg × 12",
          "8kg × 10",
          "8kg × 10",
          "8kg × 8-10 (pico)",
          "5kg × 12"
        ]
      },
      {
        nombre: "Crunch con peso",
        series: 3,
        semanas: [
          "15kg × 12",
          "16kg × 12",
          "18kg × 10",
          "18kg × 10",
          "20kg × 8-10 (pico)",
          "12kg × 15"
        ]
      }
    ]
  }
};

// ============================================================
// NOTA PARA CLAUDE CODE:
// - Insertar como MESOCICLOS del usuario Nata (verificar cómo está
//   estructurado el sistema multiusuario — si MESOCICLOS es global
//   por HTML o específico por usuario en el JSON de datos, seguir
//   el patrón ya establecido en esa tarea).
// - "tipo: activo" — este es el mesociclo actual/en curso de Nata.
// - Press militar NO aparece en este bloque — deliberadamente
//   pausado. Reevaluar en M2 si el chasquido de hombro mejoró con
//   el trabajo de elevación lateral + pullover de este bloque.
// - Fechas: pendiente definir fecha de inicio real con Nata antes
//   de agregar el campo `fechas` (mismo formato que M5 de Samuel)
//   para que la auto-detección de día/semana funcione correctamente
//   desde el principio — no dejar para después como pasó con M5.
// ============================================================
