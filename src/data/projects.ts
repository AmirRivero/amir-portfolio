// Proyectos.
// Solo se muestra trabajo real y verificable. No se inventan clientes,
// métricas, cargos, resultados ni tecnologías sin justificar.

export interface FeaturedProject {
  index: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
  url: string;
  urlLabel: string;
}

// Proyecto real en el que participo actualmente.
export const featuredProject: FeaturedProject = {
  index: '01',
  title: 'Novum System',
  status: 'En desarrollo',
  description:
    'Formo parte de Novum System, un proyecto enfocado en el diseño y desarrollo de soluciones web.',
  tags: ['Web', 'Desarrollo', 'Tecnología'],
  url: 'https://novumsystem.online/',
  urlLabel: 'Visitar Novum System',
};

// Próximos proyectos — sin nombres, fechas ni resultados inventados.
export const upcomingProjects = {
  title: 'próximos proyectos',
  text: 'Construyendo nuevos proyectos en datos, automatización y desarrollo web.',
  label: 'Coming soon',
};
