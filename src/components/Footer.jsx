import React from 'react'
import { useTranslation } from 'react-i18next'
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../Icons'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">David</h3>
            <p className="footer-description">{t('footer.description')}</p>
            <div className="footer-social">
              <a href="https://github.com/dabidgmz" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <GitHubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gomezherreradavid" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <LinkedInIcon size={18} />
              </a>
              <a href="mailto:david.gmzherrera28@gmail.com" className="social-icon" aria-label="Email">
                <EmailIcon size={18} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.navigation')}</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollTo('about')}>{t('header.nav.about')}</button></li>
              <li><button onClick={() => scrollTo('projects')}>{t('header.nav.projects')}</button></li>
              <li><button onClick={() => scrollTo('skills')}>{t('header.nav.skills')}</button></li>
              <li><button onClick={() => scrollTo('education')}>{t('header.nav.education')}</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.technologies')}</h4>
            <ul className="footer-links">
              <li>React · Next.js · Astro</li>
              <li>Laravel · AdonisJS · Django</li>
              <li>Claude AI · OpenAI · LangChain</li>
              <li>Swift · Ionic · Unity</li>
              <li>Docker · AWS · PostgreSQL</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">{t('footer.contact')}</h4>
            <ul className="footer-links">
              <li>Torreón, Coahuila</li>
              <li><a href="mailto:david.gmzherrera28@gmail.com">david.gmzherrera28@gmail.com</a></li>
              <li><a href="https://wa.me/528711419810" target="_blank" rel="noopener noreferrer">+52 871 141 9810</a></li>
              <li><button onClick={() => scrollTo('contact')}>{t('footer.contactForm')}</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} David. {t('footer.copyright')}</p>
          <p className="footer-text">{t('footer.available')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
