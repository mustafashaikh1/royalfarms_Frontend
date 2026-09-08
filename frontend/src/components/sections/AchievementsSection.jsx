import React, { useState, useEffect } from 'react';
import { fetchFarmStats } from '../../services/api';
import { Award, Trees, Users2 } from 'lucide-react';

const defaultStats = [
  { metricKey: "farms_managed", metricValue: 50, metricSuffix: "+", label: "Farms Managed", iconUrl: "/assets/field.png" },
  { metricKey: "client_satisfaction", metricValue: 100, metricSuffix: "%", label: "Client Satisfaction", iconUrl: "/assets/World-Map-a.png" },
  { metricKey: "farm_experts", metricValue: 25, metricSuffix: "+", label: "Skilled Farm Experts", iconUrl: "/assets/farmer.png" }
];

export default function AchievementsSection() {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    fetchFarmStats().then((data) => {
      if (data && data.length > 0) {
        // filter out years_experience if we want the 3 bottom achievement cards
        const filtered = data.filter(d => d.metricKey !== 'years_experience');
        if (filtered.length > 0) {
          setStats(filtered);
        }
      }
    });
  }, []);

  const renderStatIcon = (key, iconUrl, label) => {
    if (key === 'farms_managed') return <Trees className="w-8 h-8 text-[#FF9046]" />;
    if (key === 'farm_experts') return <Users2 className="w-8 h-8 text-[#FF9046]" />;
    if (key === 'client_satisfaction') {
      return (
        <img
          src={iconUrl || "/assets/World-Map-a.png"}
          alt={label}
          className="w-10 h-10 object-contain brightness-125"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      );
    }
    return <Award className="w-8 h-8 text-[#FF9046]" />;
  };

  return (
    <section id="achievements" className="py-20 bg-[#0B5136] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-700">
            <Award className="w-3.5 h-3.5 text-[#FF9046]" />
            <span>Our Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight">
            Delivering Ethical Livestock Farming with Trust
          </h2>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.metricKey || idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                {renderStatIcon(stat.metricKey, stat.iconUrl, stat.label)}
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold text-[#FF9046] font-sans tracking-tight">
                {stat.metricValue}{stat.metricSuffix}
              </div>

              <div className="mt-2 text-base font-semibold text-gray-200 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
