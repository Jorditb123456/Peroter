# 💪 FitDiario — entrena todos los días y controla tu rendimiento

Aplicación web para entrenar a diario y ver, con números, cómo vas mejorando.
Funciona en el móvil y en el ordenador, **sin instalar nada** y **sin conexión**.
Todos tus datos se guardan en tu propio dispositivo.

## Cómo usarla

1. Descarga el archivo `index.html`.
2. Ábrelo con tu navegador (Chrome, Safari, Firefox…).
3. Rellena tu nombre, nivel y días que quieres entrenar. Ya tienes tu plan.

**Truco para el móvil:** ábrela y usa *Compartir → Añadir a pantalla de inicio*.
Se te queda como una app más, con su icono.

## Qué hace

**Un entreno distinto cada día**, ya preparado según tu nivel:

| Día | Rutina |
|---|---|
| Lunes | Empuje — pecho, hombro y tríceps |
| Martes | Tirón — espalda y bíceps |
| Miércoles | Piernas y glúteos |
| Jueves | Core y HIIT |
| Viernes | Cuerpo completo |
| Sábado | Movilidad y recuperación |
| Domingo | Descanso activo |

Si eliges menos días por semana, el plan se reorganiza solo. También puedes
cambiar la rutina de hoy cuando quieras desde el botón *Cambiar rutina de hoy*.

Todos los ejercicios se pueden hacer **en casa y sin material**. Si tienes
mancuernas, apunta los kilos y la app te calcula el volumen.

**Durante el entreno**
- Series, repeticiones y descanso recomendados para tu nivel.
- Apuntas peso y repeticiones de cada serie y la marcas como hecha.
- Temporizador de descanso automático, con aviso sonoro y vibración.
- Un consejo de técnica en cada ejercicio.

**Tu rendimiento**
- 🔥 Racha de días entrenados (los días de descanso planificados no la rompen).
- Entrenos totales y tiempo total entrenado.
- Objetivo semanal, con los días de la semana marcados.
- Gráfica de volumen semanal (kilos × repeticiones): si sube, estás progresando.
- Gráfica de peso corporal.
- Récords personales de cada ejercicio, con aviso cuando bates uno.
- Historial completo de entrenos con tus notas.

**Tus datos**
- Se guardan en el navegador (`localStorage`), nunca salen del dispositivo.
- Botón para descargar una copia de seguridad y para restaurarla.

## Detalles técnicos

Un único archivo `index.html`: HTML, CSS y JavaScript sin dependencias, sin
build y sin servidor. Las gráficas son SVG generado a mano. Probado con
Playwright sobre Chromium.
