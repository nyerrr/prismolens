'use client'

import { useState } from 'react'
import styles from './GalleryGrid.module.css'

const events = [
  {
    id: 1,
    title: "Aniela & Aaliyah's 7th Birthday",
    venue: 'McDo Vermosa',
    date: 'May 23, 2026',
    category: 'Birthday',
    emoji: '🎂',
    image: '/707581292_1423947829756488_5691220500371327261_n.jpg',
    bg: 'linear-gradient(135deg, #2d0a3a, #1a0d2e)',
    postUrl:
      'https://www.facebook.com/prismolensofficial/posts/pfbid0H5ECDr9cJF6jRNR9x22RAh3jJoonFAxvTkYYjtMxEdqcQCKbxaWWSwkfiRN9oCJfl',
    photoCount: '100+',
  },
]

const categories = [
  'All',
  'Birthday',
  'Wedding',
  'Corporate',
  'Graduation',
  'Prom',
]

export default function GalleryGrid() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? events
      : events.filter((e) => e.category === active)

  return (
    <section className={styles.section}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filter} ${
              active === cat ? styles.filterActive : ''
            }`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>No events in this category yet. Check back soon!</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((event) => (
            <a
              key={event.id}
              href={event.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ background: event.bg }}
            >
              <div
                className={styles.cardInner}
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={styles.emoji}>{event.emoji}</div>

                <div className={styles.photoBadge}>
                  {event.photoCount} photos
                </div>

                <div className={styles.overlay}>
                  <span className={styles.viewText}>
                    View Photos on Facebook →
                  </span>
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.category}>
                    {event.category}
                  </div>

                  <h3 className={styles.title}>
                    {event.title}
                  </h3>

                  <div className={styles.meta}>
                    <span>📍 {event.venue}</span>
                    <span>📅 {event.date}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className={styles.moreCTA}>
        <p className={styles.moreText}>
          More events coming soon! Follow us for updates.
        </p>

        <a
          href="https://www.facebook.com/prismolensofficial"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fbLink}
        >
          Visit our Facebook Page
        </a>
      </div>
    </section>
  )
}