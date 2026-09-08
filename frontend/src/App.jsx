import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import OperationsFlipCards from './components/sections/OperationsFlipCards';
import AboutSection from './components/sections/AboutSection';
import MarqueeTicker from './components/sections/MarqueeTicker';
import ServicesSection from './components/sections/ServicesSection';
import SmartInvestmentSection from './components/sections/SmartInvestmentSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import BlogSection from './components/sections/BlogSection';
import ContactModal from './components/common/ContactModal';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("General Enquiry");

  const handleOpenContact = (interestType = "General Enquiry") => {
    setSelectedInterest(interestType);
    setModalOpen(true);
  };

  const handleCloseContact = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfdfc] font-sans text-gray-800 selection:bg-emerald-800 selection:text-white">
      {/* Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        <HeroSection onOpenContact={handleOpenContact} />
        <OperationsFlipCards onOpenContact={handleOpenContact} />
        <AboutSection onOpenContact={handleOpenContact} />
        <MarqueeTicker />
        <ServicesSection onOpenContact={handleOpenContact} />
        <SmartInvestmentSection onOpenContact={handleOpenContact} />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <AchievementsSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact & Booking Slot Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseContact}
        defaultInterest={selectedInterest}
      />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
}
