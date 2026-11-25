# Portafolio de Cristhian Soto

Portafolio estático creado con Next.js App Router, React, TypeScript y Tailwind CSS. No utiliza base de datos ni backend.

## Requisitos

- Node.js 20.9 o superior (desarrollado con Node 24).
- npm.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para validar el proyecto:

```bash
npm run typecheck
npm run lint
npm run build
```

## Actualizar contenido

Los textos y elementos se editan en `src/data/`, incluyendo las traducciones a español, inglés y portugués. Los componentes visuales están en `src/components/`. Mistilabs es privado y no se proporcionó una captura real; su tarjeta usa una representación conceptual. Consulta [docs/IMAGES.md](docs/IMAGES.md) antes de añadir evidencias.

## Publicar en GitHub Pages

El repositorio `Z0T02015/Portafolio` se publica como sitio estático mediante GitHub Actions. El flujo de trabajo compila Next.js y despliega la carpeta `out` al sitio `https://z0t02015.github.io/Portafolio/` cada vez que se actualiza la rama `main`.

En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de despliegue. Después de subir los cambios a `main`, revisa la pestaña **Actions** para confirmar que el flujo termine correctamente.

La publicación usa `NEXT_PUBLIC_BASE_PATH=/Portafolio` para que las imágenes, estilos, scripts y enlaces carguen desde la ruta del repositorio. Para desarrollo local, esta variable queda vacía y se puede seguir usando `npm run dev`.

## Evidencias y privacidad

Las vistas de certificados son páginas completas de los documentos aportados, convertidas a WebP para que se lean las firmas, los sellos y la validación. El dato de identidad de la constancia formativa está cubierto; los PDF originales no se incluyen en el sitio. Verifica cada imagen antes de publicar cambios.
