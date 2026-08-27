import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-morni-dark/90 text-white backdrop-blur-md shadow-2xl border border-white/20 flex items-center justify-center group hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
    >
      {/* SVG Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="text-white/10"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="text-morni-accent transition-all duration-150"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
        />
      </svg>

      <ArrowUp className="w-5 h-5 text-morni-accent group-hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  );
}
