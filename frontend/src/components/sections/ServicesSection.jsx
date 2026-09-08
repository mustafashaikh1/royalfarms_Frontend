import React, { useState, useEffect } from 'react';
import { fetchFarmServices } from '../../services/api';
import { Sparkles, Dna, Home, Apple, ArrowRight } from 'lucide-react';

const defaultServices = [
  {
    id: 1,
    title: "Breeding & Genetics",
    description: "We follow selective breeding practices to improve livestock quality.",
    iconUrl: "/assets/breeding.png",
    imageUrl: "/assets/pexels-jloren3bcnspain-726123-1536x1152.jpg"
  },
  {
    id: 2,
    title: "Housing & Facilities",
    description: "Clean, well-planned housing provides comfort and supports animal welfare.",
    iconUrl: "/assets/farm-1.png",
    imageUrl: "/assets/photorealistic-scene-poultry-farm-with-chickens-scaled.jpg"
  },
  {
    id: 3,
    title: "Feeding & Nutrition",
    description: "Balanced diets with quality feed, support livestock growth and health.",
    iconUrl: "/assets/feed.png",
    imageUrl: "/assets/heads-black-white-holstein-cows-feeding-grass-stable-holland-scaled.jpg"
  }
];

export default function ServicesSection({ onOpenContact }) {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    fetchFarmServices().then((data) => {
      if (data && data.length > 0) {
        setServices(data);
      }
    });
  }, []);

  const getServiceIcon = (index) => {
    if (index === 0) return <Dna className="w-6 h-6 text-[#FF9046]" />;
    if (index === 1) return <Home className="w-6 h-6 text-[#FF9046]" />;
    return <Apple className="w-6 h-6 text-[#FF9046]" />;
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0B5136] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sans">
            What We Do at Mali Patil Farm
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Professionally managed livestock farming services focused on animal health, high yield, and sustainable growth.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id || idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Image Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.imageUrl || defaultServices[idx % 3].imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = defaultServices[idx % 3].imageUrl;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center">
                    {getServiceIcon(idx)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() => onOpenContact(service.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5136] hover:text-[#FF9046] transition-colors pt-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
