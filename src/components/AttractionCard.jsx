import React from "react";
import { ArrowUpRight, Mountain, Clock } from "lucide-react";

export default function AttractionCard({ attraction, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-morni-primary/15 cursor-pointer flex flex-col h-full border border-morni-dark/10 dark:border-white/10"
    >
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md text-morni-accent border border-white/20">
            {attraction.category}
          </span>
        </div>

        {/* Elevation Badge */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/20">
          <Mountain className="w-3 h-3 text-morni-secondary" />
          <span>{attraction.elevation}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-morni-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-morni-dark-card transition-colors duration-300">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-morni-dark dark:text-white group-hover:text-morni-primary dark:group-hover:text-morni-secondary transition-colors mb-2">
            {attraction.title}
          </h3>

          <p className="text-xs font-medium text-morni-accent uppercase tracking-wider mb-3">
            {attraction.tagline}
          </p>

          <p className="text-sm text-morni-dark/70 dark:text-morni-light/70 line-clamp-3 leading-relaxed mb-4">
            {attraction.description}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between">
          {/* Timing */}
          <div className="flex items-center gap-1.5 text-xs text-morni-dark/60 dark:text-morni-light/60">
            <Clock className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary" />

            <span>
              {attraction.timings?.split("(")[0]}
            </span>
          </div>

          {/* Explore Button */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-morni-primary dark:text-morni-secondary group-hover:text-morni-accent transition-colors">
            <span>Explore</span>

            <div className="w-7 h-7 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 flex items-center justify-center group-hover:bg-morni-accent group-hover:text-morni-dark transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

