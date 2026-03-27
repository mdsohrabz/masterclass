import React from 'react';
import { Rocket, ChevronRight } from 'lucide-react';

export default function OutroSection() {
  return (
    <footer style={{ 
      position: 'relative',
      padding: '10rem 0 3rem', 
      borderTop: '1px solid rgba(255,255,255,0.05)',
      background: 'linear-gradient(to bottom, var(--bg-color) 0%, rgba(10,5,15,1) 100%)',
      overflow: 'hidden'
    }}>
      
      {/* Background glow coming from the bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '50vh',
        background: 'radial-gradient(ellipse at bottom, rgba(138,43,226,0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          background: 'rgba(138, 43, 226, 0.1)',
          border: '1px solid rgba(138, 43, 226, 0.3)',
          marginBottom: '2rem',
          boxShadow: '0 0 40px rgba(138, 43, 226, 0.2)'
        }}>
          <Rocket size={40} color="#00f3ff" />
        </div>

        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Your Empire <span style={{ background: 'linear-gradient(90deg, #00f3ff, #8a2be2, #ff3366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradient-shift 5s ease infinite', backgroundSize: '300% 300%' }}>Awaits</span>
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 4rem', fontSize: '1.3rem', lineHeight: 1.6 }}>
          You now have the exact blueprint to dominate the US Faceless YouTube space in 2026. The algorithm favors those who execute quickly. The only thing missing is <strong style={{color: '#fff'}}>you</strong>.
        </p>
        
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Animated Glow Behind Button */}
          <div style={{
            position: 'absolute',
            inset: '-4px',
            background: 'linear-gradient(90deg, #00f3ff, #8a2be2, #ff3366, #00f3ff)',
            backgroundSize: '300% 300%',
            borderRadius: '100px',
            animation: 'gradient-shift 4s linear infinite',
            filter: 'blur(10px)',
            opacity: 0.7,
            zIndex: 0
          }}></div>

          <button style={{ 
            position: 'relative',
            zIndex: 1,
            padding: '1.5rem 4rem', 
            borderRadius: '100px', 
            background: '#050505',
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 800,
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = 'linear-gradient(90deg, #00f3ff, #8a2be2)';
            e.currentTarget.style.border = '2px solid transparent';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = '#050505';
          }}>
            Start Building Today <ChevronRight size={24} />
          </button>

          {/* This style is required for the gradient animation */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes gradient-shift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}} />
        </div>

        <div className="reveal delay-300" style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-tertiary)', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© 2026 USA Faceless YouTube Masterclass. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s', ...{ ':hover': { color: '#fff' } } }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s', ...{ ':hover': { color: '#fff' } } }}>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
