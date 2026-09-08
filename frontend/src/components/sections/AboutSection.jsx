import React from 'react';
import { ArrowUpRight, CheckCircle2, Phone } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Farm Images & Experience Counter Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/assets/pexels-jloren3bcnspain-726123-1536x1152.jpg"
                  alt="Mali Patil Farm ethical livestock management"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/assets/pexels-pixabay-144240-1536x1088.jpg"
                  alt="Mali Patil Farm pasture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Years of Experience Badge */}
              <div className="absolute top-6 left-6 bg-[#0B5136] text-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-emerald-700/50">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#FF9046] font-sans">
                  24+
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold leading-tight text-gray-200">
                  Years of<br />Experience
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            
            <div className="inline-block text-sm font-semibold tracking-wider uppercase text-[#0B5136] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              About Mali Patil Farm
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Managed Livestock <br />
              <span className="text-[#0B5136]">Farming by Mali Patil Farm</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              <strong>Mali Patil Farm</strong> offers a fully managed livestock farming model focused on ethical animal care, professional operations, and consistent long-term returns.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition-colors">
                <img 
                  src="/assets/sanctuary.png" 
                  alt="Ethical animal care" 
                  className="w-10 h-10 object-contain shrink-0" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Ethical Animal Care</h4>
                  <p className="text-xs text-gray-500 mt-1">Healthy livestock raised in clean, stress-free environments.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-emerald-200 transition-colors">
                <img 
                  src="/assets/sustainable-agriculture.png" 
                  alt="Sustainable Farming" 
                  className="w-10 h-10 object-contain shrink-0"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Sustainable Farming</h4>
                  <p className="text-xs text-gray-500 mt-1">Responsible practices focused on long-term growth and returns.</p>
                </div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#0B5136] shrink-0 mt-0.5" />
                <span><b>Fully Managed Farms –</b> End-to-end livestock care and farm operations handled by experts.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#0B5136] shrink-0 mt-0.5" />
                <span><b>Transparent Operations –</b> Regular updates, clear processes, and complete visibility.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#0B5136] shrink-0 mt-0.5" />
                <span><b>Professional Supervision –</b> Dedicated veterinarians and agronomists on-site.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact("Discover More")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B5136] hover:bg-[#1f7a4d] text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="tel:6362900144"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9046] hover:bg-[#e0762f] text-gray-900 font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#0B5136]" />
                <span>6362900144</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
