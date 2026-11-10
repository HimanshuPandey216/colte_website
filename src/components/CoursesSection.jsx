import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award, Users, BookOpen, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesSection({ onSelectCourse, onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Operations', 'Supply Chain', 'Technology'];

  const filteredCourses = selectedCategory === 'All'
    ? coursesData
    : coursesData.filter(c => c.category === selectedCategory);

  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Industry-Aligned Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Specialized Training{' '}
            <span className="text-colte-orange">Programmes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Designed to bridge real skill shortages across warehouse hubs, multi-modal freight networks, and digital supply chain control rooms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <div className="flex items-center space-x-1 mr-2 text-xs font-bold text-colte-text-muted hidden sm:flex">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-colte-navy-900 text-white shadow-premium'
                  : 'bg-colte-light text-colte-text-secondary hover:text-colte-navy-900 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Course Image & Badge */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-colte-navy-900/90 text-white backdrop-blur-md border border-white/20">
                      {course.category}
                    </span>
                  </div>

                  {/* Feature Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-colte-orange text-white shadow-sm">
                      {course.badge}
                    </span>
                  </div>

                  {/* Level on Bottom of Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                    <span className="text-gray-200">{course.level}</span>
                    <span className="text-colte-orange font-semibold">AR/VR Enabled</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-colte-navy-900 font-sans group-hover:text-colte-orange transition-colors mb-3 leading-snug">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-colte-text-secondary leading-relaxed line-clamp-3 mb-5">
                    {course.description}
                  </p>

                  {/* Placeholder Specifications Notice */}
                  <div className="space-y-2 py-3 px-3.5 rounded-xl bg-colte-light border border-gray-100 text-[11px] text-colte-text-secondary mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-colte-text-muted font-medium flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-colte-orange" />
                        Batch Duration:
                      </span>
                      <span className="font-semibold text-colte-navy-900">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-colte-text-muted font-medium flex items-center">
                        <Award className="w-3.5 h-3.5 mr-1 text-colte-accent" />
                        Certification:
                      </span>
                      <span className="font-semibold text-colte-navy-900 truncate max-w-[170px]" title={course.certification}>
                        {course.certification}
                      </span>
                    </div>
                  </div>

                  {/* Key Modules Preview */}
                  <div className="space-y-1.5 mb-2">
                    <span className="text-[10px] font-bold text-colte-navy-900 uppercase tracking-wider block mb-1">
                      Key Syllabus Modules:
                    </span>
                    {course.modules.slice(0, 3).map((mod, i) => (
                      <div key={i} className="flex items-start space-x-1.5 text-xs text-colte-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-colte-orange flex-shrink-0 mt-0.5" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                    {course.modules.length > 3 && (
                      <span className="text-[10px] text-colte-accent font-semibold block pt-1">
                        + {course.modules.length - 3} more practical modules
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center space-x-3">
                <button
                  onClick={() => onSelectCourse && onSelectCourse(course)}
                  className="flex-1 py-3 rounded-xl bg-colte-navy-900 hover:bg-colte-navy-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-md group-hover:bg-colte-orange group-hover:text-white"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                  className="px-4 py-3 rounded-xl bg-colte-light hover:bg-gray-200 text-colte-navy-900 font-bold text-xs uppercase tracking-wider transition-colors"
                  title="Quick Enquiry"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notice on official data */}
        <div className="mt-12 text-center">
          <p className="text-xs text-colte-text-muted max-w-xl mx-auto italic">
            * Note: Program durations, eligibility, and fee structure (where applicable under CSR subsidy) are marked as placeholders and finalized per specific batch schedules. Contact the COLTE admissions cell for current batch dates.
          </p>
        </div>

      </div>
    </section>
  );
}
