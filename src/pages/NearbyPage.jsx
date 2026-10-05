
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Navigation,
  ArrowRight,
  Mountain,
  Building2,
  Camera,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const nearbyPlaces = [
  {
    name: "Yadavindra Gardens (Pinjore)",
    slug: "yadavindra-gardens",
    distance: "40 km",
    type: "Heritage",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85",
    description:
      "A historic Mughal-style terraced garden featuring beautiful fountains, pavilions, landscaped greenery and peaceful pathways.",
  },
  {
    name: "Sukhna Lake (Chandigarh)",
    slug: "sukhna-lake",
    distance: "52 km",
    type: "Nature",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    description:
      "A peaceful waterfront destination known for boating, lakeside walks, sunrise views, bird watching and relaxing surroundings.",
  },
  {
    name: "Nada Sahib Gurudwara",
    slug: "nada-sahib",
    distance: "33 km",
    type: "Spiritual",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1200&q=85",
    description:
      "A historic Sikh pilgrimage destination near the Ghaggar River, known for its peaceful atmosphere and distinctive architecture.",
  },
  {
    name: "Timber Trail Cable Car (Parwanoo)",
    slug: "timber-trail",
    distance: "40 km",
    type: "Adventure",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy an exciting cable car experience with panoramic views of the forested Shivalik landscape and surrounding valleys.",
  },
  {
    name: "Kasauli Hill Town",
    slug: "kasauli",
    distance: "52 km",
    type: "Hill Station",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    description:
      "A charming hill town surrounded by pine forests, colonial-era architecture, peaceful streets and beautiful mountain views.",
  },
  {
    name: "National Cactus Garden (Panchkula)",
    slug: "national-cactus-garden",
    distance: "33 km",
    type: "Nature",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=1200&q=85",
    description:
      "A unique botanical destination featuring cactus and succulent collections, landscaped areas and interesting photography spots.",
  },
];

const categories = [
  {
    icon: Mountain,
    title: "Hill Escapes",
    text: "Discover peaceful mountain destinations around Morni.",
  },
  {
    icon: Building2,
    title: "Cities",
    text: "Combine your hill trip with Chandigarh and Panchkula.",
  },
  {
    icon: Camera,
    title: "Sightseeing",
    text: "Explore gardens, lakes, temples and scenic attractions.",
  },
];

function NearbyPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=85"
          alt="Nearby destinations around Morni Hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl text-white">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm">
                <Navigation size={16} />
                Around Morni
              </span>

              <h1 className="font-serif text-5xl md:text-7xl leading-tight mt-6">
                Explore
                <span className="block text-emerald-300">
                  Nearby Places
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                Extend your journey beyond Morni Hills and discover beautiful
                destinations, cities, heritage sites and mountain escapes
                nearby.
              </p>

              {/* Same-page navigation */}
              <a
                href="#nearby"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
              >
                Explore Nearby
                <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
              Beyond Morni
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4">
              Make More Of Your Journey
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Morni Hills is surrounded by several interesting destinations.
              Add a few extra stops to your trip and experience more of Haryana,
              Chandigarh and the nearby Shivalik region.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <ScrollReveal key={category.title}>
                  <div className="flex gap-5 p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-600 leading-6">
                        {category.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== NEARBY PLACES ==================== */}
      <section
        id="nearby"
        className="bg-slate-50 py-20 md:py-28"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                Nearby Destinations
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-3">
                Places Worth Visiting
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600 leading-7">
                Choose a destination to discover more details, highlights and
                things to do.
              </p>
            </div>
          </ScrollReveal>

          {/* DESTINATION CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyPlaces.map((place) => (
              <ScrollReveal key={place.slug}>
                <Link
                  to={`/nearby/${place.slug}`}
                  className="group block h-full"
                  aria-label={`Explore ${place.name}`}
                >
                  <article className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    {/* IMAGE */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                      {/* TYPE */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-slate-700">
                        {place.type}
                      </div>

                      {/* DISTANCE */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-slate-900/85 text-white text-sm font-semibold">
                        {place.distance}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {place.name}
                        </h3>

                        <div className="shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight
                            size={18}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                        <MapPin
                          size={15}
                          className="text-emerald-600"
                        />
                        From Morni Hills
                      </div>

                      <p className="mt-4 text-slate-600 leading-7">
                        {place.description}
                      </p>

                      {/* DISCOVER */}
                      <div className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                        Discover
                        <ArrowRight size={17} />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ROAD TRIP ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
              alt="Mountain road trip"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            <div className="relative z-10 min-h-[480px] flex items-center px-7 md:px-14 py-16">
              <ScrollReveal>
                <div className="max-w-xl text-white">
                  <span className="inline-flex items-center gap-2 text-emerald-300 font-semibold uppercase tracking-[0.15em] text-sm">
                    <Navigation size={16} />
                    Plan A Road Trip
                  </span>

                  <h2 className="font-serif text-4xl md:text-5xl mt-4">
                    Turn One Destination Into An Adventure
                  </h2>

                  <p className="mt-5 text-white/80 text-lg leading-8">
                    Start your day in Morni Hills and continue towards nearby
                    cities, lakes, gardens or mountain destinations.
                  </p>

                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
                  >
                    Start Exploring
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <MapPin size={25} />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-6">
              Your Journey Doesn't Have To End Here
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-lg text-slate-600 leading-8">
              Discover Morni Hills first, then explore everything waiting
              beyond the hills.
            </p>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition"
            >
              View Experiences
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default NearbyPage;
