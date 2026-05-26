import styles from './ServicesHero.module.css'

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <span className={styles.badge}>✦ What We Offer</span>
      <h1 className={styles.heading}>Photo Booth Services <em className={styles.em}>For Every Occasion</em></h1>
      <p className={styles.sub}>From intimate birthdays to grand corporate galas — we bring the perfect booth setup to your event, anywhere in the Philippines.</p>
    </section>
  )
}