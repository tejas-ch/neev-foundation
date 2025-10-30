"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaRocket } from "react-icons/fa";
import siteConfig from "@/data/siteConfig.json";
import { getAssetPath } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize navLinks to avoid recreation on every render
  const navLinks = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Faculty", href: "/faculty" },
    { name: "Results", href: "/results" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ], []);

  // Memoize toggle function to prevent recreation
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white py-3 hidden md:block relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-5"></div>
        <div className="container-custom relative z-10 flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all">
                <FaPhone className="text-xs text-gold-400" />
              </div>
              <span className="font-medium text-white">{siteConfig.contact.phone}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
              <div className="w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all">
                <FaEnvelope className="text-xs text-gold-400" />
              </div>
              <span className="font-medium text-white">{siteConfig.contact.email}</span>
            </a>
            <div className="flex items-center gap-2 text-gray-200">
              <FaMapMarkerAlt className="text-xs text-gold-400" />
              <span className="font-medium">Haldwani, Uttarakhand</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold-400 font-semibold tracking-wide">
              {siteConfig.tagline}
            </span>
          </div>
        </div>
      </div>

      {/* Premium Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-premium py-3"
            : "bg-white/98 backdrop-blur-md py-4"
        }`}
        role="banner"
      >
        <nav className="container-custom flex justify-between items-center" role="navigation" aria-label="Main navigation">
          {/* Premium Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-gold transition-all bg-gradient-to-br from-primary-600 to-primary-700 p-0.5">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                <img 
                  src={getAssetPath("/images/branding/neev-logo.jpg")}
                  alt="NEEV Foundation Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-primary-700 font-bold text-2xl flex items-center justify-center w-full h-full">N</span>';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-extrabold gradient-text-premium">
                NEEV
              </span>
              <span className="text-xs text-gold-600 font-semibold tracking-widest -mt-1">
                THE FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Premium */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-navy-700 hover:text-primary-700 font-semibold transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-500 to-gold-600 transition-all group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-gold ml-4 inline-flex items-center gap-2 text-sm">
              <FaRocket />
              <span>Enroll Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary-700 hover:text-gold-600 transition-colors p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </nav>

        {/* Mobile Menu - Premium */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gradient-to-br from-white to-blue-50 border-t-2 border-gold-200 overflow-hidden shadow-lg"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="container-custom py-6 flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-navy-700 hover:text-primary-700 font-semibold py-3 px-4 rounded-lg hover:bg-primary-50 transition-all block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-gold text-center mt-2 inline-flex items-center justify-center gap-2 w-full"
                  >
                    <FaRocket />
                    <span>Enroll Now</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
