import Link from 'next/link'
import styles from './GalleryCTA.module.css'

export default function GalleryCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Like What You See?</span>
        <h2 className={styles.title}>Let's Create Your Story</h2>
        <p className={styles.sub}>Every event deserves beautiful memories. Book PrismoLens and let's make yours unforgettable.</p>
        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>Book Now</Link>
          <Link href="/packages" className={styles.btnOutline}>View Packages</Link>
        </div>
      </div>
    </section>
  )
}