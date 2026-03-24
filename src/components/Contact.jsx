import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

// EmailJS config — create a free account at https://emailjs.com
// then add these to your .env file:
//   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    // If EmailJS keys are configured, send via EmailJS
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        )
        setFormStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } catch {
        setFormStatus('error')
      } finally {
        setIsSubmitting(false)
        setTimeout(() => setFormStatus(null), 6000)
      }
    } else {
      // Fallback: open email client
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
      window.open(`mailto:david.gmzherrera28@gmail.com?subject=${subject}&body=${body}`)
      setFormStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormStatus(null), 6000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('contact.tag')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-description">{t('contact.description')}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>{t('contact.introTitle')}</h3>
              <p>{t('contact.introText')}</p>
            </div>

            <div className="contact-methods">
              {/* WhatsApp — highlighted */}
              <a
                href="https://wa.me/528711419810"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method contact-method--whatsapp"
              >
                <div className="method-icon method-icon--green">
                  <WhatsAppIcon />
                </div>
                <div className="method-info">
                  <span className="method-label">WhatsApp</span>
                  <span className="method-value">+52 871 141 9810</span>
                </div>
                <span className="method-badge">{t('contact.available').replace('💼 ', '')}</span>
              </a>

              <a href="mailto:david.gmzherrera28@gmail.com" className="contact-method">
                <div className="method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="method-info">
                  <span className="method-label">Email</span>
                  <span className="method-value">david.gmzherrera28@gmail.com</span>
                </div>
              </a>

              <a href="https://github.com/dabidgmz" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="method-info">
                  <span className="method-label">GitHub</span>
                  <span className="method-value">github.com/dabidgmz</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/gomezherreradavid" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="method-info">
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">linkedin.com/in/gomezherreradavid</span>
                </div>
              </a>
            </div>

            <div className="contact-cta">
              <p className="cta-text">{t('contact.location')}</p>
              <p className="cta-text">{t('contact.available')}</p>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.form.name')}</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder={t('contact.form.namePlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.form.email')}</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder={t('contact.form.emailPlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.form.subject')}</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder={t('contact.form.subjectPlaceholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder={t('contact.form.messagePlaceholder')}></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
              {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
            </button>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/528711419810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon />
              {t('contact.whatsappCta')}
            </a>

            {formStatus === 'success' && (
              <div className="form-message success">{t('contact.form.success')}</div>
            )}
            {formStatus === 'error' && (
              <div className="form-message error">{t('contact.form.error')}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
