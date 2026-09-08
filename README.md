# ◆ FitDiario · El Sistema

App de entrenamiento diario convertida en un **sistema de progresión de cazador**
al estilo de los manhwa de niveles: clases, dificultad, nivel y rango (E → S →
Monarca), estadísticas que suben con lo que entrenas, misión diaria con hora
límite y penalización, puertas semanales con jefe, mazmorras aleatorias, pruebas
de ascenso, títulos y ventanas del Sistema con voz y sonido. Debajo de todo eso:
demostraciones animadas, sesión guiada por voz, coach con IA y sincronización
entre dispositivos. Funciona en el móvil y en el ordenador, sin instalar nada.

## Realismo: el motor de carga

- **Prueba de despertar.** Antes de asignar cargas, el Sistema te mide: flexiones
  máximas, sentadillas en 60 s y plancha. De ahí salen las repeticiones de cada
  ejercicio (p. ej. 8 flexiones máximas → 4 por serie). Se repite cada 4 semanas y
  compara con la anterior.
- **Fases.** Cimientos (sem. 1–4: 2 series, máx. 4 días), Construcción (5–12: 3
  series, 5 días), Forja (13–24: 4 series, 6 días) y Atleta (25+). Cada fase
  indica un resultado esperado honesto: esto son meses.
- **Progresión automática.** Cada lunes el Sistema mira qué completaste de verdad
  la semana anterior por patrón (empuje, sentadilla, core, tirón, bisagra, cardio):
  ≥80 % de series → +8 % de carga; <50 % → −5 %.
- **Carrera progresiva.** El día de exterior sigue una progresión de caminar a
  correr (3 min andando/1 trotando … hasta 30–35 min continuos en 6 meses), con
  banco y barra del parque y registro de km.
- **Misión diaria real.** Entrenamiento, calentamiento, pasos (6.000 → 10.000
  según la fase), 2 L de agua, sin azúcar añadido ni ultraprocesados, extras
  pequeños y el cierre del día. En días de descanso: caminar 30 min.
- **Cierre del día.** 5 minutos guiados de respiración y estiramientos.
- **Cuerpo.** Peso, objetivo (IMC 24 si no lo fijas), IMC, ritmo real de pérdida
  y semanas estimadas a 0,5–0,7 kg/semana.
- **Habilidades.** A los niveles 3, 6, 10 y 15 eliges una de dos con efecto real
  (descansos más cortos, perdón de una misión semanal, penalizaciones a la mitad,
  XP extra en exterior, puntos extra por nivel, informe automático…).
- **Alarmas.** Hora de entrenar, cierre del día y aviso de misión a las 22:00,
  con ventana, sonido y vibración con la app abierta; notificaciones si el
  navegador lo permite; archivo de calendario descargable.
- **IA que actúa.** El Sistema puede cambiar tu entrenamiento de hoy, subir o bajar
  series y repeticiones de un ejercicio, asignarte una misión secundaria,
  registrar tu peso y cambiar la dificultad, y redacta un informe semanal.

## Experiencia completa

- **Tarjeta de cazador.** Licencia holográfica con emblema de rango, radar de
  estadísticas y número de cazador; se guarda como imagen PNG.
- **Cinemáticas.** Subidas de nivel, ascensos y poderes con pantalla completa,
  partículas, arpegio y voz; XP flotante; sacudida en las penalizaciones;
  ticks en las cuentas atrás.
- **Registro del día.** Agua por vasos, pasos, sueño y semáforo de comidas;
  completa sola la misión diaria y da referencias estimadas de kcal, proteína,
  agua y sueño (Mifflin-St Jeor con un déficit moderado).
- **Actividad libre.** Fútbol, bici, caminar, nadar…: XP (con tope diario),
  resistencia y agilidad.
- **Poderes.** 14 hitos físicos reales (10/25/50 flexiones, 40 sentadillas en
  60 s, plancha 1 y 2 min, primera dominada, 5 y 10 km, −5 y −10 kg, 30 burpees,
  pistol) con progreso; los medibles se desbloquean solos.
- **Mapa muscular.** Zonas que trabaja el entrenamiento de hoy y mapa de calor
  de la semana.
- **Proyección del Sistema.** Peso a 12 semanas en tres escenarios (plan al
  100 %, al 60 % y a tu ritmo real), siluetas ahora/en 12 semanas, flexiones
  máximas previstas y fechas estimadas de los próximos rangos.
- **Fotos de progreso.** Guardadas comprimidas en el dispositivo (IndexedDB),
  con comparación inicio/ahora.
- **Analista del Sistema.** Reglas sin conexión: inactividad, tendencia del
  peso, sueño, hidratación, semana por debajo del plan, carga reducida; con
  acción "modo ligero" (−20 % de repeticiones solo hoy).
- **IA.** Briefing diario, análisis del entrenamiento al terminar, sensación
  (fácil/justo/muy duro) que modula la progresión semanal.
- **Exportar.** Historial completo en CSV (entrenos, pesos, actividades, rutas,
  registro diario).

## El Sistema

