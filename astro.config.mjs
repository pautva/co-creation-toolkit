import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pautva.gitlab.io',
  base: '/analysis-and-design-portfolio',
  outDir: 'public',
  publicDir: 'static',
  integrations: [tailwind()]
});