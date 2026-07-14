// ============================================================
// NATA — Test inicial + estructura Full Body x3
// ACTIVIDAD — Nueva pestaña general (pasos + cardio)
// ============================================================

// ────────────────────────────────────────────────────────────
// CONTEXTO
// ────────────────────────────────────────────────────────────
// Nata: nivel principiante-intermedia (entrenamiento casual previo,
// sin periodización formal). Objetivo: recomposición corporal
// (fuerza/músculo + composición). Vive con Samuel, mismo equipo:
// barra olímpica, discos, banco, mancuernas fijas hasta 20kg, rack
// completo. Sin mancuerna ajustable. Soporte de dominadas aún no
// instalado (no usar en su programa por ahora).
//
// Los datos del tablero físico (peso muerto 12kg×7-14, remo 20.5kg,
// sentadilla-mancuerna 24kg×23-25, hip thrust 20kg×23-26, curl
// 6kg×8-10) fueron registrados con equipo MUY limitado (poco peso
// disponible, de ahí las repeticiones altas). NO sirven como base
// de carga para el programa nuevo — ahora tiene barra y rack
// completo, hay que re-testear con el equipo correcto.
//
// Decisión de split: Full Body x3 (no Push/Pull/Lower). Con 3 días
// no consecutivos (lunes/miércoles/viernes, 48h+ de recuperación
// entre cada uno) Full Body da frecuencia 3 a cada grupo muscular,
// superior a fragmentar en PPL que con solo 3 sesiones da
// frecuencia 1 por patrón — error del tablero original que hay que
// corregir.

// ────────────────────────────────────────────────────────────
// TEST INICIAL — NATA
// Mismo enfoque que TEST_DOLLY: rampa de peso hasta encontrar RM
// real en cada ejercicio antes de calcular el mesociclo.
// ────────────────────────────────────────────────────────────

const TEST_NATA = {
  label: "Test inicial — Nata",
  tipo: "test",
  dias: [
    { key: "lun", label: "Lun", titulo: "Full Body A" },
    { key: "mie", label: "Mié", titulo: "Full Body B" },
    { key: "vie", label: "Vie", titulo: "Full Body A (variante)" },
  ],
  ejercicios: {
    lun: [
      {
        nombre: "Sentadilla trasera (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta encontrar el peso de fallo entre 5-8 reps. Usar rack, profundidad a paralelo o más abajo si la técnica lo permite.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell back squat"
      },
      {
        nombre: "Press banca (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 5-8 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell bench press"
      },
      {
        nombre: "Remo Pendlay (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 6-8 reps. Referencia previa (equipo limitado): 20.5kg x 9-14.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "pendlay row barbell"
      },
      {
        nombre: "Curl bíceps (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps. Referencia previa: 6kg x 8-10 (mancuerna, equipo limitado).",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell bicep curl"
      },
      {
        nombre: "Plancha (core)",
        tipo: "patron_motor",
        instruccion: "Tiempo máximo sostenido con técnica correcta.",
        registrar: ["tiempo_segundos"],
        gif_busqueda: "plank hold"
      }
    ],
    mie: [
      {
        nombre: "RDL (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 6-8 reps. Referencia previa: 12kg x 7-14 (equipo muy limitado, esperar salto grande).",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "romanian deadlift barbell"
      },
      {
        nombre: "Press militar (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 6-8 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell overhead press"
      },
      {
        nombre: "Remo 1 mano (mancuerna, banco)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "single arm dumbbell row bench"
      },
      {
        nombre: "Hip thrust (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 10-12 reps. Referencia previa: 20kg x 23-26 (mancuerna, equipo limitado — con barra debería subir considerablemente).",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell hip thrust"
      },
      {
        nombre: "Crunch con peso",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 12-15 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "weighted crunch"
      }
    ],
    vie: [
      {
        nombre: "Zancada estática (barra o mancuernas)",
        tipo: "rampa_peso",
        instruccion: "Zancada en el sitio, no caminando. Rampa hasta fallo en 8-10 reps por pierna.",
        registrar: ["peso_kg", "reps_pierna_derecha", "reps_pierna_izquierda"],
        gif_busqueda: "static lunge barbell"
      },
      {
        nombre: "Press inclinado (barra)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 6-8 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "barbell incline press"
      },
      {
        nombre: "Remo Pendlay técnico (barra)",
        tipo: "rampa_peso",
        instruccion: "Peso menor al de lunes, foco en técnica y control, 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "pendlay row barbell"
      },
      {
        nombre: "Curl martillo (mancuerna)",
        tipo: "rampa_peso",
        instruccion: "Rampa hasta fallo en 8-10 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "hammer curl dumbbell"
      },
      {
        nombre: "Elevaciones laterales (mancuerna)",
        tipo: "rampa_peso",
        instruccion: "Referencia previa: 5kg x 5-8. Rampa hasta fallo en 10-12 reps.",
        registrar: ["peso_kg", "reps"],
        gif_busqueda: "dumbbell lateral raise"
      }
    ]
  }
};

// NOTA: con los resultados de este test se construye el
// Mesociclo 1 real de Nata en sesión de diseño posterior — igual
// que con Dolly, NO generar mesociclo automáticamente con estos
// datos de test.

// ────────────────────────────────────────────────────────────
// NUEVA PESTAÑA: ACTIVIDAD (pasos + cardio)
// Funcionalidad GENERAL — disponible para cualquier usuario,
// no específica de Nata. Mismo nivel que Rehab y Cut.
// ────────────────────────────────────────────────────────────
//
// Propósito: tracking de adherencia a actividad no estructurada
// (pasos diarios, cardio) que apoya el Cut, separado del
// entrenamiento de fuerza.
//
// Estructura sugerida (mismo lenguaje visual que Rehab — heatmap
// + registro diario):
//
// 1. Setup (una sola vez, por usuario):
//    - Campo simple de texto/número: "Objetivo de pasos diarios"
//      — el usuario lo define libremente, SIN cálculo automático,
//      SIN valor por defecto sugerido. Campo vacío hasta que el
//      usuario lo llena.
//
// 2. Registro diario:
//    - Pasos: campo numérico simple, comparado visualmente contra
//      el objetivo (ej: barra de progreso o "6,200 / 8,000 pasos").
//    - Cardio: checkbox simple "hice cardio hoy" + campo opcional
//      de minutos. No requiere estructura de sets/series como el
//      entrenamiento de fuerza — es un registro binario + duración.
//
// 3. Heatmap histórico (mismo componente que ya existe en Rehab,
//    reutilizar la lógica): día por día, color según:
//    - Verde oscuro: cumplió objetivo de pasos Y registró cardio
//    - Verde claro: cumplió uno de los dos
//    - Amarillo: registró algo pero por debajo del objetivo de pasos
//      y sin cardio
//    - Gris: sin registro ese día
//
// 4. Datos persisten y sincronizan igual que Rehab/Cut — mismo
//    patrón de guardado en localStorage + push a
//    data-{usuario}.json vía GitHub.
//
// Esta pestaña debe estar disponible para TODOS los usuarios por
// igual (a diferencia de Rehab, que es opcional/específico por
// usuario según lo definido en la tarea de "plantilla de usuario
// limpio" ya instruida). Actividad se comporta como Cut: existe
// para todos, arranca vacía hasta que el usuario configura su
// objetivo de pasos.
// ============================================================
