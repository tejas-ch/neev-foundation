"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable SectionHeader component for consistent section headers across pages
 * Provides premium design with optional badge and subtitle
 */
export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${centered ? "text-center" : ""} mb-12 md:mb-16 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
          role="status"
          aria-label={badge}
        >
          {badge}
        </motion.span>
      )}
      
      {/* Title */}
      <h2 className="section-title">
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
