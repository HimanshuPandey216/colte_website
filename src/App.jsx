import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyColte from './components/WhyColte';
import ChennaiCentre from './components/ChennaiCentre';
import CoursesSection from './components/CoursesSection';
import InteractiveLogistics from './components/InteractiveLogistics';
import StudentJourney from './components/StudentJourney';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import CourseDetailModal from './components/CourseDetailModal';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [initialCourseForEnquiry, setInitialCourseForEnquiry] = useState('');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);

  const handleOpenEnquiry = (courseName = '') => {
    setInitialCourseForEnquiry(courseName);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
    setInitialCourseForEnquiry('');
  };

  const handleSelectCourse = (course) => {
    setSelectedCourseDetail(course);
  };

  const handleCloseCourseModal = () => {
    setSelectedCourseDetail(null);
  };

  const handleEnquireFromCourseModal = (courseTitle) => {
    setSelectedCourseDetail(null);
    setInitialCourseForEnquiry(courseTitle);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-colte-text-primary flex flex-col selection:bg-colte-orange selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCourses={() => {
            const el = document.getElementById('courses');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDiscoverChennai={() => {
            const el = document.getElementById('centre');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* About COLTE Section */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Why COLTE Interactive Cards */}
        <WhyColte onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* COLTE Chennai Centre Showcase */}
        <ChennaiCentre onOpenEnquiry={() => handleOpenEnquiry('Campus Visit & Tour')} />

        {/* Specialized Training Programmes */}
        <CoursesSection
          onSelectCourse={handleSelectCourse}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Interactive Logistics Experience: "Explore the World of Logistics" */}
        <InteractiveLogistics onOpenEnquiry={handleOpenEnquiry} />

        {/* Student Journey Animated Timeline */}
        <StudentJourney onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Impact & Milestone Statistics */}
        <ImpactStats />

        {/* Student Success Stories & Testimonials Carousel */}
        <Testimonials />

        {/* Masonry Experiential Gallery */}
        <GallerySection />

        {/* Official Contact & Admission Form */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenEnquiry={() => handleOpenEnquiry()}
        onSelectCourse={handleSelectCourse}
      />

      {/* Pop-up Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        initialCourse={initialCourseForEnquiry}
      />

      {/* Course Detail Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourseDetail}
        onClose={handleCloseCourseModal}
        onEnquireThisCourse={handleEnquireFromCourseModal}
      />

      {/* Floating Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <button
          onClick={() => handleOpenEnquiry()}
          className="group flex items-center space-x-2 bg-gradient-to-r from-colte-orange to-orange-500 hover:from-orange-500 hover:to-colte-orange text-white px-4 py-3 rounded-full shadow-glow-orange hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          aria-label="Quick Enquiry"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
            Quick Enquiry
          </span>
        </button>
      </div>
    </div>
  );
}
