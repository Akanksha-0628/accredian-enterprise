'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Programs',     href: '#programs' },
  { label: 'Features',     href: '#features' },
  { label: 'Partners',     href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(37,99,235,0.10)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#2563eb,#06b6d4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,0.35)' }}>
            <span style={{ color: '#fff', fontFamily: 'Bricolage Grotesque,sans-serif', fontWeight: 800, fontSize: 16 }}>A</span>
          </div>
          <span style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontWeight: 700, fontSize: 17, color: scrolled ? '#0a0f2e' : '#fff' }}>
            Accredian <span style={{ color: '#06b6d4' }}>Enterprise</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: 14, fontWeight: 500, color: scrolled ? '#374151' : 'rgba(255,255,255,0.85)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#2563eb'}
              onMouseLeave={e => e.target.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.85)'}
            >{l.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="hidden-mobile">
          <a href="#contact" style={{ fontSize: 14, fontWeight: 600, color: scrolled ? '#2563eb' : 'rgba(255,255,255,0.9)', textDecoration: 'none', padding: '8px 16px' }}>Login</a>
          <a href="#contact" className="btn-shimmer" style={{ fontSize: 14, padding: '9px 22px', textDecoration: 'none', borderRadius: 12 }}>Get started →</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="show-mobile">
          <div style={{ width: 22, height: 2, background: scrolled ? '#0a0f2e' : '#fff', marginBottom: 5, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: scrolled ? '#0a0f2e' : '#fff', marginBottom: 5, opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
          <div style={{ width: 22, height: 2, background: scrolled ? '#0a0f2e' : '#fff', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '16px 24px 20px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '10px 0', fontSize: 15, fontWeight: 500, color: '#374151', textDecoration: 'none', borderBottom: '1px solid #f3f4f6' }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-shimmer" onClick={() => setOpen(false)}
            style={{ display: 'block', textAlign: 'center', marginTop: 14, padding: '11px', textDecoration: 'none', fontSize: 14 }}>
            Get started →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </nav>
  )
}
