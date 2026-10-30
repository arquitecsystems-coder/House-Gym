# Forge — Contexto del proyecto

**Documento completo (entrenamiento + app, decisiones y por qué): `docs/forge-paper.md`. Leerlo al abrir una conversación nueva.**

App de tracking personal: entrenamiento (mesociclos), rehabilitación de tobillo, y cutting phase (composición corporal). PWA instalada en iPhone y PC, hosteada en GitHub Pages.

## Arquitectura

- **index.html** — único archivo, todo el código (HTML + CSS + JS inline). Sin build step, sin frameworks.
- **manifest.json** — metadata de PWA (nombre "Forge", iconos, theme color).
- **sw.js** — service worker. Estrategia network-first para archivos propios; deja pasar sin cache las llamadas a dominios externos (api.github.com).
- **data.json** — almacena TODOS los datos del usuario (registros de sesión, rehab, cut). Es la fuente de verdad para sync entre dispositivos.
- **icon-*.png, splash-*.png** — assets de PWA, generados con Python/PIL (estilo MacroFactor: fondo negro, letras "FO" blancas).

No hay backend propio. Todo el "backend" es la API de GitHub (Contents API) llamada directamente desde el navegador con un Personal Access Token que el usuario pega en Config.

## Sync entre dispositivos — cómo funciona

- **NO se usa Google Sheets.** Se intentó primero y se abandonó por problemas de CORS irresolubles desde un dominio externo (github.io) hacia Apps Script. No reintentar esa ruta.
- El sync es vía `data.json` en este mismo repo, leído/escrito con la API de GitHub (`api.github.com/repos/.../contents/data.json` para escribir, `raw.githubusercontent.com/.../data.json` para leer — este último sí soporta CORS).
- Dos botones explícitos en el header: **↑ upload** (sube datos del dispositivo actual) y **↓ download** (descarga y mergea). Se decidió NO usar un solo botón de "sync automático" porque genera ambigüedad sobre qué dirección ganó en caso de conflicto.
- El merge es por timestamp: cada registro individual tiene su propio `timestamp`, y al hacer pull se compara remoto vs local, gana el más reciente.
- **Orden crítico:** al hacer pull+push combinado, push debe ir ANTES que pull. Si pull va primero y el remoto está vacío/desactualizado, sobreescribe los datos locales antes de que se puedan subir. (Bug ya resuelto, no reintroducir.)

## Botón ↻ update (actualización de código, no de datos)

Separado del sync de datos. Sirve para que el usuario actualice el código de la app sin pasar por reinstalar la PWA. Usa el token de GitHub para traer el `index.html` más reciente del repo.

## Errores ya resueltos (no reintroducir)

1. **Caracteres especiales rompen el parser JS dentro de template literals con backticks anidados.** Específicamente: em dash (—), en dash (–) dentro de strings de datos, y backticks anidados sin escapar dentro de otro template literal ya abierto. Validar siempre con `node --check` antes de subir.
2. **Fechas con `new Date("YYYY-MM-DD")` se interpretan como UTC medianoche**, lo cual en Colombia (UTC-5) se traduce a las 7pm del día anterior — desplaza todas las fechas un día. Siempre parsear como `new Date(year, month-1, day)` (constructor numérico = hora local).
3. **El router de vistas (`render()`) es un if/else manual por cada vista.** Cada vez que se agrega una vista nueva (`rehab`, `cut`, `profile`) hay que agregarla en TRES lugares: el array de nav (`forEach`), el if/else del router, y el bottom-nav HTML. Olvidar uno de los tres causa que la pestaña "no entre" sin error visible. Checklist al agregar vista nueva: (a) botón en bottom-nav, (b) entrada en el array de clases activas, (c) rama en el if/else de `render()`.
4. **El service worker cachea agresivamente.** Si se edita `sw.js`, hay que subir versión de CACHE incrementada (`forge-v3` → `forge-v4`) o el cambio no se aplica aunque se suba el archivo nuevo a GitHub. Actualmente usa estrategia network-first para que esto importe menos, pero si se vuelve a cache-first, recordar esto.
5. **Argument list too long en curl con `-d payload`** si el HTML es grande (~90kb+ en base64). Solución: escribir el payload a un archivo temporal y usar `-d @archivo` en vez de pasar el string directo.
6. **Tras hacer pull de datos remotos, hay que re-renderizar la vista actual explícitamente** si no es la vista por defecto (`session`). `render()` solo refresca según `state.view`, pero si el pull ocurre en background hay que forzar `renderRehab()` / `renderCut()` si el usuario está parado ahí.

## Decisiones de diseño deliberadas (no son bugs, no "arreglar")

