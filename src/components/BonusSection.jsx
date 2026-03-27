import React, { useState, useEffect } from 'react';
import { Settings, Zap, Users, ArrowRightCircle, ArrowDown, Webhook, Bot, Mic, HardDrive, Cpu, Code, FileAudio, FolderSync } from 'lucide-react';

export default function BonusSection() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: <Webhook size={28} />, title: "Webhook Trigger", desc: "Receives a JSON topic payload from your phone or Slack.", color: "#ff3366", bg: "rgba(255, 51, 102, 0.1)" },
    { icon: <Bot size={28} />, title: "OpenAI Node", desc: "Executes the Master Prompt and generates the 1500-word script.", color: "#00f3ff", bg: "rgba(0, 243, 255, 0.1)" },
    { icon: <Mic size={28} />, title: "ElevenLabs API", desc: "Turns the mapped script JSON directly into an MP3 file.", color: "#8a2be2", bg: "rgba(138, 43, 226, 0.1)" },
    { icon: <HardDrive size={28} />, title: "Google Drive Upload", desc: "Saves a folder containing the Text file and MP3, ready for CapCut.", color: "#00ff88", bg: "rgba(0, 255, 136, 0.1)" }
  ];

  return (
    <section className="masterclass-section" id="bonus-n8n" style={{ position: 'relative', overflow: 'hidden', minHeight: '160vh' }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.08) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none',
        animation: 'pulse-glow 8s infinite alternate'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 102, 0, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(255, 102, 0, 0.1)', borderColor: 'rgba(255, 102, 0, 0.3)', color: '#ff6600' }}>
          06 — The Master System
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Build The <span style={{ color: '#ff6600', textShadow: '0 0 40px rgba(255, 102, 0, 0.5)' }}>1-Click Pipeline</span>
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Why do everything manually when you can eliminate 90% of the friction by bridging the APIs directly together locally with n8n?
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '8rem', gap: '6rem' }}>
          
          <div className="reveal delay-200" style={{ position: 'relative' }}>
            
            {/* Grid Pattern Background */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(circle at center, transparent 0%, var(--bg-color) 100%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 30px 30px, 30px 30px',
              borderRadius: '24px',
              zIndex: -1,
              opacity: 0.5
            }}></div>

            <div className="glass-panel" style={{ 
              border: '1px solid rgba(255,102,0,0.3)', 
              background: 'linear-gradient(145deg, rgba(20, 10, 0, 0.8) 0%, rgba(10, 5, 0, 0.9) 100%)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,102,0,0.2)',
              padding: '3.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, #ff6600 0%, #ff3366 100%)', 
                  padding: '1.25rem', 
                  borderRadius: '16px',
                  boxShadow: '0 0 30px rgba(255,102,0,0.4)',
                  position: 'relative'
                }}>
                  <div style={{ position: 'absolute', inset: 0, border: '2px solid rgba(255,255,255,0.5)', borderRadius: '16px', animation: 'pulse-glow 2s infinite' }}></div>
                  <Settings size={36} color="#fff" style={{ animation: 'spin-slow 8s linear infinite' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>n8n Architecture</h3>
                  <p style={{ color: '#ff6600', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }}>SELF-HOSTED AUTOMATION</p>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                We've engineered a sophisticated workflow that sequentially chains our entire AI stack together. One trigger initiates the complete assembly line.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translate(0)'}>
                  <div style={{ background: 'rgba(255,51,102,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Zap size={24} color="#ff3366"/></div>
                  <div>
                    <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Step 1: The Trigger</h5>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.5 }}>You send a single topic via mobile or Slack securely to your personal webhook.</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translate(0)'}>
                  <div style={{ background: 'rgba(0,243,255,0.1)', padding: '0.75rem', borderRadius: '12px' }}><Cpu size={24} color="#00f3ff"/></div>
                  <div>
                    <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Step 2: LLM Processing</h5>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.5 }}>The master prompt is injected with your topic, returning a strictly formatted JSON array.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translate(0)'}>
                  <div style={{ background: 'rgba(138,43,226,0.1)', padding: '0.75rem', borderRadius: '12px' }}><FileAudio size={24} color="#8a2be2"/></div>
                  <div>
                    <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Step 3: Asset Generation</h5>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.5 }}>Text is routed to ElevenLabs for VoiceOver. Both assets sync and package.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-300" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <h4 style={{ color: 'var(--text-secondary)', marginBottom: '3rem', letterSpacing: '0.2em', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--text-secondary)' }}></span>
              LIVE DATA FLOW
              <span style={{ width: '40px', height: '1px', background: 'var(--text-secondary)' }}></span>
            </h4>
            
            <div style={{ width: '100%', maxWidth: '500px', position: 'relative' }}>
              {nodes.map((node, i) => (
                <React.Fragment key={i}>
                  <div style={{ 
                    width: '100%', 
                    background: i === activeNode ? node.bg : 'var(--card-bg)', 
                    border: `1px solid ${i === activeNode ? node.color : 'var(--card-border)'}`, 
                    boxShadow: i === activeNode ? `0 0 30px ${node.color}30, inset 0 0 20px ${node.color}10` : 'none',
                    borderRadius: '20px', 
                    padding: '1.75rem 2rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: i === activeNode ? 'scale(1.03)' : 'scale(1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {/* Active highlight bar */}
                    <div style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '5px', 
                      height: '100%', 
                      background: node.color,
                      opacity: i === activeNode ? 1 : 0.2,
                      transition: 'opacity 0.3s ease'
                    }}></div>
                    
                    <div style={{ 
                      color: i === activeNode ? node.color : 'var(--text-secondary)',
                      transition: 'color 0.3s ease',
                      flexShrink: 0
                    }}>
                      {node.icon}
                    </div>
                    <div>
                      <h5 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: i === activeNode ? 800 : 600, 
                        marginBottom: '0.4rem',
                        color: i === activeNode ? '#fff' : 'var(--text-primary)',
                        transition: 'all 0.3s ease'
                      }}>{node.title}</h5>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{node.desc}</p>
                    </div>

                    {/* Active pulse indicator */}
                    {i === activeNode && (
                      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: node.color, boxShadow: `0 0 15px ${node.color}` }}></div>
                      </div>
                    )}
                  </div>

                  {i < nodes.length - 1 && (
                    <div style={{ 
                      height: '70px', 
                      display: 'flex', 
                      justifyContent: 'center',
                      position: 'relative',
                      margin: '0.5rem 0'
                    }}>
                      {/* Connecting Line */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'rgba(255,255,255,0.05)',
                        zIndex: 0
                      }}></div>
                      
                      {/* Flow Animation when previous node is active */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        width: '2px',
                        height: '100%',
                        background: `linear-gradient(to bottom, transparent, ${nodes[i].color}, transparent)`,
                        opacity: i === activeNode ? 1 : 0,
                        animation: i === activeNode ? 'flow-down 1.5s infinite linear' : 'none',
                        zIndex: 1
                      }}></div>

                      <style dangerouslySetInnerHTML={{__html: `
                        @keyframes flow-down {
                          0% { transform: translateY(-100%); }
                          100% { transform: translateY(100%); }
                        }
                      `}} />

                      <div style={{ 
                        background: 'var(--bg-color)', 
                        padding: '0.5rem', 
                        borderRadius: '50%', 
                        zIndex: 2,
                        marginTop: '15px',
                        color: i === activeNode ? nodes[i].color : 'rgba(255,255,255,0.1)',
                        transition: 'color 0.3s ease',
                        border: `1px solid ${i === activeNode ? nodes[i].color : 'transparent'}`
                      }}>
                        <ArrowDown size={20} />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="reveal delay-400" style={{ position: 'relative', marginTop: '4rem' }}>
          {/* Animated border glow */}
          <div style={{
            position: 'absolute',
            inset: '-2px',
            background: 'linear-gradient(90deg, #0066ff, #00f3ff, #8a2be2, #0066ff)',
            backgroundSize: '300% 300%',
            borderRadius: '26px',
            animation: 'gradient-border 4s ease infinite',
            zIndex: -1,
            opacity: 0.5
          }}></div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes gradient-border {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}} />

          <div className="glass-panel" style={{ 
              background: 'linear-gradient(135deg, rgba(0, 50, 150, 0.2) 0%, rgba(50, 0, 100, 0.2) 100%)',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '6rem 3rem',
              maxWidth: '1000px',
              margin: '0 auto',
              backdropFilter: 'blur(30px)'
            }}>
              
              <div style={{ 
                background: 'rgba(0, 102, 255, 0.1)', 
                padding: '1.5rem', 
                borderRadius: '50%', 
                marginBottom: '2.5rem',
                border: '1px solid rgba(0, 102, 255, 0.3)'
              }}>
                <FolderSync size={48} color="var(--accent-cyan)" />
              </div>
              
              <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Steal My <span className="text-gradient-cyan">n8n Blueprint</span>
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: '650px', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Don't want to build this from scratch? Download the exact JSON workflow template. Just import, add your API keys, and launch.
              </p>
              
              <button style={{ 
                padding: '1.5rem 4rem', 
                borderRadius: '100px', 
                background: 'linear-gradient(90deg, #0066ff 0%, #00f3ff 100%)',
                color: '#fff',
                fontSize: '1.2rem',
                fontWeight: 800,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 15px 40px rgba(0, 243, 255, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.2, 1, 0.3, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 243, 255, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 243, 255, 0.3)';
              }}>
                Access The Template <ArrowRightCircle size={24} />
              </button>
          </div>
        </div>

      </div>
    </section>
  );
}
