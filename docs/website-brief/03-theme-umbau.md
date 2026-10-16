# 03 – Theme analysis & conversion plan (Nova → practice website)

Nova is a **bilingual (PL/EN) one-page agency template** with a large block library (`src/components/registry/*`, about 50 section variants) and a data-driven `PageBuilder`. The library is a good fit. Language, page model and demo content need to be adapted.

## Findings (status quo)

1. **The homepage is currently broken:** `src/pages/index.astro` is still the Astro starter page and imports `src/components/Welcome.astro`, which was deleted. Delete `index.astro` so that `src/pages/[...page].astro` renders `src/data/pages/index.json`.
2. **Locales are only `pl | en`:** `NovaLocale` in `src/utils/nova-i18n.ts`, `SITE_LOCALE` in `site.config.mjs`, and blocks read `data[locale] ?? data.pl`. There are hardcoded PL/EN strings in about 23 components/layouts (Button, CookieConsent, SmartImage, FAQ blocks, Layout, …), found with `grep -rlE "[ąęłńśźż]" src/components src/layouts`.
3. **Section data is global per block type:** `PageBuilder.resolveSection` loads `src/data/sections/<dataKey>.json` from the registry. **Two pages using the same block share the same content.** For multiple pages, `PageSection` needs a per-page override.
4. With `ACTIVE_TEMPLATE === "nova"`, the homepage copy from `src/data/i18n/nova.json` overrides the section data at render time (`getNovaSectionCopy`).
5. Blocks already support a `data` prop as an override (`props.data || jsonData[locale]`, e.g. `AudienceSplitBlock`, `HeroSplitBlock`). That is the hook to use.
6. Contact form: `public/send-form.php` (PHP mailer, SMTP via `company.json`/`.env`). It only works on PHP hosting. `netlify.toml` exists. Clarify the hosting choice (see `04-offene-fragen.md`).
7. Rules in `DESIGN_RULES.md` apply: text only through `Text`/`Heading`, sections through `Section`+`Container`, buttons through `Button.astro`, cards with `ui-card-interactive`, no dots/`animate-pulse`, no dark sections, trailing slash on internal links, and `npm run ai:check` after every change.

## Recommended conversion (in this order)

### Step 1 – Base configuration
- `site.config.mjs`: `SITE_URL = 'https://heilpaedagogische-lerntherapie.de/'`, `SITE_LOCALE = 'de'`, `BUILD_SCOPE.pages = ['/', '/heilpaedagogik', '/lerntherapie', '/angebot', '/ueber-mich', '/preise', '/kontakt', '/impressum', '/datenschutz']`.
- `ACTIVE_TEMPLATE`: move away from `'nova'` (or make the Nova i18n override a no-op) so that `nova.json` no longer overrides content.
- Delete: `src/pages/index.astro`, `src/pages/pl/`, `src/pages/blog/`, `cookies.astro`, `polityka-prywatnosci.astro`, `regulamin.astro`, `src/data/pages/blog.json`, `NovaDemoBanner`, the language switcher, `public/assets/images/t001-nova/`. Keep the dev gallery (`/dev/components`). It is useful for choosing blocks and is excluded from the build anyway.

### Step 2 – German as the only language
- Extend `NovaLocale` (or a new `Locale` type) with `'de'` and switch the fallback in blocks from `?? data.pl` to `?? data.de`. Alternatively, use a central helper `pickLocale(data)`.
- Translate all hardcoded UI strings into German. Collect them in **one** file, e.g. `src/data/global/ui-strings.json` („Weiterlesen“, „Menü“, „Schließen“, „Zur Startseite“, form labels, error messages, etc.). Translate `form-messages.json` and `legal.json`.
- `Layout.astro`: `lang="de"`, `og:locale` `de_DE` (already supported).
- **Cookie banner:** disable it completely unless tracking or external embeds are used (self-hosted fonts, no analytics, no Google Maps). A banner without a reason only irritates visitors.

