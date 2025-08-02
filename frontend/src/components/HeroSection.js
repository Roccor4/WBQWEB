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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      {/* Fire Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 0.25 }}
      >
        <source src="/fire.mp4" type="video/mp4" />
      </video>

      {/* Brown Overlay to keep dark gothic look */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b0f07]/90 to-[#2b1b11]/90 z-0"></div>

      {/* Main content */}
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

        {/* Call to Action + Arrow */}
        <div className="flex flex-col items-center mt-8">
          <Button
            onClick={scrollToNewsletter}
            className="oath-button bg-red-900 hover:bg-red-800 text-amber-100 text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-md font-semibold tracking-wide"
            size="lg"
          >
            Swear the Oath
          </Button>
          <div className="mt-4 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;