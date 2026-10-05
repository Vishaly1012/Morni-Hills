import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Phone,
  Star,
  Utensils,
  Check,
  ChevronRight,
} from "lucide-react";

import { MORNI_DATA } from "../data/morniData";

export default function RestaurantDetailsPage() {
  const { slug } = useParams();

  const restaurant = MORNI_DATA.restaurants.find(
    (item) => item.slug === slug
  );

  if (!restaurant) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl mb-6">🍽️</div>

          <h1 className="font-serif text-4xl font-bold mb-4">
            Restaurant Not Found
          </h1>

          <p className="text-morni-dark/60 dark:text-morni-light/60 mb-8">B
            The restaurant you're looking for could not be found.
          </p>

          <Link
            to="/eat"
            className="btn-outline-dark inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Restaurants
          </Link>
        </div>Toggle Centered Layout
      </main>
    );
  }

  return (
    <main className="bg-morni-light-surface dark:bg-morni-dark transition-colors duration-500">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">

          <Link
            to="/eat"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Restaurants
          </Link>

          <div className="max-w-4xl">

            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="px-3 py-1.5 rounded-full bg-morni-secondary text-morni-dark text-xs font-bold uppercase tracking-wider">
                {restaurant.cuisine}
              </span>

              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs border border-white/10">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {restaurant.rating}
                <span className="text-white/60">
                  ({restaurant.reviewsCount})
                </span>
              </span>

              <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs border border-white/10">
                {restaurant.priceRange}
              </span>

            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
              {restaurant.name}
            </h1>

            <div className="flex flex-wrap gap-5 text-white/80 text-sm">

              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-morni-secondary" />
                {restaurant.location}
              </span>

              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-morni-secondary" />
                {restaurant.cuisine}
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          ABOUT
      ========================================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-20">

            <div>

              <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-primary dark:text-morni-secondary">
                About the Restaurant
              </span>

              <h2 className="heading-section mt-3 mb-6">
                A Taste of{" "}
                <span className="italic text-morni-primary dark:text-morni-secondary">
                  Morni
                </span>
              </h2>

              <p className="text-morni-dark/70 dark:text-morni-light/70 leading-8 text-lg max-w-3xl">
                {restaurant.about}
              </p>

              <p className="text-morni-dark/60 dark:text-morni-light/60 leading-7 mt-5 max-w-3xl">
                {restaurant.description}
              </p>

            </div>


            {/* QUICK INFO */}
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-morni-dark/10 dark:border-white/10 h-fit">

              <h3 className="font-serif text-2xl font-bold mb-7">
                Restaurant Details
              </h3>

              <div className="space-y-6">

                <div className="flex gap-3">

                  <MapPin className="w-5 h-5 text-morni-primary dark:text-morni-secondary shrink-0" />

                  <div>
                    <div className="text-[11px] uppercase tracking-wider opacity-50 mb-1">
                      Location
                    </div>

                    <div className="text-sm">
                      {restaurant.address}
                    </div>
                  </div>

                </div>


                <div className="flex gap-3">

                  <Phone className="w-5 h-5 text-morni-primary dark:text-morni-secondary shrink-0" />

                  <div>
                    <div className="text-[11px] uppercase tracking-wider opacity-50 mb-1">
                      Contact
                    </div>

                    <a
                      href={`tel:${restaurant.phone}`}
                      className="text-sm hover:text-morni-primary dark:hover:text-morni-secondary transition-colors"
                    >
                      {restaurant.phone}
                    </a>
                  </div>

                </div>


                <div className="flex gap-3">

                  <Clock className="w-5 h-5 text-morni-primary dark:text-morni-secondary shrink-0" />

                  <div>

                    <div className="text-[11px] uppercase tracking-wider opacity-50 mb-1">
                      Opening Hours
                    </div>

                    <div className="text-sm">
                      {restaurant.timings.monday}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          FEATURES
      ========================================= */}
      {/* <section className="py-16 bg-white dark:bg-morni-dark-card"> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-wrap gap-3">

            {restaurant.features.map((feature, index) => (

              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-morni-primary/5 dark:bg-morni-secondary/10 border border-morni-primary/10 dark:border-morni-secondary/20"
              >
                <Check className="w-4 h-4 text-emerald-500" />

                <span className="text-sm font-medium">
                  {feature}
                </span>
              </div>

            ))}

          </div>

        </div>

      {/* </section> */}


      {/* =========================================
          SPECIALTIES
      ========================================= */}
      {/* <section className="py-20 md:py-28"> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* <div className="max-w-3xl mb-12"> */}

            {/* <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-primary dark:text-morni-secondary"> */}
              {/* From Our Kitchen */}
            {/* </span> */}

            {/* <h2 className="heading-section mt-3">
              Chef's{" "}
              <span className="italic text-morni-primary dark:text-morni-secondary">
                Specialties
              </span>
            </h2> */}

          {/* </div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {restaurant.specialties.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl p-5 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10"
              >

                <Check className="w-5 h-5 text-emerald-500 mb-4" />

                <h3 className="font-semibold text-sm">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      {/* </section> */}


      {/* =========================================
          MENU
      ========================================= */}
      <section className="py-20 md:py-28 bg-white dark:bg-morni-dark-card">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-primary dark:text-morni-secondary">
              Our Menu
            </span>

            <h2 className="heading-section mt-3">
              Explore the{" "}
              <span className="italic text-morni-primary dark:text-morni-secondary">
                Flavours
              </span>
            </h2>

          </div>


          <div className="space-y-14">

            {restaurant.menu.map((category, categoryIndex) => (

              <div key={categoryIndex}>

                <h3 className="font-serif text-2xl font-bold mb-7 pb-4 border-b border-morni-dark/10 dark:border-white/10">
                  {category.category}
                </h3>

                <div className="space-y-7">

                  {category.items.map((item, itemIndex) => (

                    <div
                      key={itemIndex}
                      className="flex items-start justify-between gap-8"
                    >

                      <div>

                        <h4 className="font-semibold text-base mb-1.5">
                          {item.name}
                        </h4>

                        <p className="text-sm text-morni-dark/50 dark:text-morni-light/50 leading-6">
                          {item.description}
                        </p>

                      </div>

                      <span className="font-semibold whitespace-nowrap">
                        {item.price}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          GALLERY
      ========================================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-primary dark:text-morni-secondary">
              Visual Journey
            </span>

            <h2 className="heading-section mt-3">
              Inside the{" "}
              <span className="italic text-morni-primary dark:text-morni-secondary">
                Experience
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {restaurant.gallery.map((image, index) => (

              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group"
              >

                <img
                  src={image}
                  alt={`${restaurant.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}
      <section className="py-20 md:py-28">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-morni-primary p-10 md:p-16 text-center">

            <div className="relative z-10">

              <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-secondary">
                Reserve Your Table
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
                Make Your Visit Special
              </h2>

              <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-7">
                Come for the flavours, stay for the views and experience
                Morni at its best.
              </p>

              <a
                href={restaurant.bookingUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-morni-dark font-semibold hover:-translate-y-0.5 transition-all"
              >
                Reserve a Table

                <ChevronRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BACK TO EAT
      ========================================= */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/eat"
            className="inline-flex items-center gap-2 text-sm font-semibold text-morni-primary dark:text-morni-secondary hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore More Restaurants
          </Link>

        </div>

      </section>

    </main>
  );
}