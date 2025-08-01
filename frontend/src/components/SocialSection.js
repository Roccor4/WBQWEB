import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Music, Globe } from 'lucide-react';

const SocialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/weburnedquietly/',
      icon: Instagram,
      description: 'Visual chronicles from the Order'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@weburnedquietly',
      icon: Music,
      description: 'Sacred rituals in motion'
    },
    {
      name: 'Author Website',
      url: (https://vladimirfischer.wordpress.com/)',
      icon: Globe,
      description: 'The author\'s domain'
    }
  ];

  return (
    <section 
      id="social" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="ceremonial-heading text-3xl md:text-4xl lg:text-5xl text-amber-100 mb-16">
            Follow the path beyond the walls…
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <div 
                  key={link.name}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 rounded-lg border border-amber-900/20 bg-amber-950/10 backdrop-blur-sm hover:border-amber-700/40 hover:bg-amber-950/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-amber-900/20 rounded-full flex items-center justify-center group-hover:bg-amber-800/30 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="ceremonial-heading text-xl text-amber-100 mb-2 group-hover:text-amber-50 transition-colors duration-300">
                          {link.name}
                        </h3>
                        <p className="literary-text text-sm text-amber-200/70 group-hover:text-amber-200/90 transition-colors duration-300">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;