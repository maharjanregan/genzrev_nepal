// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site: https://maharjanregan.github.io/genzrev_nepal/
	site: 'https://maharjanregan.github.io/genzrev_nepal',
	base: '/genzrev_nepal',
	integrations: [mdx(), sitemap()],
});
