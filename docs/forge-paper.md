# Forge: entrenamiento y app

Este documento sirve para que una conversación nueva (con Claude o con quien sea) arranque con todo el contexto, sin tener que reconstruirlo. Tiene dos partes que no se mezclan:

- **Parte I · Entrenamiento:** qué se entrena, por qué y con qué reglas.
- **Parte II · App:** cómo está construida, cómo mide, cómo progresa y cómo genera el siguiente mesociclo.

Las dos explican el mismo sistema. La Parte I dice *qué* decide el sistema, y la Parte II *cómo* lo calcula la app.

Convenciones: **Hecho** = medido o registrado. **Inferencia** = conclusión razonada a partir de los hechos. **Supuesto** = valor elegido para avanzar, que se corrige con el primer registro.

Actualizado al 30 oct 2026, al cierre del M7 y con el M8 listo para el 9 nov.

---

# Parte I · Entrenamiento

## 1. Contexto del atleta

- **Usuario:** Samuel. Entrena en casa y vive en Colombia (UTC-5).
- **Lesión:** fractura trimaleolar del tobillo izquierdo, operada el 1 feb 2026. Sigue con la placa y los tornillos del maléolo lateral.
  - **Hecho:** la dorsiflexión izquierda está limitada.
  - **Hecho:** en la sentadilla usa una **cuña bajo el talón izquierdo**. Sin ella, el cuerpo compensa abriendo la postura (sumo funcional).
- **Hombro:** el derecho limita en rotación interna, al llevar el brazo por detrás de la espalda desde abajo.
- **Adherencia real:** 4 días por semana. En el M7 los viernes y sábados no se hicieron, y no fue por el pie.
- **Sesiones:** largas lo agotan. Tope de **~45-55 min**.
- **Fase:** cutting en curso (módulo Cut de la app).
- **Nivel:** intermedio. Con el método Nippard progresa semana a semana en los básicos, pero ya no de forma lineal indefinida.

## 2. Equipo

La fuente única es el objeto `EQUIPO` en `index.html`, visible en Config > Equipo.

**Barra y discos:**
- Barra de 15 kg.
- El disco en kg más chico es de 5 kg, así que la carga en kg sube de 10 en 10: 15, 25, 35…
- **Un par** de cada microdisco: 0.5 / 1.25 / 2.5 / 5 lb, que suman +0.45 / +1.13 / +2.27 / +4.54 kg. Se combinan entre sí.
  - Ejemplo: 60 kg = 55 + par de 5 lb + par de 0.5 lb.
  - El máximo con todos los microdiscos es +8.39 kg. Por eso a veces el siguiente peso cargable salta un poco más de lo pedido.

**Mancuernas:**
- Ajustables Sportfitness de 10-90 lb, que llegaron el 26 oct 2026.
- Posiciones de la perilla (lb): 10, 15, 20, 25, 28.5, 33, 41.5, 45, 50, 55, 60, 65, 70.5, 75, 80, 85, 90.
- Saltos de ~2.3 kg, salvo dos tramos:
  - 25 → 28.5 → 33, más finos;
  - 33 → 41.5, que son +3.9 kg (+26%).
- Antes había pares fijos de 5/10/20 kg, que solo permitían progresar por reps.

**Otros:** hay bandas de asistencia para dominadas. No hay dónde anclar una banda horizontal, así que todo lo que necesite anclaje queda descartado.

## 3. Medición: cómo se juzga el progreso

- **1RM estimado con Epley, sumando el RIR:** `e1RM = peso × (1 + (reps + RIR) / 30)`. Es la métrica común para comparar semanas y bloques con distintos pesos y reps.
  - Por encima de ~15 reps pierde precisión. En laterales a 18-20 reps es solo orientativo.
