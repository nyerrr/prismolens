'use client'

import { useState } from 'react'
import styles from './GalleryGrid.module.css'

const categories = ['All', 'Wedding', 'Birthday', 'Corporate', 'Graduation', 'Prom']

const photos = [
  { id: 1, category: 'Wedding', label: 'Wedding · Tagaytay', bg: 'linear-gradient(135deg, #1a1208, #2d1f0a)', emoji: '💍', size: 'tall' },
  { id: 2, category: 'Birthday', label: '18th Birthday · QC', bg: 'linear-gradient(135deg, #0d0d1a, #12103d)', emoji: '🎂', size: 'normal' },
  { id: 3, category: 'Corporate', label: 'Corporate Gala · BGC', bg: 'linear-gradient(135deg, #0a1215, #0d1f28)', emoji: '🏢', size: 'normal' },
  { id: 4, category: 'Wedding', label: 'Wedding · Batangas', bg: 'linear-gradient(135deg, #1a0d0d, #2d1010)', emoji: '💍', size: 'wide' },
  { id: 5, category: 'Graduation', label: 'Graduation · Makati', bg: 'linear-gradient(135deg, #101508, #1a2310)', emoji: '🎓', size: 'normal' },
  { id: 6, category: 'Prom', label: 'Prom Night · Pasig', bg: 'linear-gradient(135deg, #150a12, #200f1a)', emoji: '💃', size: 'tall' },
  { id: 7, category: 'Birthday', label: 'Kids Party · Mandaluyong', bg: 'linear-gradient(135deg, #0f1a08, #182a0d)', emoji: '🎉', size: 'normal' },
  { id: 8, category: 'Corporate', label: 'Product Launch · Taguig', bg: 'linear-gradient(135deg, #08100d, #0f1a16)', emoji: '🚀', size: 'wide' },
  { id: 9, category: 'Wedding', label: 'Wedding · Quezon City', bg: 'linear-gradient(135deg, #1a1208, #2a1e0a)', emoji: '💒', size: 'normal' },
  { id: 10, category: 'Graduation', label: 'Grad Party · Alabang', bg: 'linear-gradient(135deg, #0d1520, #0a1528)', emoji: '🎓', size: 'normal' },
  { id: 11, category: 'Prom', label: 'Cotillion · San Juan', bg: 'linear-gradient(135deg, #1a0a15, #280f20)', emoji: '👑', size: 'normal' },
  { id: 12, category: 'Birthday', label: 'Debut · Parañaque', bg: 'linear-gradient(135deg, #150d08, #221508)', emoji: '🌸', size: 'normal' },
]

export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<null | typeof photos[0]>(null)

  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active)

  return (
    <section className={styles.section}>
      {/* Filter tabs */}
      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map(photo => (
          <div
            key={photo.id}
            className={`${styles.item} ${styles[photo.size]}`}
            style={{ background: photo.bg }}
            onClick={() => setLightbox(photo)}
          >
            <div className={styles.itemInner}>
              <span className={styles.emoji}>{photo.emoji}</span>
              <div className={styles.overlay}>
                <span className={styles.overlayIcon}>⊕</span>
              </div>
              <div className={styles.itemLabel}>{photo.label}</div>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        📸 Replace mock placeholders with your actual photos via the <code>photos</code> array in <code>GalleryGrid.tsx</code>
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <div className={styles.lightboxCard} style={{ background: lightbox.bg }} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
            <span className={styles.lightboxEmoji}>{lightbox.emoji}</span>
            <div className={styles.lightboxLabel}>{lightbox.label}</div>
            <div className={styles.lightboxCategory}>{lightbox.category}</div>
          </div>
        </div>
      )}
    </section>
  )
}