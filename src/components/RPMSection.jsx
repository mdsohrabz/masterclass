import React from 'react';
import { DollarSign, Globe, ChartBar, ArrowRight, Activity, Percent, TrendingUp, AlertTriangle, Lightbulb, Calculator } from 'lucide-react';

export default function RPMSection() {
  const tiers = [
    { name: 'Tier 1', regions: 'USA, UK, Australia, Canada', cpm: '$18 - $45', rpm: '$10 - $25', color: 'var(--accent-cyan)', highlight: true },
    { name: 'Tier 1.5', regions: 'Norway, Switzerland, Denmark', cpm: '$15 - $35', rpm: '$8 - $18', color: '#00ff88', highlight: false },
    { name: 'Tier 2', regions: 'Germany, France, Spain, Japan', cpm: '$8 - $15', rpm: '$4 - $8', color: 'var(--accent-purple)', highlight: false },
    { name: 'Tier 2.5', regions: 'Mexico, Poland, Turkey', cpm: '$4 - $8', rpm: '$2 - $4', color: '#ffcc00', highlight: false },
    { name: 'Tier 3', regions: 'India, Brazil, Philippines, Indonesia', cpm: '$1 - $3', rpm: '$0.50 - $1.50', color: 'var(--text-tertiary)', highlight: false },
  ];

  const mathBreakdown = [
    { label: "Monthly Views", value: "500,000", detail: "Achievable in 60-90 days with correct strategy" },
    { label: "US RPM", value: "$18.00", detail: "Finance/Tech niche average for US traffic" },
    { label: "Gross Revenue", value: "$9,000/mo", detail: "500K × $18 ÷ 1000 = $9,000" },
    { label: "Annual Projection", value: "$108,000/yr", detail: "Compounding as older videos continue earning" },
  ];

  return (
    <section className="masterclass-section" id="rpm-reality-check" style={{ minHeight: '250vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem' }}>
          01 — The Foundation
        </div>
        
        <div className="grid-2" style={{ marginBottom: '8rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="reveal text-gradient-purple" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              The RPM Reality Check
            </h2>
            <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              Why target the USA? The answer is simple: <strong>Purchasing Power & Advertiser Competition.</strong>
            </p>
            <p className="reveal delay-200" style={{ fontSize: '1.1rem', color: 'var(--text-tertiary)', lineHeight: 1.8 }}>
              Advertisers pay premium rates to reach the US demographic. The difference in ad revenue for the exact same amount of views is astronomical. A channel getting 100K monthly views in India earns $50-$150. The same 100K views from US traffic? <strong style={{ color: '#00f3ff' }}>$1,500 to $2,500.</strong> It's time to build smarter, not harder.
            </p>

            {/* Why US Advertisers Pay More */}
            <div className="reveal delay-300 glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-purple)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lightbulb size={20} color="var(--accent-purple)" /> Why US Advertisers Pay 15-25x More
              </h4>
              <ul style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.8, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00f3ff', fontWeight: 700, flexShrink: 0 }}>01.</span>
                  <span><strong style={{ color: '#fff' }}>Higher lifetime customer value</strong> — US consumers spend $1,200+/year on subscription services alone. Advertisers know every click has massive conversion potential.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00f3ff', fontWeight: 700, flexShrink: 0 }}>02.</span>
                  <span><strong style={{ color: '#fff' }}>Extreme ad auction competition</strong> — 50+ advertisers bidding on the same keyword means the final CPM gets driven up exponentially via Google's auction system.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00f3ff', fontWeight: 700, flexShrink: 0 }}>03.</span>
                  <span><strong style={{ color: '#fff' }}>Credit card penetration rate of 83%</strong> — Impulse purchases after watching YouTube ads are far more likely when the viewer already has a card saved in their browser.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#00f3ff', fontWeight: 700, flexShrink: 0 }}>04.</span>
                  <span><strong style={{ color: '#fff' }}>English-language dominance</strong> — US English content gets shown to UK, Canada, Australia, and New Zealand audiences too, all of which are Tier 1 ad markets.</span>
                </li>
              </ul>
            </div>
            
            <div className="reveal delay-300" style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                <Globe size={24} className="text-gradient-purple" />
                <span>Geographic targeting changes everything.</span>
              </div>
            </div>
          </div>

          <div className="reveal-right delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Indian RPM Card */}
            <div className="glass-panel" style={{ position: 'relative', borderLeft: '4px solid #52525b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Tier-3 RPM (Local)</h3>
                <ChartBar size={24} color="#52525b" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-primary)' }}>$0.50</span>
                <span style={{ color: 'var(--text-secondary)' }}>to $1.50</span>
              </div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Average per 1,000 views</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginTop: '0.75rem', lineHeight: 1.5, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
                Even with 1M monthly views, you'd earn ≈ $500-$1,500/month. That's brutal for the hours you invest in content creation.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-tertiary)', animation: 'float 3s infinite' }}>
              <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
            </div>

            {/* US RPM Card */}
            <div className="glass-panel" style={{ 
              position: 'relative', 
              borderLeft: '4px solid var(--accent-cyan)',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,243,255,0.05) 100%)',
              transform: 'scale(1.05)'
            }}>
              <div style={{ position: 'absolute', top: '-12px', right: '2rem', background: 'var(--accent-cyan)', color: '#000', padding: '0.25rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>
                15x to 25x MULTIPLIER
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>United States RPM</h3>
                <DollarSign size={28} color="var(--accent-cyan)" />
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--accent-cyan)', textShadow: '0 0 20px rgba(0,243,255,0.4)' }}>$15.00</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>to $25.00</span>
              </div>
              <p style={{ color: '#fff', opacity: 0.8, fontSize: '0.875rem', marginTop: '0.5rem' }}>Average per 1,000 views</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.75rem', lineHeight: 1.5, borderTop: '1px solid rgba(0,243,255,0.15)', paddingTop: '0.75rem' }}>
                With 500K monthly views (very achievable), that's <strong style={{ color: '#00ff88' }}>$7,500-$12,500/month</strong>. Same effort, 15-25x the payout. The math doesn't lie.
              </p>
            </div>

          </div>

        </div>

        {/* Revenue Math Breakdown */}
        <div className="reveal glass-panel" style={{ padding: '4rem', background: 'rgba(0,243,255,0.03)', border: '1px solid rgba(0,243,255,0.15)', marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Calculator size={28} color="#00ff88" />
              <h3 style={{ fontSize: '2rem', fontWeight: 800 }}>The Revenue Math</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Let's run the exact numbers for a new faceless channel in the Finance niche targeting US traffic.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            {mathBreakdown.map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{item.label}</p>
                <p style={{ fontSize: '1.75rem', fontWeight: 900, color: i === 3 ? '#00ff88' : '#fff', marginBottom: '0.5rem' }}>{item.value}</p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', lineHeight: 1.4 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: 'rgba(0,255,136,0.05)', borderRadius: '12px', border: '1px solid rgba(0,255,136,0.2)' }}>
            <TrendingUp size={24} color="#00ff88" style={{ flexShrink: 0 }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              <strong style={{ color: '#00ff88' }}>The compounding effect:</strong> Unlike a job, your old videos keep earning passively. After 6 months with 50+ videos, your cumulative back-catalog can generate $3,000-$5,000/month on its own without uploading a single new video.
            </p>
          </div>
        </div>

        {/* CPM vs RPM & Tier Matrix */}
        <div className="reveal glass-panel" style={{ padding: '4rem', background: 'rgba(5,5,10,0.8)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>The Metric That Matters</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Views do not equal money. The distinction between what advertisers pay and what you actually take home is catastrophic if you choose the wrong audience. Understanding this one concept puts you ahead of 95% of creators.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '4rem', marginBottom: '4rem' }}>
            
            <div style={{ borderLeft: '3px solid #ff3366', paddingLeft: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Activity color="#ff3366" size={32} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>CPM </h4>
              </div>
              <span style={{ color: 'var(--accent-pink)', fontSize: '0.875rem', fontWeight: 600, paddingBottom: '0.5rem', display: 'block' }}>Cost Per Mille (What advertisers pay)</span>
              <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                CPM is the gross amount advertisers pay per 1,000 <em>ad impressions</em> (not views). A $40 CPM means advertisers are furiously bidding to reach your audience because they are highly likely to purchase expensive products. However, not every view gets an ad — only "monetized playbacks" contribute. Typically only 40-60% of views get served an ad.
              </p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,51,102,0.05)', borderRadius: '12px', border: '1px solid rgba(255,51,102,0.1)' }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  <strong style={{ color: '#ff3366' }}>Example:</strong> If your CPM is $30 but only 50% of views get ads, your effective CPM on total views is actually $15. Then YouTube takes 45% → you keep ~$8.25 per 1,000 views.
                </p>
              </div>
            </div>
            
            <div style={{ borderLeft: '3px solid #00f3ff', paddingLeft: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Percent color="#00f3ff" size={32} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>RPM</h4>
              </div>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, paddingBottom: '0.5rem', display: 'block' }}>Revenue Per Mille (What YOU keep)</span>
              <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                RPM is your actual net income per 1,000 <em>total views</em> — this already accounts for YouTube's 45% cut, non-monetized views, and ad fill rate. This is the ONLY number you should care about. <strong>If your RPM is under $5.00, your traffic source is fundamentally flawed.</strong>
              </p>
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,243,255,0.05)', borderRadius: '12px', border: '1px solid rgba(0,243,255,0.1)' }}>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  <strong style={{ color: '#00f3ff' }}>The formula:</strong> RPM = (Estimated Revenue ÷ Total Views) × 1,000. This is what YouTube Analytics shows you in the Revenue tab. Target $12+ RPM.
                </p>
              </div>
            </div>

          </div>

          {/* Warning Callout */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: 'rgba(255,204,0,0.05)', borderRadius: '12px', border: '1px solid rgba(255,204,0,0.2)', marginBottom: '3rem' }}>
            <AlertTriangle size={24} color="#ffcc00" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ color: '#ffcc00', fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem' }}>Common Beginner Mistake</p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Most new creators see a "CPM" of $25 and think they'll earn $25 per 1,000 views. Wrong. After YouTube's cut and non-monetized views, your actual RPM might be $6-$8. Always use RPM as your benchmark. We teach you how to maximize both metrics in this masterclass.
              </p>
            </div>
          </div>

          {/* Tier Matrix Table */}
          <div style={{ overflowX: 'auto' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: '#fff' }}>Global Earning Tier Matrix (2026 Data)</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Tier Classification</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Target Regions</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Average CPM</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Your Net RPM</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Verdict</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, idx) => (
                  <tr key={idx} style={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.05)', 
                    transition: 'background 0.2s ease',
                    background: tier.highlight ? 'rgba(0,243,255,0.03)' : 'transparent'
                  }} 
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} 
                  onMouseOut={(e) => e.currentTarget.style.background = tier.highlight ? 'rgba(0,243,255,0.03)' : 'transparent'}>
                    <td style={{ padding: '1.5rem', fontWeight: 700, color: tier.color, fontSize: '1.25rem' }}>{tier.name}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-primary)' }}>{tier.regions}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-tertiary)' }}>{tier.cpm}</td>
                    <td style={{ padding: '1.5rem', fontSize: '1.25rem', fontWeight: 800, color: tier.color }}>{tier.rpm}</td>
                    <td style={{ padding: '1.5rem', fontSize: '0.875rem', color: tier.highlight ? '#00ff88' : 'var(--text-tertiary)' }}>
                      {tier.highlight ? '✅ TARGET THIS' : idx < 2 ? '🟡 Good backup' : '❌ Avoid'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
