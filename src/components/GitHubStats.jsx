import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GitHubIcon, ExternalLinkIcon, StarIcon } from '../Icons'
import Reveal from './Reveal'
import '../styles/GitHubStats.css'

const USERNAME = 'dabidgmz'

// Color per language — Apple-tasteful, not the official GitHub palette
const LANG_COLORS = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python:     '#3572A5',
  PHP:        '#777bb3',
  Java:       '#b07219',
  Swift:      '#F05138',
  Kotlin:     '#a97bff',
  'C++':      '#f34b7d',
  'C#':       '#178600',
  Astro:      '#ff5d01',
  HTML:       '#e34c26',
  CSS:        '#563d7c',
  Vue:        '#41b883',
  Dart:       '#00B4AB',
  Shell:      '#89e051',
  Dockerfile: '#384d54',
  SCSS:       '#c6538c',
  Hack:       '#878787',
  Ruby:       '#701516',
  Go:         '#00ADD8',
  Rust:       '#dea584',
  Lua:        '#000080',
  Default:    '#9aa0a6',
}

const colorFor = (lang) => LANG_COLORS[lang] || LANG_COLORS.Default

const formatNumber = (n) => {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k'
  return String(n)
}

const Stat = ({ value, label, hint }) => (
  <div className="gh-stat">
    <div className="gh-stat-num">{value}</div>
    <div className="gh-stat-label">{label}</div>
    {hint && <div className="gh-stat-hint">{hint}</div>}
  </div>
)

const SkeletonCard = () => (
  <div className="gh-card gh-card--skeleton" aria-hidden="true">
    <div className="gh-skel gh-skel--num" />
    <div className="gh-skel gh-skel--label" />
  </div>
)

const GitHubStats = () => {
  const { t } = useTranslation()
  const [data, setData] = useState(null)       // { user, languages: [{name, pct}], stars, totalRepos }
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`, { headers: { Accept: 'application/vnd.github+json' } }),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, { headers: { Accept: 'application/vnd.github+json' } }),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')
        const user  = await userRes.json()
        const repos = await reposRes.json()

        // Language stats: count repos per language (best signal we have without auth)
        const counts = {}
        let stars = 0
        for (const repo of repos) {
          if (repo.fork) continue
          if (typeof repo.stargazers_count === 'number') stars += repo.stargazers_count
          if (repo.language) counts[repo.language] = (counts[repo.language] || 0) + 1
        }
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1
        const languages = Object.entries(counts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, count]) => ({ name, pct: Math.round((count / total) * 1000) / 10 }))

        const joined = new Date(user.created_at).toLocaleDateString(undefined, {
          year: 'numeric', month: 'short',
        })

        if (!cancelled) {
          setData({
            user,
            languages,
            stars,
            totalRepos: user.public_repos || repos.length,
            joined,
          })
        }
      } catch (e) {
        if (!cancelled) setError(e.message || 'GitHub API error')
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <section id="github" className="github-stats">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('github.tag')}</span>
          <h2 className="section-title">{t('github.title')}</h2>
          <p className="section-description">{t('github.description')}</p>
        </Reveal>

        {/* Stat cards */}
        <Reveal as="div" className="gh-grid">
          {!data && !error && (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}

          {data && (
            <>
              <div className="gh-card">
                <Stat
                  value={formatNumber(data.totalRepos)}
                  label="Public repos"
                />
              </div>
              <div className="gh-card">
                <Stat
                  value={
                    <>
                      <StarIcon size={18} className="gh-stat-icon" />
                      {formatNumber(data.stars)}
                    </>
                  }
                  label="Stars earned"
                />
              </div>
              <div className="gh-card">
                <Stat
                  value={formatNumber(data.user.followers || 0)}
                  label="Followers"
                />
              </div>
              <div className="gh-card">
                <Stat
                  value={data.languages.length}
                  label="Languages"
                  hint={`Since ${data.joined}`}
                />
              </div>
            </>
          )}

          {error && (
            <div className="gh-error">
              GitHub stats temporarily unavailable.
            </div>
          )}
        </Reveal>

        {/* Languages breakdown */}
        {data && data.languages.length > 0 && (
          <Reveal as="div" className="gh-langs">
            <div className="gh-langs-header">
              <span className="gh-langs-label">Top languages</span>
              <span className="gh-langs-source">From {data.totalRepos} repositories</span>
            </div>
            <div className="gh-langs-bar" role="img" aria-label="Top languages stacked bar">
              {data.languages.map((l) => (
                <span
                  key={l.name}
                  className="gh-langs-bar-seg"
                  style={{ width: `${l.pct}%`, background: colorFor(l.name) }}
                  title={`${l.name} · ${l.pct}%`}
                />
              ))}
            </div>
            <ul className="gh-langs-list">
              {data.languages.map((l) => (
                <li key={l.name}>
                  <span
                    className="gh-langs-dot"
                    style={{ background: colorFor(l.name) }}
                    aria-hidden="true"
                  />
                  <span className="gh-langs-name">{l.name}</span>
                  <span className="gh-langs-pct">{l.pct}%</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

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
