import React from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import '../styles/Process.css'

const Process = () => {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section id="process" className="process">
      <div className="container">
        <Reveal as="div" className="section-header">
          <span className="section-tag">{t('process.tag')}</span>
          <h2 className="section-title">{t('process.title')}</h2>
          <p className="section-description">{t('process.description')}</p>
        </Reveal>

        <div className="process-steps">
          {steps.map((step, i) => (
            <Reveal key={step.n} as="div" className="process-step" delay={i * 80}>
              <div className="process-step-num">{step.n}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
