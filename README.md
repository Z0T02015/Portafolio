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

## Publicar

1. Crea un repositorio vacío en GitHub y revisa que no contenga datos privados.
2. Inicializa y publica el repositorio:

```bash
git init
git add .
git commit -m "Create Cristhian Soto portfolio"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

3. Importa el repositorio en [Vercel](https://vercel.com/new), conserva los comandos predeterminados de Next.js y despliega. Sustituye `USUARIO/REPOSITORIO` por datos reales. Aún no se ha publicado ningún repositorio ni sitio.

## Evidencias y privacidad

Las vistas de certificados son páginas completas de los documentos aportados, convertidas a WebP para que se lean las firmas, los sellos y la validación. El dato de identidad de la constancia formativa está cubierto; los PDF originales no se incluyen en el sitio. Verifica cada imagen antes de publicar cambios.