- **RIR** (reps en reserva) se anota en cada serie, de 0 a 4. Si no se anota, la app asume uno: 0 en los tests, o el planeado en el RDL. Sin RIR la app subestima.
- **Comparar sesiones completas, no solo la mejor serie.** Corrección del 28 oct, que el usuario tenía razón en pedir: además del mejor e1RM se miran las reps y los kilos totales de la sesión.
  - Ejemplo: sentadilla del pico M6 = 795 kg. Pico M7 = 950 kg (+19%), con 95 kg en las tres series a RIR 1, cuando en el M6 salía una sola al fallo.
- **Estancamiento:** dos bloques seguidos sin mejorar el 1RM estimado → cambiar variante o rango. No se aplica a un solo bloque flojo.

## 4. Reglas de progresión

Hay cuatro motores. Cada ejercicio usa uno según su clase.

### 4.1 Básicos pesados: progresión lineal (banca 1×5, Pendlay 3×8, sentadilla 3×3)

**Peso:** reps fijas, y el peso sube cada semana un incremento fijo (`inc`). Se calcula desde el **último registro real**, no desde el calendario: si se salta una semana, el peso no avanza solo.

**Regla del RIR**, cuando la semana sale completa:

| Lo que pasó | Siguiente semana |
|---|---|
| RIR 4+ en todas las series | Doble subida |
| Última serie a RIR 0 | Se mantiene el peso una semana |
| Cualquier otro caso | Subida normal |

**Tolerancia a fallos:**
- Falta **1 rep**, y es la primera vez: se repite el peso.
- Faltan **2+ reps**, o es el segundo fallo: **se cierra la subida solo de ese ejercicio.** La semana siguiente es test:
  - **AMRAP** (máximas reps) con el último peso completado;
  - o **triple pesado** (máximo × 3 a RIR 0-1) si el ejercicio tiene `cierre: "triple"`, como la sentadilla.

  El resultado se compara por 1RM estimado contra la referencia (`ref`) del bloque anterior.
- **Después del test** la subida se **reinicia** desde ese 1RM, con las reps objetivo a RIR 2, hasta el pico. En esa segunda subida un fallo solo repite el peso.
- **Si nunca falla,** el test es en el pico (S5).

### 4.2 RDL: reps fijas a 5 con RIR planeado por semana

- **RIR por semana:** S1-S2 a RIR 3, S3-S4 a RIR 2, S5 a RIR 1.
- **Peso:** sale del 1RM estimado promedio de la última sesión, redondeado **hacia abajo** a una carga real.
- **Corrección del M8:** si se cumplió el RIR planeado, el peso **nunca baja**. En el M7 el redondeo hacia abajo lo dejó 4 semanas en 65-66.5 kg.
- **Límite duro: nunca RIR 0.** Es redondeo lumbar bajo carga máxima. En la S5 del M7 la tercera serie fue a RIR 0: en el M8, si la serie va a quedar en RIR 0, se corta en la rep anterior.

### 4.3 Doble progresión (el resto de los ejercicios con carga)

- **Funcionamiento:** cada ejercicio tiene un rango de reps (ej. 8-12). Se sube carga solo cuando **todas** las series llegan al tope. Al subir, las reps vuelven al mínimo.
- **Recalibración:** si la primera serie queda por debajo del mínimo, se recalcula el peso desde el 1RM estimado, para el mínimo a RIR 2.
- **Incrementos en barra:**
  - curl y francés: +1.13 kg;
  - banca pausada: +1.13 kg;
  - el resto: +2.27 kg.
- **Mancuernas ajustables** (desde el M8): se anotan **en libras**, el número de la perilla. Se sube a la siguiente posición cuando la serie más floja predice, por Epley, al menos el mínimo del rango con ese peso. La app dice cuántas reps hacen falta.
  - Ejemplo: pullover 33 lb × 20/20/19 → "21+ reps para subir a 41.5".

### 4.4 Anclas (curl barra y press francés)

- **Qué son:** el indicador de fuerza de brazo, medido bloque a bloque. Cumplen para el brazo el papel que la banca cumple para el pecho.
- **Funcionamiento:** doble progresión en un rango estrecho (6-8).
  - Con RIR 4+ en todas las series al llegar al tope: **doble subida**.
  - En el pico (S5), la app dice cuántas reps superan la referencia del bloque anterior.
