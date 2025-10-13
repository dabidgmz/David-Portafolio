import React from 'react'
import { CiUser, CiSettings, CiDesktop, CiMobile1, CiLock, CiCloud, CiDatabase } from 'react-icons/ci'
import '../styles/Education.css'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            My academic journey in software development
          </p>
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
              <h3 className="education-degree">
                Software Development
              </h3>
              <p className="education-institution">
                Universidad Tecnológica de Torreón
              </p>
              <p className="education-period">
                In Progress
              </p>
            </div>

            <div className="education-details">
              <h4>Specialization Areas:</h4>
              <ul className="education-list">
                <li>Full-Stack Web Development</li>
                <li>Mobile Application Development</li>
                <li>Databases and Software Architecture</li>
                <li>Server Administration</li>
                <li>Embedded Systems and IoT</li>
                <li>Agile Methodologies (Scrum)</li>
                <li>Cybersecurity</li>
              </ul>
            </div>

            <div className="education-achievements">
              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiUser />
                </div>
                <div className="achievement-text">
                  <strong>Project Leader</strong>
                  <p>Experience leading teams in integrative projects</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiSettings />
                </div>
                <div className="achievement-text">
                  <strong>Certified Scrum Master</strong>
                  <p>Agile project management with Scrum methodology</p>
                </div>
              </div>

              <div className="achievement-item">
                <div className="achievement-icon">
                  <CiDesktop />
                </div>
                <div className="achievement-text">
                  <strong>Real Projects</strong>
                  <p>Development of solutions for clients and companies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3 className="certifications-title">Certifications & Knowledge</h3>
            <div className="certifications-grid">
              <div className="cert-badge">
                <CiMobile1 className="cert-icon" />
                <span className="cert-text">Scrum Master</span>
              </div>
              <div className="cert-badge">
                <CiLock className="cert-icon" />
                <span className="cert-text">Cybersecurity</span>
              </div>
              <div className="cert-badge">
                <CiCloud className="cert-icon" />
                <span className="cert-text">Cloud Computing</span>
              </div>
              <div className="cert-badge">
                <CiDatabase className="cert-icon" />
                <span className="cert-text">Database Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

