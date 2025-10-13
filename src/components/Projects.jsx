import React, { useState } from 'react'
import { CiMobile1, CiDesktop, CiSettings, CiServer } from 'react-icons/ci'
import '../styles/Projects.css'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Clinicore',
      period: 'January 2025 - April 2025',
      role: 'Team Leader & Scrum Master',
      description: 'Comprehensive clinical management system with microservices and embedded software',
      tags: ['PHP', 'Laravel', 'AdonisJS', 'React', 'Microservicios', 'IoT'],
      highlights: [
        'Full-stack development team leadership',
        'Backend with PHP, Laravel and AdonisJS',
        'Mobile development with React',
        'Embedded software to read weight, height and temperature',
        '3 microservices architecture',
        'Relational and non-relational databases',
        'Server management and cybersecurity',
        'Scrum Master with Asana management'
      ],
      link: null,
      icon: <CiDesktop />
    },
    {
      id: 2,
      title: 'Juego de Mensajería Encriptada',
      period: 'September 2024 - December 2024',
      role: 'Backend Developer & DevOps',
      description: 'Interactive game with real-time messaging system and end-to-end encryption',
      tags: ['AdonisJS', 'TypeScript', 'Socket.IO', 'Unity', 'WebSockets'],
      highlights: [
        'Backend with AdonisJS and TypeScript',
        'Real-time communication with Socket.IO',
        'Unity integration for game client',
        'Server administration and configuration',
        'Real-time message encryption',
        'Secure authentication system'
      ],
      link: 'https://grrrverse.com/tel_encoded',
      icon: <CiSettings />
    },
    {
      id: 3,
      title: 'Proyecto Integrador 2',
      period: 'February 2024 - April 2024',
      role: 'iOS Mobile Developer',
      description: 'iOS mobile application for medical appointment management with REST backend',
      tags: ['Swift', 'Xcode', 'iOS', 'REST API', 'UIKit'],
      highlights: [
        'Native iOS development with Swift',
        'Modern user interface with UIKit',
        'REST API backend integration',
        'Registration and authentication system',
        'Appointment and consultation management',
        'Patient information visualization'
      ],
      link: null,
      icon: <CiMobile1 />
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      period: 'June 2024 - August 2024',
      role: 'Backend Developer & Data Analyst',
      description: 'Data analysis platform with Django backend and interactive visualizations using pandas and matplotlib',
      tags: ['Python', 'Django', 'Pandas', 'Matplotlib', 'PostgreSQL', 'REST API'],
      highlights: [
        'Backend development with Django REST Framework',
        'Data processing and analysis using pandas',
        'Interactive data visualizations with matplotlib',
        'PostgreSQL database design and optimization',
        'REST API for data consumption',
        'Data cleaning and preprocessing pipelines',
        'Statistical analysis and reporting features',
        'Real-time data dashboard updates'
      ],
      link: null,
      icon: <CiServer />
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Projects & Experience</h2>
          <p className="section-description">
            Featured projects that demonstrate my technical skills and leadership
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${activeProject === project.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <span className="project-period">{project.period}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
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

