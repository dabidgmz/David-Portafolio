import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/TechMarquee.css'

// Stack of well-known tech — kept short so each logo is recognizable.
const STACK = [
  { name: 'React',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Astro',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg' },
  { name: 'Node.js',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'NestJS',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'Laravel',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Python',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Java',        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Swift',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Flutter',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Android',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Ionic',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
  { name: 'Unity',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'PostgreSQL',  url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB',     url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker',      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS',         url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Linux',       url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'PHP',         url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
]

const TechMarquee = () => {
  const { t } = useTranslation()
  // Duplicate the array so the CSS animation can loop seamlessly.
  const items = [...STACK, ...STACK]

  return (
    <div className="tech-marquee" aria-label={t('marquee.label')}>
      <span className="tech-marquee-label">{t('marquee.label')}</span>
      <div className="tech-marquee-mask">
        <ul className="tech-marquee-track" aria-hidden="false">
          {items.map((item, i) => (
            <li key={i} className="tech-marquee-item">
              <img
                src={item.url}
                alt={item.name}
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechMarquee
