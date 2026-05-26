import styles from './Testimonials.module.css'

const reviews = [
  { initials: 'AC', name: 'Angela Cruz', event: 'Wedding · Tagaytay', text: 'PrismoLens made our wedding unforgettable! Guests were lining up all night for the booth. Absolute professionals.' },
  { initials: 'MR', name: 'Marco Reyes', event: '18th Birthday · Quezon City', text: 'Super fun setup and the prints came out amazing. Everyone loved the custom design on the photo strips!' },
  { initials: 'JS', name: 'Jasmine Santos', event: 'Corporate Gala · BGC', text: 'Very professional team, arrived on time, and the setup was gorgeous. Highly recommend for corporate events!' },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>Trusted by</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map(({ initials, name, event, text }) => (
            <div key={name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>"{text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{initials}</div>
                <div>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.event}>{event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}