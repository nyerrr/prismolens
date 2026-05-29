'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function AdminLogin() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      window.location.href = '/admin/dashboard'
    }   
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '320px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin Login</h1>
        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '10px', borderRadius: '8px', background: '#D4A843', color: '#000', fontWeight: 600 }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}