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
              Chennai Centre Location
            </h4>
            <div className="text-xs text-gray-300 space-y-2 leading-relaxed">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-colte-orange flex-shrink-0 mt-0.5" />
                <span>
                  Guna Complex, 443, Anna Salai, Teynampet, Chennai - 600018 <br />
                  <strong className="text-colte-orange">(Landmark: Teynampet Metro)</strong>
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-colte-accent flex-shrink-0" />
                <a href="tel:+917845932665" className="hover:text-colte-orange">
                  +91 78459 32665 / 78459 32138
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-colte-orange flex-shrink-0" />
                <a href="mailto:coordinatar.chennai@lsc-india.com" className="hover:text-colte-orange">
                  coordinatar.chennai@lsc-india.com
                </a>
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-center space-x-3 text-xs text-gray-300">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Follow Us:</span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-colte-orange text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-colte-orange text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

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
