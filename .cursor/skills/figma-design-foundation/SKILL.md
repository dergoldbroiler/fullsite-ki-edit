---
name: figma-design-foundation
description: UI nach lokalem Designsystem, sonst Figma. Nutzen bei Layout, Komponenten, Tokens oder /design-Vorschau.
---

# Lokal zuerst

1. `src/components/Button.tsx`, `FaqList.tsx`, Tokens in `src/index.css`
2. Vorschau ` /design ` (gleiche Vite-App, kein extra Tool)
3. `docs/design/tokens.md`

Figma (`BrC2fDJrIaaWD2nBP9pmdR`) nur für **neue** Nodes. Danach Komponente + `/design`-Abschnitt + `tokens.md` nachziehen.

Keine zweite Farbpalette. Kein Storybook, solange `/design` reicht.
