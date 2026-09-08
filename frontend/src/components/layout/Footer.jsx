import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-[#0e2119] text-gray-300 pt-16 pb-8 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt="Mali Patil Farm" 
                className="h-16 w-auto object-contain"
                onError={(e) => { e.target.src = '/assets/Frame-2-2.png'; }}
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mali Patil Farm stands tall as a distinguished Agri-Livestock company with its headquarters situated in Bengaluru, Karnataka, India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 border-l-4 border-[#FF9046] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  What We Do
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenContact("General Enquiry")} 
                  className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Pages */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 border-l-4 border-[#FF9046] pl-3">
              Support Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#operations" className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Integrated poultry farming @EC Shed
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Sheep &amp; Goat farming
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenContact("Privacy Policy Enquiry")}
                  className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenContact("Terms & Conditions Enquiry")}
                  className="hover:text-[#FF9046] transition-colors flex items-center gap-1.5 text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9046]" />
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 border-l-4 border-[#FF9046] pl-3">
              Contact Info
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="mailto:hello@malipatilfarm.com" className="flex items-start gap-3 hover:text-[#FF9046] transition-colors">
                  <Mail className="w-5 h-5 text-[#FF9046] shrink-0 mt-0.5" />
                  <span>hello@malipatilfarm.com</span>
                </a>
              </li>
              <li>
                <a href="tel:6362900144" className="flex items-start gap-3 hover:text-[#FF9046] transition-colors">
                  <Phone className="w-5 h-5 text-[#FF9046] shrink-0 mt-0.5" />
                  <span className="font-semibold text-white tracking-wide">6362900144</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF9046] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-gray-400">
                  Sy. No.356/2A, Vootupalli Village &amp; Post, Sodum Mandal, Chittoor Dist. - 517 234.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-gray-500">
          Mali Patil Farm © Copyrights 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
