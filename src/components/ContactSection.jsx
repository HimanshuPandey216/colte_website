import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Building2, ExternalLink } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: 'Undergraduate / Graduate',
    courseInterest: 'Warehouse Operations & Material Handling',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setFormStatus({ submitted: false, loading: false, error: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: null });

    // Simulate API submission
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        qualification: 'Undergraduate / Graduate',
        courseInterest: 'Warehouse Operations & Material Handling',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-colte-orange/10 text-colte-orange mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-colte-navy-900 tracking-tight font-sans">
            Connect with <span className="text-colte-orange">COLTE Chennai</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-colte-text-secondary leading-relaxed">
            Have questions about upcoming batch dates, eligibility criteria, corporate sponsorships, or simulator facility tours? Reach out to our training team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact Details & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-colte-navy-900 text-white p-8 rounded-3xl shadow-premium relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-bold text-colte-orange uppercase tracking-wider block mb-1">
                    Official Centre Information
                  </span>
                  <h3 className="text-2xl font-bold font-sans">
                    Centre of Logistics Training Excellence
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">
                    Operated in association with Logistics Sector Skill Council &amp; Redington Foundation
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-colte-orange flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Centre Location:</span>
                      <p className="text-sm font-semibold text-white leading-relaxed">
                        Center of Logistics Training for Excellence (COLTE), <br />
                        Guna Complex, 443, Anna Salai, <br />
                        Teynampet, Chennai, Tamil Nadu - 600018 <br />
                        <span className="text-xs text-colte-orange font-semibold">(Landmark: Teynampet Metro)</span>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-colte-accent flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Admissions &amp; Enquiries:</span>
                      <a href="tel:+917845932665" className="text-sm font-semibold text-white hover:text-colte-orange transition-colors block">
                        +91 78459 32665
                      </a>
                      <a href="tel:+917845932138" className="text-sm text-gray-300 hover:text-colte-orange transition-colors block">
                        +91 78459 32138
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-colte-orange flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Official Email:</span>
                      <a href="mailto:coordinatar.chennai@lsc-india.com" className="text-sm font-semibold text-white hover:text-colte-orange transition-colors">
                        coordinatar.chennai@lsc-india.com
                      </a>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-colte-accent flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 font-medium block">Training &amp; Office Hours:</span>
                      <p className="text-sm text-gray-200">
                        Monday – Saturday: 9:30 AM – 5:30 PM <br />
                        <span className="text-xs text-gray-400">(Sunday Closed)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Guna+Complex+443+Anna+Salai+Teynampet+Chennai+600018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-colte-orange hover:text-orange-400 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Frame */}
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-md h-64 relative bg-gray-100">
              <iframe
                title="COLTE Chennai Location Map"
                src="https://www.google.com/maps?q=Guna+Complex,+443+Anna+Salai,+Teynampet,+Chennai+-+600018&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Functional Enquiry / Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-colte-light rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-premium">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-colte-navy-900 font-sans">
                  Enquire for Admissions &amp; Corporate Partnerships
                </h3>
                <p className="text-xs sm:text-sm text-colte-text-secondary mt-1">
                  Fill in your details below and our skill counseling officer will contact you within 24 hours.
                </p>
              </div>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 rounded-2xl border border-green-200 text-center space-y-4 shadow-sm"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-colte-navy-900">Enquiry Received Successfully!</h4>
                  <p className="text-sm text-colte-text-secondary max-w-md mx-auto">
                    Thank you for your interest in COLTE Chennai. Our admissions team has registered your request and will reach out via call/email shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                    className="px-6 py-2.5 rounded-xl bg-colte-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-colte-navy-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{formStatus.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Anand Sundaram"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. anand@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                        Educational / Professional Background
                      </label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                      >
                        <option value="Higher Secondary (10+2)">Higher Secondary (10+2)</option>
                        <option value="ITI / Polytechnic Diploma">ITI / Polytechnic Diploma</option>
                        <option value="Undergraduate / Graduate">Undergraduate / Graduate (Any Stream)</option>
                        <option value="Working Logistics Professional">Working Logistics Professional (Upskilling)</option>
                        <option value="Corporate / Employer Representative">Corporate / Employer Representative</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                      Training Programme of Interest
                    </label>
                    <select
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900"
                    >
                      {coursesData.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} ({c.category})
                        </option>
                      ))}
                      <option value="General Counselling / Unsure">General Guidance / Suggest Best Fit</option>
                      <option value="Corporate Cohort Sponsorship">Corporate Cohort Sponsorship (Bulk Training)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-colte-navy-900 mb-1.5 uppercase tracking-wider">
                      Questions / Specific Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention your availability, questions on simulator timings, or specific career goals..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-colte-orange text-colte-navy-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full py-4 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-glow-orange transition-all duration-300 disabled:opacity-60"
                  >
                    {formStatus.loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-colte-text-muted mt-2">
                    Official privacy guarantee: Your contact information is solely utilized for COLTE Chennai educational counselling and never shared with external telemarketers.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
