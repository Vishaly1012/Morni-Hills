import React from "react";
import { MORNI_DATA } from "../data/morniData";
import ScrollReveal from "./ScrollReveal";
import { cssData } from "./cssData.js";
import { Link } from "react-router-dom";

import { Star, MapPin, Utensils, ChevronRight, Check } from "lucide-react";

export default function Restaurants() {
  const { restaurants } = MORNI_DATA;

  return (
    <section
      id="eat"
      className={`py-${cssData.py} md:py-${cssData.md_py} relative bg-morni-light-surface dark:bg-morni-dark/95 transition-colors duration-500`}
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

              {/* ENTIRE CARD CLICKABLE */}
              <Link
                to={`/eat/${restaurant.slug}`}
                className="group block h-full cursor-pointer"
                aria-label={`View ${restaurant.name} menu and information`}
              >
                {/* Restaurant Card */}
                <div className="rounded-3xl overflow-hidden glass-card border border-morni-dark/10 dark:border-white/10 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl h-full">

                  {/* Image & Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-morni-dark/20">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                    {/* Cuisine Badge Top-Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {restaurant.cuisine}
                      </span>
                    </div>

                    {/* Rating Badge Top-Right (No overlap with building signage) */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{restaurant.rating}</span>
                      <span className="text-white/60 font-normal">
                        ({restaurant.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white dark:bg-morni-dark-card transition-colors duration-300">

                    <div>
                      {/* Name & Location */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-2xl font-bold text-morni-dark dark:text-white group-hover:text-morni-primary dark:group-hover:text-morni-secondary transition-colors">
                          {restaurant.name}
                        </h3>
                        {restaurant.priceRange && (
                          <span className="text-xs font-semibold text-morni-accent uppercase tracking-wider px-2 py-0.5 rounded bg-morni-accent/10">
                            {restaurant.priceRange}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-morni-dark/60 dark:text-morni-light/60 mb-3">
                        <MapPin className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary shrink-0" />
                        <span>{restaurant.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-morni-dark/80 dark:text-morni-light/80 leading-relaxed mb-4">
                        {restaurant.description}
                      </p>

                      {/* Specialties */}
                      {restaurant.specialties && restaurant.specialties.length > 0 && (
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
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between gap-4">

                      {/* Features */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {restaurant.features && restaurant.features
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

                      {/* Visual CTA */}
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-morni-primary dark:text-morni-secondary group-hover:text-morni-accent transition-colors">
                        <span>View Menu</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>

                    </div>
                  </div>
                </div>
              </Link>

            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}