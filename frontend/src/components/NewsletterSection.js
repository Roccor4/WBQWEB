import React, { useEffect, useRef, useState } from 'react';

const NewsletterSection = () => {
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

  useEffect(() => {
    // Custom styles for MailerLite form to match our aesthetic
    const style = document.createElement('style');
    style.textContent = `
      .ml-embedded .ml-form-wrapper {
        background: transparent !important;
        border: none !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form {
        background: rgba(61, 37, 26, 0.3) !important;
        border: 1px solid rgba(201, 168, 118, 0.3) !important;
        border-radius: 8px !important;
        padding: 2rem !important;
        backdrop-filter: blur(10px) !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-field-group input {
        background: rgba(43, 27, 17, 0.8) !important;
        border: 1px solid rgba(201, 168, 118, 0.4) !important;
        border-radius: 4px !important;
        color: #e8dcc0 !important;
        font-family: 'Lora', 'Libre Baskerville', serif !important;
        font-size: 16px !important;
        padding: 12px 16px !important;
        transition: all 0.3s ease !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-field-group input:focus {
        border-color: rgba(201, 168, 118, 0.8) !important;
        box-shadow: 0 0 0 2px rgba(201, 168, 118, 0.2) !important;
        outline: none !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-field-group input::placeholder {
        color: rgba(232, 220, 192, 0.5) !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-field-group label {
        color: #c9a876 !important;
        font-family: 'Lora', 'Libre Baskerville', serif !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        margin-bottom: 8px !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form button[type="submit"] {
        background: #8b2635 !important;
        border: 1px solid #8b2635 !important;
        border-radius: 6px !important;
        color: #e8dcc0 !important;
        font-family: 'Cinzel Decorative', 'Cormorant Garamond', serif !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        letter-spacing: 0.02em !important;
        padding: 14px 32px !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) !important;
        transition: all 0.3s ease !important;
        cursor: pointer !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form button[type="submit"]:hover {
        background: #a12d3d !important;
        border-color: #a12d3d !important;
        transform: translateY(-1px) !important;
        box-shadow: 0 4px 12px rgba(139, 38, 53, 0.3) !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form button[type="submit"]:active {
        transform: translateY(0) !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-form-message {
        color: #c9a876 !important;
        font-family: 'Lora', 'Libre Baskerville', serif !important;
        text-align: center !important;
        margin-top: 1rem !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-form-message.ml-form-success {
        color: #4ade80 !important;
      }
      
      .ml-embedded .ml-form-wrapper .ml-form .ml-form-message.ml-form-error {
        color: #f87171 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section 
      id="newsletter" 
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section emblem */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
            alt="" 
            className={`order-emblem w-12 h-12 md:w-16 md:h-16 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          />
        </div>

        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="ceremonial-heading text-3xl md:text-4xl lg:text-5xl text-amber-100 mb-6">
            Take your place in the Sun's tight embrace
          </h2>

          <p className="literary-text text-base md:text-lg text-amber-200/90 mb-12 leading-relaxed max-w-xl mx-auto">
            Receive your sacred <em>The Pocket Guide of the Ordo Solis</em> and take the Order Rank Quiz 
            to learn which rank you are most suited for. Your initiation begins the moment you open the seal.
          </p>

          {/* MailerLite embedded form */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="ml-embedded" data-form="0U4www"></div>
          </div>
        </div>

        {/* Atmospheric effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-900/5 rounded-full blur-xl candle-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-900/5 rounded-full blur-lg candle-glow" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;