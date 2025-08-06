import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import LoreCards from './LoreCards'; // <-- Added import
import HiddenLoreArchive from './HiddenLoreArchive';
import NewsletterSection from './NewsletterSection';
import SocialSection from './SocialSection';
import Footer from './Footer';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen parchment-bg ${isLoaded ? 'fade-in-up' : ''}`}>
      {/* Large watermark emblem behind hero */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 emblem-watermark z-0">
        <img 
          src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
          alt="" 
          className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <div className="gold-divider"></div>
        <AboutSection />
        <div className="gold-divider"></div>

        {/* Lore Cards Section */}
<LoreCards />
<div className="gold-divider"></div>

{/* Hidden Lore Archive */}
<HiddenLoreArchive />
<div className="gold-divider"></div>

        <NewsletterSection />
        <div className="gold-divider"></div>
        <SocialSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;