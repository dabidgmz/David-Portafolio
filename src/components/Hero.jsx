import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  GitHubIcon, LinkedInIcon, ServerIcon, MobileIcon,
  CloudIcon, BrainIcon, UserIcon, ArrowDownIcon
} from '../Icons'
import '../styles/Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {t('hero.badge')}
          </div>

          <h1 className="hero-title">
            {t('hero.title')} <span className="highlight">David</span>
          </h1>

          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <p className="hero-description">{t('hero.description')}</p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              {t('hero.viewProjects')}
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
              {t('hero.contactMe')}
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/dabidgmz" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GitHubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/gomezherreradavid" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg" />
            <div className="hero-photo-container">
              <img
                src="/image.png"
                alt="David Herrera — Full-Stack Developer"
                className="hero-photo"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hero-photo-placeholder" style={{ display: 'none' }}>
                <UserIcon size={56} />
              </div>
            </div>

            <div className="floating-card card-1">
              <ServerIcon size={20} />
              <span>{t('hero.cards.backend')}</span>
            </div>
            <div className="floating-card card-2">
              <CloudIcon size={20} />
              <span>{t('hero.cards.servers')}</span>
            </div>
            <div className="floating-card card-3">
              <MobileIcon size={20} />
              <span>{t('hero.cards.mobile')}</span>
            </div>
            <div className="floating-card card-4">
              <BrainIcon size={20} />
              <span>{t('hero.cards.ai')}</span>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <span className="scroll-text">{t('hero.scroll')}</span>
        <ArrowDownIcon size={18} />
      </button>
    </section>
  )
}

export default Hero
