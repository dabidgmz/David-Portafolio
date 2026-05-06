import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  GitHubIcon, LinkedInIcon, ServerIcon, MobileIcon,
  CloudIcon, BrainIcon, UserIcon, ArrowDownIcon
} from '../Icons'
import '../styles/Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Spotlight cursor — track mouse via CSS variables (no React re-renders)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  // Magnetic hover — subtle pull toward cursor on .btn-magnetic elements
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    const buttons = sectionRef.current?.querySelectorAll('.btn-magnetic')
    if (!buttons?.length) return

    const STRENGTH = 0.25       // 0-1, how much it follows the cursor
    const handlers = []

    buttons.forEach((btn) => {
      const onMove = (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        btn.style.transform = `translate(${x * STRENGTH}px, ${y * STRENGTH}px)`
      }
      const onLeave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      handlers.push([btn, onMove, onLeave])
    })

    return () => {
      handlers.forEach(([btn, onMove, onLeave]) => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" ref={sectionRef} className={`hero hero--spotlight ${isVisible ? 'visible' : ''}`}>
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

          <figure className="hero-quote">
            <blockquote>
              <span className="hero-quote-mark" aria-hidden="true">“</span>
              {t('hero.quote')}
            </blockquote>
            <figcaption>— {t('hero.quoteAuthor')}</figcaption>
          </figure>

          <div className="hero-cta">
            <button className="btn btn-primary btn-magnetic" onClick={() => scrollTo('projects')}>
              {t('hero.viewProjects')}
            </button>
            <a
              href="/David_Herrera_CV.pdf"
              download
              className="btn btn-secondary btn-magnetic"
            >
              <span className="btn-icon" aria-hidden="true">↓</span>
              {t('header.downloadCv')}
            </a>
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
