export interface Skill {
  name: string;
  icon: string;
  badges: string[];
}

export const frontendSkills: Skill[] = [
  {
    name: "React",
    icon: "⚛️",
    badges: ["Hooks", "Context", "Zustand", "Query"],
  },
  {
    name: "TypeScript",
    icon: "📘",
    badges: ["Types", "Interfaces", "Generics", "Strict"],
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    badges: ["Responsive", "Themes", "Components", "Motion"],
  },
  {
    name: "Standards",
    icon: "🌐",
    badges: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: "💚",
    badges: ["Express", "REST", "Auth", "Middleware"],
  },
  {
    name: "Django",
    icon: "🐍",
    badges: ["Django REST Framework", "ORM", "Auth", "Admin", "Celery"],
  },
  {
    name: "Spring Boot",
    icon: "🍃",
    badges: ["REST", "Data", "Security"],
  },
];

export const herramientas: Skill[] = [
  {
    name: "Databases",
    icon: "🗄️",
    badges: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    name: "Development Tools",
    icon: "🔧",
    badges: ["Git", "VS Code", "pnpm", "Vite", "Testing"],
  },
  {
    name: "GitHub Actions",
    icon: "⚙️",
    badges: ["CI/CD", "Workflows", "Automation", "Deploy"],
  },
  {
    name: "Figma",
    icon: "🎨",
    badges: ["Design", "Prototyping", "Components", "Auto Layout"],
  },
];

export const tabButtons = ["frontend", "backend", "herramientas"] as const;
