// Conocimientos — QUÉ aporto (valor), no el stack.
// Las herramientas concretas viven en la sección Journey.

export type SkillGlyph = 'database' | 'analytics' | 'automation' | 'development';

export interface SkillCategory {
  title: string;
  tagline: string;
  glyph: SkillGlyph;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Databases',
    tagline: 'Información estructurada para decidir mejor.',
    glyph: 'database',
  },
  {
    title: 'Analytics',
    tagline: 'Datos convertidos en información útil.',
    glyph: 'analytics',
  },
  {
    title: 'Automation',
    tagline: 'Procesos más simples, rápidos y eficientes.',
    glyph: 'automation',
  },
  {
    title: 'Development',
    tagline: 'Soluciones digitales pensadas para crecer.',
    glyph: 'development',
  },
];
