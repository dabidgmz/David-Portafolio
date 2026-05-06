import React, { useEffect, useState } from 'react'
import '../styles/LoadingScreen.css'

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Animate progress bar from 0 to 100 over 1.6s
    const start = performance.now()
    const duration = 1600
    const tick = (now) => {
      const elapsed = now - start
      const p = Math.min((elapsed / duration) * 100, 100)
      setProgress(p)
      if (p < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setFadeOut(true), 200)
        setTimeout(() => onFinish(), 700)
      }
    }
    requestAnimationFrame(tick)
  }, [onFinish])

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <span className="loading-initial">D</span>
        </div>
        <div className="loading-name-block">
          <span className="loading-name">David Herrera</span>
          <span className="loading-role">Full Stack Developer</span>
        </div>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="loading-percent">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}

export default LoadingScreen
