// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Sitio público: usar el dominio personalizado si ya está configurado en GitHub Pages
  site: "https://yefersoncano.me",
  // Si usas un dominio personalizado en GitHub Pages no necesitas un `base` especial.
  // Quitar `base` para que las rutas se sirvan desde la raíz.
  // Si alguna vez publicas en GitHub Pages bajo <user>.github.io/<repo>, vuelve a establecerlo.
  // base: "/Portafolio",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
