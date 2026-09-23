// ============================================================
// MESOCICLO 2 — DOLLY  (clave interna: "D2" / etiqueta visible: "M2 — Dolly")
// ============================================================
//
// NOTA DE CLAVE: la clave del objeto es "D2" porque MESOCICLOS es un
// diccionario global compartido con Samuel (M4/M5/M6) y Nata (N1/N2),
// y porque esa clave se usa como prefijo de CADA registro guardado
// ("D2-S1-sab-Dominada...-1"). Los registros del bloque anterior son
// "D1-...". El usuario solo ve el campo `label`, que dice "M2 — Dolly".
//
// ── EQUIPO REAL CONFIRMADO (corrige el listado usado en el M1) ──
// Mancuerna ajustable tipo Bowflex 552, 15 escalones en LIBRAS:
//   5 - 7.5 - 10 - 12.5 - 15 - 17.5 - 20 - 22.5 - 25 - 30 - 35 -
//   40 - 45 - 50 - 52.5
// El M1 se prescribió sobre una escalera equivocada (27.5, 32.5,
// 37.5, 42.5, 47.5) que NO existe en este equipo. Todo lo de abajo
// usa exclusivamente los 15 valores reales.
// Resto del equipo: banco, soporte de pared para dominada/fondo
// (pies sin contacto con el suelo), banda delgada 15-35 lb y banda
// gruesa 40-90 lb.
//
// ── DIAGNÓSTICO DEL M1 QUE JUSTIFICA ESTE DISEÑO ──
// 1. La dominada no progresó: 8-8-8-5 en S1 y nunca volvió a pasar
//    de 7 reps. El criterio para reducir asistencia jamás se cumplió,
//    así que fue correcto no bajar de banda. El error fue de diseño:
//    la progresión iba por calendario (banda gruesa en S3) en vez de
//    por criterio.
// 2. Solo hubo ~4 exposiciones efectivas en 6 semanas (S3 completa y
//    el sábado de S5 sin registro). Para un patrón motor es muy poco.
// 3. No existía mecanismo de sobrecarga en la dominada: la asistencia
//    fue constante y la única variable era "reps al fallo", una medida
//    demasiado ruidosa para detectar mejoras reales.
// 4. La banda asiste mucho abajo y casi nada arriba. Quitar la banda
//    delgada endurece el rango que ya domina y no toca el rango alto,
//    que es donde falla. Por eso entran los ISOMÉTRICOS ARRIBA.
// 5. El RDL se midió mal: lo hacía unilateral sin apoyar la mano libre,
//    así que moría por equilibrio y agarre antes que por isquio. Su
//    registro (35 lb x 10) NO sirve de referencia: se recalibra desde
//    30 lb con apoyo y se sube rápido.
//
// ── CAMBIOS ESTRUCTURALES RESPECTO AL M1 ──
// a) Se elimina el split por cadenas. Con 2 días semanales (y sesiones
//    que a veces se comprimen en un solo día), FULL BODY los dos días
//    es superior. Cada día abre con un patrón motor en fresco.
// b) La dominada aparece sábado Y domingo, pero asimétrica: sábado es
//    la sesión que genera estímulo (RIR 1), domingo son 2 series
//    cortas de práctica, lejos del fallo.
// c) Entran MARTES y JUEVES como días de PRÁCTICA (3-4 min, sin
//    calentamiento, nunca al fallo). No son entrenamiento: son
//    exposiciones extra al patrón y trabajo de agarre. Duplican la
//    frecuencia sin tocar la agenda de Dolly.
// d) El fallo se mantiene donde ya funcionaba (búlgara, press, remo,
//    curl, copa, lateral). SOLO la dominada queda a RIR 1, porque es
//    un patrón en aprendizaje y las últimas reps al fallo se hacen con
//    técnica degradada.
// e) Sale la 4a serie de dominada (aportaba 2-6 reps basura) y la copa
//    a dos manos. Entra la sentadilla goblet como patrón bilateral de
//    pierna que no depende del agarre.
//
// ── CRITERIO DE AVANCE DE ASISTENCIA (no por semana) ──
// Pasa a BANDA GRUESA SOLA cuando cumpla las dos cosas el mismo día:
//   - 3 series de 8 reps con doble banda a RIR 1
//   - 1 isométrico de 15 s con la barbilla arriba usando solo banda gruesa
// Si eso ocurre en S3, se cambia en S3. Si no ocurre, termina el bloque
// en doble banda y no pasa nada: el objetivo del M2 es llegar a banda
// gruesa sola, NO hacer una dominada sin asistencia.
//
// ── MÉTRICAS DE SEGUIMIENTO ──
// - Segundos del isométrico arriba (variable limpia, no depende del día).
// - Total de reps limpias de dominada por sesión a objetivo fijo.
// - PESO CORPORAL semanal: la dominada es fuerza relativa y sin ese dato
//   el progreso sigue siendo ambiguo. Registrar desde S1.
//
// ── VERSIÓN COMPRIMIDA (si sábado y domingo caen el mismo día) ──
// Se hacen los dos bloques con una pausa real entre ellos. Cuando haya
// que recortar se recortan COPA, LATERAL y GOBLET. Nunca la dominada
// ni los fondos.
// ============================================================

