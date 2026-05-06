import { useEffect, useRef, useState } from 'react'

/**
 * Reveal-once IntersectionObserver hook.
 * Returns [ref, isInView] — once an element scrolls into view it stays revealed
 * (no flicker on scroll-up). Respects prefers-reduced-motion by reporting true
 * immediately so consumers can render the final state.
 */
export const useInView = ({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
} = {}) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect users who disabled motion — reveal everything immediately.
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reducedMotion) {
      setInView(true)
      return
    }

    const node = ref.current
    if (!node) return

    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}
