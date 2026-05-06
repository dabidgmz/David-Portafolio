import React from 'react'
import { useTranslation } from 'react-i18next'
import { UserIcon, SettingsIcon, MonitorIcon, ToolsIcon, GlobeIcon, DatabaseIcon, GraduationIcon, CheckIcon } from '../Icons'
import Reveal from './Reveal'
import '../styles/Education.css'

const Education = () => {
  const { t } = useTranslation()
  const specializations = t('education.specializations', { returnObjects: true })

  return (
    <section id="education" className="education">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('education.tag')}</span>
          <h2 className="section-title">{t('education.title')}</h2>
          <p className="section-description">{t('education.description')}</p>
        </Reveal>

        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <GraduationIcon size={36} />
            </div>

            <div className="education-info">
              <h3 className="education-degree">{t('education.degree')}</h3>
              <p className="education-institution">{t('education.institution')}</p>
              <span className="education-status">{t('education.status')}</span>
            </div>

            <div className="education-details">
              <h4>{t('education.specializationTitle')}</h4>
              <ul className="education-list">
                {specializations.map((item, i) => (
                  <li key={i}>
                    <CheckIcon size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="education-achievements">
              <div className="achievement-item">
                <div className="achievement-icon"><UserIcon size={20} /></div>
                <div className="achievement-text">
                  <strong>{t('education.achievements.leader.title')}</strong>
                  <p>{t('education.achievements.leader.desc')}</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon"><SettingsIcon size={20} /></div>
                <div className="achievement-text">
                  <strong>{t('education.achievements.scrum.title')}</strong>
                  <p>{t('education.achievements.scrum.desc')}</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-icon"><MonitorIcon size={20} /></div>
                <div className="achievement-text">
                  <strong>{t('education.achievements.projects.title')}</strong>
                  <p>{t('education.achievements.projects.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3 className="certifications-title">{t('education.certTitle')}</h3>
            <div className="certifications-grid">
              <div className="cert-badge">
                <ToolsIcon size={22} className="cert-icon" />
                <span>{t('education.certs.scrum')}</span>
              </div>
              <div className="cert-badge">
                <GlobeIcon size={22} className="cert-icon" />
                <span>{t('education.certs.cybersecurity')}</span>
              </div>
              <div className="cert-badge">
                <GlobeIcon size={22} className="cert-icon" />
                <span>{t('education.certs.cloud')}</span>
              </div>
              <div className="cert-badge">
                <DatabaseIcon size={22} className="cert-icon" />
                <span>{t('education.certs.database')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
