# Duelo de Dioses

Juego web autocontenido donde puedes dirigir a distintas deidades en una batalla
por turnos cargada de habilidades míticas. El proyecto está construido únicamente
con HTML, CSS y JavaScript sin dependencias externas, de modo que basta con abrir
el archivo `index.html` en un navegador moderno para comenzar a jugar.

## Características principales

- **Selección de deidades**: Zeus, Atenea, Hades y Quetzalcóatl, cada uno con
  estadísticas, habilidades, descripciones e iconografía propias.
- **Combate táctico por turnos**: gestiona salud, energía y estados alterados
  como aturdimiento, quemaduras, escudos y mejoras de enfoque.
- **Inteligencia artificial rival**: la IA decide habilidades en función de su
  energía, estado actual y probabilidad de generar efectos especiales.
- **Registro en tiempo real**: los eventos relevantes del combate se muestran en
  la crónica, mientras que texto flotante indica daño, curaciones o efectos.
- **Interfaz responsive**: la experiencia se adapta a pantallas de escritorio y
  dispositivos móviles con un estilo inspirado en arenas celestes.

## Cómo jugar

1. Abre `index.html` en tu navegador preferido (no requiere servidor ni
   instalación adicional).
2. Examina las cartas de cada deidad para conocer sus estadísticas y estilo de
   juego.
3. Haz clic sobre la carta elegida; la máquina seleccionará automáticamente un
   oponente distinto.
4. Durante tu turno, selecciona una habilidad. Las básicas generan energía,
   mientras que las definitivas consumen grandes cantidades para causar efectos
   devastadores.
5. Controla la barra de estados para saber si estás protegido, ardiendo o con un
   bonificador activo. El combate termina cuando una de las barras de salud llega
   a cero.

## Archivos relevantes

- `index.html`: estructura y secciones del juego (selección, arena, registros).
- `styles.css`: paleta y estética con efectos de cristal y partículas celestes.
- `game.js`: lógica del combate, definición de deidades e inteligencia artificial.

Si quieres volver a escoger personajes diferentes, utiliza el botón **“Elegir
otra deidad”**. Para repetir el duelo con la misma pareja, presiona **“Reiniciar
combate”**.
