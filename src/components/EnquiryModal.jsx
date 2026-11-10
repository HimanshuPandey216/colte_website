import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Sparkles, Building, PhoneCall } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function EnquiryModal({ isOpen, onClose, initialCourse = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: 'Graduate / Final Year Student',
    courseInterest: initialCourse || 'Warehouse Operations & Material Handling',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, loading: false, error: null });

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, courseInterest: initialCourse }));
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setStatus({ submitted: false, loading: false, error: 'Please fill in all mandatory fields.' });
      return;
    }

    setStatus({ submitted: false, loading: true, error: null });

    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: null });
    }, 800);
  };

  const handleReset = () => {
    setStatus({ submitted: false, loading: false, error: null });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        
        {/* Backdrop Click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 border border-gray-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-colte-navy-900 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {status.submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-colte-navy-900">Enquiry Submitted!</h3>
              <p className="text-sm text-colte-text-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your enquiry for <strong>{formData.courseInterest}</strong> has been registered with the COLTE Chennai admissions desk. We will call you back shortly.
              </p>
              <div className="p-4 bg-colte-light rounded-xl text-xs text-colte-text-secondary border border-gray-100">
                <span>Admissions Office Hotline: </span>
                <strong className="text-colte-navy-900">+91-98400 98233</strong>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-colte-navy-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-colte-navy-800 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-colte-orange/10 text-colte-orange mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Admissions &amp; Career Consultation</span>
                </div>
                <h3 className="text-2xl font-extrabold text-colte-navy-900 font-sans">
                  Enquire with COLTE Chennai
                </h3>
                <p className="text-xs sm:text-sm text-colte-text-secondary mt-1">
                  Connect with our counselors to get batch schedules, eligibility criteria, and AR/VR simulator lab slots.
                </p>
              </div>

              {status.error && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-colte-navy-900 mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-colte-navy-900 mb-1 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 Mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-colte-navy-900 mb-1 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-colte-navy-900 mb-1 uppercase tracking-wider">
                    Course / Training Track
                  </label>
                  <select
                    value={formData.courseInterest}
                    onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                  >
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="General Guidance / Best Fit">General Career Counseling</option>
                    <option value="Corporate / Company Training Cohort">Corporate Employee Upskilling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-colte-navy-900 mb-1 uppercase tracking-wider">
                    Current Status / Qualification
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                  >
                    <option value="Higher Secondary (10+2)">Higher Secondary (10+2)</option>
                    <option value="ITI / Diploma in Logistics/Engg">ITI / Polytechnic Diploma</option>
                    <option value="Graduate / Final Year Student">Graduate / Final Year Student</option>
                    <option value="Early Logistics Professional">Working Professional (1-3 yrs)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-glow-orange transition-all disabled:opacity-60"
                >
                  {status.loading ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>Submit Quick Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
