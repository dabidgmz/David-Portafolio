import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider, useToast } from './components/Toast'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './styles/App.css'

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
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
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
