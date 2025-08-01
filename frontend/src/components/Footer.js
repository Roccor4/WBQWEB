import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-amber-900/20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Footer emblem */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
              alt="Order Emblem" 
              className="order-emblem w-12 h-12 opacity-60"
            />
          </div>

          <div className="space-y-4">
            <h3 className="ceremonial-heading text-xl text-amber-100">
              Ordo Solis
            </h3>
            
            <p className="literary-text text-amber-200/70 max-w-md mx-auto">
              <em>"In the Sun's embrace, we find our truth. In its fire, we are reborn."</em>
            </p>

            <div className="pt-6 border-t border-amber-900/20">
              <p className="literary-text text-sm text-amber-200/50">
                © 2025 We Burned, Quietly. All sacred rites reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle footer watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="https://customer-assets.emergentagent.com/job_burned-quietly-1/artifacts/u6ytc338_order_emblem_transparent%20%281%29.png" 
            alt="" 
            className="w-64 h-64 opacity-[0.01]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;