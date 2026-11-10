import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Filter, Sparkles } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-colte-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-accent/10 text-colte-accent mb-3">
            Life at COLTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Experiential <span className="text-colte-orange">Learning Gallery</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Take a visual tour through our AR/VR simulation labs, live warehouse study tours, WMS computer suites, and collaborative industry workshops.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-colte-navy-900 text-white shadow-premium'
                  : 'bg-white text-colte-text-secondary hover:text-colte-navy-900 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-2xl cursor-pointer transition-all duration-300 border border-gray-100"
            >
              <div className={`relative ${item.aspect} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950/85 via-colte-navy-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-colte-navy-900/90 text-white backdrop-blur-md border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Enlarge Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h4 className="text-base font-bold font-sans group-hover:text-colte-orange transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredItems[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevLightbox}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors z-50"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[85vh] bg-colte-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full max-h-[65vh] object-contain bg-black"
                />
                <div className="p-5 bg-colte-navy-900 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-colte-orange uppercase tracking-wider">
                      {filteredItems[lightboxIndex].category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-sans">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
