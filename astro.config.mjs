import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: 'https://pautva.github.io',
    base: '/co-creation-toolkit/',
    outDir: 'dist', // Output directory
    publicDir: 'static',
    integrations: [tailwind()]
});
