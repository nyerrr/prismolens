'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatPage.module.css'

type Message = {
  id: number
  role: 'user' | 'bot'
  text: string
  time: string
}

const suggestions = [
  'What packages do you offer?',
  'How do I book a date?',
  'What areas do you cover?',
  'What is included in Gold?',
  'How much is an extra hour?',
  'Do you do same-day bookings?',
]

function getTime() {
  return new Date().toLocaleTimeString('en-PH', { hour: '2-digit', minute: '2-digit' })
}

const welcome: Message = {
  id: 0,
  role: 'bot',
  text: "Hi! 👋 I'm Prisma, the PrismoLens virtual concierge. I can help you with packages, pricing, availability, and how to book. What would you like to know?",
  time: getTime(),
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([welcome])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return

    const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim(), time: getTime() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const history = [...messages, userMsg]
        .filter(m => m.id !== 0)
        .map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      })

      const data = await res.json()
      const botMsg: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: data.reply || "Sorry, I couldn't get a response. Please try again!",
        time: getTime(),
      }
      setMessages(prev => [...prev, botMsg])
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'bot',
        text: "Oops! Something went wrong. Please message us directly at hello@prismolens.ph or call +63 917 123 4567 📞",
        time: getTime(),
      }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.avatar}>✨</div>
        <div>
          <h1 className={styles.title}>Prisma — PrismoLens AI</h1>
          <div className={styles.status}>
            <span className={styles.dot} />
            Online · Replies instantly
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Messages */}
        <div className={styles.messages}>
          {messages.map(msg => (
            <div key={msg.id} className={`${styles.msg} ${msg.role === 'user' ? styles.user : styles.bot}`}>
              {msg.role === 'bot' && <div className={styles.botName}>Prisma ✦</div>}
              <div className={styles.bubble}>{msg.text}</div>
              <div className={styles.time}>{msg.time}</div>
            </div>
          ))}

          {loading && (
            <div className={`${styles.msg} ${styles.bot}`}>
              <div className={styles.botName}>Prisma ✦</div>
              <div className={styles.typing}>
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        <div className={styles.suggestions}>
          {suggestions.map(s => (
            <button key={s} className={styles.suggestion} onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className={styles.inputRow}>
          <textarea
            ref={inputRef}
            className={styles.input}
            placeholder="Ask about packages, booking, availability..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            rows={3}
          />
          <button
            className={styles.send}
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}