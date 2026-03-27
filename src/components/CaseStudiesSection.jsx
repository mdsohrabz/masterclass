import React from 'react';
import { Eye, TrendingUp, TrendingDown, Users, Flame } from 'lucide-react';

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "Case Study 1: The Dark Drama",
      revenue: "$12,450 / month",
      image: "/betrayal.png",
      description: "A channel focused purely on storytelling around betrayal, revenge, and mystery. Very low production cost, extremely high viewer retention.",
      metrics: [
        { label: "Est. RPM", value: "$14.50" },
        { label: "Avg View Dur.", value: "8:45" },
      ],
      color: "var(--accent-pink)"
    },
    {
      title: "Case Study 2: Midnight Cyberpunk Rain",
      revenue: "$9,200 / month",
      image: "/sleep.png",
      description: "8-hour long sleep soundscapes. The secret? Viewers leave this playing all night, driving watch-time through the roof with passive ad rolls.",
      metrics: [
        { label: "Est. RPM", value: "$8.20" },
        { label: "Avg View Dur.", value: "45:30" },
      ],
      color: "var(--accent-purple)"
    }
  ];

  return (
    <section className="masterclass-section" id="case-studies">
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
            Real Examples. Real Numbers.
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            Let's dissect two completely different channels dominating the faceless space right now.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {cases.map((cs, idx) => (
            <div key={idx} className={`grid-2 reveal delay-${(idx+1)*100}`} style={{ direction: idx % 2 === 1 ? 'rtl' : 'ltr' }}>
              
              <div style={{ direction: 'ltr', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-10%',
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                  background: `radial-gradient(circle, ${cs.color}20 0%, transparent 60%)`,
                  filter: 'blur(40px)',
                  zIndex: -1
                }}></div>
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  style={{ 
                    width: '100%', 
                    borderRadius: '20px', 
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${cs.color}40`,
                    transition: 'transform 0.5s ease'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0 2rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: `${cs.color}20`, color: cs.color, borderRadius: '100px', width: 'fit-content', fontWeight: 600 }}>
                  <Flame size={18} /> PROVEN MODEL
                </div>
                
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }}>{cs.title}</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {cs.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '1.5rem', borderLeft: `3px solid ${cs.color}` }}>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{m.label}</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{m.value}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Monthly</span>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: '#00ff88' }}>{cs.revenue}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
