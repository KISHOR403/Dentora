/**
 * Motion & Animation Utilities
 * Framer Motion transition curves and variant presets.
 */

export const LUXURY_EASE = [0.16, 1, 0.3, 1];

export const TRANSITION_DEFAULTS = {
  duration: 0.7,
  ease: LUXURY_EASE,
};

// Container stagger variants
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Fade in up variant for text, cards, sections
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: LUXURY_EASE,
    },
  },
};

// Pure subtle fade in
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE,
    },
  },
};

// Gentle scale-in for badges and images
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

// Slide in from left / right
export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

export const slideInFromRight = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

// Hover micro-interactions
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.015,
    transition: {
      duration: 0.35,
      ease: LUXURY_EASE,
    },
  },
};

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
};