- **Sistema por músculo, igual para bíceps y tríceps:**
  - **Ancla** pesada 3×6-8 en el día A;
  - **el mismo ejercicio técnico** 2×10-15 en el día C, con ejecución estricta;
  - **accesorio** 2 series en B/D: martillo para bíceps, copa a una mano para tríceps.

### 4.5 Respaldo de la banca

- **Estructura:** banca 1×5 pesada (lineal) + 2×8 de respaldo.
- **Peso del respaldo:** **92% del peso que toca ese día** en la serie pesada, redondeado hacia abajo. Si la pesada sube, el respaldo sube solo.

## 5. Historia de los bloques

- **M4-M6:** varias estructuras (full body, push/pull/legs).
  - **Referencias del M6** que se usaron en el M7:
    - banca 65×8;
    - Pendlay 70×4;
    - sentadilla 95×3 a RIR 0 (antes de la lesión: 115×2);
    - francés 35×6.
  - **Dato corrupto:** el hip thrust del M6 (25×9) no es confiable; en el M5 hacía 32.5 kg.
- **M7** (28 sep - 7 nov): push / pull / pierna × 2, 6 días en el papel.
  - En la práctica se hicieron **4 días**: lunes, martes, miércoles y jueves.
  - Introdujo la progresión automática (sección 4).

### 5.1 Resultados del M7 (hechos, en 1RM estimado)

| Ejercicio | Inicio → pico | Cambio | Lectura |
|---|---|---|---|
| Press banca | ~84 → **~90** (75×5 RIR 1) | **+7%** | Funcionó la apuesta neural |
| Remo Pendlay | ~74.5 → **~80** (60×9 RIR 1) | **+7.4%** | Supera por primera vez al M6 (~79.3) |
| Sentadilla (cuña) | ~99 → **~111** (95×4 RIR 1, 95×3, 95×3) | **+12%** (+6% contra el M6) | Sesión +19% en kilos totales. Está a ~90% de antes de la lesión |
| RDL | ~82 → ~86 (70×6/5/5) | **+3% en la mejor serie**, +7% en kilos totales contra el M6 | Mejora moderada y real. No está estancado |
| Hip thrust | ~53 → **~63** (45×12/10, sin RIR) | **+18%** | Hecho solo 3 de 5 semanas |
| Curl barra | ~38 → ~41 (30×11) | **+8%** | Ancla que funciona |
| Press francés | ~39 → ~40 | Plano; por debajo del M6 (~42) | 2 series directas por semana: volumen insuficiente |
| Inclinado con barra | ~74.8 → ~74.8 | **0%** | Se reemplaza por mancuernas |
| Remo supino | ~78.8 → ~80.2 | +1.8% | Se reemplaza por remo a una mano |
| Pullover | 10 kg ×20 → **33 lb ×12×3** | Cambio de equipo | Carga real por primera vez |
| Dragon flag | Tuck en todo el bloque (registrado como "negativas") | — | Ver 6.6 |

**Jueves S5 del M7 (hecho):** cayó respecto al jueves S4.
- Banca 55×15/15/12 → 55×15/10/9.
- Inclinado 47.5×11×3 → 45×8×3.

**Inferencia:** es fatiga acumulada después de la semana pico. Confirma que la descarga de la S6 hace falta.

## 6. El M8 (9 nov - 19 dic 2026)

### 6.1 Estructura

- **4 días que flotan** en la semana, siempre en el mismo orden: **A → B → C → D**.
- Así entre los dos días de torso siempre hay uno de pierna, aunque entrenes 4 días seguidos.
- La app abre el primer día de la semana que esté sin completar.
- **Duración:** ~45-55 min por sesión.

