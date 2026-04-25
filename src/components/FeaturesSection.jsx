'use client'
const features = [
  { icon: '🗺️', title: 'Custom learning paths',    desc: 'Programs aligned to your company goals, team roles, and specific skill gaps — not generic content.', color: '#eff6ff', accent: '#2563eb' },
  { icon: '🎓', title: 'IIT & IIM faculty',         desc: 'Learn from professors and practitioners from India\'s premier institutions and top MNCs.', color: '#f0fdf4', accent: '#16a34a' },
  { icon: '📊', title: 'Real-time L&D analytics',   desc: 'Track learner progress, engagement, completion rates and ROI with a dedicated dashboard.', color: '#faf5ff', accent: '#7c3aed' },
  { icon: '🏆', title: 'Industry certifications',   desc: 'Globally recognized credentials your employees can proudly showcase on their profiles.', color: '#fffbeb', accent: '#d97706' },
  { icon: '🤝', title: 'Dedicated success manager', desc: 'A dedicated account manager who ensures your learning program delivers real business outcomes.', color: '#fff1f2', accent: '#e11d48' },
  { icon: '🌐', title: 'Hybrid delivery',           desc: 'Mix of live cohort sessions, self-paced modules, and recorded classes — fits every schedule.', color: '#ecfeff', accent: '#0891b2' },
]

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label"><span className="dot-divider"/>Why choose us</span>
          <h2 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0a0f2e', marginTop: 14, marginBottom: 14 }}>
            Everything your L&D team needs
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            From custom paths to real-time analytics — we handle the entire enterprise upskilling journey.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {features.map(f => (
            <div key={f.title} className="card" style={{ padding: 28 }}>
              <div style={{ width: 52, height: 52, background: f.color, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 18, fontWeight: 700, color: '#0a0f2e', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>{f.desc}</p>
              <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6, color: f.accent, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
