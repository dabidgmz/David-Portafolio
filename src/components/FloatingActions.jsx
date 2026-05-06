import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowDownIcon, WhatsAppIcon } from '../Icons'
import '../styles/FloatingActions.css'

const FloatingActions = () => {
  const { t } = useTranslation()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 800)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="floating-actions" aria-hidden={!showTop}>
      {/* Sticky WhatsApp CTA — visible on mobile primarily */}
      <a
        href="https://wa.me/528711419810?text=Hola%20David%2C%20vi%20tu%20portafolio%20y%20quisiera%20platicar"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-btn--whatsapp"
        aria-label={t('stickyCta.whatsapp')}
        title={t('stickyCta.whatsapp')}
      >
        <WhatsAppIcon size={22} />
      </a>

      {/* Back to top — only when scrolled */}
      <button
        type="button"
        onClick={scrollTop}
        className={`float-btn float-btn--top ${showTop ? 'is-visible' : ''}`}
        aria-label={t('header.scrollToTop')}
        title={t('header.scrollToTop')}
        tabIndex={showTop ? 0 : -1}
      >
        <span className="float-btn-arrow" aria-hidden="true">
          <ArrowDownIcon size={18} />
        </span>
      </button>
    </div>
  )
}

export default FloatingActions
