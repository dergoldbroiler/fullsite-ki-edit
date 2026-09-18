# Full Site Edit Website

Einfache React-Landingpage (Vite) mit Hero, Headline, Bild-Text, FAQ-Accordion und Footer.

## Lokal testen

```bash
npm install
npm run dev
```

Die Seite läuft unter [http://localhost:5173](http://localhost:5173). Im Cursor App-in-Browser dieselbe Adresse öffnen.

## Älteren Commit im Browser ansehen

Aktuellen Stand weiter auf Port 5173 lassen, zusätzlich:

```bash
npm run preview:commit -- <commit-hash>
```

Der gewählte Stand startet auf [http://localhost:5174](http://localhost:5174) (Git-Worktree unter `.preview/`).

## Änderungen ins Repo

Bestätigte Änderungen kommen als Pull Request auf einen Feature-Branch, nicht direkt auf `main`.
