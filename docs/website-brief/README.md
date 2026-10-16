# Website-Brief – Fachpraxis für Heilpädagogik & integrative Lerntherapie

**Kundin:** Elisabeth Eggersdorfer, staatlich anerkannte Heilpädagogin, heilpädagogische Förderlehrerin, integrative Lerntherapeutin
**Domain:** heilpaedagogische-lerntherapie.de
**Sprache:** ausschließlich Deutsch (`lang="de"`, `og:locale=de_DE`), Anrede der Eltern mit **„Sie“**, Elisabeth spricht in der **Ich-Form**.
**Stack:** Astro 7 + Nova-Theme (Tailwind 4), statischer Build.

This folder is the single source of truth for the implementation. The raw material from the client lives in `.content/` and has been fully transferred, cleaned up and proofread here. **Do not copy text from `.content/text/raw-input.md`. Use the page files in `seiten/`.**

## Reading order for the coding agent

| # | File | Contents |
|---|------|----------|
| 1 | `01-sitemap.md` | Pages, URLs, navigation, footer, SEO titles/descriptions |
| 2 | `02-design.md` | Brand colours (taken from the logo), typography, mood, token changes for `design/nova.md` |
| 3 | `03-theme-umbau.md` | Technical plan: what to strip from Nova, how to add per-page section data, locale `de`, checklist |
| 4 | `seiten/*.md` | One file per page: wireframe + section → Nova block mapping + final German copy |
| 5 | `05-assets.md` | Asset inventory, target paths, missing assets |
| 6 | `04-offene-fragen.md` | Open questions for Elisabeth (German, ready to forward). Items marked **[OFFEN]** in the page files are placeholders until answered. |

## Conventions in the page files

- `> Block:` names the Nova section id + variant from `src/config/section-registry/` that should render the section.
- Text in the **Inhalt** blocks is final copy unless marked **[ENTWURF]** (proposed by us, needs Elisabeth's OK) or **[OFFEN]** (information missing).
- Wireframes are ASCII. Desktop is shown, and mobile always stacks into a single column in the listed order.

## Positioning in one sentence

> Mobile heilpädagogische und lerntherapeutische Fachpraxis für Kinder im Vorschul- und Schulalter im Landkreis Regensburg und im südlichen Landkreis Schwandorf, vom Jugendamt des Landkreises Regensburg anerkannt, Kostenübernahme nach § 35a SGB VIII möglich.

## Target audience and tone

- **Primary:** parents of children aged about 4–12 with learning difficulties (LRS, Dyskalkulie), ADHS, developmental delays, or who are worried before school starts.
- **Secondary:** Jugendamt staff, teachers, Kita staff and therapists who refer children.
- Parents arrive worried. The tone should be **warm, calm and competent**, not clinical, and should never promise a cure. Use short sentences and explain technical terms.
- **Legal:** this is pedagogical/therapeutic support and **not a medical treatment**. The disclaimer must appear on the homepage and in the footer (see `seiten/startseite.md`). No promises of healing or success (Heilmittelwerbegesetz).
