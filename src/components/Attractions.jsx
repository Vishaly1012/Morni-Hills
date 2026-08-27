import React, { useState } from 'react';
import { MORNI_DATA } from '../data/morniData';
import AttractionCard from './AttractionCard';
import ScrollReveal from './ScrollReveal';
import { Compass, Sparkles, Filter } from 'lucide-react';

const CATEGORIES = ['All', 'Nature & Lakes', 'Heritage', 'Viewpoints', 'Adventure', 'Activities'];

export default function Attractions({ onSelectAttraction }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAttractions = selectedCategory === 'All'
    ? MORNI_DATA.attractions
    : MORNI_DATA.attractions.filter(item => 
        item.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section id="explore" className="py-24 md:py-32 relative bg-morni-light-surface dark:bg-morni-dark/95 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0} distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>DISCOVER DESTINATIONS</span>
            </div>

            <h2 className="heading-section mb-4">
              Explore <span className="italic text-morni-primary dark:text-morni-secondary">Morni</span>
            </h2>

            <p className="subheading-section">
              Places that make the hills unforgettable. From ancient hilltop fortifications to sacred twin lakes and emerald forest paths.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-morni-primary text-white shadow-md shadow-morni-primary/30 dark:bg-morni-accent dark:text-morni-dark'
                      : 'bg-white/80 dark:bg-morni-dark-card/80 text-morni-dark/70 dark:text-morni-light/70 hover:bg-white dark:hover:bg-morni-dark-surface border border-morni-dark/10 dark:border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Attractions Grid with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attraction, idx) => (
            <ScrollReveal
              key={attraction.id}
              delay={(idx % 3) * 120}
              distance={40}
              className="h-full"
            >
              <AttractionCard
                attraction={attraction}
                onSelect={onSelectAttraction}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
