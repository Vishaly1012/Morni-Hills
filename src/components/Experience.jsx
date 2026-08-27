import React from 'react';
import { MORNI_DATA } from '../data/morniData';
import ScrollReveal from './ScrollReveal';
import {
  Trees,
  Camera,
  Mountain,
  Tent,
  Compass,
  Feather,
  Home,
  Sun,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const ICON_MAP = {
  Trees: Trees,
  Camera: Camera,
  Mountain: Mountain,
  Tent: Tent,
  Compass: Compass,
  Feather: Feather,
  Home: Home,
  Sun: Sun,
};

export default function Experience({ onOpenPlanner }) {
  const { experiences } = MORNI_DATA;

  return (
    <section id="experiences" className="py-24 md:py-32 relative bg-morni-light dark:bg-morni-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0} distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACTIVITIES & ADVENTURES</span>
            </div>

            <h2 className="heading-section mb-4">
              Experience <span className="italic text-morni-primary dark:text-morni-secondary">Morni</span>
            </h2>

            <p className="subheading-section">
              Immerse your senses in the pristine wilderness of Haryana's only hill station through curated outdoor activities.
            </p>
          </div>
        </ScrollReveal>

        {/* Experiences Grid with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const IconComponent = ICON_MAP[exp.icon] || Mountain;

            return (
              <ScrollReveal
                key={exp.id}
                delay={(idx % 4) * 100}
                distance={35}
                className="h-full"
              >
                <div className="group relative rounded-3xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-morni-primary/15 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full">
                  {/* Background glow hover effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-morni-primary/5 via-transparent to-morni-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-morni-primary/10 dark:bg-morni-secondary/15 text-morni-primary dark:text-morni-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-morni-primary group-hover:text-white transition-all duration-300 shadow-inner">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-morni-accent/15 text-morni-accent-hover dark:text-morni-accent border border-morni-accent/25">
                        {exp.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white group-hover:text-morni-primary dark:group-hover:text-morni-secondary transition-colors mb-3">
                      {exp.title}
                    </h3>

                    <p className="text-sm text-morni-dark/70 dark:text-morni-light/70 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bottom Row: Metadata */}
                  <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between text-xs text-morni-dark/60 dark:text-morni-light/60">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary" />
                      <span>{exp.duration}</span>
                    </div>

                    <span className="font-medium px-2.5 py-0.5 rounded-md bg-morni-dark/5 dark:bg-white/5 text-morni-dark/80 dark:text-morni-light/80">
                      {exp.difficulty}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner with CTA */}
        <ScrollReveal delay={200} distance={30}>
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-morni-primary to-morni-primary-dark text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-1">
                Want a customized adventure itinerary?
              </h3>
              <p className="text-sm text-white/80">
                Our local Morni trekking and nature guides can curate an unforgettable day.
              </p>
            </div>

            <button
              onClick={onOpenPlanner}
              className="btn-gold !text-sm whitespace-nowrap shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Request Guided Tour</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