- El wizard de Cut (3 pasos) es solo para el setup INICIAL. La edición posterior usa un modal con todos los campos a la vez — no el wizard. Si alguien pide "editar mi target", es el modal (`editCutSetup()` → `saveEditModal()`), no reabrir el wizard.
- Pliegues semanales: solo se trackean los 3 pliegues que el sistema detectó automáticamente como los más altos al inicio (los de mayor mm), más cintura. NO se vuelve a calcular % de grasa con esos 3 — eso solo se hace con los 7 pliegues completos en una revisión mensual (feature pendiente, no implementada aún).
- La progresión de pérdida de peso semanal es fija (no rango), tirando siempre al extremo conservador: >15% grasa → 0.5kg/sem, 12-15% → 0.35kg/sem, <12% → 0.25kg/sem.
- Auto-detección de posición (qué mesociclo/semana/día mostrar al abrir) se basa en la fecha real comparada contra el campo `fechas` de cada mesociclo en `MESOCICLOS`. Si un mesociclo no tiene `fechas` definido, cae a memoria de última posición guardada en localStorage (`forge-position`). Esto es intencional, no fallback temporal.

## Estilo visual

Tema claro por defecto, oscuro disponible via toggle (botón en header), variables CSS en `:root` vs `body.dark`. Acento verde oliva (`--accent: #5C7A00` light / `#c8ff00` dark). Tipografía monoespaciada para todos los datos numéricos (pesos, fechas, RMs). Sin sombras, separación de cards por borde de 1px. Inputs en dark mode necesitan override explícito con `!important` porque los estilos nativos de los inputs no heredan bien las variables CSS en todos los navegadores — ya está resuelto en el bloque `body.dark input` del CSS, no quitar.

## Convención de capitalización

Headers de sección usan mayúscula solo en la primera letra ("Pesos", "Objetivo", no "PESOS", "OBJETIVO"), salvo los `.cut-title` y `.rehab-title` que usan letra pequeña + tracking ancho como estilo de eyebrow/label (esos sí van en mayúsculas por diseño, no cambiar).

## Pendientes conocidos (mencionados en conversación, no implementados aún)

- Splash screen: agregado solo para iPhone 15 y 3 tamaños más comunes. Si el usuario reporta que no aparece en su modelo específico, puede faltar el tamaño exacto en las meta tags `apple-touch-startup-image`.
- Revisión mensual de pliegues completos (7) con recálculo de % grasa real — mencionada como concepto pero sin UI construida.
- Multi-usuario: arquitectura pensada para escalar (cada usuario su propio `data-{nombre}.json`) pero no implementada — actualmente todo es un solo usuario, un solo `data.json`.

## Progresión automática M7 (implementada)

