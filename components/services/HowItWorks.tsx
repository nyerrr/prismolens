import styles from './HowItWorks.module.css'

const steps = [
  { num: '01', title: 'Pick a Package', desc: 'Browse our packages and choose what fits your event size and budget. Not sure? Our AI agent can help.' },
  { num: '02', title: 'Book Your Date', desc: 'Fill out our booking form and pay a 50% downpayment to lock in your slot. We confirm within 24 hours.' },
  { num: '03', title: 'We Set Everything Up', desc: 'Our team arrives early, sets up the full booth, and stays the entire event to keep things running smoothly.' },
  { num: '04', title: 'You Enjoy & Share', desc: 'Guests print photos instantly, get digital copies, and your private gallery is ready to share the next day.' },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>The Process</span>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.sub}>From inquiry to event day - here's what to expect when you book with PrismoLens.</p>
        </div>
        <div className={styles.steps}>
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className={styles.step}>
              <div className={styles.stepNum}>{num}</div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}