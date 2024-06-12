import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://pautva.github.io',
  base: '/Co-Creation-Toolkit',
  // Change outDir to 'dist'
  outDir: 'dist', // Output directory
  integrations: [tailwind()]
});
