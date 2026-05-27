import styles from './PackagesCompare.module.css'

const rows = [
  { feature: 'Duration', classic: '3 hours', gold: '5 hours', elite: '8 hours' },
  { feature: 'Print sizes', classic: '2x6 strips', gold: '2x6 & 4x6', elite: 'All sizes' },
  { feature: 'Backdrops', classic: '1', gold: '2', elite: '3 custom' },
  { feature: 'Attendants', classic: '1', gold: '2', elite: '3 + coordinator' },
  { feature: 'Digital gallery', classic: 'Email only', gold: 'Private link', elite: 'Private link' },
  { feature: 'Custom strip design', classic: '✕', gold: '✓', elite: '✓' },
  { feature: 'GIF & boomerang', classic: '✕', gold: '✓', elite: '✓' },
  { feature: '360° video booth', classic: '✕', gold: '✕', elite: '✓' },
  { feature: 'Same-day USB', classic: '✕', gold: '✕', elite: '✓' },
  { feature: 'Social sharing kiosk', classic: '✕', gold: '✕', elite: '✓' },
]

export default function PackagesCompare() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Compare</span>
          <h2 className={styles.title}>What's Included</h2>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFeature}>Feature</th>
                <th className={styles.th}>Classic</th>
                <th className={`${styles.th} ${styles.thFeatured}`}>Gold</th>
                <th className={styles.th}>Elite</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, classic, gold, elite }) => (
                <tr key={feature} className={styles.row}>
                  <td className={styles.tdFeature}>{feature}</td>
                  <td className={styles.td}>{classic}</td>
                  <td className={`${styles.td} ${styles.tdFeatured}`}>{gold}</td>
                  <td className={styles.td}>{elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}