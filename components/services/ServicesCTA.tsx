import Link from 'next/link'
import styles from './ServicesCTA.module.css'

export default function ServicesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Ready?</span>
        <h2 className={styles.title}>Let's Build Your Perfect Booth</h2>
        <p className={styles.sub}>Tell us about your event and we'll put together the perfect setup for you.</p>
        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>Book Now</Link>
          <Link href="/packages" className={styles.btnOutline}>View Packages</Link>
        </div>
      </div>
    </section>
  )
}