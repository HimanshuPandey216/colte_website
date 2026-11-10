import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Handshake, Cpu, CheckCircle2, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Organisation Overview', icon: Building2 },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'collaboration', label: 'Industry Collaboration', icon: Handshake },
    { id: 'approach', label: 'Practical Approach', icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 bg-colte-light relative overflow-hidden">
      {/* Decorative background blurbs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-colte-navy-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-colte-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-navy-100 text-colte-navy-900 mb-3">
            About COLTE Chennai
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Transforming Learning into{' '}
            <span className="text-colte-orange">Industry-Ready Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Centre of Logistics Training Excellence (COLTE) is an advanced skill development initiative established in Chennai to bridge the digital divide and nurture world-class logistics talent.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-colte-navy-900 text-white shadow-premium scale-105'
                    : 'bg-white text-colte-text-secondary hover:text-colte-navy-900 hover:bg-white/80 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-colte-orange' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content Area */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-premium border border-gray-100">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block px-3 py-1 bg-colte-accent/10 text-colte-accent font-semibold text-xs rounded-md">
                  Inaugurated January 2024
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-colte-navy-900 leading-snug">
                  India’s Flagship Centre for High-Tech Logistics Competency
                </h3>
                <p className="text-colte-text-secondary text-sm sm:text-base leading-relaxed">
                  Established in Chennai, COLTE was launched to address the rapid digital transformation of the Indian supply chain industry. With warehouses and freight nodes adopting robotics, IoT, and automated storage systems, COLTE serves as an experiential learning hub for students, job-seekers, and working professionals.
                </p>
                <p className="text-colte-text-secondary text-sm sm:text-base leading-relaxed">
                  Through hands-on training, virtual reality equipment simulators, and Qualification Pack (QP) aligned pedagogy, COLTE guarantees that every graduate enters the workforce with demonstrable operational competencies.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-colte-light border border-gray-100">
                    <span className="block text-2xl font-extrabold text-colte-orange">Industry 4.0</span>
                    <span className="text-xs text-colte-text-secondary font-medium">Equipped for automated &amp; connected logistics</span>
                  </div>
                  <div className="p-4 rounded-xl bg-colte-light border border-gray-100">
                    <span className="block text-2xl font-extrabold text-colte-accent">AR / VR</span>
                    <span className="text-xs text-colte-text-secondary font-medium">Safe virtual simulator forklift training</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <img
                    src="/images/colte-center.jpg"
                    alt="COLTE Chennai Training Centre Campus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-xs font-bold text-colte-orange uppercase tracking-wider block">Chennai Centre</span>
                      <p className="text-sm font-semibold">Khivraj Complex, Anna Salai, Nandanam</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: VISION & MISSION */}
          {activeTab === 'vision' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Vision Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-colte-navy-900 to-colte-navy-950 text-white relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-6 text-white/10 group-hover:text-colte-orange/20 transition-colors">
                  <Compass className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-colte-orange/20 text-colte-orange flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-sans text-white">Our Vision</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    To be the foremost Centre of Excellence in India for logistics and supply chain skills development, setting national benchmarks for technology-driven, inclusive, and future-ready vocational training.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0" />
                      <span>Empower youth with sustainable logistics careers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0" />
                      <span>Bridge the digital gap across Tier 1, 2, and 3 talent pools</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-8 rounded-2xl bg-white border-2 border-colte-accent/30 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-6 text-colte-accent/10 group-hover:text-colte-accent/20 transition-colors">
                  <Target className="w-24 h-24" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-colte-accent/10 text-colte-accent flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-sans text-colte-navy-900">Our Mission</h3>
                  <p className="text-colte-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    Deliver rigorous practical training combining immersive AR/VR simulation, live WMS systems, and industry case studies that transform aspiring trainees into immediately employable supply chain professionals.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-colte-text-secondary">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-colte-accent flex-shrink-0" />
                      <span>Zero-risk experiential learning before physical deployment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-colte-accent flex-shrink-0" />
                      <span>Collaborate with leading corporate logistics networks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: INDUSTRY COLLABORATION */}
          {activeTab === 'collaboration' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Redington Foundation */}
                <div className="p-8 rounded-2xl bg-colte-light border border-gray-200 hover:border-colte-orange/40 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-colte-orange text-white flex items-center justify-center font-bold text-xl shadow-glow-orange">
                      RF
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-colte-navy-900">Redington Foundation</h4>
                      <p className="text-xs text-colte-text-secondary">CSR Wing of Redington Limited</p>
                    </div>
                  </div>
                  <p className="text-sm text-colte-text-secondary leading-relaxed">
                    Driving transformative Corporate Social Responsibility with a vision to equalize educational and professional opportunities. Redington Foundation sponsors state-of-the-art simulation infrastructure, scholarships, and career advancement programs.
                  </p>
                </div>

                {/* Logistics Sector Skill Council */}
                <div className="p-8 rounded-2xl bg-colte-light border border-gray-200 hover:border-colte-accent/40 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-colte-accent text-white flex items-center justify-center font-bold text-xl shadow-glow-teal">
                      LSC
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-colte-navy-900">Logistics Sector Skill Council</h4>
                      <p className="text-xs text-colte-text-secondary">Under Ministry of Skill Development &amp; Entrepreneurship</p>
                    </div>
                  </div>
                  <p className="text-sm text-colte-text-secondary leading-relaxed">
                    The apex industry council governing national skill standards, Qualification Packs (QPs), and occupational benchmarks for India's logistics ecosystem, ensuring COLTE certifications carry nationwide authority.
                  </p>
                </div>
              </div>

              <div className="bg-colte-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Corporate Partnerships &amp; Placement Support</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-2xl">
                    Leading warehousing corporations, 3PL giants, freight forwarders, and e-commerce fulfillment hubs participate in COLTE Chennai campus hiring drives.
                  </p>
                </div>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-glow-orange"
                >
                  Partner With Us
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 4: PRACTICAL APPROACH */}
          {activeTab === 'approach' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-colte-orange/10 text-colte-orange flex items-center justify-center mb-4">
                  <span className="font-extrabold text-base">70%</span>
                </div>
                <h4 className="text-lg font-bold text-colte-navy-900 mb-2">Hands-on Lab Simulation</h4>
                <p className="text-xs sm:text-sm text-colte-text-secondary leading-relaxed">
                  Majority of time is spent on AR/VR simulators, physical mock warehouse racking, pallet trucks, and barcode scanner terminals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-colte-accent/10 text-colte-accent flex items-center justify-center mb-4">
                  <span className="font-extrabold text-base">20%</span>
                </div>
                <h4 className="text-lg font-bold text-colte-navy-900 mb-2">Enterprise Software Drills</h4>
                <p className="text-xs sm:text-sm text-colte-text-secondary leading-relaxed">
                  Real WMS environment practice: ASN creation, purchase orders, pick lists, batch generation, and cycle-counting reports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-colte-navy-900/10 text-colte-navy-900 flex items-center justify-center mb-4">
                  <span className="font-extrabold text-base">10%</span>
                </div>
                <h4 className="text-lg font-bold text-colte-navy-900 mb-2">Theory &amp; Compliance</h4>
                <p className="text-xs sm:text-sm text-colte-text-secondary leading-relaxed">
                  Lean logistics, 5S methodology, hazardous goods protocols, OSHA safety, and cold chain statutory compliances.
                </p>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
