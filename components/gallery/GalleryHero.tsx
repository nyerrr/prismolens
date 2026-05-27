import styles from './GalleryHero.module.css'

export default function GalleryHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <span className={styles.badge}>✦ Portfolio</span>
      <h1 className={styles.heading}>Moments We've <em className={styles.em}>Captured</em></h1>
      <p className={styles.sub}>A glimpse of the magic we've created at weddings, debuts, corporate events, and parties all over the Philippines.</p>
    </section>
  )
}