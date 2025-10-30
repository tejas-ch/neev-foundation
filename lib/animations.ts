/**
 * Shared animation variants and configurations
 * Centralizes animation logic to ensure consistency and maintainability
 */

import { Variants } from "framer-motion";

/**
 * Common fade-in animation
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

/**
 * Fade in with upward motion
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

/**
 * Fade in with downward motion
 */
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

/**
 * Stagger children animation for lists
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Item animation for staggered lists
 */
export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Common transition configuration
 */
export const defaultTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1], // cubic-bezier for smooth easing
};

/**
 * Spring transition for bouncy effects
 */
export const springTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
};

/**
 * Viewport settings for scroll animations
 */
export const viewportConfig = {
  once: true, // Animate only once when element comes into view
  margin: "-100px", // Start animation slightly before element is in view
};

/**
 * Card hover animation
 */
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: defaultTransition,
};

/**
 * Button hover animation
 */
export const buttonHover = {
  scale: 1.05,
  y: -2,
  transition: { duration: 0.2 },
};

/**
 * Icon hover animation
 */
export const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { duration: 0.3 },
};
