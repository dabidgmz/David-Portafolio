import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">David</span>
          <span className="logo-subtitle">Full-Stack Developer</span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">{t('header.nav.about')}</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">{t('header.nav.projects')}</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">{t('header.nav.skills')}</button>
          <button onClick={() => scrollToSection('education')} className="nav-link">{t('header.nav.education')}</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">{t('header.nav.contact')}</button>
          <button onClick={toggleLanguage} className="nav-link lang-toggle" aria-label="Toggle language">
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
