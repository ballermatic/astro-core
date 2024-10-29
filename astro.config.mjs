// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import compressor from 'astro-compressor';

export default defineConfig({
	site: 'https://yourdomain.com',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
		react(),
		compressor(),
	],
});
