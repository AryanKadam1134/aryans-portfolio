import { useEffect, useRef } from 'react';

export const useIntersectionObserver = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add all animation classes immediately when element is in view
            entry.target.classList.add('fade-in-show', 'fade-in-side-show', 'fade-scale-show');
            // Unobserve after animation is triggered
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { 
        // Increased threshold and adjusted rootMargin for faster triggering
        threshold: 0.05,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-scale');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return observerRef;
};