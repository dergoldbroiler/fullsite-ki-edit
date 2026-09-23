import { Button } from './components/Button'
import { FaqList } from './components/FaqList'
import { Editable } from './preview/Editable'
import site from './site.json'
import './App.css'

function App() {
  const { copy, faqs } = site

  return (
    <div className="wrap">
      <header className="site-header">
        <Editable path="copy.logo" text={copy.logo} as="div" className="logo" />
        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#headline">{copy.navApproach}</a>
          <a href="#bild-text">{copy.navContent}</a>
          <a href="#faq">{copy.navFaq}</a>
          <a href="/design">{copy.navDesign}</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div>
          <Editable
            path="copy.eyebrow"
            text={copy.eyebrow}
            as="p"
            className="eyebrow"
          />
          <Editable
            path="copy.heroTitle"
            text={copy.heroTitle}
            as="h1"
            id="hero-title"
          />
          <Editable
            path="copy.heroLead"
            text={copy.heroLead}
            as="p"
            multiline
          />
          <div className="hero-actions">
            <Button href="#faq">
              <Editable path="copy.ctaFaq" text={copy.ctaFaq} as="span" />
            </Button>
            <Button variant="secondary" href="#bild-text">
              <Editable path="copy.ctaContent" text={copy.ctaContent} as="span" />
            </Button>
          </div>
        </div>
        <aside className="hero-art" aria-hidden="true">
          <Editable path="copy.heroArt" text={copy.heroArt} as="span" />
        </aside>
      </section>

      <section className="headline" id="headline">
        <Editable path="copy.headlineTitle" text={copy.headlineTitle} as="h2" />
        <Editable
          path="copy.headlineBody"
          text={copy.headlineBody}
          as="p"
          multiline
        />
      </section>

      <section className="image-text" id="bild-text">
        <img src="/studio.svg" alt="Abstrakte Illustration eines Arbeitsplatzes mit Monitor und Skizzen" />
        <div className="image-text-copy">
          <Editable path="copy.imageTitle" text={copy.imageTitle} as="h3" />
          <Editable
            path="copy.imageBody"
            text={copy.imageBody}
            as="p"
            multiline
          />
        </div>
      </section>

      <section className="faq" id="faq">
        <Editable path="copy.faqTitle" text={copy.faqTitle} as="h2" />
        <FaqList items={faqs} />
      </section>

      <footer className="site-footer">
        <Editable path="copy.footerBrand" text={copy.footerBrand} as="span" />
        <a href="/design">{copy.footerDesign}</a>
      </footer>
    </div>
  )
}

export default App
