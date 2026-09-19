---
name: figma-design-foundation
description: Implementiert UI nach Figma und docs/design. Nutzen bei Layout, Styling, Komponenten, Design-Tokens oder wenn Figma-Dateien bzw. Design-Kontext ergänzt werden.
---

# Figma und Markdown als Quelle

## Lesen

1. `docs/design/README.md`, `tokens.md`, `pages.md`, `figma.md`
2. Weitere `docs/design/*.md`
3. Figma: Datei `BrC2fDJrIaaWD2nBP9pmdR` (Buhl Marketing Component Library). `get_metadata` / `get_design_context` auf der passenden Seiten-Node-ID aus `docs/design/figma.md`. Nur diese Library, nicht steuer BIB / Finanzen / MV.

## Umsetzen

- Spacing, Typo, Farbe, Radius, Breakpoints aus Figma bzw. Tokens
- Keine Parallel-Palette im CSS
- Nach abweichendem Figma: `docs/design/tokens.md` und bei neuen Screens `pages.md` mitziehen

## Neue Figma-Datei

Zeile in `docs/design/figma.md` (Name, URL, Frames, Geltungsbereich). Ohne URL nicht raten.
