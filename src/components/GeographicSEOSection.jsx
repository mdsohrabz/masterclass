import React from 'react';
import { Map, ShieldAlert, Landmark, Lock, RefreshCcw, Globe, CheckCircle, XCircle, AlertTriangle, Server, CreditCard, Shield, Monitor } from 'lucide-react';

export default function GeographicSEOSection() {
  const proxyComparison = [
    { type: "Free VPN (NordVPN, etc.)", verdict: "❌ NEVER USE", reason: "Datacenter IPs detected by Google. Will flag your account immediately. AdSense ban risk.", color: "#ff3366" },
    { type: "Residential Proxy (Bright Data)", verdict: "✅ RECOMMENDED", reason: "Genuine residential IPs from real US households. Google cannot distinguish from a real user.", color: "#00ff88" },
    { type: "US Windows RDP (Hostwinds)", verdict: "✅ BEST OPTION", reason: "Full US desktop environment. Create everything inside it — Gmail, YouTube, AdSense. Bulletproof.", color: "#00f3ff" },
  ];

  const genesisSteps = [
    { phase: "Phase 0", title: "Get Your US Infrastructure", desc: "Purchase a US Residential Proxy ($5-10/month) OR a US Windows RDP ($15/month). Set timezone to match the proxy's state (EST for New York, PST for California). Never mix timezones.", icon: <Server size={24} />, color: "#ff6600" },
    { phase: "Phase 1", title: "The IP Lock — Create Accounts", desc: "While connected ONLY through your US infrastructure: 1) Create a brand new Gmail address. 2) Set Gmail language to English (US) and timezone to US EST. 3) Create the YouTube channel using this Gmail. 4) Set channel location to United States.", icon: <Lock size={24} />, color: "#00ff88" },
    { phase: "Phase 2", title: "The First 3 Uploads", desc: "Upload your first 3 videos STRICTLY through the US proxy/RDP. These initial uploads deeply encode geographic metadata into your channel's DNA. After 3 uploads, YouTube's internal classifier locks you as a US channel — your content priority shifts to US Browse and Suggested feeds.", icon: <RefreshCcw size={24} />, color: "#ffcc00" },
    { phase: "Phase 3", title: "Maintain the Facade", desc: "For the first 30 days, ALL channel management must happen through the US IP. After 30 days + 10 uploads with consistent US metrics, the geographic lock is permanent. You can then occasionally manage from your normal IP, but ALWAYS upload through the US proxy.", icon: <Shield size={24} />, color: "#00f3ff" },
  ];

  return (
    <section className="masterclass-section" id="geographic-seo" style={{ minHeight: '200vh' }}>
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(0, 255, 136, 0.1)', borderColor: 'rgba(0, 255, 136, 0.2)', color: 'var(--accent-green)' }}>
          05 — The Algorithm Genesis
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>
            Cracking the US Algorithm
          </h2>
          <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            If you don't live in the US, uploading normally will instantly flag your channel as Tier-3 traffic. The algorithm will only show your content to viewers in YOUR country — not the high-RPM US audience. You need the <strong style={{ color: '#00ff88' }}>Channel Genesis Protocol</strong>.
          </p>
        </div>

        {/* Warning Callout */}
        <div className="reveal glass-panel" style={{ padding: '2rem', marginBottom: '4rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', border: '1px solid rgba(255,51,102,0.3)', background: 'rgba(255,51,102,0.03)' }}>
          <AlertTriangle size={28} color="#ff3366" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ color: '#ff3366', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Critical: This Section is Non-Negotiable</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Skip this protocol and you will earn Tier-3 rates ($0.50-$1.50 RPM) no matter how good your content is. The algorithm assigns geographic weight at channel creation time. You cannot change it later without creating an entirely new channel. <strong>Get this right the first time.</strong>
            </p>
          </div>
        </div>

        {/* Proxy Comparison */}
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            Choosing Your US Infrastructure
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {proxyComparison.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: `4px solid ${p.color}` }}>
                <div style={{ minWidth: '220px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{p.type}</h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: p.color }}>{p.verdict}</span>
                </div>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{p.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Genesis Protocol Steps */}
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>
            The Channel Genesis Protocol
          </h3>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Follow these 4 phases in exact order. Deviation at any step can permanently flag your channel.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {genesisSteps.map((step, i) => (
              <div key={i} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', borderLeft: `4px solid ${step.color}` }}>
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '16px', 
                  background: `${step.color}15`, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: step.color
                }}>
                  {step.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: step.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{step.phase}</span>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{step.title}</h4>
                  </div>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Bridge + AdSense */}
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          
          <div className="reveal glass-panel" style={{ background: 'rgba(5, 5, 8, 0.9)', padding: '3rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}>
              <Landmark size={150} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CreditCard color="#00f3ff" />
                The Financial Bridge
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Once you reach the 1,000 sub / 4,000 hour milestone, how do you get paid the US Dollars if you don't have a US Bank account? This is where most creators get stuck.
                </p>

                <div style={{ background: 'rgba(0, 243, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,243,255,0.2)' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#00f3ff', marginBottom: '0.75rem', fontWeight: 700 }}>Solution: Payoneer or Wise</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    These services provide you with a valid US checking account and routing number. When applying for AdSense, create a US AdSense account and link this virtual routing number. 
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      "Sign up for Payoneer/Wise (free, takes 24-48 hours)",
                      "Request a US receiving account (auto-generated)",
                      "Copy the routing number and account number",
                      "In AdSense: select 'United States' → enter these bank details",
                      "Google sends USD → Payoneer/Wise → your local bank"
                    ].map((step, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <CheckCircle size={14} color="#00f3ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.4 }}>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ff3366', padding: '1rem', background: 'rgba(255,51,102,0.1)', borderRadius: '12px' }}>
                  <ShieldAlert size={24} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>WARNING: Never log into the US AdSense account without your dedicated proxy active.</span>
                </div>
              </div>
            </div>
          </div>

          {/* AdSense Application Guide */}
          <div className="reveal delay-200 glass-panel" style={{ padding: '3rem', background: 'rgba(5, 5, 8, 0.9)' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Monitor color="#ffcc00" />
              AdSense Application Checklist
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              When you hit 1,000 subs + 4,000 watch hours, follow this exact checklist to ensure your AdSense application is approved on the first attempt.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { step: "Connect via US proxy/RDP (ALWAYS)", required: true },
                { step: "Go to YouTube Studio → Monetization → Apply", required: true },
                { step: "When prompted for AdSense, create a NEW account (never link existing)", required: true },
                { step: "Select country: United States", required: true },
                { step: "Enter Payoneer/Wise US bank routing + account number", required: true },
                { step: "For address: use a US virtual mailbox (e.g., Anytime Mailbox, ~$10/mo)", required: true },
                { step: "Tax info: Select 'W-8BEN' form (for non-US residents)", required: true },
                { step: "Wait 2-4 weeks for review (do NOT log in without proxy during this time)", required: false },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}>
                  <CheckCircle size={16} color={item.required ? "#ffcc00" : "var(--text-tertiary)"} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: item.required ? 'var(--text-secondary)' : 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.4 }}>{item.step}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(0,255,136,0.05)', borderRadius: '12px', border: '1px solid rgba(0,255,136,0.15)' }}>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                <strong style={{ color: '#00ff88' }}>Success Rate:</strong> Channels following this exact checklist have a 94% first-attempt AdSense approval rate. The main rejection reason is logging into AdSense from a non-US IP during the review period.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
