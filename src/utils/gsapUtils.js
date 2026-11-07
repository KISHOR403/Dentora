import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Creates a standard smooth reveal animation for a section or element list
 * 
 * @param {HTMLElement | string} targets 
 * @param {object} options 
 * @returns {gsap.core.Tween}
 */
export const createScrollFadeUp = (targets, options = {}) => {
  return gsap.from(targets, {
    opacity: 0,
    y: 35,
    duration: 0.9,
    stagger: options.stagger ?? 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: options.trigger || targets,
      start: options.start || 'top 85%',
      toggleActions: options.toggleActions || 'play none none reverse',
      ...options.scrollTrigger,
    },
    ...options,
  });
};

/**
 * Creates a parallax effect on target element
 * 
 * @param {HTMLElement | string} target 
 * @param {number} speed - e.g. -50 for upward parallax, 50 for downward
 * @returns {gsap.core.Tween}
 */
export const createParallax = (target, speed = -40) => {
  return gsap.to(target, {
    y: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};
