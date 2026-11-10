import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, UserCheck, BookOpen, Glasses, Briefcase, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { journeyData } from '../data/journeyData';

export default function StudentJourney({ onOpenEnquiry }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const iconMap = {
    Compass: Compass,
    UserCheck: UserCheck,
    BookOpen: BookOpen,
    Glasses: Glasses,
    Briefcase: Briefcase
  };

  const activeStep = journeyData[activeStepIndex];

  return (
    <section id="journey" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Roadmap to Success
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            The COLTE <span className="text-colte-orange">Student Journey</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            From initial orientation to high-tech simulator labs and career placement—follow the 5-step journey that turns trainees into industry-ready logistics leaders.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="relative mb-14">
          
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 bg-gray-200 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-colte-orange to-colte-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStepIndex / (journeyData.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {journeyData.map((item, index) => {
              const Icon = iconMap[item.icon] || Compass;
              const isActive = activeStepIndex === index;
              const isPast = activeStepIndex > index;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-colte-navy-900 border-colte-orange text-white shadow-xl scale-105'
                      : isPast
                      ? 'bg-colte-light border-colte-accent/40 text-colte-navy-900 hover:bg-white'
                      : 'bg-white border-gray-100 text-colte-navy-900 hover:bg-colte-light'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 w-full">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-colte-orange text-white'
                          : isPast
                          ? 'bg-colte-accent/20 text-colte-accent'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400">
                      {item.duration}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : isPast
                          ? 'bg-colte-accent/10 text-colte-accent'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-sm font-bold line-clamp-1 ${isActive ? 'text-white' : 'text-colte-navy-900'}`}>
                      {item.title}
                    </span>
                  </div>

                  <span className={`text-[11px] line-clamp-1 ${isActive ? 'text-gray-300' : 'text-colte-text-muted'}`}>
                    {item.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Spotlight of the Active Step */}
        <div className="bg-colte-light rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-premium">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange text-white">
                    {activeStep.badge}
                  </span>
                  <span className="text-xs font-medium text-colte-text-muted">
                    Estimated Timeline: {activeStep.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900">
                  {activeStep.title} — <span className="text-colte-orange">{activeStep.tagline}</span>
                </h3>

                <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-colte-navy-900 block">
                    What You Experience at This Stage:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStep.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-gray-100 text-xs text-colte-text-secondary shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-colte-accent flex-shrink-0" />
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <span className="text-xs font-bold uppercase text-colte-text-muted">Ready to begin this journey?</span>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="w-full py-3.5 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange transition-all"
                >
                  Start at Step 1: Enrol Now
                </button>
                <div className="flex items-center justify-between text-xs pt-2">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
                    className={`font-semibold ${activeStepIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-colte-navy-900 hover:text-colte-orange'}`}
                  >
                    &larr; Previous Step
                  </button>
                  <span className="text-gray-400 font-mono">{activeStepIndex + 1} / {journeyData.length}</span>
                  <button
                    disabled={activeStepIndex === journeyData.length - 1}
                    onClick={() => setActiveStepIndex(Math.min(journeyData.length - 1, activeStepIndex + 1))}
                    className={`font-semibold ${activeStepIndex === journeyData.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-colte-navy-900 hover:text-colte-orange'}`}
                  >
                    Next Step &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
