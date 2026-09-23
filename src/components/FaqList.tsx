import { useState } from 'react'
import { Editable } from '../preview/Editable'
import { usePreviewEdit } from '../preview/PreviewEditContext'
import './FaqList.css'

export type FaqItem = {
  q: string
  a: string
}

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)
  const editing = usePreviewEdit()

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open === index || editing
        return (
          <div className="faq-item" key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => {
                if (!editing) setOpen(isOpen ? null : index)
              }}
            >
              <Editable path={`faqs.${index}.q`} text={item.q} as="span" />
              <span aria-hidden="true">{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen ? (
              <Editable
                path={`faqs.${index}.a`}
                text={item.a}
                as="p"
                id={`faq-panel-${index}`}
                multiline
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