- Básicos pesados (`prog.tipo: "lineal"`): reps fijas, peso calculado desde el último registro real. Regla RIR: RIR >=4 en todas las series -> doble incremento; última serie a RIR 0 -> mantener una semana; resto -> incremento normal. Tolerancia: 1 sola rep perdida (primera vez) -> repetir peso. 2+ reps perdidas, o segundo fallo -> se cierra la subida SOLO de ese ejercicio y la semana siguiente es test (AMRAP con el último peso completado, o triple pesado si `cierre: "triple"`), comparado por e1RM (Epley, suma RIR) contra `prog.ref`. Tras el test la subida se REINICIA desde ese e1RM (reps objetivo a RIR 2) hasta el pico; fallos en la segunda onda solo repiten peso. Si nunca falla, el test es en el pico.
- RDL pesado (`prog.tipo: "rir"`): reps fijas a 5 con RIR objetivo por semana (`rirPlan`). El peso sale del e1RM promedio del último registro (sin RIR anotado se asume el RIR planeado de esa semana) y se redondea SIEMPRE hacia abajo a carga real. Límite duro: nunca RIR 0.
- Chips de semanas: pasadas = lo registrado; futuras de básicos = proyección desde el peso real; tras el cierre = "bloque cerrado".
- Doble progresión (resto de ejercicios con barra): sube solo cuando TODAS las series llegan al tope del rango. Mancuernas (pares 5/10/20kg): solo reps, sin saltos de carga.
- **Equipo (fuente única: objeto `EQUIPO` en index.html, visible en Config > Equipo; NO repetir valores en otro lado):** barra 15 kg; disco kg mínimo 5 kg por lado (la carga en kg sube de 10 en 10); UN par de cada microdisco 0.5 / 1.25 / 2.5 / 5 lb (+0.45 / +1.13 / +2.27 / +4.54 kg), combinables (ej. 60 kg = 55 + par 5 lb + par 0.5 lb). Mancuernas ajustables Sportfitness 10-90 lb (llegaron el 26 oct 2026), posiciones por mancuerna en lb: 10, 15, 20, 25, 28.5, 33, 41.5, 45, 50, 55, 60, 65, 70.5, 75, 80, 85, 90 (4.5 a 40.8 kg). Saltos ~2.3 kg salvo 25->28.5->33 (más finos) y 33->41.5 (~3.9 kg, +26%).
- Mensajes de carga: todo mensaje con peso de barra muestra la combinación de discos (incluido "Mantén X"); con mancuerna ajustable muestra la perilla ("25 lb · 11.3 kg"). Ejercicios sin "(barra" en el nombre no muestran discos (ej. crunch).
- Mancuernas ajustables en la app: solo en mesociclos con `mancuernas: "ajustables"` (desde el M8); ahí el peso de ejercicios con mancuerna ("(DB)" o `equipo: "mancuerna"`) se anota en LIBRAS (número de la perilla) y el plan se escribe como "33 lb x 10-20". Regla del salto (`sugerenciaMancuerna`): se sube a la siguiente posición cuando la serie más floja predice (Epley) al menos el mínimo del rango con ese peso; el mensaje dice cuántas reps hacen falta. Bajo el mínimo, recalibra a una posición menor. En el M7 las mancuernas siguen como antes (kg, solo reps).
- Clases de ejercicio (`claseEjercicio`): `basico` (prog lineal/rir o rol fuerza/secundario/volumen/tecnico), `ancla` (`ancla: true`: curl barra y press francés, fuerza de brazo medida bloque a bloque) y `accesorio` (resto: aislamientos, core, patrón motor). Se puede fijar con `clase`. El temporizador usa un descanso por clase (Config: Básicos / Anclas / Accesorios; por defecto 180 / 150 / 120 s) y la tarjeta muestra la clase.
- **M8 (construido, 9 nov - 19 dic 2026):** `flotante: true` (días A torso pesado, B pierna pesada, C torso técnico, D pierna volumen; al abrir la app muestra el primer día de la semana sin completar), `mancuernas: "ajustables"` (mancuernas en lb). Banca: serie pesada 1x5 (lineal, +1.13) + `Press Banca respaldo (barra)` 2x8 con `prog.tipo: "respaldo"` (92% del peso que toca hoy en la pesada). Anclas (curl barra y francés 3x6-8 en A, con `ref` del bloque anterior): con tope del rango y RIR >=4 en todas las series suben doble; en el pico la sugerencia dice cuántas reps superan la `ref`. Mismo ejercicio técnico 2x10-15 en C (sin `ancla`). Accesorios de brazo, laterales (3+3) y elevación de talón a una pierna (3 en B, 2 en D: el gemelo estaba en 0 y el déficit de flexión plantar es secuela típica de la fractura) en B/D. Deltoide posterior: el usuario NO quiere trabajo directo, no proponerlo. Sentadilla 3x3 lineal (ref M7 95x4 RIR 1), RDL 3x5 por RIR (si se cumplió el RIR planeado el peso no baja), búlgara en D (vuelve en el M8; mismo peso ambas piernas, reps de la izquierda). Dragon flag con `variantes`: en el campo de peso se anota el nivel (1 tuck 4/4 rodillas al pecho, 2 tuck 3/4, 3 tuck 2/4, 4 tuck 1/4, 5 cadera extendida con rodillas flexionadas, 6 completo). Todo el M7 fue tuck aunque el registro dijera "negativas"; el usuario NO hace negativas ni elevaciones y progresa abriendo la cadera de forma simétrica (la variante a una pierna queda fuera: es más fácil que el nivel 5 y asimétrica).

## Movilidad (módulo interno "rehab")

