'use client'
import { useState } from 'react'

const programs = ['Applied AI for Business','Data Analytics & Visualization','Product Management','Leadership & People Management','Business Strategy & Finance','Cloud & DevOps','Other']
const sizes    = ['1–50','51–200','201–500','500+']

export default function LeadForm() {
  const [form,    setForm]    = useState({ firstName:'', lastName:'', email:'', company:'', phone:'', teamSize:'', program:'', message:'' })
  const [loading, setLoading] = useState(false)
  const [toast,   setToast]   = useState(null)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const showToast = (msg, ok = true) => {
    setToast({ msg, ok })
    setTimeout(() => setToast(null), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.firstName || !form.company) {
      showToast('Please fill in required fields.', false)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        showToast('🎉 Request submitted! We\'ll reach out in 24hrs.')
        setForm({ firstName:'', lastName:'', email:'', company:'', phone:'', teamSize:'', program:'', message:'' })
      } else {
        showToast('Something went wrong. Please try again.', false)
      }
    } catch {
      showToast('Network error. Please try again.', false)
    }
    setLoading(false)
  }

  return (
    <section id="contact" style={{ padding: '80px 24px', background: 'linear-gradient(135deg,#0a0f2e 0%,#1e3a8a 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(6,182,212,0.06)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 300, height: 300, background: 'rgba(245,158,11,0.05)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }} className="contact-grid">
        {/* Left text */}
        <div>
          <span className="section-label" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', color: '#06b6d4' }}>
            <span className="dot-divider" style={{ background: '#06b6d4' }} />
            Get in touch
          </span>
          <h2 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#fff', marginTop: 16, marginBottom: 16, lineHeight: 1.15 }}>
            Ready to upskill<br />your team?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 32 }}>
            Tell us about your team and we&apos;ll design a custom learning path that delivers real results.
          </p>

          {[
            { icon: '⚡', title: 'Fast response',    desc: 'Our team responds within 24 hours, always.' },
            { icon: '🎯', title: 'Custom proposal',   desc: 'We\'ll send a tailored program proposal for your team.' },
            { icon: '🤝', title: 'Dedicated manager', desc: 'A success manager assigned on day one.' },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontWeight: 700, color: '#fff', fontSize: 14 }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 2 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 24, padding: 36, boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}>
          <h3 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 22, fontWeight: 800, color: '#0a0f2e', marginBottom: 6 }}>Request a demo</h3>
          <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 24 }}>Fill in your details and we&apos;ll be in touch within 24 hours.</p>

          {/* Name row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>First name *</label>
              <input className="inp" placeholder="Rahul" value={form.firstName} onChange={e => update('firstName', e.target.value)} required />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Last name</label>
              <input className="inp" placeholder="Sharma" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
            </div>
          </div>

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Work email *</label>
            <input className="inp" type="email" placeholder="rahul@company.com" value={form.email} onChange={e => update('email', e.target.value)} required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Company name *</label>
              <input className="inp" placeholder="Acme Corp" value={form.company} onChange={e => update('company', e.target.value)} required />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Phone number</label>
              <input className="inp" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Team size</label>
              <select className="inp" value={form.teamSize} onChange={e => update('teamSize', e.target.value)} style={{ appearance: 'auto' }}>
                <option value="">Select...</option>
                {sizes.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Interested in</label>
              <select className="inp" value={form.program} onChange={e => update('program', e.target.value)} style={{ appearance: 'auto' }}>
                <option value="">Select...</option>
                {programs.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 5 }}>Message (optional)</label>
            <textarea className="inp" rows={3} placeholder="Tell us about your team's learning goals..." value={form.message} onChange={e => update('message', e.target.value)} style={{ resize: 'vertical' }} />
          </div>

          <button type="submit" className="btn-shimmer" disabled={loading} style={{ width: '100%', padding: '13px', fontSize: 15, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Submitting...' : 'Submit request →'}
          </button>

          <p style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center', marginTop: 12 }}>
            By submitting, you agree to our Privacy Policy. No spam, ever.
          </p>
        </form>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast" style={{ background: toast.ok ? '#0a0f2e' : '#dc2626' }}>
          {toast.msg}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
