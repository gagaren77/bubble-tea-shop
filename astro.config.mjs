import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { shop } from './src/data/shop.ts';

export default defineConfig({
  site: shop.siteUrl,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
