import { useState } from 'react'
import './FaqList.css'

export type FaqItem = {
  q: string
  a: string
}

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
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
            {isOpen ? <p id={`faq-panel-${index}`}>{item.a}</p> : null}
          </div>
        )
      })}
    </div>
  )
}
