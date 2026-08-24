// ============================================================
// ACTUALIZACIÓN BIBLIOTECA DE ALIMENTOS — SAMUEL
// ============================================================
//
// 1. ALIMENTOS NUEVOS A AGREGAR (quesos colombianos):
const ALIMENTOS_NUEVOS = [
  {
    "nombre": "Queso campesino",
    "kcal": 300,
    "prot": 20,
    "carbs": 3,
    "grasas": 23
  },
  {
    "nombre": "Cuajada",
    "kcal": 290,
    "prot": 17,
    "carbs": 0,
    "grasas": 23
  },
  {
    "nombre": "Mozzarella",
    "kcal": 280,
    "prot": 22,
    "carbs": 2.2,
    "grasas": 22
  }
];

// 2. CORRECCIÓN — reemplazar los valores existentes de contramuslo,
// muslo y pernil. Los valores anteriores eran SIN HUESO, pero Samuel
// compra y pesa las piezas CON HUESO. Estos valores están ajustados
// por fracción ósea estimada (contramuslo ~15%, muslo ~18%, pernil
// ~16% del peso es hueso) para que al pesar la pieza completa tal
// como se compra, el cálculo sea correcto.
// ES UNA ESTIMACIÓN por fracción ósea típica, no un dato medido
// directamente — precisión razonable para tracking diario, no de
// laboratorio.
//
// REEMPLAZAR (buscar por nombre "Contramuslo de pollo", "Muslo de
// pollo", "Pernil de pollo" en la biblioteca de Samuel y actualizar):
const ALIMENTOS_CORREGIDOS = [
  {
    "nombre": "Contramuslo de pollo (con hueso y piel)",
    "kcal": 160,
    "prot": 14.5,
    "carbs": 0,
    "grasas": 11
  },
  {
    "nombre": "Muslo de pollo (con hueso y piel)",
    "kcal": 128,
    "prot": 18.7,
    "carbs": 0,
    "grasas": 5.4
  },
  {
    "nombre": "Pernil de pollo (con hueso y piel)",
    "kcal": 144,
    "prot": 16.8,
    "carbs": 0,
    "grasas": 8.2
  }
];

// 3. HUEVO POR UNIDAD (cambio de UI puntual, solo este alimento):
// El alimento "Huevo (doble A)" ya existe en la biblioteca de
// Samuel con valores por 100g. Agregar soporte para que ESTE
// alimento específico se registre por UNIDADES en vez de gramos —
// no es un cambio general del esquema, solo para este ítem.
// 1 huevo doble A equivale a ~58g sin cáscara.
// Al loggear este alimento, el input debe pedir "cantidad de
// huevos" (número entero o decimal) en vez de gramos, y calcular
// internamente usando 58g × cantidad como base sobre las macros
// ya definidas por 100g para ese alimento.
