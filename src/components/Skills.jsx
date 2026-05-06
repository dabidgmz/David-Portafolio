import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Tooltip
} from 'recharts'
import { CiDesktop, CiMobile1, CiSettings, CiDatabase, CiCloud, CiServer, CiGlobe, CiMonitor } from 'react-icons/ci'
import { useTheme } from '../context/ThemeContext'
import Reveal from './Reveal'
import '../styles/Skills.css'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <strong>{payload[0].payload.skill}</strong>
        <span>{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

const Skills = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const radarData = [
    { skill: 'Frontend',    value: 82 },
    { skill: 'Backend',     value: 85 },
    { skill: 'Languages',   value: 79 },
    { skill: 'Mobile',      value: 77 },
    { skill: 'Databases',   value: 81 },
    { skill: 'DevOps',      value: 80 },
    { skill: 'AI & APIs',   value: 81 },
    { skill: 'Agile',       value: 88 },
  ]

  const skillCategories = [
    {
      titleKey: 'skills.categories.frontend',
      icon: <CiMonitor />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 82 },
        { name: 'Astro', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 88 },
        { name: 'Vite', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Ionic React', level: 80 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tauri', level: 70 },
      ]
    },
    {
      titleKey: 'skills.categories.backend',
      icon: <CiSettings />,
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'AdonisJS', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'NestJS', level: 82 },
        { name: 'Express', level: 88 },
        { name: 'Django', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'FastAPI', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: '.NET', level: 70 },
        { name: 'Socket.IO', level: 85 },
        { name: 'Microservicios', level: 82 },
      ]
    },
    {
      titleKey: 'skills.categories.languages',
      icon: <CiDesktop />,
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'Swift', level: 80 },
        { name: 'Dart', level: 78 },
        { name: 'Kotlin', level: 74 },
        { name: 'Java', level: 78 },
        { name: 'C#', level: 72 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      titleKey: 'skills.categories.mobile',
      icon: <CiMobile1 />,
      skills: [
        { name: 'Flutter', level: 80 },
        { name: 'React Native', level: 85 },
        { name: 'Ionic React (PWA)', level: 82 },
        { name: 'Swift / SwiftUI', level: 80 },
        { name: 'Android Studio (Kotlin)', level: 76 },
        { name: 'Xcode', level: 80 },
        { name: 'Unity 2D', level: 78 },
        { name: 'Unity 3D / URP', level: 72 },
      ]
    },
    {
      titleKey: 'skills.categories.databases',
      icon: <CiDatabase />,
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL / MariaDB', level: 90 },
        { name: 'SQLite', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 78 },
        { name: 'pgvector', level: 75 },
        { name: 'Supabase', level: 78 },
        { name: 'SQL Server', level: 75 },
        { name: 'Oracle', level: 72 },
      ]
    },
    {
      titleKey: 'skills.categories.servers',
      icon: <CiCloud />,
      skills: [
        { name: 'Docker', level: 84 },
        { name: 'Vercel', level: 85 },
        { name: 'AWS', level: 74 },
        { name: 'DigitalOcean', level: 82 },
        { name: 'Nginx / PM2', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Ubuntu Server', level: 90 },
        { name: 'Rocky Linux', level: 85 },
        { name: 'Debian', level: 80 },
      ]
    },
    {
      titleKey: 'skills.categories.ai',
      icon: <CiGlobe />,
      skills: [
        { name: 'Claude AI', level: 88 },
        { name: 'OpenAI / GPT-4', level: 85 },
        { name: 'Gemini AI', level: 82 },
        { name: 'LangChain', level: 78 },
        { name: 'RAG / Vector Stores', level: 82 },
        { name: 'AI Chatbots', level: 85 },
        { name: 'Streaming (SSE)', level: 80 },
        { name: 'SAT / CFDI 4.0', level: 85 },
        { name: 'Stripe / OpenPay', level: 80 },
        { name: 'Pandas / Matplotlib', level: 80 },
      ]
    },
    {
      titleKey: 'skills.categories.methodologies',
      icon: <CiServer />,
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Git / GitHub', level: 92 },
        { name: 'Asana / Linear', level: 85 },
        { name: 'Database Design', level: 85 },
        { name: 'Testing (Jest/Pytest)', level: 80 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  ]

  const otherSkills = t('skills.other', { returnObjects: true })
  const gridColor = isDark ? '#334155' : '#e2e8f0'
  const textColor = isDark ? '#94a3b8' : '#64748b'

  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('skills.tag')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-description">{t('skills.description')}</p>
        </Reveal>

        {/* Radar Chart */}
        <div className="skills-chart-wrapper">
          <div className="skills-chart-card">
            <h3 className="skills-chart-title">Skills Overview</h3>
            <ResponsiveContainer width="100%" height={360}>
              <RadarChart data={radarData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke={gridColor} />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: textColor, fontSize: 13, fontWeight: 600 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Radar
                  name="Level"
                  dataKey="value"
                  stroke="#2563eb"
                  fill="#2563eb"
                  fillOpacity={0.25}
                  strokeWidth={2}
                  dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="skills-radar-legend">
            {radarData.map((item, i) => (
              <div key={i} className="radar-legend-item">
                <div className="radar-legend-bar-bg">
                  <div
                    className="radar-legend-bar-fill"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <div className="radar-legend-info">
                  <span className="radar-legend-name">{item.skill}</span>
                  <span className="radar-legend-val">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Cards */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{t(category.titleKey)}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="other-skills">
          <h3 className="other-skills-title">{t('skills.otherTitle')}</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <div key={index} className="other-skill-tag">
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