| Día | Ejercicio | Series × reps | Arranque | Motor |
|---|---|---|---|---|
| **A · Torso pesado** | Press banca | 1×5 | 73.4 kg | Lineal +1.13, ref M7 75×5 RIR 1 |
| | Press banca respaldo | 2×8 | 67.3 kg | 92% de la pesada |
| | Remo Pendlay | 3×8 | 59.5 kg | Lineal +1.13, ref M7 60×9 RIR 1 |
| | Press inclinado con mancuernas | 3×8-12 | 45 lb | Doble progresión, perilla |
| | Curl barra (**ancla**) | 3×6-8 | 31.1 kg | Ancla, ref M7 30×11 |
| | Press francés (**ancla**) | 3×6-8 | 31.1 kg | Ancla, ref M6 35×6 |
| **B · Pierna pesada** | Sentadilla con cuña | 3×3 | 91.8 kg | Lineal +2.27, triple al cierre, ref M7 95×4 RIR 1 |
| | RDL | 3×5 | 67.3 kg | RIR planeado 3-3-2-2-1 |
| | Elevación lateral | 3×12-20 | 20 lb | Perilla |
| | Curl martillo | 2×8-15 | 25 lb | Perilla |
| | Elevación de talón a una pierna | 3×10-20 | 25 lb (**supuesto**) | Perilla |
| | Dragon flag | 3×6-10 | Nivel 3 (tuck 2/4) | Por nivel (6.6) |
| **C · Torso técnico** | Banca pausada (1-2 s en el pecho) | 3×6-8 | 62.3 kg | Doble progresión +1.13 |
| | Remo a una mano | 3×8-12 por lado | 50 lb (**supuesto**) | Perilla |
| | Aperturas | 3×10-20 | 20 lb (**supuesto**) | Perilla |
| | Pullover | 3×10-15 | 33 lb | Perilla |
| | Curl barra técnico | 2×10-15 | 25 kg | Doble progresión |
| | Press francés técnico | 2×10-15 | 25 kg | Doble progresión |
| **D · Pierna volumen** | Búlgara | 3×8-12 | 25 lb (**supuesto**) | Perilla; reps de la pierna izquierda |
| | Hip thrust | 3×8-12 | 45 kg | Doble progresión |
| | Nórdico asistido | 3×5-8 | Banda | Reps, después menos asistencia |
| | Elevación lateral | 3×12-20 | 20 lb | Perilla |
| | Copa a una mano | 2×10-15 | 25 lb (**supuesto**) | Perilla |
| | Elevación de talón a una pierna | 2×10-20 | 25 lb | Perilla |
| | Crunch | 2×12-20 | 20 kg | Doble progresión |

**Descarga (S6):** ~60-75% de la carga y menos reps.

### 6.2 Cómo salieron los arranques

**Básicos:** el 1RM estimado del pico, llevado a las reps objetivo con RIR 2-3.
- Sentadilla: ~111 a 3 reps con RIR 3 → 92.3 → **91.8** cargable.
- Banca: ~90 a 5 reps con RIR 2 → ~73.
- Pendlay: ~80 a 8 reps con RIR 2 → ~60 → **59.5**.

**Anclas:**
- Curl: 1RM ~41 → **31.1 kg**.
- Francés: 1RM M6 ~42 / M7 ~40 → 31.1 kg.

**Mancuernas sin datos** (supuestos): la primera sesión calibra. Si la primera serie no llega al mínimo, la app baja la perilla.

### 6.3 Decisiones y por qué

1. **Banca 1×5 + 2×8, no 3×5.**
   - **Hecho:** el mejor estímulo histórico vino de series a más reps (3×15).
   - **Inferencia:** el fallo técnico a 5 reps resta volumen de calidad.
   - Una sola serie pesada mide la fuerza; las de respaldo dan volumen sin llegar al fallo técnico.
2. **Punto débil de la banca:** la salida del pecho, con la barra yéndose hacia los pies.
   - Por eso la **banca pausada** va en el día C.
   - **Recomendación:** grabar la serie de lado.
