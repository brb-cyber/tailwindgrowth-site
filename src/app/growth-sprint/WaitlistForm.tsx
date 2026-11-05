'use client'

import { useState } from 'react'

// Same Formspree form as the /abc and /notes gates. Waitlist entries are
// tagged via _subject and source so they can be filtered in Formspree.
const FORMSPREE_URL = 'https://formspree.io/f/xvznzbgo'

const INPUT: React.CSSProperties = {
  flex: '1 1 220px',
  padding: '14px 18px',
  borderRadius: 'var(--r-pill)',
  border: '1.5px solid rgba(255,255,255,0.25)',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  outline: 'none',
  background: '#fff',
  color: 'var(--midnight)',
  minWidth: 0,
}

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          business,
          email,
          source: 'Built to Grow Sprint waitlist',
          _subject: `Built to Grow Sprint waitlist: ${business}`,
        }),
      })
      if (res.ok) {
        setDone(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setSubmitting(false)
  }

  if (done) {
    return (
      <p
        role="status"
        style={{ fontSize: 18, fontWeight: 600, color: 'var(--lime)', maxWidth: 520, margin: '0 auto' }}
      >
        You&apos;re on the list. We&apos;ll be in touch as soon as the next sprint opens.
      </p>
    )
  }

  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="text"
          required
          aria-label="Your name"
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={INPUT}
        />
        <input
          type="text"
          required
          aria-label="Business name"
          placeholder="Business name"
          autoComplete="organization"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          style={INPUT}
        />
        <input
          type="email"
          required
          aria-label="Email"
          placeholder="your@email.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ ...INPUT, flex: '1 1 100%' }}
        />
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-accent"
          style={{ fontSize: 17, padding: '17px 40px', marginTop: 8 }}
        >
          {submitting ? 'Sending…' : 'Join the waitlist'}
        </button>
      </form>
      {error && (
        <p role="alert" style={{ color: '#ffb4b4', marginTop: 12, fontSize: 14 }}>{error}</p>
      )}
      <p style={{ marginTop: 20, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
        No spam. Just the next sprint details when they&apos;re ready.
      </p>
    </div>
  )
}
