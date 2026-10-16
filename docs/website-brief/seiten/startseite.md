# Startseite `/`

## Wireframe (Desktop)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [Logo]   Heilpädagogik  Lerntherapie  Angebot▾  Über mich  Preise  (Kontakt)│ navbar floating
├──────────────────────────────────────────────────────────────────────────┤
│ MOBILE FACHPRAXIS · LANDKREIS REGENSBURG          ╭──────────────╮  ◯       │ 1 HERO (page)
│ Lernen darf wieder                                │              │          │   Text links 7/12
│ leichter werden.                                  │   Portrait   │          │   Bild rechts 5/12
│ Heilpädagogische Förderung und integrative        │   Elisabeth  │          │   + Ring-Deko
│ Lerntherapie für Kinder im Vorschul- und          │              │          │
│ Schulalter, bei Ihnen zu Hause oder im Therapie-  ╰──────────────╯          │
│ raum.                                                                       │
│ (Erstgespräch vereinbaren)  [Angebot ansehen →]                             │
│ ✓ Vom Jugendamt anerkannt  ✓ Kostenübernahme § 35a  ✓ Mobil                 │ trustBar-Zeile
├──────────────────────────────────────────────────────────────────────────┤
│ FÜR WEN?                                                                    │ 2 ZIELGRUPPEN (base)
│ Für Kinder, die beim Lernen   │ [ADHS] [Dyskalkulie] [LRS] [Lernblockaden]  │   Split 5/7:
│ oder im Alltag Unterstützung  │ [Entwicklungsverz.] [Wahrnehmung] [Konz.]   │   links Text,
│ brauchen.                     │ [Schulangst] [sozial-emotional] [Förderbed.]│   rechts Kachel-Grid
├──────────────────────────────────────────────────────────────────────────┤
│ MEIN ANGEBOT                                                                │ 3 ANGEBOT (page)
│ ┌─────────────────────────────┐ ┌───────────────┐                         │   2+1-Bento
│ │ Heilpädagogische Förderung  │ │ Lerntherapie  │                         │   (kein 3er-Raster!)
│ └─────────────────────────────┘ └───────────────┘                         │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐                     │
│ │ Prävention    │ │ ADHS          │ │ Beratung      │                     │
│ └───────────────┘ └───────────────┘ └───────────────┘                     │
│ ⓘ Hinweis: pädagogisch-therapeutisch, keine medizinische Heilbehandlung     │ Callout
├──────────────────────────────────────────────────────────────────────────┤
│ ╭──────╮  ÜBER MICH                                                         │ 4 KURZPROFIL (base)
│ │ Foto │  Elisabeth Eggersdorfer                                            │   aboutExpert
│ ╰──────╯  Staatl. anerk. Heilpädagogin · Förderlehrerin · Lerntherapeutin   │
│           ✓ … ✓ … ✓ …          [Mehr über mich →]                           │
├──────────────────────────────────────────────────────────────────────────┤
│ SO STARTEN WIR                                                              │ 5 ERSTER KONTAKT (page)
│  01 Kontakt  ──→  02 Erstgespräch  ──→  03 Diagnostik & Förderplan  ──→ 04 │   stepsNumbered
├──────────────────────────────────────────────────────────────────────────┤
│ HÄUFIGE FRAGEN                     ▸ Übernimmt das Jugendamt die Kosten?    │ 6 FAQ (base)
│                                    ▸ Kommen Sie zu uns nach Hause? …        │   faqAccordion
├──────────────────────────────────────────────────────────────────────────┤
│      Ihr Kind braucht Unterstützung? Lassen Sie uns sprechen.               │ 7 CTA (accent, blau)
│      (Erstgespräch vereinbaren)                                             │   novaCta ohne Foto
├──────────────────────────────────────────────────────────────────────────┤
│ Footer                                                                      │
└──────────────────────────────────────────────────────────────────────────┘
```
Mobile: hero image **above** the text (cropped portrait `elisabeth-eggersdorfer-quadrat.webp`), and the target-group tiles in 2 columns.

---

## 1 · Hero
> Block: `hero` / `default` (HeroSplitBlock). Use `trustBar` for the three checkmarks, no `stats`, no `googleRating`.

- **Eyebrow:** Mobile Fachpraxis · Landkreis Regensburg
- **H1:** Lernen darf wieder leichter werden. **[ENTWURF]**
  - Alternatives: „Jedes Kind lernt anders. Ich begleite es dabei.“ / „Stärken entdecken. Lernen begleiten.“
- **Text:** Heilpädagogische Förderung und integrative Lerntherapie für Kinder im Vorschul- und Schulalter, bei Ihnen zu Hause oder in meinem ruhigen Therapieraum.
- **Primary CTA:** Erstgespräch vereinbaren → `/kontakt/`
- **Secondary CTA:** Mein Angebot → `/angebot/`
- **Trust bar:** Vom Jugendamt Landkreis Regensburg anerkannt · Kostenübernahme nach § 35a SGB VIII möglich · Mobil im Landkreis Regensburg und südlichen Landkreis Schwandorf
- **Image:** `elisabeth-eggersdorfer-portrait.webp`, alt: „Elisabeth Eggersdorfer, Heilpädagogin und Lerntherapeutin“

## 1b · Begrüßung (short, can go directly under the hero or into the profile)
> Block: part of `aboutExpert` (bio) or its own short `pageIntro`-style text section.

**Herzlich willkommen!**
Ich heiße Elisabeth Eggersdorfer und begleite mit meiner mobilen heilpädagogischen und lerntherapeutischen Fachpraxis Familien, Kinder und Jugendliche, die Unterstützung im Alltag oder beim Lernen suchen. Mein Einzugsgebiet umfasst den Landkreis Regensburg sowie den südlichen Teil des Landkreises Schwandorf.

> Note: the raw material says „freiberufliche Nebentätigkeit“. We have left this out of the website text (it sounds like limited availability). Check with Elisabeth → `04-offene-fragen.md`.

## 2 · Für wen ist meine Praxis da?
> Block: `audienceSplit` (heading/description + `groups`), or `specializationsGrid` with icons only (no `href`).

- **Eyebrow:** Für wen?
- **H2:** Für wen ist meine Praxis da?
- **Text:** Ich begleite Kinder im Vorschul- und Schulalter, sowohl mit diagnostizierten Störungen als auch präventiv, wenn sich erste Schwierigkeiten zeigen.
- **Tiles** (title only, optional icon):
  1. ADHS
  2. Dyskalkulie / Rechenschwäche
  3. Legasthenie / LRS
  4. Lernschwierigkeiten & Lernblockaden
  5. Entwicklungsverzögerungen
  6. Wahrnehmungsbesonderheiten
  7. Konzentrationsprobleme
  8. Schulängste
  9. Sozial-emotionale Herausforderungen
  10. Heilpädagogischer Förderbedarf in allen Entwicklungsbereichen

## 3 · Mein Angebot (teaser)
> Block: `servicesCards` or `features` with 5 cards in a 2+3 layout. Each card links to an anchor on `/angebot/`. Cards use `ui-card-interactive`.

- **Eyebrow:** Mein Angebot
- **H2:** Unterstützung, die zu Ihrem Kind passt
- **Cards:**
  1. **Heilpädagogische Förderung** (icon `puzzle-piece`): Zielgerichtete Förderung und Unterstützung bei Behinderung, Entwicklungsverzögerungen und sozial-emotionalem Förderbedarf. → `/angebot/#heilpaedagogische-foerderung`
  2. **Lerntherapie** (icon `book-open-text`): Gezielte Hilfe bei Lernschwierigkeiten wie Lese-Rechtschreib-Schwäche (LRS) oder Dyskalkulie. → `/angebot/#integrative-lerntherapie`
  3. **Präventive Lerntherapie** (icon `plant`): Spielerische Förderung der Vorläuferfähigkeiten in Deutsch und Mathe, schon im Vorschulalter oder bei ersten Schwierigkeiten in der Grundschule. Besonders geeignet bei Konzentrationsproblemen, Unsicherheit mit Mengen und Zahlen oder Förderbedarf in der phonologischen Bewusstheit. → `/angebot/#praevention`
  4. **Begleitung bei ADHS** (icon `target`): Stärkung und Beratung für den Familienalltag mit ADHS sowie heilpädagogische Förderung in Verbindung mit Lerntherapie. → `/angebot/#adhs`
  5. **Pädagogische Beratung** (icon `chats-circle`): Ein offenes Ohr und fachliche Impulse für Eltern und Bezugspersonen. → `/kontakt/`
