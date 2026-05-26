'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoCircle}>📸</div>
        <span className={styles.brand}>
          <span className={styles.brandAccent}>Prismo</span>Lens
        </span>
      </Link>
      <div className={styles.links}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={`${styles.link} ${pathname === href ? styles.active : ''}`}>
            {label}
          </Link>
        ))}
        <Link href="/chat" className={styles.agentLink}>✦ AI Agent</Link>
      </div>
      <Link href="/contact" className={styles.cta}>Book Now</Link>
    </nav>
  )
}