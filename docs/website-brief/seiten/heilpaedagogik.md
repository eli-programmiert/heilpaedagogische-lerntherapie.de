# Heilpädagogik `/heilpaedagogik/`

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEILPÄDAGOGIK                                                           │ 1 pageIntro (page)
│ Was ist eigentlich Heilpädagogik?                       ◯ Ring-Deko    │   H1
├──────────────────────────────────────────────────────────────────────┤
│ Heilpädagogik ist eine wissen-   │  Heilpädagogik stärkt …            │ 2 Split (base)
│ schaftliche Disziplin … (Text)   │  ┌─────────┐┌─────────┐┌─────────┐ │   Text 7/12 +
│                                  │  │Ressour- ││Interes- ││Entwick- │ │   3 Mini-Kacheln
│ Ziel: Teilhabe …                 │  │cen      ││sen      ││lungspot.│ │
├──────────────────────────────────────────────────────────────────────┤
│ MEINE HALTUNG                                                           │ 3 Haltung (page)
│ ┌───────────────────────────────┐  ┌───────────────────────────────┐   │   2 Karten
│ │ Haltung nach Paul Moor        │  │ Beziehung nach Carl Rogers    │   │
│ │ Achtung · Geduld ·            │  │ Empathie · Kongruenz ·        │   │
│ │ Feinfühligkeit · Vertrauen    │  │ Wertschätzung                 │   │
│ └───────────────────────────────┘  └───────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────┤
│ DER HEILPÄDAGOGISCHE PROZESS                                            │ 4 Timeline (base)
│  ●─ 1 Anamnese                                                          │   processTimeline
│  ●─ 2 Beobachtung & Diagnostik                                          │   (7 Schritte,
│  ●─ 3 Förderplan       …        ●─ 7 Entwicklungsgespräche              │   vertikal)
├──────────────────────────────────────────────────────────────────────┤
│ CTA (accent)                                                            │ 5
└──────────────────────────────────────────────────────────────────────┘
```

## 1 · Intro
> Block: `pageIntro` (no hero, so the H1 comes from the first section).
- **Eyebrow:** Heilpädagogik
- **H1:** Was ist eigentlich Heilpädagogik?
- **Lead:** Heilpädagogik unterstützt, fördert und begleitet Menschen mit Beeinträchtigungen oder Entwicklungsbesonderheiten in ihren individuellen Entwicklungsprozessen.

## 2 · Definition & Ziel
> Block: `aboutSplit` (text + quote, use the 3 tiles instead of an image) or `usp-premium` (`about`/`default`: heading, description, `benefits`).
- **H2:** Eine Brücke zwischen Pädagogik, Psychologie und Medizin
- **Text:** Heilpädagogik ist eine wissenschaftliche Disziplin der Erziehungswissenschaften und bildet eine Schnittstelle zwischen Pädagogik, Psychologie und Medizin. Ziel ist es, Teilhabe in der Gesellschaft zu ermöglichen und Kinder in ihrer Gesamtpersönlichkeit zu stärken.
- **Heilpädagogik stärkt** (3 tiles, icons `sparkle`, `heart`, `trend-up`):
  - **Ressourcen:** Was Ihr Kind schon kann, ist die Grundlage.
  - **Interessen:** Was Ihr Kind begeistert, öffnet Türen.
  - **Entwicklungspotenziale:** Der nächste Schritt, im eigenen Tempo.
  *(The short lines after the colons are **[ENTWURF]**. Use only the keywords if Elisabeth prefers.)*

## 3 · Meine Haltung
> Block: `featuresGrid` with 2 items, or a simple 2-card layout.
- **H2:** Worauf meine Arbeit beruht
- **Card 1 – Heilpädagogische Haltung nach Paul Moor:** Achtung, Geduld, Feinfühligkeit und Vertrauen
- **Card 2 – Beziehungsgestaltung nach Carl Rogers:** Empathie, Kongruenz und Wertschätzung

## 4 · Der heilpädagogische Prozess
> Block: `processTimeline` (title, description, `items` with icon/title/description).
- **H2:** Der heilpädagogische Prozess
- **Text:** Meine Förderung folgt einem klar strukturierten, professionellen Ablauf.
1. **Anamnese** (`clipboard-text`): Erfassung der Lebenswelt, Entwicklung und Bedürfnisse des Kindes.
2. **Beobachtung und Diagnostik** (`magnifying-glass`): Spielbasierte, entwicklungsorientierte und alltagsnahe Diagnostik zur Ermittlung von Stärken und Unterstützungsbedarfen.
3. **Förderplan** (`list-checks`): Individuelle Zielsetzung und Auswahl geeigneter Methoden.
4. **Beziehungsaufbau** (`handshake`): Aufbau einer tragfähigen, wertschätzenden Beziehung als Grundlage jeder Förderung.
5. **Förderung** (`puzzle-piece`): Spielerische, handlungsorientierte und ressourcenorientierte Entwicklungsbegleitung.
6. **Netzwerkarbeit & Sozialraumorientierung** (`users-three`): Zusammenarbeit mit Eltern, Einrichtungen und Fachstellen sowie Nutzung der Ressourcen im Lebensumfeld des Kindes.
7. **Entwicklungs- und Beratungsgespräche** (`chats-circle`): Regelmäßiger Austausch mit Eltern und Bezugspersonen für Transparenz, Reflexion und gemeinsame Weiterentwicklung.

## 5 · CTA
- **H2:** Heilpädagogische Förderung für Ihr Kind?
- **Text:** Im Erstgespräch klären wir, welche Unterstützung sinnvoll ist.
- **Buttons:** Erstgespräch vereinbaren → `/kontakt/` · Zum Angebot → `/angebot/#heilpaedagogische-foerderung`
