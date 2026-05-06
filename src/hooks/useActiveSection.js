import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently most visible in the viewport.
 *
 *   const active = useActiveSection(['about', 'projects', 'skills'])
 */
export const useActiveSection = (ids, { offset = 0.45 } = {}) => {
  const [active, setActive] = useState(ids[0] || null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('IntersectionObserver' in window)) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio that is currently visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        // Trigger when section's middle crosses the middle of the viewport.
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round((1 - offset) * 100)}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join(','), offset])

  return active
}
