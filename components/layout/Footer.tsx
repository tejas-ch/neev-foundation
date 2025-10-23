"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp, FaRocket, FaStar, FaTrophy } from "react-icons/fa";
import siteConfig from "@/data/siteConfig.json";
import { getAssetPath } from "@/lib/utils";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Faculty", href: "/faculty" },
    { name: "Results", href: "/results" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const courses = [
    "Foundation Course (6-10)",
    "JEE Preparation",
    "NEET Preparation",
    "Board Excellence",
    "Olympiad & NTSE",
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Premium CTA Banner */}
      <div className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <FaTrophy className="text-2xl text-white" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Ready to Start Your Success Journey?
                </h3>
              </div>
              <p className="text-white/90 text-lg">
                Join 150+ students who are achieving their dreams with NEEV
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-navy-950 hover:bg-navy-950 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-3 whitespace-nowrap"
            >
              <FaRocket />
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer - Premium Design */}
      <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-5"></div>
        
        <div className="container-custom py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section - Premium */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 p-0.5 rounded-2xl shadow-gold">
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
                  <span className="font-display text-2xl font-extrabold gradient-text-gold">NEEV</span>
                  <span className="text-xs text-gold-400 font-semibold tracking-widest -mt-1">THE FOUNDATION</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {siteConfig.about}
              </p>
              
              {/* Premium Social Icons */}
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-gold"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-gold"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-gold"
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-gold"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links - Premium */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6 gradient-text-gold flex items-center gap-2">
                <FaStar className="text-gold-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold-400 hover:translate-x-2 transition-all inline-flex items-center gap-2 font-medium group"
                    >
                      <span className="text-gold-500 group-hover:text-gold-400">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Courses - Premium */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6 gradient-text-gold flex items-center gap-2">
                <FaTrophy className="text-gold-400" />
                Our Courses
              </h3>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course}>
                    <Link
                      href="/courses"
                      className="text-gray-300 hover:text-gold-400 hover:translate-x-2 transition-all inline-flex items-center gap-2 font-medium group"
                    >
                      <span className="text-gold-500 group-hover:text-gold-400">→</span>
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Premium */}
            <div>
              <h3 className="font-display text-xl font-bold mb-6 gradient-text-gold flex items-center gap-2">
                <FaPhone className="text-gold-400" />
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaPhone className="text-gold-400" />
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-gray-100 hover:text-gold-400 transition-colors font-medium"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaEnvelope className="text-gold-400" />
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-100 hover:text-gold-400 transition-colors break-all font-medium"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-gold-400" />
                  </div>
                  <span className="text-gray-100 font-medium">{siteConfig.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Designer Credit Section */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 py-4 border-t border-gold-500/20">
        <div className="container-custom text-center">
          <p className="text-white text-sm font-medium flex items-center justify-center gap-2">
            <span>Designed with</span>
            <span className="text-gold-400 text-lg">❤️</span>
            <span>and maintained by</span>
            <a
              href="https://shldnet.qzz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold-400 hover:text-gold-300 transition-colors underline decoration-2"
            >
              SHLDNet
            </a>
          </p>
        </div>
      </div>

      {/* Premium Bottom Bar */}
      <div className="bg-navy-950 border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} NEEV – THE FOUNDATION. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gold-400 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-2xl shadow-gold-lg hover:shadow-gold transition-all hover:scale-110 flex items-center justify-center z-40 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
