# Über mich `/ueber-mich/`

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ ╭──────────────╮   ÜBER MICH                                           │ 1 aboutExpert (page)
│ │              │   Hallo, ich bin Elisabeth.                  (H1)     │   Portrait groß links,
│ │   Portrait   │   Rolle …                                             │   Ring-Deko dahinter
│ │              │   Text (persönlich) …                                 │
│ ╰──────────────╯   ✓ ✓ ✓      [Tags]                                   │
├──────────────────────────────────────────────────────────────────────┤
│ MEIN WEG                                                               │ 2 Werdegang (base)
│   ◯── Mit 15: Ausbildung zur Erzieherin                                │   timelineAlternate
│        ◯── Sonderpäd. Einrichtungen                                    │   (5 Stationen)
│   ◯── Staatl. anerkannte Heilpädagogin + Förderlehrerin                │
│        ◯── Vertiefung Diagnostik                                       │
│   ◯── Studium Integrative Lerntherapie (abgeschlossen)                 │
├──────────────────────────────────────────────────────────────────────┤
│ TIERGESTÜTZTE LESEFÖRDERUNG                       ╭────────────╮       │ 3 Frieda (page)
│ Frieda, mein Zwergpudel …                         │ Foto Frieda│       │   aboutSplit
│                                                   ╰────────────╯       │
├──────────────────────────────────────────────────────────────────────┤
│ Persönlich: Querflöte · Natur · Menschen   (kleine Icon-Zeile, optional)│ 4 (base)
├──────────────────────────────────────────────────────────────────────┤
│ CTA (accent)                                                           │ 5
└──────────────────────────────────────────────────────────────────────┘
```

## 1 · Profil
> Block: `aboutExpert` (H1 via the first section). Image: `elisabeth-eggersdorfer-portrait.webp`.
- **Eyebrow:** Über mich
- **H1:** Hallo, ich bin Elisabeth.
- **Role:** Staatlich anerkannte Heilpädagogin · Heilpädagogische Förderlehrerin · Integrative Lerntherapeutin
- **Text:**
  Ich arbeite als heilpädagogische Förderlehrerin an einem sonderpädagogischen Förderzentrum. Schon während meiner Ausbildung zur Erzieherin durfte ich in sonderpädagogischen Einrichtungen arbeiten, und dort wusste ich: Ich möchte Heilpädagogin werden.
  In meiner Fachpraxis verbinde ich heute Heilpädagogik und Lerntherapie, damit Kinder mit Lernschwierigkeiten, ADHS oder Entwicklungsbesonderheiten wieder Zutrauen in die eigenen Fähigkeiten gewinnen.
  *(Second paragraph = **[ENTWURF]**, the rest comes from the material.)*
- **Checks:**
  - Staatlich anerkannte Heilpädagogin
  - Zusatzabschluss heilpädagogische Förderlehrerin
  - Abgeschlossener Studiengang „Integrative Lerntherapie“
- **Tags:** Diagnostik · LRS · Dyskalkulie · ADHS · Psychomotorik

## 2 · Mein Weg
> Block: `timelineAlternate` (or `processTimeline`). **[OFFEN: years for each station]**. Without years, the timeline works as a numbered sequence.
1. **Ausbildung zur Erzieherin:** Mit 15 Jahren habe ich die Ausbildung zur Erzieherin begonnen.
2. **Erfahrungen in sonderpädagogischen Einrichtungen:** Hier wurde mir klar, dass ich Heilpädagogin werden möchte.
3. **Staatlich anerkannte Heilpädagogin & heilpädagogische Förderlehrerin:** Weiterbildung zur staatlich anerkannten Heilpädagogin und zusätzlicher Abschluss als heilpädagogische Förderlehrerin.
4. **Vertiefung Diagnostik:** Durch ein Vertiefungsmodul bin ich mit gängigen projektiven Testverfahren, der Intelligenzdiagnostik und der Diagnostik von Teilleistungsstörungen vertraut.
5. **Studium „Integrative Lerntherapie“:** Neben meiner Arbeit im Förderzentrum habe ich den Studiengang „Integrative Lerntherapie“ abgeschlossen.

## 3 · Tiergestützte Leseförderung mit Frieda
> Block: `aboutSplit` (text + image + quote). Image **[OFFEN: photo of Frieda]**. Until it arrives, use an icon area (`dog`) or leave the section out.
- **Eyebrow:** Tiergestützte Leseförderung
- **H2:** Lesen mit Frieda
- **Text:** Mit meiner Hündin Frieda, einem Zwergpudel, erleben Kinder eine wertfreie, entspannte Lernumgebung. Frieda unterstützt Lesemotivation, Emotionsregulation und Selbstvertrauen, denn ihr ist es ganz egal, ob ein Wort beim ersten Mal stimmt.
  *(Last sub-clause = **[ENTWURF]**.)*
- **Note [OFFEN]:** The material says both „ausgebildete Hündin“ and „die mich bald in der Lerntherapie begleiten darf“. If the training is not finished yet, add the badge „Bald mit dabei“ and change the wording to „Bald begleitet mich meine Hündin Frieda …“.

## 4 · Persönliches (optional, small)
- **Text:** In meiner Freizeit spiele ich Querflöte, bin gern in der Natur und unter Menschen und verbringe viel Zeit mit Frieda.
- Icons: `music-notes`, `tree`, `users`, `dog`

## 5 · CTA
- **H2:** Lernen wir uns kennen
- **Text:** Ich freue mich darauf, Sie und Ihr Kind kennenzulernen.
- **Button:** Kontakt aufnehmen → `/kontakt/`
