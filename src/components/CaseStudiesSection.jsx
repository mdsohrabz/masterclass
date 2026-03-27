import React from 'react';
import { Eye, TrendingUp, TrendingDown, Users, Flame, Calendar, BarChart3, Clock, Target, Zap } from 'lucide-react';

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "Case Study 1: The Dark Drama",
      channel: "@HiddenBetrayal",
      revenue: "$12,450 / month",
      subs: "142K subscribers",
      age: "8 months old",
      videos: "87 videos",
      image: "/betrayal.png",
      description: "A channel focused purely on storytelling around betrayal, revenge, and mystery. Very low production cost — entirely AI-generated scripts with stock footage overlays. The key? Every video uses the 3-Act hook structure we teach, resulting in an abnormally high 62% average retention rate.",
      strategy: "This channel uploads 3x/week, each video is 12-18 minutes. They use the 'stacking cliffhangers' technique — every 90 seconds there's a mini revelation that prevents the viewer from clicking away. The female 35-65 demographic they target has the highest ad engagement rate on YouTube.",
      metrics: [
        { label: "Est. RPM", value: "$14.50", icon: <BarChart3 size={16} /> },
        { label: "Avg View Duration", value: "8:45", icon: <Clock size={16} /> },
        { label: "CTR", value: "9.2%", icon: <Target size={16} /> },
        { label: "Monthly Views", value: "858K", icon: <Eye size={16} /> },
      ],
      keyInsight: "Their #1 video 'My Husband Had a Secret Family for 15 Years' has 2.4M views. It earned an estimated $34,800 from a single upload. The production cost? $0 — fully AI-generated.",
      color: "var(--accent-pink)"
    },
    {
      title: "Case Study 2: Midnight Cyberpunk Rain",
      channel: "@DeepSleepZone",
      revenue: "$9,200 / month",
      subs: "89K subscribers",
      age: "11 months old",
      videos: "34 videos",
      image: "/sleep.png",
      description: "8-hour long sleep soundscapes with only 34 total videos. The secret? Viewers leave this playing ALL NIGHT, driving watch-time through the roof with passive ad rolls every 8 minutes. One video generates the same watch time as 50 regular videos.",
      strategy: "Each video is 8 hours long with mid-roll ads placed every 8 minutes. While sleeping viewers can't skip ads, YouTube serves 55-60 ads per video playback. At $30+ CPM for the relaxation/wellness niche targeting US insomniacs, the math is explosive.",
      metrics: [
        { label: "Est. RPM", value: "$8.20", icon: <BarChart3 size={16} /> },
        { label: "Avg View Duration", value: "45:30", icon: <Clock size={16} /> },
        { label: "CTR", value: "5.8%", icon: <Target size={16} /> },
        { label: "Monthly Views", value: "1.12M", icon: <Eye size={16} /> },
      ],
      keyInsight: "With only 34 videos (vs 87 for the drama channel), this channel earns almost the same revenue. Each video takes ~30 minutes to produce using free ambient sound libraries and AI-generated loop visuals. The ROI per hour of work is unmatched.",
      color: "var(--accent-purple)"
    },
    {
      title: "Case Study 3: The Wealth Algorithm",
      channel: "@WealthMindsetUS",
      revenue: "$18,700 / month",
      subs: "231K subscribers",
      age: "14 months old",
      videos: "112 videos",
      image: "/finance.png",
      description: "A personal finance faceless channel that absolutely dominates the US algorithm. Every video follows the exact formula: shocking wealth stat → contrarian advice → actionable steps. Their RPM is the highest we've documented because financial advertisers bid $40-$80 CPM for this demographic.",
      strategy: "They release 2 videos/week, each meticulously scripted to include at least 5 'pattern interrupts' per video. The channel uses a premium ElevenLabs voice clone (deep authoritative US male) which builds parasocial trust. Their thumbnail formula: large text + cash visual + emotional face icon.",
      metrics: [
        { label: "Est. RPM", value: "$22.30", icon: <BarChart3 size={16} /> },
        { label: "Avg View Duration", value: "6:20", icon: <Clock size={16} /> },
        { label: "CTR", value: "11.4%", icon: <Target size={16} /> },
        { label: "Monthly Views", value: "838K", icon: <Eye size={16} /> },
      ],
      keyInsight: "Their video 'Stop Saving Money (Do This Instead)' went viral with 4.1M views. The contrarian title drove a 14% CTR. Estimated earnings from that single video: $91,430. Total production cost: $0 with free-tier AI tools.",
      color: "#00ff88"
    }
  ];

  return (
    <section className="masterclass-section" id="case-studies" style={{ minHeight: '250vh' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
            Real Examples. Real Numbers.
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            Let's dissect three completely different channels dominating the faceless space right now. We'll break down their exact strategies, revenue numbers, and the specific techniques you can steal immediately.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
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
                {/* Channel Info Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(0,0,0,0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  border: `1px solid ${cs.color}40`
                }}>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, color: cs.color }}>{cs.channel}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>{cs.subs}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>{cs.age}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>{cs.videos}</span>
                  </div>
                </div>
              </div>

              <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '0 1.5rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: `${cs.color}20`, color: cs.color, borderRadius: '100px', width: 'fit-content', fontWeight: 600 }}>
                  <Flame size={18} /> PROVEN MODEL
                </div>
                
                <h3 style={{ fontSize: '2.25rem', fontWeight: 800 }}>{cs.title}</h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {cs.description}
                </p>

                {/* Strategy Deep Dive */}
                <div style={{ 
                  padding: '1.25rem', 
                  background: `${cs.color}08`, 
                  borderRadius: '12px', 
                  border: `1px solid ${cs.color}20` 
                }}>
                  <p style={{ color: cs.color, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Zap size={14} /> Strategy Breakdown
                  </p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {cs.strategy}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '1.25rem', borderLeft: `3px solid ${cs.color}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ color: cs.color }}>{m.icon}</span>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{m.label}</p>
                      </div>
                      <p style={{ fontSize: '1.3rem', fontWeight: 800 }}>{m.value}</p>
                    </div>
                  ))}
                </div>

                {/* Key Insight */}
                <div style={{ 
                  padding: '1.5rem', 
                  background: 'rgba(0,255,136,0.05)', 
                  borderRadius: '12px', 
                  border: '1px solid rgba(0,255,136,0.2)' 
                }}>
                  <p style={{ color: '#00ff88', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    💡 Key Insight
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {cs.keyInsight}
                  </p>
                </div>

                {/* Revenue Bar */}
                <div style={{ marginTop: '0.5rem', padding: '1.5rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
