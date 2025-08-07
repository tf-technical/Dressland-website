import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#333] text-sm">
      {/* Top Footer Content */}
      <div className="w-full py-10 px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-between max-w-[90rem] mx-auto text-xs sm:text-sm">
          
          {/* Newsletter Signup */}
          <div id="newsletter-signup" className="flex flex-col flex-1 min-w-[370px]">
            <h3 className="font-semibold text-base sm:text-lg mb-3">Sign Up for our Newsletter</h3>
            <div className="flex items-stretch border border-gray-300 rounded overflow-hidden mb-2 shadow-sm">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="flex-1 px-2 py-1 sm:px-3 sm:py-2 focus:outline-none text-xs sm:text-base"
              />
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white min-w-[120px] px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
                <span className="whitespace-nowrap">SUBSCRIBE</span>
              </button>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">Get timely updates from your favorite styles.</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col flex-1 min-w-[220px] md:ml-25">
            <h3 className="font-semibold text-base sm:text-lg mb-3">CONTACT INFO</h3>
            <div className="space-y-2 text-gray-700 text-xs sm:text-base">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>+91 8806612255</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>business@dresslanduniforms.in</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>Lorem Ipsum, 2nd Floor, Kolhapur, MH - 416001</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-gray-500" />
                <span>Mon - Sat: 9:00 AM to 7:00 PM</span>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col flex-1 min-w-[180px] md:ml-25">
            <h3 className="font-semibold text-base sm:text-lg mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
              <li>
                <Link href="/#about-us" className="hover:text-gray-900 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/#Corporate-Uniforms" className="hover:text-gray-900 transition-colors">
                 Corporate Uniforms
                </Link>
              </li>
              <li>
                <Link href="/#Industrial Safety" className="hover:text-gray-900 transition-colors">
                  Industrial Safety
                </Link>
              </li>
              <li>
                <Link href="/#Sportswear" className="hover:text-gray-900 transition-colors">
                  Sportswear
                </Link>
              </li>
              <li>
                <Link href="/#Sustainables" className="hover:text-gray-900 transition-colors">
                  Sustainable Wear
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="px-4 md:px-12 lg:px-20 xl:px-32 max-w-[90rem] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2 text-[10px] sm:text-xs text-gray-500">
            <span className="-ml-9">© 2025 Dressland. All Rights Reserved.</span>
            <span className="-mr-10">
              Developed By: <strong className="text-gray-700">TF Strategies Pvt. Ltd.</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
