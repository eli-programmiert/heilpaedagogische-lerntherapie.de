# 02 – Design & Branding

## Mood

Calm, warm, trustworthy and a little playful, without being childish. Think of a bright, tidy therapy room with a lot of white space. Nova's editorial calm is a good fit. Its agency style (very tight headlines, black as the primary colour, copper accent) is not.

Keywords: **geborgen · klar · freundlich · fachlich**

## Colours (measured from the logo)

| Role | Hex | Source |
|------|-----|--------|
| Primary (headings, buttons, links) | `#164C80` | Navy text „Heilpädagogik &“ |
| Accent (highlights, icons, eyebrows) | `#448CC8` | Light blue „Fachpraxis für“ / „integrative Lerntherapie“ |
| Accent soft (small ring, hover) | `#5791BF` | Small ring in the icon mark |
| Cream (alternating sections, cards) | `#F0EADA` | Background band behind „integrative Lerntherapie“ |
| Page background | `#FFFDF9` | keep Nova's `surface` |
| Text | `#1D2B3A` | dark blue-grey instead of pure black (proposal) |

Proposed mapping in `design/nova.md` (frontmatter), followed by `npm run design:sync`. **Do not** edit `src/styles/themes.css` directly:

```yaml
primary: "#164c80"          # was #161616
brand-primary: "#164c80"
brand-dark: "#1d2b3a"
on-surface: "#1d2b3a"
accent: "#448cc8"           # was copper #b98b6e
brand-accent: "#448cc8"
surface-tint: "#448cc8"
tertiary: "#5791bf"
tertiary-container: "#dce9f5"
on-tertiary-container: "#0f3559"
brand-cream: "#f0eada"      # bg-base = alternating sections
surface-dim: "#f0eada"
surface-container-low: "#f6f2e8"
surface-container: "#ece5d4"
outline-variant: "#e2dccb"
```
Check contrast: `#448CC8` on white has only ~3.4:1, so it is **not suitable for body text**. Use it only for large text (≥ 24px), icons and decoration. Links and body text use `#164C80` (≈ 8.9:1).

## Typography

- The logo uses a geometric grotesque in the style of **Futura/Jost**. Recommendation: **Jost** (OFL, Google Fonts) for headings, loaded locally through `npm run assets:fonts`, never from the CDN (Nova rule).
- Body text: keep **Satoshi** (already self-hosted), or use Jost there too. Both work. Prefer the smaller font payload.
- **Loosen Nova's very tight letter-spacing:** `type-heading-tracking` from `-0.065em` to about `-0.02em`. Headline `lineHeight` from `0.96/0.98` to about `1.1`. German compound words such as „Lese-Rechtschreib-Schwäche“ or „Entwicklungsverzögerungen“ otherwise run into each other and overflow on mobile. Set **`hyphens: auto`** with `lang="de"` on headings and body text.
- Body size 17–18px. Many visitors are worried parents reading on a phone.

## Shapes & decoration

- The logo motif shows **two circles: a large one holding a small one** (adult + child). Use it as a recurring, static decoration: thin open rings (stroke in `accent`/`tertiary`) in hero corners or behind the portrait. These are geometric shapes, so they comply with the Nova rule „no dots“.
- Slightly softer corners (cards `rounded-lg`/`xl`), buttons stay `rounded-full`.
- Icons: Phosphor (already included). Suggested icons: `puzzle-piece` (Heilpädagogik), `book-open-text` (LRS), `calculator`/`numpad` (Dyskalkulie), `lightning`/`target` (ADHS/Fokus), `plant` (Prävention), `chats-circle` (Beratung), `car` (mobil), `house` (Therapieraum), `dog` (Frieda), `seal-check` (Jugendamt).

## Section rhythm

Alternate `page` (white) and `base` (cream). Use `accent` (blue) **at most once per page**, for the closing CTA band. Keep it calm.

## Photography

- Portrait: available (see `05-assets.md`). Friendly, light, with a neutral grey background that works well on cream.
- Nova rule „no stock photos of smiling people“: that suits us. Prefer real photos of the therapy room, materials and Frieda (requested from Elisabeth). Until then, use **abstract learning-material motifs** (letters, counting frames) or the ring illustration only. **No AI or stock photos of children**, which would hurt credibility.
