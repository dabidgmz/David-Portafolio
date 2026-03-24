import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../Icons'
import '../styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setIsScrolled(scrollTop > 50)
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  const navLinks = [
    { id: 'about',      label: t('header.nav.about') },
    { id: 'experience', label: t('header.nav.experience') },
    { id: 'projects',   label: t('header.nav.projects') },
    { id: 'skills',     label: t('header.nav.skills') },
    { id: 'education',  label: t('header.nav.education') },
    { id: 'contact',    label: t('header.nav.contact') },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Scroll progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="header-container">
        <button className="logo" onClick={() => scrollToSection('hero')} aria-label="Go to top">
          <span className="logo-text">David</span>
          <span className="logo-subtitle">Full-Stack Developer</span>
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} role="navigation">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}

          <div className="header-controls">
            <button
              onClick={toggleTheme}
              className="icon-btn theme-toggle"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <MoonIcon size={17} /> : <SunIcon size={18} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="nav-link lang-toggle"
              aria-label="Toggle language"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>
    </header>
  )
}

export default Header
