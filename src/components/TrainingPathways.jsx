import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  GraduationCap,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Glasses,
  MapPin,
  Cpu,
  Monitor,
  Truck,
  School,
  Factory,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function TrainingPathways({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('short-term');

  const pathways = [
    { id: 'short-term', title: 'Short Term Training', icon: Clock, badge: 'Employment Readiness' },
    { id: 'academia', title: 'Academia Programme', icon: GraduationCap, badge: 'School & College Literacy' },
    { id: 'upskilling', title: 'Upskilling & Reskilling', icon: TrendingUp, badge: 'Industry & NISHE' },
    { id: 'placement', title: 'Placement Facilitation', icon: Briefcase, badge: 'Career Launch' },
  ];

  const shortTermModules = [
    {
      title: 'Warehouse Binner / Picker & Packer VR',
      tag: 'Virtual Reality Simulation',
      icon: Glasses,
      desc: 'Gear up for the warehouse with VR training, expertise key operations in a safe, virtual environment. Enhance your logistics expertise with VR warehouse training, getting you ready for a productive start.'
    },
    {
      title: 'Route Map Plotter',
      tag: 'Route Optimization',
      icon: MapPin,
      desc: 'Navigate with precision: Plan optimal delivery routes and visualize them on a comprehensive map plotter. Gain hands-on experience in optimizing routes for faster deliveries.'
    },
    {
      title: 'Real Time Supply Chain Simulator',
      tag: 'Interactive Tech',
      icon: Cpu,
      desc: 'Master the flow: Master real-time logistics challenges in a dynamic supply chain simulator. Sharpen your skills: Build in-demand logistics expertise through interactive simulations.'
    },
    {
      title: 'Class Room Training',
      tag: 'Theory & Practical Drills',
      icon: School,
      desc: 'Interactive classroom sessions equip individuals with the knowledge and skills to excel in the dynamic logistics industry. Combine theory with hands-on exercises to prepare participants for real-world logistics challenges.'
    },
    {
      title: 'Transport Management System (TMS)',
      tag: 'Fleet & Dispatch',
      icon: Truck,
      desc: 'Navigate with precision: Plan optimal delivery routes, manage fleet dispatches, monitor tracking telemetry, and streamline multi-modal transportation logistics.'
    },
    {
      title: 'Warehouse Management System (WMS)',
      tag: 'Inventory Software',
      icon: Monitor,
      desc: 'Master the digital warehouse: Execute advanced inventory tracking, automated pick-pack ticketing, RFID integration, and real-time stock reconciliation.'
    }
  ];

  return (
    <section id="pathways" className="py-24 bg-colte-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-navy-100 text-colte-navy-900 mb-3">
            Core Learning Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Comprehensive <span className="text-colte-orange">Training Pathways</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Tailored learning journeys designed to serve aspiring students, academic institutions, and corporate workforces through Qualification Pack (QP) aligned pedagogy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {pathways.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-colte-navy-900 text-white shadow-premium scale-105'
                    : 'bg-white text-colte-text-secondary hover:text-colte-navy-900 hover:bg-white/80 shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-colte-orange' : 'text-gray-400'}`} />
                <span>{tab.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full hidden md:inline-block ${
                  isActive ? 'bg-colte-orange text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pathway Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-premium border border-gray-100">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: SHORT TERM TRAINING */}
            {activeTab === 'short-term' && (
              <motion.div
                key="short-term"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-10"
              >
                {/* Text intro block */}
                <div className="space-y-4 max-w-4xl">
                  <div className="inline-block px-3 py-1 bg-colte-orange/10 text-colte-orange font-bold text-xs rounded-md">
                    Short Term Training Program
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900 font-sans">
                    Employment Readiness Aligned with National Qualification Packs
                  </h3>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Our short-term training program is meticulously designed to equip candidates with the necessary skills and knowledge required for employment readiness. Each module of our program is tailored to align with specific Qualification Packs, ensuring that participants receive training that directly corresponds to industry standards and expectations.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Through hands-on exercises, theoretical learning, and practical simulations, candidates are immersed in an environment that mirrors real-world scenarios, allowing them to develop essential competencies and practical know-how. Our comprehensive curriculum covers a range of industry-relevant topics, ensuring that candidates emerge with a well-rounded skill set that meets the demands of the job market.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Moreover, our training approach emphasizes not only technical proficiency but also soft skills development, including communication, teamwork, problem-solving, and adaptability. We believe that these skills are equally crucial for success in any professional setting and therefore integrate them seamlessly into our training framework.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed font-medium text-colte-navy-900">
                    In essence, our short-term training program is a gateway to employment readiness, ensuring that candidates are not just trained but prepared to meet the challenges and opportunities of today's dynamic job market.
                  </p>
                </div>

                {/* 6 Core Modules Grid */}
                <div>
                  <h4 className="text-lg font-bold text-colte-navy-900 mb-6 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-colte-orange" />
                    <span>Specialized Simulation &amp; Practical Training Modules:</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {shortTermModules.map((mod, idx) => {
                      const Icon = mod.icon;
                      return (
                        <div
                          key={idx}
                          className="p-6 rounded-2xl bg-colte-light border border-gray-200 hover:border-colte-orange/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-white flex items-center justify-center shadow-md">
                                <Icon className="w-6 h-6 text-colte-orange" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-gray-200 text-colte-navy-900">
                                {mod.tag}
                              </span>
                            </div>
                            <h5 className="text-base font-bold text-colte-navy-900 mb-2">
                              {mod.title}
                            </h5>
                            <p className="text-xs text-colte-text-secondary leading-relaxed">
                              {mod.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-colte-navy-900 text-white p-6 sm:p-8 rounded-2xl">
                  <div>
                    <h5 className="text-base font-bold">Ready for Short-Term Employment Training?</h5>
                    <p className="text-xs text-gray-300 mt-0.5">Batches start every month at COLTE Chennai Campus, Teynampet.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Short Term Training Program')}
                    className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange whitespace-nowrap"
                  >
                    Enquire for Upcoming Batch
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ACADEMIA PROGRAMME */}
            {activeTab === 'academia' && (
              <motion.div
                key="academia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="space-y-4 max-w-4xl">
                  <div className="inline-block px-3 py-1 bg-colte-accent/10 text-colte-accent font-bold text-xs rounded-md">
                    Academia Partnership &amp; Literacy
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900 font-sans">
                    Inspiring the Next Generation of Supply Chain Leaders
                  </h3>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    In our academia training program, we aim to ignite students' interest and aspirations in the field of logistics by providing comprehensive literacy about the industry and its diverse subsectors.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Through engaging lectures, interactive workshops, and practical demonstrations, we introduce students to the fascinating world of logistics, shedding light on its various facets, processes, and significance in today's global economy. By unraveling the complexities of logistics and highlighting its pivotal role in supply chain management, transportation, warehousing, and distribution, we strive to cultivate a deep understanding and appreciation for this dynamic field among our students.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Moreover, we delve into the diverse subsectors within the logistics industry, including but not limited to freight transportation, inventory management, procurement, and e-commerce logistics. By showcasing the wide array of career opportunities available within each subsector, we aim to broaden students' horizons and inspire them to explore the myriad paths that the logistics industry has to offer.
                  </p>
                </div>

                {/* Target Groups / Audience Cards */}
                <div>
                  <h4 className="text-lg font-bold text-colte-navy-900 mb-4">
                    Audience Cohorts Engaged in Academia Programs:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-colte-orange flex items-center justify-center mb-4">
                        <School className="w-6 h-6" />
                      </div>
                      <h5 className="text-lg font-bold text-colte-navy-900 mb-2">School Students</h5>
                      <p className="text-xs text-colte-text-secondary leading-relaxed">
                        Early vocational orientation, career guidance, and interactive simulator experiences exposing high-schoolers to logistics technology.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-colte-accent flex items-center justify-center mb-4">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h5 className="text-lg font-bold text-colte-navy-900 mb-2">College &amp; MBA Students</h5>
                      <p className="text-xs text-colte-text-secondary leading-relaxed">
                        Industry-integrated credit modules, 1-day experiential immersive workshops, warehouse simulations, and final-year live academic projects.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-colte-light border border-gray-200">
                      <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-amber-400 flex items-center justify-center mb-4">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <h5 className="text-lg font-bold text-colte-navy-900 mb-2">Working Professionals</h5>
                      <p className="text-xs text-colte-text-secondary leading-relaxed">
                        Advanced diplomas, specialized supply chain analytics, and management development programs (MDP) for entry-to-mid career logisticians.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-colte-navy-900 text-white p-6 sm:p-8 rounded-2xl">
                  <div>
                    <h5 className="text-base font-bold">Host an Academia Day for Your College or University</h5>
                    <p className="text-xs text-gray-300 mt-0.5">Partner with COLTE Chennai for institutional visits &amp; simulator workshops.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('College Academia Workshop')}
                    className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange whitespace-nowrap"
                  >
                    Schedule Institutional Tour
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 3: UPSKILLING & RESKILLING */}
            {activeTab === 'upskilling' && (
              <motion.div
                key="upskilling"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="space-y-4 max-w-4xl">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs rounded-md">
                    Upskilling &amp; Reskilling
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900 font-sans">
                    Career Progression &amp; Regulatory Compliance for Modern Logisticians
                  </h3>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Equally focus on upskilling and reskilling programs so as to provide career progression options for all existing logisticians. To provide industry-specific <strong>NISHE (National Institute of Safety Health and Environment)</strong> Programs on regulatory and compliance, thereby facilitating End-to-End Skilling requirements for the sector.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                    Moreover, upskilling the existing logistics workforce fosters a culture of continuous learning and growth, positioning companies as employers of choice and attracting top talent. By nurturing a skilled and adaptable workforce, companies can future-proof their operations and thrive in an ever-changing business landscape.
                  </p>
                  <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed font-semibold text-colte-navy-900">
                    In summary, upskilling the existing logistics workforce is essential for driving performance, fostering innovation, and maintaining a competitive edge in today's dynamic marketplace.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-colte-light border border-gray-200 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-colte-orange flex items-center justify-center">
                      <Factory className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-bold text-colte-navy-900">Custom Industry Needs</h5>
                    <p className="text-xs text-colte-text-secondary leading-relaxed">
                      Tailor-made corporate cohorts for 3PL providers, automotive OEMs, and e-commerce fulfillment centres to retrain personnel on digital WMS, robotics-assisted picking, and automated sorters.
                    </p>
                    <ul className="text-xs text-colte-navy-900 space-y-1.5 font-medium pt-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0" />
                        <span>Customized corporate batch durations (1-day to 4-week)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-colte-orange flex-shrink-0" />
                        <span>Pre-deployment simulation performance scorecards</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-colte-light border border-gray-200 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-colte-navy-900 text-colte-accent flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-bold text-colte-navy-900">NISHE Regulatory &amp; Compliance</h5>
                    <p className="text-xs text-colte-text-secondary leading-relaxed">
                      National Institute of Safety Health and Environment (NISHE) certified modules covering hazardous material storage, ergonomic material handling, fire safety protocols, and OSHA audit compliance.
                    </p>
                    <ul className="text-xs text-colte-navy-900 space-y-1.5 font-medium pt-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-colte-accent flex-shrink-0" />
                        <span>Statutory occupational safety certifications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-colte-accent flex-shrink-0" />
                        <span>Zero-accident shopfloor training through virtual simulators</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-colte-navy-900 text-white p-6 sm:p-8 rounded-2xl">
                  <div>
                    <h5 className="text-base font-bold">Upskill Your Corporate Logistics Workforce</h5>
                    <p className="text-xs text-gray-300 mt-0.5">Custom NISHE compliance and simulation packages for enterprise teams.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Corporate Upskilling Cohort')}
                    className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange whitespace-nowrap"
                  >
                    Request Corporate Proposal
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 4: PLACEMENT FACILITATION */}
            {activeTab === 'placement' && (
              <motion.div
                key="placement"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="space-y-4 max-w-4xl">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-800 font-bold text-xs rounded-md">
                    Placement Facilitation
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-colte-navy-900 font-sans">
                    Connecting Industry-Ready Talent with Top Logistics Employers
                  </h3>
                  <div className="p-6 rounded-2xl bg-colte-light border-l-4 border-colte-orange text-colte-navy-900 italic text-base sm:text-lg leading-relaxed shadow-sm">
                    "Unlock your potential in the Logistics sector with COLTE by Redington and Logistics Sector Skill Council. Gain hands-on skills and industry expertise to thrive in the dynamic world of supply chain management. Our tailored programs ensure you're equipped for success, connecting you with top employers for rewarding placements. Join us today and embark on a journey towards a fulfilling career in logistics."
                  </div>
                </div>

                {/* Placement Network Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                    <span className="text-3xl font-extrabold text-colte-orange font-mono block mb-1">Flipkart</span>
                    <span className="text-xs font-bold text-colte-navy-900 block">E-commerce Fulfillment</span>
                    <span className="text-[11px] text-colte-text-muted mt-1 block">Active Hiring Partner</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                    <span className="text-3xl font-extrabold text-colte-navy-900 font-mono block mb-1">OM Logistics</span>
                    <span className="text-xs font-bold text-colte-navy-900 block">Multi-Modal Logistics</span>
                    <span className="text-[11px] text-colte-text-muted mt-1 block">National Fleet Partner</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                    <span className="text-3xl font-extrabold text-colte-accent font-mono block mb-1">D-Mart</span>
                    <span className="text-xs font-bold text-colte-navy-900 block">Retail &amp; Store Warehousing</span>
                    <span className="text-[11px] text-colte-text-muted mt-1 block">Perungudi Distribution Hub</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-colte-navy-900 text-white p-6 sm:p-8 rounded-2xl">
                  <div>
                    <h5 className="text-base font-bold">Start Your Journey Towards a Rewarding Logistics Career</h5>
                    <p className="text-xs text-gray-300 mt-0.5">Admissions open for next placement-linked training cohort.</p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Placement-Linked Training Track')}
                    className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange whitespace-nowrap"
                  >
                    Apply for Placement Track
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
