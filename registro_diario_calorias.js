// ============================================================
// RENOMBRAR "ACTIVIDAD" → "REGISTRO DIARIO"
// + Nuevo módulo: Contador de calorías/macros personalizado
// + Cruce inteligente con datos de Cut
// ============================================================
//
// CONTEXTO:
// La pestaña Actividad (pasos + cardio) pasa a llamarse
// "Registro Diario" — mismo alcance general (disponible para
// cualquier usuario que inicie Cut, como ya estaba definido),
// pero ahora agrupa TODO el tracking diario de estilo de vida:
// pasos, cardio, Y el nuevo contador de calorías/macros.
//
// Nota: para Nata esta pestaña sigue reemplazada por "Hábitos"
// (⚛️), eso no cambia. Este cambio aplica a Samuel/Dolly y
// cualquier usuario futuro que use Actividad/Registro Diario.

// ────────────────────────────────────────────────────────────
// 1. BIBLIOTECA DE ALIMENTOS PERSONAL
// ────────────────────────────────────────────────────────────
//
// Lista de alimentos definida por el usuario, NO un catálogo
// genérico precargado. Cada usuario construye la suya con los
// alimentos que realmente consume (incluyendo cortes/productos
// locales que no existen en apps de calorías internacionales,
// ej: "Carne molida 80/20", "Carne molida 75/25", "Brazuelo de
// cerdo").
//
// Estructura por alimento:
//   {
//     id: string único,
//     nombre: string (texto libre),
//     caloriasPor100g: number,
//     proteinaPor100g: number,
//     carbosPor100g: number,
//     grasaPor100g: number
//   }
//
// SIEMPRE por 100g — unidad fija, sin excepciones. Si el usuario
// quiere registrar una porción completa, calcula el equivalente
// en gramos al momento de loggear (ver sección 2).
//
// CRUD completo: agregar alimento nuevo, editar, eliminar. Sin
// límite de cantidad de alimentos en la biblioteca.

// ────────────────────────────────────────────────────────────
// 2. REGISTRO DIARIO DE COMIDAS
// ────────────────────────────────────────────────────────────
//
// Por cada entrada de comida registrada ese día:
//   {
//     fecha: "YYYY-MM-DD",
//     alimentoId: string (referencia a la biblioteca),
//     gramos: number,
//     // calculado automáticamente al guardar:
//     calorias: (caloriasPor100g / 100) * gramos,
//     proteina: (proteinaPor100g / 100) * gramos,
//     carbos: (carbosPor100g / 100) * gramos,
//     grasa: (grasaPor100g / 100) * gramos
//   }
//
// UI: selector de alimento (buscador/dropdown de la biblioteca)
// + input de gramos → muestra al instante las calorías/macros
// calculados de esa entrada antes de guardar.
//
// Un día puede tener múltiples entradas (varias comidas). Mostrar
// lista de entradas del día con opción de eliminar cada una.
//
// TOTALES DEL DÍA (suma de todas las entradas):
//   - Calorías totales
//   - Proteína, carbos, grasa totales
//   - Comparación visual contra el objetivo de calorías definido
//     en el setup de Cut (campo `cals` que ya existe en
//     `cutDatos.setup`) — ej: "1,850 / 1,950 kcal objetivo"

// ────────────────────────────────────────────────────────────
// 3. CRUCE INTELIGENTE — CALORÍAS REALES VS PESO REAL
// ────────────────────────────────────────────────────────────
//
// Esta es la pieza de valor real: derivar el gasto calórico REAL
// del usuario comparando lo que comió vs cómo cambió su peso,
// en vez de confiar solo en la fórmula estimada del setup de Cut.
//
// Cálculo (revisar semanalmente, cuando hay suficientes datos):
//   1. Promedio de calorías diarias consumidas esa semana
//      (de los registros de este módulo)
//   2. Cambio de peso esa semana (de `cutDatos.registrosDiarios`
//      / `registrosSemanales`, ya existente)
//   3. Déficit/superávit real implícito:
//      cambio_peso_kg * 7700 = kcal netas de la semana
//      gasto_real_diario = promedio_calorias_consumidas -
//                           (kcal_netas_semana / 7)
//   4. Comparar gasto_real_diario vs el déficit planeado en el
//      setup (`cutDatos.setup.deficitDiario` y `cals`)
//
// MOSTRAR al usuario, en una tarjeta dentro de Registro Diario
// (o accesible desde ahí), algo como:
//   "Esta semana consumiste en promedio X kcal/día. Tu peso
//    cambió Y kg. Eso implica un gasto calórico real de Z kcal/día
//    — [coincide con lo planeado / está por encima / está por
//    debajo] de lo calculado en tu setup."
//
// Esto SOLO se calcula si hay suficiente adherencia de registro
// esa semana (mínimo 4-5 días de comida registrada Y al menos
// 3-4 días de peso registrado) — si no, mostrar mensaje de
// "datos insuficientes esta semana para calcular" en vez de un
// número poco confiable.

// ────────────────────────────────────────────────────────────
// IMPLEMENTACIÓN
// ────────────────────────────────────────────────────────────
//
// - Renombrar pestaña "Actividad" → "Registro Diario" en toda la
//   UI (nav, títulos). Mismo ícono actual o ajustar si Code
//   considera que uno distinto representa mejor el alcance
//   ampliado (pasos + cardio + comida).
// - La biblioteca de alimentos y los registros de comida
//   persisten y sincronizan igual que el resto: localStorage +
//   push a data-{usuario}.json vía GitHub, mismo patrón ya
//   establecido.
// - El módulo de calorías es una sección más dentro de Registro
//   Diario, junto a pasos y cardio — no una pestaña separada.
// - Esto es general para cualquier usuario con Cut activo, mismo
//   alcance que ya tenía Actividad — excepto Nata, que sigue con
//   Hábitos en su lugar.
// ============================================================
