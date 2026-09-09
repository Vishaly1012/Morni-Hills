
import React from "react";
import {
  Utensils,
  Coffee,
  MapPin,
  Star,
  ArrowRight,
  Leaf,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const diningPlaces = [
  {
    name: "Hill View Restaurant",
    type: "Multi-Cuisine",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy delicious meals with peaceful views and a relaxed atmosphere surrounded by nature.",
  },
  {
    name: "The Forest Café",
    type: "Café & Snacks",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    description:
      "A cozy place to enjoy coffee, snacks and conversations after exploring the hills.",
  },
  {
    name: "Lake Side Dining",
    type: "Local & Indian",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax with a warm meal while enjoying the peaceful surroundings of the Morni region.",
  },
];

const foodExperiences = [
  {
    icon: Utensils,
    title: "Local Flavours",
    text: "Try simple, comforting North Indian dishes and local flavours during your stay.",
  },
  {
    icon: Coffee,
    title: "Coffee With A View",
    text: "Take a break from exploring and enjoy your favourite drink surrounded by hills.",
  },
  {
    icon: Leaf,
    title: "Fresh & Simple",
    text: "Enjoy fresh meals and ingredients while taking in the peaceful atmosphere.",
  },
];

function EatPage() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
          alt="Dining in Morni Hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

          <ScrollReveal>
            <div className="max-w-3xl text-white">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm">
                <Utensils size={16} />
                Taste Morni
              </span>

              <h1 className="font-serif text-5xl md:text-7xl leading-tight mt-6">
                Eat,
                <span className="block text-emerald-300">
                  Relax & Enjoy
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                Discover cozy cafés, local flavours and peaceful dining
                experiences while exploring the hills of Morni.
              </p>

              <a
                href="#dining"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
              >
                Discover Dining
                <ArrowRight size={18} />
              </a>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <ScrollReveal>

            <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
              Taste The Hills
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4">
              Good Food Feels Better In The Mountains
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              After a day of exploring Morni Hills, slow down and enjoy a
              delicious meal, a cup of coffee or a quiet evening surrounded
              by nature.
            </p>

          </ScrollReveal>

        </div>
      </section>

      {/* DINING PLACES */}
      <section
        id="dining"
        className="bg-slate-50 py-20 md:py-28"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <ScrollReveal>

            <div className="mb-12">

              <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                Places To Eat
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-3">
                Discover Dining Around Morni
              </h2>

            </div>

          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {diningPlaces.map((place) => (

              <ScrollReveal key={place.name}>

                <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">

                  {/* IMAGE */}
                  <div className="relative h-64 overflow-hidden">

                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-slate-700">
                      {place.type}
                    </div>

                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 text-sm font-semibold text-slate-900">

                      <Star
                        size={14}
                        className="fill-current text-amber-400"
                      />

                      {place.rating}

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-2xl font-semibold text-slate-900">
                      {place.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">

                      <MapPin size={15} className="text-emerald-600" />

                      Morni Hills, Haryana

                    </div>

                    <p className="mt-4 text-slate-600 leading-7">
                      {place.description}
                    </p>

                    <button className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
                      Explore Place
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>

      {/* FOOD EXPERIENCES */}
      <section className="py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <ScrollReveal>

              <div className="relative">

                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                  alt="Food experience"
                  className="w-full h-[520px] object-cover rounded-[2rem]"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Leaf
                        size={21}
                        className="text-emerald-600"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        Simple. Fresh. Delicious.
                      </p>

                      <p className="text-sm text-slate-500">
                        Food surrounded by nature
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </ScrollReveal>

            {/* CONTENT */}
            <ScrollReveal>

              <div>

                <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                  Dining Experiences
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4 leading-tight">
                  Slow Down & 
                  <span className="block text-emerald-600">
                    Savour The Moment
                  </span>
                </h2>

                <p className="mt-6 text-lg text-slate-600 leading-8">
                  Food is part of the journey. Take a break between adventures,
                  sit back and enjoy the peaceful surroundings of Morni Hills.
                </p>

                <div className="mt-8 space-y-5">

                  {foodExperiences.map((item) => {

                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-4"
                      >

                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                          <Icon size={22} />
                        </div>

                        <div>

                          <h3 className="font-semibold text-lg text-slate-900">
                            {item.title}
                          </h3>

                          <p className="text-slate-500 mt-1 leading-6">
                            {item.text}
                          </p>

                        </div>

                      </div>
                    );

                  })}

                </div>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-24">

        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem]">

          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=85"
            alt="Restaurant atmosphere"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 py-20 px-6 text-center text-white">

            <ScrollReveal>

              <h2 className="font-serif text-4xl md:text-5xl">
                Explore, Eat & Enjoy Morni
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-white/80 text-lg">
                Discover beautiful places, local flavours and unforgettable
                moments in the hills.
              </p>

              <a
                href="/explore"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
              >
                Explore Morni
                <ArrowRight size={18} />
              </a>

            </ScrollReveal>

          </div>

        </div>

      </section>

    </main>
  );
}

export default EatPage;

