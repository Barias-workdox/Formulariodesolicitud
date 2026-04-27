import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DesignSystemProvider } from '@webdoxclm/design-system/contexts/design-system-provider'
import { lightTheme, spacing } from '@webdoxclm/design-system/themes'
import { es } from '@webdoxclm/design-system/locales/design-system/es'
import '@webdoxclm/design-system/themes/global.css'
import { ErrorBoundary } from './components/ErrorBoundary'
import App from './App.tsx'
import './index.css'

i18next.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  defaultNS: 'designSystem',
  ns: ['designSystem'],
  resources: {
    es: { designSystem: es },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DesignSystemProvider locale="es" theme={{ ...lightTheme, spacing }}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </DesignSystemProvider>
    </BrowserRouter>
  </StrictMode>,
)
