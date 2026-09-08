import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Users2, Award } from 'lucide-react';

const pillars = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0B5136]" />,
    title: "Fully Managed Farms",
    description: "End-to-end farm operations handled by experienced professionals."
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-[#0B5136]" />,
    title: "Ethical Animal Care",
    description: "Healthy livestock raised in clean and stress-free environments."
  },
  {
    icon: <Eye className="w-6 h-6 text-[#0B5136]" />,
    title: "Transparent Process",
    description: "Clear operations with regular updates and complete visibility."
  },
  {
    icon: <Users2 className="w-6 h-6 text-[#0B5136]" />,
    title: "Experienced Team",
    description: "Managed by experts with strong agricultural and farming knowledge."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#f8faf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pillars List */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#0B5136] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Why Choose Royal Farms</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Experience Purity, Freshness, and <span className="text-[#0B5136]">Trust with Royal Farm</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                <strong>Royal Farms</strong> offers a professionally managed livestock farming model focused on ethical practices, transparency, and long-term value.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 flex flex-col space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
              <img
                src="/assets/heads-black-white-holstein-cows-feeding-grass-stable-holland-scaled.jpg"
                alt="Royal Farms pasture livestock"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[#FF9046] font-bold text-sm uppercase tracking-widest">
                  Ethical &amp; Transparent
                </span>
                <h4 className="text-2xl font-bold mt-1">
                  Commitment to Quality &amp; Animal Welfare
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
