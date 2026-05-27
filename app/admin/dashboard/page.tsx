'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Stats = {
  totalInquiries: number
  pendingInquiries: number
  approvedTestimonials: number
  pendingTestimonials: number
}

const statCards = (s: Stats) => [
  { label: 'Total Inquiries', value: s.totalInquiries, color: '#3B82F6' },
  { label: 'Pending Inquiries', value: s.pendingInquiries, color: '#D4A843' },
  { label: 'Approved Testimonials', value: s.approvedTestimonials, color: '#22C55E' },
  { label: 'Pending Testimonials', value: s.pendingTestimonials, color: '#F97316' },
]

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalInquiries: 0,
    pendingInquiries: 0,
    approvedTestimonials: 0,
    pendingTestimonials: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchStats() }, [])

  async function fetchStats() {
    const [
      { count: totalInquiries },
      { count: pendingInquiries },
      { count: approvedTestimonials },
      { count: pendingTestimonials },
    ] = await Promise.all([
      supabase.from('inquiries').select('*', { count: 'exact', head: true }),
      supabase.from('inquiries').select('*', { count: 'exact', head: true }).eq('status', 'new'),
      supabase.from('testimonials').select('*', { count: 'exact', head: true }).eq('approved', true),
      supabase.from('testimonials').select('*', { count: 'exact', head: true }).eq('approved', false),
    ])

    setStats({
      totalInquiries: totalInquiries ?? 0,
      pendingInquiries: pendingInquiries ?? 0,
      approvedTestimonials: approvedTestimonials ?? 0,
      pendingTestimonials: pendingTestimonials ?? 0,
    })
    setLoading(false)
  }

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>Dashboard</h1>
      <p style={{ color: '#8A8078', fontSize: '14px', marginBottom: '2rem' }}>Welcome back.</p>

      {loading ? <p style={{ color: '#8A8078' }}>Loading...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {statCards(stats).map(({ label, value, color }) => (
            <div
              key={label}
              style={{
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 700, color }}>{value}</div>
              <div style={{ fontSize: '13px', color: '#8A8078', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}