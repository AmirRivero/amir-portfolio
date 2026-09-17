// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de producción (sin barra final). Configúrala en Cloudflare Pages >
// Settings > Environment variables como `SITE_URL` o `PUBLIC_SITE_URL`,
// por ejemplo: https://amir-portfolio.pages.dev
//
// Si no está definida, el build sigue siendo válido pero NO se emiten
// canonical, og:url, sitemap ni la URL del JSON-LD (nunca localhost).
const site = process.env.PUBLIC_SITE_URL || process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  build: {
    // Sitio de una sola página: incrustar el CSS elimina una petición que
    // bloquea el renderizado sin penalizar caché entre páginas.
    inlineStylesheets: 'always',
  },
});
