# Astro Core

Starter project with Astro and essential integrations.

## Features

- ⚡️ Built with [Astro](https://astro.build/) for optimal performance
- 🎨 Styled with [Tailwind CSS](https://tailwindcss.com/)
  - Responsive fluid typography
  - Container and aspect ratio utilities
  - Variable font support (with subsetted Mona Sans)
- 🎯 SEO optimized with `astro-seo`
- 🗺️ Automatic sitemap generation
- 🎨 3D graphics powered by React Three Fiber
  - drei helpers
  - postprocessing effects
- 🚀 Performance optimizations:
  - Script optimization with `astro-capo`
  - Asset compression via `astro-compressor`
  - Third-party script handling with `partytown`

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

## Development Tools

- `npx ai-digest` - Generate LLM-friendly codebase context

## Deployment

This project is configured for deployment on Cloudflare Pages. Pushes to the main branch will trigger automatic deployments.

## Documentation Links

- [Astro Docs](https://docs.astro.build/)
- [Tailwind CSS Injection](https://docs.astro.build/en/guides/integrations-guide/tailwind/#applybasestyles)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## To Do

- Generate fallback fonts
- Form processing
- Animation library
- CMS vs Markdown
- Error handling
- Logging
