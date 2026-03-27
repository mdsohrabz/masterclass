import React from 'react';
import { PenTool, Volume2, Image as LucideImage, Scissors } from 'lucide-react';

export default function WalkthroughSection() {
  const steps = [
    {
      num: "01",
      icon: <PenTool size={36} color="#00f3ff" />,
      title: "Write the Prompt",
      desc: "Command ChatGPT to write a highly retention-optimized script with dramatic hooks and open loops.",
      color: "#00f3ff",
      gradient: "linear-gradient(135deg, rgba(0, 243, 255, 0.15) 0%, rgba(0, 102, 255, 0.05) 100%)"
    },
    {
      num: "02",
      icon: <Volume2 size={36} color="#8a2be2" />,
      title: "Generate Voiceover",
      desc: "Feed the script into ElevenLabs. Select a deep, expressive American voice (like 'Marcus' or 'Adam').",
      color: "#8a2be2",
      gradient: "linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 50, 255, 0.05) 100%)"
    },
    {
      num: "03",
      icon: <LucideImage size={36} color="#00ff88" />,
      title: "Create Visuals",
      desc: "Use Canva for B-roll or Grok for AI image generation, matching the visual tone of the script perfectly.",
      color: "#00ff88",
      gradient: "linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 150, 100, 0.05) 100%)"
    },
    {
      num: "04",
      icon: <Scissors size={36} color="#ff3366" />,
      title: "Final Assembly",
      desc: "Drag everything into CapCut. Add dynamic auto-captions, cinematic transitions, and background music.",
      color: "#ff3366",
      gradient: "linear-gradient(135deg, rgba(255, 51, 102, 0.15) 0%, rgba(200, 0, 50, 0.05) 100%)"
    }
  ];

  return (
    <section className="masterclass-section" id="live-assembly" style={{ minHeight: '180vh', position: 'relative' }}>
      
      {/* Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '20%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(138,43,226,0.05) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(138, 43, 226, 0.1)', borderColor: 'rgba(138, 43, 226, 0.3)', color: '#d0aaff' }}>
          04 — The Core Execution
        </div>

        <div style={{ textAlign: 'center', marginBottom: '8rem', maxWidth: '900px', margin: '0 auto 6rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Live Video <span style={{ color: '#8a2be2', textShadow: '0 0 30px rgba(138, 43, 226, 0.4)' }}>Assembly</span>
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Watch the screen closely. This is exactly how we go from a blank page to a monetizable, viral-ready video in under 15 minutes.
          </p>
        </div>

        <div style={{ position: 'relative', padding: '4rem 0' }}>
          
          {/* Timeline Animated Line */}
          <div className="reveal" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'rgba(255,255,255,0.05)',
            transform: 'translateX(-50%)',
            zIndex: 0,
            borderRadius: '4px'
          }}>
            <div style={{
              width: '100%',
              height: '30%',
              background: 'linear-gradient(to bottom, transparent, #8a2be2, transparent)',
              animation: 'flow-down 4s infinite linear'
            }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', position: 'relative', zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} className={`reveal delay-${(index % 3 + 1) * 100}`} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                gap: '8%' 
              }}>
                
                {/* Content Side */}
                <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="glass-panel" style={{ 
                    display: 'inline-block', 
                    padding: '3rem', 
                    maxWidth: '500px',
                    textAlign: 'left',
                    background: step.gradient,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTop: `2px solid ${step.color}80`,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = index % 2 === 0 ? 'translate(-10px, -5px)' : 'translate(10px, -5px)';
                    e.currentTarget.style.boxShadow = `0 30px 60px rgba(0,0,0,0.6), 0 0 30px ${step.color}20`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translate(0)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.5)';
                  }}>
                    {/* Decorative element */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: index % 2 === 0 ? 0 : 'auto',
                      left: index % 2 === 0 ? 'auto' : 0,
                      width: '150px',
                      height: '150px',
                      background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                      zIndex: 0,
                      pointerEvents: 'none'
                    }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                      <span style={{ 
                        fontSize: '3.5rem', 
                        fontWeight: 900, 
                        color: 'transparent', 
                        WebkitTextStroke: `1px ${step.color}`,
                        opacity: 0.8
                      }}>{step.num}</span>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.02em', color: '#fff' }}>{step.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div style={{ 
                  width: '90px', 
                  height: '90px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)',
                  border: `4px solid ${step.color}`,
                  boxShadow: `0 0 40px ${step.color}50, inset 0 0 20px ${step.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  position: 'relative'
                }}>
                  {/* Outer animated ring */}
                  <div style={{
                    position: 'absolute',
                    inset: '-8px',
                    borderRadius: '50%',
                    border: `1px dashed ${step.color}`,
                    animation: 'spin-slow 15s linear infinite',
                    opacity: 0.5
                  }}></div>
                  
                  {step.icon}
                </div>

                {/* Empty Space for layout balance */}
                <div style={{ flex: 1 }}></div>

              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}
