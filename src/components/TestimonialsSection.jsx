'use client'
const testimonials = [
  { name: 'Priya Sharma',    role: 'L&D Head, Infosys',     avatar: 'PS', color: '#f87171', text: 'Accredian transformed our upskilling program completely. The IIT faculty quality is unmatched, and our team retention improved by 40% after the AI cohort.' },
  { name: 'Rohit Mehra',     role: 'VP Engineering, Wipro',  avatar: 'RM', color: '#60a5fa', text: 'The custom learning paths are genuinely tailored — not just repackaged content. Our engineers went from zero to deploying AI tools in just 6 weeks.' },
  { name: 'Sneha Patel',     role: 'CHRO, PhonePe',          avatar: 'SP', color: '#34d399', text: 'Onboarding was seamless, the dashboard is powerful, and the dedicated success manager felt like an extension of our own HR team. Highly recommended.' },
  { name: 'Amit Joshi',      role: 'CTO, Razorpay',          avatar: 'AJ', color: '#fb923c', text: 'We\'ve tried other platforms but nothing comes close to Accredian for enterprise. The cohort model keeps engagement high and results are measurable.' },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label"><span className="dot-divider"/>Testimonials</span>
          <h2 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0a0f2e', marginTop: 14, marginBottom: 14 }}>
            Loved by L&D leaders
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.7 }}>Real results from real companies across India.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {testimonials.map(t => (
            <div key={t.name} className="card" style={{ padding: 28 }}>
              {/* Stars */}
              <div style={{ color: '#f59e0b', fontSize: 14, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #f1f5f9', paddingTop: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 14, fontWeight: 700, color: '#0a0f2e' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