3. **Inclinado con mancuernas en A y aperturas en C, no uno en lugar del otro.**
   - El press **transfiere a la banca**.
   - Las aperturas cargan el pecho estirado, que es justo la posición del punto débil.
   - **Hecho:** hay evidencia emergente a favor de entrenar en posición larga, y para pecho todavía es limitada.
   - **Cuidado:** bajar solo hasta un estiramiento cómodo, por el hombro derecho.
4. **Tríceps:** el francés se estancó por volumen (2 series directas por semana), no por el ejercicio. Se arma el sistema completo (ancla + técnico + accesorio).
   - La copa a una mano entra como **accesorio**, no como ancla.
   - **Hecho:** Maeo y colaboradores (2023) encontraron más crecimiento del tríceps con la extensión con el brazo por encima de la cabeza.
5. **Remo a una mano reemplaza al supino:** más rango, corrige asimetría y carga menos los erectores. **El pullover se queda.**
6. **RDL:** se mantiene 3×5 por RIR. El corte por estancamiento se retiró porque sí mejoró.
7. **Búlgaras:** vuelven en el M8, por decisión del usuario.
   - **Riesgo conocido:** la dorsiflexión del tobillo izquierdo cuando ese pie va adelante.
   - Mismo peso en las dos piernas; manda la izquierda.
8. **Gemelo:** estaba en 0 series.
   - **Hecho:** el déficit de fuerza para empujar con la punta del pie (flexión plantar) es una secuela típica de la fractura de tobillo.
   - Entra a una pierna, en un escalón y con el rango completo.
9. **Deltoide lateral 3+3.**
10. **Deltoide posterior:** el usuario **no quiere** trabajo directo. Queda en ~3 series indirectas por los remos. **No volver a proponerlo.**
11. **Cuádriceps en 6 series.** Subir más requiere tiempo que no hay. Se decide en el M9 según cómo responda a la búlgara.

### 6.4 Volumen semanal efectivo del M8

Directas = 1, indirectas = 0.5.

| Músculo | Efectivas | Lectura |
|---|---|---|
| Pecho | ~13.5 | Bien |
| Dorsal / espalda media | 9 | Aceptable (el RDL no cuenta: su isometría casi no estimula el dorsal) |
| Bíceps | ~10 | Bien |
| Tríceps | ~11.5 | Bien (en el M7 era ~6) |
| Deltoide anterior | ~4.5 | Suficiente: los press lo cubren |
| Deltoide lateral | 6 | Mejorado |
| Deltoide posterior | ~3 | Decisión del usuario |
| Cuádriceps | 6 | Bajo, aceptado |
| Glúteo | ~9 | Aceptable |
| Isquios | ~7.5 | Cubre cadera (RDL) y rodilla (nórdico) |
| Gemelo | 5 | Antes 0 |
| Core | 5 | Bien |

### 6.5 Registro: reglas para que los números sirvan

- Anota la carga **real** de la barra: 59.5, no 60, si eso es lo que tiene.
- Mancuernas en el M8: **en libras**, el número de la perilla.
- **RIR siempre**, también en el hip thrust y los accesorios.
- Búlgara y elevación de talón: **reps de la pierna izquierda**.
- Dragon flag: en la casilla de kg/lb va el **nivel** (6.6).
- Si una serie no se hizo, no la anotes. La app cuenta las series faltantes como reps perdidas.
  - **Hecho:** en la S4 del M7 la sentadilla tenía solo 2 series anotadas y la app cerró la subida.

### 6.6 Dragon flag: escala por apertura del tuck

| Nivel | Variante |
|---|---|
| 1 | Tuck 4/4 (rodillas al pecho) |
| 2 | Tuck 3/4 |
| **3** | **Tuck 2/4: arranque del M8** |
| 4 | Tuck 1/4 |
| 5 | Cadera extendida con rodillas flexionadas |
| 6 | Completo |

- **Sin negativas ni elevaciones:** el usuario ya domina el tuck.
- **Por qué no está la variante a una pierna** (inferencia, con proporciones estándar del cuerpo):

