# Astro Core

Starter project with Astro and essential integrations.

## Features

🚀 Built with [Astro](https://astro.build/)

- Head ordering with `astro-capo`
- Compression via `astro-compressor`

🎨 Styled with [Tailwind CSS](https://tailwindcss.com/)

- Responsive fluid typography
- Container and aspect ratio utilities
- Variable font support
- Subsetted Mona Sans variable and monospace

🎯 SEO optimized with `astro-seo`

- Sensible defaults with overrides at the page level
- Automatic sitemap generation

## Quick Start

1. Install dependencies `pnpm install`

1. Login to Cloudflare account from CLI `wrangler login`

1. Development commands:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally with Wrangler

## Project Structure

- `src/config/configGlobal.ts` - Global metadata and social sharing defaults
- `src/pages/*.astro` - Individual pages with metadata overrides
- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts and templates

## Deployment

This project is configured for deployment on Cloudflare Pages. Pushes to the main branch will trigger automatic deployments.

## To Do

- Form processing
- Generate fallback fonts
- Animation library
- CMS vs Markdown
- Error handling
- Logging
