import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { GitHubIcon, ExternalLinkIcon } from '../Icons'
import Reveal from './Reveal'
import '../styles/GitHubStats.css'

const USERNAME = 'dabidgmz'

const GitHubStats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Neutral palette that survives both themes — Apple-minimal vs the loud "radical" theme
  const text  = isDark ? 'F5F5F7' : '1D1D1F'
  const muted = isDark ? '98989D' : '6E6E73'
  const icon  = isDark ? 'F5F5F7' : '1D1D1F'
  const ring  = isDark ? 'F5F5F7' : '1D1D1F'

  const baseParams = `username=${USERNAME}&hide_border=true&bg_color=00000000&title_color=${text}&text_color=${muted}&icon_color=${icon}`
  const statsUrl = `https://github-readme-stats.vercel.app/api?${baseParams}&show_icons=true&include_all_commits=true&count_private=true&rank_icon=github&hide=contribs&ring_color=${ring}`
  const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?${baseParams}&layout=compact&langs_count=8`
  const streakUrl = `https://streak-stats.demolab.com?user=${USERNAME}&hide_border=true&background=00000000&stroke=${muted}&ring=${ring}&fire=${ring}&currStreakLabel=${text}&sideLabels=${muted}&dates=${muted}&currStreakNum=${text}&sideNums=${text}`

  return (
    <section id="github" className="github-stats">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('github.tag')}</span>
          <h2 className="section-title">{t('github.title')}</h2>
          <p className="section-description">{t('github.description')}</p>
        </Reveal>

        <Reveal as="div" className="github-grid">
          <div className="github-card github-card--stats">
            <img
              src={statsUrl}
              alt="GitHub statistics"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="github-card github-card--langs">
            <img
              src={langsUrl}
              alt="Top programming languages"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="github-card github-card--streak">
            <img
              src={streakUrl}
              alt="GitHub contribution streak"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal as="div" className="github-cta">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GitHubIcon size={16} />
            {t('github.viewProfile')}
            <ExternalLinkIcon size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default GitHubStats
