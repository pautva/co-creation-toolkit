import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: 'https://pautva.github.io',
    base: '/Co-Creation-Toolkit/',
    outDir: 'public',
    publicDir: 'static',
    integrations: [tailwind()]
});
