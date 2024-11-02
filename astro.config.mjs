// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';

export default defineConfig({
	site: 'https://astro-core.gravybo.at',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
		react(),
		compressor(),
		mdx(),
	],
});
