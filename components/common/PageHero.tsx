"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  badge?: string;
  backgroundPattern?: "dots" | "grid" | "none";
  className?: string;
}

/**
 * Reusable PageHero component for consistent hero sections across pages
 * Provides premium design with animations and optional badge/icon
 */
export default function PageHero({
  title,
  subtitle,
  description,
  icon,
  badge,
  backgroundPattern = "dots",
  className = "",
}: PageHeroProps) {
  const patternStyles = {
    dots: {
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    },
    grid: {
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    },
    none: {}
  };

  return (
    <section className={`relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20 md:py-24 overflow-hidden ${className}`}>
      {/* Background Pattern */}
      {backgroundPattern !== "none" && (
        <div className="absolute inset-0 opacity-5" style={patternStyles[backgroundPattern]}></div>
      )}
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl opacity-10 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-700 rounded-full filter blur-3xl opacity-15"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-sm font-medium text-gold-200 mb-6"
              role="status"
              aria-label={badge}
            >
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
              {badge}
            </motion.div>
          )}
          
          {/* Icon */}
          {icon && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl"
              aria-hidden="true"
            >
              {icon}
            </motion.div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl mb-4 text-gold-300 font-medium">
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
