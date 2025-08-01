import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-amber-900/30 bg-black/30 section-bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Footer emblem */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
              alt="Order Emblem" 
              className="order-emblem w-16 h-16 opacity-70 candle-glow"
            />
          </div>

          <div className="space-y-6">
            <h3 className="ceremonial-heading text-2xl md:text-3xl text-amber-100">
              We Burned, Quietly
            </h3>
            
            <p className="literary-text text-amber-200/80 max-w-lg mx-auto text-lg leading-relaxed">
              <em>"In the Sun's embrace, we find our truth. In its fire, we are reborn."</em>
            </p>

            <div className="pt-8 border-t border-amber-900/20">
              <p className="literary-text text-sm text-amber-200/60">
                © 2025 We Burned, Quietly. All sacred rites reserved.
              </p>
              <p className="literary-text text-xs text-amber-200/40 mt-2">
                A dark literary gothic by the shadows of the Dolomites
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced footer watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
            alt="" 
            className="w-80 h-80 opacity-[0.02]"
          />
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-900/20"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-900/20"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-900/20"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-900/20"></div>
      </div>
    </footer>
  );
};

export default Footer;