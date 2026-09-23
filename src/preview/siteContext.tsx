import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import liveSite from '../site.json'

export type SiteData = typeof liveSite

type Stand = {
  sha: string
  message: string
}

type SiteContextValue = {
  data: SiteData
  stand: string
  stands: Stand[]
  chooseStand: (id: string) => Promise<void>
  standNote: string
}

const SiteContext = createContext<SiteContextValue | null>(null)

function applyTokens(tokens: Record<string, string>) {
  const root = document.documentElement
  for (const [name, value] of Object.entries(tokens)) {
    root.style.setProperty(name, value)
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(liveSite)
  const [stand, setStand] = useState('working')
  const [stands, setStands] = useState<Stand[]>([])
  const [standNote, setStandNote] = useState('')

  useEffect(() => {
    applyTokens(liveSite.tokens as Record<string, string>)
  }, [])

  useEffect(() => {
    if (stand === 'working') {
      setData(liveSite)
      applyTokens(liveSite.tokens as Record<string, string>)
    }
  }, [liveSite, stand])

  useEffect(() => {
    if (!import.meta.env.DEV) return
    void fetch('/__preview-stands')
      .then((res) => res.json())
      .then((list: Stand[]) => setStands(list))
      .catch(() => setStands([]))
  }, [])

  async function chooseStand(id: string) {
    setStand(id)
    if (id === 'working') {
      setData(liveSite)
      applyTokens(liveSite.tokens as Record<string, string>)
      setStandNote('')
      return
    }
    const res = await fetch(
      `/__preview-stand?ref=${encodeURIComponent(id)}`,
    )
    if (!res.ok) {
      setStandNote('Dieser Git-Stand hat noch kein src/site.json.')
      return
    }
    const next = (await res.json()) as SiteData
    setData(next)
    applyTokens(next.tokens as Record<string, string>)
    setStandNote(`Anzeige: ${id}`)
  }

  return (
    <SiteContext.Provider
      value={{ data, stand, stands, chooseStand, standNote }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSite() {
  const value = useContext(SiteContext)
  if (!value) {
    return {
      data: liveSite,
      stand: 'working',
      stands: [],
      chooseStand: async () => undefined,
      standNote: '',
    }
  }
  return value
}
