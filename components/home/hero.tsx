'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './hero.module.css'

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

      {/* Photo strip */}
      <div className={styles.photoStrip}>
        <div className={styles.photoCard}>
          <Image 
            src="/hero-classic.webp" 
            alt="Classic photo booth" 
            fill 
            sizes="260px"
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />
        </div>
        <div className={`${styles.photoCard} ${styles.photoCardMiddle}`}>
          <Image 
            src="/hero-strip.webp" 
            alt="Photo strip booth" 
            fill 
            sizes="290px"
            style={{ objectFit: 'contain', objectPosition: 'center' }} 
          />
        </div>
        <div className={styles.photoCard}>
          <Image 
            src="/hero-polaroid.webp" 
            alt="Polaroid photo booth" 
            fill 
            sizes="260px"
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
          />
        </div>
      </div>
    </section>
  )
}