import styles from './Features.module.css'

const features = [
  { icon: '🎨', title: 'Custom Backdrops', description: 'Tailored setups that match your event theme perfectly.' },
  { icon: '⚡', title: 'Instant Prints', description: 'High-quality prints your guests can take home right away.' },
  { icon: '🎭', title: 'Fun Props', description: 'Hundreds of themed props to make every shot unique.' },
  { icon: '📱', title: 'Digital Gallery', description: 'All photos uploaded online for easy sharing and downloading.' },
]

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Why Choose Us</span>
        <h2 className={styles.title}>More Than Just Photos</h2>
      </div>
      <div className={styles.grid}>
        {features.map(({ icon, title, description }) => (
          <div key={title} className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}