import React from 'react';
import { MORNI_DATA } from '../data/morniData';
import { Star, MapPin, BedDouble, Wifi, Flame, Sparkles, ArrowUpRight, Check, Eye } from 'lucide-react';

export default function Resorts({ onSelectStay, onOpenPlanner }) {
  const { resorts } = MORNI_DATA;

  return (
    <section id="stay" className="py-9 md:py-25 relative bg-morni-light dark:bg-morni-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
            <BedDouble className="w-3.5 h-3.5" />
            <span>LUXURY & NATURE STAYS</span>
          </div>

          <h2 className="heading-section mb-4">
            Stay <span className="italic text-morni-primary dark:text-morni-secondary">Among the Hills</span>
          </h2>

          <p className="subheading-section">
            From luxury mountain-view eco resorts to lakeside stargazing geodesic domes and forest canopy treehouses.
          </p>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resorts.map((resort) => (
            <div
              key={resort.id}
              className="group rounded-3xl overflow-hidden glass-card border border-morni-dark/10 dark:border-white/10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image & Badges */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={resort.image}
                  alt={resort.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Rating Badge Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{resort.rating}</span>
                  <span className="text-white/60 font-normal">({resort.reviewsCount} reviews)</span>
                </div>

                {/* Price Per Night Badge Top Right */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-morni-primary/90 backdrop-blur-md text-white border border-white/20 text-xs font-bold shadow-lg">
                  <span>{resort.pricePerNight}</span>
                  <span className="text-[10px] font-normal text-white/80"> / night</span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-[11px] uppercase tracking-wider font-semibold text-morni-accent mb-2 inline-block">
                    {resort.type}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {resort.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-morni-accent" />
                    <span>{resort.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white dark:bg-morni-dark-card transition-colors duration-300">
                <div>
                  <p className="text-sm text-morni-dark/80 dark:text-morni-light/80 leading-relaxed mb-6">
                    {resort.description}
                  </p>

                  {/* Amenities List */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-morni-dark/50 dark:text-morni-light/50 mb-3">
                      Key Inclusions & Amenities
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {resort.amenities.map((amenity, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-morni-dark/80 dark:text-morni-light/80"
                        >
                          <Check className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary flex-shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-5 border-t border-morni-dark/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectStay(resort)}
                    className="btn-outline-dark !py-2.5 !px-5 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Stay Details</span>
                  </button>

                  <button
                    onClick={() => onOpenPlanner(resort.name)}
                    className="btn-gold !py-2.5 !px-6 text-xs font-semibold flex items-center gap-1.5 shadow-md"
                  >
                    <span>Check Availability</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
