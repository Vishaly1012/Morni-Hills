import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 700,
  distance = 32, // pixels to translate from bottom (translate-y)
  threshold = 0.12,
  cascade = false,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, we can unobserve
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`transition-all will-change-[transform,opacity] ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${distance}px)`,
      }}
    >
      {children}
    </div>
  );
}
