import type { ReactNode } from 'react'
import { useState } from 'react'
import { PreviewEditProvider } from './PreviewEditContext'
import { saveSiteField } from './save'
import { SiteProvider, useSite } from './siteContext'
import './PreviewBar.css'

const TOKEN_FIELDS = [
  ['--surface-primary-base', 'Primary'],
  ['--surface-primary-bold', 'Primary Hover'],
  ['--surface-primary-mid', 'Mid'],
  ['--surface-primary-soft', 'Hintergrund'],
  ['--surface-secondary-base', 'Gelb'],
  ['--on-surface-text-muted', 'Text muted'],
] as const

export function PreviewShell({ children }: { children: ReactNode }) {
  if (!import.meta.env.DEV) {
    return <SiteProvider>{children}</SiteProvider>
  }

  return (
    <SiteProvider>
      <PreviewBarInner>{children}</PreviewBarInner>
    </SiteProvider>
  )
}

function PreviewBarInner({ children }: { children: ReactNode }) {
  const { data, stand, stands, chooseStand, standNote } = useSite()
  const [editing, setEditing] = useState(false)
  const [status, setStatus] = useState('')
  const isWorking = stand === 'working'

  return (
    <PreviewEditProvider editing={editing && isWorking}>
      {children}
      <div className="preview-bar">
        <label className="preview-bar-stand">
          Stand
          <select
            value={stand}
            onChange={(event) => {
              setEditing(false)
              void chooseStand(event.target.value)
            }}
          >
            <option value="working">Aktuell (Arbeitskopie)</option>
            {stands.map((item) => (
              <option key={item.sha} value={item.sha}>
                {item.sha} · {item.message}
              </option>
            ))}
          </select>
        </label>
        <label className="preview-bar-toggle">
          <input
            type="checkbox"
            checked={editing && isWorking}
            disabled={!isWorking}
            onChange={(event) => setEditing(event.target.checked)}
          />
          Textanpassungen
        </label>
        {editing && isWorking ? (
          <div className="preview-bar-tokens">
            {TOKEN_FIELDS.map(([name, label]) => (
              <label key={name}>
                {label}
                <input
                  type="color"
                  value={toColorInput(
                    (data.tokens as Record<string, string>)[name],
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
        {standNote || status ? (
          <span className="preview-bar-status">{standNote || status}</span>
        ) : null}
      </div>
    </PreviewEditProvider>
  )
}

function toColorInput(value: string | undefined) {
  return value && /^#[0-9a-fA-F]{6}$/.test(value) ? value : '#000000'
}
