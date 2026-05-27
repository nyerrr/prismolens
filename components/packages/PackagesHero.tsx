import styles from './PackagesHero.module.css';

export default function PackagesHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg} />
            <span className={styles.badge}>✦ Pricing</span>
            <h1 className={styles.heading}>Simple, <em className={styles.em}>Transparent</em> Pricing</h1>    
            <p className={styles.sub}>No hidden fees. No surprises. Just premium photo booth experiences at honest price</p>
        </section>
    )
}