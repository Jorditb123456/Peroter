# Diseño de saco — DON ELMER · Arroz Añejo Premium (49 Kilos)

Cliché para saco combinando lo mejor de las dos referencias:

- **Tipografía, monograma DE, "DON ELMER" en blanco y laterales** → estilo de la **imagen 1**.
- **Señor del retrato, colores (azul marino + dorado) y figura general** → de la **imagen 2** (mantenida como final).
- **Cara posterior** → distribución de la **imagen 2** (datos del productor, registro sanitario, F.P./F.V., lote, preparación sugerida, almacenamiento).

## Archivos

| Archivo | Uso |
|---|---|
| `don-elmer-cliche.png` / `.pdf` | Cliché completo: Lateral · Frontal · Lateral · Posterior |
| `don-elmer-frontal.png` / `.pdf` | Solo cara frontal |
| `don-elmer-posterior.png` / `.pdf` | Solo cara posterior |
| `don-elmer-lateral.png` / `.pdf` | Solo cara lateral |
| `don-elmer-cliche.svg` | Vectorial editable (texto y formas) |
| `assets/don-elmer-retrato.png` | Retrato del señor recortado en óvalo (transparente) |
| `gen.py` | Script que genera todo el diseño |

## Editar / regenerar

Requiere `python3` con `pillow` y `cairosvg`, y las fuentes registradas
(Young Serif, IBM Plex Serif, Gloock, Outfit, Work Sans, Nothing You Could Do).

```bash
python3 gen.py
```

Colores y textos están al inicio de `gen.py` (paleta y funciones por panel),
fáciles de ajustar para la imprenta.

## Notas para imprenta

- El retrato usa la foto de la imagen 2. Para impresión a gran formato conviene
  reemplazar `assets/don-elmer-retrato.png` por la foto en **alta resolución**.
- El PDF/SVG es escalable; ajustar medidas reales del saco antes del cliché final.
- Datos legales (REG. SANIT., F.P./F.V., LOTE, dirección) tomados de la imagen 2:
  **verificar** que estén correctos antes de imprimir.
