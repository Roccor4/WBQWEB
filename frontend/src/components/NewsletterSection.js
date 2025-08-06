import React, { useEffect, useRef, useState } from 'react';

const NewsletterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Animate visibility
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

  // Ensure MailerLite form loads after mount
  useEffect(() => {
    if (window.ml && typeof window.ml === 'function') {
      window.ml('loadForms');
    }
  }, []);

  // Keep your custom styling injection
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'mailerlite-custom-styles';
    style.textContent = `
      /* Your form styling stays here exactly as you wrote it */
    `;

    const existingStyle = document.getElementById('mailerlite-custom-styles');
    if (existingStyle) existingStyle.remove();
    document.head.appendChild(style);

    return () => {
      const styleToRemove = document.getElementById('mailerlite-custom-styles');
      if (styleToRemove) styleToRemove.remove();
    };
  }, []);

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="py-20 md:py-32 relative section-bg-dark"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section emblem */}
        <div className="flex justify-center mb-8">
          <img
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png"
            alt=""
            className={`order-emblem w-12 h-12 md:w-16 md:h-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          />
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="ceremonial-heading text-3xl md:text-4xl lg:text-5xl text-amber-100 mb-6">
            Take your place in the Sun's tight embrace
          </h2>

          <p className="literary-text text-base md:text-lg text-amber-200/90 mb-12 leading-relaxed max-w-xl mx-auto">
            Receive your access to the <em>Hidden Archive</em> and
            take the Order Rank Quiz to learn which rank you are most suited
            for. Your initiation begins the moment you open the seal.
          </p>

          {/* MailerLite Embed */}
          <div className="ml-embedded" data-form="0U4www"></div>
        </div>

        {/* Subtle atmospheric effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-900/03 rounded-full blur-2xl subtle-glow"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-900/03 rounded-full blur-xl subtle-glow"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
