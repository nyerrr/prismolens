'use client'

import { supabase } from '@/lib/supabase'
import { useState } from 'react'
import Link from 'next/link'
import styles from './ContactSection.module.css'
import { FaInstagram, FaFacebookMessenger, FaTiktok } from 'react-icons/fa6'

const eventTypes = ['Wedding', 'Birthday / Debut', 'Corporate Event', 'Graduation', 'Prom / Cotillion', 'Other']
const packageOptions = [
  'Basic A - Classic / Standee (₱2,500)',
  'Basic B - Photo Strip / Standee (₱2,800)',
  'Basic C - Polaroid / Standee (₱3,200)',
  'Magnetic A - Classic / Magnetic (₱3,500)',
  'Magnetic B - Photo Strip / Magnetic (₱3,800)',
  'Magnetic C - Polaroid / Magnetic (₱4,200)',
  'Custom Quote',
]

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  messenger: string
  eventType: string
  eventDate: string
  package: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string) {
  const cleaned = phone.replace(/\s/g, '')
  return /^(\+63|0)9\d{9}$/.test(cleaned)
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '', messenger: '',
    eventType: '', eventDate: '', package: '', message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Please enter a valid PH number (e.g. 09XX XXX XXXX).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      messenger: form.messenger,
      event_type: form.eventType,
      event_date: form.eventDate,
      package: form.package,
      message: form.message,
    }

    const { error } = await supabase
      .from('inquiries')
      .upsert([payload], { onConflict: 'email'})

    if (!error) {
      await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setSubmitted(true)
    } else {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Left — Contact Info */}
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Contact Details</h2>

          <div className={styles.detail}>
            <div className={styles.detailIcon}>
              <a
                href="https://instagram.com/prismolens_ofc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
            <div>
              <div className={styles.detailLabel}>Instagram</div>
              <a href="https://instagram.com/prismolens_ofc" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                prismolens_ofc
              </a>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.detailIcon}>
              <a
                href="https://tiktok.com/@prismolensofc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </div>
            <div>
              <div className={styles.detailLabel}>Tiktok</div>
              <a href="https://tiktok.com/@prismolensofc" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                prismolensofc
              </a>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.detailIcon}>📍</div>
            <div>
              <div className={styles.detailLabel}>Based in</div>
              <div className={styles.detailValue}>Imus City, Cavite</div>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.detailIcon}>
              <a
                href="https://www.facebook.com/prismolensofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookMessenger />
              </a>
            </div>
            <div>
              <div className={styles.detailLabel}>Messenger</div>
              <a href="https://www.facebook.com/prismolensofficial/" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                PrismoLens Photo Booth Services
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✦</div>
              <h3 className={styles.successTitle}>Inquiry Sent!</h3>
              <p className={styles.successSub}>Thanks for reaching out! We'll get back to you within 24 hours.</p>
              <button className={styles.successBtn} onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>First Name</label>
                  <input type="text" placeholder="Juan" value={form.firstName} onChange={e => update('firstName', e.target.value)} required />
                </div>
                <div className={styles.field}>
                  <label>Last Name</label>
                  <input type="text" placeholder="dela Cruz" value={form.lastName} onChange={e => update('lastName', e.target.value)} required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    required
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.field}>
                  <label>Phone / Viber</label>
                  <input
                    type="text"
                    placeholder="+63 9XX XXX XXXX"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    required
                  />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
                <div className={styles.field}>
                  <label>Messenger Name <span className={styles.optional}>(optional)</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Juan dela Cruz"
                    value={form.messenger}
                    onChange={e => update('messenger', e.target.value)}
                    className={styles.messengerInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Event Type</label>
                  <select value={form.eventType} onChange={e => update('eventType', e.target.value)} required>
                    <option value="">Select type</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Event Date</label>
                  <input type="date" value={form.eventDate} onChange={e => update('eventDate', e.target.value)} required />
                </div>
              </div>

              <div className={styles.field}>
                <label>Package</label>
                <select value={form.package} onChange={e => update('package', e.target.value)} required>
                  <option value="">Select package</option>
                  {packageOptions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label>Message <span className={styles.optional}>(optional)</span></label>
                <textarea
                  placeholder="Tell us more about your event, venue, or special requests..."
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                />
              </div>

              <button type="submit" className={styles.submit} disabled={loading}>
                {loading ? 'Sending...' : 'Send Inquiry →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}