import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Glasses, Layers, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function WhyColte({ onOpenEnquiry }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      id: 1,
      title: 'Industry-Relevant Training',
      subtitle: 'Curriculum Engineered with Employers',
      icon: Briefcase,
      accentColor: '#FF7A00',
      description: 'Courses formulated directly from Logistics Sector Skill Council Qualification Packs (QPs), matching the exact hiring needs of multinational 3PLs, e-commerce giants, and freight hubs.',
      bulletPoints: [
        'Aligned with National Occupational Standards (NOS)',
        'Updated quarterly with emerging logistics tech trends',
        'Co-instructed by certified industry veterans'
      ],
      tag: 'Demand-Driven'
    },
    {
      id: 2,
      title: 'Advanced Simulation Technology',
      subtitle: 'Virtual Reality & Zero-Risk Mastery',
      icon: Glasses,
      accentColor: '#00A6A6',
      description: 'State-of-the-art AR/VR equipment allows trainees to operate complex counterbalance forklifts and high-bay reach trucks safely before stepping onto real warehouse floors.',
      bulletPoints: [
        'Immersive 3D virtual warehouse simulation',
        'Real-time telemetry and hazard assessment drills',
        'Muscle memory building with zero physical risk'
      ],
      tag: 'Industry 4.0'
    },
    {
      id: 3,
      title: 'Practical Learning Experience',
      subtitle: '70% Experiential Shopfloor Pedagogy',
      icon: Layers,
      accentColor: '#2F64A8',
      description: 'Move beyond dry slide decks. Train on live WMS terminal sandboxes, real pallet racking bays, barcode printers, handheld RF scanners, and physical dispatch workflows.',
      bulletPoints: [
        'Mock warehouse staging and palletizing bays',
        'Enterprise WMS inventory reconciliation drills',
        'Regular field visits to Chennai mega-logistics parks'
      ],
      tag: 'Hands-on First'
    },
    {
      id: 4,
      title: 'Career Development Opportunities',
      subtitle: 'From Enrolment to Sustainable Employment',
      icon: TrendingUp,
      accentColor: '#FF7A00',
      description: 'Dedicated placement cell backed by Redington Foundation and LSC corporate network. Trainees receive soft-skills coaching, resume workshops, and campus interview opportunities.',
      bulletPoints: [
        'Direct connection to 40+ corporate hiring partners',
        'Soft skills, warehouse safety English & interview prep',
        'Recognized skill credentials for rapid career launch'
      ],
      tag: 'Placement Focused'
    }
  ];

  return (
    <section id="why-colte" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Why Choose COLTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            The Competitive Edge in{' '}
            <span className="text-colte-orange">Logistics Excellence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Four pillars that set COLTE Chennai apart as the benchmark skill academy for modern logistics and supply chain careers.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isHovered
                    ? 'shadow-2xl border-transparent bg-colte-navy-900 text-white'
                    : 'shadow-card border-gray-100 bg-white text-colte-navy-900'
                }`}
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: isHovered ? 'rgba(255,255,255,0.15)' : `${item.accentColor}15`,
                        color: isHovered ? '#ffffff' : item.accentColor
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isHovered
                          ? 'border-white/20 text-colte-orange bg-white/5'
                          : 'border-gray-200 text-colte-text-muted bg-gray-50'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold font-sans mb-1 transition-colors ${isHovered ? 'text-white' : 'text-colte-navy-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs font-semibold mb-4 ${isHovered ? 'text-colte-orange' : 'text-colte-accent'}`}>
                    {item.subtitle}
                  </p>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 transition-colors ${isHovered ? 'text-gray-300' : 'text-colte-text-secondary'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Bullet List */}
                <div className="pt-4 border-t border-gray-100/10">
                  <ul className="space-y-2 mb-6">
                    {item.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs">
                        <CheckCircle
                          className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                            isHovered ? 'text-colte-orange' : 'text-colte-accent'
                          }`}
                        />
                        <span className={isHovered ? 'text-gray-200' : 'text-colte-text-secondary'}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      isHovered
                        ? 'bg-colte-orange text-white shadow-glow-orange hover:bg-colte-orange-600'
                        : 'bg-colte-light text-colte-navy-900 hover:bg-gray-200'
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtle bottom glow line when hovered */}
                {isHovered && (
                  <div
                    className="absolute bottom-0 left-8 right-8 h-1 rounded-t-full"
                    style={{ backgroundColor: item.accentColor }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
