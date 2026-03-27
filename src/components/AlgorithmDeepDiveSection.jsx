import React from 'react';
import { LineChart, Activity, Crosshair } from 'lucide-react';

export default function AlgorithmDeepDiveSection() {
  return (
    <section className="masterclass-section" id="algorithm-deep-dive">
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(255, 204, 0, 0.1)', borderColor: 'rgba(255, 204, 0, 0.3)', color: '#ffcc00' }}>
          04.5 — The Math
        </div>

        <div className="grid-2">
          
          <div style={{ paddingRight: '2rem' }}>
            <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
              Algorithm <br />Deep Dive
            </h2>
            <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              The YouTube algorithm does not care about comments, shares, or subscribers. It cares about exactly two metrics: <strong>CTR</strong> and <strong>AWD</strong>.
            </p>
            
            <div className="reveal delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00f3ff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  <Crosshair size={20} /> Click-Through Rate (CTR)
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  If your thumbnail and title can't get at least a 6-8% CTR in the first 2 hours, the algorithm stops testing it. 
                </p>
              </div>

              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff3366', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  <Activity size={20} /> Average Watch Duration (AWD)
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Once clicked, can you hold them for 50%+ of the video? If your 10-minute video gets 5.5 minutes of AWD, it will go viral. Period.
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
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '12px', height: '3px', background: '#00f3ff' }}></div> 
                  Winning Script
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '12px', height: '3px', background: 'rgba(255, 51, 102, 0.5)', borderBottom: '1px dashed #ff3366' }}></div> 
                  Boring Script
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
