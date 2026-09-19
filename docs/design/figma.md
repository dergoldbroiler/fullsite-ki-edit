# Figma

Datei-Key: `BrC2fDJrIaaWD2nBP9pmdR`  
Library: **:Buhl - Marketing Component Library**

[Datei öffnen](https://www.figma.com/design/BrC2fDJrIaaWD2nBP9pmdR/-Buhl---Marketing-Component-Library)

Das ist die **Komponenten- und Token-Quelle** für UI in diesem Projekt. Andere Libraries (steuer BIB, Finanzen, MV) nicht verwenden, auch wenn die Suche sie mitliefert.

## Seiten

| Seite | Node-ID | Rolle |
| --- | --- | --- |
| Welcome | `0:1` | Überblick, Links in die Library |
| Icons | `811:172` | Icon-Set |
| Buttons | `811:173` | `button`, `button-icon`, Varianten |
| Checkbox | `2777:3761` | Checkbox |
| Radio | `3630:8595` | Radio |
| Toggle | `3630:8596` | Toggle |
| Input Fields | `906:528` | Inputs |
| Archiv | `1:3` | nicht umsetzen |

Direktlink zu Buttons:  
https://www.figma.com/design/BrC2fDJrIaaWD2nBP9pmdR/-Buhl---Marketing-Component-Library?node-id=811-173

## Komponenten (Auszug)

Buttons: `button`, `button-transparent`, `button-icon`, `button-icon-floating`, `button-icon-accent`, `button-no-background`, `button-app-store`, `container-buttons`.

`button`-Varianten: hierarchy `primary` / `secondary` / `tertiary`, states `default` / `hover` / `active` / `disabled` / `focused`, `inversed` true/false. Höhe Standard-Button 48px.

Weitere: `paragraph-link`, `item-navigation`, `radio`, `radio-label`, `Snackbar`, `icon/24px/…`.

## Tokens in Figma

Collections u. a. `primitives` und `color-tokens` (text/icon/border/surface, Stufen base, bold, deep, muted, soft). Bei UI-Arbeit Variablen am konkreten Frame lesen, Hex-Werte nicht raten.

## So ergänzen

Weitere Dateien (z. B. Seitenlayouts, Landingpage-Frames) als neue Zeile:

| Name | URL | Frames / Seiten | Gilt für |
| --- | --- | --- | --- |
| Buhl Marketing Component Library | siehe oben | Seiten-Tabelle | Komponenten, Tokens, Interaktionen |
