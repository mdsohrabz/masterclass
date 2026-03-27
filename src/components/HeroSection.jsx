import React, { useState, useEffect } from 'react';
import { PlayCircle, TrendingUp, MonitorPlay, Users, DollarSign, Clock, Star, Award, CheckCircle2, Globe } from 'lucide-react';

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const targetCount = 2847;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Users size={20} />, value: `${count.toLocaleString()}+`, label: "Students Enrolled", color: "#00f3ff" },
    { icon: <DollarSign size={20} />, value: "$4.2M+", label: "Combined Student Revenue", color: "#00ff88" },
    { icon: <Star size={20} />, value: "4.9/5", label: "Average Rating", color: "#ffcc00" },
    { icon: <Clock size={20} />, value: "12+", label: "Hours of Content", color: "#8a2be2" }
  ];

  const features = [
    "Zero-cost AI tool stack walkthrough",
    "Exact prompts, settings & templates",
    "US algorithm cracking blueprint",
    "Self-hosted n8n automation pipeline",
    "Real case studies with real numbers",
    "Lifetime access + future updates"
  ];

  return (
    <section className="masterclass-section" style={{ minHeight: '100vh', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5,
        zIndex: 0
      }}></div>

      {/* Floating Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
        animation: 'float-slow 8s ease-in-out infinite',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(138, 43, 226, 0.06) 0%, transparent 70%)',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Trust Badges */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <div className="badge" style={{ animation: 'float-slow 6s ease-in-out infinite' }}>
              <TrendingUp size={16} /> Ultimate 2026 Strategy
            </div>
            <div className="badge" style={{ background: 'rgba(0, 255, 136, 0.1)', borderColor: 'rgba(0, 255, 136, 0.2)', color: '#00ff88' }}>
              <Award size={16} /> #1 Rated Faceless Course
            </div>
          </div>
          
          <h1 className="reveal delay-100" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.05 }}>
            USA Faceless YouTube <br />
            <span className="text-gradient-cyan">Channel Masterclass</span>
          </h1>
          
          <p className="reveal delay-200" style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '750px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Learn the exact system to dominate the high-RPM US market, automate content creation with AI, and scale a faceless empire from anywhere in the world — even if you've never made a YouTube video before.
          </p>

          <p className="reveal delay-200" style={{ fontSize: '1rem', color: 'var(--text-tertiary)', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            Covers everything from niche selection → script engineering → AI voiceover → video assembly → US algorithm cracking → full n8n automation pipeline. No fluff, no filler.
          </p>
          
          {/* Feature Checklist */}
          <div className="reveal delay-300" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '0.75rem', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            textAlign: 'left'
          }}>
            {features.map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={16} color="#00ff88" style={{ flexShrink: 0 }} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="reveal delay-300" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <button className="glass-panel" style={{ 
              padding: '1.15rem 3rem', 
              borderRadius: '100px', 
              background: 'linear-gradient(135deg, rgba(0,243,255,0.2) 0%, rgba(0,102,255,0.2) 100%)',
              border: '1px solid rgba(0,243,255,0.4)',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              animation: 'pulse-glow 3s infinite'
            }}>
              <PlayCircle size={24} />
              Start Masterclass
            </button>
            <button className="glass-panel" style={{ 
              padding: '1.15rem 3rem', 
              borderRadius: '100px', 
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}>
              <MonitorPlay size={24} />
              View Full Syllabus
            </button>
          </div>

          {/* Stats Bar */}
          <div className="reveal delay-400" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto 4rem',
            padding: '2rem',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.06)'
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: stat.color }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: stat.color, textShadow: `0 0 20px ${stat.color}30` }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="reveal delay-500" style={{ marginTop: '2rem', opacity: 0.5 }}>
            <p style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll down to dive deep</p>
            <div style={{ 
              width: '2px', 
              height: '60px', 
              background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)', 
              margin: '1rem auto 0',
              animation: 'float 2s infinite'
            }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
