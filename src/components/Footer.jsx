'use client'
const cols = [
  { head: 'Company',  links: ['About us','Careers','Blog','Press','Contact'] },
  { head: 'Programs', links: ['AI & ML','Data Science','Product','Leadership','Tech'] },
  { head: 'Enterprise',links: ['How it works','Case studies','Pricing','API access','Partners'] },
  { head: 'Support',  links: ['Help center','Documentation','System status','Community','Legal'] },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f2e', color: '#fff', padding: '60px 24px 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }} className="footer-grid">
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#2563eb,#06b6d4)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontFamily: 'Bricolage Grotesque,sans-serif', fontWeight: 800, fontSize: 16 }}>A</span>
              </div>
              <span style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontWeight: 700, fontSize: 17 }}>Accredian <span style={{ color: '#06b6d4' }}>Enterprise</span></span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 240, marginBottom: 20 }}>
              Empowering India's workforce with world-class learning programs. Trusted by 500+ companies.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['LinkedIn','Twitter','YouTube','Instagram'].map(s => (
                <div key={s} style={{ width: 34, height: 34, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(37,99,235,0.3)'; e.currentTarget.style.color='#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='rgba(255,255,255,0.5)'; }}
                >
                  {s[0]}
                </div>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.head}>
              <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, letterSpacing: '0.04em' }}>{col.head}</div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color='#06b6d4'}
                  onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.45)'}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>© 2025 Accredian. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.3)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
