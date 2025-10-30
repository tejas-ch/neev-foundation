"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  variant?: "default" | "gold" | "navy";
  hover?: boolean;
  className?: string;
  delay?: number;
}

/**
 * Premium card component with enhanced hover effects and animations
 * Provides a consistent, high-quality card design across the website
 */
export default function PremiumCard({
  children,
  variant = "default",
  hover = true,
  className = "",
  delay = 0,
}: PremiumCardProps) {
  const variantClasses = {
    default: "card",
    gold: "card-gold",
    navy: "card-navy",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`${variantClasses[variant]} group relative overflow-hidden ${className}`}
    >
      {/* Shimmer effect on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      )}
      
      {children}
    </motion.div>
  );
}
