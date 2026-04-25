'use client'
const programs = [
  { tag: 'AI & ML',     tagBg: '#dbeafe', tagColor: '#1d4ed8', icon: '🤖', title: 'Applied AI for Business',       desc: 'Generative AI, LLMs, automation strategies and real-world enterprise use cases.',    dur: '6 weeks', fmt: 'Cohort-based', lvl: 'All levels' },
  { tag: 'Data Science',tagBg: '#d1fae5', tagColor: '#065f46', icon: '📊', title: 'Data Analytics & Visualization', desc: 'SQL, Python, Power BI and data storytelling for smarter business decisions.',          dur: '8 weeks', fmt: 'Self-paced + Live', lvl: 'Intermediate' },
  { tag: 'Product',     tagBg: '#ede9fe', tagColor: '#5b21b6', icon: '🗺️', title: 'Product Management Essentials',  desc: 'Roadmaps, prioritization, stakeholder management and go-to-market strategies.',      dur: '8 weeks', fmt: 'Cohort-based', lvl: 'All levels' },
  { tag: 'Leadership',  tagBg: '#fef3c7', tagColor: '#92400e', icon: '🏆', title: 'Leadership & People Management', desc: 'Build high-performing teams, lead with empathy, and drive organizational change.',    dur: '4 weeks', fmt: 'Live sessions', lvl: 'Senior' },
  { tag: 'Strategy',    tagBg: '#fce7f3', tagColor: '#9d174d', icon: '💼', title: 'Business Strategy & Finance',   desc: 'Financial modeling, competitive analysis and strategic decision-making frameworks.', dur: '6 weeks', fmt: 'Cohort-based', lvl: 'Advanced' },
  { tag: 'Tech',        tagBg: '#cffafe', tagColor: '#0e7490', icon: '☁️', title: 'Cloud & DevOps Fundamentals',   desc: 'AWS, Azure, CI/CD pipelines and modern infrastructure for engineering teams.',         dur: '10 weeks',fmt: 'Self-paced', lvl: 'Intermediate' },
]

export default function ProgramsSection() {
  return (
    <section id="programs" style={{ padding: '80px 24px', background: '#f8faff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label"><span className="dot-divider"/>Programs</span>
          <h2 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: '#0a0f2e', marginTop: 14, marginBottom: 14 }}>
            Popular enterprise programs
          </h2>
          <p style={{ fontSize: 16, color: '#6b7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Curated for modern workplaces. Taught by IIT/IIM faculty and industry experts.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 20, marginBottom: 40 }}>
          {programs.map(p => (
            <div key={p.title} className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ background: p.tagBg, color: p.tagColor, fontSize: 11, fontWeight: 700, padding: '5px 12px', borderRadius: 100, letterSpacing: '0.04em' }}>{p.tag}</span>
                <span style={{ fontSize: 26 }}>{p.icon}</span>
              </div>
              <h3 style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 17, fontWeight: 700, color: '#0a0f2e', marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{p.desc}</p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[`⏱ ${p.dur}`, p.fmt, p.lvl].map(tag => (
                  <span key={tag} style={{ background: '#f8faff', border: '1px solid #e2e8f0', fontSize: 12, color: '#64748b', padding: '4px 10px', borderRadius: 8, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#contact" className="btn-shimmer" style={{ display: 'inline-block', fontSize: 15, padding: '13px 32px', textDecoration: 'none' }}>
            View all programs →
          </a>
        </div>
      </div>
    </section>
  )
}