- **Callout under the cards (mandatory):**
  **Wichtiger Hinweis:** Mein Angebot versteht sich als pädagogisch-therapeutische Unterstützung und Begleitung. Es handelt sich ausdrücklich nicht um eine medizinische Heilbehandlung.

## 3b · Anerkennung & Kostenübernahme (callout, can sit directly under the hero)
> Component: Callout (icon `seal-check`), `bg-base`. Add the seal image here if available.

Meine Praxis ist vom **Jugendamt des Landkreises Regensburg anerkannt**. Eine Kostenübernahme nach **§ 35a SGB VIII** ist möglich, wenn eine medizinische Diagnose vorliegt. [Mehr zu Preisen & Kostenübernahme →](/preise/)

## 4 · Kurzprofil
> Block: `aboutExpert` (portrait, eyebrow, name, role, bio, `checks`, `tags`). Replace the LinkedIn link with „Mehr über mich“ → `/ueber-mich/`.

- **Eyebrow:** Über mich
- **Name:** Elisabeth Eggersdorfer
- **Role:** Staatlich anerkannte Heilpädagogin · Heilpädagogische Förderlehrerin · Integrative Lerntherapeutin
- **Bio:** Ich arbeite als heilpädagogische Förderlehrerin an einem sonderpädagogischen Förderzentrum und bringe Erfahrung aus vielen Jahren mit Kindern mit besonderem Förderbedarf mit. In meiner Praxis verbinde ich Heilpädagogik und Lerntherapie: mit Geduld, Feinfühligkeit und viel Wertschätzung für jedes Kind.
- **Checks:**
  - Weiterbildung zur staatlich anerkannten Heilpädagogin
  - Vertiefung in Diagnostik (u. a. Teilleistungsstörungen)
  - Abgeschlossener Studiengang „Integrative Lerntherapie“
