import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Award, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Voices of COLTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Student <span className="text-colte-orange">Success Stories</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Real impact in action: Discover how practical simulations and industry-endorsed certifications empower young talent to launch thriving logistics careers.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-colte-light rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-premium relative">
            
            {/* Top Sample Notice Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Sample Student Profile (Awaiting Verified Video Cohort Data)</span>
              </span>

              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-colte-orange text-colte-orange" />
                ))}
              </div>
            </div>

            {/* Carousel Content Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Student Avatar */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white mb-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-extrabold text-colte-navy-900 font-sans">{current.name}</h4>
                  <p className="text-xs font-semibold text-colte-orange">{current.role}</p>
                  <p className="text-[11px] text-colte-text-muted mt-0.5">{current.company}</p>
                </div>

                {/* Quote & Course Details */}
                <div className="md:col-span-8 space-y-4">
                  <Quote className="w-10 h-10 text-colte-orange/30 -mb-2" />
                  <p className="text-base sm:text-lg text-colte-navy-900 font-medium italic leading-relaxed">
                    "{current.quote}"
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
                    <div>
                      <span className="text-colte-text-muted block text-[10px] uppercase font-bold">Course Completed</span>
                      <span className="font-bold text-colte-navy-900">{current.course}</span>
                    </div>
                    <div>
                      <span className="text-colte-text-muted block text-[10px] uppercase font-bold">Core Mastery</span>
                      <span className="font-bold text-colte-accent">{current.keySkillGained}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAutoplay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-colte-orange' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next/Prev Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white hover:bg-colte-navy-900 hover:text-white text-colte-navy-900 border border-gray-200 shadow-sm transition-all"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white hover:bg-colte-navy-900 hover:text-white text-colte-navy-900 border border-gray-200 shadow-sm transition-all"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
