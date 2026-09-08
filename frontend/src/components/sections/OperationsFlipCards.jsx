import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Layers } from 'lucide-react';

const operations = [
  {
    id: 'poultry',
    title: 'POULTRY INTEGRATION',
    description: 'We aim to collaborate with existing integrated players in the market, targeting an average of 6 batches per annum.',
    image: '/assets/photorealistic-scene-poultry-farm-with-chickens-scaled.jpg',
    tag: 'Poultry Farming'
  },
  {
    id: 'cattle',
    title: 'CATTLE OPERATIONS',
    description: 'We focus on accumulating and selling high-quality milking cows between INR 50,000 to INR 80,000 based on breed.',
    image: '/assets/heads-black-white-holstein-cows-feeding-grass-stable-holland-scaled.jpg',
    tag: 'Dairy & Milking Cows'
  },
  {
    id: 'sheep-goat',
    title: 'SHEEP & GOAT FARMING',
    description: 'We pursue integrated farming of sheep and goats for breeding, aiming to double the average number in one year.',
    image: '/assets/Sheep-farming.webp',
    tag: 'Breeding & Multiplication'
  }
];

export default function OperationsFlipCards({ onOpenContact }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="operations" className="py-20 bg-[#f4f7f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0B5136] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Integrated Agriculture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sans">
            Our Core Farming Operations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Hover or tap to reveal the commercial and operational details of each livestock venture.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {operations.map((item) => {
            const isFlipped = flippedCard === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="group h-[400px] perspective-1000 cursor-pointer select-none"
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d rounded-2xl shadow-md transition-transform ${
                    isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
                  }`}
                >
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-lg border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-7">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#FF9046] mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium mt-3">
                        <span>Details &amp; Objectives</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#0B5136] text-white p-8 flex flex-col justify-between backface-hidden rotate-y-180 shadow-xl border border-emerald-800">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-800/80 flex items-center justify-center text-[#FF9046] font-bold">
                        ✦
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-white border-b border-white/20 pb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenContact(item.title);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[#FF9046] hover:bg-[#e0762f] text-gray-900 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Invest In This Model</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
