import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import '../styles/Experience.css'

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const AcademicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const isWork = item.type === 'work'

  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? 'timeline-item--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={`timeline-dot ${isWork ? 'timeline-dot--work' : 'timeline-dot--academic'}`} />
      <div className="timeline-card">
        <div className="timeline-card-header">
          <span className={`timeline-badge ${isWork ? 'timeline-badge--work' : 'timeline-badge--academic'}`}>
            {isWork ? <BriefcaseIcon /> : <AcademicIcon />}
            {isWork ? item.typeLabel : item.typeLabel}
          </span>
          <span className="timeline-period">
            <CalendarIcon />
            {item.period}
          </span>
        </div>

        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-company">{item.company}</p>

        <ul className="timeline-bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>
              <span className="timeline-check"><CheckIcon /></span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {item.tags && (
          <div className="timeline-tags">
            {item.tags.map((tag, i) => (
              <span key={i} className="timeline-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const Experience = () => {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experience" className="experience">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('experience.tag')}</span>
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-description">{t('experience.description')}</p>
        </Reveal>

        <div className="experience-layout">
          <div className="experience-timeline">
            {items.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
