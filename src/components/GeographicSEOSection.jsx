import React from 'react';
import { Map, ShieldAlert, Landmark, Lock, RefreshCcw } from 'lucide-react';

export default function GeographicSEOSection() {
  return (
    <section className="masterclass-section" id="geographic-seo">
      <div className="container">
        
        <div className="reveal badge" style={{ marginBottom: '2rem', background: 'rgba(0, 255, 136, 0.1)', borderColor: 'rgba(0, 255, 136, 0.2)', color: 'var(--accent-green)' }}>
          05 — The Algorithm Genesis
        </div>
        
        <div className="grid-2" style={{ alignItems: 'flex-start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="reveal text-gradient" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
              Cracking the <br />US Algorithm
            </h2>
            <p className="reveal delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              If you don't live in the US, uploading normally will instantly flag your account as Tier-3. You must use the <strong>Channel Genesis Protocol</strong>.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              
              <div className="glass-panel reveal delay-200" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', borderLeft: '3px solid #00ff88' }}>
                <div style={{ color: 'var(--accent-green)' }}><Lock size={32} /></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Phase 1: The IP Lock (Residential Proxy/RDP)</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>Do not use a free VPN. Google detects data-center IPs. Rent a Residential Dedicated Proxy or a US-based Windows RDP. Create the Gmail account and the YouTube channel while connected strictly to that IP.</p>
                </div>
              </div>
              
              <div className="glass-panel reveal delay-300" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', borderLeft: '3px solid #ffcc00' }}>
                <div style={{ color: '#ffcc00' }}><RefreshCcw size={32} /></div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Phase 2: The First 3 Uploads Validation</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>You MUST upload your first 3 videos using this proxy. Ensure the timezone matches the proxy state (e.g. EST for New York). After 3 videos, the channel's geographic metadata is deeply locked to the USA.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="reveal-left delay-400 glass-panel" style={{ background: 'rgba(5, 5, 8, 0.9)', padding: '3rem', position: 'relative' }}>
            
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}>
              <Landmark size={150} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Landmark color="#00f3ff" />
                The Financial Bridge
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                  Once you reach the 1,000 sub / 4,000 hour milestone, how do you get paid the US Dollars if you don't have a US Bank account?
                </p>

                <div style={{ background: 'rgba(0, 243, 255, 0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,243,255,0.2)' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#00f3ff', marginBottom: '0.5rem', fontWeight: 700 }}>Solution: Payoneer or Wise</h4>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    These services provide you with a valid US checking account and routing number. When applying for AdSense, create a US AdSense account and link this virtual routing number. 
                    <br/><br/>
                    Google sends USD to the virtual account, and Wise/Payoneer wire-transfers the money to your local bank account safely.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ff3366', padding: '1rem', background: 'rgba(255,51,102,0.1)', borderRadius: '12px' }}>
                  <ShieldAlert size={24} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>WARNING: Never log into the US AdSense account without your dedicated proxy active.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
