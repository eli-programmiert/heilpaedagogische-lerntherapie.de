# Angebot `/angebot/`

Four offers on one page, each with an anchor (target of the homepage cards and the nav dropdown). A sticky in-page navigation (chips) under the intro is optional.

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ MEIN ANGEBOT                                                            │ 1 pageIntro (page)
│ Förderung, Therapie und Beratung                                        │
│ [Heilpäd. Förderung] [Lerntherapie] [Prävention] [ADHS]  ← Sprung-Chips │
├──────────────────────────────────────────────────────────────────────┤
│ #heilpaedagogische-foerderung                                     (base)│ 2 Angebot A
│ ┌──────────┐  Heilpädagogische Förderung                                │   Zigzag: Bild/Icon-
│ │  Bild /  │  Für wen · Ablauf (4 ✓) · Methoden (Tags)                  │   Fläche links,
│ │  Deko    │  ⓘ Mobil oder im Therapieraum                              │   Text rechts
│ └──────────┘                                                            │
├──────────────────────────────────────────────────────────────────────┤
│ #integrative-lerntherapie                                         (page)│ 3 Angebot B
│ Integrative Lerntherapie                                   ┌──────────┐ │   gespiegelt
│ Intro …                                                    │  Deko    │ │
│ ┌ LRS / Legasthenie ┐ ┌ Dyskalkulie ┐ ┌ Psycholog. Begleitung ┐       │   + 3 Unterkarten
│ └───────────────────┘ └─────────────┘ └───────────────────────┘       │
├──────────────────────────────────────────────────────────────────────┤
│ #praevention                                                      (base)│ 4 Angebot C
│ ┌──────────┐  Lerntherapie in der Prävention                           │
│ │  Deko    │  „Mein Angebot richtet sich an Kinder, die …“ (7 ✓)       │
│ └──────────┘  ZIEL-Box                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ #adhs                                                             (page)│ 5 Angebot D
│ ADHS – Förderung & Elternbegleitung                                     │
│ ┌ Ziele für das Kind ┐   ┌ Elternbegleitung ┐                           │   2 Spalten
│ ├──────────────────────────────────────────────────────────────────┤ │
│ │ „Fokus & Familie“ – 12-Wochen-Kompaktprogramm          990 €        │ │   hervorgehobene Karte
│ │ 1 ─ 2 ─ 3 ─ 4 ─ 5 ─ 6   (processIconSteps)                          │ │   mit Schritten
│ │ (Programm anfragen)                                                  │ │
├──────────────────────────────────────────────────────────────────────┤
│ CTA (accent)                                                            │ 6
└──────────────────────────────────────────────────────────────────────┘
```
Block recommendation: build sections 2–4 as **three separate `servicesZigzag`-style sections** (or one `servicesZigzag` with 3 items if its items can carry lists). If the existing block does not support lists/tags, extend it slightly (`items[].bullets`, `items[].tags`, `items[].note`). Section 5 uses `featuresGrid` (2 columns) plus `processIconSteps` for the programme.

Images in the zigzag: until real photos arrive, use **ring decoration / icon area on cream** (no stock photos of children).

---

## 1 · Intro
- **Eyebrow:** Mein Angebot
- **H1:** Förderung, Therapie und Beratung für Ihr Kind
- **Lead:** Ob Entwicklungsförderung, Lerntherapie, Prävention oder Begleitung bei ADHS: Jede Förderung beginnt mit einem genauen Blick auf Ihr Kind und wird individuell geplant.
- **Chips:** Heilpädagogische Förderung · Integrative Lerntherapie · Prävention · ADHS

## 2 · Heilpädagogische Förderung `#heilpaedagogische-foerderung`
- **Eyebrow:** Vorschulalter & Schulalter
- **H2:** Heilpädagogische Förderung
- **Für wen:** Für Kinder mit Entwicklungsbesonderheiten in Sprache, Wahrnehmung, Motorik, im sozial-emotionalen Bereich oder bei den schulischen Vorläuferfähigkeiten.
- **Ablauf:**
  - Anamnese & heilpädagogische Diagnostik
  - Individueller Förderplan
  - Spielerische, handlungsorientierte Förderung
  - Regelmäßige Rückmeldungen an die Eltern
- **Methoden (tags):** Heilpädagogische Übungsbehandlung (HPÜ) nach von Oy & Sagi · Heilpädagogische Spieltherapie · Psychomotorik · Sensorische Integration
- **Note (icon `car`/`house`):** **Mobil oder im Therapieraum:** Ihr Kind wird entweder in seiner vertrauten Umgebung gefördert oder in meinem ruhigen, strukturierten Therapieraum, je nach Bedarf und familiärer Situation.
- **Link:** Mehr über Heilpädagogik → `/heilpaedagogik/`

