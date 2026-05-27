import Link from 'next/link'
import styles from './PackagesGrid.module.css'

const packages = [
  {
    name: 'Classic',
    tagline: 'Perfect for intimate events',
    price: '₱5,500',
    duration: '3 hours',
    featured: false,
    features: [
      'Unlimited prints (2x6 strips)',
      '1 backdrop of your choice',
      'Basic props kit',
      '1 booth attendant',
      'Digital copies via email',
      'Setup & teardown included',
    ],
  },
  {
    name: 'Gold',
    tagline: 'Our most loved package',
    price: '₱9,500',
    duration: '5 hours',
    featured: true,
    features: [
      'Unlimited prints (2x6 & 4x6)',
      '2 backdrop options',
      'Premium props & accessories',
      '2 booth attendants',
      'Private digital gallery link',
      'Custom photo strip design',
      'GIF & boomerang mode',
      'Setup & teardown included',
    ],
  },
  {
    name: 'Prismo Elite',
    tagline: 'Full premium experience',
    price: '₱16,000',
    duration: '8 hours',
    featured: false,
    features: [
      'Unlimited prints (all sizes)',
      '3 custom backdrop designs',
      'Full themed prop station',
      '3 attendants + coordinator',
      'Private digital gallery',
      'Custom overlays & branding',
      '360° video booth add-on',
      'Social media sharing kiosk',
      'Same-day USB of all photos',
    ],
  },
]

export default function PackagesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {packages.map(({ name, tagline, price, duration, featured, features }) => (
          <div key={name} className={`${styles.card} ${featured ? styles.featured : ''}`}>
            {featured && <div className={styles.badge}>Most Popular</div>}
            <div className={styles.cardTop}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.tagline}>{tagline}</p>
              <div className={styles.price}>
                {price} <span className={styles.duration}>/ {duration}</span>
              </div>
            </div>
            <ul className={styles.features}>
              {features.map(f => (
                <li key={f} className={styles.feature}>
                  <span className={styles.check}>✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`${styles.btn} ${featured ? styles.btnFeatured : ''}`}>
              Book {name}
            </Link>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        All prices are base rates. Additional hours available at ₱1,500/hr.
        Rates may vary by location. <Link href="/contact" className={styles.noteLink}>Contact us</Link> for a custom quote.
      </p>
    </section>
  )
}