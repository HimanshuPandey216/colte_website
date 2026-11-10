import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, ShieldCheck, Box, Cpu, Award } from 'lucide-react';

export default function Hero({ onExploreCourses, onDiscoverChennai }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-colte-navy-950 text-white">
      {/* Background Image with Depth & Dark Multi-layer Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-warehouse.jpg"
          alt="Modern Automated Logistics Warehouse"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-10000 ease-out"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950 via-colte-navy-900/80 to-colte-navy-950/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-colte-navy-950/40 to-colte-navy-950" />
      </div>

      {/* Animated SVG Logistics Route Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00A6A6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="routeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00A6A6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Global route curve 1 */}
        <path
          d="M -100 250 C 300 100, 700 450, 1100 200 C 1400 50, 1700 350, 2100 250"
          fill="none"
          stroke="url(#routeGrad1)"
          strokeWidth="2.5"
          className="animated-route"
        />
        {/* Global route curve 2 */}
        <path
          d="M -50 600 C 400 450, 800 700, 1300 450 C 1600 300, 1900 650, 2200 400"
          fill="none"
          stroke="url(#routeGrad2)"
          strokeWidth="1.5"
          className="animated-route-reverse"
        />

        {/* Dynamic Nodes */}
        <circle cx="350" cy="220" r="4" fill="#FF7A00" className="animate-ping" />
        <circle cx="350" cy="220" r="3" fill="#FF7A00" />
        <circle cx="850" cy="320" r="4" fill="#00A6A6" className="animate-ping" style={{ animationDelay: '1s' }} />
        <circle cx="850" cy="320" r="3" fill="#00A6A6" />
        <circle cx="1400" cy="180" r="4" fill="#FF7A00" className="animate-ping" style={{ animationDelay: '2s' }} />
        <circle cx="1400" cy="180" r="3" fill="#FF7A00" />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 flex flex-col items-center text-center">
        
        {/* Top Partner Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-gray-200 mb-8 shadow-premium"
        >
          <span className="flex h-2 w-2 rounded-full bg-colte-orange animate-ping" />
          <span className="text-white font-semibold">Redington Foundation</span>
          <span className="text-colte-accent">&times;</span>
          <span className="text-white font-semibold">Logistics Sector Skill Council (LSC)</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-sans leading-tight max-w-4xl"
        >
          Building Skills.{' '}
          <span className="bg-gradient-to-r from-colte-orange via-orange-400 to-amber-300 text-transparent bg-clip-text">
            Moving the Future.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light"
        >
          Empowering the next generation of logistics professionals through industry-focused training, practical learning, and advanced simulation technology.
        </motion.p>

        {/* Two CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#courses"
            onClick={onExploreCourses}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-colte-orange to-orange-500 hover:from-orange-500 hover:to-colte-orange text-white font-bold text-base shadow-glow-orange hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
          >
            <span>Explore Our Courses</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#centre"
            onClick={onDiscoverChennai}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <span>Discover COLTE Chennai</span>
          </a>
        </motion.div>

        {/* Floating Highlight Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-left"
        >
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-colte-navy-900/70 border border-white/10 backdrop-blur-md shadow-premium hover:border-colte-orange/50 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 rounded-xl bg-colte-orange/20 text-colte-orange group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">AR/VR Simulator Lab</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Zero-risk immersive virtual reality training for modern forklift maneuvering and high-rack stacking operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-colte-navy-900/70 border border-white/10 backdrop-blur-md shadow-premium hover:border-colte-accent/50 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 rounded-xl bg-colte-accent/20 text-colte-accent group-hover:scale-110 transition-transform">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Industry 4.0 Focus</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Hands-on WMS software, barcode scanning, RFID integration, and multi-modal transport planning.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-colte-navy-900/70 border border-white/10 backdrop-blur-md shadow-premium hover:border-colte-orange/50 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2.5 rounded-xl bg-white/10 text-amber-400 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Certified Credentials</h3>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Programs endorsed by Logistics Sector Skill Council and Redington Foundation for high employability.
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <a href="#about" className="flex flex-col items-center group cursor-pointer">
            <span className="text-xs font-medium tracking-widest uppercase mb-2 group-hover:text-colte-orange transition-colors">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1 group-hover:border-colte-orange transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 bg-colte-orange rounded-full"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
