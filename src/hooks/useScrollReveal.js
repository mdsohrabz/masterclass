import { useEffect, useRef } from 'react';

/**
 * A hook that utilizes IntersectionObserver to add an 'active' class
 * when elements scroll into view. Wait for them to appear to trigger animations.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Collect all elements with 'reveal', 'reveal-left', 'reveal-right' classes
    const container = containerRef.current;
    if (!container) return;

    const revealElements = container.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If element is in view, add 'active' class
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed to only animate once
          // observer.unobserve(entry.target);
        } else {
          // If we want to animate out when out of view (for repeatable scrolling)
          // To keep it slow, we might leave it or remove it. We will remove it
          // so the user can scroll up and down and see the animations repeatedly.
          entry.target.classList.remove('active');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: options.threshold || 0.15,
      ...options
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);

  return containerRef;
}
