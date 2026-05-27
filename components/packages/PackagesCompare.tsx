import styles from './PackagesCompare.module.css'

const rows = [
  { feature: 'Duration', basic: '2 hours', magnetic: '2 hours' },
  { feature: 'Photo Type A', basic: 'Classic', magnetic: 'Classic' },
  { feature: 'Photo Type B', basic: 'Photo Strip', magnetic: 'Photo Strip' },
  { feature: 'Photo Type C', basic: 'Polaroid', magnetic: 'Polaroid' },
  { feature: 'Inclusion', basic: 'Standee', magnetic: 'Magnetic' },
  { feature: 'Unlimited Shots', basic: '✓', magnetic: '✓' },
  { feature: 'High Quality Prints', basic: '✓', magnetic: '✓' },
  { feature: 'Non-Fading & Waterproof', basic: '✓', magnetic: '✓' },
  { feature: 'Free Layout', basic: '✓', magnetic: '✓' },
  { feature: 'Sanitized Props', basic: '✓', magnetic: '✓' },
  { feature: 'Free Backdrop', basic: '1', magnetic: '1' },
  { feature: 'Extra hour', basic: '₱1,000', magnetic: '₱1,500' },
  { feature: 'Starting Price', basic: '₱2,500', magnetic: '₱3,500' },
]

export default function PackagesCompare() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Compare</span>
          <h2 className={styles.title}>Basic vs Magnetic</h2>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFeature}>Feature</th>
                <th className={styles.th}>Basic Package</th>
                <th className={`${styles.th} ${styles.thFeatured}`}>Magnetic Package</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, basic, magnetic }) => (
                <tr key={feature} className={styles.row}>
                  <td className={styles.tdFeature}>{feature}</td>
                  <td className={styles.td}>{basic}</td>
                  <td className={`${styles.td} ${styles.tdFeatured}`}>{magnetic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}