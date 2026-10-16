# Kontakt `/kontakt/`

## Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ KONTAKT                                                                 │ 1 contact split (page)
│ Erstgespräch vereinbaren (H1)                                           │
│ Lead …                                                                  │
│ ┌──────────────────────────────┐   ┌────────────────────────────────┐ │
│ │ ✉ info@…                     │   │ Name*                          │ │
│ │ ☎ [OFFEN]                    │   │ E-Mail*        Telefon         │ │
│ │ ⌂ Pappelweg 8A,              │   │ Alter des Kindes               │ │
│ │   93197 Laub-Zeitlarn        │   │ Worum geht es? (Select)        │ │
│ │ ◎ Instagram                  │   │ Nachricht*                     │ │
│ │                              │   │ ☐ Datenschutz …                │ │
│ │ Einzugsgebiet: LK Regensburg │   │ (Nachricht senden)             │ │
│ │ + südl. LK Schwandorf        │   └────────────────────────────────┘ │
│ └──────────────────────────────┘                                       │
└──────────────────────────────────────────────────────────────────────┘
```
> Block: `contact` / `split`. **No Google Maps embed** (`mapUrl` empty, map hidden). Show the service area as text, optionally later as a simple static SVG map.

## Content
- **Eyebrow:** Kontakt
- **H1:** Erstgespräch vereinbaren
- **Lead:** Sie machen sich Gedanken um die Entwicklung oder das Lernen Ihres Kindes? Schreiben Sie mir gern. Ich melde mich zeitnah bei Ihnen zurück. **[OFFEN: response time, e.g. „innerhalb von 2 Werktagen“]**
- **E-Mail:** info@heilpaedagogische-lerntherapie.de **[CHECK: the raw material says „heilpaedagoische“ (missing g). Very likely a typo.]**
- **Telefon:** **[OFFEN]**
- **Adresse:** Pappelweg 8A, 93197 Laub-Zeitlarn
- **Instagram:** @heilpaedagogische_lerntherapie → https://www.instagram.com/heilpaedagogische_lerntherapie/
- **Einzugsgebiet:** Landkreis Regensburg und südlicher Landkreis Schwandorf. Termine mobil bei Ihnen zu Hause oder im Therapieraum.

## Form
| Field | Type | Required | Label / placeholder |
|-------|------|----------|---------------------|
| name | text | yes | Ihr Name |
| email | email | yes | E-Mail-Adresse |
| phone | tel | no | Telefon (für Rückruf) |
| child_age | text | no | Alter des Kindes |
| topic | select | no | Worum geht es? → Heilpädagogische Förderung · Lerntherapie (LRS/Dyskalkulie) · Prävention · ADHS / „Fokus & Familie“ · Pädagogische Beratung · Kostenübernahme · Sonstiges |
| message | textarea | yes | Ihre Nachricht |
| privacy | checkbox | yes | Ich habe die [Datenschutzerklärung](/datenschutz/) gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden. |

- **Button:** Nachricht senden (hover: „Absenden“)
- **Success:** Vielen Dank für Ihre Nachricht! Ich melde mich so bald wie möglich bei Ihnen.
- **Error:** Leider ist etwas schiefgelaufen. Bitte schreiben Sie mir direkt an info@heilpaedagogische-lerntherapie.de.
- **Note under the form:** Bitte senden Sie mir über das Formular noch keine Diagnosen oder Befunde. Diese besprechen wir gern persönlich. *(Data protection: health data is a special category under Art. 9 GDPR.)*
- Honeypot field against spam (the theme setup in `send-form.php` should have one, check it).
