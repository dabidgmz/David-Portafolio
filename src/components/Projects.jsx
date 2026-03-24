import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  GlobeIcon, MonitorIcon, GamepadIcon, TrophyIcon,
  ServerIcon, MobileIcon, ExternalLinkIcon, GitHubIcon, CheckIcon, StarIcon
} from '../Icons'
import '../styles/Projects.css'

const categoryIcons = {
  erp: <ServerIcon size={22} />,
  mobile: <MobileIcon size={22} />,
  games: <GamepadIcon size={22} />,
  hackathon: <TrophyIcon size={22} />,
}

const categoryColors = {
  erp:       { bg: 'rgba(37,99,235,0.1)',  color: '#2563eb', border: 'rgba(37,99,235,0.25)' },
  mobile:    { bg: 'rgba(14,165,233,0.1)', color: '#0ea5e9', border: 'rgba(14,165,233,0.25)' },
  games:     { bg: 'rgba(99,102,241,0.1)', color: '#6366f1', border: 'rgba(99,102,241,0.25)' },
  hackathon: { bg: 'rgba(245,158,11,0.1)', color: '#d97706', border: 'rgba(245,158,11,0.25)' },
}

const FILTERS = ['all', 'erp', 'mobile', 'games', 'hackathon']

const ProjectCard = ({ project, featured = false }) => {
  const { t } = useTranslation()
  const cat = categoryColors[project.category] || categoryColors.erp

  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      {featured && (
        <div className="project-featured-ribbon">
          <StarIcon size={12} /> Featured
        </div>
      )}

      <div className="project-card-header">
        <div className="project-cat-badge" style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.border}` }}>
          {categoryIcons[project.category]}
          <span>{project.category.toUpperCase()}</span>
        </div>
        <span className="project-period">{project.period}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-role" style={{ color: cat.color }}>{project.role}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>

      <div className="project-highlights">
        <p className="highlights-label">{t('projects.keyHighlights')}</p>
        <ul>
          {project.highlights.map((h, i) => (
            <li key={i}>
              <CheckIcon size={14} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ color: cat.color, borderColor: cat.border }}
        >
          {project.linkType === 'code' ? <GitHubIcon size={16} /> : <ExternalLinkIcon size={16} />}
          {project.linkType === 'code' ? t('projects.viewCode') : t('projects.viewProject')}
        </a>
      )}
    </article>
  )
}

const Projects = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const allProjects = t('projects.list', { returnObjects: true })
  const filters = t('projects.filters', { returnObjects: true })

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeFilter)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('projects.tag')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-description">{t('projects.description')}</p>
        </div>

        {/* Filter tabs */}
        <div className="projects-filters" role="tablist">
          {FILTERS.map(f => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f !== 'all' && categoryIcons[f]}
              {filters[f]}
            </button>
          ))}
        </div>

        {/* Featured card */}
        {featured && (
          <div className="projects-featured">
            <ProjectCard project={featured} featured />
          </div>
        )}

        {/* Rest in grid */}
        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
