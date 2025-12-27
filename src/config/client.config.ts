export const client = {
  brand: {
    name: "Carlos Calvo",
    handle: "Charlie",
    role: "Front-End / Full-Stack Developer",
    location: "Madrid, ES",
    primaryColor: "#22c55e",
  },
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:tuemail@correo.com",
  },
  hero: {
    headline: "Construyo experiencias web rápidas, limpias y escalables.",
    subheadline:
      "Angular en el día a día, pero con mentalidad producto. Me obsesiona el rendimiento, el DX y que la UI no se pelee con el usuario.",
    badges: ["Angular", "TypeScript", "AWS", "Nx", "Storybook"],
    ctaPrimary: { label: "Ver proyectos", href: "#projects" },
    ctaSecondary: { label: "Contactar", href: "#contact" },
  },
  projects: [
  {
    slug: "portfolio-template-astro",
    title: "Portfolio Template (Astro)",
    description:
      "Plantilla reutilizable para webs corporativas/portfolio, basada en config por cliente y módulos.",
    tags: ["Astro", "TypeScript", "SEO"],
    href: "/projects/portfolio-template-astro",
    highlights: [
      "Config por cliente (cambias un fichero y listo)",
      "Tema dark con tokens CSS",
      "SEO base y estructura modular",
    ],
    stack: ["Astro", "TypeScript", "CSS Tokens"],
    repo: "https://github.com/",
    live: "#",
  },
  {
    slug: "design-system-components",
    title: "Design System Components",
    description: "Componentes reutilizables con tokens y documentación.",
    tags: ["UI", "Tokens", "Storybook"],
    href: "/projects/design-system-components",
    highlights: ["Componentes consistentes", "Documentación clara", "Enfoque DX"],
    stack: ["TypeScript", "Storybook", "SCSS/Tokens"],
    repo: "https://github.com/",
    live: "#",
  },
  {
    slug: "integrations-automations",
    title: "Integraciones & Automations",
    description: "Automatizaciones y herramientas internas para acelerar entregas.",
    tags: ["Node", "AWS", "DX"],
    href: "/projects/integrations-automations",
    highlights: ["Ahorro de tiempo", "Scripts y pipelines", "Automatización realista"],
    stack: ["Node", "AWS", "CI/CD"],
    repo: "https://github.com/",
    live: "#",
  },
],

  contact: {
    title: "¿Hablamos?",
    text: "Si quieres una web que cargue en un pestañeo y se mantenga sola, escríbeme.",
  },
} as const;
