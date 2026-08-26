// ============================================================
// REGISTRO DIARIO — CALORÍAS: Historial + Análisis + Colores
// ============================================================
//
// PROBLEMA ACTUAL: el módulo de calorías solo muestra el día de
// hoy. No hay forma de ver días anteriores, ni promedios, lo cual
// bloquea el cruce de datos con el peso (ya definido en la spec
// original de registro_diario_calorias.js).

// ────────────────────────────────────────────────────────────
// 1. CÓDIGO DE COLOR POR MACRO (aplicar en TODA la UI de calorías,
//    no solo en un lugar — totales del día, barras, análisis, etc.)
// ────────────────────────────────────────────────────────────
//   Carbohidratos → rojo
//   Proteína      → verde
//   Grasa         → naranja
//   Calorías      → azul
// Usar estos colores de forma consistente en textos, barras,
// donas y cualquier gráfico del módulo.

// ────────────────────────────────────────────────────────────
// 2. NAVEGACIÓN DE HISTORIAL DIARIO
// ────────────────────────────────────────────────────────────
// En la vista principal de Calorías (dentro de Registro Diario),
// agregar navegación tipo calendario — flechas ← → para moverse
// día por día (igual al patrón "< Hoy >" de apps de nutrición
// estándar), o reutilizar el heatmap/calendario que ya existe en
// Rehab si encaja mejor con el lenguaje visual de Forge — Code
// decide cuál se integra mejor, ambos cumplen la función.
// Al navegar a un día anterior, mostrar los mismos totales y
// entradas de comida de ESE día (no solo hoy).

// ────────────────────────────────────────────────────────────
// 3. VENTANA DE "ANÁLISIS" (nueva, separada)
// ────────────────────────────────────────────────────────────
// Un botón o ícono (···  o "Análisis") dentro de la vista de
// Calorías que abre una vista/modal nueva, NO inline en el mismo
// lugar. Estructura de esa ventana:
//
//   a) Selector de INTERVALO: últimos 7 días / últimos 14 días /
//      últimos 30 días (mínimo estas 3 opciones)
//
//   b) Selector de TIPO: Calorías / Proteína / Carbohidratos /
//      Grasa (cambia qué se grafica, un tipo a la vez)
//
//   c) Gráfico de barras verticales, un día por barra, con el
//      valor de ESE día para el tipo seleccionado. Última barra
//      (o barra destacada aparte, en negro/distinta) = PROMEDIO
//      del intervalo completo.
//      Línea punteada horizontal de referencia = el objetivo
//      definido en el setup de Cut (`cals` para calorías; si hay
//      objetivos de macro definidos, usar esos, si no, omitir la
//      línea para proteína/carbs/grasa).
//
//   d) Debajo del gráfico, sección "Promedio" expandible con lista
//      día por día del intervalo (hoy, ayer, y así hacia atrás),
//      cada uno mostrando el valor de ese día y tocable para ver
//      el detalle completo de las comidas registradas ese día.
//
// Esta ventana de Análisis es la pieza que faltaba para poder
// cruzar calorías reales vs peso real (ya especificado en
// registro_diario_calorias.js, sección 3) — sin esto, ese cruce
// no tenía de dónde sacar el promedio semanal visible para el
// usuario.

// ────────────────────────────────────────────────────────────
// 4. DONAS POR MACRO EN EL PROMEDIO SEMANAL
// ────────────────────────────────────────────────────────────
// Además del gráfico de barras del Análisis, en el resumen
// semanal (o en la vista principal de Calorías) mostrar 4 donas
// individuales pequeñas, una por: Calorías, Proteína, Carbohidratos,
// Grasa — cada una coloreada según el código de color de la
// sección 1, mostrando promedio consumido vs objetivo de esa
// semana. Mismo componente donut que ya existe para pasos en
// Actividad/Registro Diario, generalizado a estos 4 valores.
//
// ============================================================
// NOTA: esto es una AMPLIACIÓN de registro_diario_calorias.js,
// no lo reemplaza — la biblioteca de alimentos, el registro por
// gramos, y el cruce de inteligencia con Cut siguen igual.
// ============================================================
