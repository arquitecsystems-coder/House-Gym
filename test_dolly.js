// ============================================================
// TEST INICIAL — DOLLY
// Para integrar en MESOCICLOS como "TEST" o estructura similar
// Split: Cadena Anterior (sáb) / Cadena Posterior (dom)
// Objetivo del test: encontrar RM real y nivel de progresión
// en los 3 patrones motores prioritarios (flexión, fondo, dominada)
// ============================================================

const TEST_DOLLY = {
  label: "Test inicial — Dolly",
  tipo: "test",
  dias: [
    { key: "sab", label: "Sáb", titulo: "Cadena Anterior — Cuádriceps + Empuje" },
    { key: "dom", label: "Dom", titulo: "Cadena Posterior — Isquios/Glúteo + Tracción" },
  ],
  ejercicios: {
    sab: [
      {
        nombre: "Flexión inclinada (banco)",
        tipo: "patron_motor",
        instruccion: "Prueba la variante más difícil que logres con 5 reps técnica limpia: banco alto → banco medio → banco bajo → rodillas en suelo.",
        registrar: ["variante_lograda", "reps_logradas"],
        gif_busqueda: "incline push up progression"
      },
      {
        nombre: "Búlgaras con mancuerna",
        tipo: "rampa_peso",
        instruccion: "Sube peso progresivamente hasta encontrar el peso de fallo entre 5-8 reps por pierna.",
        registrar: ["peso_kg", "reps_pierna_derecha", "reps_pierna_izquierda"],
        gif_busqueda: "bulgarian split squat dumbbell"
      },
      {
        nombre: "Press inclinado con mancuerna (unilateral)",
        tipo: "rampa_peso",
        instruccion: "Confirma o supera el dato previo (15kg x 5). Rampa corta para validar techo actual.",
        baseline_previo: "15kg x 5 (3 series)",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "single arm incline dumbbell press"
      },
      {
        nombre: "Fondos asistidos (soporte de pared)",
        tipo: "patron_motor",
        instruccion: "Encuentra el nivel de asistencia mínimo con el que logra 5 reps técnica limpia.",
        registrar: ["nivel_asistencia", "reps_logradas"],
        gif_busqueda: "assisted dip band"
      },
      {
        nombre: "Copa a una mano (tríceps)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "single arm overhead tricep extension dumbbell"
      }
    ],
    dom: [
      {
        nombre: "Dead hang",
        tipo: "patron_motor",
        instruccion: "Tiempo colgada de la barra sin soltar.",
        baseline_previo: "1 minuto",
        registrar: ["tiempo_segundos"],
        gif_busqueda: "dead hang pull up bar"
      },
      {
        nombre: "Negativa de dominada",
        tipo: "patron_motor",
        instruccion: "Sube con apoyo o salto, controla la bajada lo más lento posible. Mide segundos de bajada controlada.",
        registrar: ["segundos_bajada", "reps_logradas"],
        gif_busqueda: "negative pull up eccentric"
      },
      {
        nombre: "RDL unilateral con mancuerna",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 6-8 reps por pierna.",
        registrar: ["peso_kg", "reps_pierna_derecha", "reps_pierna_izquierda"],
        gif_busqueda: "single leg romanian deadlift dumbbell"
      },
      {
        nombre: "Remo unilateral con mancuerna",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "single arm dumbbell row bench"
      },
      {
        nombre: "Curl bíceps con mancuerna",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "dumbbell bicep curl"
      },
      {
        nombre: "Lateral inclinado contra pared",
        tipo: "rampa_peso",
        instruccion: "Apoyada contra la pared con inclinación para aumentar tensión en rango medio. Peso con el que controla 10-12 reps técnica limpia.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "leaning lateral raise wall"
      }
    ]
  },
  // Escalas de progresión para los 3 patrones motores prioritarios
  // Usar para definir desde qué punto arranca el mesociclo real
  escalas_progresion: {
    flexion: [
      "Banco alto (manos muy elevadas)",
      "Banco medio",
      "Banco bajo",
      "Rodillas en suelo, manos en suelo",
      "Flexión completa"
    ],
    fondo: [
      "Asistencia máxima (banda fuerte / apoyo de pies)",
      "Asistencia media",
      "Asistencia mínima",
      "Negativas lentas sin asistencia",
      "Fondo completo"
    ],
    dominada: [
      "Dead hang",
      "Negativas lentas (salta arriba, baja en 5s+)",
      "Asistida con banda",
      "Dominada completa"
    ]
  }
};

// ============================================================
// NOTA PARA CLAUDE CODE:
// - Cada ejercicio tiene "gif_busqueda" como término de búsqueda
//   sugerido para encontrar una referencia visual aproximada.
//   Las variantes específicas (banco a una altura particular,
//   soporte de pared concreto) no van a tener match exacto —
//   usar el GIF del patrón base como referencia visual general.
// - El campo "registrar" indica qué inputs debe tener el formulario
//   de captura de resultados para cada ejercicio.
// - tipo: "rampa_peso" = inputs de peso+reps tradicionales
//   tipo: "patron_motor" = inputs de variante/nivel/tiempo según aplique
// - Con los resultados de este test se construye el Mesociclo 1
//   real de Dolly en una sesión de diseño posterior (no automático).
// ============================================================
