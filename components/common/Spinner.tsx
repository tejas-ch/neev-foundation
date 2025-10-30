"use client";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "navy" | "gold" | "white";
  className?: string;
}

/**
 * Loading spinner component with customizable size and color
 */
export default function Spinner({
  size = "md",
  color = "navy",
  className = "",
}: SpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  const colorClasses = {
    navy: "border-navy-900 border-t-transparent",
    gold: "border-gold-500 border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
