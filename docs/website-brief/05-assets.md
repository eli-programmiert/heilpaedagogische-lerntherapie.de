# 05 – Assets

## Available (prepared in `docs/website-brief/assets/`)

| File | Source | Use | Target path in the project |
|------|--------|-----|----------------------------|
| `elisabeth-eggersdorfer-portrait.webp` (1200 px wide, 3:4, 188 KB) | `.content/img/eli_portrait.jpg` | Hero home, Über mich | `public/assets/images/praxis/elisabeth-eggersdorfer-portrait.webp` (or `src/assets/` for `astro:assets`) |
| `elisabeth-eggersdorfer-quadrat.webp` (800×800, 65 KB) | same, cropped | Mobile hero, profile teaser, OG image | `public/assets/images/praxis/elisabeth-eggersdorfer-quadrat.webp` |
| `logo-horizontal.png` (cropped) | `.content/img/logo_medium.png` | Navbar (desktop), OG image | `public/logo.png` / `company.json → branding.logoImage` |
| `logo-mit-claim.png` (cropped) | `.content/img/logo_rich.png` | Footer, print, OG image | `public/assets/images/praxis/logo-mit-claim.png` |
| `logo-bildmarke.png` | crop from the logo | fallback only | – |
| `logo-bildmarke-entwurf.svg` | **SVG redraw** of the icon mark (draft by us) | Favicon, navbar on mobile, ring decoration | `public/favicon.svg` → `npm run assets:gen` |

**Logo quality issue:** All logos are raster images with a slightly off-white (not transparent) background and visible JPEG artefacts around the lettering. On the cream background (`#F0EADA`) this leaves a light box. Solutions, in order of preference:
1. Get the **original file from Canva/the designer as SVG or PDF** (best option).
2. Rebuild the wordmark as HTML text (Jost, colours from `02-design.md`) next to the SVG icon mark. This is sharp, light and responsive. **Recommended interim solution for the navbar.**
3. Use the PNG only on white backgrounds.

Note: the „integrative Lerntherapie“ band in the logo is the cream colour `#F0EADA`. It can be recreated as a `<mark>` style with a cream background in the HTML wordmark.

## Still needed (please request from Elisabeth)

| Priority | Asset | Purpose |
|----------|-------|---------|
| **High** | Logo as **SVG/PDF** (original from the designer or Canva) | sharp display, favicon, transparency |
| **High** | „Prüfsiegel“ as an image + usage rights | Home, prices |
| **High** | Name of the portrait photographer (credit) + confirmation of usage rights | Impressum |
| Medium | 3–6 photos of the **therapy room** and **therapy materials** (counting frame, letter cards, play materials), landscape, bright | Angebot zigzag, page intros |
| Medium | 1–3 photos of **Frieda** (alone or during reading, **without recognisable children**) | Über mich |
| Low | Second portrait in landscape format (e.g. at the table with materials) | Hero alternative, OG image |

**Children in photos:** only with written consent from the parents. Better to avoid them entirely and use hands/materials instead of faces.

## Not provided on purpose

- **No stock photos of children/smiling people** (Nova rule + credibility). Until real photos arrive, use **ring decorations** (SVG, logo motif) and **Phosphor icons** on cream areas. The coding agent can build these from `logo-bildmarke-entwurf.svg`.
- If you want illustrations in addition: free, licence-clear line illustrations, e.g. [unDraw](https://undraw.co) (colour adjustable to `#448CC8`) or [Open Peeps](https://www.openpeeps.com) (CC0). Use only if they fit the calm style.

## Generated assets (to do for the coding agent)

- `public/favicon.svg`, `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png` from the SVG icon mark (`npm run assets:gen`)
- `public/og-image.png` (1200×630): cream background, icon mark + „Fachpraxis für Heilpädagogik & integrative Lerntherapie“ + „Elisabeth Eggersdorfer · Landkreis Regensburg“, optional round portrait
- Delete Nova demo images: `public/assets/images/t001-nova/`, and replace the placeholders.
