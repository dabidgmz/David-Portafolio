import React from 'react'
import { CiUser, CiDesktop, CiSettings, CiDatabase } from 'react-icons/ci'
import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate developer with experience in multiple technologies and team leadership
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-subtitle">Software Developer Jr.</h3>
            <p className="about-paragraph">
              I am a student at <strong>Universidad Tecnológica de Torreón</strong>, 
              focused on software development with practical experience in real projects 
              covering web development, mobile and embedded systems.
            </p>
            <p className="about-paragraph">
              My experience includes working with modern technologies like <strong>React</strong>, 
              <strong> Laravel</strong>, <strong>AdonisJS</strong>, <strong>Django</strong>, <strong>Python</strong>, and <strong>Swift</strong>, 
              as well as leading development teams under agile methodologies.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiUser />
                </div>
                <div className="highlight-content">
                  <h4>Team Leadership</h4>
                  <p>Scrum Master and team leader in full-stack development projects</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiDesktop />
                </div>
                <div className="highlight-content">
                  <h4>Full-Stack Development</h4>
                  <p>Backend with PHP, Laravel, AdonisJS, Django, Python and mobile development with React and Swift</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiSettings />
                </div>
                <div className="highlight-content">
                  <h4>Embedded Systems</h4>
                  <p>Software development for IoT devices and embedded systems</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <CiDatabase />
                </div>
                <div className="highlight-content">
                  <h4>Database Management</h4>
                  <p>Design and administration of relational and non-relational databases</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Completed Projects</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of Experience</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Microservices Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

