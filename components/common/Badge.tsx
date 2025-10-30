"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "navy" | "gold" | "success" | "info" | "warning";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

/**
 * Badge component for labels, tags, and status indicators
 */
export default function Badge({
  children,
  variant = "navy",
  size = "md",
  className = "",
  icon,
}: BadgeProps) {
  const variantClasses = {
    navy: "bg-navy-100 text-navy-900 border-navy-200",
    gold: "bg-gold-100 text-gold-900 border-gold-200",
    success: "bg-green-100 text-green-900 border-green-200",
    info: "bg-blue-100 text-blue-900 border-blue-200",
    warning: "bg-yellow-100 text-yellow-900 border-yellow-200",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-semibold border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon && <span className="inline-flex" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}
