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

export const projects: Project[] = [
  {
    name: "Trapiches Don Pedro",
    description: "Landing page para fábrica de trapiches artesanales en madera. Diseño limpio y responsive con integración de WhatsApp para contacto directo. Proyecto enfocado en destacar la tradición y autenticidad de los productos artesanales de la empresa Don Pedro.",
    tags: ["HTML5", "CSS3", "Responsive Design", "WhatsApp API"],
    imagen: capturaTrapiches,
    github: "https://github.com/YefersonCano-art/Web-Trapiches",
    demo: "https://trapichesdonpedro.com/"
  },
 
];
