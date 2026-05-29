'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '▦' },
  { label: 'Inquiries', href: '/admin/inquiries', icon: '📋' },
  { label: 'Testimonials', href: '/admin/testimonials', icon: '★' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [checking, setChecking] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && pathname !== '/admin') {
        router.push('/admin')
      }
      setChecking(false)
    })
  }, [pathname, router])

  useEffect(() => { setSidebarOpen(false) }, [pathname])

  if (pathname === '/admin') return <>{children}</>

  if (checking) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0D0D0D' }}>
      <p style={{ color: '#D4A843', fontSize: '14px' }}>Loading...</p>
    </div>
  )

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const SidebarContent = () => (
    <>
      <div style={{ marginBottom: '2rem', paddingLeft: '0.5rem' }}>
        <div style={{ fontWeight: 700, fontSize: '1rem', color: '#D4A843' }}>PrismoLens</div>
        <div style={{ fontSize: '11px', color: '#8A8078', marginTop: '2px' }}>Admin Panel</div>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
        {navItems.map(({ label, href, icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '9px 12px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: active ? 600 : 400,
                color: active ? '#D4A843' : '#8A8078',
                background: active ? 'rgba(212,168,67,0.08)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
            >
              <span>{icon}</span>
              {label}
            </Link>
          )
        })}
      </nav>
      <button
        onClick={handleLogout}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '9px 12px',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#8A8078',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
        }}
      >
        <span>→</span> Logout
      </button>
    </>
  )

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .admin-sidebar { display: flex !important; }
          .admin-mobile-bar { display: none !important; }
          .admin-main { margin-left: 220px !important; }
        }
        @media (max-width: 767px) {
          .admin-sidebar-fixed { display: none !important; }
        }
      `}</style>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside className="admin-sidebar-fixed" style={{
          width: '220px',
          background: '#0E0E0E',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1rem',
          position: 'fixed',
          top: '64px',
          left: 0,
          height: 'calc(100vh - 64px)',
          zIndex: 40,
        }}>
          <SidebarContent />
        </aside>
        <div className="admin-mobile-bar" style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          height: '52px',
          background: '#0E0E0E',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1rem',
          zIndex: 40,
          justifyContent: 'space-between',
        }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#D4A843' }}>Admin Panel</div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '20px', cursor: 'pointer' }}
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
        </div>
        {sidebarOpen && (
          <>
            <div
              onClick={() => setSidebarOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 45, top: '116px' }}
            />
            <aside style={{
              position: 'fixed',
              top: '116px',
              left: 0,
              width: '220px',
              height: 'calc(100vh - 116px)',
              background: '#0E0E0E',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem 1rem',
              zIndex: 50,
            }}>
              <SidebarContent />
            </aside>
          </>
        )}
        <main className="admin-main" style={{
          flex: 1,
          padding: '1.5rem',
          minHeight: '100vh',
          paddingTop: '5rem',
        }}>
          {children}
        </main>
      </div>
    </>
  )
}