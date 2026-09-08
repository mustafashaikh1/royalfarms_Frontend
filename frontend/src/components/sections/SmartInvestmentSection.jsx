import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';

export default function SmartInvestmentSection({ onOpenContact }) {
  return (
    <section id="investment" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Stylized Image-Masked Big Headline */}
        <div className="image-masked-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
          Smart Livestock Investment <br />
          with Royal Farms
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
          Invest in professionally managed livestock farming backed by expert care, transparent operations, and sustainable practices designed for consistent long-term returns.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenContact("Book A Slot Now")}
            className="px-8 py-4 rounded-full bg-[#0B5136] hover:bg-[#1f7a4d] text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-0.5 flex items-center gap-2.5"
          >
            <CalendarCheck className="w-5 h-5 text-[#FF9046]" />
            <span>Book A Slot Now</span>
          </button>

          <a
            href="tel:6362900144"
            className="px-8 py-4 rounded-full bg-[#FF9046] hover:bg-[#e0762f] text-gray-900 font-bold text-base transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-[#0B5136]" />
            <span>6362900144</span>
          </a>
        </div>

      </div>
    </section>
  );
}
