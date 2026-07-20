// ============================================================
// NUEVA PESTAÑA: HÁBITOS (reemplaza Actividad)
// Específica de Nata — NO general para todos los usuarios
// (a diferencia de Rehab/Cut que sí son generales)
// Ícono: 📖 (libro)
// ============================================================

// ────────────────────────────────────────────────────────────
// CONTEXTO
// ────────────────────────────────────────────────────────────
// Nata quiere un tracker de hábitos personalizable, inspirado en
// un tablero físico que ya usa (foto adjunta en la conversación):
// calendario semanal L-M-M-J-V-S con checks, y una lista abierta
// de hábitos a trackear (no fija como pasos/cardio).
//
// Ejemplos reales de su tablero: Lectura, 12000 pasos, Cardio,
// Sol 10am, Meditación, Sin azúcar 7 días, Agua en termo, Vaso sal
// y limón.
//
// Esto REEMPLAZA la pestaña Actividad (pasos+cardio fijos) que ya
// existe — pero SOLO para el usuario Nata. Los demás usuarios
// (Samuel, Dolly) siguen viendo la pestaña Actividad tal como está
// si la tienen habilitada, o ninguna de las dos si no la tienen.
// Esto requiere que la pestaña sea configurable por usuario, mismo
// patrón que ya se estableció para Rehab en la tarea de "plantilla
// de usuario limpio".

// ────────────────────────────────────────────────────────────
// ESTRUCTURA DE DATOS
// ────────────────────────────────────────────────────────────
//
// Lista de hábitos personalizable por el usuario — no hardcodeada.
// Cada hábito:
//   {
//     id: string único,
//     nombre: string (texto libre definido por el usuario),
//     tipo: "binario" | "numerico",
//     objetivo: number (solo si tipo === "numerico", ej: 12000 para pasos)
//   }
//
// El usuario debe poder: agregar un hábito nuevo, editar el nombre/
// tipo/objetivo de uno existente, eliminar uno. Sin límite fijo de
// cantidad de hábitos (el tablero de Nata tiene 8, pero no hay que
// limitar a ese número).
//
// Registro diario por hábito:
//   { fecha: "YYYY-MM-DD", habitoId: string, valor: boolean | number, completado: boolean }
//
// Para tipo "binario": valor es true/false (check).
// Para tipo "numerico": valor es el número registrado ese día,
// completado = true si valor >= objetivo.

// ────────────────────────────────────────────────────────────
// UI — VISTA "HOY"
// ────────────────────────────────────────────────────────────
//
// Lista vertical simple de todos los hábitos activos de Nata, cada
// uno mostrando:
//   - Nombre del hábito
//   - Si es binario: checkbox grande, toggle al tocar
//   - Si es numérico: input numérico + "/ objetivo" al lado
//     (ej: "8,200 / 12,000 pasos"), sin necesidad de un donut
//     complejo — un input simple con el objetivo como referencia
//     visual basta.
//
// Botón "+ agregar hábito" al final de la lista, abre un mini-form
// simple: nombre, tipo (binario/numérico), objetivo si aplica.

// ────────────────────────────────────────────────────────────
// UI — HISTORIAL (heatmap único de % cumplido)
// ────────────────────────────────────────────────────────────
//
// Reutilizar el componente de heatmap que ya existe en Rehab —
// mismo patrón visual (grid semanal, hoy abajo, recortado desde el
// primer día con registro).
//
// Color de cada día según % de hábitos activos cumplidos ese día:
//   - Verde oscuro: 100% de hábitos cumplidos
//   - Verde claro: 50-99% cumplidos
//   - Amarillo: 1-49% cumplidos
//   - Gris: sin registro ese día
//
// Al tocar un día del heatmap, mostrar detalle: lista de hábitos
// de ese día con su estado (cumplido/no cumplido/valor registrado
// si es numérico) — mismo patrón que el detalle de día en Rehab.

// ────────────────────────────────────────────────────────────
// IMPLEMENTACIÓN
// ────────────────────────────────────────────────────────────
//
// - Nombre de pestaña: "Hábitos". Ícono: 📖 (libro).
// - Reemplaza a "Actividad" ÚNICAMENTE en la configuración del
//   usuario Nata — no tocar la pestaña Actividad existente para
//   otros usuarios.
// - Persistencia y sync igual que el resto: localStorage +
//   data-nata.json vía GitHub, mismo patrón ya establecido.
// - Si Nata ya tiene datos guardados en la pestaña Actividad vieja
//   (poco probable dado que se acaba de crear su perfil, pero
//   verificar), no es necesario migrarlos — puede arrancar limpio.
// ============================================================