const MESOCICLO_DOLLY_2 = {
  label: "M2 — Dolly",
  tipo: "activo",
  semanas: 6,
  fechas: ["26–27 sep", "3–4 oct", "10–11 oct", "17–18 oct", "24–25 oct", "31 oct–1 nov"],
  dias: [
    { key: "sab", label: "Sáb", titulo: "Full body A — sesión principal" },
    { key: "dom", label: "Dom", titulo: "Full body B — sesión secundaria" },
    { key: "mar", label: "Mar", titulo: "Práctica (3-4 min) — sin fallo" },
    { key: "jue", label: "Jue", titulo: "Práctica (3-4 min) — sin fallo" },
  ],
  plan: {
    // ────────── SÁBADO — FULL BODY A ──────────
    sab: [
      {
        nombre: "Dominada asistida (doble banda)",
        series: 3,
        info: "Movimiento completo con las dos bandas. PARA CON 1 REP EN EL TANQUE (RIR 1), no llegues al fallo: aquí buscamos reps limpias, no reps máximas. Si la técnica se rompe, la serie terminó.",
        semanas: [
          "Doble banda × 5-6 (RIR 1)",
          "Doble banda × 6 (RIR 1)",
          "Doble banda × 6-7 (RIR 1)",
          "Doble banda × 7 (RIR 1)",
          "Doble banda × 7-8 (RIR 1)",
          "Doble banda × 5 (descarga)"
        ]
      },
      {
        nombre: "Isométrico arriba (banda gruesa)",
        series: 2,
        info: "Solo con la banda gruesa. Sube como puedas hasta tener la barbilla por encima de la barra y SOSTÉN ahí. Anota los SEGUNDOS que aguantaste en la casilla de reps. Esta es la métrica principal del bloque: ataca justo el tramo alto donde la banda casi no ayuda.",
        semanas: [
          "2 × 10-12 s",
          "2 × 12 s",
          "2 × 12-15 s",
          "2 × 15 s",
          "2 × 15-18 s",
          "2 × 10 s (descarga)"
        ]
      },
      {
        nombre: "Flexión inclinada (banco)",
        series: 4,
        info: "Progresa bajando la altura de las manos, no añadiendo peso. ANOTA LA ALTURA usada en la casilla de peso (alto / medio / medio-bajo / bajo): sin ese dato no se puede comparar entre semanas.",
        semanas: [
          "Banco medio × 10-12",
          "Banco medio × 12-15",
          "Banco medio-bajo × 8-10",
          "Banco medio-bajo × 10-12",
          "Banco bajo × 6-8 (pico)",
          "Banco medio × 12 (descarga)"
        ]
      },
      {
        nombre: "Búlgara con mancuerna",
        series: 3,
        info: "Pie de atrás sobre el banco, mancuerna en una mano y la otra apoyada en la pared para el equilibrio. Sube reps dentro del mismo peso hasta llegar a 12; solo ahí salta al siguiente escalón. Última serie al fallo.",
        semanas: [
          "30 lb × 8/8",
          "30 lb × 10/10",
          "30 lb × 12/12",
          "35 lb × 8/8",
          "35 lb × 10/10 (pico)",
          "25 lb × 10/10 (descarga)"
        ]
      },
      {
        nombre: "Press inclinado mancuerna (unilateral)",
        series: 3,
        info: "Banco inclinado, un brazo por vez. Punto de partida calibrado desde lo último que demostró de verdad (12.5 lb × 12), no desde el test. Última serie al fallo.",
        semanas: [
          "15 lb × 8",
          "15 lb × 10",
          "15 lb × 12",
          "17.5 lb × 8",
          "17.5 lb × 10 (pico)",
          "12.5 lb × 10 (descarga)"
        ]
      },
      {
        nombre: "Remo unilateral con mancuerna",
        series: 3,
        info: "Apoyo de rodilla y mano en el banco. Fue el ejercicio que mejor progresó en el M1, así que sigue la misma lógica: reps hasta el tope del rango y luego sube escalón. Última serie al fallo.",
        semanas: [
          "25 lb × 8",
          "25 lb × 10",
          "25 lb × 12",
          "30 lb × 8",
          "30 lb × 10 (pico)",
          "20 lb × 10 (descarga)"
        ]
      },
      {
        nombre: "Copa a una mano (tríceps)",
        series: 2,
        info: "Tríceps por encima de la cabeza, una mano. Estuvo plano todo el M1 en 5 lb, así que sube a 7.5 lb. Si se corta la sesión por tiempo, este ejercicio es el primero en salir.",
        semanas: [
          "7.5 lb × 10",
          "7.5 lb × 12",
          "10 lb × 8",
          "10 lb × 10",
          "10 lb × 12 (pico)",
          "7.5 lb × 10 (descarga)"
        ]
      }
    ],

    // ────────── DOMINGO — FULL BODY B ──────────
    dom: [
      {
        nombre: "Dominada asistida (práctica)",
        series: 2,
        info: "Doble banda, LEJOS DEL FALLO. Esto NO es una segunda sesión dura: son dos series cortas para sumar exposición al patrón con 24 h de diferencia. Si terminas agotada, te pasaste.",
        semanas: [
          "Doble banda × 4-5",
          "Doble banda × 5",
          "Doble banda × 5",
          "Doble banda × 5-6",
          "Doble banda × 6",
          "Doble banda × 4 (descarga)"
        ]
      },
      {
        nombre: "Negativas de fondo (banco)",
        series: 4,
        info: "En el soporte de pared, con los pies sin tocar el suelo. Solo la fase de BAJADA, controlada. Progresó bien en el M1 (de 6 a 8 reps), así que se mantiene la misma vía. En S4 la bajada se alarga a 5 segundos.",
        semanas: [
          "6 reps",
          "7 reps",
          "8 reps",
          "8 reps (bajada 5 s)",
          "8-9 reps (pico)",
          "5 reps (descarga)"
        ]
      },
      {
        nombre: "RDL unilateral con apoyo",
        series: 3,
        info: "CAMBIO IMPORTANTE: la mano libre va apoyada en la pared o el banco. En el M1 el ejercicio moría por equilibrio y agarre, no por isquios, así que el registro anterior no sirve de referencia. Reinicia en 30 lb y sube rápido si el agarre aguanta. Anota las reps de cada pierna.",
        semanas: [
          "30 lb × 10/10",
          "35 lb × 10/10",
          "40 lb × 10/10",
          "40 lb × 12/12",
          "45 lb × 8-10 (pico)",
          "30 lb × 10/10 (descarga)"
        ]
      },
      {
        nombre: "Sentadilla goblet",
        series: 3,
        info: "Mancuerna sostenida vertical contra el pecho, con las dos manos. Entra nueva en este bloque: da una vía de carga de pierna que no depende del agarre ni del equilibrio en una sola pierna.",
        semanas: [
          "25 lb × 10",
          "30 lb × 10",
          "30 lb × 12",
          "35 lb × 10",
          "35 lb × 12 (pico)",
          "25 lb × 12 (descarga)"
        ]
      },
      {
        nombre: "Curl bíceps con mancuerna",
        series: 3,
        info: "Un brazo por vez. En el M1 el brazo izquierdo rindió menos que el derecho: iguala el número de reps al del lado MÁS DÉBIL en lugar de forzar el fuerte. Última serie al fallo.",
        semanas: [
          "15 lb × 8",
          "15 lb × 10",
          "15 lb × 12",
          "17.5 lb × 8",
          "17.5 lb × 10 (pico)",
          "12.5 lb × 12 (descarga)"
        ]
      },
      {
        nombre: "Lateral inclinado contra pared",
        series: 3,
        info: "Inclinada contra la pared, elevación lateral. Se quedó en 7.5 lb todo el M1 llegando a 15 reps, así que ahora sube a 10 lb. Si el brazo no llega a la altura del hombro, baja el peso antes que acortar el recorrido.",
        semanas: [
          "10 lb × 10",
          "10 lb × 12",
          "10 lb × 15",
          "12.5 lb × 8-10",
          "12.5 lb × 10-12 (pico)",
          "7.5 lb × 15 (descarga)"
        ]
      }
    ],

    // ────────── MARTES — PRÁCTICA ──────────
    mar: [
      {
        nombre: "Dead hang",
        series: 2,
        info: "Colgarte de la barra con los brazos estirados y aguantar. Anota los SEGUNDOS en la casilla de reps. NUNCA hasta que se te suelten las manos: para con margen. Trabaja el agarre, que es el cuello de botella tanto de la dominada como del RDL.",
        semanas: [
          "2 × 20-25 s", "2 × 25 s", "2 × 25-30 s",
          "2 × 30 s", "2 × 30-35 s", "2 × 20 s (suave)"
        ]
      },
      {
        nombre: "Isométrico arriba (banda gruesa)",
        series: 2,
        info: "Igual que el del sábado pero sin fatiga previa: sube con la banda gruesa, sostén con la barbilla arriba y anota los SEGUNDOS. Aquí se acumula la práctica del tramo que decide la dominada.",
        semanas: [
          "2 × 8-10 s", "2 × 10 s", "2 × 10-12 s",
          "2 × 12 s", "2 × 12-15 s", "2 × 8 s (suave)"
        ]
      },
      {
        nombre: "Retracciones escapulares colgada",
        series: 1,
        info: "Colgada con los brazos ESTIRADOS, hunde los hombros hacia abajo sin doblar los codos, y suelta. Es un movimiento corto. Enseña a activar la espalda antes de tirar, que es lo primero que falla al aprender la dominada.",
        semanas: ["1 × 5", "1 × 6", "1 × 6", "1 × 8", "1 × 8", "1 × 5 (suave)"]
      }
    ],

    // ────────── JUEVES — PRÁCTICA ──────────
    jue: [
      {
        nombre: "Dead hang",
        series: 2,
        info: "Colgarte de la barra con los brazos estirados y aguantar. Anota los SEGUNDOS en la casilla de reps. NUNCA hasta que se te suelten las manos: para con margen. Trabaja el agarre, que es el cuello de botella tanto de la dominada como del RDL.",
        semanas: [
          "2 × 20-25 s", "2 × 25 s", "2 × 25-30 s",
          "2 × 30 s", "2 × 30-35 s", "2 × 20 s (suave)"
        ]
      },
      {
        nombre: "Isométrico arriba (banda gruesa)",
        series: 2,
        info: "Igual que el del sábado pero sin fatiga previa: sube con la banda gruesa, sostén con la barbilla arriba y anota los SEGUNDOS. Aquí se acumula la práctica del tramo que decide la dominada.",
        semanas: [
          "2 × 8-10 s", "2 × 10 s", "2 × 10-12 s",
          "2 × 12 s", "2 × 12-15 s", "2 × 8 s (suave)"
        ]
      },
      {
        nombre: "Retracciones escapulares colgada",
        series: 1,
        info: "Colgada con los brazos ESTIRADOS, hunde los hombros hacia abajo sin doblar los codos, y suelta. Es un movimiento corto. Enseña a activar la espalda antes de tirar, que es lo primero que falla al aprender la dominada.",
        semanas: ["1 × 5", "1 × 6", "1 × 6", "1 × 8", "1 × 8", "1 × 5 (suave)"]
      }
    ]
  }
};
