// ============================================================
// MESOCICLO 3 — DOLLY  (clave interna: "D3" / etiqueta visible: "M3 — Dolly")
// Doble progresión por reps — 8 semanas (6 construcción + descarga + retest)
// ============================================================
//
// NOTA DE CLAVE: la clave del objeto es "D3" porque MESOCICLOS es un
// diccionario global compartido con Samuel (M4..M8) y Nata (N1..N3), y
// porque esa clave prefija CADA registro guardado ("D3-S1-sab-..."). El
// usuario solo ve `label`, que dice "M3 — Dolly".
//
// ── CIERRE REAL DEL M2 (no el planeado) ──
// Adherencia: práctica mar/jue 6 de 12 sesiones (50%), S5 perdida
// completa, S4 solo con la dominada del sábado. Segundo bloque
// consecutivo con una semana caída (en el M1 fue S3).
//
// Dominada, sábado, 3 series:
//   S1 5-5-5 · S2 5-5-5 · S3 7-7-6 · S4 7-7-7 · S5 sin datos · S6 5-7-5
// Dentro del bloque subió (15 a 21 reps totales), pero contra el
// histórico NO hay avance: en el M1 S1 hizo 8-8-8 el domingo y cansada.
// Doce semanas después su pico fue 7-7-7 el sábado y fresca, seguía en
// doble banda, y el criterio de avance (3x8 RIR 1 + 15 s arriba) no se
// cumplió ni un día. Todas las series fueron a RIR 0: la instrucción de
// parar a RIR 1 nunca se ejecutó.
//
// Cuatro ejercicios NO se hicieron como estaban escritos, y eso se supo
// por sus notas, nunca por el registro:
//   - Búlgara: hizo zancadas todo el bloque. Causa confirmada después:
//     la búlgara le deja dolor de rodilla en los días siguientes, la
//     zancada no.
//   - Flexión: la hizo siempre en la mesa. "En el banco intento y no
//     puedo", así que su vía de progresión (bajar la altura) no existió.
//   - Isométrico: "subo pero no voy hasta arriba de la barra". Sostenía
//     a media altura, con lo cual los segundos subieron pero el rango
//     nunca se estandarizó. La métrica que se diseñó para ser limpia
//     resultó la más contaminada.
//   - Goblet: tres notas distintas diciendo que redondea la espalda al
//     subir, sin corregir en tres semanas.
//
// Tres prescripciones quedaron por encima de su capacidad real y ella
// las bajó sola: copa (volvió de 7.5 a 5 lb), curl (de 15 a 12.5 lb),
// lateral (nunca pasó de 7.5 lb, y con el brazo izquierdo solo llega a
// media altura). Mismo error de sobrecalibración del M1.
//
// Lo que SÍ funcionó: RDL con mano de apoyo, de 30 a 40 lb x 12 sin una
// sola nota de agarre ni equilibrio (mejor resultado del bloque);
// goblet de 25 a 35 lb; remo de 8 a 10 reps con 25 lb.
//
// ── CONTEXTO DE RECUPERACIÓN (determinante, fuera del programa) ──
// Sueño de 4 a 6 horas sostenido: se acostaba entre 22:00 y 01:00 y se
// levanta 4:30. Corrección acordada con Samuel: acostarse 20:30-21:00 y
// cocinar en la madrugada o por lotes en vez de al llegar. Toma creatina.
// Magnesio queda APLAZADO a propósito: solo mueve algo en deficiencia y
// su efecto es pequeño al lado de dos horas más de sueño; entra después
// de que el horario cambie, no antes, para que no sirva de coartada.
// Peso corporal y alimentación: CERO datos en dos bloques completos.
// La dominada es fuerza relativa; sin peso corporal su progreso es
// inevaluable. Registrar peso semanal desde S1.
//
// ── DECISIONES DE DISEÑO ──
//
// 1. LA DOMINADA SIGUE SIENDO EL OBJETIVO, PERO CON MECANISMO DE
//    PROGRESIÓN. Decisión de Samuel, y el principio es correcto: un
//    patrón motor no progresa si no se entrena. En el M2 sí se entrenaba
//    (4 exposiciones semanales entre sábado, domingo y los isométricos de
//    martes y jueves); lo que nunca cambió fue la DOSIS: misma asistencia
//    y mismo rango las seis semanas. Por eso acá progresa por reps, de
//    3x6 a 3x8 a RIR 1-2, con el criterio de banda vivo: 3x8 a RIR 1 mas
//    un isométrico de 15 s con barbilla arriba habilita banda gruesa
//    sola. El remo y el RDL no la reemplazan: son la base de fuerza de
//    tracción que la hace posible, y progresan en paralelo.
//
// 2. DOBLE PROGRESIÓN POR REPS EN CASI TODO. Esto es lo que hace que el
//    bloque sobreviva a una semana perdida: se sube de peso al llegar al
//    tope del rango, no porque el calendario avance. En el M2, perder S5
//    costó el pico. Acá una semana caída solo retrasa, no se salta carga.
//
// 3. OCHO SEMANAS, NO SEIS. Por lo mismo que en el N3 de Nata: con una
//    semana de vida excepcional cada bloque, seis semanas pierden una
//    fracción grande. Ocho dan margen real.
//
// 4. SE MANTIENE `fechas` (a diferencia del N3). Sus días son días de
//    calendario fijos (mar/jue/sáb/dom), y con doble progresión el número
//    de semana ya no decide la carga, así que el riesgo que llevó a Nata a
//    quitar `fechas` acá no aplica.
//
// 5. DESCARGA EN S7, RETEST EN S8. S7 cae en la semana de Navidad
//    (26-27 dic), que es la que tiene más probabilidad de saltarse: si se
//    salta una descarga no se pierde nada.
//
// 6. SALE LA BÚLGARA, ENTRA LA ZANCADA INVERSA. El pie de atrás elevado
//    manda la rodilla de adelante a mucha más flexión y estira el recto
//    femoral de la pierna de atrás; la zancada inversa reduce las dos
//    cosas y además frena menos con la rodilla al aterrizar atrás. La
//    búlgara no tiene nada de especial: si una variante duele y otra casi
//    idéntica no, se usa la que no duele. Se puede recuperar en el M4 con
//    escalón bajo y torso inclinado.
//
// 7. SALE LA COPA A UNA MANO. Doce semanas plana en 5 lb. El tríceps
//    queda cubierto por fondos y flexión.
//
// 8. EL ISOMÉTRICO VUELVE A DOBLE BANDA. Con banda gruesa sola no
//    alcanzaba la barbilla sobre la barra, así que entrenaba un rango que
//    no era el que se quería entrenar. Criterio visible y binario: si la
//    barbilla no pasa la barra, la repetición no cuenta. La progresión es
//    segundos primero, y recién después quitar la banda delgada.
//
// 9. LA FLEXIÓN PROGRESA POR EXCÉNTRICO, NO POR ALTURA. No puede hacer
//    el banco, así que bajar la altura no era una progresión disponible.
//    Mismo truco que el isométrico: acumular volumen en la altura que sí
//    puede (mesa) y exponerse a la difícil solo en la parte que logra
//    (negativas desde el banco).
//
// 10. CARGAS RECALIBRADAS HACIA ABAJO donde ella misma las bajó: curl
//    12.5 lb, lateral 5 lb con recorrido completo en los dos brazos,
//    press inclinado 12.5 lb. Arrancar donde está, no donde el plan
//    anterior decía que debía estar.
//
// 11. VIDEO EN S1. Una serie filmada de zancada, goblet, flexión e
//    isométrico, revisada por Samuel. Los cuatro fallos de ejecución del
//    M2 eran invisibles en los números y visibles en dos segundos de
//    video.
//
// ── EQUIPO REAL ──
// Mancuerna ajustable tipo Bowflex 552, posiciones en LIBRAS:
//   5 - 7.5 - 10 - 12.5 - 15 - 17.5 - 20 - 22.5 - 25 - 30 - 35 - 40 -
//   45 - 50 - 52.5
// Banco, mesa (más alta que el banco), soporte de pared para
// dominada/fondo (los pies no tocan el suelo), banda delgada 15-35 lb y
// banda gruesa 40-90 lb.
// No prescribir ningún peso fuera de esa lista. En el M2 volvieron a
// aparecer registros de 21 y 5.5 lb, que no existen.
//
// ── SI VUELVE EL DOLOR DE RODILLA ──
// Sale la zancada y entra puente de glúteo 3x12-15, que carga glúteo con
// cero demanda de rodilla. Si el dolor es articular, con hinchazón o
// aparece al subir escaleras o estar sentada, es valoración presencial,
// no ajuste de rutina.
// ============================================================

