import { useState } from 'react'
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
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="wrap">
      <header className="site-header">
        <div className="logo">Full Site Edit</div>
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#headline">Ansatz</a>
          <a href="#bild-text">Inhalt</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Einfache React-Landingpage</p>
          <h1 id="hero-title">Eine klare Seite. Jeder Stand zum Anschauen.</h1>
          <p>
            Hero, Headline, Bild-Text und FAQ — klein gehalten, lokal testbar
            und so versioniert, dass ältere Commits im Browser vergleichbar
            bleiben.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#faq">
              FAQ öffnen
            </a>
            <a className="btn btn-ghost" href="#bild-text">
              Zum Inhalt
            </a>
          </div>
        </div>
        <aside className="hero-art" aria-hidden="true">
          <span>ssss</span>
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
        {faqs.map((item, index) => {
          const isOpen = open === index
          return (
            <div className="faq-item" key={item.q}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true">{isOpen ? '–' : '+'}</span>
              </button>
              {isOpen ? (
                <p id={`faq-panel-${index}`}>{item.a}</p>
              ) : null}
            </div>
          )
        })}
      </section>

      <footer className="site-footer">
        <span>Full Site Edit</span>
        <span>Lokal testen · Stände vergleichen · per PR mergen</span>
      </footer>
    </div>
  )
}

export default App
