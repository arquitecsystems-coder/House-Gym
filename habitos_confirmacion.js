// ============================================================
// HÁBITOS — NATA: mensajes motivadores + resumen semanal + curva
// Confirmación final de las 3 decisiones pendientes
// ============================================================

// ────────────────────────────────────────────────────────────
// 1. MENSAJES MOTIVADORES DIARIOS — TONO AMOROSO
// ────────────────────────────────────────────────────────────
// Umbrales: 50% / 80% / 100% de hábitos cumplidos ese día.
// Mensajes rotan de una lista (3-4 variantes por nivel) para no
// repetirse. Tono cálido, cercano, de acompañamiento — NO directo
// ni seco, NO genérico de app de autoayuda corporativa.

const MENSAJES_HABITOS = {
  100: [
    "Todos hoy. Te lo mereces, mi amor 💚",
    "Cumpliste con todo. Así se cuida una a sí misma.",
    "100% hoy — orgullosa de ti.",
    "Ningún hábito quedó atrás hoy. Qué bonito verte así."
  ],
  80: [
    "Casi todo hoy, y eso también cuenta muchísimo.",
    "Vas muy bien. Un día más de constancia.",
    "La mayoría cumplida — sigue así, vas hermoso.",
    "Buen día. No todo tiene que ser perfecto para ser valioso."
  ],
  50: [
    "La mitad hoy, y está bien. Mañana sigues.",
    "Un día parcial también es un día que sumaste.",
    "No fue completo, pero tampoco fue en vano.",
    "Poquito a poquito. Así se construyen los hábitos de verdad."
  ]
};

// Lógica: al guardar el registro del día, calcular % de hábitos
// cumplidos. Si cruza un umbral (50/80/100) por primera vez ese
// día, mostrar un mensaje aleatorio de la lista correspondiente
// (toast o banner suave, no intrusivo).

// ────────────────────────────────────────────────────────────
// 2. RESUMEN SEMANAL — confirmado como se propuso
// ────────────────────────────────────────────────────────────
// Aparece automáticamente al iniciar una semana nueva (lunes),
// mostrando resumen de la semana anterior. Se puede cerrar y queda
// archivado en el histórico (no se repite/reaparece después de
// cerrado, pero es consultable).
//
// Contenido del resumen:
//   - % promedio de cumplimiento de la semana
//   - Hábito más consistente (mayor % de cumplimiento individual)
//   - Hábito con más dificultad (menor % de cumplimiento)
//   - Racha más larga de días con 100% esa semana
//
// Tono del resumen también amoroso, coherente con los mensajes
// diarios — ej: "Esta semana, Lectura fue tu hábito más fiel 📖.
// Cardio te costó un poco más, y está bien — la próxima semana es
// nueva."

// ────────────────────────────────────────────────────────────
// 3. CURVA DE CRECIMIENTO HISTÓRICA — confirmado como se propuso
// ────────────────────────────────────────────────────────────
// Gráfico de línea, % de cumplimiento general POR SEMANA (no por
// día — el día es ruidoso, la semana muestra tendencia real).
// Toda la historia disponible desde el primer registro, con scroll
// horizontal si se hace largo.
// Filtro opcional: seleccionar un hábito específico para ver su
// curva individual en vez del % general combinado.
// ============================================================
