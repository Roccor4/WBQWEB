import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Candle + Emblem Image */}
        <div className="mb-12 flex justify-center">
          <div 
            className="parchment-image vignette parallax-float"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/7q1a9hhv_ChatGPT%20Image%20Apr%2026%2C%202025%2C%2009_48_49%20AM.png" 
              alt="Sacred Candle and Emblem" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-2xl candle-glow"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1 
          className="ceremonial-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-100 mb-6 leading-tight"
          style={{ opacity: Math.max(0.3, 1 - scrollY * 0.002) }}
        >
          The Sun burns away the unworthy.
          <br />
          <span className="text-amber-200">Will you survive the fire?</span>
        </h1>

        {/* Subheading */}
        <p 
          className="literary-text text-lg md:text-xl lg:text-2xl text-amber-200/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ opacity: Math.max(0.5, 1 - scrollY * 0.001) }}
        >
          A dark literary gothic set in the shadow of the Dolomites. 
          <br className="hidden md:block" />
          Indoctrination, forbidden love, and the price of freedom.
        </p>

        {/* Call to Action */}
        <Button 
          onClick={scrollToNewsletter}
          className="oath-button bg-red-900 hover:bg-red-800 text-amber-100 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-md font-semibold tracking-wide shadow-lg"
          size="lg"
        >
          Swear the Oath
        </Button>

        {/* Atmospheric glow effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl candle-glow"></div>
          <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/5 rounded-full blur-2xl candle-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 w-48 h-48 bg-amber-800/5 rounded-full blur-xl candle-glow" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-300/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;