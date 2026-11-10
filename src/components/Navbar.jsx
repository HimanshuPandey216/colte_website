import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Award, Compass, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'why-colte', 'centre', 'courses', 'logistics-world', 'journey', 'impact', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Why COLTE', href: '#why-colte', id: 'why-colte' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Chennai Centre', href: '#centre', id: 'centre' },
    { name: 'Logistics Hub', href: '#logistics-world', id: 'logistics-world' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-colte-navy-950 text-white text-xs border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-colte-orange text-white">
              NEW BATCH OPEN
            </span>
            <span className="text-gray-300">
              Centre of Logistics Training Excellence — Redington Foundation &amp; LSC Initiative
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-300">
            <a href="tel:+919840098233" className="hover:text-colte-orange flex items-center transition-colors">
              <PhoneCall className="w-3 h-3 mr-1 text-colte-orange" />
              +91-98400 98233
            </a>
            <span className="text-white/20">|</span>
            <span className="text-gray-400">Nandanam, Anna Salai, Chennai</span>
          </div>
        </div>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-colte-navy-900/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10'
            : 'bg-colte-navy-900/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-colte-orange via-orange-500 to-amber-600 flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform duration-300">
              {/* Custom COLTE Mark */}
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <path d="M12 11h.01" />
                <path d="M12 15h.01" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
                  COLTE<span className="text-colte-orange">.</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-colte-accent/20 text-colte-accent border border-colte-accent/30">
                  Chennai
                </span>
              </div>
              <span className="text-[10px] text-gray-300 tracking-wide font-medium hidden md:block">
                Centre of Logistics Training Excellence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white bg-white/10 font-semibold shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="relative group overflow-hidden bg-gradient-to-r from-colte-orange to-orange-500 hover:from-orange-500 hover:to-colte-orange text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-glow-orange hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-colte-navy-950/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-1 pb-3 mb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-white bg-colte-orange/20 font-bold text-colte-orange'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full bg-colte-orange hover:bg-colte-orange-600 text-white font-bold py-3 rounded-xl shadow-glow-orange flex items-center justify-center space-x-2 text-center"
              >
                <span>Enquire Now for Admissions</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
