'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ContactSection.module.css'
import { FaInstagram, FaFacebookMessenger, FaTiktok } from 'react-icons/fa6'

const eventTypes = ['Wedding', 'Birthday / Debut', 'Corporate Event', 'Graduation', 'Prom / Cotillion', 'Other']
const packageOptions = ['Classic (₱5,500 / 3hrs)', 'Gold (₱9,500 / 5hrs)', 'Prismo Elite (₱16,000 / 8hrs)', 'Custom Quote']

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  package: string
  message: string
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '',
    eventType: '', eventDate: '', package: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000)) // replace with actual API call
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {/* Left — Contact Info */}
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Contact Details</h2>

          <div className={styles.detail}>
            <div className={styles.detailIcon}><FaInstagram /></div>
            <div>
              <div className={styles.detailLabel}>Instagram</div>
              <a href="https://instagram.com/prismolens_ofc" target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
                prismolens_ofc
              </a>
            </div>
          </div>

          <div className={styles.detail}>
            <div className={styles.detailIcon}><FaTiktok /></div>
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
            <div className={styles.detailIcon}><FaFacebookMessenger /></div>
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
                  <input type="email" placeholder="juan@email.com" value={form.email} onChange={e => update('email', e.target.value)} required />
                </div>
                <div className={styles.field}>
                  <label>Phone / Viber</label>
                  <input type="text" placeholder="+63 9XX XXX XXXX" value={form.phone} onChange={e => update('phone', e.target.value)} required />
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