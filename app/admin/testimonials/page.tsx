'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type Testimonial = {
  id: string
  name: string
  event: string
  text: string
  rating: number
  approved: boolean
  created_at: string
}

export default function TestimonialsAdmin() {
  const router = useRouter()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('pending')

  useEffect(() => {
    checkAuth()
    fetchTestimonials()
  }, [])

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) router.push('/admin')
  }

  async function fetchTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setTestimonials(data)
    setLoading(false)
  }

  async function approve(id: string) {
    await supabase.from('testimonials').update({ approved: true }).eq('id', id)
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, approved: true } : t))
  }

  async function unapprove(id: string) {
    await supabase.from('testimonials').update({ approved: false }).eq('id', id)
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, approved: false } : t))
  }

  async function deleteReview(id: string) {
    await supabase.from('testimonials').delete().eq('id', id)
    setTestimonials(prev => prev.filter(t => t.id !== id))
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const filtered = testimonials.filter(t => {
    if (filter === 'pending') return !t.approved
    if (filter === 'approved') return t.approved
    return true
  })

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Testimonials</h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {(['pending', 'approved', 'all'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '6px 16px',
              borderRadius: '100px',
              border: `1px solid ${filter === f ? '#D4A843' : 'rgba(255,255,255,0.1)'}`,
              background: filter === f ? 'rgba(212,168,67,0.1)' : 'transparent',
              color: filter === f ? '#D4A843' : '#8A8078',
              fontSize: '13px',
              cursor: 'pointer',
              textTransform: 'capitalize',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      {loading ? <p>Loading...</p> : filtered.length === 0 ? (
        <p style={{ color: '#8A8078', fontSize: '14px' }}>No {filter} reviews.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filtered.map(t => (
            <div
              key={t.id}
              style={{
                padding: '1.25rem',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600 }}>{t.name}</span>
                  <span style={{ color: '#D4A843', fontSize: '13px' }}>{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</span>
                  <span style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: t.approved ? 'rgba(34,197,94,0.1)' : 'rgba(212,168,67,0.1)',
                    color: t.approved ? '#22C55E' : '#D4A843',
                  }}>
                    {t.approved ? 'approved' : 'pending'}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#8A8078', marginBottom: '6px' }}>{t.event}</div>
                <div style={{ fontSize: '14px', color: '#ccc', lineHeight: 1.6 }}>"{t.text}"</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexShrink: 0 }}>
                {t.approved ? (
                  <button
                    onClick={() => unapprove(t.id)}
                    style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#8A8078', fontSize: '13px', cursor: 'pointer' }}
                  >
                    Unapprove
                  </button>
                ) : (
                  <button
                    onClick={() => approve(t.id)}
                    style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #22C55E', background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontSize: '13px', cursor: 'pointer' }}
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => deleteReview(t.id)}
                  style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)', color: '#EF4444', fontSize: '13px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}