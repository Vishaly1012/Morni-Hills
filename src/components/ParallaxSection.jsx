// import React, { useEffect, useState, useRef } from 'react';
// import IMAGES from '../assets/images';
// import { Compass, Sparkles } from 'lucide-react';

// export default function ParallaxSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setScrollY(window.pageYOffset - sectionRef.current.offsetTop);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const parallaxOffset = scrollY * 0.15;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-morni-dark"
//     >
//       {/* Background with scroll parallax */}
//       <div
//         className="absolute inset-0 w-full h-[125%] -top-[12%] bg-cover bg-center will-change-transform"
//         style={{
//           backgroundImage: `url(${IMAGES.parallaxBg})`,
//           transform: `translate3d(0px, ${parallaxOffset}px, 0px) scale(1.05)`,
//         }}
//       />

//       {/* Cinematic dark & gold overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-morni-dark via-morni-dark/60 to-morni-dark/80" />
//       <div className="absolute inset-0 bg-morni-primary/25 mix-blend-color-burn" />

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-[0.25em] uppercase text-morni-accent mb-8 animate-pulse-slow">
//           <Sparkles className="w-3.5 h-3.5" />
//           <span>SERENITY AWAITS</span>
//         </div>

//         <blockquote className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8">
//           “Leave the noise behind. <br />
//           <span className="italic bg-gradient-to-r from-white via-morni-secondary-light to-morni-accent bg-clip-text text-transparent">
//             Find your way to the hills.
//           </span>”
//         </blockquote>

//         <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto font-light leading-relaxed">
//           Just 45 minutes from Chandigarh, a tranquil sanctuary of pine forests, twin lakes, and Himalayan horizons awaits your footsteps.
//         </p>

//         {/* Coordinates Pill */}
//         <div className="mt-8 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white/60 font-mono">
//           <span>30.6974° N</span>
//           <span>•</span>
//           <span>77.0864° E</span>
//           <span>•</span>
//           <span>Elevation 1,220M</span>
//         </div>
//       </div>
//     </section>
//   );
// }
