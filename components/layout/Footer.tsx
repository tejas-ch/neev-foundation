"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
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
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden shadow-lg">
                <img 
                  src={getAssetPath("/images/branding/neev-logo.jpg")}
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
                <span className="text-xl font-bold">NEEV</span>
                <span className="text-xs text-gray-300">THE FOUNDATION</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {siteConfig.about}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent-DEFAULT rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent-DEFAULT rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent-DEFAULT rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent-DEFAULT rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-light">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-light">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all inline-block"
                  >
                    → {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent-light">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhone className="text-accent-light mt-1 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-light mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-300 hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-light mt-1 flex-shrink-0" />
                <span className="text-gray-300">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Designer Credit Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-3">
        <div className="container-custom text-center">
          <p className="text-white text-sm">
            Designed with ❤️ and maintained by{" "}
            <a
              href="https://shldnet.qzz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-blue-200 transition-colors underline"
            >
              SHLDNet
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} NEEV – THE FOUNDATION. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-DEFAULT hover:bg-accent-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
