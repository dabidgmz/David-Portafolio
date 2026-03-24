import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiMobile1, CiDesktop, CiSettings, CiServer, CiGlobe } from 'react-icons/ci'
import '../styles/Projects.css'

const projectIcons = [
  <CiGlobe />,
  <CiDesktop />,
  <CiSettings />,
  <CiMobile1 />,
]

const projectLinks = [
  'https://github.com/dabidgmz/ABASA-ERP-DASHBOARD',
  null,
  'https://grrrverse.com/tel_encoded',
  null
]

const projectTags = [
  ['Astro', 'TypeScript', 'AI/LLM', 'SAT/CFDI', 'Python', 'Docker'],
  ['PHP', 'Laravel', 'AdonisJS', 'React', 'Microservicios', 'IoT'],
  ['AdonisJS', 'TypeScript', 'Socket.IO', 'Unity', 'WebSockets'],
  ['Swift', 'Xcode', 'iOS', 'REST API', 'UIKit']
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const { t } = useTranslation()

  const projects = t('projects.list', { returnObjects: true })

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('projects.tag')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-description">{t('projects.description')}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''} ${index === 0 ? 'project-featured' : ''}`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {index === 0 && (
                <div className="project-badge">Featured</div>
              )}

              <div className="project-header">
                <span className="project-icon">{projectIcons[index]}</span>
                <span className="project-period">{project.period}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {projectTags[index].map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-highlights">
                <h4>{t('projects.keyHighlights')}</h4>
                <ul>
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {projectLinks[index] && (
                <a
                  href={projectLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t('projects.viewProject')}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
