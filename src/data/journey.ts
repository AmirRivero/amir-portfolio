// Flujo tecnológico: con qué herramientas se conecta cada etapa.
// Sin descripciones ni experiencia inventada.

export interface JourneyStep {
  num: string;
  title: string;
  tech: string;
}

export const journeySteps: JourneyStep[] = [
  { num: '01', title: 'Databases', tech: 'SQL' },
  { num: '02', title: 'Analytics', tech: 'POWER BI · PYTHON' },
  { num: '03', title: 'Automation', tech: 'APPS SCRIPT · GOOGLE WORKSPACE' },
  { num: '04', title: 'Web', tech: 'HTML · CSS · JAVASCRIPT · ASTRO' },
];
