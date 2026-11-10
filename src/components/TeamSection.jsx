import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, ShieldCheck, GraduationCap, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { teamData } from '../data/teamData';

export default function TeamSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showOrgChart, setShowOrgChart] = useState(false);

  const categories = ['All', 'Trainer', 'Leadership', 'Support'];

  const filteredTeam = selectedCategory === 'All'
    ? teamData
    : selectedCategory === 'Trainer'
    ? teamData.filter((m) => m.category === 'Trainer')
    : selectedCategory === 'Leadership'
    ? teamData.filter((m) => m.category === 'Leadership')
    : teamData.filter((m) => m.category !== 'Trainer' && m.category !== 'Leadership');

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-colte-light to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            COLTE Chennai Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Meet Our <span className="text-colte-orange">Trainers &amp; Leadership</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Our certified master trainers, technical simulation experts, and student coordinators bring rich industry expertise to empower candidates with hands-on logistics mastery.
          </p>
        </div>

        {/* Filter Navigation & Org Chart Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-colte-light p-1.5 rounded-2xl border border-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-colte-navy-900 text-white shadow-md'
                    : 'text-colte-text-secondary hover:text-colte-navy-900 hover:bg-white/60'
                }`}
              >
                {cat === 'All' ? 'All Team Members' : cat === 'Trainer' ? 'Specialized Trainers' : cat}
              </button>
            ))}
          </div>

          {/* Org Chart Modal Toggle Button */}
          <button
            onClick={() => setShowOrgChart(!showOrgChart)}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold bg-colte-accent/10 hover:bg-colte-accent/20 text-colte-accent border border-colte-accent/30 transition-all shadow-sm"
          >
            <Eye className="w-4 h-4" />
            <span>{showOrgChart ? 'Hide Org Hierarchy Chart' : 'View COLTE Hierarchy Chart'}</span>
          </button>
        </div>

        {/* Expandable Organizational Chart Preview */}
        <AnimatePresence>
          {showOrgChart && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="mb-14 overflow-hidden"
            >
              <div className="bg-colte-light rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-premium">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-xl font-bold text-colte-navy-900 font-sans">
                      COLTE Chennai Official Organizational Chart
                    </h3>
                    <p className="text-xs text-colte-text-secondary">
                      Governed structure under Centre Head Shakina with dedicated Trainer cadres and Operations.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-colte-orange/10 text-colte-orange self-start sm:self-auto">
                    Official Structure
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm p-2 flex justify-center">
                  <img
                    src="/images/colte-team-org.png"
                    alt="COLTE Chennai Official Team Organizational Chart"
                    className="max-h-[500px] w-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTeam.map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-3xl p-6 border border-gray-200 hover:border-colte-orange/40 shadow-card hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Profile Card Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-colte-orange/30 group-hover:border-colte-orange shadow-md bg-colte-light">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {member.category === 'Trainer' && (
                      <span className="absolute -bottom-1.5 -right-1.5 p-1 rounded-lg bg-colte-orange text-white shadow-sm">
                        <GraduationCap className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-colte-navy-100 text-colte-navy-900 mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-extrabold text-colte-navy-900 font-sans tracking-tight truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-colte-orange font-semibold line-clamp-1">
                      {member.highlight}
                    </p>
                  </div>
                </div>

                {/* Department & Description */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-colte-text-muted block">
                    {member.department}
                  </span>
                  <p className="text-xs text-colte-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-colte-text-muted">COLTE Chennai Team</span>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`Consultation with ${member.name} (${member.role})`)}
                  className="font-bold text-colte-orange hover:text-orange-600 flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Connect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trainer Mentorship Banner */}
        <div className="mt-14 bg-gradient-to-r from-colte-navy-900 to-colte-navy-950 text-white rounded-3xl p-8 sm:p-10 shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-colte-orange uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Certified Mentorship Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-sans">
              Learn Directly From Active Industry Practitioners
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every trainer at COLTE Chennai is certified by the Logistics Sector Skill Council (LSC) with hands-on experience in high-density automated warehouses, container terminals, and cold supply chain hubs.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Trainer Mentorship Session')}
            className="px-6 py-3.5 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-glow-orange transition-all"
          >
            Schedule Trainer Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
