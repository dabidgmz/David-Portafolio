import React from 'react'
import { useTranslation } from 'react-i18next'
import { CiDesktop, CiMobile1, CiSettings, CiDatabase, CiCloud, CiServer, CiGlobe, CiMonitor } from 'react-icons/ci'
import '../styles/Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      titleKey: 'skills.categories.frontend',
      icon: <CiMonitor />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Astro', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 85 },
        { name: 'Ionic', level: 75 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tauri', level: 70 }
      ]
    },
    {
      titleKey: 'skills.categories.backend',
      icon: <CiSettings />,
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'AdonisJS', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Flask', level: 75 },
        { name: '.NET', level: 70 },
        { name: 'Socket.IO', level: 85 },
        { name: 'Microservicios', level: 80 }
      ]
    },
    {
      titleKey: 'skills.categories.languages',
      icon: <CiDesktop />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'Swift', level: 80 },
        { name: 'Kotlin', level: 72 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      titleKey: 'skills.categories.mobile',
      icon: <CiMobile1 />,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Swift / iOS', level: 80 },
        { name: 'Android / Kotlin', level: 72 },
        { name: 'Xcode', level: 80 },
        { name: 'Unity', level: 70 }
      ]
    },
    {
      titleKey: 'skills.categories.databases',
      icon: <CiDatabase />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL Server', level: 75 },
        { name: 'Oracle', level: 75 }
      ]
    },
    {
      titleKey: 'skills.categories.servers',
      icon: <CiCloud />,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 72 },
        { name: 'DigitalOcean', level: 80 },
        { name: 'Ubuntu Server', level: 90 },
        { name: 'Rocky Linux', level: 85 },
        { name: 'Debian', level: 80 },
        { name: 'DevOps', level: 78 }
      ]
    },
    {
      titleKey: 'skills.categories.ai',
      icon: <CiGlobe />,
      skills: [
        { name: 'Claude AI', level: 85 },
        { name: 'OpenAI / GPT-4', level: 82 },
        { name: 'LangChain', level: 75 },
        { name: 'SAT / CFDI 4.0', level: 85 },
        { name: 'Stripe / OpenPay', level: 80 },
        { name: 'Pandas / Matplotlib', level: 80 }
      ]
    },
    {
      titleKey: 'skills.categories.methodologies',
      icon: <CiServer />,
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Asana', level: 85 },
        { name: 'Diseño de BD', level: 85 }
      ]
    }
  ]

  const otherSkills = t('skills.other', { returnObjects: true })

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('skills.tag')}</span>
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-description">{t('skills.description')}</p>
        </div>

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
