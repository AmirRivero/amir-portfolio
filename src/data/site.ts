// Datos de sitio, navegación y contactos.

export const site = {
  name: 'AMIR',
  author: 'Amir Rivero',
  lang: 'es',
  title: 'Amir Rivero — Ingeniero de Sistemas · Datos y tecnología',
  description:
    'Portfolio de Amir Rivero, Ingeniero de Sistemas. SQL, Power BI y Python para convertir datos en decisiones, automatizar procesos y construir soluciones web.',
  ogImage: '/og.png',
  ogImageAlt:
    'Amir Rivero — Ingeniero de Sistemas. Datos, tecnología y negocio.',
  themeColor: '#ffffff',
};

// Navegación principal
export const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Conocimientos', href: '#conocimientos' },
  { label: 'Camino', href: '#camino' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

// Enlaces sociales — URLs reales de contacto
export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amir12-rivero/' },
  { label: 'GitHub', href: 'https://github.com/AmirRivero' },
  { label: 'Email', href: 'mailto:amir12ago@outlook.com' },
];

export const footerTagline = 'Data / Technology / Continuous learning';

// Datos estructurados (JSON-LD). Solo información real y verificable.
export const personSchema = {
  '@type': 'Person',
  name: 'Amir Rivero',
  jobTitle: 'Ingeniero de Sistemas',
  description:
    'Ingeniero de Sistemas enfocado en datos, tecnología y negocio: análisis de datos, automatización de procesos y desarrollo web.',
  email: 'amir12ago@outlook.com',
  knowsAbout: [
    'SQL',
    'Power BI',
    'Python',
    'Google Apps Script',
    'Google Workspace',
    'HTML',
    'CSS',
    'JavaScript',
    'Astro',
    'Análisis de datos',
    'Automatización de procesos',
    'Desarrollo web',
  ],
  sameAs: [
    'https://www.linkedin.com/in/amir12-rivero/',
    'https://github.com/AmirRivero',
  ],
};
