'use client'
const partners = ['Google','Microsoft','Amazon','Infosys','Wipro','TCS','Flipkart','Swiggy','PhonePe','Razorpay','Zomato','HDFC Bank','Paytm','Byju\'s','Meesho','Ola','MakeMyTrip','Zerodha']

export default function PartnersSection() {
  const doubled = [...partners, ...partners]
  return (
    <section id="partners" style={{ padding: '64px 0', background: '#f8faff', borderTop: '1px solid rgba(37,99,235,0.08)', borderBottom: '1px solid rgba(37,99,235,0.08)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 24px' }}>
        <span className="section-label">
          <span className="dot-divider" />
          Trusted by
        </span>
        <h2 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: '#0a0f2e', marginTop: 12 }}>
          Companies that rely on Accredian
        </h2>
      </div>

      <div className="marquee-wrap" style={{ position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#f8faff,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#f8faff,transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div key={i} style={{ flexShrink: 0, background: '#fff', border: '1.5px solid rgba(37,99,235,0.12)', borderRadius: 14, padding: '10px 22px', fontSize: 14, fontWeight: 600, color: '#374151', whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', cursor: 'default', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.color = '#2563eb'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.12)'; e.currentTarget.style.color = '#374151'; }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
