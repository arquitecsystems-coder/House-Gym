// ============================================================
// AJUSTE M6 — LEGS A/B: nórdico asistido + dragon flag
// ============================================================
//
// CONTEXTO: se detectó que ningún ejercicio del programa entrena
// al isquiotibial en su función de FLEXIÓN DE RODILLA (todos los
// existentes — RDL, sentadilla, hip thrust — trabajan extensión
// de cadera). Curl nórdico asistido cubre esa función faltante.
// Se decide agregarlo SIN quitar nada — hip thrust se mantiene en
// ambos días. Esto sube el volumen de isquio/glúteo por encima de
// lo calculado originalmente; aceptado conscientemente.
//
// Dragon flag se agrega como progresión de core (reemplaza/se
// combina con crunch — ver más abajo), por palanca larga en vez
// de rango corto, mejor estímulo de recto abdominal completo.

// ────────────────────────────────────────────────────────────
// ORDEN DE EJERCICIOS — regla y razón
// ────────────────────────────────────────────────────────────
// Nórdico va SIEMPRE PRIMERO en la sesión, antes que sentadilla
// y RDL. Razón: el nórdico no tiene "perilla de ajuste" para
// absorber fatiga previa (no se puede bajar el peso — es peso
// corporal con caída asistida por manos). RDL y sentadilla sí
// pueden absorber fatiga bajando la carga. El ejercicio con menos
// grados de libertad para ajustarse va primero.
//
// Dragon flag va ANTES que crunch — exige más control técnico,
// mayor riesgo de compensación lumbar si llega fatigado.

const LEGS_A_MIE = [
  { nombre: "Curl Nórdico Asistido", orden: 1, rol: "patron_motor",
    nota: "Rango parcial — desciende hasta donde controla, se apoya con manos al perder control. Progresión por RANGO ALCANZADO antes de caer, no por peso (no hay carga externa). Registrar hasta qué punto del recorrido llega sin apoyo cada semana.",
    series: 3 },
  { nombre: "Sentadilla (barra + cuña)", orden: 2, rol: "fuerza" },
  { nombre: "RDL sin flexión de rodilla (barra)", orden: 3, rol: "tecnico",
    nota: "Es NORMAL que rinda por debajo de lo habitual viniendo después del nórdico — no ajustar la progresión base por esto, es fatiga esperada, no regresión real." },
  { nombre: "Hip Thrust (barra)", orden: 4, rol: "accesorio" },
  { nombre: "Dragon Flag", orden: 5, rol: "core",
    nota: "Progresión por apalancamiento: rodillas dobladas → piernas semi-extendidas → piernas rectas → rango completo. No agregar peso, progresar por dificultad de palanca." },
  { nombre: "Crunch Abdominal", orden: 6, rol: "core" }
];

const LEGS_B_SAB = [
  { nombre: "Curl Nórdico Asistido", orden: 1, rol: "patron_motor",
    series: 3 },
  { nombre: "RDL sin flexión de rodilla (barra)", orden: 2, rol: "fuerza",
    nota: "Mismo comentario que Legs A: rendimiento post-nórdico puede ser menor, es esperado." },
  { nombre: "Sentadilla (barra + cuña)", orden: 3, rol: "tecnico" },
  { nombre: "Hip Thrust (barra)", orden: 4, rol: "accesorio" },
  { nombre: "Dragon Flag", orden: 5, rol: "core" },
  { nombre: "Crunch Abdominal", orden: 6, rol: "core" }
];

// ============================================================
// MONITOREO ACTIVO — señales de sobrecarga a vigilar
// ============================================================
// El volumen de isquio/glúteo queda por encima del calculado
// originalmente (RDL x2 + Sentadilla + Hip Thrust x2 + Nórdico x2).
// Vigilar en las próximas 2-3 semanas:
//
//   1. RIR del PRIMER ejercicio de cada sesión (cualquier día, no
//      solo legs) — si sale sistemáticamente más bajo de lo
//      esperado varias sesiones seguidas, señal de fatiga
//      sistémica acumulada, no local.
//   2. Progresión del RDL semana a semana — la caída puntual
//      post-nórdico es esperada, pero si NO se recupera semana
//      tras semana (el peso/reps no avanza en absoluto durante
//      3+ semanas), reconsiderar el volumen total.
//
// Si aparece cualquiera de las dos señales, la primera palanca a
// mover es reducir hip thrust a un solo día — no tocar nórdico ni
// RDL, que cubren funciones sin reemplazo en el programa actual.
// ============================================================
