# Cosigo ERP de Almacenes

Aplicación web estática (HTML, CSS y JavaScript) diseñada para simular un pequeño ERP orientado a la operación de almacenes. Incluye control de inventario, registro de movimientos, monitoreo de KPIs y administración de centros de distribución.

## Características principales
- **Tablero** con indicadores clave de stock, rotación y nivel de ocupación.
- **Gestión de inventario**: altas de productos, definición de punto de reorden y seguimiento por almacén.
- **Movimientos** de entrada/salida con bitácora cronológica.
- **Administración de almacenes** con formulario dedicado y sincronización automática en los selectores.
- **Persistencia local** mediante `localStorage` para conservar los datos entre sesiones del navegador.
- **Diseño responsive** pensado para ejecutarse directamente desde un archivo `index.html` sin dependencias externas.

## Cómo ejecutar
1. Descarga o clona este repositorio.
2. Abre `index.html` con tu navegador preferido (doble clic o «Abrir con...»).
3. Los datos de ejemplo se cargarán automáticamente y podrás comenzar a operar.

> No se requiere Node.js ni compilación. Todo el comportamiento está implementado con JavaScript Vanilla.

## Scripts disponibles
Aunque la aplicación es estática, se incluye un pequeño servidor opcional para desarrollo:

```bash
npm install
npm run dev
```

Esto inicia un servidor con `vite` para habilitar recarga en caliente. Totalmente opcional; abrir `index.html` funciona igual.
