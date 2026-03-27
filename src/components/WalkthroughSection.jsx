import React from 'react';
import { PenTool, Volume2, Image as LucideImage, Scissors, Search, Upload, Clock, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

export default function WalkthroughSection() {
  const steps = [
    {
      num: "01",
      icon: <Search size={36} color="#ffcc00" />,
      title: "Research & Topic Selection",
      desc: "Before writing anything, spend 5 minutes on competitor analysis. Search your niche on YouTube, filter by 'This Month', and find topics with high views but from small channels. These are unserved demand signals — topics the algorithm wants to push but doesn't have enough quality content for.",
      subSteps: [
        "Search '[niche] + 2026' on YouTube, sort by view count",
        "Find videos with 100K+ views from channels under 50K subs",
        "Note their exact title formula and thumbnail style",
        "Choose a topic, but add a contrarian angle (e.g., 'Why [popular advice] is WRONG')"
      ],
      proTip: "The sweet spot: topics with high viewer demand but low creator supply. Tools like VidIQ (free) can show you search volume for any keyword.",
      color: "#ffcc00",
      gradient: "linear-gradient(135deg, rgba(255, 204, 0, 0.15) 0%, rgba(200, 150, 0, 0.05) 100%)"
    },
    {
      num: "02",
      icon: <PenTool size={36} color="#00f3ff" />,
      title: "Write the Prompt & Generate Script",
      desc: "Paste the Master Prompt into ChatGPT with your chosen topic. The prompt forces the AI to write in our exact retention-optimized structure: cold open hook, 3-evidence escalation, re-hook, deep dive, satisfying payoff. No filler.",
      subSteps: [
        "Open ChatGPT (free tier works perfectly)",
        "Paste the Master Prompt from Section 03",
        "Replace [TOPIC] with your researched topic",
        "Regenerate the hook 3-4 times, pick the most shocking version",
        "Read through the full script — edit any robotic sentences manually"
      ],
      proTip: "Add this to the end of your prompt: 'After writing, rate this script's viral potential from 1-10 and explain why.' If it rates itself below 7, ask it to rewrite the weak sections.",
      color: "#00f3ff",
      gradient: "linear-gradient(135deg, rgba(0, 243, 255, 0.15) 0%, rgba(0, 102, 255, 0.05) 100%)"
    },
    {
      num: "03",
      icon: <Volume2 size={36} color="#8a2be2" />,
      title: "Generate Voiceover",
      desc: "Feed the finalized script into ElevenLabs. Select a deep, expressive American voice. The voice selection is critical — it's the first trust signal for US viewers. A mismatched or robotic voice kills retention instantly, no matter how good the script is.",
      subSteps: [
        "Login to ElevenLabs (free tier: 10,000 chars/month)",
        "Select voice model: 'Marcus' (finance/tech) or 'Adam' (drama/stories)",
        "Apply settings: Stability 30%, Clarity 75%, Style Exaggeration 45%",
        "Generate and download as MP3",
        "Listen back — re-generate any sections that sound flat or robotic"
      ],
      proTip: "Split long scripts into 3-4 paragraph chunks before pasting into ElevenLabs. The AI produces more natural inflection with shorter inputs than a single 1,500-word wall of text.",
      color: "#8a2be2",
      gradient: "linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 50, 255, 0.05) 100%)"
    },
    {
      num: "04",
      icon: <LucideImage size={36} color="#00ff88" />,
      title: "Create Visuals & B-Roll",
      desc: "Use Grok for AI image generation and Canva for stock B-roll. The visual strategy differs by niche: drama channels need emotional imagery, tech channels need futuristic visuals, finance channels need charts and luxury imagery. Match visuals to script tone perfectly.",
      subSteps: [
        "Identify 15-20 visual 'keyframes' from your script (one every 30-40s of audio)",
        "For AI images: Use Grok with 'photorealistic cinematic' prefix",
        "For stock footage: Search Canva/Pexels by emotion, not keyword",
        "Create thumbnail: Large 3-4 word text + dramatic visual + color contrast",
        "Ensure all visuals are 1920x1080 (16:9 landscape)"
      ],
      proTip: "The thumbnail is 60% of your video's success. Spend as much time on the thumbnail as you do on the entire script. A/B test 3 thumbnails using YouTube's built-in test feature.",
      color: "#00ff88",
      gradient: "linear-gradient(135deg, rgba(0, 255, 136, 0.15) 0%, rgba(0, 150, 100, 0.05) 100%)"
    },
    {
      num: "05",
      icon: <Scissors size={36} color="#ff3366" />,
      title: "Final Assembly in CapCut",
      desc: "Drag the voiceover MP3 into CapCut, then layer your visuals on top. Add dynamic auto-captions (this boosts retention by 15-20% because viewers can read along). Add cinematic zoom keyframes every 8 seconds. Finish with background music at 15% volume.",
      subSteps: [
        "Import MP3 voiceover as the base layer",
        "Layer B-roll visuals, matching each visual to its script section",
        "Enable 'Auto Captions' → select 'Horizon' style → bold white text",
        "Add 1.5x zoom keyframes every 8 seconds (prevents visual fatigue)",
        "Add background music at 10-15% volume (cinematic tension works best)",
        "Add subtle transitions between visual sections (dissolve, not hard cut)"
      ],
      proTip: "Export at 1080p/30fps minimum. Upload to YouTube during US prime time (6-9 PM EST, Tuesday-Thursday). The first 2 hours of impressions are critical for the algorithm test.",
      color: "#ff3366",
      gradient: "linear-gradient(135deg, rgba(255, 51, 102, 0.15) 0%, rgba(200, 0, 50, 0.05) 100%)"
    },
    {
      num: "06",
      icon: <Upload size={36} color="#ff6600" />,
      title: "Upload & Optimize",
      desc: "The upload process itself is a science. Your title, description, tags, and upload timing all directly affect how the algorithm categorizes and distributes your video. Follow this exact checklist for every single upload.",
      subSteps: [
        "Title: Use one of the CTR formulas from Section 04.5 (contrarian, threat, or specific result)",
        "Description: First 2 lines = SEO keywords + viewer hook (these show in search results)",
        "Tags: 8-12 tags, mix of broad ('personal finance') and specific ('money mistakes 2026')",
        "Upload time: Tuesday-Thursday, 6-9 PM EST (peak US viewing hours)",
        "End screen: Add 'Best for Viewer' card at 95% mark to boost session time",
        "Pinned comment: Ask a question related to the video to drive engagement signals"
      ],
      proTip: "Schedule uploads 2-3 days in advance. This gives YouTube time to process and index your video before it goes live. Set visibility to 'unlisted' first, audit everything, then switch to 'public'.",
      color: "#ff6600",
      gradient: "linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, rgba(150, 50, 0, 0.05) 100%)"
    }
  ];

  return (
    <section className="masterclass-section" id="live-assembly" style={{ minHeight: '250vh', position: 'relative' }}>
      
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
          <p className="reveal delay-100" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
            Watch the screen closely. This is exactly how we go from a blank page to a monetizable, viral-ready video in under 20 minutes. Six steps, zero guesswork, fully repeatable process.
          </p>
        </div>

        {/* Total Time Estimate */}
        <div className="reveal glass-panel" style={{ padding: '2rem', marginBottom: '4rem', textAlign: 'center', border: '1px solid rgba(138,43,226,0.2)', background: 'rgba(138,43,226,0.03)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {[
              { step: "Research", time: "5 min", color: "#ffcc00" },
              { step: "Script", time: "3 min", color: "#00f3ff" },
              { step: "Voiceover", time: "2 min", color: "#8a2be2" },
              { step: "Visuals", time: "5 min", color: "#00ff88" },
              { step: "Assembly", time: "5 min", color: "#ff3366" },
              { step: "Upload", time: "3 min", color: "#ff6600" },
            ].map((t, i) => (
              <div key={i} style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{t.step}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, color: t.color }}>{t.time}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            <Clock size={16} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Total production time: <strong style={{ color: '#00ff88' }}>~20 minutes</strong> per video
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem', position: 'relative', zIndex: 1 }}>
            {steps.map((step, index) => (
              <div key={index} className={`reveal delay-${(index % 3 + 1) * 100}`} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                gap: '6%' 
              }}>
                
                {/* Content Side */}
                <div style={{ flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div className="glass-panel" style={{ 
                    display: 'inline-block', 
                    padding: '2.5rem', 
                    maxWidth: '550px',
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

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.25rem', position: 'relative', zIndex: 1 }}>
                      <span style={{ 
                        fontSize: '3rem', 
                        fontWeight: 900, 
                        color: 'transparent', 
                        WebkitTextStroke: `1px ${step.color}`,
                        opacity: 0.8
                      }}>{step.num}</span>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.02em', color: '#fff' }}>{step.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', position: 'relative', zIndex: 1, marginBottom: '1.25rem' }}>
                      {step.desc}
                    </p>

                    {/* Sub-Steps Checklist */}
                    <div style={{ 
                      padding: '1.25rem', 
                      background: 'rgba(0,0,0,0.3)', 
                      borderRadius: '12px', 
                      border: '1px solid rgba(255,255,255,0.05)',
                      marginBottom: '1rem',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <p style={{ fontSize: '0.7rem', color: step.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                        Step-by-Step Checklist
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {step.subSteps.map((sub, i) => (
                          <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <CheckCircle size={14} color={step.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.4 }}>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tip */}
                    <div style={{ 
                      padding: '1rem', 
                      background: `${step.color}08`, 
                      borderRadius: '8px', 
                      border: `1px solid ${step.color}20`,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                        <strong style={{ color: step.color }}>💡 Pro Tip: </strong>{step.proTip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)',
                  border: `4px solid ${step.color}`,
                  boxShadow: `0 0 40px ${step.color}50, inset 0 0 20px ${step.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  position: 'relative',
                  flexShrink: 0,
                  marginTop: '2rem'
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
