import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DesignSystem } from './DesignSystem.tsx'

const isDesign = window.location.pathname.replace(/\/$/, '') === '/design'

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isDesign ? <DesignSystem /> : <App />}</StrictMode>,
)
