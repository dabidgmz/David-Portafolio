import React from 'react'
import { useTranslation } from 'react-i18next'
import { CiDesktop, CiMobile1, CiSettings, CiDatabase, CiCloud, CiServer } from 'react-icons/ci'
import '../styles/Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  const skillCategories = [
    {
      titleKey: 'skills.categories.languages',
      icon: <CiDesktop />,
      skills: [
        { name: 'PHP', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 },
        { name: 'C++', level: 75 },
        { name: 'Swift', level: 80 },
        { name: 'Python', level: 85 }
      ]
    },
    {
      titleKey: 'skills.categories.mobile',
      icon: <CiMobile1 />,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Swift/iOS', level: 80 },
        { name: 'Xcode', level: 80 }
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
        { name: 'Microservicios', level: 80 },
        { name: 'Socket.IO', level: 85 }
      ]
    },
    {
      titleKey: 'skills.categories.databases',
      icon: <CiDatabase />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Oracle', level: 75 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      titleKey: 'skills.categories.servers',
      icon: <CiCloud />,
      skills: [
        { name: 'Rocky Linux', level: 85 },
        { name: 'Ubuntu Server', level: 90 },
        { name: 'Azure', level: 75 },
        { name: 'DevOps', level: 80 },
        { name: 'Pandas', level: 85 },
        { name: 'Matplotlib', level: 75 }
      ]
    },
    {
      titleKey: 'skills.categories.methodologies',
      icon: <CiServer />,
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Asana', level: 85 },
        { name: 'Git/GitHub', level: 90 },
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
