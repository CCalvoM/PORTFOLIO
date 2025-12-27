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
      title: "Portfolio Template (Astro)",
      description: "Plantilla reutilizable para webs corporativas/portfolio, basada en config por cliente y módulos.",
      tags: ["Astro", "TS", "SEO"],
      href: "#",
    },
    {
      title: "Design System Components",
      description: "Componentes reutilizables con tokens y documentación.",
      tags: ["UI", "Tokens", "Storybook"],
      href: "#",
    },
    {
      title: "Integraciones & Automations",
      description: "Automatizaciones y herramientas internas para acelerar entregas.",
      tags: ["Node", "AWS", "DX"],
      href: "#",
    },
  ],
  contact: {
    title: "¿Hablamos?",
    text: "Si quieres una web que cargue en un pestañeo y se mantenga sola, escríbeme.",
  },
} as const;
