import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: 'https://pautva.github.io',
    // Remove the base option
    outDir: 'dist', // Output directory
    integrations: [tailwind()]
});
