import React from 'react';
import { LineChart, Activity, Crosshair, AlertTriangle, CheckCircle, XCircle, Lightbulb, BarChart3, Clock, Zap } from 'lucide-react';

export default function AlgorithmDeepDiveSection() {
  const retentionTips = [
    { label: "The Cold Open Hook", desc: "Start with a shocking statement or question in the first 3 seconds. No intros, no logos, no 'hey guys'. Drop the viewer directly into the most intense moment of your script.", color: "#00f3ff" },
    { label: "Pattern Interrupts", desc: "Every 60-90 seconds, change something: new visual, change in voice tone, on-screen text, zoom effect. The human brain habituates to stimuli — you must constantly disrupt it.", color: "#ff3366" },
    { label: "Open Loops", desc: "Tease upcoming information ('but what happened next changed everything') without resolving it. Stack 2-3 open loops simultaneously. The brain cannot leave without closure.", color: "#00ff88" },
    { label: "The Re-Hook", desc: "At the 30% mark of your video (3:00 in a 10-min video), drop a secondary hook that's even more compelling than the first. This catches the 40% of viewers considering leaving.", color: "#ffcc00" },
    { label: "Satisfying Payoff", desc: "Close ALL open loops in the final 20% of the video. A satisfied viewer watches to 90%+ completion and the algorithm identifies this as a 'must recommend' signal.", color: "#8a2be2" },
  ];

  const ctrFormulas = [
    { good: "Contrarian + Number: 'Stop Saving Money (Do This Instead)'", bad: "Generic: 'How to Save Money'", impact: "+4-6% CTR" },
    { good: "Threat + Curiosity: 'This Food Is Destroying Your Gut'", bad: "Boring: 'Healthy Eating Tips'", impact: "+5-8% CTR" },
    { good: "Specific Result: 'I Made $50K in 30 Days With This'", bad: "Vague: 'How to Make Money Online'", impact: "+3-5% CTR" },
  ];

  return (
    <section className="masterclass-section" id="algorithm-deep-dive" style={{ minHeight: '200vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(255, 204, 0, 0.1)', borderColor: 'rgba(255, 204, 0, 0.3)', color: '#ffcc00' }}>
          04.5 — The Math
        </div>

        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          
          <div style={{ paddingRight: '2rem' }}>
            <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
              Algorithm <br />Deep Dive
            </h2>
            <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
              The YouTube algorithm does not care about comments, shares, or subscribers. It cares about exactly two metrics: <strong>CTR</strong> and <strong>AWD</strong>. Master these two numbers and you can take any channel from 0 to 100K subscribers in under 6 months.
            </p>
            
            <div className="reveal delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f3ff', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  <Crosshair size={20} /> Click-Through Rate (CTR)
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  If your thumbnail and title can't get at least a <strong style={{ color: '#00f3ff' }}>6-8% CTR</strong> in the first 2 hours, the algorithm stops testing it. YouTube shows your video to a small test audience first (typically 200-500 impressions). If CTR is strong, it expands to 2,000 → 20,000 → 200,000+ impressions. <strong>Each CTR threshold is a gateway.</strong>
                </p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,243,255,0.05)', borderRadius: '12px', border: '1px solid rgba(0,243,255,0.15)' }}>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                    <strong style={{ color: '#00f3ff' }}>CTR Benchmarks:</strong> Below 4% = dead on arrival. 4-6% = slow growth. 6-8% = good performer. 8-12% = viral candidate. 12%+ = home run.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff3366', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  <Activity size={20} /> Average Watch Duration (AWD)
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Once clicked, can you hold them for <strong style={{ color: '#ff3366' }}>50%+</strong> of the video? If your 10-minute video gets 5.5 minutes of AWD, it will go viral. Period. YouTube's recommendation engine weighs AWD more heavily than any other metric because it directly correlates with session time (how long users stay on YouTube).
                </p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,51,102,0.05)', borderRadius: '12px', border: '1px solid rgba(255,51,102,0.15)' }}>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>
                    <strong style={{ color: '#ff3366' }}>AWD Benchmarks:</strong> Below 30% = terrible script. 30-40% = average. 40-50% = above average. 50-60% = excellent. 60%+ = top 1% (viral territory).
                  </p>
                </div>
              </div>

              {/* The Viral Formula */}
              <div className="glass-panel" style={{ padding: '2rem', borderTop: '3px solid #ffcc00', background: 'rgba(255,204,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Zap size={20} color="#ffcc00" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffcc00' }}>The Viral Formula</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, fontFamily: 'monospace', textAlign: 'center', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  CTR ≥ 8% + AWD ≥ 50% + US Traffic = <span style={{ color: '#00ff88', fontWeight: 700 }}>GUARANTEED VIRAL</span>
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', marginTop: '1rem', lineHeight: 1.5 }}>
                  When both conditions are met simultaneously, YouTube's algorithm enters what we call "exponential expansion mode" — your impressions double every 4-6 hours for 48-72 hours. This is when a video goes from 5K to 500K to 5M views.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-left delay-300" style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ background: 'rgba(20, 20, 25, 0.8)', border: '1px solid rgba(255, 204, 0, 0.2)', padding: '3rem 2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Retention Graph Matrix</span>
                <LineChart color="#ffcc00" />
              </div>

              {/* Fake Graph */}
              <div style={{ height: '200px', position: 'relative', width: '100%', marginBottom: '2rem' }}>
                {/* 50% threshold line */}
                <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', borderTop: '1px dashed rgba(255,255,255,0.2)' }}></div>
                <span style={{ position: 'absolute', top: '42%', right: 0, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>50% Virality Threshold</span>
                
                {/* Bad Video Line */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible' }}>
                  <path d="M0,0 Q10,60 20,70 T40,80 T100,90" fill="none" stroke="rgba(255, 51, 102, 0.5)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Good Video Line */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'visible' }}>
                  <path d="M0,0 Q10,20 30,30 T60,40 T100,20" fill="none" stroke="#00f3ff" strokeWidth="4" />
                </svg>

                {/* Labels on X-axis */}
                <div style={{ position: 'absolute', bottom: '-20px', left: 0, width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>
                  <span>0:00</span>
                  <span>2:30</span>
                  <span>5:00</span>
                  <span>7:30</span>
                  <span>10:00</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '12px', height: '3px', background: '#00f3ff' }}></div> 
                  Winning Script (62% AWD)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '12px', height: '3px', background: 'rgba(255, 51, 102, 0.5)', borderBottom: '1px dashed #ff3366' }}></div> 
                  Boring Script (22% AWD)
                </div>
              </div>

              {/* Graph Annotations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '1rem', background: 'rgba(0,243,255,0.05)', borderRadius: '8px', border: '1px solid rgba(0,243,255,0.1)' }}>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    <strong style={{ color: '#00f3ff' }}>Winning script:</strong> Hooks in 3 seconds, re-hooks at 3:00, maintains 60%+ retention through stacked open loops. This triggers the viral expansion cycle.
                  </p>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255,51,102,0.05)', borderRadius: '8px', border: '1px solid rgba(255,51,102,0.1)' }}>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    <strong style={{ color: '#ff3366' }}>Boring script:</strong> 60% of viewers leave in the first 30 seconds due to a weak intro. The algorithm kills this video after 500 impressions. Dead on arrival.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Retention Engineering Tips */}
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>The 5 Retention Engineering Rules</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Every script we write follows these exact rules. Violate even one and your retention graph will crash below the 50% threshold.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {retentionTips.map((tip, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', borderLeft: `4px solid ${tip.color}` }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px', 
                  background: `${tip.color}15`, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.25rem', fontWeight: 900, color: tip.color
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{tip.label}</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTR Title Formulas */}
        <div className="reveal glass-panel" style={{ padding: '3rem', background: 'rgba(5,5,10,0.8)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>CTR Title Formulas (Steal These)</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              The exact title patterns that consistently achieve 8%+ CTR in the faceless space.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {ctrFormulas.map((f, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '1.5rem', padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={18} color="#00ff88" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#00ff88', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Good Title</p>
                    <p style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.4 }}>{f.good}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <XCircle size={18} color="#ff3366" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#ff3366', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Bad Title</p>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.4 }}>{f.bad}</p>
                  </div>
                </div>
                <div style={{ padding: '0.5rem 1rem', background: 'rgba(0,255,136,0.1)', borderRadius: '100px', textAlign: 'center' }}>
                  <span style={{ color: '#00ff88', fontSize: '0.85rem', fontWeight: 700 }}>{f.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
