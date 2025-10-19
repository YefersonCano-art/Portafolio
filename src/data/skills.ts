export interface Skill {
  name: string;
  icon: string;
  color?: string;
  badges: string[];
}

export const frontendSkills: Skill[] = [
  {
    name: "React",
    icon: "ReacIcon",
    color: "#61DAFB",
    badges: ["Hooks", "Context", "Zustand", "Query"],
  },
  {
    name: "TypeScript",
    icon: "TypeScriptIcon",
    color: "#3178C6",
    badges: ["Types", "Interfaces", "Generics", "Strict"],
  },
  {
    name: "Tailwind CSS",
    icon: "TailwindIcon",
    color: "#38B2AC",
    badges: ["Responsive", "Themes", "Components", "Motion"],
  },
  {
    name: "Astro",
    icon: "AstroIcon",
    color: "#FF5D01",
    badges: ["Static Sites", "SSG", "Islands", "Markdown"],
  },
  
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: "NodeIcon",
    color: "#339933",
    badges: ["Express", "REST", "Auth", "Middleware"],
  },
  {
    name: "Django",
    icon: "DjangoIcon",
    color: "#339933",
    badges: ["Django REST Framework", "ORM", "Auth", "Admin"],
  },
  {
    name: "Spring Boot",
    icon: "SpringBootIcon",
    color: "#6DB33F",
    badges: ["REST", "Data", "Security"],
  },
];

export const herramientas: Skill[] = [
  {
    name: "Databases",
    icon: "PostgreSQLIcon",
    color: "#47A248",
    badges: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    name: "Development Tools",
    icon: "DevelopmentIcon",
    color: "#F05032",
    badges: ["Git", "VS Code", "pnpm", "Vite", "Testing"],
  },
  {
    name: "GitHub Actions",
    icon: "ActionsIcon",
    color: "#2088FF",
    badges: ["CI/CD", "Workflows", "Automation", "Deploy"],
  },
  {
    name: "Figma",
    icon: "FigmaIcon",
    color: "#F24E1E",
    badges: ["Design", "Prototyping", "Components", "Auto Layout"],
  },
];

export const tabButtons = ["frontend", "backend", "herramientas"] as const;
