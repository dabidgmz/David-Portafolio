import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
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

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div className="App" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Header />
        <main>
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
    </ThemeProvider>
  )
}

export default App
