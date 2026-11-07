import { useLayoutEffect, useEffect } from 'react';
import { gsap } from '@/utils/gsapUtils';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Custom React hook for GSAP animations with automatic context cleanup
 * Prevents memory leaks and duplicate ScrollTrigger instances during re-renders.
 * 
 * @param {Function} effect - Callback with GSAP animations
 * @param {React.RefObject} scope - Component root ref to scope selectors
 * @param {Array} dependencies - React dependency array
 */
export function useGsapScroll(effect, scope, dependencies = []) {
  useIsomorphicLayoutEffect(() => {
    if (!scope.current) return;

    const ctx = gsap.context(effect, scope);

    return () => ctx.revert();
  }, dependencies);
}

export default useGsapScroll;
