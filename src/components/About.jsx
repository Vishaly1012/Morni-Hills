import React from 'react';
import { MORNI_DATA } from '../data/morniData';
import IMAGES from '../assets/images';
import { CheckCircle2, Trees, Mountain, MapPin, Feather, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {cssData} from "./cssData.js"


export default function About() {
  const { about } = MORNI_DATA;

  return (
    <section id="about" className={`py-${cssData.py} md:py-${cssData.md_py}relative bg-morni-light dark:bg-morni-dark transition-colors duration-500 overflow-hidden`}>
      {/* Subtle background ambient blur circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-morni-secondary/10 dark:bg-morni-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-morni-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Realistic Photography with layered cards & badges */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal delay={0} distance={45}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative background frame */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-morni-primary/20 via-morni-accent/20 to-transparent blur-lg opacity-70" />

                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 dark:border-white/10 group">
                  <img
                    src={IMAGES.aboutLandscape}
                    alt="Morni Hills Shivalik Landscape"
                    className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Floating Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-morni-secondary">Shivalik Ecosystem</span>
                    </div>
                    <p className="text-sm font-medium text-white/90">
                      A peaceful bio-diverse haven with dense Chir pine and Sal canopies.
                    </p>
                  </div>
                </div>

                {/* Floating Floating Stat Badge (Top Right) */}
                <div className="absolute -top-6 -right-4 sm:-right-6 bg-white dark:bg-morni-dark-card p-4 rounded-2xl shadow-xl border border-morni-primary/20 dark:border-morni-secondary/20 flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-morni-primary/15 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center font-bold">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-serif font-bold text-morni-dark dark:text-white">100% Pure</div>
                    <div className="text-xs text-morni-dark/60 dark:text-morni-light/60">Mountain Air</div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <ScrollReveal delay={100} distance={35}>
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4 w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT MORNI HILLS</span>
              </div>

              {/* Heading */}
              <h2 className="heading-section mb-6">
                Where the Hills <br />
                <span className="italic text-morni-primary dark:text-morni-secondary">Begin to Breathe</span>
              </h2>

              {/* Paragraphs */}
              <p className="text-base sm:text-lg text-morni-dark/80 dark:text-morni-light/80 leading-relaxed mb-4">
                {about.description}
              </p>

              <p className="text-sm sm:text-base text-morni-dark/70 dark:text-morni-light/70 leading-relaxed mb-8">
                {about.paragraphs[0]}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200} distance={30}>
              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {about.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-morni-dark/90 dark:text-morni-light/90">
                    <CheckCircle2 className="w-4 h-4 text-morni-primary dark:text-morni-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} distance={25}>
              {/* Statistics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-morni-dark/10 dark:border-white/10">
                {about.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/70 dark:bg-morni-dark-card/60 backdrop-blur-sm border border-morni-dark/5 dark:border-white/5 text-center sm:text-left transition-transform hover:-translate-y-1 duration-300">
                    <div className="font-serif text-xl sm:text-2xl font-bold text-morni-primary dark:text-morni-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-morni-dark/90 dark:text-white mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-morni-dark/60 dark:text-morni-light/60">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
