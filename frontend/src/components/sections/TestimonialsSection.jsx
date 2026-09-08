import React, { useState, useEffect } from 'react';
import { fetchTestimonials } from '../../services/api';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonials().then((data) => {
      if (data && data.length > 0) {
        setTestimonials(data);
      }
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - 2) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 2 ? 0 : prev + 1));
  };

  if (testimonials.length === 0) return null;

  // Display 2 cards at a time on desktop, 1 on mobile
  const visibleItems = testimonials.slice(currentIndex, currentIndex + 2);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f4f7f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-block text-xs font-semibold tracking-wider uppercase text-[#0B5136] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sans">
              Voices That Trust Royal Farm
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              Hear from happy customers who love our freshness, quality, and care — real stories that inspire trust in Royal Farm.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#0B5136] hover:border-[#0B5136] hover:text-white transition-all duration-300 flex items-center justify-center text-gray-700 shadow-sm"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#0B5136] hover:border-[#0B5136] hover:text-white transition-all duration-300 flex items-center justify-center text-gray-700 shadow-sm"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleItems.map((item) => (
            <div key={item.id} className="flex flex-col space-y-4">
              
              {/* Speech Bubble Container */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 testimonial-bubble flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#FF9046]/30" />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pl-4 pt-2">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0B5136] shadow-sm bg-gray-100 shrink-0">
                  <img
                    src={item.avatarUrl}
                    alt={item.authorName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/Person_4.jpg';
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">
                    {item.authorName}
                  </h4>
                  <p className="text-xs font-medium text-emerald-800">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
