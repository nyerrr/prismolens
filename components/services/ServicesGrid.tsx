import Link from 'next/link'
import styles from './ServicesGrid.module.css'

const services = [
  {
    icon: '💍',
    title: 'Wedding Booth',
    description: 'Elegant setups with custom backdrops, props, and instant prints. We make sure every guest leaves with a memory from your special day.',
    price: 'Starting at ₱2,500',
    featured: true,
  },
  {
    icon: '🎂',
    title: 'Birthday & Debut',
    description: 'Themed setups with fun props, custom photo strips, and digital gallery sharing. Perfect for 18th birthdays, debuts, and kids parties.',
    price: 'Starting at ₱2,500',
    featured: false,
  },
  {
    icon: '🏢',
    title: 'Corporate Events',
    description: 'Branded booths with professional setup and high quality prints. Ideal for product launches, team events, and brand activations.',
    price: 'Starting at ₱2,500',
    featured: false,
  },
  {
    icon: '🎓',
    title: 'Graduation Parties',
    description: 'Celebrate milestones with fun colorful setups and unlimited prints to capture the memories of your big achievement.',
    price: 'Starting at ₱2,500',
    featured: false,
  },
  {
    icon: '💃',
    title: 'Prom & Cotillion',
    description: 'Glamorous setups with draped backdrops and beautiful lighting. We match the elegance of your formal school event perfectly.',
    price: 'Starting at ₱2,500',
    featured: false,
  },
  {
    icon: '🎉',
    title: 'Custom Events',
    description: 'Have a unique occasion? We customize every booth setup to match your vision - theme, props, backdrop, print design, all of it.',
    price: 'Request a quote',
    featured: false,
  },
]

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {services.map(({ icon, title, description, price, featured }) => (
          <div key={title} className={`${styles.card} ${featured ? styles.featured : ''}`}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.footer}>
              <span className={styles.price}>{price}</span>
              <Link href="/contact" className={styles.bookBtn}>Book Now →</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}