- **Tags:** LRS · Dyskalkulie · ADHS · Psychomotorik · Spieltherapie
- **Link:** Mehr über mich → `/ueber-mich/`

## 5 · So starten wir **[ENTWURF, derived from the process in the material]**
> Block: `stepsNumbered`.

- **Eyebrow:** Der erste Schritt
- **H2:** So starten wir gemeinsam
- **Steps:**
  1. **Kontakt aufnehmen:** Sie schreiben mir per E-Mail oder über das Kontaktformular und schildern kurz Ihr Anliegen.
  2. **Erstgespräch:** Wir lernen uns kennen und sprechen über die Lebenswelt, Entwicklung und Bedürfnisse Ihres Kindes.
  3. **Diagnostik & Förderplan:** Durch spielbasierte Beobachtung und Diagnostik ermittle ich Stärken und Unterstützungsbedarfe und erstelle einen individuellen Förderplan.
  4. **Förderung & Austausch:** Ihr Kind wird regelmäßig gefördert, zu Hause oder im Therapieraum, und wir bleiben im engen Austausch.

## 6 · Häufige Fragen **[ENTWURF, answers based only on the material, Elisabeth must approve them]**
> Block: `faqAccordion`.

- **H2:** Häufige Fragen
1. **Übernimmt das Jugendamt die Kosten?**
   Meine Praxis ist vom Jugendamt des Landkreises Regensburg anerkannt. Eine Kostenübernahme im Rahmen der Eingliederungshilfe nach § 35a SGB VIII ist möglich, wenn eine medizinische Diagnose vorliegt. Gern berate ich Sie zum Vorgehen.
2. **Brauchen wir eine Diagnose?**
   Nein. Mein Angebot richtet sich sowohl an Kinder mit diagnostizierten Störungen als auch an Kinder, die präventiv Unterstützung benötigen. Für eine Kostenübernahme durch das Jugendamt ist eine medizinische Diagnose allerdings Voraussetzung.
3. **Kommen Sie zu uns nach Hause?**
   Ja. Meine Praxis ist mobil: Ihr Kind kann in seiner vertrauten Umgebung gefördert werden oder in meinem ruhigen, strukturierten Therapieraum, je nach Bedarf und familiärer Situation. Für Hausbesuche berechne ich eine Kilometerpauschale.
4. **In welchem Gebiet sind Sie unterwegs?**
   Im Landkreis Regensburg und im südlichen Teil des Landkreises Schwandorf.
5. **Ist Lerntherapie Nachhilfe?**
   Nein. Lerntherapie setzt nicht am aktuellen Schulstoff an, sondern an den Ursachen der Lernschwierigkeiten, z. B. an fehlenden Grundlagen im Lesen, Schreiben oder Rechnen, an der Konzentration oder am Selbstvertrauen.
6. **Ist das eine medizinische Behandlung?**
   Nein. Mein Angebot ist pädagogisch-therapeutische Unterstützung und Begleitung und ersetzt keine ärztliche oder psychotherapeutische Behandlung.

## 7 · Abschluss-CTA
> Block: `novaCta`, section tone `accent` (blue), **without** the mountain photo (or with the ring decoration).

- **H2:** Ihr Kind braucht Unterstützung?
- **Text:** Lassen Sie uns in einem unverbindlichen Erstgespräch herausfinden, was Ihrem Kind guttut.
- **Primary:** Erstgespräch vereinbaren → `/kontakt/`
- **Secondary:** Preise & Kostenübernahme → `/preise/`

**This CTA block is reused at the end of all content pages** (the copy may vary per page, see the page files).
