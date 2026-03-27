import React from 'react';
import { DollarSign, ShieldCheck, TrendingUp, BarChart3, Clock, Users, Eye, Zap } from 'lucide-react';

export default function MonetizationProofSection() {
  const milestones = [
    { month: "Month 1", revenue: "$0", desc: "Uploading 3x/week. Building initial library of 12 videos. Channel genesis protocol active.", color: "var(--text-tertiary)" },
    { month: "Month 2", revenue: "$85", desc: "First monetization check. 3 videos catching algorithm attention. Learning from analytics.", color: "var(--text-tertiary)" },
    { month: "Month 3", revenue: "$420", desc: "Hit 1,000 subs & 4,000 hours. AdSense approved. First real revenue flowing.", color: "#ffcc00" },
    { month: "Month 4", revenue: "$1,850", desc: "2 videos went semi-viral (50K+ each). RPM stabilized at $14+. Growth compounding.", color: "#00f3ff" },
    { month: "Month 5", revenue: "$4,200", desc: "Algorithm consistently pushing content. Back-catalog generating passive income daily.", color: "#00ff88" },
    { month: "Month 6", revenue: "$8,500+", desc: "Full flywheel activated. 1 viral video ($2M+ views). Multiple revenue streams active.", color: "#00ff88" },
  ];

  return (
    <section className="masterclass-section" id="monetization-proof" style={{ position: 'relative', minHeight: '200vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="reveal text-gradient-green" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem', background: 'linear-gradient(135deg, #00ff88, #00aa55)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The Monetization Reality
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            This is what a successful US faceless channel dashboard looks like after just 6 months. These are real metrics from channels using our exact system — no cherry-picking, no outliers.
          </p>
        </div>

        {/* Dashboard Screenshot */}
        <div className="reveal delay-200" style={{
          maxWidth: '900px',
          margin: '0 auto 6rem',
          position: 'relative'
        }}>
          {/* Decorative Glow Behind Image */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '105%',
            height: '105%',
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 136, 0.2) 0%, transparent 70%)',
            zIndex: 0,
            filter: 'blur(30px)'
          }}></div>

          <div style={{ position: 'relative', zIndex: 1, borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,255,136,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <img src="/dashboard.png" alt="YouTube Analytics Dashboard showing high revenue" style={{ width: '100%', display: 'block' }} />
            
            {/* Overlay Info Box */}
            <div className="glass-panel" style={{ 
              position: 'absolute', 
              bottom: '2rem', 
              right: '2rem', 
              padding: '1.5rem', 
              maxWidth: '300px',
              border: '1px solid rgba(0, 255, 136, 0.5)',
              background: 'rgba(0,0,0,0.8)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                <ShieldCheck size={20} />
                <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>VERIFIED EARNINGS</span>
              </div>
              <p style={{ color: '#fff', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Notice the upward trajectory. This isn't luck. This is the result of targeting premium US demographics with high-retention scripts.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto 6rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>
            The Numbers After 6 Months
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <DollarSign size={24} />, label: "Total Revenue", value: "$15,055", subtitle: "Cumulative 6 months", color: "#00ff88" },
              { icon: <Eye size={24} />, label: "Total Views", value: "1.2M", subtitle: "Across 72 videos", color: "#00f3ff" },
              { icon: <Users size={24} />, label: "Subscribers", value: "48.2K", subtitle: "100% organic growth", color: "#8a2be2" },
              { icon: <BarChart3 size={24} />, label: "Average RPM", value: "$16.80", subtitle: "Finance niche, US traffic", color: "#ffcc00" },
              { icon: <Clock size={24} />, label: "Avg Watch Duration", value: "6:42", subtitle: "On 10-min average videos", color: "#ff3366" },
              { icon: <TrendingUp size={24} />, label: "Month 6 Revenue", value: "$8,500", subtitle: "And still accelerating", color: "#ff6600" },
            ].map((stat, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', borderTop: `3px solid ${stat.color}` }}>
                <div style={{ color: stat.color, marginBottom: '0.75rem' }}>{stat.icon}</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{stat.label}</p>
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: stat.color, marginBottom: '0.25rem' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Timeline */}
        <div className="reveal" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.75rem' }}>
            The 6-Month Revenue Timeline
          </h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', fontSize: '1rem' }}>
            Here's the realistic month-by-month progression following our system. No hype — just data.
          </p>
          
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ 
              position: 'absolute', 
              left: '24px', 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              background: 'rgba(255,255,255,0.08)' 
            }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Timeline Dot */}
                  <div style={{ 
                    width: '50px', height: '50px', borderRadius: '50%', 
                    background: `${m.color}15`, 
                    border: `2px solid ${m.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1,
                    boxShadow: i >= 4 ? `0 0 20px ${m.color}40` : 'none'
                  }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: m.color }}>{i + 1}</span>
                  </div>
                  {/* Content */}
                  <div className="glass-panel" style={{ padding: '1.5rem', flex: 1, borderLeft: `3px solid ${m.color}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{m.month}</h4>
                      <span style={{ fontSize: '1.25rem', fontWeight: 900, color: m.color }}>{m.revenue}</span>
                    </div>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compounding Note */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(0,255,136,0.05)', borderRadius: '16px', border: '1px solid rgba(0,255,136,0.2)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <Zap size={24} color="#00ff88" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ color: '#00ff88', fontWeight: 700, marginBottom: '0.5rem' }}>The Compounding Effect</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                By month 12, channels using this system average $15,000-$25,000/month. The key? Your video library keeps earning. A video uploaded in month 1 still generates revenue in month 12. With 100+ videos in your catalog, the passive income floor rises every single month even if you stop uploading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
