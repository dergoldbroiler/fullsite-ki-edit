import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'

export const PreviewEditContext = createContext(false)

export function PreviewEditProvider({
  editing,
  children,
}: {
  editing: boolean
  children: ReactNode
}) {
  return (
    <PreviewEditContext.Provider value={editing}>
      {children}
    </PreviewEditContext.Provider>
  )
}

export function usePreviewEdit() {
  return useContext(PreviewEditContext)
}
