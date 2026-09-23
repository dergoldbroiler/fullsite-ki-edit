import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DesignSystem } from './DesignSystem.tsx'
import { PreviewShell } from './preview/PreviewBar.tsx'

const isDesign = window.location.pathname.replace(/\/$/, '') === '/design'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewShell>{isDesign ? <DesignSystem /> : <App />}</PreviewShell>
  </StrictMode>,
)
