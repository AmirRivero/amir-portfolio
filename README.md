# AMIR — Portfolio personal

Portfolio editorial de **Amir Rivero**, Ingeniero de Sistemas enfocado en
datos, tecnología y negocio. Sitio estático construido con **Astro**,
tipografía editorial oversized, un acento clay + dorado, visuales abstractos
de datos y animaciones sutiles que respetan `prefers-reduced-motion`.

Lenguaje visual propio, inspirado en el reference style de
`reference/DESIGN.md` (Hyer) pero completamente adaptado al perfil de Amir.

## Tipografía

- **Manrope Variable** (autohospedada en `public/fonts/`, sin peticiones
  externas de red).

## Estructura

Hero → About → Knowledge → Journey → Projects → Currently learning → Contact → Footer

## Comandos

| Comando                  | Acción                             |
| :----------------------- | :--------------------------------- |
| `npm install`            | Instala dependencias               |
| `npm run dev`            | Servidor local en `localhost:4321` |
| `astro dev --background` | Servidor en segundo plano          |
| `npm run build`          | Build de producción en `./dist/`   |
| `npm run preview`        | Previsualizar el build             |

## Deploy en Cloudflare Pages

| Ajuste           | Valor           |
| :--------------- | :-------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
| Node version     | `22`            |

Define la variable de entorno **`SITE_URL`** (o `PUBLIC_SITE_URL`) en
*Settings → Environment variables* con tu URL de producción, sin barra
final (por ejemplo `https://amir-portfolio.pages.dev`).

Con ella se activan automáticamente:

- canonical y `og:url` absolutos,
- `sitemap-index.xml` (vía `@astrojs/sitemap`),
- la referencia al sitemap en `robots.txt`,
- la `url` del JSON-LD `Person`.

Si la variable no está definida, el build sigue siendo válido pero no se
emiten esas URLs absolutas (nunca se usa `localhost`).

Los enlaces de LinkedIn, GitHub y email ya están configurados en
`src/data/site.ts` y son los únicos que consume el sitio.

## connect

**GitHub** · [@AmirRivero](https://github.com/AmirRivero)  
**LinkedIn** · [amir12-rivero](https://www.linkedin.com/in/amir12-rivero/)  
**Email** · [amir12ago@outlook.com](mailto:amir12ago@outlook.com)