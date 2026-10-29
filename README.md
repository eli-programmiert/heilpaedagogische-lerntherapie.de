# heilpaedagogische-lerntherapie.de

Website der **Fachpraxis für Heilpädagogik & integrative Lerntherapie** (Elisabeth Eggersdorfer, Laub-Zeitlarn).
Static Astro 7 site based on the Nova theme (Tailwind 4), German only, hosted on GitHub Pages with the custom domain `heilpaedagogische-lerntherapie.de`.

The content brief (copy, sitemap, design decisions) lives in `docs/website-brief/` (entry point: `docs/website-brief/README.md`).

## Getting started

Node.js 22 or newer.

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # full chain: favicons, fonts, responsive images, scope pruning
npm run ai:check   # types, data contracts, imports, registrations, tests
```

## Where to edit what

| Task | File |
| --- | --- |
| Page copy and section order (one file per page) | `src/data/pages/<slug>.json` (`index.json` = Startseite) |
| Navigation, footer, UI labels | `src/data/i18n/nova.json` |
| Practice data (address, phone, e-mail, Instagram) | `src/data/global/company.json` |
| Default SEO, indexing | `src/data/global/seo.json` |
| Impressum / Datenschutz | `src/content/legal/impressum.md`, `src/content/legal/datenschutz.md` |
| IFLW seal (personal snippet, never edit) | `src/data/global/iflw-seal.json` |
| Colours, fonts, radii | `design/nova.md` → `npm run design:sync` |
| Photos | originals in `src/assets/raw/praxis/` → `npm run assets:img` writes AVIF/WebP variants to `public/assets/images/praxis/` |

Each entry in `sections` of a page JSON names a block (`id` + `variant`) and carries its content in `data`.
The practice blocks live in `src/components/registry/praxis/` and are registered in `src/config/section-registry/praxis.ts`.
Copy supports `**bold**` and `[Linktext](/pfad/)`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds with `npm run build` and deploys `dist/` on every push to `main`.

One-time setup:

1. GitHub → Settings → Pages → Source: **GitHub Actions**.
2. Settings → Pages → Custom domain: `heilpaedagogische-lerntherapie.de` (also in `public/CNAME`), then enable **Enforce HTTPS**.
3. DNS at IONOS:
   - `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional `@` AAAA records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` CNAME → `<github-user>.github.io`

## Before going live

- **Go-live blocker:** replace the placeholder texts in `src/content/legal/impressum.md` and `datenschutz.md` with Elisabeth's final texts and set `draft: false`. The build prints a warning while they are drafts.
- The privacy policy must mention GitHub Pages hosting (server logs) and the IFLW seal image loaded from `www.iflw.de`.

## Template documentation

The Nova template docs are kept for reference: `AI-QUICKSTART.md`, `CUSTOMIZATION.md`, `DESIGN_RULES.md`, `DEPLOYMENT.md`, `LICENSE.md`.
