import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
  GamepadIcon, TrophyIcon,
  ServerIcon, MobileIcon, BrainIcon,
  ExternalLinkIcon, GitHubIcon, CheckIcon, StarIcon
} from '../Icons'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import '../styles/Projects.css'

const categoryIcons = {
  erp: <ServerIcon size={22} />,
  mobile: <MobileIcon size={22} />,
  games: <GamepadIcon size={22} />,
  hackathon: <TrophyIcon size={22} />,
  ai: <BrainIcon size={22} />,
}

const categoryColors = {
  erp:       { bg: 'rgba(37,99,235,0.1)',  color: '#2563eb', border: 'rgba(37,99,235,0.25)' },
  mobile:    { bg: 'rgba(14,165,233,0.1)', color: '#0ea5e9', border: 'rgba(14,165,233,0.25)' },
  games:     { bg: 'rgba(99,102,241,0.1)', color: '#6366f1', border: 'rgba(99,102,241,0.25)' },
  hackathon: { bg: 'rgba(245,158,11,0.1)', color: '#d97706', border: 'rgba(245,158,11,0.25)' },
  ai:        { bg: 'rgba(168,85,247,0.1)', color: '#a855f7', border: 'rgba(168,85,247,0.25)' },
}

const FILTERS = ['all', 'erp', 'mobile', 'ai', 'games', 'hackathon']

const PREVIEW_HIGHLIGHTS = 3
const PREVIEW_TAGS = 5

const ProjectCard = ({ project, featured = false, onOpen }) => {
  const { t } = useTranslation()
  const cardRef = React.useRef(null)
  const cat = categoryColors[project.category] || categoryColors.erp

  // Spotlight on hover — only on featured card (the rest stay calmer)
  React.useEffect(() => {
    if (!featured) return
    const el = cardRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [featured])

  const highlightLimit = featured ? 5 : PREVIEW_HIGHLIGHTS
  const visibleHighlights = project.highlights.slice(0, highlightLimit)
  const hasMoreHighlights = project.highlights.length > highlightLimit

  const visibleTags = project.tags.slice(0, PREVIEW_TAGS)
  const hiddenTags = project.tags.length - PREVIEW_TAGS

  // Whole-card click — but ignore clicks on links/buttons inside
  const handleCardClick = (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return
    onOpen()
  }
  const handleCardKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen()
    }
  }

  return (
    <article
      ref={cardRef}
      className={`project-card ${featured ? 'project-card--featured project-card--spotlight' : ''}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKey}
      tabIndex={0}
      role="button"
      aria-label={`${t('a11y.openProjectDetails')}: ${project.title}`}
    >
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
        {visibleTags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
        {hiddenTags > 0 && (
          <span className="project-tag project-tag--more">+{hiddenTags}</span>
        )}
      </div>

      <div className="project-highlights">
        <p className="highlights-label">{t('projects.keyHighlights')}</p>
        <ul>
          {visibleHighlights.map((h, i) => (
            <li key={i}>
              <CheckIcon size={14} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="project-card-cta"
        onClick={(e) => { e.stopPropagation(); onOpen() }}
        aria-label={`${t('a11y.openProjectDetails')}: ${project.title}`}
      >
        {t('projects.viewDetails')}
        {hasMoreHighlights && <span className="project-card-cta-count">· +{project.highlights.length - highlightLimit}</span>}
        <span className="project-card-cta-arrow" aria-hidden="true">→</span>
      </button>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ color: cat.color, borderColor: cat.border }}
          onClick={(e) => e.stopPropagation()}
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
  const [selectedId, setSelectedId] = useState(null)

  const allProjects = t('projects.list', { returnObjects: true })
  const filters = t('projects.filters', { returnObjects: true })

  const filtered = useMemo(() => (
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter(p => p.category === activeFilter)
  ), [activeFilter, allProjects])

  // Read deep-link on mount
  useEffect(() => {
    const match = window.location.hash.match(/#project=([\w-]+)/)
    if (match && allProjects.find(p => p.id === match[1])) {
      setSelectedId(match[1])
    }
    const onHashChange = () => {
      const m = window.location.hash.match(/#project=([\w-]+)/)
      setSelectedId(m && allProjects.find(p => p.id === m[1]) ? m[1] : null)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync hash with selected project (without triggering scroll jump)
  useEffect(() => {
    const current = window.location.hash
    if (selectedId) {
      const target = `#project=${selectedId}`
      if (current !== target) {
        window.history.replaceState(null, '', target)
      }
    } else if (current.startsWith('#project=')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [selectedId])

  // Use the full project list (not just the filter) so deep-links work even if
  // the user has the wrong filter active. Modal navigation respects the current filter.
  const selectedProject = useMemo(
    () => allProjects.find(p => p.id === selectedId) || null,
    [selectedId, allProjects]
  )

  // For prev/next: prefer the filtered list; if the selected project isn't in it,
  // fall back to the full list (e.g. arrived via deep-link with mismatched filter).
  const navList = useMemo(() => {
    const inFiltered = filtered.findIndex(p => p.id === selectedId) >= 0
    return inFiltered ? filtered : allProjects
  }, [filtered, allProjects, selectedId])
  const navIndex = navList.findIndex(p => p.id === selectedId)
  const hasPrev = navIndex > 0
  const hasNext = navIndex >= 0 && navIndex < navList.length - 1

  const openProject = useCallback((id) => setSelectedId(id), [])
  const closeProject = useCallback(() => setSelectedId(null), [])
  const prevProject = useCallback(() => {
    if (hasPrev) setSelectedId(navList[navIndex - 1].id)
  }, [hasPrev, navList, navIndex])
  const nextProject = useCallback(() => {
    if (hasNext) setSelectedId(navList[navIndex + 1].id)
  }, [hasNext, navList, navIndex])

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('projects.tag')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-description">{t('projects.description')}</p>
        </Reveal>

        {/* Filter buttons — toggle group */}
        <div className="projects-filters-wrap">
          <div className="projects-filters" role="group" aria-label={t('projects.title')}>
            {FILTERS.map(f => (
              <button
                key={f}
                type="button"
                aria-pressed={activeFilter === f}
                className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f !== 'all' && categoryIcons[f]}
                {filters[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured card */}
        {featured && (
          <div className="projects-featured">
            <ProjectCard project={featured} featured onOpen={() => openProject(featured.id)} />
          </div>
        )}

        {/* Rest in grid */}
        {rest.length > 0 && (
          <div className="projects-grid">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => openProject(project.id)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          category={{
            ...categoryColors[selectedProject.category],
            icon: categoryIcons[selectedProject.category],
          }}
          hasPrev={hasPrev}
          hasNext={hasNext}
          onClose={closeProject}
          onPrev={prevProject}
          onNext={nextProject}
        />
      )}
    </section>
  )
}

export default Projects
