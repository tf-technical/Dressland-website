"use client";

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ setActiveCategoryIndex }) {
  const handleCategoryClick = (categoryIndex) => {
    if (setActiveCategoryIndex) {
      setActiveCategoryIndex(categoryIndex);
      
      // Scroll to the collection section (desktop or mobile)
      setTimeout(() => {
        const targetId = window.innerWidth < 768 ? "collection-mobile" : "collection-desktop";
        const collectionSection = document.getElementById(targetId);
        if (collectionSection) {
          collectionSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#f9f9f9] text-[#333] text-sm">
      {/* Top Footer Content */}
      <div className="w-full py-10 px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between max-w-[90rem] mx-auto text-xs sm:text-sm">
          
          {/* Logo and Social Icons */}
          <div className="flex flex-col flex-1 min-w-full md:min-w-[370px]">
            <div className="mb-4">
              <Image
                src="/dressland-logo.png"
                alt="Dressland Logo"
                width={180}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed mb-4">
              Your trusted partner for premium uniforms and workwear. Quality craftsmanship meets innovative design for corporate, industrial, and sports solutions.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/dressland-uniforms/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?i=1n38ophvdyz0g&utm_content=3qovshx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/dresslandonline?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col flex-1 min-w-full md:min-w-[220px]">
            <h3 className="font-semibold text-base sm:text-lg mb-3">CONTACT INFO</h3>
            <div className="space-y-2 text-gray-700 text-xs sm:text-base">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span>+91 8806612255</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span>business@dresslanduniforms.in</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span>Dipti appartment, 396/97, E Ward, Shahupuri, Kolhapur, Maharashtra 416001</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0" />
                <span>Mon - Sat: 10:30 AM to 7:30 PM</span>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col flex-1 min-w-full md:min-w-[180px]">
            <h3 className="font-semibold text-base sm:text-lg mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
              <li>
                <Link href="/#about-us" className="hover:text-gray-900 transition-colors block py-1">
                  About us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick(0)}
                  className="hover:text-gray-900 transition-colors text-left w-full py-1"
                >
                  Corporate Uniforms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick(1)}
                  className="hover:text-gray-900 transition-colors text-left w-full py-1"
                >
                  Industrial Safety
                </button>
              </li>
              <li>
                  <button 
                  onClick={() => handleCategoryClick(3)}
                  className="hover:text-gray-900 transition-colors text-left w-full py-1"
                >
                  Sportswear
                </button>
                
              </li>
              <li>
              
                <button 
                  onClick={() => handleCategoryClick(2)}
                  className="hover:text-gray-900 transition-colors text-left w-full py-1"
                >
                  Sustainables
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="px-4 md:px-12 lg:px-20 xl:px-32 max-w-[90rem] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 text-[10px] sm:text-xs text-gray-500">
            <span>© 2025 Dressland. All Rights Reserved.</span>
            <span>
              Developed By: TF Strategies Pvt. Ltd.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}