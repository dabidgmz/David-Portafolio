import React from 'react'
import { useTranslation } from 'react-i18next'
import { CiUser, CiDesktop, CiSettings, CiDatabase } from 'react-icons/ci'
import '../styles/About.css'

const About = () => {
  const { t } = useTranslation()

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
                <div className="highlight-icon">
                  <CiUser />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.leadership.title')}</h4>
                  <p>{t('about.highlights.leadership.desc')}</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiDesktop />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.fullstack.title')}</h4>
                  <p>{t('about.highlights.fullstack.desc')}</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiSettings />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.embedded.title')}</h4>
                  <p>{t('about.highlights.embedded.desc')}</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiDatabase />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.highlights.database.title')}</h4>
                  <p>{t('about.highlights.database.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">{t('about.stats.projects')}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">{t('about.stats.technologies')}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">{t('about.stats.experience')}</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">{t('about.stats.microservices')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
