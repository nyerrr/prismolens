import Link from 'next/link'
import styles from './PackagesCTA.module.css'

export default function PackagesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Not Sure Which to Pick?</span>
        <h2 className={styles.title}>Let Our AI Agent Help You Choose</h2>
        <p className={styles.sub}>Tell us about your event and we'll recommend the best package for your needs and budget.</p>
        <div className={styles.btns}>
          <Link href="/chat" className={styles.btnPrimary}>✦ Ask AI Agent</Link>
          <Link href="/contact" className={styles.btnOutline}>Book Now</Link>
        </div>
      </div>
    </section>
  )
}