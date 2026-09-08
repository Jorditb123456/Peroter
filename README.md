# ◆ FitDiario · El Sistema

App de entrenamiento diario convertida en un **sistema de progresión de cazador**
al estilo de los manhwa de niveles: clases, dificultad, nivel y rango (E → S →
Monarca), estadísticas que suben con lo que entrenas, misión diaria con hora
límite y penalización, puertas semanales con jefe, mazmorras aleatorias, pruebas
de ascenso, títulos y ventanas del Sistema con voz y sonido. Debajo de todo eso:
demostraciones animadas, sesión guiada por voz, coach con IA y sincronización
entre dispositivos. Funciona en el móvil y en el ordenador, sin instalar nada.

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
- **Títulos.** 18 títulos por logros; el activo se muestra bajo tu nombre.
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
