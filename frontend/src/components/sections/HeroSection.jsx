import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, PhoneCall } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "/assets/Frame-30.webp",
    headlineStart: "Trusted ",
    headlineHighlight: "Livestock Farming",
    headlineEnd: " for Smart Investors",
    description: "Mali Patil Farm provides ethical, high-return livestock farming opportunities across India.",
    btnPrimary: "Learn More",
    btnPrimaryAction: "#services",
    btnSecondary: "Contact Us",
    btnSecondaryAction: "contact"
  },
  {
    id: 2,
    image: "/assets/Sheep-farming.webp",
    headlineStart: "Professionally Managed ",
    headlineHighlight: "Farms Built on Trust",
    headlineEnd: " & Transparency",
    description: "Mali Patil Farm delivers ethically managed poultry, sheep, and cattle farming solutions with transparent operations, professional care, and long-term value.",
    btnPrimary: "Talk to an Expert",
    btnPrimaryAction: "contact",
    btnSecondary: "Explore Services",
    btnSecondaryAction: "#services"
  },
  {
    id: 3,
    image: "/assets/Seasonal-Care-Tips-for-Healthy-Livestock-All-Year-Round.webp",
    headlineStart: "Sustainable & Ethical ",
    headlineHighlight: "Agri-Husbandry",
    headlineEnd: " Across India",
    description: "End-to-end livestock care, smart EC shed monitoring, and structured commercial growth.",
    btnPrimary: "Book A Slot Now",
    btnPrimaryAction: "contact",
    btnSecondary: "Our Achievements",
    btnSecondaryAction: "#achievements"
  }
];

export default function HeroSection({ onOpenContact }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[85vh] min-h-[580px] max-h-[820px] w-full overflow-hidden flex items-center bg-gray-900">
      {/* Background Slides */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-[6000ms]`}
        >
          <img
            src={s.image}
            alt="Mali Patil Farm hero slide"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = '/assets/photorealistic-scene-poultry-farm-with-chickens-scaled.jpg';
            }}
          />
          {/* Subtle Dark Gradient Overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-2xl text-white space-y-6 animate-fadeIn">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span>✦ Ethical Agri-Livestock Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] font-sans">
            {slide.headlineStart}
            <span className="text-[#FF9046] underline decoration-wavy decoration-[#FF9046]/40 underline-offset-8">
              {slide.headlineHighlight}
            </span>
            {slide.headlineEnd}
          </h1>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl font-normal">
            {slide.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                if (slide.btnPrimaryAction === "contact") {
                  onOpenContact(slide.btnPrimary);
                } else {
                  window.location.href = slide.btnPrimaryAction;
                }
              }}
              className="px-7 py-3.5 rounded-full bg-[#FF9046] hover:bg-[#e0762f] text-gray-900 font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>{slide.btnPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (slide.btnSecondaryAction === "contact") {
                  onOpenContact(slide.btnSecondary);
                } else {
                  window.location.href = slide.btnSecondaryAction;
                }
              }}
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FF9046]" />
              <span>{slide.btnSecondary}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentSlide 
                ? 'w-8 h-2.5 bg-[#FF9046]' 
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
