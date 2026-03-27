import React from 'react';
import { DollarSign, ShieldCheck } from 'lucide-react';

export default function MonetizationProofSection() {
  return (
    <section className="masterclass-section" id="monetization-proof" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="reveal text-gradient-green" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem', background: 'linear-gradient(135deg, #00ff88, #00aa55)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The Monetization Reality
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            This is what a successful US faceless channel dashboard looks like after just 6 months.
          </p>
        </div>

        <div className="reveal delay-200" style={{
          maxWidth: '900px',
          margin: '0 auto',
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
      </div>
    </section>
  );
}
