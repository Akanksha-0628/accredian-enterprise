'use client'
const stats = [
  { n: '500+',   l: 'Enterprise clients',   icon: '🏢' },
  { n: '50,000+',l: 'Learners trained',     icon: '🎓' },
  { n: '95%',    l: 'Satisfaction rate',    icon: '⭐' },
  { n: '200+',   l: 'Expert mentors',       icon: '👨‍🏫' },
  { n: '30+',    l: 'Programs offered',     icon: '📚' },
  { n: '48hrs',  l: 'Avg support response', icon: '⚡' },
]

export default function StatsBar() {
  return (
    <section style={{ background: 'linear-gradient(90deg,#0a0f2e,#1e3a8a,#0a0f2e)', padding: '36px 24px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map(s => (
            <div key={s.l}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
