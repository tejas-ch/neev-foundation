"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import siteConfig from "@/data/siteConfig.json";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed bottom-24 right-8 z-50 flex flex-col gap-3"
      >
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 min-w-[44px] min-h-[44px] bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center group animate-float"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp size={28} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
        </a>

        {/* Enroll Now Button */}
        <Link
          href="/contact"
          className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 min-h-[44px] rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold text-sm whitespace-nowrap flex items-center gap-2 group"
          aria-label="Enroll now - Go to contact page"
        >
          <span aria-hidden="true">📚</span>
          <span>Enroll Now</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingCTA;
