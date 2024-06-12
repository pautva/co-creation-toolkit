import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pautva.github.io',
  base: 'Co-Creation-Toolkit',
  outDir: 'public',
  publicDir: 'static',
  integrations: [tailwind()]
});