## 3 · Integrative Lerntherapie `#integrative-lerntherapie`
- **Eyebrow:** LRS & Dyskalkulie
- **H2:** Integrative Lerntherapie
- **Text:** Für Kinder mit Lernstörungen, Teilleistungsstörungen oder schulischen Schwierigkeiten. Die integrative Lerntherapie verbindet fachdidaktische Förderung, psychologische Begleitung und heilpädagogische Methoden.
- **Sub-card „LRS / Legasthenie“:**
  - Diagnostik & Fehleranalyse
  - Aufbau der Schriftsprachkompetenzen
  - Prävention im Vorschulalter: phonologische Bewusstheit, Mengen & Zahlen, Aufmerksamkeit, Graphomotorik
  - *Programme (tags):* Kieler Rechtschreibaufbau · Marburger Rechtschreibtraining · ABC der Tiere · Orthographikurs
- **Sub-card „Dyskalkulie“:**
  - Fehleranalyse & mathematischer Neuaufbau
  - Lernen auf enaktiver, ikonischer und symbolischer Ebene (handelnd, bildlich, symbolisch)
  - Förderung von Denkprozessen & Automatisierung
  - *Programme (tags):* Kieler Zahlenbilder · Kalkulie · „Komm mit – Rechne mit!“
- **Sub-card „Psychologische Begleitung“:**
  - Abbau von Schulangst
  - Stärkung des Selbstwerts
  - Training exekutiver Funktionen
- **Note:** **Mobil oder im Therapieraum:** Lerntherapie kann sowohl im häuslichen Umfeld als auch in meinem Therapieraum stattfinden.
- **Link:** Mehr über Lerntherapie → `/lerntherapie/`

## 4 · Lerntherapie in der Prävention `#praevention`
- **Eyebrow:** Vorschulalter & Grundschulalter
- **H2:** Lerntherapie in der Prävention
- **Lead:** Viele Lernschwierigkeiten lassen sich verhindern, wenn Kinder frühzeitig unterstützt werden.
- **Mein Präventionsangebot richtet sich an Kinder, die …**
  - unsicher im Umgang mit Mengen und Zahlen sind
  - Schwierigkeiten mit Lauten, Silben oder Reimen haben
  - Konzentrationsprobleme zeigen
  - motorische oder graphomotorische Herausforderungen haben
  - Entwicklungsverzögerungen aufweisen
  - schnell frustriert sind oder die Lernfreude verlieren
  - erste schulische Schwierigkeiten haben
- **Goal box (highlighted):** **Ziel:** Schulische Vorläuferfähigkeiten stärken, Lernfreude erhalten und Lernstörungen vorbeugen.
- **Price hint:** Präventionspaket LRS/Dyskalkulie (10 Einheiten): 560 € → `/preise/`

## 5 · ADHS `#adhs`
- **Eyebrow:** ADHS
- **H2:** ADHS – heilpädagogische und lerntherapeutische Förderung & Elternbegleitung
- **Column „Ziele für das Kind“:**
  - Selbstregulation & Impulskontrolle
  - Selbstwertstärkung
  - Strukturierungshilfen
  - Psychomotorische Methoden
  - „Lautes Denken“ nach dem Marburger Konzentrationstraining
  - Kreative Methoden zur Stärkung der Frustrationstoleranz
- **Column „Elternbegleitung“:**
  - Psychoedukation: ADHS verstehen
  - Strukturberatung für den Familienalltag
  - Ressourcenblick: Stärken sehen und nutzen
  *(The short additions after the colons are **[ENTWURF]**.)*

### Highlighted card: „Fokus & Familie“ – ADHS-Kompaktprogramm (12 Wochen)
> Block: `processIconSteps` (6 steps) inside a highlighted card (`bg-base`, border `accent`), with the price at the top right.
- **H3:** „Fokus & Familie“ – das ADHS-Kompaktprogramm
- **Subline:** 12 Wochen · 990 € **[OFFEN: is the Jugendamt cost coverage also possible here?]**
1. **Anamnese & Diagnostik:** Erstgespräch (45–60 Min.), Beobachtungseinheit und ggf. Screening (45 Min.)
2. **Förderplan:** Erstellung eines individuellen Förderplans
3. **Intensive Förderung:** 10 heilpädagogische Einzeleinheiten
4. **Eltern-Coaching:** zwei Sitzungen (je 60 Min.) zu Alltagsstrukturierung und Psychoedukation
5. **Wöchentliche Updates:** kurzer telefonischer Austausch (5–10 Min.)
6. **Abschluss & Auswertung:** Abschlussgespräch mit Entwicklungsbericht und konkreten Empfehlungen für den Alltag (60 Min.)
- **Button:** Programm anfragen → `/kontakt/?anliegen=adhs` (prefill the subject in the form if easy to do, otherwise just `/kontakt/`)

## 6 · CTA
- **H2:** Welches Angebot passt zu Ihrem Kind?
- **Text:** Das finden wir gemeinsam im Erstgespräch heraus.
- **Buttons:** Erstgespräch vereinbaren → `/kontakt/` · Preise ansehen → `/preise/`
