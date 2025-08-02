import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Central Order Emblem */}
        <div className="mb-12 flex justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
            alt="Order of the Sun Emblem" 
            className="order-emblem w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 subtle-glow"
          />
        </div>

        {/* Main Headline */}
        <h1 className="ceremonial-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-amber-100 mb-8 leading-tight">
          The Sun burns away the unworthy.
          <br />
          <span className="text-amber-200">Will you survive the fire?</span>
        </h1>

        {/* Subheading */}
        <p className="literary-text text-lg md:text-xl lg:text-2xl text-amber-200/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          A dark literary gothic set in the shadow of the Dolomites. 
          <br className="hidden md:block" />
          Indoctrination, forbidden love, and the price of freedom.
        </p>

        {/* Call to Action */}
        <Button 
          onClick={scrollToNewsletter}
          className="oath-button bg-red-900 hover:bg-red-800 text-amber-100 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-md font-semibold tracking-wide"
          size="lg"
        >
          Swear the Oath
        </Button>

        {/* Subtle atmospheric effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-900/05 rounded-full blur-3xl subtle-glow"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
</div>
    </section>
  );
};

export default HeroSection;