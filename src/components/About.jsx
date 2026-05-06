import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  UserIcon, MonitorIcon, BrainIcon, DatabaseIcon,
  RocketIcon, ZapIcon, CalendarIcon, NetworkIcon
} from '../Icons'
import Reveal from './Reveal'
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
    { number: 8,  suffix: '+', labelKey: 'about.stats.projects',     icon: <RocketIcon size={22} />,   color: '#2563eb' },
    { number: 30, suffix: '+', labelKey: 'about.stats.technologies',  icon: <ZapIcon size={22} />,      color: '#0ea5e9' },
    { number: 2,  suffix: '+', labelKey: 'about.stats.experience',    icon: <CalendarIcon size={22} />, color: '#6366f1' },
    { number: 5,  suffix: '+', labelKey: 'about.stats.microservices', icon: <NetworkIcon size={22} />,  color: '#8b5cf6' },
  ]

  const highlights = [
    { icon: <UserIcon size={24} />,    titleKey: 'about.highlights.leadership.title', descKey: 'about.highlights.leadership.desc', accent: '#2563eb' },
    { icon: <MonitorIcon size={24} />, titleKey: 'about.highlights.fullstack.title',  descKey: 'about.highlights.fullstack.desc',  accent: '#0ea5e9' },
    { icon: <BrainIcon size={24} />,   titleKey: 'about.highlights.ai.title',         descKey: 'about.highlights.ai.desc',         accent: '#6366f1' },
    { icon: <DatabaseIcon size={24} />,titleKey: 'about.highlights.database.title',   descKey: 'about.highlights.database.desc',   accent: '#8b5cf6' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('about.tag')}</span>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-description">{t('about.description')}</p>
        </Reveal>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">{t('about.subtitle')}</h3>
            <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
            <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-item" style={{ '--accent': h.accent }}>
                  <div className="highlight-icon">{h.icon}</div>
                  <div className="highlight-content">
                    <h4>{t(h.titleKey)}</h4>
                    <p>{t(h.descKey)}</p>
                  </div>
                </div>
              ))}
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
                <div className="stat-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
