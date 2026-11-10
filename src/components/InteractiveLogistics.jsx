import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Warehouse,
  Truck,
  Boxes,
  GitPullRequest,
  Network,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle,
  Activity,
  ChevronRight
} from 'lucide-react';
import { logisticsEcosystemData } from '../data/logisticsEcosystemData';

export default function InteractiveLogistics({ onOpenEnquiry }) {
  const [selectedNode, setSelectedNode] = useState(logisticsEcosystemData[0]);

  // Icon mapping
  const iconMap = {
    Warehouse: Warehouse,
    Truck: Truck,
    Boxes: Boxes,
    GitPullRequest: GitPullRequest,
    Network: Network
  };

  return (
    <section id="logistics-world" className="py-24 bg-colte-navy-950 text-white relative overflow-hidden">
      
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-colte-orange/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-colte-accent/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/20 text-colte-orange border border-colte-orange/30 mb-3">
            Interactive Logistics Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
            Explore the{' '}
            <span className="bg-gradient-to-r from-colte-orange via-orange-400 to-amber-300 text-transparent bg-clip-text">
              World of Logistics
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            Click any node across the end-to-end supply chain ecosystem below to understand how goods move seamlessly from production to doorstep.
          </p>
        </div>

        {/* Illustrated Ecosystem Interactive Map / Node Selector */}
        <div className="mb-12">
          {/* Node Cards / Flow Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative">
            {logisticsEcosystemData.map((node, index) => {
              const IconComponent = iconMap[node.icon] || Warehouse;
              const isSelected = selectedNode.id === node.id;

              return (
                <motion.button
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-4 sm:p-5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border ${
                    isSelected
                      ? 'bg-colte-navy-900 border-colte-orange shadow-glow-orange scale-105 z-20'
                      : 'bg-colte-navy-900/60 border-white/10 hover:border-white/30 hover:bg-colte-navy-900/90 z-10'
                  }`}
                >
                  {/* Step Sequence Badge */}
                  <span className="absolute top-2.5 right-3 text-[10px] font-mono text-gray-400">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? 'bg-colte-orange text-white shadow-md'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <span className="text-xs sm:text-sm font-bold text-white mb-1 line-clamp-1">
                    {node.title.split(' ')[0]} {node.title.split(' ')[1]}
                  </span>
                  <span className="text-[10px] text-gray-400 hidden sm:block truncate w-full">
                    {node.subtitle}
                  </span>

                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <motion.div
                      layoutId="activePin"
                      className="absolute -bottom-2 w-3 h-3 bg-colte-orange rotate-45"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Connecting Animated Line for Desktop */}
          <div className="hidden md:block relative h-2 mt-2 px-8">
            <div className="h-0.5 w-full bg-gradient-to-r from-colte-orange via-colte-accent to-colte-orange opacity-40" />
          </div>
        </div>

        {/* Detailed Information Panel for the Selected Node */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-colte-navy-900/90 rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Overview, Metrics & COLTE Connection */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header info */}
                <div>
                  <div className="flex items-center space-x-2 text-colte-orange text-xs font-bold uppercase tracking-wider mb-2">
                    <Activity className="w-4 h-4" />
                    <span>Ecosystem Node In-Focus</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-colte-accent mt-1">
                    {selectedNode.subtitle}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {selectedNode.brief}
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedNode.keyMetrics.map((met, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <span className="block text-xl sm:text-2xl font-extrabold text-colte-orange font-mono">
                        {met.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-300 font-medium">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Step-by-Step Workflow */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase text-white tracking-wider block">
                    Operational Workflow:
                  </span>
                  <div className="space-y-2">
                    {selectedNode.workflow.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start space-x-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-colte-orange/20 text-colte-orange">
                          {item.step}
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-white">{item.title}</h5>
                          <p className="text-[11px] text-gray-300 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Imagery, Tech Stack & Practical Link */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl border border-white/10 group">
                  <img
                    src={selectedNode.image}
                    alt={selectedNode.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-colte-orange" />
                      <span>Simulated Scenario</span>
                    </span>
                  </div>
                </div>

                {/* Key Technologies Tags */}
                <div>
                  <span className="text-xs font-bold uppercase text-gray-300 tracking-wider block mb-2">
                    Key Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs bg-white/10 text-gray-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* COLTE Training Connection Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-colte-orange/20 to-orange-500/10 border border-colte-orange/30">
                  <span className="text-[11px] font-bold text-colte-orange uppercase tracking-wider block mb-1 flex items-center space-x-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>How COLTE Trains for This:</span>
                  </span>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    {selectedNode.colteConnection}
                  </p>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`Specialization in ${selectedNode.title}`)}
                  className="w-full py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-glow-orange transition-all"
                >
                  <span>Train in {selectedNode.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
