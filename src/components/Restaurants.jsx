import React from "react";
import { MORNI_DATA } from "../data/morniData";
import ScrollReveal from "./ScrollReveal";
import {
  Star,
  MapPin,
  Utensils,
  ChevronRight,
  Check,
} from "lucide-react";

export default function Restaurants({ onSelectRestaurant }) {
  const { restaurants } = MORNI_DATA;

  return (
    <section
      id="eat"
      className="py-24 md:py-32 relative bg-morni-light-surface dark:bg-morni-dark/95 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal delay={0} distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-16">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
              <Utensils className="w-3.5 h-3.5" />
              <span>CULINARY JOURNEY</span>
            </div>

            <h2 className="heading-section mb-4">
              Taste{" "}
              <span className="italic text-morni-primary dark:text-morni-secondary">
                the Hills
              </span>
            </h2>

            <p className="subheading-section">
              Discover local flavours and peaceful places to eat — from rustic
              desi ghee dhabas to lakeside artisan bistros and royal courtyard
              dining.
            </p>

          </div>
        </ScrollReveal>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {restaurants.map((restaurant, idx) => (
            <ScrollReveal
              key={restaurant.id}
              delay={(idx % 2) * 150}
              distance={40}
              className="h-full"
            >

              {/* Restaurant Card */}
              <div className="group rounded-3xl overflow-hidden glass-card border border-morni-dark/10 dark:border-white/10 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl h-full">

                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">

                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold">

                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />

                    <span>{restaurant.rating}</span>

                    <span className="text-white/60 font-normal">
                      ({restaurant.reviewsCount})
                    </span>

                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-morni-accent border border-white/20 text-xs font-semibold">
                    {restaurant.priceRange}
                  </div>

                  {/* Restaurant Name */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">

                    <span className="text-xs uppercase tracking-wider font-semibold text-morni-secondary">
                      {restaurant.cuisine}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow-md">
                      {restaurant.name}
                    </h3>

                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-morni-dark-card transition-colors duration-300">

                  <div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-morni-dark/60 dark:text-morni-light/60 mb-3">

                      <MapPin className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary" />

                      <span>{restaurant.location}</span>

                    </div>

                    {/* Description */}
                    <p className="text-sm text-morni-dark/80 dark:text-morni-light/80 leading-relaxed mb-4">
                      {restaurant.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">

                      <div className="text-xs font-semibold uppercase tracking-wider text-morni-dark/50 dark:text-morni-light/50 mb-2">
                        Chef Specialties
                      </div>

                      <div className="flex flex-wrap gap-1.5">

                        {restaurant.specialties.map((spec, specIdx) => (
                          <span
                            key={specIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-morni-primary/5 dark:bg-morni-secondary/10 text-morni-primary dark:text-morni-secondary border border-morni-primary/10 dark:border-morni-secondary/20"
                          >
                            {spec}
                          </span>
                        ))}

                      </div>
                    </div>

                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between gap-4">

                    {/* Features */}
                    <div className="flex items-center gap-2 flex-wrap">

                      {restaurant.features
                        .slice(0, 2)
                        .map((feat, featureIdx) => (
                          <span
                            key={featureIdx}
                            className="text-[11px] text-morni-dark/60 dark:text-morni-light/60 flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-emerald-500" />
                            {feat}
                          </span>
                        ))}

                    </div>

                    {/* View Button */}
                    <button
                      type="button"
                      onClick={() => onSelectRestaurant(restaurant)}
                      className="btn-outline-dark !py-2 !px-4 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>View Menu & Info</span>

                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                  </div>

                </div>

              </div>

            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}