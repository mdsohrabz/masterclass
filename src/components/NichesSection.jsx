import React from 'react';
import { Target, HeartCrack, BookOpen, Moon, LineChart, Cpu, Scale, Utensils, Dumbbell, Gamepad2, Info, TrendingUp } from 'lucide-react';

export default function NichesSection() {
  const niches = [
    {
      icon: <Cpu size={32} color="#00f3ff" />,
      title: "Futurism & AI Tech",
      rpm: "$18.40",
      target: "Male, 24-45",
      watchTime: "12-15 mins",
      difficulty: "Medium",
      competition: "High",
      description: "Explaining advanced tech and AI breakthroughs. Elite ad bidding due to SaaS and B2B software companies targeting this audience. Topics like 'AI replacing jobs', 'new robot breakthroughs', and 'future tech predictions' go viral consistently.",
      scriptTip: "Use the 'existential threat' hook pattern: open with how AI will eliminate a specific job, then pivot to show new opportunities created. Viewers stay hooked from fear → relief.",
      exampleTopics: ["What happens when AI replaces all programmers?", "This new robot just made humans obsolete", "The hidden AI tool making people $50K/month"],
      color: "#00f3ff",
      delay: "delay-100"
    },
    {
      icon: <LineChart size={32} color="#00ff88" />,
      title: "Personal Finance & Wealth",
      rpm: "$22.50",
      target: "Male/Female, 28-55",
      watchTime: "8-12 mins",
      difficulty: "Easy",
      competition: "Very High",
      description: "The absolute highest paying niche on YouTube. Advertisers are financial institutions, crypto exchanges, credit cards, and brokerage firms. Each viewer is worth $50-$200 in potential account signups.",
      scriptTip: "Build scripts around 'money mistakes' or 'wealth secrets the rich don't share'. The aspirational angle drives massive engagement. Always include specific dollar amounts in titles.",
      exampleTopics: ["7 money rules that changed my life at 30", "How millionaires avoid paying taxes (legally)", "The $100/day passive income nobody talks about"],
      color: "#00ff88",
      delay: "delay-200"
    },
    {
      icon: <HeartCrack size={32} color="#ff3366" />,
      title: "Betrayal & Revenge Stories",
      rpm: "$12.82",
      target: "Female, 35-65+",
      watchTime: "15-20 mins",
      difficulty: "Very Easy",
      competition: "Medium",
      description: "High-drama stories exploiting human psychology. Extremely sticky retention because humans are wired for gossip and dramatic resolution. The demographic (35-65F) has the highest ad engagement rate on YouTube.",
      scriptTip: "Use the 3-Act ChatGPT structure: Setup (normal life) → Betrayal (shock event) → Revenge (satisfying resolution). Add multiple mini-cliffhangers every 90 seconds to prevent drop-off.",
      exampleTopics: ["My husband's secret family destroyed everything", "She stole my inheritance, so I ruined her life legally", "Caught my best friend living a double life"],
      color: "#ff3366",
      delay: "delay-300"
    },
    {
      icon: <Moon size={32} color="#8a2be2" />,
      title: "Sleep & Healing Soundscapes",
      rpm: "$8.90",
      target: "Mixed, All Ages",
      watchTime: "4-8 HOURS",
      difficulty: "Very Easy",
      competition: "Low",
      description: "Lower RPM, but insane watch times. Viewers fall asleep with the video running, pushing passive ads indefinitely. Low production effort — one 8-hour video can earn more than ten 10-minute videos combined.",
      scriptTip: "No script needed. Layer 3-4 ambient tracks (rain, fireplace, binaural beats). Add a subtle visual loop (rain on window, fireplace, northern lights). Upload as 8+ hour videos for maximum ad rolls.",
      exampleTopics: ["8 Hours Deep Sleep Rain Sounds", "Healing Frequency 432Hz + Ocean Waves", "Cozy Fireplace with Thunderstorm Ambience"],
      color: "#8a2be2",
      delay: "delay-100"
    },
    {
      icon: <Scale size={32} color="#ffcc00" />,
      title: "True Crime & Legal Cases",
      rpm: "$15.20",
      target: "Mixed, 20-50",
      watchTime: "12-18 mins",
      difficulty: "Medium",
      competition: "High",
      description: "Highly engaged, binge-watching audience. True crime viewers watch 3-5 videos in a row — the algorithm loves session time. Advertisers include legal services, insurance companies, and security product vendors.",
      scriptTip: "Start with the crime scene, then work backwards. Use the 'unreliable narrator' technique where you reveal contradicting evidence mid-video to spike retention graphs.",
      exampleTopics: ["The serial killer who fooled FBI for 30 years", "This CEO murdered his partner over $2M", "The perfect crime that was solved by a pizza order"],
      color: "#ffcc00",
      delay: "delay-200"
    },
    {
      icon: <Dumbbell size={32} color="#ff6600" />,
      title: "Health & Longevity Science",
      rpm: "$16.80",
      target: "Male/Female, 30-60",
      watchTime: "10-14 mins",
      difficulty: "Medium",
      competition: "Medium",
      description: "Massive evergreen demographic obsessed with living longer and healthier. Supplement companies, health apps, and wellness brands bid aggressively. Content stays relevant for years — one video can earn for 24+ months.",
      scriptTip: "Lead with a shocking health fact ('This one food is silently destroying your gut'). Use fear → solution → hope structure. Always cite a study (even if simplified).",
      exampleTopics: ["Scientists discovered a drug that reverses aging", "Stop eating this food immediately (new study)", "The 5 habits of people who live to 100"],
      color: "#ff6600",
      delay: "delay-300"
    }
  ];

  return (
    <section className="masterclass-section" id="top-niches" style={{ minHeight: '200vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(255, 51, 102, 0.1)', borderColor: 'rgba(255, 51, 102, 0.2)', color: 'var(--accent-pink)' }}>
          02 — The Strategy Deep Dive
        </div>

        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
            The 2026 Mega-Niches
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto', lineHeight: 1.7 }}>
            To succeed without showing your face, you must engineer high retention or high advertiser desirability. Here is the raw demographic data for the top 6 US-locked niches — including our exact script strategies, example topics, and difficulty ratings.
          </p>
        </div>

        {/* How to Pick Your Niche */}
        <div className="reveal glass-panel" style={{ padding: '2.5rem', marginBottom: '4rem', borderTop: '3px solid #00f3ff', background: 'rgba(0,243,255,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <Info size={24} color="#00f3ff" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>How to Pick Your Niche</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#00f3ff', fontSize: '1rem', marginBottom: '0.5rem' }}>💰 Maximize Revenue</h4>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Pick Finance or Health. Highest RPM, but more competitive. You need better thumbnails and hooks.</p>
            </div>
            <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#00ff88', fontSize: '1rem', marginBottom: '0.5rem' }}>🚀 Fastest Growth</h4>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Pick Betrayal/Drama Stories. Easiest to go viral, lowest production costs, and female 35-65 demo watches A LOT.</p>
            </div>
            <div style={{ padding: '1.25rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ color: '#8a2be2', fontSize: '1rem', marginBottom: '0.5rem' }}>🛌 Maximum Passive</h4>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.5 }}>Pick Sleep Sounds. One 8-hour video = 30 minutes of work. Viewers literally sleep through your ad rolls. Ultra passive.</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '2rem' }}>
          {niches.map((niche, index) => (
            <div key={index} className={`glass-panel reveal ${niche.delay}`} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.25rem',
              borderTop: `4px solid ${niche.color}`,
              padding: '2.5rem 2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
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
              
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 0 }}>
                {niche.description}
              </p>

              {/* Script Strategy Tip */}
              <div style={{ 
                padding: '1.25rem', 
                background: `${niche.color}08`, 
                borderRadius: '12px', 
                border: `1px solid ${niche.color}25`
              }}>
                <p style={{ color: niche.color, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  📝 Script Strategy
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {niche.scriptTip}
                </p>
              </div>

              {/* Example Topics */}
              <div>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  🎯 Viral Topic Examples
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {niche.exampleTopics.map((topic, i) => (
                    <div key={i} style={{ 
                      padding: '0.6rem 1rem', 
                      background: 'rgba(0,0,0,0.4)', 
                      borderRadius: '8px', 
                      border: '1px solid rgba(255,255,255,0.04)',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <TrendingUp size={14} color={niche.color} style={{ flexShrink: 0 }} />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Deep Dive Data Grid */}
              <div style={{ 
                marginTop: 'auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                background: 'rgba(0,0,0,0.5)',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Demo</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>{niche.target}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Watch Time</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: niche.color }}>{niche.watchTime}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Difficulty</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>{niche.difficulty}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', marginBottom: '0.25rem' }}>Competition</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>{niche.competition}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
