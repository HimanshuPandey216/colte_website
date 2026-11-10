import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Handshake, Briefcase, Info, Award } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      label: 'Students & Youths Trained',
      countTarget: 5000,
      suffix: '+',
      isPlaceholder: true,
      tag: 'CSR Target Benchmark',
      icon: Users,
      color: '#FF7A00',
      description: 'Projected multi-cohort training target across Tamil Nadu and regional nodes.'
    },
    {
      id: 2,
      label: 'Specialized Training Programmes',
      countTarget: 12,
      suffix: '+',
      isPlaceholder: true,
      tag: 'LSC QP Aligned',
      icon: GraduationCap,
      color: '#00A6A6',
      description: 'Covering WMS, AR/VR simulation, material handling, and freight analytics.'
    },
    {
      id: 3,
      label: 'Industry & Corporate Partners',
      countTarget: 45,
      suffix: '+',
      isPlaceholder: true,
      tag: 'Placement Network',
      icon: Handshake,
      color: '#2F64A8',
      description: 'Corporate logistics firms, e-commerce giants, and 3PL networks collaborating for placements.'
    },
    {
      id: 4,
      label: 'Career Opportunity Assistance',
      countTarget: 94,
      suffix: '%',
      isPlaceholder: true,
      tag: 'Employability Goal',
      icon: Briefcase,
      color: '#FF7A00',
      description: 'Benchmark placement assistance rate across completed vocational skill cohorts.'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-colte-navy-900 text-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-colte-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-colte-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-colte-orange border border-white/10 mb-3">
            Impact &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
            Developing India’s{' '}
            <span className="text-colte-orange">Logistics Workforce</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            Championing skill development, technological empowerment, and industry-ready capabilities through sustained public-private collaboration.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between relative group hover:border-colte-orange/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${s.color}25`, color: s.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {s.isPlaceholder && (
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {s.tag}
                      </span>
                    )}
                  </div>

                  {/* Animated Number Counter */}
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                      {s.countTarget.toLocaleString()}
                    </span>
                    <span className="text-3xl font-extrabold text-colte-orange font-mono">
                      {s.suffix}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-100 mb-2">
                    {s.label}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center text-[10px] text-gray-400">
                  <Info className="w-3 h-3 mr-1 text-colte-accent flex-shrink-0" />
                  <span>Marked for continuous verified COLTE audit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit Disclaimer Badge */}
        <div className="bg-colte-navy-950/80 rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-3 text-xs text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 animate-pulse" />
            <span>
              <strong>Transparency Note:</strong> Metrics displayed represent planned capacity benchmarks and operational targets established since the January 2024 launch. Official auditable cohort statistics are updated periodically in partnership with LSC.
            </span>
          </div>
          <span className="text-[11px] font-mono text-gray-400 whitespace-nowrap">
            COLTE Chennai Baseline 2024–2026
          </span>
        </div>

      </div>
    </section>
  );
}
