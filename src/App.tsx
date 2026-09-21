import { Button } from './components/Button'
import { FaqList } from './components/FaqList'
import './App.css'

const faqs = [
  {
    q: 'Kann ich die Seite lokal im Browser testen?',
    a: 'Ja. Mit npm run dev läuft die Seite auf http://localhost:5173 und lässt sich im App-in-Browser öffnen.',
  },
  {
    q: 'Wie schaue ich einen älteren Stand an?',
    a: 'Mit npm run preview:commit -- <commit> startet eine zweite Vorschau auf Port 5174. So bleibt der aktuelle Stand parallel sichtbar.',
  },
  {
    q: 'Wie kommen Änderungen ins Repo?',
    a: 'Bestätigte Änderungen gehen als Pull Request auf einen Feature-Branch, nicht direkt auf main.',
  },
]

function App() {
  return (
    <div className="wrap">
      <header className="site-header">
        <div className="logo">Full Site Edit</div>
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#headline">Ansatz</a>
          <a href="#bild-text">Inhalt</a>
          <a href="#faq">FAQ</a>
          <a href="/design">Designsystem</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Einfache React-Landingpage</p>
          <h1 id="hero-title">
            Neuer Text
            <br />
            Neue Headline
            <br />
            Das passt
          </h1>
          <p>
            Hero, Headline, Bild-Text und FAQ — klein gehalten, lokal testbar
            und so versioniert, dass ältere Commits im Browser vergleichbar
            bleiben.
          </p>
          <div className="hero-actions">
            <Button href="#faq">FAQ öffnen</Button>
            <Button variant="secondary" href="#bild-text">
              Zum Inhalt
            </Button>
          </div>
        </div>
        <aside className="hero-art" aria-hidden="true">
          <span>:buhl</span>
        </aside>
      </section>

      <section className="headline" id="headline">
        <h2>Mehr Bausteine</h2>
        <p>
          Die Seite bleibt bewusst schlank: ein Einstieg, eine Aussage, ein
          Inhaltsblock und Antworten. Das reicht, um Layout, Text und Git-Stände
          im Browser zu beurteilen.
        </p>
      </section>

      <section className="image-text" id="bild-text">
        <img src="/studio.svg" alt="Abstrakte Illustration eines Arbeitsplatzes mit Monitor und Skizzen" />
        <div className="image-text-copy">
          <h3>Bild und Text nebeneinander</h3>
          <p>
            Dieser Block zeigt, wie Bild und Copy zusammenwirken. Spätere
            Varianten — andere Texte, andere Bilder — können als eigener Commit
            im App-in-Browser gegen den aktuellen Stand gehalten werden.
          </p>
        </div>
      </section>

      <section className="faq" id="faq">
        <h2>Häufige Fragen</h2>
        <FaqList items={faqs} />
      </section>

      <footer className="site-footer">
        <span>Full Site Edit</span>
        <a href="/design">Designsystem</a>
      </footer>
    </div>
  )
}

export default App
