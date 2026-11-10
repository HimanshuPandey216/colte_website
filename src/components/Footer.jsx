import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink, Heart, Shield } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function Footer({ onOpenEnquiry, onSelectCourse }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-colte-navy-950 text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative top border gradient line */}
      <div className="h-1 bg-gradient-to-r from-colte-orange via-colte-accent to-colte-orange" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Affiliation (5 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-colte-orange to-orange-500 flex items-center justify-center shadow-glow-orange">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
                  COLTE<span className="text-colte-orange">.</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-wide">
                  Centre of Logistics Training Excellence — Chennai
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
              A flagship Centre of Excellence established in Chennai through the strategic collaboration between <strong>Redington Foundation</strong> and the <strong>Logistics Sector Skill Council (LSC)</strong>, dedicated to skilling, reskilling, and upskilling youth in Industry 4.0 logistics.
            </p>

            {/* Partner Affiliation Tag */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-colte-orange block">
                Founding Collaboration &amp; Governance
              </span>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Empowered by <strong>Redington Foundation</strong> (CSR wing of Redington Limited) and aligned with the Qualification Packs of the <strong>Logistics Sector Skill Council (LSC)</strong>.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-colte-orange font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#hero" className="hover:text-colte-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-colte-orange transition-colors">About COLTE</a></li>
              <li><a href="#why-colte" className="hover:text-colte-orange transition-colors">Why COLTE</a></li>
              <li><a href="#centre" className="hover:text-colte-orange transition-colors">Chennai Centre</a></li>
              <li><a href="#courses" className="hover:text-colte-orange transition-colors">Training Courses</a></li>
              <li><a href="#logistics-world" className="hover:text-colte-orange transition-colors">Logistics World</a></li>
              <li><a href="#journey" className="hover:text-colte-orange transition-colors">Student Journey</a></li>
              <li><a href="#gallery" className="hover:text-colte-orange transition-colors">Photo Gallery</a></li>
              <li><a href="#contact" className="hover:text-colte-orange transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Courses List (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-colte-accent font-sans">
              Key Programmes
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {coursesData.slice(0, 5).map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onSelectCourse && onSelectCourse(course)}
                    className="hover:text-colte-orange transition-colors text-left truncate max-w-full block"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
              <li>
                <a href="#courses" className="text-colte-orange font-bold hover:underline inline-block pt-1">
                  View All Programmes &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
              Chennai Location
            </h4>
            <div className="text-xs text-gray-300 space-y-2 leading-relaxed">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-colte-orange flex-shrink-0 mt-0.5" />
                <span>Khivraj Complex II, 7th Floor, Anna Salai, Nandanam, Chennai - 600035</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-colte-accent flex-shrink-0" />
                <a href="tel:+919840098233" className="hover:text-colte-orange">+91-98400 98233</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-colte-orange flex-shrink-0" />
                <a href="mailto:solutions@lsc-india.com" className="hover:text-colte-orange">solutions@lsc-india.com</a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry()}
                className="w-full py-2.5 rounded-xl bg-colte-orange hover:bg-colte-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange transition-all"
              >
                Enquire Online
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} COLTE Chennai – Centre of Logistics Training Excellence. All rights reserved. References to Redington Foundation and Logistics Sector Skill Council (LSC) are subject to official corporate branding protocols.
          </p>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-gray-200 transition-colors">Terms of Training</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center space-x-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px]">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
