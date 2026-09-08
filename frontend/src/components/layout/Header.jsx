import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export default function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investorDropdownOpen, setInvestorDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/assets/Frame-2-2.png" 
              alt="Mali Patil Farm Logo" 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#0B5136]">
                MALI PATIL FARM
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest -mt-1 font-medium">
                Ethical Livestock
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-medium text-[15px] text-gray-700">
            <a href="#" className="text-[#0B5136] font-semibold transition-colors hover:text-[#1f7a4d]">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-[#0B5136]">
              About Us
            </a>
            <a href="#services" className="transition-colors hover:text-[#0B5136]">
              What We Do
            </a>
            
            {/* Investor Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setInvestorDropdownOpen(true)}
              onMouseLeave={() => setInvestorDropdownOpen(false)}
            >
              <button 
                type="button" 
                className="flex items-center gap-1 transition-colors hover:text-[#0B5136] focus:outline-none"
              >
                <span>Become An Investor</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {investorDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn z-50">
                  <a 
                    href="#operations" 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e6f3ec] hover:text-[#0B5136] transition-colors"
                  >
                    Integrated Poultry Farming EC Shed
                  </a>
                  <a 
                    href="#operations" 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e6f3ec] hover:text-[#0B5136] transition-colors"
                  >
                    Sheep &amp; Goat Farming
                  </a>
                  <a 
                    href="#investment" 
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e6f3ec] hover:text-[#0B5136] transition-colors"
                  >
                    Investment Comparison
                  </a>
                  <button 
                    onClick={() => { setInvestorDropdownOpen(false); onOpenContact("Payment Details"); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#e6f3ec] hover:text-[#0B5136] transition-colors"
                  >
                    Payment Details
                  </button>
                </div>
              )}
            </div>

            <a href="#blog" className="transition-colors hover:text-[#0B5136]">
              Blog
            </a>
            <button 
              onClick={() => onOpenContact("General Enquiry")} 
              className="transition-colors hover:text-[#0B5136]"
            >
              Contact Us
            </button>
          </nav>

          {/* Socials & CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-500 mr-2">
              <a 
                href="https://www.facebook.com/profile.php?id=61559299321733" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0B5136] hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://youtube.com/@royalfarms627?si=ptPmXLzTZLEFpyKS" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0B5136] hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a 
                href="https://www.instagram.com/husbandryhaven/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0B5136] hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>

            <button
              onClick={() => onOpenContact("Book A Slot Now")}
              className="bg-[#0B5136] hover:bg-[#1f7a4d] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a 
              href="tel:6362900144"
              className="w-9 h-9 rounded-full bg-[#0B5136] text-white flex items-center justify-center"
              aria-label="Call Mali Patil Farm"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#0B5136] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-xl px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-[#0B5136]"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-gray-700 hover:text-[#0B5136]"
          >
            About Us
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-gray-700 hover:text-[#0B5136]"
          >
            What We Do
          </a>
          <div className="py-1">
            <div className="font-medium text-gray-900 mb-1">Become An Investor:</div>
            <div className="pl-4 space-y-2 text-sm text-gray-600">
              <a 
                href="#operations" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-[#0B5136]"
              >
                Integrated Poultry Farming EC Shed
              </a>
              <a 
                href="#operations" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-[#0B5136]"
              >
                Sheep &amp; Goat Farming
              </a>
              <a 
                href="#investment" 
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-[#0B5136]"
              >
                Investment Comparison
              </a>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenContact("Payment Details"); }}
                className="block text-left hover:text-[#0B5136]"
              >
                Payment Details
              </button>
            </div>
          </div>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 font-medium text-gray-700 hover:text-[#0B5136]"
          >
            Blog
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact("Contact Us"); }}
            className="w-full mt-2 bg-[#0B5136] text-white py-2.5 rounded-lg font-semibold text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}
