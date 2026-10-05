import React, { useState } from "react";
import { MORNI_DATA } from "../data/morniData";
import ScrollReveal from "./ScrollReveal";
import { Compass, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { cssData } from "./cssData.js";
import { useNavigate } from "react-router-dom";

const CATEGORIES = [
  "All",
  "Nearby",
];

export default function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const handleAttractionClick = (place) => {
    console.log("Opening:", place.id);

    navigate(`/nearby/${place.id}`);
  };

  const filteredPlaces = MORNI_DATA.nearbyPlaces;

  return (
    <section
      id="explore"
      className={`py-${cssData.py} md:py-${cssData.md_py} relative bg-morni-light-surface dark:bg-morni-dark/95 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <ScrollReveal delay={0} distance={30}>
          <div className="text-center max-w-3xl mx-auto mb-14">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">

              <Compass className="w-3.5 h-3.5" />

              <span>DISCOVER DESTINATIONS</span>

            </div>

            <h2 className="heading-section mb-4">
              Explore{" "}
              <span className="italic text-morni-primary dark:text-morni-secondary">
                Nearby
              </span>
            </h2>

            <p className="subheading-section">
              Discover beautiful destinations, heritage sites, lakes,
              hill towns and experiences around Morni Hills.
            </p>

            {/* FILTER */}

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">

              {CATEGORIES.map((cat) => (

                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-morni-primary text-white shadow-md shadow-morni-primary/30 dark:bg-morni-accent dark:text-morni-dark"
                      : "bg-white/80 dark:bg-morni-dark-card/80 text-morni-dark/70 dark:text-morni-light/70 hover:bg-white dark:hover:bg-morni-dark-surface border border-morni-dark/10 dark:border-white/10"
                  }`}
                >
                  {cat}
                </button>

              ))}

            </div>

          </div>
        </ScrollReveal>


        {/* ================= GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPlaces.map((place, idx) => (

            <ScrollReveal
              key={place.id}
              delay={(idx % 3) * 120}
              distance={40}
              className="h-full"
            >

              <div
                onClick={() => handleAttractionClick(place)}
                className="
                  group
                  relative
                  rounded-3xl
                  overflow-hidden
                  glass-card
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  hover:shadow-morni-primary/15
                  cursor-pointer
                  flex
                  flex-col
                  h-full
                  border
                  border-morni-dark/10
                  dark:border-white/10
                "
              >

                {/* IMAGE */}

                <div className="relative h-64 sm:h-72 w-full overflow-hidden">

                  <img
                    src={place.image}
                    alt={place.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-center
                      group-hover:scale-110
                      transition-transform
                      duration-700
                      ease-out
                    "
                    loading="lazy"
                  />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Nearby Badge */}

                  <div className="absolute top-4 left-4 z-10">

                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/50 backdrop-blur-md text-morni-accent border border-white/20">
                      Nearby
                    </span>

                  </div>

                  {/* Distance */}

                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/20">

                    <MapPin className="w-3 h-3 text-morni-secondary" />

                    <span>{place.distance}</span>

                  </div>

                  {/* Hover */}

                  <div className="absolute inset-0 bg-morni-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                </div>


                {/* CONTENT */}

                <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-morni-dark-card transition-colors duration-300">

                  <div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-morni-dark dark:text-white group-hover:text-morni-primary dark:group-hover:text-morni-secondary transition-colors mb-2">
                      {place.name}
                    </h3>

                    <p className="text-xs font-medium text-morni-accent uppercase tracking-wider mb-3">
                      {place.distance}
                    </p>

                    <p className="text-sm text-morni-dark/70 dark:text-morni-light/70 line-clamp-3 leading-relaxed mb-4">
                      {place.description}
                    </p>

                  </div>


                  {/* FOOTER */}

                  <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between">

                    <div className="flex items-center gap-1.5 text-xs text-morni-dark/60 dark:text-morni-light/60">

                      <Clock className="w-3.5 h-3.5 text-morni-primary dark:text-morni-secondary" />

                      <span>
                        {place.driveTime}
                      </span>

                    </div>


                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-morni-primary dark:text-morni-secondary group-hover:text-morni-accent transition-colors">

                      <span>
                        View Details
                      </span>

                      <div className="w-7 h-7 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 flex items-center justify-center group-hover:bg-morni-accent group-hover:text-morni-dark transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">

                        <ArrowUpRight className="w-3.5 h-3.5" />

                      </div>

                    </div>

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