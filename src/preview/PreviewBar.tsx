import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import site from '../site.json'
import { PreviewEditProvider } from './PreviewEditContext'
import { saveSiteField } from './save'
import './PreviewBar.css'

const TOKEN_FIELDS = [
  ['--surface-primary-base', 'Primary'],
  ['--surface-primary-bold', 'Primary Hover'],
  ['--surface-primary-mid', 'Mid'],
  ['--surface-primary-soft', 'Hintergrund'],
  ['--surface-secondary-base', 'Gelb'],
  ['--on-surface-text-muted', 'Text muted'],
] as const

function applyTokens(tokens: Record<string, string>) {
  const root = document.documentElement
  for (const [name, value] of Object.entries(tokens)) {
    root.style.setProperty(name, value)
  }
}

export function PreviewShell({ children }: { children: ReactNode }) {
  const [editing, setEditing] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    applyTokens(site.tokens)
  }, [])

  if (!import.meta.env.DEV) {
    return <>{children}</>
  }

  return (
    <PreviewEditProvider editing={editing}>
      {children}
      <div className="preview-bar">
        <label className="preview-bar-toggle">
          <input
            type="checkbox"
            checked={editing}
            onChange={(event) => setEditing(event.target.checked)}
          />
          Textanpassungen
        </label>
        {editing ? (
          <div className="preview-bar-tokens">
            {TOKEN_FIELDS.map(([name, label]) => (
              <label key={name}>
                {label}
                <input
                  type="color"
                  value={toColorInput(
                    (site.tokens as Record<string, string>)[name],
                  )}
                  onChange={(event) => {
                    const value = event.target.value
                    document.documentElement.style.setProperty(name, value)
                    void saveSiteField(`tokens.${name}`, value).then(() => {
                      setStatus('Gespeichert in src/site.json')
                    })
                  }}
                />
              </label>
            ))}
          </div>
        ) : null}
        {status ? <span className="preview-bar-status">{status}</span> : null}
      </div>
    </PreviewEditProvider>
  )
}

function toColorInput(value: string) {
  return /^#[0-9a-fA-F]{6}$/.test(value) ? value : '#000000'
}