| Variante | Carga de las piernas sobre el hombro, relativa al completo |
|---|---|
| Tuck 4/4 | ~45% |
| Una pierna estirada | ~73% |
| Cadera extendida, rodillas flexionadas | ~90% |
| Completo | 100% |

  La de una pierna es más fácil que el nivel 5 y además es asimétrica, así que no aporta a la ruta.
- **Para subir de nivel** decide la técnica, no las reps.

## 7. Movilidad

En la app es el módulo "movilidad"; internamente se llama "rehab".

- **Diario, con la dosis completa (~36 min).** Lo decidió el usuario: tiene una franja fija en la tarde, y eso le sostiene el hábito. Si no se sostiene, se bajan primero las series de caderas.
- **Orden de la sesión:**
  1. **Tobillo:** movilización del astrágalo → dorsiflexión con carga → sentadilla en pared.
  2. **Hombro:** cruzado derecho → correa con el brazo izquierdo arriba → correa con el derecho arriba → lift-off derecho. Primero estirar, después fuerza activa.
  3. **Caderas, en el suelo:** couch stretch → split con apoyos → elevación de pierna → sapo → inclinación de pelvis → straddle contraer-relajar → piernas en V, como cierre pasivo.
- **Objetivos:**
  - tobillo izquierdo de 7 a ~11-12 cm (el derecho mide 12, que es la meta del encabezado);
  - straddle y split frontal;
  - corregir la asimetría del hombro.
- **Progresión:** 5 sesiones completas suben un nivel. Una sesión parcial ni cuenta ni reinicia el conteo.
- **Mediciones:** en cm, con "+ medir" o en el aviso del domingo.

## 8. Pendientes de entrenamiento

- **Composición corporal:** fotos + 7 pliegues para estimar el % de grasa y la masa magra. Se calcula con la fórmula de 7 pliegues de Jackson-Pollock; las fotos se usan como contexto.
- **Al cierre del M8:** revisar cuádriceps (¿4 series de búlgara u otro ejercicio?) y el RIR que se anota en el RDL.

---

# Parte II · App

## 1. Arquitectura

**Archivos:**
- **`index.html`:** toda la app (HTML + CSS + JS en línea). No tiene build ni frameworks.
- **`sw.js`:** service worker con estrategia network-first.
- **`manifest.json`** e íconos: la PWA "Forge".

**Datos:** `data-samuel.json` en el mismo repo. Es la fuente de verdad del sync. Hay un archivo por usuario: samuel, dolly y nata.

**Sync con la API de GitHub,** usando un token que se pega en Config:
- **↑** sube todo el estado local (`pushToGithub`).
- **↓** descarga y mezcla (`pullFromGithub`). Por registro gana el `timestamp` más reciente; la movilidad mezcla por día.
- **Orden:** push antes que pull. Si es al revés, un remoto vacío pisa lo local.

**Deploy:**
- GitHub Pages publica desde la rama `main-/-/-(root)`.
- El desarrollo va en `claude/hola-2027ss`; cada cambio se fusiona y se sube a las dos.
- **↻ update** trae el `index.html` nuevo sin reinstalar la PWA.

**Validación antes de cada push:**
- extraer los `<script>` y correr `node --check`;
- pruebas con Playwright: Chromium ya está instalado, con `NODE_PATH=$(npm root -g)` y el servidor `python3 -m http.server 8765`.

## 2. Modelo de datos del entrenamiento

- **Registro de serie:** `registros["M8-S3-b-Sentadilla (barra + cuña)-2"] = {peso, reps, rir, checked, timestamp}`.
  - Formato de la clave: `{meso}-S{semana}-{día}-{nombre}-{serie}`.
  - El peso puede venir con coma decimal ("87,3").
- **Mesociclo:**
  - `MESOCICLOS[clave] = {label, semanas: 6, fechas[6], modelo: "doble_progresion", mancuernas?, flotante?, dias[{key,label,titulo}], plan{dia: [ejercicio]}}`.
  - El pico es la semana `semanas - 1` y la descarga, la última.
  - La semana y el día que se abren salen de `fechas`, comparando con la fecha real.
