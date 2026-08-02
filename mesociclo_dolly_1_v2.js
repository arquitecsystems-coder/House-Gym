// ============================================================
// MESOCICLO 1 — DOLLY (versión 2, corregida por equipo real)
// ============================================================
//
// CORRECCIÓN CRÍTICA: la progresión anterior usaba incrementos de
// 0.5-1kg que NO EXISTEN en el equipo real de Dolly. Su mancuerna
// ajustable solo permite estos valores específicos:
//
//   5lb(2.3kg) - 7.5lb(3.4kg) - 10lb(4.5kg) - 12.5lb(5.7kg) -
//   15lb(6.8kg) - 17.5lb(7.9kg) - 20lb(9.1kg) - 22.5lb(10.2kg) -
//   27.5lb(12.5kg) - 32.5lb(14.7kg) - 37.5lb(17kg) - 42.5lb(19.3kg) -
//   47.5lb(21.5kg) - 52.5lb(23.8kg)
//
// Saltos de 2.5lb (~1.1kg) hasta 22.5lb, luego saltos de 5lb
// (~2.3kg) de ahí en adelante. Esto significa que en pesos más
// altos (búlgaras, RDL) los saltos son grandes — no se puede subir
// 1kg limpio cada semana, hay que progresar en REPS dentro del
// mismo peso disponible antes de saltar al siguiente escalón.
//
// TODA la progresión de abajo usa EXCLUSIVAMENTE estos valores.
// Formato: "peso_lb (peso_kg aprox)".

// ────────────────────────────────────────────────────────────
// Correcciones de equipo/ejecución (ya aplicadas, sin cambio
// respecto a la versión anterior):
// 1. Press inclinado: referencia de test fue con barra 15kg, NO
//    trasladar directo — arranca conservador en mancuerna real.
// 2. Negativas de fondo en banco: confirmado correcto.
// 3. Dominada: es ASISTIDA CON DOBLE BANDA (15-35lb + 40-90lb),
//    movimiento completo, 8 reps — no es negativa. Progresión =
//    reducir asistencia de banda, no repetir negativas.
// ────────────────────────────────────────────────────────────

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
        nota: "Test: banco alto, 18 reps — nivel superado con facilidad.",
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
        nota: "Test: 37.5lb (17kg) × 8/8. Saltos grandes en este rango (17lb ~2.3kg) — progresar en reps dentro del mismo peso antes de subir escalón.",
        semanas: [
          "37.5lb (17kg) × 8/8",
          "37.5lb (17kg) × 10/10",
          "37.5lb (17kg) × 12/12 (si completa, sube el siguiente bloque)",
          "42.5lb (19.3kg) × 6-8/8",
          "42.5lb (19.3kg) × 8-10 (pico)",
          "27.5lb (12.5kg) × 12/12 (descarga)"
        ]
      },
      {
        nombre: "Press inclinado con mancuerna (unilateral)",
        rol: "fuerza",
        series: 3,
        nota: "Referencia de test con barra (15kg) NO se traslada directo. Arranca conservador en el peso real de mancuerna.",
        semanas: [
          "17.5lb (7.9kg) × 8 (por lado)",
          "17.5lb (7.9kg) × 10",
          "20lb (9.1kg) × 6-8",
          "20lb (9.1kg) × 8-10",
          "22.5lb (10.2kg) × 5-6 (pico)",
          "12.5lb (5.7kg) × 10 (descarga)"
        ]
      },
      {
        nombre: "Negativas de fondo (banco)",
        rol: "patron_motor",
        series: 4,
        nota: "Test: 5 reps, banco. Confirmado correcto.",
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
        nota: "Test: 10lb (4.5kg) × 10.",
        semanas: [
          "10lb (4.5kg) × 10",
          "10lb (4.5kg) × 12",
          "12.5lb (5.7kg) × 8-10",
          "12.5lb (5.7kg) × 10",
          "15lb (6.8kg) × 6-8 (pico)",
          "10lb (4.5kg) × 12 (descarga)"
        ]
      }
    ],
    dom: [
      {
        nombre: "Dominada asistida (doble banda)",
        rol: "patron_motor",
        series: 4,
        nota: "Test: 8 reps limpias, doble banda (15-35lb + 40-90lb). Progresión = REDUCIR asistencia, no repetir negativas.",
        semanas: [
          "Doble banda × 8-9",
          "Doble banda × 10",
          "Solo banda gruesa (40-90lb) × 6-8",
          "Solo banda gruesa × 8-9",
          "Solo banda gruesa × 9-10 (pico)",
          "Doble banda × 10 (descarga)"
        ]
      },
      {
        nombre: "RDL unilateral con mancuerna",
        rol: "fuerza",
        series: 3,
        nota: "Test: 37.5lb (17kg) × 14/14 — RIR alto, margen amplio.",
        semanas: [
          "37.5lb (17kg) × 10/10",
          "42.5lb (19.3kg) × 8-10",
          "42.5lb (19.3kg) × 10-12",
          "47.5lb (21.5kg) × 6-8",
          "47.5lb (21.5kg) × 8-10 (pico)",
          "32.5lb (14.7kg) × 12 (descarga)"
        ]
      },
      {
        nombre: "Remo unilateral con mancuerna",
        rol: "fuerza",
        series: 3,
        nota: "Test: 22.5lb (10.2kg) × 9.",
        semanas: [
          "20lb (9.1kg) × 8-10",
          "20lb (9.1kg) × 10-12",
          "22.5lb (10.2kg) × 8",
          "22.5lb (10.2kg) × 10",
          "22.5lb (10.2kg) × 10-12 (pico)",
          "15lb (6.8kg) × 12 (descarga)"
        ]
      },
      {
        nombre: "Curl bíceps con mancuerna",
        rol: "accesorio",
        series: 3,
        nota: "Test: 10lb (4.5kg) × 8.",
        semanas: [
          "10lb (4.5kg) × 10",
          "10lb (4.5kg) × 12",
          "12.5lb (5.7kg) × 8-10",
          "12.5lb (5.7kg) × 10",
          "15lb (6.8kg) × 6-8 (pico)",
          "10lb (4.5kg) × 12 (descarga)"
        ]
      },
      {
        nombre: "Lateral inclinado contra pared",
        rol: "accesorio",
        series: 3,
        nota: "Test: 5lb (2.3kg) × 15 — peso conservador, margen amplio.",
        semanas: [
          "7.5lb (3.4kg) × 12",
          "7.5lb (3.4kg) × 15",
          "10lb (4.5kg) × 10-12",
          "10lb (4.5kg) × 12",
          "10lb (4.5kg) × 12-15 (pico)",
          "5lb (2.3kg) × 15 (descarga)"
        ]
      }
    ]
  }
};

// ============================================================
// NOTA PARA CLAUDE CODE:
// - Esta versión REEMPLAZA cualquier versión previa de
//   MESOCICLO_DOLLY_1 que ya se haya integrado — la anterior tenía
//   pesos fraccionarios (0.5kg, 1kg) no alcanzables con el equipo
//   real. Usar SOLO esta versión.
// - Mostrar el peso en lb como unidad principal en la UI para
//   Dolly específicamente sería lo más práctico (ya que así está
//   marcada su mancuerna físicamente), con el kg aproximado entre
//   paréntesis como referencia — evaluar si esto requiere un campo
//   de preferencia de unidad por usuario o si alcanza con dejarlo
//   como texto libre en el campo de peso (ej: "37.5lb (17kg)")
//   igual que está en este documento.
// - Pendiente fecha de inicio real para el campo `fechas`.
// ============================================================
