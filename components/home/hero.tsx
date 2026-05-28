'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './hero.module.css'

const stats = [
  { num: '📸', label: 'Unlimited Shots' },
  { num: '🎨', label: 'Custom Layouts' },
  { num: '⚡', label: 'Instant Prints' },
  { num: '💛', label: 'Friendly Service' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => { ref.current?.classList.add(styles.visible) }, [])

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.bg} />
      <div className={styles.ring} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={styles.badge}>✦ Photo Booth Services Philippines</div>
      <h1 className={styles.heading}>
        Capture Every <em className={styles.em}>Magical</em> Moment In Style
      </h1>
      <p className={styles.sub}>
        Premium photo booth experiences for weddings, corporate events, debuts, and parties across the Philippines.
      </p>
      <div className={styles.btns}>
        <Link href="/packages" className={styles.btnPrimary}>View Packages</Link>
        <Link href="/gallery" className={styles.btnOutline}>See Our Work</Link>
      </div>
      <div className={styles.stats}>
        {stats.map(({ num, label }) => (
          <div key={label} className={styles.stat}>
            <div className={styles.statNum}>{num}</div>
            <div className={styles.statLabel}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}