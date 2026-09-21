import { Button } from './components/Button'
import { FaqList } from './components/FaqList'
import './DesignSystem.css'

const tokens = [
  ['surface/primary/base', 'var(--surface-primary-base)'],
  ['surface/primary/bold', 'var(--surface-primary-bold)'],
  ['surface/primary/mid', 'var(--surface-primary-mid)'],
  ['surface/primary/soft', 'var(--surface-primary-soft)'],
  ['surface/inversed', 'var(--surface-primary-inversed)'],
  ['surface/secondary', 'var(--surface-secondary-base)'],
] as const

const sampleFaqs = [
  {
    q: 'Wofür ist diese Seite?',
    a: 'Zum schnellen Prüfen von Tokens und Komponenten, ohne die ganze Landingpage zu laden.',
  },
  {
    q: 'Wann Figma?',
    a: 'Nur wenn eine Komponente hier noch fehlt. Sonst Code und diese Vorschau zuerst.',
  },
]

export function DesignSystem() {
  return (
    <div className="ds wrap">
      <header className="ds-header">
        <p className="ds-kicker">Buhl · kodiert</p>
        <h1>Designsystem</h1>
        <p>
          Gleiche Tokens und Komponenten wie die Landingpage. Lokal:{' '}
          <code>/design</code>
        </p>
        <Button href="/">Zur Landingpage</Button>
      </header>

      <section className="ds-section" aria-labelledby="ds-tokens">
        <h2 id="ds-tokens">Farbe</h2>
        <div className="ds-swatches">
          {tokens.map(([name, fill]) => (
            <div className="ds-swatch" key={name}>
              <span className="ds-chip" style={{ background: fill }} />
              <code>{name}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-type">
        <h2 id="ds-type">Typo</h2>
        <p className="ds-heading-xl">Geologica Bold · Überschrift</p>
        <p className="ds-body">Fließtext 16/24, muted für Leads.</p>
        <p className="ds-label">Label-M · Buttons und Navigation</p>
      </section>

      <section className="ds-section" aria-labelledby="ds-buttons">
        <h2 id="ds-buttons">Buttons</h2>
        <div className="ds-row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
        </div>
        <div className="ds-inverse">
          <Button>Primary auf Blau</Button>
          <span className="ds-yellow">
            <Button variant="secondary">Secondary auf Blau</Button>
          </span>
        </div>
      </section>

      <section className="ds-section" aria-labelledby="ds-faq">
        <h2 id="ds-faq">FAQ</h2>
        <FaqList items={sampleFaqs} />
      </section>
    </div>
  )
}
