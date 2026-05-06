import React, { Suspense, lazy, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider, useToast } from './components/Toast'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import LoadingScreen from './components/LoadingScreen'
import './styles/App.css'

// Below-the-fold sections — lazy-loaded so the initial bundle stays light.
const Experience       = lazy(() => import('./components/Experience'))
const Projects         = lazy(() => import('./components/Projects'))
const Process          = lazy(() => import('./components/Process'))
const Skills           = lazy(() => import('./components/Skills'))
const GitHubStats      = lazy(() => import('./components/GitHubStats'))
const Education        = lazy(() => import('./components/Education'))
const Contact          = lazy(() => import('./components/Contact'))
const Footer           = lazy(() => import('./components/Footer'))
const FloatingActions  = lazy(() => import('./components/FloatingActions'))
const TechMarquee      = lazy(() => import('./components/TechMarquee'))

// Konami-lite easter egg — ↑ ↑ within 600ms triggers a friendly toast.
const useKonami = () => {
  const { toast } = useToast()
  useEffect(() => {
    let last = 0
    const onKey = (e) => {
      if (e.key !== 'ArrowUp') { last = 0; return }
      const now = Date.now()
      if (last && now - last < 600) {
        last = 0
        toast('👋 You found the easter egg', { variant: 'info', duration: 3200 })
      } else {
        last = now
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toast])
}

const InnerApp = () => {
  const [loading, setLoading] = useState(true)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language || 'en'
  }, [i18n.language])

  useKonami()

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <a href="#main-content" className="skip-link">
        {t('a11y.skipToContent')}
      </a>
      <div className="App" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Suspense fallback={<div className="lazy-fallback" aria-hidden="true" />}>
            <TechMarquee />
            <About />
            <Experience />
            <Projects />
            <Process />
            <Skills />
            <GitHubStats />
            <Education />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
          <FloatingActions />
        </Suspense>
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <InnerApp />
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
