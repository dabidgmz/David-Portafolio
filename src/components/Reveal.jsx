import React from 'react'
import { useInView } from '../hooks/useInView'

/**
 * Reveal — wraps children with a fade-up scroll reveal.
 *
 * Usage:
 *   <Reveal>...</Reveal>
 *   <Reveal as="section" delay={120}>...</Reveal>
 *
 * The animation only runs once. Respects prefers-reduced-motion via useInView.
 */
const Reveal = ({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  ...rest
}) => {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
