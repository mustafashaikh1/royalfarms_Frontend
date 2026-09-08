import React from 'react';

export default function MarqueeTicker() {
  const marqueeItems = [
    "Poultry Integration ✦",
    "Cattle Operations ✦",
    "Sheep & Goat Farming ✦",
    "Ethical Livestock ✦",
    "Sustainable Growth ✦",
    "Expert Veterinary Care ✦",
    "High Quality Nutrition ✦"
  ];

  return (
    <div className="w-full overflow-hidden bg-emerald-900/10 py-6 border-y border-emerald-800/15">
      <div className="animate-rf-scroll flex gap-8 whitespace-nowrap">
        {/* Repeated twice to create seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
          <span key={idx} className="rf-marquee-text font-bold px-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