- **Ejercicio:**
  - **campos base:** `{nombre, series, rol, semanas[6], prog?, ancla?, ref?, inc?, clase?, variantes?, info?, equipo?}`;
  - **el texto de `semanas[i]`:** define el rango ("x 8-12") y el peso de arranque ("45 lb x 8-12", "73.4kg x 5");
  - **el motor de progresión, en `prog`:**
    - `prog.tipo = "lineal"`, con `reps, inc, cierre: "amrap"|"triple", ref{peso, reps, rir, label}`;
    - `prog.tipo = "rir"`, con `reps, rirPlan[5]`;
    - `prog.tipo = "respaldo"`, con `de, reps, pct`;
    - sin `prog`: doble progresión.
- **Usuario:** `USUARIOS.samuel.mesociclos` es la lista de mesociclos visibles.

## 3. Motor de progresión

| Función | Qué hace |
|---|---|
| `combinarDiscos(objetivo, min, max)` | La carga cargable más cercana, con barra, discos de 5 kg y un par de cada microdisco. Devuelve el total y el texto ("65kg en barra + par 2.5lb") |
| `analizarLineal` | Motor lineal (4.1). Devuelve sugerencia, peso de hoy y fase: subida, test, reinicio o fin |
| `analizarRir` | RDL (4.2) |
| `analizarRespaldo` | Respaldo de la banca (4.5) |
| `sugerenciaMancuerna` | Salto de perilla (4.3) |
| `sugerenciaProgresion` | Elige el motor; para las anclas, añade en el pico la comparación con la referencia |
| `chipsSemanas` | Chips de las semanas: pasadas = lo registrado; futuras = proyección desde el peso real |
| `claseEjercicio` | Básico, ancla o accesorio, que decide el descanso: 180, 150 o 120 s, ajustables en Config |
| `fmtSeries` | Muestra lo registrado en kg, en lb (perilla) o con el nombre de la variante |

**Todos los mensajes de carga muestran los discos,** incluido "Mantén X". Si es mancuerna, muestran la perilla ("25 lb · 11.3 kg").

## 4. Generador de mesociclos (M9 en adelante)

**Objetivo:** que la app arme sola el bloque siguiente a partir de los datos del anterior. El chat queda para **revisar** lo que generó, no para escribirlo.

### 4.1 Cuándo y dónde

- **Lugar:** Config > Generador.
- **Cuándo:** el botón se habilita con datos del pico (S5) del último mesociclo. Avisa si el pico no tiene registros.
- **Qué produce:** el mesociclo siguiente (M8 → M9). Usa los mismos días y ejercicios, con pesos, referencias y fechas nuevas. Las fechas son 6 semanas seguidas desde el lunes siguiente al fin del bloque anterior.
- **Dónde lo guarda:** como **datos**, no como código.
  - En local va en `mesos-generados`.
  - En el sync va en la clave `mesociclos` de `data-samuel.json`.
- **Al abrir la app:** los mesociclos generados se suman a `MESOCICLOS` y a la lista del usuario.
- **Lo que queda en código:** del M1 al M8. Los generados conviven con ellos.

### 4.2 Reglas, por motor

| Motor | Arranque del bloque nuevo | Nueva `ref` |
|---|---|---|
| **Lineal** | Mejor 1RM estimado del bloque → reps objetivo a **RIR 3** → redondeo hacia abajo a carga real | La mejor serie del bloque (peso, reps, RIR) |
| **RIR (RDL)** | 1RM estimado promedio de la mejor sesión → 5 reps al RIR de la S1 → hacia abajo | — |
| **Respaldo** | Se copia: sale solo de la serie pesada | — |
| **Ancla** | Doble progresión: último peso; si llegó al tope en todas las series, una subida | La mejor serie del bloque |
| **Doble progresión (barra)** | Último peso registrado; si llegó al tope, +`inc`; si la primera serie quedó bajo el mínimo, recalibra | — |
| **Mancuerna ajustable** | Misma regla de la perilla (`sugerenciaMancuerna`) | — |
| **Con variantes** (dragon flag) | Último nivel registrado | — |
| **Sin carga** (nórdico) | Se copia | — |

