import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bomino.github.io',
  base: '/resilient-scents/',
  trailingSlash: 'always',
});
