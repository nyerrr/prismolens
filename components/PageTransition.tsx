'use client'

import { useEffect, useRef } from 'react'
import styles from './PageTransition.module.css'

export default function PageTransition({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add(styles.visible), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div ref={ref} className={styles.wrap}>
      {children}
    </div>
  )
}