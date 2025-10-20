# 💼 Portafolio

Portafolio web personal moderno y minimalista desarrollado con Astro, mostrando mis habilidades, proyectos y experiencia como desarrollador Full Stack.

## 📋 Descripción

Este portafolio es una aplicación web estática construida con tecnologías modernas que presenta de manera elegante y profesional:

- **Presentación Personal**: Sección Hero con información de contacto y enlaces a redes profesionales.
- **Sobre Mí**: Información detallada sobre mi experiencia y trayectoria profesional.
- **Habilidades Técnicas**: Showcase interactivo de mis competencias en Frontend, Backend y Herramientas de Desarrollo.
- **Experiencia**: Timeline de mi recorrido profesional y proyectos destacados.
- **Proyectos**: Galería de trabajos realizados con tecnologías y enlaces a demos/repositorios.
- **Contacto**: Formulario y enlaces directos para comunicación profesional.

> [!IMPORTANT]  
> Portafolio aun en Contrucción

🚀 **[Ver Demo en Vivo](https://YefersonCano-art.github.io/Portafolio)**

## 🏗️ Arquitectura

El proyecto sigue una arquitectura basada en componentes y diseño atómico:

```
portafolio/
├── public/                  # Recursos estáticos
├── src/
│   ├── assets/              # Imágenes y recursos del sitio
│   ├── components/          # Componentes reutilizables
│   │   ├── About.astro      # Sección Sobre Mí
│   │   ├── CardSkill.astro  # Tarjeta de habilidad
│   │   ├── Contact.astro    # Sección de contacto
│   │   ├── Experience.astro # Experiencia profesional
│   │   ├── Header.astro     # Navegación principal
│   │   ├── Hero.astro       # Sección de presentación
│   │   ├── Projects.astro   # Portafolio de proyectos
│   │   ├── Skills.astro     # Habilidades técnicas
│   │   └── icons/           # Iconos SVG personalizados
│   │       ├── ActionsIcon.astro
│   │       ├── AstroIcon.astro
│   │       ├── DatabasesIcon.astro
│   │       ├── DevelopmentIcons.astro
│   │       ├── DjangoIcon.astro
│   │       ├── FigmaIcon.astro
│   │       ├── GitHubIcon.astro
│   │       ├── LinkedInIcon.astro
│   │       ├── MailIcon.astro
│   │       ├── NodeIcon.astro
│   │       ├── ReactIcon.astro
│   │       ├── SpringIcon.astro
│   │       ├── TailwindIcon.astro
│   │       ├── TypeScriptIcon.astro
│   │       └── index.ts
│   ├── data/                # Datos estructurados
│   │   └── skills.ts        # Información de habilidades
│   ├── layouts/             # Layouts principales
│   │   └── Layout.astro     # Layout base de la aplicación
│   ├── pages/               # Páginas del sitio
│   │   └── index.astro      # Página principal
│   └── styles/              # Estilos globales
│       └── global.css       # CSS global y variables
├── astro.config.mjs         # Configuración de Astro
├── package.json             # Dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Este archivo
```

### Patrones de Diseño

- **Componentes Island**: Arquitectura de islas de Astro para máximo rendimiento
- **Type Safety**: TypeScript para definiciones de tipos y prevención de errores
- **Atomic Design**: Componentes reutilizables y composables
- **Static Site Generation**: Pre-renderizado para velocidad óptima
- **Separation of Concerns**: Separación clara entre datos, lógica y presentación

## 🚀 Tecnologías Utilizadas

### Framework Core

- **Astro 5.14.5** - Framework moderno para sitios web ultrarrápidos
- **TypeScript** - Tipado estático para JavaScript

### Estilizado y Animaciones

- **Tailwind CSS 4.1.14** - Framework de CSS utilitario moderno
- **@midudev/tailwind-animations 0.2.0** - Animaciones predefinidas para Tailwind
- **GSAP 3.13.0** - Librería profesional para animaciones web
- **Lenis 1.0.42** - Smooth scroll para experiencia fluida

### Build Tools

- **Vite** - Herramienta de construcción ultrarrápida integrada en Astro
- **@tailwindcss/vite 4.1.14** - Plugin de Tailwind optimizado para Vite

### Stack Técnico Destacado

**Frontend:**

- React con Hooks, Context, Zustand y React Query
- TypeScript con tipos estrictos
- Tailwind CSS con diseño responsive
- Astro para sitios estáticos optimizados

**Backend:**

- Node.js con Express
- Django y Django REST Framework
- Spring Boot

**Herramientas:**

- Bases de datos: MySQL, PostgreSQL, MongoDB, SQLite
- Control de versiones: Git y GitHub
- CI/CD: GitHub Actions
- Diseño: Figma
- Entorno: VS Code, pnpm, Vite

## � Funcionalidades Principales

### Hero Section

- Presentación personal impactante
- Enlaces a perfiles profesionales (GitHub, LinkedIn)
- Información de contacto accesible
- Animaciones suaves con GSAP

### Sección de Habilidades

- Sistema de tabs para categorizar habilidades (Frontend, Backend, Herramientas)
- Tarjetas interactivas con iconos personalizados
- Badges de tecnologías específicas
- Animaciones al hacer hover
- Colores distintivos por tecnología

### Experiencia y Proyectos

- Timeline de experiencia profesional
- Galería de proyectos con imágenes
- Enlaces a repositorios y demos en vivo
- Descripción detallada de tecnologías utilizadas

### Optimizaciones de Rendimiento

- Pre-renderizado estático con Astro
- Carga optimizada de recursos
- Lazy loading de imágenes
- Smooth scroll personalizado con Lenis
- Animaciones eficientes con GSAP

## 🎨 Características de Diseño

- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Modo Oscuro**: Soporte para tema oscuro/claro (si está implementado)
- **Animaciones Fluidas**: Transiciones suaves y profesionales
- **Smooth Scroll**: Navegación fluida entre secciones
- **UI Moderna**: Interfaz limpia y minimalista
- **Accesibilidad**: Componentes semánticos y navegación accesible
- **Performance First**: Optimizado para Core Web Vitals

## 📦 Despliegue

El proyecto está configurado para despliegue en **GitHub Pages**:

- **Site URL**: https://YefersonCano-art.github.io
- **Base Path**: /Portafolio

El sitio se despliega automáticamente al hacer push a la rama principal.

## 📞 Contacto

- **GitHub**: [@YefersonCano-art](https://github.com/YefersonCano-art)
- **LinkedIn**: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)
- **Email**: tu-email@ejemplo.com

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

⌨️ Desarrollado con ❤️ y ☕ por Yeferson Cano
