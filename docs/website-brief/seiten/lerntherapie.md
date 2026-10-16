# Lerntherapie `/lerntherapie/`

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ LERNTHERAPIE                                                            │ 1 pageIntro (page)
│ Was ist eigentlich Lerntherapie?                                        │
│ Lead …                                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ ┌ Nachhilfe ──────────────┐   ┌ Lerntherapie ──────────────────────┐   │ 2 Vergleich (base)
│ │ übt aktuellen Schulstoff│ vs│ setzt an den Ursachen an            │   │   2 Spalten
│ └─────────────────────────┘   └─────────────────────────────────────┘   │   [ENTWURF]
├──────────────────────────────────────────────────────────────────────┤
│ KERNBEREICHE                                                            │ 3 servicesCards (page)
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                     │   3 Karten mit Icon
│ │ LRS          │ │ Dyskalkulie  │ │ ADHS         │                     │   (ausnahmsweise 3er,
│ └──────────────┘ └──────────────┘ └──────────────┘                     │   Inhalte sind gleichrangig)
├──────────────────────────────────────────────────────────────────────┤
│ THERAPEUTISCHER VERLAUF                                                 │ 4 stepsNumbered (base)
│  01 ─→ 02 ─→ 03 ─→ 04                                                   │
├──────────────────────────────────────────────────────────────────────┤
│ CTA (accent)                                                            │ 5
└──────────────────────────────────────────────────────────────────────┘
```

## 1 · Intro
> Block: `pageIntro`.
- **Eyebrow:** Lerntherapie
- **H1:** Was ist eigentlich Lerntherapie?
- **Lead:** Lerntherapie ist eine außerschulische Förderung für Kinder und Jugendliche, die schwerwiegende und anhaltende Schwierigkeiten beim Lernen haben. Sie setzt nicht am aktuellen Schulstoff an, sondern an den Grundursachen der Lernschwierigkeiten.

## 2 · Lerntherapie ist keine Nachhilfe **[ENTWURF, optional, condensed from the material]**
> Simple 2-column comparison (no special block needed, `featuresGrid` with 2 items).
- **Nachhilfe:** übt den aktuellen Schulstoff, damit die nächste Probe klappt.
- **Lerntherapie:** baut fehlende Grundlagen Schritt für Schritt neu auf und stärkt Lernmotivation und Selbstvertrauen, damit Lernen nachhaltig gelingt.

## 3 · Kernbereiche der Lerntherapie
> Block: `servicesCards` (icon, title, description). Cards link to `/angebot/#integrative-lerntherapie` or `#adhs`.
- **H2:** Kernbereiche der Lerntherapie
1. **Legasthenie / LRS** (`book-open-text`): Gezieltes Rechtschreibtraining, Förderung der Leseflüssigkeit und Aufbau phonologischer Kompetenzen.
2. **Dyskalkulie** (`calculator`): Aufbau von Mengen- und Zahlenverständnis, Strukturierung mathematischer Grundprinzipien und Festigung der Grundrechenarten.
3. **ADHS** (`target`): Vermittlung von Selbstregulationsstrategien, Konzentrationstraining sowie Strukturierung des Arbeitsplatzes und des Lernumfelds.

## 4 · Therapeutischer Verlauf
> Block: `stepsNumbered`.
- **H2:** Der therapeutische Verlauf
1. **Ganzheitliche Diagnostik:** Screening, qualitative Fehleranalyse sowie Erfassung der Lernbiografie und des familiären Umfelds.
2. **Individuelle Förderung:** Ein passgenauer Therapieplan, der sich an der Nullfehlergrenze des Kindes orientiert, um Lernmotivation und Selbstvertrauen zu stärken.
3. **Schrittweiser Kompetenzaufbau:** Mehrsinnige Methoden und spezielle Therapiematerialien helfen, Lerninhalte nachhaltig im Langzeitgedächtnis zu verankern.
4. **Umfeldarbeit:** Regelmäßige Beratungsgespräche mit Eltern, Lehrkräften und weiteren Bezugspersonen sichern den Transfer in den Alltag.

*Optional tooltip/footnote for „Nullfehlergrenze“* **[ENTWURF]**: Die Aufgaben werden so gewählt, dass Ihr Kind sie (fast) fehlerfrei lösen kann. Von dort aus geht es in kleinen Schritten weiter.

## 5 · CTA
- **H2:** Schwierigkeiten beim Lesen, Schreiben oder Rechnen?
- **Text:** Gemeinsam finden wir heraus, wo Ihr Kind steht und was es jetzt braucht.
- **Buttons:** Erstgespräch vereinbaren → `/kontakt/` · Integrative Lerntherapie → `/angebot/#integrative-lerntherapie`
