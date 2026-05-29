'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoCircle}>
            <Image src="/prismo_logo.webp" alt="PrismoLens Logo" width={28} height={28} style={{ borderRadius: '50%', objectFit: 'cover' }} />
          </div>
          <span className={styles.brand}>
            <span className={styles.brandAccent}>Prismo</span>Lens
          </span>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/chat" className={styles.agentLink}>✦ AI Agent</Link>
        </div>

        <div className={styles.right}>
          <Link href="/contact" className={styles.cta}>Book Now</Link>
          <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${open ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${open ? styles.bar3Open : ''}`} />
        </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer — slides from right */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.drawerLogo}>
            <div className={styles.logoCircle}>
              <Image src="/prismo_logo.webp" alt="PrismoLens Logo" width={28} height={28} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <span className={styles.brand}>
              <span className={styles.brandAccent}>Prismo</span>Lens
            </span>
          </div>
          <button className={styles.closeBtn} onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className={styles.drawerLinks}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link href="/chat" className={styles.drawerAgentLink}>✦ AI Agent</Link>
        </div>

        <div className={styles.drawerFooter}>
          <Link href="/contact" className={styles.drawerCta}>Book Now</Link>
          <p className={styles.drawerContact}>+63 917 123 4567</p>
          <a href="https://m.me/prismolensphoto" target="_blank" rel="noopener noreferrer" className={styles.drawerContact}>
            Message us on Messenger
          </a>
        </div>
      </div>
    </>
  )
}