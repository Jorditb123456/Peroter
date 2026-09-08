# ⚡ FitDiario — entrena todos los días y controla tu rendimiento

App para entrenar a diario, con demostraciones animadas de cada ejercicio,
coach con IA, sesión guiada por voz, retos, XP y rangos. Funciona en el móvil
y en el ordenador, **sin instalar nada**. Tus datos se guardan en tu dispositivo.

## Cómo usarla

1. Descarga `index.html` y ábrelo con el navegador (o abre la versión publicada).
2. Rellena tu nombre, nivel y días por semana. Ya tienes tu plan.
3. En el móvil: *Compartir → Añadir a pantalla de inicio* y queda como una app más.

## Qué hace

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

**Te reta.**
- XP por cada serie, entreno, récord y reto. Rangos: Recluta → Cadete →
  Guerrero → Veterano → Élite → Leyenda.
- Reto del día (se comprueban solos los que se pueden medir), reto semanal y
  retos generados por la IA.
- 12 logros desbloqueables.
- **Penalización:** saltarte un día planificado resta 50 XP (se puede desactivar).

**Tu rendimiento.** Racha (los descansos planificados no la rompen), entrenos y
tiempo totales, objetivo semanal, gráfica de volumen semanal (kg × reps),
gráfica de peso corporal, récords personales e historial con notas.

**Tus datos.** Guardados en el navegador (`localStorage`), sin salir del
dispositivo. Botones para descargar una copia y restaurarla.

## Detalles técnicos

Un único `index.html`: HTML, CSS y JavaScript sin dependencias ni build.
Las animaciones son una figura articulada interpolada entre poses en `<canvas>`;
las gráficas son SVG generado a mano; la voz usa la Web Speech API del
navegador; el coach IA usa la capacidad `sample` de los artifacts de claude.ai
cuando está disponible. Probado con Playwright sobre Chromium.
