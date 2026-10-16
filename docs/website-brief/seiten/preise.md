# Preise & Kostenübernahme `/preise/`

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ PREISE                                                                  │ 1 pageIntro (page)
│ Preise & Kostenübernahme                                                │
├──────────────────────────────────────────────────────────────────────┤
│ EINZELLEISTUNGEN                                                        │ 2 Preisliste (base)
│ Heilpädagogik ................................ 45 Min. ....... 60 €     │   schlichte Tabelle /
│ Lerntherapie ................................. 60 Min. ....... 70 €     │   Definition-List
│ Pädagogische Beratung ........................ [OFFEN] ............      │
│ Kilometerpauschale (ab Zeitlarn) ............................ 5–10 €    │
├──────────────────────────────────────────────────────────────────────┤
│ PAKETE                                                                  │ 3 featuresOffer (page)
│ ┌──────────────────────────────┐ ┌──────────────────────────────┐      │   2 Karten
│ │ Präventionspaket LRS/Dysk.   │ │ ★ „Fokus & Familie“ ADHS      │      │   (ADHS = popular)
│ │ 10 Einheiten       560 €     │ │ 12 Wochen          990 €      │      │
│ │ [Anfragen]                   │ │ [Anfragen]                    │      │
│ └──────────────────────────────┘ └──────────────────────────────┘      │
├──────────────────────────────────────────────────────────────────────┤
│ ⓘ KOSTENÜBERNAHME DURCH DAS JUGENDAMT (§ 35a SGB VIII)                 │ 4 Callout groß (base)
│ Text + 3 Schritte                                                       │
├──────────────────────────────────────────────────────────────────────┤
│ FAQ Kosten                                                              │ 5 faqLean (page)
├──────────────────────────────────────────────────────────────────────┤
│ CTA (accent)                                                            │ 6
└──────────────────────────────────────────────────────────────────────┘
```

## 1 · Intro
- **Eyebrow:** Preise
- **H1:** Preise & Kostenübernahme
- **Lead:** Transparente Preise, die sich an der Empfehlung des Berufsverbands für Heilpädagogik orientieren.
  **[OFFEN: exact name of the professional association, presumably „Berufs- und Fachverband Heilpädagogik e. V. (BHP)“]**

## 2 · Einzelleistungen
> New small molecule `PriceList` (rows: service · duration · price). Tabular numbers, prices right-aligned. Mobile: duration below the service.

| Leistung | Dauer | Preis |
|----------|-------|-------|
| Heilpädagogische Förderung | 45 Min. | 60 € |
| Lerntherapie | 60 Min. | 70 € |
| Pädagogische Beratung | **[OFFEN]** | **[OFFEN]** |
| Kilometerpauschale für Hausbesuche (ab Zeitlarn) | – | 5–10 € |

> **[OFFEN]** The raw material says „Beratung: ab 16 € / 70 €“, which is ambiguous (16 € per 15 min.? 70 € per hour?). Show „auf Anfrage“ until this is clarified.

Footnote: **[OFFEN]** VAT notice depending on Elisabeth's tax status (e.g. „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“ or tax-exempt under § 4 UStG). **Do not publish until clarified.**

## 3 · Pakete
> Block: `featuresOffer` (2 items). Hide `popularBadge` or rename it to „Kompaktprogramm“.
1. **Präventionspaket LRS / Dyskalkulie**
   - Price: 560 € · Note: 10 Einheiten
   - Features: Spielerische Förderung der Vorläuferfähigkeiten · Phonologische Bewusstheit, Mengen & Zahlen · Für Vorschul- und Grundschulkinder
   - CTA: Paket anfragen → `/kontakt/`
   - More: → `/angebot/#praevention`
2. **„Fokus & Familie“ – ADHS-Kompaktprogramm**
   - Price: 990 € · Note: 12 Wochen
   - Features: Anamnese, Diagnostik & Förderplan · 10 heilpädagogische Einzeleinheiten · 2 Eltern-Coachings à 60 Min. · Wöchentliche telefonische Updates · Abschlussgespräch mit Entwicklungsbericht
   - CTA: Programm anfragen → `/kontakt/`
   - More: → `/angebot/#adhs`

## 4 · Kostenübernahme durch das Jugendamt
> Callout, large, icon `seal-check`. Seal/logo next to it if available.
- **H2:** Kostenübernahme durch das Jugendamt
- **Text:** Meine Praxis ist vom Jugendamt des Landkreises Regensburg anerkannt. Eine Kostenübernahme im Rahmen der Eingliederungshilfe nach **§ 35a SGB VIII** ist für Lerntherapie möglich, wenn eine medizinische Diagnose vorliegt.
- **So gehen Sie vor** **[ENTWURF, have Elisabeth check the process]**:
  1. Diagnose durch Kinder- und Jugendpsychiater/in oder Kinder- und Jugendpsychotherapeut/in einholen
  2. Antrag auf Eingliederungshilfe beim Jugendamt stellen
  3. Nach Bewilligung beginnt die Förderung, und ich rechne direkt mit dem Jugendamt ab **[OFFEN: is that correct?]**
- **Note:** Gern unterstütze ich Sie bei Fragen zum Antrag.

## 5 · Fragen zu den Kosten **[ENTWURF]**
> Block: `faqLean`.
1. **Was kostet das Erstgespräch?** **[OFFEN: free / regular price?]**
2. **Wie wird abgerechnet?** **[OFFEN: per session / monthly / payment in advance for packages?]**
3. **Was passiert, wenn wir einen Termin absagen müssen?** **[OFFEN: cancellation terms, e.g. free of charge up to 24 h before]**
4. **Übernimmt die Krankenkasse die Kosten?** Nein. Heilpädagogische Förderung und Lerntherapie sind keine Leistungen der gesetzlichen Krankenkassen. Eine Kostenübernahme ist jedoch über das Jugendamt (§ 35a SGB VIII) möglich. **[ENTWURF, check]**

## 6 · CTA
- **H2:** Fragen zu Kosten oder Antrag?
- **Text:** Schreiben Sie mir, und ich melde mich zeitnah bei Ihnen.
- **Button:** Kontakt aufnehmen → `/kontakt/`
