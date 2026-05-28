'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import styles from './Testimonials.module.css'

type Review = {
  id: string
  name: string
  event: string
  text: string
  rating: number
}


export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', event: '', text: '', rating: 5 })

  useEffect(() => { fetchReviews() }, [])

  async function fetchReviews() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false })
    if (!error && data) setReviews(data)
    setLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.event || !form.text) return
    const { error } = await supabase
      .from('testimonials')
      .insert({ name: form.name, event: form.event, text: form.text, rating: form.rating })
    if (!error) {
      setSubmitted(true)
      setForm({ name: '', event: '', text: '', rating: 5 })
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.title}>Reviews:</p>
        </div>

        {loading ? (
          <p className={styles.loading}>Loading reviews...</p>
        ) : (
          <div className={styles.grid}>
            {reviews.map(({ id, name, event, text, rating }) => (
              <div key={id} className={styles.card}>
                <div className={styles.stars}>{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
                <p className={styles.text}>"{text}"</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{name.slice(0, 2).toUpperCase()}</div>
                  <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.event}>{event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.formWrap}>
          <h3 className={styles.formTitle}>Leave a Review</h3>
          {submitted ? (
            <p className={styles.thanks}>✦ Thanks! Your review is pending approval.</p>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Juan dela Cruz"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Event Type & Location</label>
                  <input
                    type="text"
                    placeholder="Wedding · Tagaytay"
                    value={form.event}
                    onChange={e => setForm({ ...form, event: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label>Rating</label>
                <div className={styles.ratingRow}>
                  {[1, 2, 3, 4, 5].map(n => (
                    <button
                      type="button"
                      key={n}
                      className={`${styles.star} ${form.rating >= n ? styles.starActive : ''}`}
                      onClick={() => setForm({ ...form, rating: n })}
                    >★</button>
                  ))}
                </div>
              </div>
              <div className={styles.field}>
                <label>Your Review</label>
                <textarea
                  placeholder="Tell us about your experience..."
                  value={form.text}
                  onChange={e => setForm({ ...form, text: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>Submit Review</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}