const MESOCICLO_DOLLY_3 = {
  label: "M3 — Dolly",
  tipo: "activo",
  semanas: 8,
  modelo: "doble_progresion",
  fechas: ["14–15 nov", "21–22 nov", "28–29 nov", "5–6 dic", "12–13 dic", "19–20 dic", "26–27 dic", "2–3 ene 2027"],
  notaEquipo: "EQUIPO: mancuerna ajustable Bowflex 552, posiciones en lb: 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50, 52.5. Banco, mesa (más alta que el banco), soporte de pared para dominada y fondo, banda delgada 15-35 lb y banda gruesa 40-90 lb. No prescribir pesos fuera de esa lista.",
  nota: "Bloque de doble progresión por reps, 8 semanas (6 construcción, descarga en S7, retest en S8). La dominada se mantiene como objetivo, pero con progresión real: en el M2 se entrenaba 4 veces por semana y lo que nunca cambió fue la dosis. Acá sube de 3x6 a 3x8 a RIR 1-2, con el criterio de banda vivo, y el remo y el RDL progresan en paralelo como base de fuerza de tracción. Sale la búlgara por dolor de rodilla en los días posteriores (la zancada no se lo produce) y entra la zancada inversa. Sale la copa (12 semanas plana). El isométrico vuelve a doble banda con criterio binario de barbilla sobre la barra. La flexión progresa por excéntrico desde el banco, no por altura. Cargas recalibradas donde ella las bajó sola. Pendiente externo y determinante: dormir 7 horas, registrar peso corporal semanal y revisar ingesta.",
  dias: [
    { key: "mar", label: "Mar", titulo: "Práctica (3-4 min) — sin fallo" },
    { key: "jue", label: "Jue", titulo: "Práctica (3-4 min) — sin fallo" },
    { key: "sab", label: "Sáb", titulo: "Full body A — empuje y tracción vertical" },
    { key: "dom", label: "Dom", titulo: "Full body B — tracción horizontal y bisagra" },
  ],
  plan: {
    mar: [
      {
        nombre: "Dead hang",
        series: 2,
        info: "Colgarte de la barra con los brazos estirados y aguantar. Anota los SEGUNDOS en la casilla de reps. Nunca hasta que se te suelten las manos, siempre para con margen. Trabaja el agarre, que es el cuello de botella de la dominada y del RDL.",
        semanas: ["2 x 25 s", "2 x 30 s", "2 x 30 s", "2 x 35 s", "2 x 35 s", "2 x 40 s", "2 x 20 s (suave)", "2 x máximo (test)"]
      },
      {
        nombre: "Isométrico arriba (doble banda)",
        series: 2,
        info: "Con las DOS bandas, no solo la gruesa. Sube hasta que la barbilla pase por encima de la barra y sostén ahí. Si la barbilla no pasa la barra, la repetición no cuenta: baja, descansa y vuelve a intentar. Anota los SEGUNDOS en la casilla de reps.",
        semanas: ["2 x 8-10 s", "2 x 10 s", "2 x 12 s", "2 x 12-15 s", "2 x 15 s", "2 x 15-18 s", "2 x 8 s (suave)", "2 x máximo (test)"]
      },
      {
        nombre: "Retracciones escapulares colgada",
        series: 1,
        info: "Colgada con los brazos ESTIRADOS, hunde los hombros hacia abajo sin doblar los codos, y suelta. Es un movimiento corto. Enseña a activar la espalda antes de tirar, que es lo primero que falla al aprender la dominada.",
        semanas: ["1 x 6", "1 x 8", "1 x 8", "1 x 10", "1 x 10", "1 x 12", "1 x 6 (suave)", "1 x máximas (test)"]
      }
    ],

    jue: [
      {
        nombre: "Dead hang",
        series: 2,
        info: "Colgarte de la barra con los brazos estirados y aguantar. Anota los SEGUNDOS en la casilla de reps. Nunca hasta que se te suelten las manos, siempre para con margen. Trabaja el agarre, que es el cuello de botella de la dominada y del RDL.",
        semanas: ["2 x 25 s", "2 x 30 s", "2 x 30 s", "2 x 35 s", "2 x 35 s", "2 x 40 s", "2 x 20 s (suave)", "2 x máximo (test)"]
      },
      {
        nombre: "Isométrico arriba (doble banda)",
        series: 2,
        info: "Con las DOS bandas, no solo la gruesa. Sube hasta que la barbilla pase por encima de la barra y sostén ahí. Si la barbilla no pasa la barra, la repetición no cuenta: baja, descansa y vuelve a intentar. Anota los SEGUNDOS en la casilla de reps.",
        semanas: ["2 x 8-10 s", "2 x 10 s", "2 x 12 s", "2 x 12-15 s", "2 x 15 s", "2 x 15-18 s", "2 x 8 s (suave)", "2 x máximo (test)"]
      },
      {
        nombre: "Retracciones escapulares colgada",
        series: 1,
        info: "Colgada con los brazos ESTIRADOS, hunde los hombros hacia abajo sin doblar los codos, y suelta. Es un movimiento corto. Enseña a activar la espalda antes de tirar, que es lo primero que falla al aprender la dominada.",
        semanas: ["1 x 6", "1 x 8", "1 x 8", "1 x 10", "1 x 10", "1 x 12", "1 x 6 (suave)", "1 x máximas (test)"]
      }
    ],

    sab: [
      {
        nombre: "Dominada asistida (doble banda)",
        series: 3,
        info: "Sube por REPS, no bajando asistencia: de 6 a 8 repeticiones con las dos bandas. Para con 1 o 2 en el tanque, nunca al fallo, porque las últimas al fallo salen con técnica rota y en un movimiento que estás aprendiendo eso enseña el patrón malo. Cuando logres las 3 series de 8 a RIR 1 y sostengas 15 s con la barbilla arriba, se prueba con banda gruesa sola.",
        semanas: ["Doble banda x 6 (RIR 1-2)", "x 6-7 (RIR 1-2)", "x 7 (RIR 1-2)", "x 7-8 (RIR 1-2)", "x 8 (RIR 1-2)", "Banda gruesa x 5-6 si cumplió 3x8, si no doble banda x 8", "x 4 (descarga)", "máximas limpias (test)"]
      },
      {
        nombre: "Isométrico arriba (doble banda)",
        series: 2,
        info: "Con las DOS bandas. Barbilla por encima de la barra y sostén. Si la barbilla no pasa la barra, no cuenta. Anota los SEGUNDOS en la casilla de reps. Cuando llegues a 2 series de 15 s con barbilla arriba, recién ahí se prueba con banda gruesa sola.",
        semanas: ["Doble banda 2 x 10 s", "2 x 12 s", "2 x 12-15 s", "2 x 15 s", "Banda gruesa 2 x 8-10 s (si cumplió 15 s)", "2 x 10-12 s", "Doble banda 2 x 8 s (descarga)", "máximo con barbilla arriba (test)"]
      },
      {
        nombre: "Flexión inclinada (mesa) + negativas en banco",
        series: 4,
        info: "Las series de volumen van en la MESA, que es la altura que puedes. Al final agrega las negativas desde el banco: solo la bajada, lo más lento que controles, y te vuelves a subir como sea. Así te expones al banco en la parte que sí logras. Anota las reps de mesa en la casilla de reps y la altura usada en la casilla de peso.",
        semanas: ["Mesa x 10-12 + 2 negativas banco", "Mesa x 12-15 + 2 negativas", "Mesa x 15 + 3 negativas", "Mesa x 15-18 + 3 negativas", "Banco x 6-8 (si las negativas salen limpias) o mesa x 18", "Banco x 8-10 o mesa x 20", "Mesa x 12 (descarga)", "máximas en banco (test)"]
      },
      {
        nombre: "Zancada inversa con mancuerna",
        series: 3,
        info: "Das el paso hacia ATRÁS, no hacia adelante. Reemplaza la búlgara porque el pie de atrás elevado te cargaba la rodilla. Mancuerna en una mano y la otra apoyada en la pared si necesitas equilibrio. Anota las reps de cada pierna.",
        semanas: ["25 lb x 10/10", "25 lb x 12/12", "30 lb x 10/10", "30 lb x 12/12", "35 lb x 10/10", "35 lb x 12/12", "25 lb x 10/10 (descarga)", "35-40 lb x máximas (test)"]
      },
      {
        nombre: "Curl bíceps con mancuerna",
        series: 2,
        info: "Un brazo por vez. Vuelve a 12.5 lb porque con 15 el brazo izquierdo no sostenía las reps. Iguala las reps al lado MÁS DÉBIL en lugar de forzar el fuerte. Última serie al fallo.",
        semanas: ["12.5 lb x 8/8", "12.5 lb x 10/10", "12.5 lb x 12/12", "15 lb x 8/8", "15 lb x 10/10", "15 lb x 12/12", "12.5 lb x 10/10 (descarga)", "15 lb x máximas (test)"]
      },
      {
        nombre: "Lateral inclinado contra pared",
        series: 2,
        info: "Baja a 5 lb a propósito: con 7.5 el brazo izquierdo solo llegaba a media altura, y medio recorrido no entrena el hombro. Con 5 lb los dos brazos llegan arriba. Recorrido completo o se baja el peso, nunca al contrario.",
        semanas: ["5 lb x 12 (recorrido completo)", "5 lb x 15", "5 lb x 18", "7.5 lb x 10 (solo si el izquierdo llega arriba)", "7.5 lb x 12", "7.5 lb x 15", "5 lb x 12 (descarga)", "7.5 lb x máximas (test)"]
      }
    ],

    dom: [
      {
        nombre: "Dominada asistida (práctica)",
        series: 2,
        info: "Doble banda, LEJOS del fallo. No es una segunda sesión dura: son dos series cortas para sumar exposición al patrón con 24 horas de diferencia. Si terminas agotada, te pasaste.",
        semanas: ["Doble banda x 4-5", "x 5", "x 5", "x 5-6", "x 6", "x 6", "x 4 (descarga)", "x 5 (sin test)"]
      },
      {
        nombre: "Remo unilateral con mancuerna",
        series: 3,
        info: "Apoyo de rodilla y mano en el banco. Es la base de fuerza de tracción que sostiene la dominada, no un reemplazo: cuanto más fuerte el remo, más fácil la dominada. Última serie al fallo. Anota las reps de cada lado.",
        semanas: ["25 lb x 10/10", "25 lb x 12/12", "30 lb x 8/8", "30 lb x 10/10", "30 lb x 12/12", "35 lb x 8/8", "25 lb x 10/10 (descarga)", "35 lb x máximas (test)"]
      },
      {
        nombre: "RDL unilateral con apoyo",
        series: 3,
        info: "La mano libre va apoyada en la pared o el banco. Es el ejercicio que mejor funcionó en el M2: pasó de 30 a 40 lb sin una sola queja de agarre. Sigue la misma vía. Anota las reps de cada pierna.",
        semanas: ["40 lb x 10/10", "40 lb x 12/12", "45 lb x 10/10", "45 lb x 12/12", "50 lb x 8/8", "50 lb x 10/10", "35 lb x 10/10 (descarga)", "50 lb x máximas (test)"]
      },
      {
        nombre: "Sentadilla goblet con banco",
        series: 3,
        info: "Mancuerna vertical contra el pecho con las dos manos, y un BANCO detrás que te toque el glúteo al bajar. El banco fija la profundidad para que no redondees la espalda, que es lo que pasó las tres semanas que lo reportaste. Baja de peso antes que redondear. No subes de carga hasta que la espalda se mantenga recta.",
        semanas: ["25 lb x 10 (banco detrás, espalda recta)", "25 lb x 12", "30 lb x 10", "30 lb x 12", "35 lb x 10", "35 lb x 12", "25 lb x 10 (descarga)", "35-40 lb x máximas (test)"]
      },
      {
        nombre: "Negativas de fondo (banco)",
        series: 3,
        info: "En el soporte de pared, con los pies sin tocar el suelo. Solo la fase de BAJADA, controlada. Este bloque progresa por TIEMPO de bajada, no solo por reps: los segundos entre paréntesis son lo que debe durar cada bajada.",
        semanas: ["6 reps (bajada 3 s)", "7 reps (3 s)", "8 reps (3 s)", "6 reps (bajada 5 s)", "7 reps (5 s)", "8 reps (5 s)", "5 reps (3 s, descarga)", "máximas con bajada 5 s (test)"]
      },
      {
        nombre: "Press inclinado mancuerna (unilateral)",
        series: 3,
        info: "Banco inclinado, un brazo por vez. Arranca en 12.5 lb porque es donde terminaste el M2 de verdad, no en 15 donde decía el plan. Última serie al fallo. Anota las reps de cada lado.",
        semanas: ["12.5 lb x 10/10", "12.5 lb x 12/12", "15 lb x 8/8", "15 lb x 10/10", "15 lb x 12/12", "17.5 lb x 8/8", "12.5 lb x 10/10 (descarga)", "17.5 lb x máximas (test)"]
      }
    ]
  }
};
