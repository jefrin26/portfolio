// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',
  // GitHub Pages project sites live at /<repo-name>/
  // Change 'portfolio' to your repository name, or set base: '/' for a user site.
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});