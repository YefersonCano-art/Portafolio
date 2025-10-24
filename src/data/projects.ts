import type { ImageMetadata } from "astro";


import capturaTrapiches from "../assets/projectsImg/CapturaTrapiches.webp";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  imagen: ImageMetadata;
  github?: string;
  demo?: string;
}

// Proyectos destacados profesionales
export const featuredProjects: Project[] = [
  {
    name: "Trapiches Don Pedro",
    description: "Landing page para fábrica de trapiches artesanales en madera. Diseño limpio y responsive con integración de WhatsApp para contacto directo. Proyecto enfocado en destacar la tradición y autenticidad de los productos artesanales de la empresa Don Pedro.",
    tags: ["HTML5", "CSS3", "Responsive Design", "WhatsApp API"],
    imagen: capturaTrapiches,
    github: "https://github.com/YefersonCano-art/Web-Trapiches",
    demo: "https://trapichesdonpedro.com/"
  },
];

// Proyectos de aprendizaje y práctica
export const learningProjects: Project[] = [
  // Aquí puedes agregar tus proyectos de aprendizaje
  // Ejemplo:
  // {
  //   name: "Todo App",
  //   description: "Aplicación de tareas con React y TypeScript para practicar hooks y gestión de estado.",
  //   tags: ["React", "TypeScript", "Hooks"],
  //   imagen: capturaTrapiches, // Reemplazar con la imagen correcta
  //   github: "https://github.com/tu-usuario/todo-app",
  // },
];

export const tabButtons = ["proyectos destacados", "proyectos de aprendizaje"] as const;
