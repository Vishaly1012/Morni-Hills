import React, { useState, useEffect } from 'react';
import { Compass, ArrowDown, Sparkles, MapPin, Wind, ThermometerSun, ShieldCheck } from 'lucide-react';
import IMAGES from '../assets/images';

export default function Hero({ onOpenPlanner , darkMode }) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = document.documentElement;
    const x = e.clientX / clientWidth;
    const y = e.clientY / clientHeight;
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const topOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      const topOffset = exploreSection.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Parallax offsets based on mouse movement
  const bgOffsetX = (mousePos.x - 0.5) * -20;
  const bgOffsetY = (mousePos.y - 0.5) * -15;

  const contentOffsetX = (mousePos.x - 0.5) * 12;
  const contentOffsetY = (mousePos.y - 0.5) * 8;

  const floatingOffsetX = (mousePos.x - 0.5) * 25;
  const floatingOffsetY = (mousePos.y - 0.5) * 20;

  return (
    <section
      id="hero"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
  darkMode ? "bg-morni-dark" : "bg-slate-100"
}`}
    >
      {/* 1. Cinematic Background Layer with Parallax & Realistic Photography */}
      <div
        className="absolute inset-0 w-[112%] h-[112%] -left-[6%] -top-[6%] transition-transform duration-700 ease-out will-change-transform bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          transform: `translate3d(${bgOffsetX}px, ${bgOffsetY}px, 0px) scale(1.05)`,
        }}
      />

      {/* 2. Gentle Slow-Moving Clouds Drifting Across the Clean Sky & Ridges */}
      
      {/* Cloud 1: Soft wispy cloud drifting slowly left-to-right across the sky */}
      <div
        className="absolute top-[12%] -left-[10%] w-[550px] sm:w-[750px] h-44 sm:h-56 pointer-events-none opacity-60 mix-blend-screen animate-cloud-drift-slow will-change-transform z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(245, 250, 248, 0.4) 40%, rgba(230, 245, 240, 0.15) 60%, transparent 75%),
            radial-gradient(ellipse 45% 40% at 30% 45%, rgba(255, 255, 255, 0.6) 0%, rgba(240, 248, 245, 0.25) 45%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 70% 55%, rgba(255, 255, 255, 0.55) 0%, rgba(235, 245, 242, 0.2) 50%, transparent 70%)
          `,
          transform: `translate3d(${-floatingOffsetX * 0.5}px, 0px, 0px)`,
        }}
      />

      {/* Cloud 2: Gentle elongated cloud drifting in the opposite direction across the hill crest */}
      <div
        className="absolute top-[28%] -right-[10%] w-[600px] sm:w-[800px] h-40 sm:h-48 pointer-events-none opacity-50 mix-blend-screen animate-cloud-drift-reverse will-change-transform z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 45% at 50% 50%, rgba(255, 255, 255, 0.65) 0%, rgba(240, 248, 245, 0.35) 45%, rgba(225, 242, 238, 0.1) 65%, transparent 80%),
            radial-gradient(ellipse 40% 35% at 75% 45%, rgba(255, 255, 255, 0.5) 0%, rgba(235, 245, 240, 0.2) 40%, transparent 70%)
          `,
          transform: `translate3d(${floatingOffsetX * 0.4}px, 0px, 0px)`,
        }}
      />

      {/* Cloud 3: Subtle low ridge cloud wisp */}
      <div
        className="absolute bottom-[20%] left-[10%] w-[500px] sm:w-[650px] h-32 sm:h-40 pointer-events-none opacity-45 mix-blend-screen animate-cloud-drift-slow will-change-transform z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 40% at 45% 50%, rgba(255, 255, 255, 0.55) 0%, rgba(240, 248, 245, 0.25) 45%, transparent 75%)
          `,
        }}
      />

      {/* Clean Sky & Contrast Gradient (Subtle & Open) */}
      <div className="absolute inset-0 bg-gradient-to-t from-morni-dark/95 via-morni-dark/30 to-black/25 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-morni-dark/60 pointer-events-none z-10" />

      {/* 4. Main Hero Content */}
      <div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${contentOffsetX}px, ${contentOffsetY}px, 0px)`,
        }}
      >
        {/* Small Label Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl mb-6 animate-float-medium">
          <Sparkles className="w-3.5 h-3.5 text-morni-accent" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-morni-light">
            HARYANA'S HIDDEN HILL ESCAPE
          </span>
        </div>

        {/* Large Cinematic Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-2xl mb-6 select-none">
          Discover <br />
          <span className="bg-gradient-to-r from-white via-morni-secondary-light to-morni-accent bg-clip-text text-transparent italic">
            Morni Hills
          </span>
        </h1>

        {/* Evocative Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed drop-shadow-md mb-10 px-2">
          Escape into the quiet beauty of the Shivalik Hills, where forests,
          lakes and mountain landscapes come together.
        </p>

        {/* Dual Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={scrollToExplore}
            className="btn-gold w-full sm:w-auto font-medium text-sm sm:text-base shadow-xl flex items-center justify-center gap-2.5 group"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Morni</span>
          </button>

          <button
            onClick={() => {
              if (onOpenPlanner) {
                onOpenPlanner();
              } else {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const topOffset = contactSection.getBoundingClientRect().top + window.pageYOffset - 70;
                  window.scrollTo({ top: topOffset, behavior: 'smooth' });
                }
              }
            }}
            className="btn-outline-light w-full sm:w-auto font-medium text-sm sm:text-base shadow-xl flex items-center justify-center gap-2"
          >
            <span>Plan Your Visit</span>
          </button>
        </div>

        {/* Live Weather & Elevation Pill Badge */}
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 py-2.5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 text-xs text-white/80 shadow-2xl">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-morni-accent" />
            <span>Panchkula, Haryana</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <Wind className="w-3.5 h-3.5 text-morni-secondary" />
            <span>Elevation 1,220 m</span>
          </div>
          <span className="hidden sm:inline text-white/30">•</span>
          <div className="flex items-center gap-1.5">
            <ThermometerSun className="w-3.5 h-3.5 text-amber-400" />
            <span>22°C Clear Mountain Breeze</span>
          </div>
        </div>
      </div>

      {/* 5. Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
          </span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-morni-accent group-hover:bg-white/10 transition-all duration-300 animate-bounce">
            <ArrowDown className="w-4 h-4 text-white group-hover:text-morni-accent transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
}
