# Designgrundlage

Diese Dateien und die verknüpften Figma-Dateien sind die **einzige Designquelle** für dieses Projekt. UI, Layout, Typografie, Farbe und Abstände folgen ihnen — nicht dem Geschmack des jeweiligen Chats.

## Was wohin gehört

| Datei | Inhalt |
| --- | --- |
| [tokens.md](tokens.md) | Farben, Schriften, Abstände, Komponenten-Maße |
| [figma.md](figma.md) | Figma-Datei-URLs, Frames, was jeweils gilt |
| [pages.md](pages.md) | Seitenaufbau und Sektionen der Website |
| [preview.md](preview.md) | Lokale Komponentenvorschau unter `/design` |

Neue Kontexte (Tonalität, Zielgruppe, Do/Don’t) als weitere Markdown-Dateien in `docs/design/` ablegen und hier verlinken.

## Vorrang

1. **Kodiertes System** — `src/components/` und [`/design`](preview.md)
2. **Diese Markdown-Dateien** — Tokens, Regeln, Texte
3. **Figma** — nur für Komponenten, die im Code noch fehlen

Weicht Figma von den Markdown-Tokens ab, gilt Figma; Tokens danach anpassen.
