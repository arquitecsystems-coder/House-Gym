// ============================================================
// CORRECCIÓN — Test de Nata debe ser UN SOLO DÍA, no 3
// + Regla general para tests futuros
// + Fix layout selección de usuarios
// + Perfil editable (foto, nombre)
// ============================================================

// ────────────────────────────────────────────────────────────
// CORRECCIÓN 1 — TEST_NATA: consolidar a un solo día
// ────────────────────────────────────────────────────────────
//
// El TEST_NATA en nata_actividad.js está estructurado como 3 días
// (lun/mié/vie), copiando el split del mesociclo real. ESO ESTÁ
// MAL — el test debe ser UN SOLO DÍA con todos los ejercicios
// juntos, sin importar cómo se reparta después el split real.
//
// Propósito del test: extraer RMs lo más rápido posible en una
// sola sesión, no simular el mesociclo completo.
//
// Consolidar TEST_NATA a un solo día ("test", sin subdivisión de
// lun/mié/vie) que incluya TODOS los ejercicios de las 3 sesiones
// originales en una sola lista secuencial:
//
//   1. Sentadilla trasera (barra)
//   2. Press banca (barra)
//   3. RDL (barra)
//   4. Remo Pendlay (barra)
//   5. Press militar (barra)
//   6. Zancada estática (barra o mancuernas)
//   7. Press inclinado (barra)
//   8. Hip thrust (barra)
//   9. Remo 1 mano (mancuerna, banco)
//   10. Curl bíceps (barra)
//   11. Curl martillo (mancuerna)
//   12. Elevaciones laterales (mancuerna)
//   13. Crunch con peso
//   14. Plancha (core)
//
// Mismos datos de instrucción/registro/gif_busqueda que ya estaban
// definidos para cada ejercicio individual — solo cambia la
// agrupación estructural (de 3 días a 1 día).
//
// Orden sugerido: compuestos pesados primero (sentadilla, press
// banca, RDL, remo, press militar), luego accesorios y core al
// final — para que la fatiga acumulada no comprometa los levantamientos
// principales de RM.

// ────────────────────────────────────────────────────────────
// REGLA GENERAL — aplica a TODO test futuro, no solo Nata
// ────────────────────────────────────────────────────────────
//
// Actualizar también TEST_DOLLY con el mismo criterio si todavía
// no se ha completado/usado — verificar si Dolly ya corrió su test
// de 2 días antes de decidir si vale la pena consolidarlo también,
// o si ya se usó y no tiene sentido tocarlo retroactivamente.
//
// De ahora en adelante, CUALQUIER test inicial que se cree para un
// usuario nuevo (presente o futuro) debe seguir el mismo criterio:
// un solo día, todos los ejercicios brújula del mesociclo agrupados
// ahí. El split real (full body, upper/lower, push/pull/legs, etc.)
// es una decisión que aplica al MESOCICLO, nunca al TEST.

// ────────────────────────────────────────────────────────────
// FIX 2 — Layout de selección de usuarios
// ────────────────────────────────────────────────────────────
//
// La pantalla "¿Quién eres?" usa un grid horizontal que no hace
// wrap correctamente — con 3 usuarios (Samuel, Dolly, Nata) las
// cards de los extremos se cortan visualmente en los bordes de
// pantalla.
//
// Fix: cambiar a un grid responsive con máximo 2 columnas por fila
// (grid-template-columns: repeat(2, 1fr) o similar con flex-wrap),
// para que con 3+ usuarios el layout pase a 2 filas en vez de
// intentar forzar todo en una sola fila horizontal. Verificar que
// se vea bien tanto con 2 usuarios como con 3, 4, 5+ (debe escalar).

// ────────────────────────────────────────────────────────────
// FEATURE — Perfil editable
// ────────────────────────────────────────────────────────────
//
// Dentro de la pestaña Perfil que ya existe (junto a composición
// corporal), agregar una sección editable con:
//   - Foto de perfil (opcional, el usuario puede subir una imagen
//     — si no hay foto, usar las iniciales que ya se generan
//     automáticamente como fallback, como está ahora)
//   - Nombre para mostrar (editable — por defecto es el nombre de
//     usuario con el que se creó el perfil, pero el usuario puede
//     cambiarlo sin que eso afecte el identificador interno/técnico
//     usado para las keys de localStorage y el archivo
//     data-{usuario}.json, que debe mantenerse estable aunque el
//     nombre visible cambie)
//
// Guardar estos datos igual que el resto — localStorage +
// sincronización a data-{usuario}.json.
// ============================================================
