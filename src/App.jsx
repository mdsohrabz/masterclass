import React, { useEffect } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';

// Components
import HeroSection from './components/HeroSection';
import RPMSection from './components/RPMSection';
import MonetizationProofSection from './components/MonetizationProofSection';
import NichesSection from './components/NichesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import AlgorithmDeepDiveSection from './components/AlgorithmDeepDiveSection';
import ToolStackSection from './components/ToolStackSection';
import WalkthroughSection from './components/WalkthroughSection';
import GeographicSEOSection from './components/GeographicSEOSection';
import BonusSection from './components/BonusSection';
import OutroSection from './components/OutroSection';

function App() {
  const containerRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="app-wrapper" ref={containerRef}>
      <HeroSection />
      <RPMSection />
      <MonetizationProofSection />
      <NichesSection />
      <CaseStudiesSection />
      <AlgorithmDeepDiveSection />
      <ToolStackSection />
      <WalkthroughSection />
      <GeographicSEOSection />
      <BonusSection />
      <OutroSection />
    </div>
  );
}

export default App;
