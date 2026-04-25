'use client'
export default function HeroSection() {
  return (
    <section className="hero-bg noise" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 68 }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '15%', right: '5%', width: 320, height: 320, background: 'rgba(6,182,212,0.08)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '8%', width: 240, height: 240, background: 'rgba(245,158,11,0.06)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="hero-grid">

          {/* LEFT */}
          <div>
            <div className="anim-fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
              <span className="live-dot" />
              <span style={{ color: '#06b6d4', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em' }}>500+ Enterprise Partners Active</span>
            </div>

            <h1 className="anim-fade-up d-100" style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, lineHeight: 1.1, color: '#fff', marginBottom: 20 }}>
              Upskill your<br />
              workforce with<br />
              <span className="grad-text">world-class</span> programs
            </h1>

            <p className="anim-fade-up d-200" style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
              Partner with Accredian to deliver cutting-edge learning — AI, Data, Product, Leadership — all tailored to your team&apos;s goals and delivered by IIT/IIM faculty.
            </p>

            <div className="anim-fade-up d-300" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
              <a href="#contact" className="btn-shimmer" style={{ fontSize: 15, padding: '13px 28px', textDecoration: 'none', display: 'inline-block' }}>
                Schedule a demo →
              </a>
              <a href="#programs" style={{ fontSize: 15, fontWeight: 600, padding: '13px 28px', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 12, color: '#fff', textDecoration: 'none', transition: 'all 0.2s', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.05)'}
              >
                Explore programs
              </a>
            </div>

            {/* Mini stats */}
            <div className="anim-fade-up d-400" style={{ display: 'flex', gap: 32, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28 }}>
              {[
                { n: '50K+',  l: 'Learners trained' },
                { n: '95%',   l: 'Satisfaction rate' },
                { n: '200+',  l: 'Expert mentors' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 26, fontWeight: 800, color: '#fff' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — floating card */}
          <div className="anim-fade-up d-300 anim-float hero-right-card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Main card */}
            <div className="glass-card" style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: '#06b6d4', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Featured program</div>
                  <div style={{ fontFamily: 'Bricolage Grotesque,sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>Applied AI for Business</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>6 weeks · Cohort-based · IIT Faculty</div>
                </div>
                <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#2563eb,#06b6d4)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🤖</div>
              </div>

              {/* Progress */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Enrollment progress</span>
                  <span style={{ fontSize: 12, color: '#06b6d4', fontWeight: 600 }}>72%</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 100, height: 6, overflow: 'hidden' }}>
                  <div className="progress-bar" style={{ width: '72%', height: '100%' }} />
                </div>
              </div>

              {['Generative AI & LLMs', 'Automation for teams', 'Capstone project'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 18, height: 18, background: 'rgba(6,182,212,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#06b6d4', fontSize: 10 }}>✓</span>
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                </div>
              ))}

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 16, paddingTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                  {['#f87171','#fb923c','#34d399','#60a5fa'].map((c,i) => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: c, border: '2px solid rgba(10,15,46,0.8)', marginLeft: i > 0 ? -8 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff' }}>
                      {['R','S','A','K'][i]}
                    </div>
                  ))}
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(10,15,46,0.8)', marginLeft: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>+8</div>
                </div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>240 enrolled this batch</span>
              </div>
            </div>

            {/* Small notification card */}
            <div className="glass-card" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, background: 'rgba(34,197,94,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏆</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Rahul K. just got certified</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Data Science Professional · 2 min ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-right-card { display: none !important; } }
      `}</style>
    </section>
  )
}
