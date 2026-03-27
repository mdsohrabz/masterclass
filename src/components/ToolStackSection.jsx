import React from 'react';
import { Bot, Mic, Image, Video, TerminalSquare, SlidersHorizontal } from 'lucide-react';

export default function ToolStackSection() {
  return (
    <section className="masterclass-section" id="ai-tool-stack" style={{ minHeight: '180vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(0, 243, 255, 0.1)', borderColor: 'rgba(0, 243, 255, 0.2)', color: 'var(--accent-cyan)' }}>
          03 — The Infrastructure Deep Dive
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="reveal text-gradient-cyan" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
            The Zero-Cost Prompt Stack
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Tools are useless without the right commands. Here are the exact settings and prompts we use to generate $10k/month content for free. 
          </p>
        </div>

        <div className="grid-2">
          
          {/* ChatGPT Deep Dive */}
          <div className="glass-panel reveal delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '4px solid #00f3ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Bot size={40} color="#00f3ff" />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>ChatGPT (Scripting)</h3>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 700 }}>THE BRAIN</span>
              </div>
            </div>
            
            <div style={{ background: '#0a0a0f', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(0, 243, 255, 0.2)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '1rem', background: '#00f3ff', color: '#000', padding: '0.2rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <TerminalSquare size={14} /> THE MASTER PROMPT
              </div>
              <p style={{ fontFamily: 'monospace', color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '0.5rem' }}>
                "Act as a viral YouTube scriptwriter. Write a 1,500-word script about [TOPIC]. Follow this structure:
                1. <strong>The Hook (0:00-0:30)</strong>: Create an intense open loop that threatens the viewer's current worldview.
                2. <strong>The Escalation (0:30-4:00)</strong>: Introduce 3 pieces of highly controversial evidence.
                3. <strong>The Payoff</strong>: Resolve the loop logically. Use 8th-grade reading level. No intro fluff."
              </p>
            </div>
          </div>

          {/* ElevenLabs Deep Dive */}
          <div className="glass-panel reveal delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '4px solid #8a2be2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mic size={40} color="#8a2be2" />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>ElevenLabs (Audio)</h3>
                <span style={{ color: '#8a2be2', fontSize: '0.875rem', fontWeight: 700 }}>THE VOICE</span>
              </div>
            </div>
            
            <div style={{ background: '#0a0a0f', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '1rem', background: '#8a2be2', color: '#fff', padding: '0.2rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <SlidersHorizontal size={14} /> OPTIMAL SETTINGS
              </div>
              
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#fff' }}>
                    <span>Stability (More Dynamic)</span>
                    <span style={{ color: '#8a2be2', fontWeight: 700 }}>30%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#222', borderRadius: '100px' }}>
                    <div style={{ width: '30%', height: '100%', background: '#8a2be2', borderRadius: '100px' }}></div>
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#fff' }}>
                    <span>Clarity + Similarity</span>
                    <span style={{ color: '#8a2be2', fontWeight: 700 }}>75%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#222', borderRadius: '100px' }}>
                    <div style={{ width: '75%', height: '100%', background: '#8a2be2', borderRadius: '100px' }}></div>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>Pro-Tip: Use voice model "Marcus" or "Adam" for the US Male demographic.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
