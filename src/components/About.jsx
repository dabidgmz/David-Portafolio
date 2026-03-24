import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiUser, CiDesktop, CiSettings, CiDatabase } from 'react-icons/ci'
import '../styles/About.css'

const AnimatedCounter = ({ end, suffix = '+', duration = 1800 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime = null
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const About = () => {
  const { t } = useTranslation()

  const stats = [
    { number: 4, suffix: '+', labelKey: 'about.stats.projects', icon: '🚀', color: '#2563eb' },
    { number: 30, suffix: '+', labelKey: 'about.stats.technologies', icon: '⚡', color: '#0ea5e9' },
    { number: 2, suffix: '+', labelKey: 'about.stats.experience', icon: '📅', color: '#6366f1' },
    { number: 5, suffix: '+', labelKey: 'about.stats.microservices', icon: '🔧', color: '#8b5cf6' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-description">{t('about.description')}</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">{t('about.subtitle')}</h3>
            <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
            <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon"><CiUser /></div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.leadership.title')}</h4>
                  <p>{t('about.highlights.leadership.desc')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><CiDesktop /></div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.fullstack.title')}</h4>
                  <p>{t('about.highlights.fullstack.desc')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><CiSettings /></div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.embedded.title')}</h4>
                  <p>{t('about.highlights.embedded.desc')}</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon"><CiDatabase /></div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.database.title')}</h4>
                  <p>{t('about.highlights.database.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <div className="stat-card" key={i} style={{ '--stat-color': stat.color }}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{t(stat.labelKey)}</div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
