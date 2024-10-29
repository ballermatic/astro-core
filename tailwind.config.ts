import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";
import fluid, { extract, screens } from "fluid-tailwind";
import fontVariationSettings from "./src/styles/fontVariationSettings";

const config: Config = {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    fontFamily: {
      sans: [
        '"Mona Sans ExtraLight", sans-serif', // who knows why it's called ExtraLight, yet defaults to that weight, hence base.css html font size override
        {
          fontFeatureSettings: '"tnum", "ss03", "ss05"',
        },
      ],
      mono: ['"Monaspace Argon Var", monospace'],
    },
    fontSize: {
      xxs: [
        "0.625rem",
        {
          lineHeight: "0.75rem",
          letterSpacing: "0.05em",
        },
      ],
      xs: [
        "0.75rem",
        {
          lineHeight: "0.875rem",
          letterSpacing: "0.05em",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0.02em",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0em",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0em",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.01em",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.01em",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "-0.015em",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3rem",
          letterSpacing: "-0.022em",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "3.75rem",
          letterSpacing: "-0.025em",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-0.03em",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "6rem",
          letterSpacing: "-0.04em",
        },
      ],
    },
    // font weight and stretch are handled by fontVariationSettings plugin
    // TODO: add OKLCH color palette
    // colors: harmonyPalette,
    screens,
  },
  // for theme colors and typography, remove in production
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/ },
  ],
  plugins: [aspectRatio, containerQueries, fluid, fontVariationSettings],
  browserlist: ["last 2 versions", "> 1%"],
};
export default config;
