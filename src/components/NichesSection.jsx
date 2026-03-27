import React from 'react';
import { Target, HeartCrack, BookOpen, Moon, LineChart, Cpu } from 'lucide-react';

export default function NichesSection() {
  const niches = [
    {
      icon: <Cpu size={32} color="#00f3ff" />,
      title: "Futurism & AI Tech",
      rpm: "$18.40",
      target: "Male, 24-45",
      watchTime: "12-15 mins",
      description: "Explaining advanced tech and AI breakthroughs. Elite ad bidding due to SaaS and B2B software companies targeting this audience.",
      color: "#00f3ff",
      delay: "delay-100"
    },
    {
      icon: <LineChart size={32} color="#00ff88" />,
      title: "Personal Finance & Wealth",
      rpm: "$22.50",
      target: "Male/Female, 28-55",
      watchTime: "8-12 mins",
      description: "The absolute highest paying niche on YouTube. Advertisers are financial institutions, crypto exchanges, and credit cards.",
      color: "#00ff88",
      delay: "delay-200"
    },
    {
      icon: <HeartCrack size={32} color="#ff3366" />,
      title: "Betrayal & Revenge Stories",
      rpm: "$12.82",
      target: "Female, 35-65+",
      watchTime: "15-20 mins",
      description: "High-drama stories exploiting human psychology. Extremely sticky retention because humans are wired for gossip and dramatic resolution.",
      color: "#ff3366",
      delay: "delay-300"
    },
    {
      icon: <Moon size={32} color="#8a2be2" />,
      title: "Sleep & Healing Soundscapes",
      rpm: "$8.90",
      target: "Mixed, All Ages",
      watchTime: "4-8 HOURS",
      description: "Lower RPM, but insane watch times. Viewers fall asleep with the video running, pushing passive ads indefinitely. Low production effort.",
      color: "#8a2be2",
      delay: "delay-400"
    }
  ];

  return (
    <section className="masterclass-section" id="top-niches" style={{ minHeight: '150vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(255, 51, 102, 0.1)', borderColor: 'rgba(255, 51, 102, 0.2)', color: 'var(--accent-pink)' }}>
          02 — The Strategy Deep Dive
        </div>

        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
            The 2026 Mega-Niches
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            To succeed without showing your face, you must engineer high retention or high advertiser desirability. Here is the raw demographic data for the top 4 US-locked niches.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {niches.map((niche, index) => (
            <div key={index} className={`glass-panel reveal ${niche.delay}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              borderTop: `4px solid ${niche.color}`,
              padding: '2.5rem 2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: `${niche.color}20`, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${niche.color}30`
                }}>
                  {niche.icon}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Average US RPM</span>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: niche.color }}>{niche.rpm}</div>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{niche.title}</h3>
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>
                {niche.description}
              </p>
              
              {/* Deep Dive Data Grid */}
              <div style={{ 
                marginTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                background: 'rgba(0,0,0,0.5)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Primary Demo</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{niche.target}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Core AWD Target</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: niche.color }}>{niche.watchTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
