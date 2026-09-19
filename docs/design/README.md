# Designgrundlage

Diese Dateien und die verknüpften Figma-Dateien sind die **einzige Designquelle** für dieses Projekt. UI, Layout, Typografie, Farbe und Abstände folgen ihnen — nicht dem Geschmack des jeweiligen Chats.

## Was wohin gehört

| Datei | Inhalt |
| --- | --- |
| [tokens.md](tokens.md) | Farben, Schriften, Abstände, Komponenten-Maße |
| [figma.md](figma.md) | Figma-Datei-URLs, Frames, was jeweils gilt |
| [pages.md](pages.md) | Seitenaufbau und Sektionen der Website |

Neue Kontexte (Tonalität, Zielgruppe, Do/Don’t) als weitere Markdown-Dateien in `docs/design/` ablegen und hier verlinken.

## Vorrang

1. **Figma** — [Buhl Marketing Component Library](figma.md): Pixel, Layout, Zustände, Komponenten
2. **Diese Markdown-Dateien** — Tokens, Regeln, Texte, was Figma nicht festhält
3. **Bestehender Code** — nur wenn 1 und 2 nichts sagen

Weicht Figma von den Markdown-Tokens ab, gilt Figma; Tokens danach anpassen.
