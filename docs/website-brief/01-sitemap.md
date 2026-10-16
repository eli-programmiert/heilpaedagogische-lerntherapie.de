# 01 – Sitemap, Navigation, SEO

## Pages

| URL | Page file | Nav label | Source in the raw material |
|-----|-----------|-----------|----------------------------|
| `/` | `seiten/startseite.md` | Start (logo) | „Startseite“, „Für wen ist meine Praxis da?“ |
| `/heilpaedagogik/` | `seiten/heilpaedagogik.md` | Heilpädagogik | „Heilpädagogik“ |
| `/lerntherapie/` | `seiten/lerntherapie.md` | Lerntherapie | „Lerntherapie“ |
| `/angebot/` | `seiten/angebot.md` | Angebot | „Mein Angebot“ (4 offers with anchors) |
| `/ueber-mich/` | `seiten/ueber-mich.md` | Über mich | „Über mich“, „Tiergestützte Leseförderung“ |
| `/preise/` | `seiten/preise.md` | Preise | „Preise & Kostenübernahme“ |
| `/kontakt/` | `seiten/kontakt.md` | Kontakt (as a button) | „Impressum/Kontakt“ |
| `/impressum/` | `seiten/impressum.md` | Footer only | „Impressum/Kontakt“ + legal requirements |
| `/datenschutz/` | `seiten/impressum.md` (2nd part) | Footer only | new (legal requirement) |
| `/404` | – | – | German text: „Diese Seite gibt es leider nicht.“ + button „Zur Startseite“ |

**Anchors on `/angebot/`** (used for deep links from the homepage and the nav dropdown):
`#heilpaedagogische-foerderung`, `#integrative-lerntherapie`, `#praevention`, `#adhs`

Remove: blog, `/pl/*`, `cookies`, `polityka-prywatnosci`, `regulamin`, all Nova demo pages (see `03-theme-umbau.md`).

## Header navigation (navbar `floating`)

```
[Logo horizontal]   Heilpädagogik  Lerntherapie  Angebot ▾  Über mich  Preise   ( Kontakt aufnehmen )
                                                  ├ Heilpädagogische Förderung
                                                  ├ Integrative Lerntherapie
                                                  ├ Prävention
                                                  └ ADHS – Fokus & Familie
```
- Mobile: burger → drawer with the same entries. The CTA „Kontakt aufnehmen“ sits at the bottom of the drawer as a full-width button.
- If the dropdown is too much work in the navbar component, use a plain „Angebot“ link. The anchors are a nice-to-have.

## Footer

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ [Bildmarke] Fachpraxis für Heilpädagogik       Seiten            Kontakt          │
│ & integrative Lerntherapie                    Heilpädagogik     Elisabeth Eggersdorfer │
│ Beratung | Therapie | Förderung               Lerntherapie      Pappelweg 8A      │
│                                               Angebot           93197 Laub-Zeitlarn│
│ Mobil im Landkreis Regensburg und im          Über mich         info@…            │
│ südlichen Landkreis Schwandorf.               Preise            [Instagram-Icon]  │
│                                               Kontakt                             │
│ ─────────────────────────────────────────────────────────────────────────────  │
│ Pädagogisch-therapeutische Begleitung – keine medizinische Heilbehandlung.         │
│ © 2026 Elisabeth Eggersdorfer · Impressum · Datenschutz                          │
└───────────────────────────────────────────────────────────────────────────────┘
```
Footer background: `base` (cream), not dark (see Nova rule „no dark sections“).

## SEO per page

| URL | `<title>` | Meta description |
|-----|-----------|------------------|
| `/` | Heilpädagogik & Lerntherapie in Zeitlarn und Landkreis Regensburg | Mobile heilpädagogische und lerntherapeutische Fachpraxis für Kinder bei LRS, Dyskalkulie, ADHS und Entwicklungsverzögerungen. Vom Jugendamt anerkannt, Kostenübernahme nach § 35a SGB VIII möglich. |
| `/heilpaedagogik/` | Was ist Heilpädagogik? Heilpädagogische Förderung für Kinder | Heilpädagogik stärkt Ressourcen, Interessen und Entwicklungspotenziale. So arbeite ich: von der Anamnese über den Förderplan bis zur Elternberatung. |
| `/lerntherapie/` | Was ist Lerntherapie? Hilfe bei LRS, Dyskalkulie und ADHS | Lerntherapie setzt an den Ursachen von Lernschwierigkeiten an, nicht am Schulstoff. Ganzheitliche Diagnostik, individuelle Förderung und Elternarbeit. |
| `/angebot/` | Angebot: Förderung, Lerntherapie, Prävention und ADHS-Programm | Heilpädagogische Förderung, integrative Lerntherapie bei LRS und Dyskalkulie, Prävention im Vorschulalter und das 12-Wochen-Programm „Fokus & Familie“ bei ADHS. |
| `/ueber-mich/` | Über mich: Elisabeth Eggersdorfer, Heilpädagogin und Lerntherapeutin | Staatlich anerkannte Heilpädagogin, heilpädagogische Förderlehrerin und integrative Lerntherapeutin aus Zeitlarn, bald mit Therapiebegleithündin Frieda. |
| `/preise/` | Preise & Kostenübernahme durch das Jugendamt (§ 35a SGB VIII) | Transparente Preise für Heilpädagogik, Lerntherapie, Beratung und Förderpakete. Kostenübernahme durch das Jugendamt Landkreis Regensburg möglich. |
| `/kontakt/` | Kontakt: Erstgespräch vereinbaren | Schreiben Sie mir für ein unverbindliches Erstgespräch. Mobil im Landkreis Regensburg und südlichen Landkreis Schwandorf. |
| `/impressum/` | Impressum | (noindex not required, short description) |
| `/datenschutz/` | Datenschutzerklärung | – |

Local SEO: add `LocalBusiness` JSON-LD (or the closer subtype `ProfessionalService`) on `/` with name, address, email, `areaServed` = ["Landkreis Regensburg", "Landkreis Schwandorf"], `sameAs` = Instagram URL. Add a phone number once known.

`public/llms.txt` and `public/robots.txt`: rewrite for this practice (in German). Remove the Nova text.
