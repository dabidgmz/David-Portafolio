import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import {
  CloseIcon, CheckIcon, GitHubIcon, ExternalLinkIcon,
  ArrowDownIcon, StarIcon
} from '../Icons'
import '../styles/ProjectModal.css'

const ProjectModal = ({
  project,
  category,        // { bg, color, border, icon }
  hasPrev,
  hasNext,
  onClose,
  onPrev,
  onNext,
}) => {
  const { t } = useTranslation()
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const prevFocus = useRef(null)

  useEffect(() => {
    prevFocus.current = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus({ preventScroll: true })

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
        return
      }
      if (e.key === 'ArrowLeft' && hasPrev) {
        e.preventDefault()
        onPrev()
      }
      if (e.key === 'ArrowRight' && hasNext) {
        e.preventDefault()
        onNext()
      }
      // Simple focus trap inside dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      prevFocus.current?.focus?.()
    }
  }, [hasPrev, hasNext, onClose, onPrev, onNext])

  const titleId = `project-modal-title-${project.id}`
  const descId = `project-modal-desc-${project.id}`

  return createPortal(
    <div
      className="project-modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        // Close only if clicked the overlay itself (not a child)
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <header className="project-modal-header">
          <div className="project-modal-header-meta">
            <div
              className="project-cat-badge"
              style={{
                background: category.bg,
                color: category.color,
                border: `1px solid ${category.border}`,
              }}
            >
              {category.icon}
              <span>{project.category.toUpperCase()}</span>
            </div>
            <span className="project-modal-period">{project.period}</span>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label={t('a11y.closeDialog')}
          >
            <CloseIcon size={20} />
          </button>
        </header>

        <div className="project-modal-body">
          <h2 id={titleId} className="project-modal-title">
            {project.title}
          </h2>
          <p
            className="project-modal-role"
            style={{ color: category.color }}
          >
            {project.role}
          </p>
          <p id={descId} className="project-modal-description">
            {project.description}
          </p>

          <section className="project-modal-section">
            <h3 className="project-modal-section-title">
              <StarIcon size={12} /> {t('projects.keyHighlights')}
            </h3>
            <ul className="project-modal-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <CheckIcon size={14} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="project-modal-section">
            <h3 className="project-modal-section-title">
              {t('projects.techStack')}
            </h3>
            <div className="project-modal-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-link"
              style={{ color: category.color, borderColor: category.border }}
            >
              {project.linkType === 'code' ? <GitHubIcon size={16} /> : <ExternalLinkIcon size={16} />}
              {project.linkType === 'code' ? t('projects.viewCode') : t('projects.viewProject')}
            </a>
          )}
        </div>

        <footer className="project-modal-footer">
          <button
            type="button"
            className="project-modal-nav"
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label={t('a11y.previousProject')}
          >
            <span className="project-modal-nav-arrow project-modal-nav-arrow--left" aria-hidden="true">
              <ArrowDownIcon size={14} />
            </span>
            <span>{t('a11y.previousProject')}</span>
          </button>
          <button
            type="button"
            className="project-modal-nav"
            onClick={onNext}
            disabled={!hasNext}
            aria-label={t('a11y.nextProject')}
          >
            <span>{t('a11y.nextProject')}</span>
            <span className="project-modal-nav-arrow project-modal-nav-arrow--right" aria-hidden="true">
              <ArrowDownIcon size={14} />
            </span>
          </button>
        </footer>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
