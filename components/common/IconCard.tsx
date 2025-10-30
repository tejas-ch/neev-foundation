"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  variant?: "default" | "gold" | "navy";
  className?: string;
}

/**
 * Reusable IconCard component for displaying features, benefits, or values
 * Provides consistent styling with animation and hover effects
 */
export default function IconCard({
  icon,
  title,
  description,
  index = 0,
  variant = "default",
  className = "",
}: IconCardProps) {
  const cardVariants = {
    default: "card",
    gold: "card-gold",
    navy: "card-navy"
  };

  const iconBgVariants = {
    default: "bg-gradient-to-br from-navy-800 to-navy-950",
    gold: "bg-white",
    navy: "bg-white"
  };

  const iconColorVariants = {
    default: "text-white",
    gold: "text-navy-950",
    navy: "text-navy-950"
  };

  const titleColorVariants = {
    default: "text-navy-950",
    gold: "text-navy-950",
    navy: "text-white"
  };

  const descriptionColorVariants = {
    default: "text-gray-700",
    gold: "text-navy-800",
    navy: "text-gray-200"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${cardVariants[variant]} p-6 md:p-8 group ${className}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 md:w-14 md:h-14 ${iconBgVariants[variant]} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
        <div className={`text-2xl md:text-3xl ${iconColorVariants[variant]}`}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className={`text-lg md:text-xl font-bold mb-2 ${titleColorVariants[variant]}`}>
        {title}
      </h3>
      
      {/* Description */}
      <p className={`text-sm md:text-base leading-relaxed ${descriptionColorVariants[variant]}`}>
        {description}
      </p>
    </motion.div>
  );
}
