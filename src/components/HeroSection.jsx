import React from 'react';
import { PlayCircle, TrendingUp, MonitorPlay } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="masterclass-section" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="reveal" style={{ marginBottom: '2rem' }}>
            <div className="badge" style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
              <TrendingUp size={16} /> Ultimate 2026 Strategy
            </div>
          </div>
          
          <h1 className="reveal delay-100" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>
            USA Faceless YouTube <br />
            <span className="text-gradient-cyan">Channel Masterclass</span>
          </h1>
          
          <p className="reveal delay-200" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Learn the exact system to dominate the high-RPM US market, automate content creation, and scale a faceless empire from anywhere in the world.
          </p>
          
          <div className="reveal delay-300" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button className="glass-panel" style={{ 
              padding: '1rem 2.5rem', 
              borderRadius: '100px', 
              background: 'linear-gradient(135deg, rgba(0,243,255,0.2) 0%, rgba(0,102,255,0.2) 100%)',
              border: '1px solid rgba(0,243,255,0.4)',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              animation: 'pulse-glow 3s infinite'
            }}>
              <PlayCircle size={24} />
              Start Masterclass
            </button>
            <button className="glass-panel" style={{ 
              padding: '1rem 2.5rem', 
              borderRadius: '100px', 
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              <MonitorPlay size={24} />
              View Syllabus
            </button>
          </div>

          <div className="reveal delay-500" style={{ marginTop: '5rem', opacity: 0.5 }}>
            <p style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll down to dive deep</p>
            <div style={{ 
              width: '2px', 
              height: '60px', 
              background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)', 
              margin: '1rem auto 0',
              animation: 'float 2s infinite'
            }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