- **Despertar.** Eliges nombre, clase (Luchador, Asesino, Tanque, Monje: cada
  una con su ciclo semanal de entrenamientos y su estadística principal) y
  dificultad (Normal, Difícil, Pesadilla, Muerte: multiplica reps, XP y castigo).
- **Ventana de estado.** Nivel, rango, poder, título y cinco estadísticas (FUE,
  AGI, VIT, RES, VOL) que crecen según los músculos que entrenas. Cada nivel da
  3 puntos para asignar a mano.
- **Misión diaria.** Entrenamiento asignado, calentamiento y extras (flexiones,
  sentadillas, abdominales, kilómetros) escalados a tu nivel. Límite: 23:59.
  Fallarla resta XP y aumenta los objetivos del día siguiente un 50 %
  (modo estricto desactivable).
- **Puertas.** Una por semana, con jefe y tareas contra reloj, del rango del
  cazador. Al alcanzar el nivel de un rango superior se abre una **prueba de
  ascenso**: derrotar a su jefe confirma el rango.
- **Mazmorras instantáneas.** Puertas rojas aleatorias (35 % de los días), 3–4
  rondas cortas contra reloj, opcionales, con XP y estadísticas extra.
- **Modo sombra.** De 21:00 a 05:00 se abre un ritual nocturno (AMRAP de
  10–12 min con la interfaz en tonos sombra). Con 4 rondas o más extraes una
  sombra con nombre y rango (Soldado, Élite, Caballero, Mariscal) para tu
  ejército; cada sombra da +2 % de XP permanente, hasta +30 %.
- **Eventos de temporada.** Del día 25 a fin de mes aparece un jefe de
  temporada propio de cada mes, un rango por encima del tuyo, con XP ×1,25 en
  todo mientras dura, gran recompensa y +5 a tu estadística principal.
- **Títulos.** 23 títulos por logros; el activo se muestra bajo tu nombre.
- **Ventanas del Sistema.** Avisos con efecto de escritura, sonido, destello y
  voz grave para subidas de nivel, ascensos, misiones, puertas y penalizaciones.
- **Canal del Sistema.** El chat con IA habla como el Sistema y puede asignarte
  misiones secundarias.

## Cómo usarla

1. Descarga `index.html` y ábrelo con el navegador (o abre la versión publicada).
2. Rellena tu nombre, nivel y días por semana. Ya tienes tu plan.
3. En el móvil: *Compartir → Añadir a pantalla de inicio* y queda como una app más.

## Entrenamiento

**Un entreno distinto cada día**, ajustado a tu nivel, que se puede hacer en
casa y sin material (si tienes mancuernas, apuntas los kilos):

| Día | Rutina |
|---|---|
| Lunes | Empuje — pecho, hombro y tríceps |
| Martes | Tirón — espalda y bíceps |
| Miércoles | Piernas y glúteos |
| Jueves | Core y HIIT |
| Viernes | Cuerpo completo |
| Sábado | Movilidad y recuperación |
| Domingo | Descanso activo |

Con menos días por semana el plan se reorganiza solo, y puedes cambiar la
rutina de hoy cuando quieras.

**Calentamiento guiado.** Antes de cada entreno de fuerza o HIIT, 6 movimientos
de unos 3 minutos (saltos, círculos de brazos, balanceos, rodillas arriba,
gato-camello, gusano) con su animación; la sesión guiada empieza por ahí.

**Demostraciones animadas.** Cada ejercicio tiene una figura animada que muestra
el movimiento correcto, dibujada en tiempo real (sin vídeos que descargar, funciona
sin conexión) y un consejo de técnica.

**Sesión guiada con voz.** La app te lleva serie a serie: cuenta atrás para
prepararte, cronometra los ejercicios de tiempo, te canta los descansos y te
avisa con voz, pitido y vibración. Solo tienes que hacer el ejercicio.

**Coach IA.** Un chat con un entrenador que conoce tu perfil, el entreno de hoy,
tu historial y tus récords. Pregúntale por técnica, versiones cortas del
entreno, molestias, progreso o motivación, y pídele retos personalizados.
La IA completa funciona en la versión publicada en claude.ai; en el archivo
local responde un coach básico con reglas.

**Tu rendimiento.** Racha (los descansos planificados no la rompen), entrenos y
tiempo totales, objetivo semanal, gráfica de volumen semanal (kg × reps),
gráfica de peso corporal, récords personales e historial con notas.

**Sincronización entre dispositivos.** Al abrir la app desde su enlace publicado
en claude.ai, los entrenos, la XP y los ajustes se guardan en la nube y aparecen
en cualquier dispositivo donde abras ese mismo enlace (mezcla por fecha: gana el
cambio más reciente). En el archivo local los datos viven en el navegador
(`localStorage`); en ambos casos hay botones para descargar una copia y
restaurarla.

## Detalles técnicos

Un único `index.html`: HTML, CSS y JavaScript sin dependencias ni build.
Las animaciones son una figura articulada interpolada entre poses en `<canvas>`;
las gráficas son SVG generado a mano; la voz usa la Web Speech API del
navegador; el coach IA usa la capacidad `sample` y la sincronización la capacidad `db` de
los artifacts de claude.ai cuando están disponibles. Probado con Playwright sobre Chromium.
