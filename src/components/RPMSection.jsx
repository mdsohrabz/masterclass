import React from 'react';
import { DollarSign, Globe, ChartBar, ArrowRight, Activity, Percent } from 'lucide-react';

export default function RPMSection() {
  const tiers = [
    { name: 'Tier 1', regions: 'USA, UK, Australia, Canada', cpm: '$18 - $45', rpm: '$10 - $25', color: 'var(--accent-cyan)' },
    { name: 'Tier 2', regions: 'Germany, France, Spain', cpm: '$8 - $15', rpm: '$4 - $8', color: 'var(--accent-purple)' },
    { name: 'Tier 3', regions: 'India, Brazil, Philippines', cpm: '$1 - $3', rpm: '$0.50 - $1.50', color: 'var(--text-tertiary)' },
  ];

  return (
    <section className="masterclass-section" id="rpm-reality-check" style={{ minHeight: '200vh' }}>
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
              Advertisers pay premium rates to reach the US demographic. The difference in ad revenue for the exact same amount of views is astronomical. It's time to build smarter, not harder.
            </p>
            
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
            </div>

          </div>

        </div>

        {/* Extreme Depth: CPM vs RPM & Tier Matrix */}
        <div className="reveal glass-panel" style={{ padding: '4rem', background: 'rgba(5,5,10,0.8)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>The Metric That Matters</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Views do not equal money. The distinction between what advertisers pay and what you actually take home is catastrophic if you choose the wrong audience.
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
                CPM is the gross amount advertisers pay per 1,000 ad impressions. A $40 CPM means advertisers are furiously bidding to reach your audience because they are highly likely to purchase expensive products.
              </p>
            </div>
            
            <div style={{ borderLeft: '3px solid #00f3ff', paddingLeft: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Percent color="#00f3ff" size={32} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>RPM</h4>
              </div>
              <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600, paddingBottom: '0.5rem', display: 'block' }}>Revenue Per Mille (What YOU keep)</span>
              <p style={{ color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                RPM is your actual net income per 1,000 views after YouTube takes its 45% cut and adjusting for non-monetized views. <strong>If your RPM is under $5.00, your traffic source is flawed.</strong>
              </p>
            </div>

          </div>

          {/* Tier Matrix Table */}
          <div style={{ overflowX: 'auto' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center', color: '#fff' }}>Global Earning Tier Matrix</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Tier Classification</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Target Regions</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Average CPM</th>
                  <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>Your Net RPM</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '1.5rem', fontWeight: 700, color: tier.color, fontSize: '1.25rem' }}>{tier.name}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-primary)' }}>{tier.regions}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--text-tertiary)' }}>{tier.cpm}</td>
                    <td style={{ padding: '1.5rem', fontSize: '1.25rem', fontWeight: 800, color: tier.color }}>{tier.rpm}</td>
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
