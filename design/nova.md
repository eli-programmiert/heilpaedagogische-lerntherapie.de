---
name: Fachpraxis Heilpädagogik & Lerntherapie
colors:
  surface: "#fffdf9"
  surface-dim: "#f0eada"
  surface-bright: "#ffffff"
  surface-container-lowest: "#fffdf9"
  surface-container-low: "#f6f2e8"
  surface-container: "#ece5d4"
  surface-container-high: "#ddd4c0"
  surface-container-highest: "#b9aea2"
  on-surface: "#1d2b3a"
  on-surface-variant: "#4f5d6b"
  outline: "#b9aea2"
  outline-variant: "#e2dccb"
  surface-tint: "#448cc8"
  primary: "#164c80"
  accent: "#448cc8"
  on-primary: "#fffdf9"
  primary-container: "#dce9f5"
  on-primary-container: "#0f3559"
  secondary: "#4f5d6b"
  on-secondary: "#fffdf9"
  secondary-container: "#f0eada"
  on-secondary-container: "#1d2b3a"
  tertiary: "#5791bf"
  on-tertiary: "#fffdf9"
  tertiary-container: "#dce9f5"
  on-tertiary-container: "#0f3559"
  error: "#b42318"
  on-error: "#ffffff"
  error-container: "#fddbd7"
  on-error-container: "#641b16"
  success: "#2f6b4f"
  on-success: "#ffffff"
  success-container: "#dcefe4"
  on-success-container: "#173d2b"
  warning: "#9a621b"
  on-warning: "#ffffff"
  warning-container: "#f8e7c8"
  on-warning-container: "#59370d"
  info: "#285b77"
  on-info: "#ffffff"
  info-container: "#dcecf4"
  on-info-container: "#17394b"
  background: "#fffdf9"
  on-background: "#1d2b3a"
  brand-primary: "#164c80"
  brand-accent: "#448cc8"
  brand-dark: "#1d2b3a"
  brand-light: "#fffdf9"
  brand-cream: "#f0eada"
typography:
  display:
    fontFamily: Jost, sans-serif
    fontSize: 64px
    fontWeight: "700"
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline:
    fontFamily: Jost, sans-serif
    fontSize: 42px
    fontWeight: "700"
    lineHeight: 1.15
    letterSpacing: -0.02em
  title:
    fontFamily: Jost, sans-serif
    fontSize: 20px
    fontWeight: "700"
    lineHeight: 1.3
  body:
    fontFamily: Satoshi, sans-serif
    fontSize: 17px
    fontWeight: "400"
    lineHeight: 1.65
  label:
    fontFamily: Satoshi, sans-serif
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 1.2
    letterSpacing: 0.18em
rounded:
  sm: 0.5rem
  DEFAULT: 0.75rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  container-px: "clamp(1rem, 4vw, 4rem)"
  section-py: "clamp(4rem, 8vw, 7.5rem)"
elevation:
  soft: "0 14px 40px -24px rgb(29 43 58 / 0.22)"
  strong: "0 28px 80px -32px rgb(29 43 58 / 0.32)"
ui:
  text-on-light: "#1d2b3a"
  text-on-light-subtle: "rgba(29, 43, 58, 0.72)"
  text-on-dark: "#fffdf9"
  text-on-dark-subtle: "rgba(255, 253, 249, 0.68)"
  type-lead-tracking: "-0.01em"
  type-lead-leading: "1.55"
  type-body-leading: "1.65"
  type-heading-tracking: "-0.02em"
  button-radius: "9999px"
  button-hover-effect: "lift"
  bg-base: "var(--color-brand-cream)"
  bg-page: "var(--color-brand-light)"
  bg-surface: "var(--color-surface)"
  bg-accent: "var(--color-brand-accent)"
fonts:
  sans: "Satoshi, sans-serif"
  heading: "Jost, sans-serif"
animations:
  scroll: "scroll 36s linear infinite"
---

# Fachpraxis für Heilpädagogik & integrative Lerntherapie, Visual Direction

The practice website builds on the Nova theme. It should feel calm, warm, trustworthy and a little playful without being childish: a bright, tidy therapy room with a lot of white space. Keywords: geborgen, klar, freundlich, fachlich.

## Colours

- Navy `#164c80` (from the logo) for headings, buttons and links.
- Light blue `#448cc8` for icons, highlights and the closing CTA band. Never for body text (contrast 3.4:1).
- Cream `#f0eada` for alternating sections and cards.
- Text uses the dark blue-grey `#1d2b3a` instead of pure black.

## Composition Principles

- Alternate `page` (white) and `base` (cream) sections. Use `accent` at most once per page, for the closing CTA.
- Use the logo motif (a large ring holding a small one) as a static, thin-stroked decoration.
- Cards have soft corners, thin borders and generous internal space.
- Photos are Elisabeth's own photos of learning materials and Frieda. No stock or AI photos of children.

## Typography

- Headings: Jost (self-hosted), relaxed tracking (`-0.02em`) and line height around 1.1 so that long German compound words stay readable.
- Body: Satoshi, 17px, `hyphens: auto` with `lang="de"`.

## Main Constraints

- Do not use purple gradients, arbitrary badges or decorative dots.
- Do not add fonts from a CDN. Use `npm run assets:fonts`.
- Do not apply colors directly in components. Colors must come from the tokens above.
