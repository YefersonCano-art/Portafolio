import type { ImageMetadata } from "astro";


import capturaTrapiches from "../assets/projectsImg/CapturaTrapiches.webp";
import capturaGuauPetStore from "../assets/projectsImg/capturaGuauPetStore.png";
import capturaMiniSistemaPERN from "../assets/projectsImg/CapturaPERN.webp";

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
 {
  name: "Guau Pet Store",
  description: "E-commerce completo para tienda de productos de mascotas. Incluye catálogo de productos con sistema de grid responsivo avanzado, sección de blog con artículos informativos, página de nosotros y formulario de contacto. Diseño moderno con gradientes coloridos, animaciones suaves y optimización mobile-first con múltiples breakpoints.",
  tags: ["HTML5", "CSS3", "Responsive Design", "Font Awesome", "Grid Layout", "Flexbox"],
  imagen: capturaGuauPetStore,
  github: "https://github.com/YefersonCano-art/proyectos-portafolio",
  demo: "https://yefersoncano-art.github.io/proyectos-portafolio/ecommerce-pets/"
},
{
  name: "Mini Sistema PERN",
  description: "Aplicación Full Stack para administración de productos con stack PERN (PostgreSQL, Express, React, Node.js). Sistema CRUD completo con validación de datos, filtrado por precio, vista detallada de productos y manejo de estados de carga. Backend API REST desplegado en Render con Sequelize ORM y frontend en React con TypeScript y Tailwind CSS.",
  tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Sequelize", "Tailwind CSS", "Vite"],
  imagen: capturaMiniSistemaPERN,
  github: "https://github.com/YefersonCano-art/backend---Mini-sistema-PERN",
  demo: "https://frontend-mini-sistema-pern.vercel.app/"
}
];

export const tabButtons = ["proyectos destacados", "proyectos de aprendizaje"] as const;