- En la UI se llama "movilidad" (antes "rehab"). Los ids internos se mantienen (vista `'rehab'`, `renderRehab`, storage `rehab-datos`, `tieneRehab`, clave `rehab` en data-{usuario}.json): renombrarlos rompe storage, sync y posición guardada.
- Ejercicios en `REHAB_EJERCICIOS` y `REHAB_LEGACY` (planes anteriores, solo para leer historial y calendario). Cada ejercicio cuenta en el plan entre `desde` (por defecto `REHAB_PLAN_DESDE`) y `hasta`: así agregar o quitar ejercicios no castiga días pasados. Campos: `id, grupo, alterna, tipo ('tiempo'|'reps'), sets, valor, lados (2 = por lado), segRep, extraSeg, desde, hasta, prog {paso, tope, setsMax, cargas, avanza}`. `prog.cargas` repite el ciclo de niveles con cada carga.
- Estructura actual (19 oct 2026): TODO diario y con dosis completa (~36 min), por decisión del usuario: tiene una franja fija en la tarde y eso le sostiene el hábito; si no lo completa, se baja volumen. Orden para mejor resultado: Tobillo (movilización del astrágalo -> dorsiflexión con carga -> sentadilla en pared), Hombro (cruzado der -> correa izq arriba -> correa der arriba -> lift-off der: estirar y luego fuerza activa), Caderas al suelo (couch stretch -> split con apoyos -> elevación de pierna -> sapo -> inclinación de pelvis -> straddle contraer-relajar -> piernas en V como cierre pasivo). La lógica de días alternos (`alterna`, `rehabBloqueHoy`) sigue en el código pero no la usa ningún ejercicio. Sin banda (no hay dónde anclarla). Hombro: limita el derecho en rotación interna -> más dosis a correa izquierdo arriba, cruzado y lift-off derechos.
- Progresión: el nivel se calcula repasando el historial (`rehabEstado`): `avanza` (por defecto 5) sesiones COMPLETAS (todas las series al objetivo) suben un nivel; sesión parcial no cuenta ni resetea; la sesión de hoy no cuenta (el objetivo no cambia a mitad del día). Los botones ▼▲ fijan un nivel manual (`nivelAjuste`; la sesión de ese mismo día ya cuenta, porque su objetivo era el nivel nuevo). El nivel 1 de cada ejercicio debe coincidir con la capacidad real (no se puede bajar de él): se calibró sapo en 30 s y piernas en V en 90 s con el primer registro. Ejercicios sin `prog` son fijos a propósito: su progresión es de calidad o rango, no de conteo.
- Registros: `sesiones[fecha][ejId] = [{valor, completado}]` (los viejos usan `tiempo` en segundos; se leen ambos) más `_ts` por día. Filas = sets x lados (S1 izq, S1 der, ...).
- El pull de rehab hace MERGE (`mergeRehabDatos`): por día gana el `_ts` más reciente; antes pisaba el local y, como la app hace pull al abrir, un registro sin subir se perdía.
- Historial: calendario mensual con ◀ ▶ (`rehabMesVista`, `rehabCambiarMes`), limitado entre el mes del primer registro y el mes actual; tocar un día muestra el detalle. Reemplazó un mapa de calor de una fila por semana que crecía sin límite.
- Mediciones (botón "+ medir" o banner del domingo): tobillo izquierdo en `datos.mediciones` (compatibilidad) y el resto en `datos.metricas[fecha]` (`REHAB_METRICAS`: tobillo der, straddle, split izq/der, hombro), todo en cm; se fusionan por fecha y campo en el pull. La meta del encabezado es el último tobillo derecho registrado (12 cm por defecto). El criterio de re-ingreso "Dorsiflexión ≥ 7 cm" es aparte y sigue en 7. El criterio "equilibrio" está fijo en `auto: true` (no lee datos).

## Pendiente: movilidad

- Actividad y Hábitos (Nata) conservan el mapa de calor largo que crece hacia abajo; si molesta, se les puede aplicar el mismo calendario mensual.
- Sesión diaria de ~36 min: si no se sostiene, bajar series de caderas primero (o volver a días alternos).

## Generador de mesociclos (implementado 30 oct 2026)

- Config > Generador (solo usuarios con `tieneEquipo`): arma el M{n+1} desde los registros del último mesociclo de la lista, con los mismos días y ejercicios. Detalle completo de las reglas en `docs/forge-paper.md` (Parte II, sección 4).
- Se guarda como DATOS: localStorage `mesos-generados` y clave `mesociclos` de `data-{usuario}.json`. `registrarMesosGenerados()` los suma a `MESOCICLOS` al abrir la app y tras cada pull. El merge es por `generado.ts`; borrar deja una lápida `{borrado: true}` para que el pull no lo resucite. Del M1 al M8 siguen en código.
- Cada mesociclo generado guarda `generado = {desde, fecha, ts, resumen[], avisos[], adherencia}`. Es lo que Claude revisa en una conversación nueva.
- No cambia ejercicios ni volumen (criterio humano). Estancamiento de 2 bloques → aviso.
- Fechas con año opcional ("4–9 ene 2027"): `mesoRango` y `detectPosition` lo leen; sin año = 2026.

## Flujo de deploy

No hay CI/CD. Cada cambio a `index.html` (o cualquier asset) se sube directo al repo vía API de GitHub (o manualmente desde la interfaz web). GitHub Pages redeploya automáticamente en 1-2 minutos tras cualquier push a `main`. Verificar siempre sintaxis JS con `node --check` antes de subir — no hay otro paso de validación.
