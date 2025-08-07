"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navLinks = [
    { id: "collections", label: "Collections", href: "#collection" },
    { id: "new-trends", label: "New Trends", href: "#new-trends" },
    { id: "about-us", label: "About Us", href: "#about-us" },
  ];

  const handleClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="font-[var(--font-montserrat)] shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#464b5e] text-white text-xs py-2 px-4 md:px-12 lg:px-20 xl:px-32">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
          <div>
            Support: +91 8806612255 &nbsp; | &nbsp; Email:business@dresslanduniforms.in
          </div>
          <div className="flex space-x-2">
            <a href="#" className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="bg-white text-[#464b5e] rounded-full p-1 hover:bg-gray-200 transition">
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Logo + Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center py-4 px-4 md:px-12 lg:px-20 xl:px-32">
          {/* Logo */}
          <div className="p-2 rounded">
            <Image src="/dressland-logo.png" alt="Dressland Logo" width={160} height={40} />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 text-base font-medium text-[#464b5e] items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleClick(link.id)}
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="relative font-semibold text-[#464b5e] text-base group hover:text-[#2f2f5f] transition-colors duration-150">
                  Contact Us
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#2f2f5f] transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-150 ease-in" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>Submit your details and we’ll get back to you soon.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Input
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What do you need?"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-[#1c1c57] text-white hover:bg-[#2f2f5f]">
                    Submit
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
            <span className="text-[11px] font-semibold text-[#1c1c57]">MENU</span>
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-all duration-300 ease-out ${
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
            <span className="text-[11px] font-semibold text-[#1c1c57]">CLOSE</span>
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
                  href={link.href}
                  onClick={() => handleClick(link.id)}
                  className="text-lg font-medium text-[#1c1c57] hover:text-[#2f2f5f] transition"
                >
                  {link.label}
                </a>
              ))}

              {/* Contact Us Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-lg font-medium text-[#1c1c57] hover:text-[#2f2f5f] transition">
                    Contact Us
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>Submit your details and we’ll get back to you soon.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Input
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What do you need?"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-[#1c1c57] text-white hover:bg-[#2f2f5f]">
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
