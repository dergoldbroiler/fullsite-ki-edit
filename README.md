# Full Site Edit Website

Schlanke React-Landingpage (Vite): Hero, Headline, Bild-Text, FAQ, Footer.

**Für Marketing und Abstimmung:** [docs/fuer-marketing.md](docs/fuer-marketing.md)  
Dort steht der Ablauf Entwurf → Testlink → Freigabe → Live in Alltagssprache.

**Designgrundlage:** [docs/design/](docs/design/README.md) — Tokens, Seitenaufbau und Figma-Links. Neue Kontexte als Markdown dort ablegen.

## Kurz: Test vs. Live

- Jeder **Feature-Branch** und jeder **Pull Request** bekommt bei Vercel einen **Testlink**.
- **Live** wird nur, was nach **`main`** gemergt wird.

## Lokal ansehen

```bash
npm install
npm run dev
```

[http://localhost:5173](http://localhost:5173)

Älteren gespeicherten Stand parallel:

```bash
npm run preview:commit -- <commit-hash>
```

Dann [http://localhost:5174](http://localhost:5174).