**La semana de descarga se escribe sola:** ~70% del arranque, con las reps mínimas.

**El generador también avisa** (avisa, no decide):
- **Estancamiento:** el mejor 1RM estimado no mejoró contra el bloque anterior. Se compara por nombre de ejercicio, sin importar el día. Dos bloques así → cambiar variante o rango.
- **Sin datos:** un ejercicio sin registros en el bloque queda con su arranque anterior, marcado.
- **Adherencia:** sesiones hechas contra planeadas.

### 4.3 Lo que no hace, a propósito

- **No cambia ejercicios.** Equipo nuevo, una lesión o un estancamiento repetido quedan a criterio humano. Para eso está la revisión.
- **No cambia el volumen** ni la estructura de los días.

### 4.4 Resumen para revisar

Cada mesociclo generado guarda `generado = {desde, fecha, resumen[], avisos[], adherencia}`. Cada línea del resumen dice:
- ejercicio;
- arranque anterior → nuevo;
- en qué se basa;
- el motivo.

Ese resumen se ve en Config y viaja en `data-samuel.json`.

## 5. Flujo con Claude: la app decide y el chat revisa

1. Se termina el bloque, registrando el pico completo.
2. En la app: Config > Generador > **Generar**, y después **↑**.
3. En una conversación nueva: "revisa el M{n} generado". Claude lee:
   - este documento;
   - `CLAUDE.md`;
   - `mesociclos.M{n}.generado` en `data-samuel.json`.
4. Claude da su veredicto: está bien o hay que cambiar algo. Los cambios son de criterio humano (ejercicio, volumen, lesión).
   - **Si hay ajustes:** se editan los datos del mesociclo generado, o se cambia una regla del generador y se regenera.

**Objetivo de fondo:** que el sistema sea autorregulado. La app mide (1RM estimado, RIR, kilos totales, adherencia), aplica las reglas y genera el bloque. Claude interviene solo donde hace falta juicio:
- estancamientos de dos bloques;
- cambios de equipo o de lesión;
- desequilibrios de volumen;
- datos sospechosos, como series sin anotar o un RIR inflado.

## 6. Errores ya resueltos (no reintroducir)

- **Caracteres en el JS:** el guion largo (—), el guion medio (–) y las comillas invertidas anidadas dentro de una plantilla de texto rompen el JS. Validar siempre con `node --check`.
- **Fechas:** se arman con `new Date(año, mes-1, día)`, nunca con un texto "YYYY-MM-DD". Ese formato se lee en UTC y en Colombia corre las fechas un día.
- **Vistas nuevas:** van en tres lugares: el botón del bottom-nav, el array de clases activas y la rama de `render()`.
- **Pull de movilidad:** mezcla por día con `_ts`, no pisa lo local.
- **Clon superficial del repo:** si el merge dice "unrelated histories", correr `git fetch --deepen=500`.

## 7. Checklist para una conversación nueva

1. Leer `CLAUDE.md` y este documento.
2. Datos: `git show "origin/main-/-/-(root)":data-samuel.json`. Los registros del entrenamiento están en `registros`.
3. Para revisar un bloque:
   - 1RM estimado por ejercicio y sesión completa (reps y kilos totales), contra el bloque anterior;
   - adherencia;
   - series sin anotar;
   - RIR 0 en el RDL.
4. Antes de cambiar código: `node --check`, una prueba con Playwright, y push a `main-/-/-(root)` y a `claude/hola-2027ss`.
5. **Preferencias del usuario:**
   - respuestas en español, en modo clínico y sin complacencia;
   - separar hecho, inferencia y supuesto;
   - en la app, nada de textos largos en las tarjetas;
   - si pregunta para revisar o pensar, no se toca el código.
