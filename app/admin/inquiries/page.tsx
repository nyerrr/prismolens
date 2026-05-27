'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type Inquiry = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  event_type: string
  event_date: string
  package: string
  message: string
  status: string
  created_at: string
}

const statusColors: Record<string, string> = {
  new: '#D4A843',
  replied: '#3B82F6',
  confirmed: '#22C55E',
  closed: '#6B7280',
}

export default function InquiriesPage() {
  const router = useRouter()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Inquiry | null>(null)

  useEffect(() => {
    checkAuth()
    fetchInquiries()
  }, [])

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) router.push('/admin')
  }

  async function fetchInquiries() {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setInquiries(data)
    setLoading(false)
  }

  async function updateStatus(id: string, status: string) {
    await supabase.from('inquiries').update({ status }).eq('id', id)
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i))
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, status } : null)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Inquiries</h1>
      </div>

      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: '1.5rem' }}>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {inquiries.map(inquiry => (
              <div
                key={inquiry.id}
                onClick={() => setSelected(inquiry)}
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  border: `1px solid ${selected?.id === inquiry.id ? '#D4A843' : 'rgba(255,255,255,0.08)'}`,
                  background: 'rgba(255,255,255,0.03)',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{inquiry.first_name} {inquiry.last_name}</div>
                  <div style={{ fontSize: '13px', color: '#8A8078', marginTop: '2px' }}>{inquiry.event_type} · {inquiry.event_date}</div>
                </div>
                <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '100px', background: statusColors[inquiry.status] + '22', color: statusColors[inquiry.status] }}>
                  {inquiry.status}
                </span>
              </div>
            ))}
          </div>

          {/* Detail */}
          {selected && (
            <div style={{ padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', position: 'sticky', top: '2rem', alignSelf: 'start' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <h2 style={{ fontWeight: 700 }}>{selected.first_name} {selected.last_name}</h2>
                <button onClick={() => setSelected(null)} style={{ background: 'transparent', border: 'none', color: '#8A8078', cursor: 'pointer', fontSize: '18px' }}>✕</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px', marginBottom: '1.5rem' }}>
                <div><span style={{ color: '#8A8078' }}>Email: </span>{selected.email}</div>
                <div><span style={{ color: '#8A8078' }}>Phone: </span>{selected.phone}</div>
                <div><span style={{ color: '#8A8078' }}>Event: </span>{selected.event_type}</div>
                <div><span style={{ color: '#8A8078' }}>Date: </span>{selected.event_date}</div>
                <div><span style={{ color: '#8A8078' }}>Package: </span>{selected.package}</div>
                {selected.message && <div><span style={{ color: '#8A8078' }}>Message: </span>{selected.message}</div>}
              </div>

              <div>
                <div style={{ fontSize: '13px', color: '#8A8078', marginBottom: '0.5rem' }}>Update Status</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['new', 'replied', 'confirmed', 'closed'].map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected.id, s)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '100px',
                        border: `1px solid ${selected.status === s ? statusColors[s] : 'rgba(255,255,255,0.1)'}`,
                        background: selected.status === s ? statusColors[s] + '22' : 'transparent',
                        color: selected.status === s ? statusColors[s] : '#8A8078',
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}