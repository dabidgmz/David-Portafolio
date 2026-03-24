import React from 'react'
import { useTranslation } from 'react-i18next'
import { CiUser, CiSettings, CiDesktop, CiMobile1, CiLock, CiCloud, CiDatabase } from 'react-icons/ci'
import '../styles/Education.css'

const Education = () => {
  const { t } = useTranslation()
  const specializations = t('education.specializations', { returnObjects: true })

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('education.tag')}</span>
          <h2 className="section-title">{t('education.title')}</h2>
          <p className="section-description">{t('education.description')}</p>
        </div>

        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <rect width="64" height="64" rx="16" fill="#2563eb" fillOpacity="0.1"/>
                <path d="M32 20L44 26L32 32L20 26L32 20Z" fill="#2563eb"/>
                <path d="M20 30V38L32 44L44 38V30" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M46 28V36" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <div className="education-info">
              <h3 className="education-degree">{t('education.degree')}</h3>
              <p className="education-institution">{t('education.institution')}</p>
              <p className="education-period">{t('education.status')}</p>
            </div>

            <div className="education-details">
              <h4>{t('education.specializationTitle')}</h4>
              <ul className="education-list">
                {specializations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="education-achievements">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiUser />
                </div>
                <div className="achievement-text">
                  <strong>{t('education.achievements.leader.title')}</strong>
                  <p>{t('education.achievements.leader.desc')}</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiSettings />
                </div>
                <div className="achievement-text">
                  <strong>{t('education.achievements.scrum.title')}</strong>
                  <p>{t('education.achievements.scrum.desc')}</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiDesktop />
                </div>
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
                <CiMobile1 className="cert-icon" />
                <span className="cert-text">{t('education.certs.scrum')}</span>
              </div>
              <div className="cert-badge">
                <CiLock className="cert-icon" />
                <span className="cert-text">{t('education.certs.cybersecurity')}</span>
              </div>
              <div className="cert-badge">
                <CiCloud className="cert-icon" />
                <span className="cert-text">{t('education.certs.cloud')}</span>
              </div>
              <div className="cert-badge">
                <CiDatabase className="cert-icon" />
                <span className="cert-text">{t('education.certs.database')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
