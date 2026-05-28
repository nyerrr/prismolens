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
    embedUrl:
      'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fprismolensofficial%2Fposts%2Fpfbid0H5ECDr9cJF6jRNR9x22RAh3jJoonFAxvTkYYjtMxEdqcQCKbxaWWSwkfiRN9oCJfl&show_text=true&width=500',
    postUrl:
      'https://www.facebook.com/prismolensofficial/posts/pfbid0H5ECDr9cJF6jRNR9x22RAh3jJoonFAxvTkYYjtMxEdqcQCKbxaWWSwkfiRN9oCJfl',
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
            <div key={event.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.category}>
                  {event.category}
                </div>

                <div className={styles.cardMeta}>
                  <span>📍 {event.venue}</span>
                  <span>📅 {event.date}</span>
                </div>

                <h3 className={styles.title}>
                  {event.title}
                </h3>
              </div>

              <div className={styles.embedWrap}>
                <iframe
                  src={event.embedUrl}
                  width="100%"
                  height="750"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              <a
                href={event.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewBtn}
              >
                View All Photos on Facebook →
              </a>
            </div>
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