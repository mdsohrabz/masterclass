import React, { useState } from 'react';
import { Rocket, ChevronRight, ChevronDown, MessageCircle, HelpCircle, Star, CheckCircle } from 'lucide-react';

export default function OutroSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "Do I need to show my face at all?", a: "Absolutely not. Every strategy in this masterclass is specifically designed for faceless content. You never appear on camera. AI handles scripting, voiceover, and even image generation. You are the strategist and publisher — not the talent." },
    { q: "I don't live in the USA. Can I still do this?", a: "Yes — that's exactly what the Channel Genesis Protocol (Section 05) is for. We teach you how to use US residential proxies and RDPs to create a channel that the algorithm identifies as American. Channels from India, Pakistan, Philippines, Brazil, and Nigeria are all using this system successfully." },
    { q: "How much money do I need to start?", a: "Zero. Every single tool in our stack has a free tier that is sufficient for full production. ChatGPT Free, ElevenLabs Free (10K chars/month), CapCut Free, Canva Free, Pixabay Free. The only optional expense is a US proxy ($5-15/month) if you don't live in the US." },
    { q: "How long until I start earning real money?", a: "Month 1-2: Building your video library (no revenue). Month 3: Hit monetization threshold (~$400). Month 4-5: Algorithm starts pushing your content (~$2,000-4,000/month). Month 6+: Compounding effect kicks in ($8,000+/month). Results depend on consistency — 3 uploads/week minimum." },
    { q: "What if YouTube detects AI-generated content?", a: "YouTube does NOT penalize AI-generated content. Their official policy allows AI voiceover, AI scripts, and AI visuals as long as the content provides value. Thousands of top-earning channels use this exact approach. The algorithm cares about CTR and AWD, not how the content was produced." },
    { q: "I have zero video editing experience. Can I do this?", a: "CapCut (free) makes editing a drag-and-drop process. You drag in the audio, layer visuals on top, click 'Auto Captions', and export. The entire editing process takes 5 minutes per video. If you can use a smartphone, you can edit these videos." },
    { q: "What niche should I pick as a complete beginner?", a: "Betrayal & Revenge Stories. It's the easiest niche to start with: lowest production effort, highest viral potential, and the 35-65 female demographic has the best ad engagement on YouTube. The scripts write themselves with ChatGPT. You can switch to higher-RPM niches (Finance, Health) once you're comfortable with the workflow." },
    { q: "Can I run multiple channels simultaneously?", a: "Yes, and we recommend it after your first channel is profitable. Many students run 3-5 channels across different niches. With the n8n automation pipeline (Section 06), you can produce content for multiple channels with minimal additional effort. Each new channel is incremental revenue." },
  ];

  const syllabus = [
    { section: "01", title: "RPM Reality Check", topics: "CPM vs RPM, Tier Matrix, Revenue Math, Why US Traffic" },
    { section: "02", title: "Mega-Niche Selection", topics: "6 Niches, Script Strategies, Example Topics, Difficulty Ratings" },
    { section: "03", title: "AI Tool Stack", topics: "ChatGPT Prompts, ElevenLabs Settings, 6-Tool Pipeline, Cost Comparison" },
    { section: "04", title: "Live Video Assembly", topics: "6-Step Walkthrough, Checklists, Pro Tips, Upload Optimization" },
    { section: "04.5", title: "Algorithm Deep Dive", topics: "CTR/AWD Formulas, Retention Engineering, Title Strategies" },
    { section: "05", title: "Geographic Genesis", topics: "Proxy Setup, 4-Phase Protocol, AdSense Checklist, Financial Bridge" },
    { section: "06", title: "n8n Automation", topics: "1-Click Pipeline, API Integration, Workflow Templates" },
  ];

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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* FAQ Section */}
        <div className="reveal" style={{ marginBottom: '8rem', maxWidth: '850px', margin: '0 auto 8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <HelpCircle size={28} color="#00f3ff" />
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Everything you need to know before starting.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel" style={{ 
                padding: '0', 
                cursor: 'pointer',
                border: openFaq === i ? '1px solid rgba(0,243,255,0.3)' : '1px solid var(--card-border)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ 
                  padding: '1.5rem 2rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: openFaq === i ? '#00f3ff' : '#fff', transition: 'color 0.3s' }}>
                    {faq.q}
                  </h4>
                  <ChevronDown size={20} style={{ 
                    color: 'var(--text-tertiary)', 
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                    marginLeft: '1rem'
                  }} />
                </div>
                {openFaq === i && (
                  <div style={{ 
                    padding: '0 2rem 1.5rem', 
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '1.25rem'
                  }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Full Syllabus */}
        <div className="reveal" style={{ marginBottom: '8rem', maxWidth: '850px', margin: '0 auto 8rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem' }}>
            Full Masterclass Syllabus
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {syllabus.map((s, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{ 
                  fontSize: '1.25rem', fontWeight: 900, color: 'var(--accent-cyan)', 
                  minWidth: '50px', textAlign: 'center',
                  padding: '0.5rem',
                  background: 'rgba(0,243,255,0.1)',
                  borderRadius: '8px'
                }}>{s.section}</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{s.topics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center' }}>
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
          
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.3rem', lineHeight: 1.7 }}>
            You now have the exact blueprint to dominate the US Faceless YouTube space in 2026. The algorithm favors those who execute quickly. The only thing missing is <strong style={{color: '#fff'}}>you</strong>.
          </p>

          {/* What You Get */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            {["7 in-depth modules", "Exact prompts & templates", "n8n workflow JSON", "Lifetime updates", "Private community access"].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(0,243,255,0.05)', borderRadius: '100px', border: '1px solid rgba(0,243,255,0.15)' }}>
                <CheckCircle size={14} color="#00ff88" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
          
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

            <style dangerouslySetInnerHTML={{__html: `
              @keyframes gradient-shift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}} />
          </div>

          {/* Social Proof */}
          <div className="reveal delay-200" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 900, color: '#00f3ff' }}>2,847+</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Students Enrolled</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '0.25rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} color="#ffcc00" fill="#ffcc00" />)}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>4.9/5 Average Rating</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', fontWeight: 900, color: '#00ff88' }}>$4.2M+</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Combined Student Revenue</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="reveal delay-300" style={{ marginTop: '8rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-tertiary)', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© 2026 USA Faceless YouTube Masterclass. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.2s' }}>Contact</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
