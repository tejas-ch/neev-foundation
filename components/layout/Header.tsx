"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import siteConfig from "@/data/siteConfig.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Faculty", href: "/faculty" },
    { name: "Results", href: "/results" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
              <FaPhone className="text-xs" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
              <FaEnvelope className="text-xs" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="text-accent-light font-semibold">
            {siteConfig.tagline}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <nav className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform bg-white">
              <img 
                src="/images/branding/neev-logo.jpg" 
                alt="NEEV Foundation Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-primary-700 font-bold text-xl flex items-center justify-center w-full h-full">N</span>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-primary-700">
                NEEV
              </span>
              <span className="text-xs text-gray-600 -mt-1">
                THE FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm py-2 px-6">
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
