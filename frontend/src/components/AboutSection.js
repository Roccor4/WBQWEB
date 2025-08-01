import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setImageVisible(true), 600);
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 relative section-bg-light"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section emblem */}
        <div className="flex justify-center mb-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
            alt="" 
            className={`order-emblem w-16 h-16 md:w-20 md:h-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="ceremonial-heading text-3xl md:text-4xl lg:text-5xl text-amber-100 mb-8 text-center lg:text-left">
              About the Book
            </h2>

            <div className="literary-text text-base md:text-lg text-amber-200/90 leading-relaxed space-y-6">
              <p>
                <em>We Burned, Quietly</em> is a haunting literary novel set in a secluded cult-like academy 
                in the Dolomites during the late 1970s. Seventeen-year-old Luca Altomare is sent to the 
                mysterious Ordo Solis, where obedience is worshipped, desire is forbidden, and every boy 
                is remade in the image of the Sun.
              </p>

              <p>
                As he struggles to navigate a hierarchy built on control, ritual, and cruelty, Luca forms 
                a forbidden bond with his assigned "Vessel," Leandro—an attachment that will shape his fate 
                and test the limits of loyalty, love, and survival.
              </p>

              <p>
                Told in poetic, cinematic prose, the novel explores indoctrination, intimacy, and the 
                quiet rebellions that bloom in the shadow of power.
              </p>
            </div>
          </div>

          {/* Close-Up Boy with Candle Image */}
          <div className={`lg:col-span-2 flex justify-center lg:justify-end transition-all duration-1000 delay-800 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="parchment-image vignette max-w-sm">
              <img 
                src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/9o2w1byk_ChatGPT%20Image%20Apr%2020%2C%202025%2C%2010_16_19%20AM.png" 
                alt="Boy with Candle" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl candle-glow"
                style={{ maxHeight: '400px', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-20 hidden md:block">
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-amber-700 to-transparent"></div>
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-20 hidden md:block">
          <div className="w-1 h-32 bg-gradient-to-b from-transparent via-amber-700 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;