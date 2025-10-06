"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      id: "collection",
      desktopId: "collection-desktop",
      mobileId: "collection-mobile",
      label: "Collections",
    },
    { id: "new-trends", desktopId: "new-trends", mobileId: "new-trends", label: "New Trends" },
    { id: "about-us", desktopId: "about-us", mobileId: "about-us", label: "About Us" },
  ];

  const handleClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (linkId) => {
    // Collect both possible ids
    const nodes = Array.from(
      document.querySelectorAll(`#${linkId}-desktop, #${linkId}-mobile, #${linkId}`)
    );

    // Pick the one that's actually visible
    const visibleTarget =
      nodes.find((el) => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          rect.width > 0 &&
          rect.height > 0
        );
      }) || document.getElementById(linkId);

    if (visibleTarget) {
      const headerEl = document.querySelector("header");
      const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const targetTop =
        visibleTarget.getBoundingClientRect().top +
        window.pageYOffset -
        headerH -
        9; // small gap

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  return (
    <header className="font-[var(--font-montserrat)] shadow-sm">
      {/* Top Bar */}
      {/* <div className="bg-[#464b5e] text-white text-xs py-2 px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div>
            Support: +91 8806612255 &nbsp; | &nbsp;
            Email:business@dresslanduniforms.in
          </div>
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/company/dressland-uniforms/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://www.instagram.com/invites/contact/?i=1n38ophvdyz0g&utm_content=3qovshx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="https://www.facebook.com/dresslandonline?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>
      </div> */}

      {/* Logo + Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center py-4 px-4 md:px-12 lg:px-20 xl:px-32">
          {/* Logo */}
          <div className="p-2 rounded">
            <Image
              src="/dressland-logo.png"
              alt="Dressland Logo"
              width={160}
              height={40}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 text-base font-medium text-[#464b5e] items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.desktopId}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.id);
                  scrollToSection(link.id);
                }}
                className={`relative font-semibold group transition-colors duration-150 ${
                  activeLink === link.id ? "text-[#2f2f5f]" : "text-[#464b5e]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] bg-[#2f2f5f] transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-150 ease-in ${
                    activeLink === link.id ? "scale-x-100 opacity-100" : ""
                  }`}
                />
              </a>
            ))}
            <EnquiryModal
              trigger={
                <button className="text-base font-semibold text-[#464b5e] hover:text-[#2f2f5f] transition">
                  Contact Us
                </button>
              }
            />
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <Image
              src="/shirt.png"
              alt="Uniform Hamburger Icon"
              width={28}
              height={28}
            />
            <span className="text-[11px] font-semibold text-[#1c1c57]">
              MENU
            </span>
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed left-0 right-0 top-0 h-[90vh] bg-white z-50 overflow-y-auto transform transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center px-4 py-6">
            {/* Top Row */}
            <div className="flex justify-between w-full items-center mb-8">
              <button
                className="md:hidden flex flex-col items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Mobile Menu"
              >
                <Image
                  src="/shirt.png"
                  alt="Uniform Hamburger Icon"
                  width={28}
                  height={28}
                />
                <span className="text-[11px] font-semibold text-[#1c1c57]">
                  CLOSE
                </span>
              </button>

              <Image
                src="/dressland-logo.png"
                alt="Dressland Logo"
                width={140}
                height={40}
              />

              <div className="flex items-center gap-4">
                <FaSearch className="text-[#1c1c57] text-lg" />
                <FaShoppingCart className="text-[#1c1c57] text-lg" />
              </div>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.mobileId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.id);
                    setTimeout(() => scrollToSection(link.id), 300);
                  }}
                  className="text-lg font-medium text-[#1c1c57] hover:text-[#2f2f5f] transition"
                >
                  {link.label}
                </a>
              ))}

              <EnquiryModal
                trigger={
                  <button className="text-base font-semibold text-[#464b5e] hover:text-[#2f2f5f] transition">
                    Contact Us
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
