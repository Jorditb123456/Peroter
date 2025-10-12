# LinguaBridge

LinguaBridge es una aplicación Android construida con Jetpack Compose que permite mantener conversaciones fluidas entre hablantes de español y mandarín. La app escucha la voz, la transcribe, traduce el mensaje con **Google ML Kit** y reproduce la respuesta en el idioma opuesto mediante **Text-to-Speech**.

## Características

- Reconocimiento de voz bidireccional (español ⇄ chino mandarín) con resultados parciales en pantalla.
- Traducción en tiempo real utilizando modelos descargables de Google ML Kit.
- Síntesis de voz automática para que cada interlocutor escuche la traducción en su idioma.
- Historial de mensajes traducidos para consultar el diálogo completo.
- Interfaz moderna en Compose, optimizada para un uso tipo “walkie-talkie”.

## Requisitos de compilación

1. Android Studio Iguana (o superior) con el **Android Gradle Plugin 8.3+**.
2. Dispositivo o emulador con Android 8.0 (API 26) o superior.
3. Servicios de Google Play actualizados para descargar los modelos de traducción.

## Ejecución

```bash
cd LinguaBridge
./gradlew installDebug
```

La primera vez que ejecutes cada dirección de traducción, la app descargará automáticamente los modelos de ML Kit (se requiere conexión a Internet). Una vez descargados, la traducción funciona sin conexión.

Al abrir la app acepta el permiso de **micrófono** para poder iniciar la captura de voz. Sin este permiso los botones de conversación solicitarán nuevamente la autorización.

## ¿Cómo descargarla o instalarla en tu teléfono?

1. **Descargar el código fuente**
   - Pulsa el botón **Code ▾** en GitHub y elige **Download ZIP**, o ejecuta `git clone <URL-del-repositorio>` desde tu computadora.
   - Descomprime el ZIP (si aplica) y abre la carpeta `LinguaBridge` en **Android Studio**.

2. **Conectar tu dispositivo Android**
   - Activa el **modo desarrollador** y la **depuración USB** en tu teléfono.
   - Conecta el dispositivo por USB (o usa ADB inalámbrico) y autoriza la computadora.

3. **Compilar e instalar automáticamente**
   - En Android Studio haz clic en **Run ▶** o ejecuta en la terminal:
     ```bash
     cd LinguaBridge
     ./gradlew installDebug
     ```
   - La tarea instalará la app en el dispositivo conectado. Al finalizar verás el ícono de **LinguaBridge** en tu teléfono y podrás abrirlo.

4. **Generar un APK para instalar manualmente** (opcional)
   - Ejecuta `./gradlew assembleDebug` para producir `app/build/outputs/apk/debug/app-debug.apk` firmado con la clave de depuración.
   - Copia ese archivo al teléfono y ábrelo para instalarlo (necesitarás permitir la instalación desde orígenes desconocidos).

5. **Obtener un enlace listo para descargar** (opcional)
   - Abre la pestaña **Actions** del repositorio en GitHub y ejecuta manualmente el flujo **Android APK distribution**.
   - Espera a que la ejecución finalice. Automáticamente se publicará un release llamado `LinguaBridge build #<número>` con el archivo `LinguaBridge-<número>.apk`.
   - Copia el enlace directo del release (por ejemplo: `https://github.com/<tu-usuario>/<tu-repo>/releases/tag/apk-<número>`) y compártelo para que cualquier persona pueda descargar e instalar el APK firmado de depuración.
   - Cada vez que hagas push a `main`, el flujo también guardará el APK más reciente como artefacto descargable durante 7 días.

Recuerda mantener el teléfono con acceso a Internet la primera vez para que ML Kit descargue los modelos de traducción.
