import Link from 'next/link'
import styles from './HomeCTA.module.css'

export default function HomeCTA() {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.inner}>
          <span className={styles.label}>Ready to Book?</span>
          <h2 className={styles.title}>Let's Make Your Event Unforgettable</h2>
          <p className={styles.sub}>Reach out today and lock in your date. Slots fill up fast, especially on weekends.</p>
          <div className={styles.btns}>
            <Link href="/contact" className={styles.btnPrimary}>Book Now</Link>
            <Link href="/chat" className={styles.btnGhost}>✦ Ask Our AI Agent</Link>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>PrismoLens Photo Booth Services</div>
        <p className={styles.footerSub}>© {new Date().getFullYear()} PrismoLens · Philippines</p>
      </footer>
    </>
  )
}