import React from 'react';
import { Bot, Mic, Image, Video, TerminalSquare, SlidersHorizontal, Wand2, Scissors, Music, Palette, Globe, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ToolStackSection() {
  const additionalTools = [
    { icon: <Wand2 size={24} />, name: "Grok (xAI)", role: "AI Image Generation", desc: "Generate cinematic B-roll images and thumbnail assets. Use the 'photorealistic cinematic' prompt prefix for Hollywood-quality stills.", color: "#00ff88", tip: "Prompt: 'Photorealistic cinematic still of [scene], dramatic lighting, 4K, movie quality'" },
    { icon: <Scissors size={24} />, name: "CapCut (Free)", role: "Video Editor", desc: "Drag-and-drop video assembly with auto-captions, transitions, and motion tracking. Perfect for faceless content — no editing skills required.", color: "#ff6600", tip: "Enable 'Auto Captions' and use the 'Horizon' caption style. Add 1.5x zoom keyframes every 8 seconds for retention." },
    { icon: <Music size={24} />, name: "Pixabay Audio", role: "Background Music", desc: "100% royalty-free background music and sound effects. No copyright strikes, no claims. Sorted by mood for easy selection.", color: "#ffcc00", tip: "Use 'Cinematic Tension' for drama, 'Lo-Fi Chill' for finance, 'Dark Ambient' for true crime." },
    { icon: <Palette size={24} />, name: "Canva (Free)", role: "Thumbnails", desc: "Create high-CTR thumbnails using the exact template formulas: large bold text + emotional visual + contrasting background color.", color: "#8a2be2", tip: "Thumbnail formula: 3-4 word max title + shocked face/dramatic visual + yellow/red background accents." },
  ];

  return (
    <section className="masterclass-section" id="ai-tool-stack" style={{ minHeight: '220vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(0, 243, 255, 0.1)', borderColor: 'rgba(0, 243, 255, 0.2)', color: 'var(--accent-cyan)' }}>
          03 — The Infrastructure Deep Dive
        </div>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="reveal text-gradient-cyan" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem' }}>
            The Zero-Cost Prompt Stack
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            Tools are useless without the right commands. Here are the exact settings, prompts, and configurations we use to generate $10k/month content — for free. Every tool listed below has a free tier that is sufficient for full production.
          </p>
        </div>

        {/* Cost Comparison */}
        <div className="reveal glass-panel" style={{ padding: '2rem', marginBottom: '4rem', background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Traditional Video Production</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ff3366', textDecoration: 'line-through' }}>$500-$2,000/video</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Our AI Stack Cost</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00ff88' }}>$0/video</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Production Time</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00f3ff' }}>15-20 mins/video</p>
            </div>
            <div>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Skills Required</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffcc00' }}>None</p>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '5rem' }}>
          
          {/* ChatGPT Deep Dive */}
          <div className="glass-panel reveal delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '4px solid #00f3ff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Bot size={40} color="#00f3ff" />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>ChatGPT (Scripting)</h3>
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 700 }}>THE BRAIN</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              The free GPT-4o tier is more than enough to write viral scripts. The key is not the model — it's the prompt engineering. Our Master Prompt below has been tested across 500+ videos and consistently produces scripts with 50%+ retention.
            </p>
            
            <div style={{ background: '#0a0a0f', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(0, 243, 255, 0.2)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '1rem', background: '#00f3ff', color: '#000', padding: '0.2rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <TerminalSquare size={14} /> THE MASTER PROMPT
              </div>
              <p style={{ fontFamily: 'monospace', color: '#a1a1aa', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.5rem' }}>
                "Act as a viral YouTube scriptwriter specializing in faceless content for US audiences. Write a 1,500-word script about [TOPIC]. Follow this exact structure:
                <br /><br />
                1. <strong>The Hook (0:00-0:30)</strong>: Create an intense open loop that threatens the viewer's current worldview. Use a shocking statistic or contrarian statement. No intros.
                <br /><br />
                2. <strong>The Escalation (0:30-4:00)</strong>: Introduce 3 pieces of highly controversial evidence. Each piece should end with a mini-cliffhanger that prevents exit.
                <br /><br />
                3. <strong>The Re-Hook (4:00-4:30)</strong>: At the midpoint, drop a secondary hook that's MORE compelling than the first. Reference upcoming bombshell info.
                <br /><br />
                4. <strong>The Deep Dive (4:30-8:00)</strong>: Reveal the most impactful evidence. Use specific numbers, names, and dates for credibility.
                <br /><br />
                5. <strong>The Payoff (8:00-10:00)</strong>: Resolve ALL open loops logically. End with a thought-provoking question that drives comments.
                <br /><br />
                Use 8th-grade reading level. No intro fluff. No 'In this video...' or 'Hey guys'. Start mid-action."
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', background: 'rgba(255,204,0,0.05)', borderRadius: '8px', border: '1px solid rgba(255,204,0,0.15)' }}>
              <AlertTriangle size={16} color="#ffcc00" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                <strong style={{ color: '#ffcc00' }}>Pro Tip:</strong> Always regenerate the hook 3-4 times and pick the most shocking version. The first 30 seconds determine 80% of your video's performance.
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

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              The voice is the most critical element for US audience trust. An obviously robotic voice kills retention instantly. ElevenLabs' free tier gives you 10,000 characters/month — enough for 3-4 videos. Here are our exact tested settings:
            </p>
            
            <div style={{ background: '#0a0a0f', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(138, 43, 226, 0.2)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '1rem', background: '#8a2be2', color: '#fff', padding: '0.2rem 1rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <SlidersHorizontal size={14} /> OPTIMAL SETTINGS
              </div>
              
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#fff' }}>
                    <span>Stability (More Dynamic)</span>
                    <span style={{ color: '#8a2be2', fontWeight: 700 }}>30%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#222', borderRadius: '100px' }}>
                    <div style={{ width: '30%', height: '100%', background: '#8a2be2', borderRadius: '100px' }}></div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>Lower stability = more emotional variation. Critical for drama/storytelling niches.</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#fff' }}>
                    <span>Clarity + Similarity</span>
                    <span style={{ color: '#8a2be2', fontWeight: 700 }}>75%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#222', borderRadius: '100px' }}>
                    <div style={{ width: '75%', height: '100%', background: '#8a2be2', borderRadius: '100px' }}></div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>High clarity ensures every word is crystal clear. Essential for US audience trust.</p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#fff' }}>
                    <span>Style Exaggeration</span>
                    <span style={{ color: '#8a2be2', fontWeight: 700 }}>45%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: '#222', borderRadius: '100px' }}>
                    <div style={{ width: '45%', height: '100%', background: '#8a2be2', borderRadius: '100px' }}></div>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>Moderate exaggeration creates a narrator feel without sounding unnatural.</p>
                </div>
              </div>
            </div>

            {/* Voice Recommendations */}
            <div style={{ padding: '1.25rem', background: 'rgba(138,43,226,0.05)', borderRadius: '12px', border: '1px solid rgba(138,43,226,0.15)' }}>
              <p style={{ color: '#8a2be2', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Recommended Voice Models</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>Marcus</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Deep, authoritative. Perfect for finance & tech.</p>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>Adam</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Warm, engaging. Great for storytelling & drama.</p>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>Rachel</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Professional female voice. Health & wellness niche.</p>
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>Josh</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem' }}>Young & energetic. Tech reviews & AI content.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Tools Grid */}
        <div className="reveal" style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>The Supporting Stack</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            These four additional tools complete the production pipeline. All have free tiers sufficient for full-scale content creation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {additionalTools.map((tool, i) => (
              <div key={i} className="glass-panel" style={{ 
                padding: '2rem', 
                borderTop: `3px solid ${tool.color}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: tool.color }}>{tool.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{tool.name}</h4>
                    <span style={{ color: tool.color, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>{tool.role}</span>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {tool.desc}
                </p>
                <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: `1px solid ${tool.color}20` }}>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                    <strong style={{ color: tool.color }}>💡 </strong>{tool.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
