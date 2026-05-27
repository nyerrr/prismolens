import styles from './ContactHero.module.css'

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <span className={styles.badge}>✦ Get In Touch</span>
      <h1 className={styles.heading}>Let's Plan Your <em className={styles.em}>Perfect Event</em></h1>
      <p className={styles.sub}>Fill out the form and we'll get back to you within 24 hours. Or chat with our AI agent for instant answers.</p>
    </section>
  )
}