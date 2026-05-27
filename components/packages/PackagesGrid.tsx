import Link from 'next/link'
import styles from './PackagesGrid.module.css'

const inclusions = [
  'Unlimited Shots',
  'High Quality Prints',
  'Single Print per Session',
  'Non-Fading & Waterproof Prints',
  'Free Layout',
  'Free Use of Sanitized Props',
  'Free Use of 1 Backdrop',
]

const basicPackages = [
  { name: 'Basic A', photoType: 'Classic', price: '₱2,500' },
  { name: 'Basic B', photoType: 'Photo Strip', price: '₱2,800' },
  { name: 'Basic C', photoType: 'Polaroid', price: '₱3,200' },
]

const magneticPackages = [
  { name: 'Magnetic A', photoType: 'Classic', price: '₱3,500' },
  { name: 'Magnetic B', photoType: 'Photo Strip', price: '₱3,800' },
  { name: 'Magnetic C', photoType: 'Polaroid', price: '₱4,200' },
]

export default function PackagesGrid() {
  return (
    <section className={styles.section}>

      {/* Duration badge */}
      <div className={styles.durationBadge}>
        <span className={styles.durationNum}>2 Hours</span>
        <span className={styles.durationLabel}>base duration for all packages</span>
      </div>

      <div className={styles.grid}>

        {/* Basic Package */}
        <div className={styles.packageGroup}>
          <div className={styles.groupHeader}>
            <h3 className={styles.groupTitle}>Basic Package</h3>
            <span className={styles.groupSub}>Standee Inclusion</span>
          </div>
          <div className={styles.cards}>
            {basicPackages.map(({ name, photoType, price }) => (
              <div key={name} className={styles.card}>
                <div className={styles.cardLeft}>
                  <div className={styles.packageName}>{name}</div>
                  <div className={styles.photoType}>{photoType}</div>
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.price}>{price}</div>
                  <Link href="/contact" className={styles.bookBtn}>Book →</Link>
                </div>
              </div>
            ))}
            <div className={styles.addon}>
              ₱1,000 / extra hour
            </div>
          </div>
        </div>

        {/* Magnetic Package */}
        <div className={styles.packageGroup}>
          <div className={`${styles.groupHeader} ${styles.groupHeaderGold}`}>
            <h3 className={styles.groupTitle}>Magnetic Package</h3>
            <span className={styles.groupSub}>Magnetic Inclusion</span>
          </div>
          <div className={styles.cards}>
            {magneticPackages.map(({ name, photoType, price }) => (
              <div key={name} className={`${styles.card} ${styles.cardGold}`}>
                <div className={styles.cardLeft}>
                  <div className={styles.packageName}>{name}</div>
                  <div className={styles.photoType}>{photoType}</div>
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.price}>{price}</div>
                  <Link href="/contact" className={styles.bookBtn}>Book →</Link>
                </div>
              </div>
            ))}
            <div className={styles.addon}>
              ₱1,500 / extra hour
            </div>
          </div>
        </div>

        {/* Inclusions */}
        <div className={styles.inclusionsCard}>
          <h3 className={styles.inclusionsTitle}>All Packages Include</h3>
          <ul className={styles.inclusionsList}>
            {inclusions.map(item => (
              <li key={item} className={styles.inclusionItem}>
                <span className={styles.check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.transport}>
            🚗 Free transportation on selected areas
          </div>
        </div>

      </div>

      <p className={styles.note}>
        All prices are for 2 hours base. Additional hours available.
        <Link href="/contact" className={styles.noteLink}> Contact us</Link> for a custom quote.
      </p>
    </section>
  )
}