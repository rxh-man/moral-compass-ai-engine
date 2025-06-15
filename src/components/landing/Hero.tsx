
import React from 'react';
import DilemmaAnalyzer from './DilemmaAnalyzer';

const Hero = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">The Universal Ethics Engine</h1>
      <p className="text-xl md:text-2xl text-brand-green/80 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        A revolutionary AI platform that evaluates dilemmas, policies, and behaviors through global moral lenses to harmonize AI decisions with human values.
      </p>
      <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <DilemmaAnalyzer />
      </div>
    </div>
  );
};

export default Hero;
