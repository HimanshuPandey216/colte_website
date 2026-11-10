import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Award, CheckCircle2, Briefcase, BookOpen, Sparkles, ArrowRight } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onEnquireThisCourse }) {
  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        
        {/* Backdrop Click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 border border-gray-100 flex flex-col max-h-[90vh]"
        >
          {/* Header Image with Gradient */}
          <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-colte-navy-950 via-colte-navy-950/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              aria-label="Close Course Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-colte-orange text-white">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
                  {course.level}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans leading-tight">
                {course.title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-colte-navy-900">
            
            {/* Course Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-colte-orange mb-1">
                Programme Overview
              </h4>
              <p className="text-sm sm:text-base text-colte-text-secondary leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Program Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-colte-light border border-gray-200">
              <div>
                <span className="text-[10px] font-bold uppercase text-colte-text-muted flex items-center mb-1">
                  <Clock className="w-3.5 h-3.5 mr-1 text-colte-orange" />
                  Cohort Duration
                </span>
                <p className="text-xs font-bold text-colte-navy-900">{course.duration}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-colte-text-muted flex items-center mb-1">
                  <Briefcase className="w-3.5 h-3.5 mr-1 text-colte-accent" />
                  Target Eligibility
                </span>
                <p className="text-xs font-bold text-colte-navy-900">{course.eligibility}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase text-colte-text-muted flex items-center mb-1">
                  <Award className="w-3.5 h-3.5 mr-1 text-colte-orange" />
                  Certification
                </span>
                <p className="text-xs font-bold text-colte-navy-900">{course.certification}</p>
              </div>
            </div>

            {/* Detailed Modules */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-colte-navy-900 mb-3 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4 text-colte-orange" />
                <span>Curriculum Modules &amp; Hands-On Lab Work</span>
              </h4>
              <div className="space-y-2.5">
                {course.modules.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start space-x-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-colte-orange/10 text-colte-orange text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-colte-navy-900">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            {course.careerRoles && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-colte-navy-900 mb-2">
                  Target Career Roles &amp; Employment Paths:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {course.careerRoles.map((role, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-colte-accent/10 text-colte-navy-900 border border-colte-accent/30 text-xs font-semibold">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-bold text-colte-navy-900 hover:bg-white transition-colors"
            >
              Back to Courses
            </button>

            <button
              onClick={() => {
                onClose();
                onEnquireThisCourse(course.title);
              }}
              className="px-6 py-3 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-glow-orange transition-all"
            >
              <span>Enquire for This Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