### Step 3 – Per-page section data
Minimal extension (proposal):
```ts
// src/types/config.ts
export interface PageSection { id: string; variant?: string; dataKey?: string; data?: Record<string, unknown>; }
```
In `PageBuilder.resolveSection`: `const key = section.dataKey ?? variant.dataKey`. Then load the JSON from `src/data/sections/**` (the glob already reads subfolders). Recommended file layout:
```
src/data/sections/de/startseite/hero.json
src/data/sections/de/startseite/zielgruppen.json
src/data/sections/de/heilpaedagogik/prozess.json
…
```
Store each file with the content directly at top level (no `pl`/`en`/`de` wrapper), or under `de`, but use one consistent convention. Add tests for `section-data.ts` (`getSectionDataKey` for subpaths).

### Step 4 – Branding & tokens
See `02-design.md`. Colours/typography in `design/nova.md` → `npm run design:sync`. Fonts via `npm run assets:fonts`. Fill `company.json` (name, address, email, Instagram, logo). Favicons from `docs/website-brief/assets/logo-bildmarke-entwurf.svg` → `public/favicon.svg`, then `npm run assets:gen`. Rebuild the OG image (`public/og-image.svg/png`) with the logo on cream.

### Step 5 – Build the pages
Follow `seiten/*.md`. Each page file contains the block mapping. If a block does not fit 1:1, prefer using an **existing variant with a small extension** over writing a new component (rule in `AI-QUICKSTART.md`).

New/adapted components that will probably be needed:
| Need | Proposal |
|------|----------|
| Notice box (disclaimer, Jugendamt/§ 35a) | small `Callout.astro` molecule (icon + text, `bg-base`, border), usable inside blocks |
| Price list | `featuresOffer` for packages; a simple price table (`PriceList` molecule) for unit prices |
| Legal pages | `LegalLayout.astro` exists. Use it for Impressum/Datenschutz |
| Ring decoration | static SVG component under `src/components/decorations/` (logo motif) |

### Step 6 – Contact
Form fields: Name, E-Mail, Telefon (optional), Alter des Kindes (optional), Anliegen (Textarea), consent checkbox („Ich habe die Datenschutzerklärung gelesen …“). Fallback/primary: a `mailto:` button. Depending on the hosting: PHP (`send-form.php`), Netlify Forms, or mailto only. **No Google Maps embed** (data protection and effort). Show the service area as text or a static image.

### Step 7 – Quality
`npm run ai:check`, `npm run build`, `npm run check:seo`, `npm run check:links`, `npm run check:images`. Manual test at 360px width (long German words!). Lighthouse ≥ 95/95/100. Check the `de` text for leftover Polish/English strings: `grep -rE "[ąęłńśźż]|Lorem|Nova" dist/`.

## Mapping overview: page → blocks

| Page | Sections (in order) |
|------|---------------------|
| Start | `heroSplit`* → Callout (Jugendamt) → `audienceSplit`/`specializationsGrid` (Für wen) → `servicesCards` (5 offers) → `aboutExpert` (short profile) → `stepsNumbered` (Erster Kontakt) → `faqAccordion` → `novaCta` |
| Heilpädagogik | `pageIntro` → `aboutSplit` (Was ist HP + Haltung) → `featuresGrid` (Ressourcen/Interessen/Potenziale) → `processTimeline` (7 steps) → `novaCta` |
| Lerntherapie | `pageIntro` → text/split (Was ist LT) → `servicesCards` (3 core areas) → `stepsNumbered` (4 steps) → `novaCta` |
| Angebot | `pageIntro` → `servicesZigzag` (4 offers, anchor IDs) → `processIconSteps` (ADHS 12 weeks) → Callout (mobil/Therapieraum) → `novaCta` |
| Über mich | `aboutExpert` → `timelineAlternate` (Werdegang) → `aboutSplit` (Frieda) → `novaCta` |
| Preise | `pageIntro` → price list + `featuresOffer` (packages) → Callout (§ 35a) → `faqLean` (costs) → `novaCta` |
| Kontakt | `contact` (variant `split`/`simple`) |
| Impressum/Datenschutz | `LegalLayout` |

\* `heroSplit` is registered under id `hero`, variant `default` (`HeroSplitBlock`, dataKey `hero-split`).
