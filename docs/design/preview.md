# Vorschau (`/design` und Live-Edit)

Kodierte Buhl-Bausteine unter [http://localhost:5173/design](http://localhost:5173/design).

Texte und Markenfarben der Landingpage: unten rechts **Textanpassungen** einschalten, klicken, tippen, Fokus verlassen. Vite schreibt nach `src/site.json` (HMR). Dafür den Dev-Server neu starten, falls der Speichern-Endpunkt fehlt.

Produktion blendet die Leiste aus. Commit von `site.json` wie jede andere Änderung.


## Warum

Figma-MCP und die ganze Landingpage machen lokale KI-Runden langsam. Tokens und Komponenten hier prüfen — Figma nur, wenn etwas **noch nicht** im Code ist.

## Inhalt

Farbe, Typo, Buttons (Primary/Secondary/Disabled, Fläche auf Blau), FAQ. Neue Bausteine als React-Komponente in `src/components/` und als Abschnitt in `src/DesignSystem.tsx`.
