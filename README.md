# Astro Core

Bare bones Astro starter with essential integrations and opinionated typography. See it here: [astro-core](https://astro-core.gravybo.at/)

## Features

🚀 Built with [Astro](https://astro.build/)

- MDX support with `astro-mdx`
- Head ordering with `astro-capo`
- Compression via `astro-compressor`

🎨 Styled with [Tailwind CSS](https://tailwindcss.com/)

- Responsive fluid typography via [fluid-tailwind](https://fluid.tw/)
- Container and aspect ratio utilities

🎯 SEO optimized with `astro-seo`

- Sensible defaults with overrides at the page level
- Automatic sitemap generation

✨ Other goodies

- Easy site config in `src/config/configGlobal.ts`
- Variable font support via custom Tailwind plugin
- Subsetted Mona Sans VF and Monaspace Argon Var fonts

## Quick Start

1. Install dependencies `pnpm install`

2. Development commands:

- `pnpm dev` - Start development server
- `pnpm build` - Build for production

## Deployment

1. Install Wrangler CLI `pnpm install -g wrangler`

1. Login to Cloudflare account from CLI `wrangler login`

1. Create new deployment to Cloudflare Pages `npx wrangler pages deploy dist`

Pushes to specified branch will automatically deploy to Cloudflare Pages
