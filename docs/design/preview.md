# Vorschau (`/design` und Live-Edit)

Kodierte Buhl-Bausteine unter [http://localhost:5173/design](http://localhost:5173/design).

Texte und Markenfarben der Landingpage: unten rechts **Textanpassungen** einschalten, klicken, tippen, Fokus verlassen. Vite schreibt nach `src/site.json` (HMR).

**Stand:** Dropdown wechselt zwischen der Arbeitskopie und den letzten Git-Commits (Inhalt aus `src/site.json` jenes Commits). Textanpassungen nur im aktuellen Stand. Layout-Code bleibt der laufende Branch — für Pixel-Vergleich ganzer Builds weiter `npm run preview:commit`.

Produktion blendet die Leiste aus. Commit von `site.json` wie jede andere Änderung.


## Warum

Figma-MCP und die ganze Landingpage machen lokale KI-Runden langsam. Tokens und Komponenten hier prüfen — Figma nur, wenn etwas **noch nicht** im Code ist.

## Inhalt

Farbe, Typo, Buttons (Primary/Secondary/Disabled, Fläche auf Blau), FAQ. Neue Bausteine als React-Komponente in `src/components/` und als Abschnitt in `src/DesignSystem.tsx`.
