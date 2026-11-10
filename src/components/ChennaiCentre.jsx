import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, CheckCircle2, Monitor, Glasses, Box, Sparkles, Building, Layers } from 'lucide-react';
import { facilitiesData, centreInfo } from '../data/facilitiesData';

export default function ChennaiCentre({ onOpenEnquiry }) {
  const [selectedFacility, setSelectedFacility] = useState(facilitiesData[0]);

  return (
    <section id="centre" className="py-24 bg-colte-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-accent/10 text-colte-accent mb-3">
            Flagship Campus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            COLTE Chennai{' '}
            <span className="text-colte-orange">Training Centre</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            A state-of-the-art facility engineered in the heart of Tamil Nadu’s industrial and shipping hub to deliver immersive, technology-driven logistics education.
          </p>
        </div>

        {/* Centre Intro Banner */}
        <div className="bg-colte-navy-900 rounded-3xl p-8 sm:p-10 lg:p-12 text-white mb-16 shadow-premium relative overflow-hidden">
          {/* Subtle background route glow */}
          <div className="absolute right-0 top-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-colte-orange/10 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-colte-orange text-xs font-bold uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Centre of Excellence Campus</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans">
                Bridging the Gap Between Classroom Theory and Real-World Logistics
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {centreInfo.strategicContext}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs bg-white/10 px-3.5 py-2 rounded-xl text-gray-200">
                  <MapPin className="w-4 h-4 text-colte-orange" />
                  <span>Nandanam, Anna Salai (Near Nandanam Metro)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs bg-white/10 px-3.5 py-2 rounded-xl text-gray-200">
                  <Sparkles className="w-4 h-4 text-colte-accent" />
                  <span>Equipped with AR/VR Simulators &amp; WMS Software</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 w-full text-center">
                <span className="text-xs text-gray-300 uppercase tracking-wider block mb-1">Established</span>
                <span className="text-3xl font-extrabold text-colte-orange font-sans block mb-2">{centreInfo.established}</span>
                <span className="text-xs text-gray-300 block mb-4">Under Redington CSR &amp; LSC</span>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="w-full py-2.5 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange transition-all"
                >
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Interactive Showcase */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-colte-navy-900">Modern Learning Facilities</h3>
              <p className="text-xs sm:text-sm text-colte-text-secondary">Click on any facility below to preview the environment and equipment.</p>
            </div>
            
            {/* Facility Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {facilitiesData.map((fac) => (
                <button
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedFacility.id === fac.id
                      ? 'bg-colte-orange text-white shadow-glow-orange'
                      : 'bg-white text-colte-text-secondary hover:text-colte-navy-900 hover:bg-gray-100'
                  }`}
                >
                  {fac.name}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Feature Showcase Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFacility.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Media with Interactive Hover */}
                <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl aspect-video sm:aspect-[16/10] shadow-xl">
                  <img
                    src={selectedFacility.image}
                    alt={selectedFacility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950/80 via-transparent to-transparent flex items-end p-6">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange text-white">
                      {selectedFacility.tag}
                    </span>
                  </div>
                </div>

                {/* Right Details */}
                <div className="lg:col-span-5 space-y-5">
                  <span className="text-xs font-bold text-colte-accent uppercase tracking-wider block">
                    Campus Facility
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900 leading-snug">
                    {selectedFacility.name}
                  </h4>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    {selectedFacility.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase text-colte-navy-900 tracking-wider block">
                      Facility Highlights &amp; Equipment
                    </span>
                    {selectedFacility.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-colte-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry()}
                      className="px-6 py-3 rounded-xl bg-colte-navy-900 hover:bg-colte-navy-800 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-md transition-all"
                    >
                      <span>Enquire for Facility Tour</span>
                      <Navigation className="w-3.5 h-3.5 text-colte-orange" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Facility Grid Quick Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {facilitiesData.map((f) => (
            <div
              key={f.id}
              onClick={() => setSelectedFacility(f)}
              className={`p-3 rounded-2xl cursor-pointer transition-all border ${
                selectedFacility.id === f.id
                  ? 'border-colte-orange bg-white shadow-md scale-[1.02]'
                  : 'border-transparent bg-white/70 hover:bg-white'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-bold text-colte-navy-900 truncate">{f.name}</p>
              <span className="text-[10px] text-colte-text-muted">{f.tag}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
