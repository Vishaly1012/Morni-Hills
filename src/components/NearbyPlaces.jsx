import React from "react";
import { MORNI_DATA } from "../data/morniData";
import {
  Navigation,
  MapPin,
  Clock,
  ArrowUpRight,
  Compass,
} from "lucide-react";

export default function NearbyPlaces({ onSelectNearby }) {
  const { nearbyPlaces } = MORNI_DATA;

  // console.log("Nearby Places:", nearbyPlaces);

  return (
    <section
      id="nearby"
      className="
        relative
        py-20
        md:py-28
        bg-morni-light-surface
        dark:bg-morni-dark/95
        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-morni-primary/10
              dark:bg-morni-secondary/20
              text-morni-primary
              dark:text-morni-secondary
              border
              border-morni-primary/20
              text-xs
              font-semibold
              tracking-wider
              uppercase
              mb-4
            "
          >
            <Compass className="w-3.5 h-3.5" />

            <span>EXTENDED ITINERARY</span>
          </div>

          <h2 className="heading-section mb-4">
            Beyond{" "}
            <span className="italic text-morni-primary dark:text-morni-secondary">
              Morni
            </span>
          </h2>

          <p className="subheading-section">
            Explore iconic heritage gardens, serene lakes, sacred
            riverbanks, and cable cars within a short, scenic drive.
          </p>
        </div>

        {/* Grid */}
        {nearbyPlaces && nearbyPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {nearbyPlaces.map((place) => (
              <div
                key={place.id}
                onClick={() =>
                  onSelectNearby && onSelectNearby(place)
                }
                className="
                  group
                  rounded-3xl
                  overflow-hidden
                  glass-card
                  border
                  border-morni-dark/10
                  dark:border-white/10
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  cursor-pointer
                "
              >

                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">

                  <img
                    src={place.image}
                    alt={place.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                      ease-out
                    "
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* Distance */}
                  <div
                    className="
                      absolute
                      top-4
                      left-4
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-1
                      rounded-full
                      bg-black/60
                      backdrop-blur-md
                      text-white
                      border
                      border-white/20
                      text-xs
                      font-semibold
                    "
                  >
                    <Navigation className="w-3 h-3 text-morni-accent" />

                    <span>{place.distance}</span>
                  </div>

                  {/* Drive Time */}
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      flex
                      items-center
                      gap-1
                      px-2.5
                      py-1
                      rounded-full
                      bg-black/60
                      backdrop-blur-md
                      text-[11px]
                      font-medium
                      text-white/90
                      border
                      border-white/20
                    "
                  >
                    <Clock className="w-3 h-3 text-morni-secondary" />

                    <span>{place.driveTime}</span>
                  </div>

                  {/* Name */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold drop-shadow-md">
                      {place.name}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div
                  className="
                    p-6
                    flex-1
                    flex
                    flex-col
                    justify-between
                    bg-white
                    dark:bg-morni-dark-card
                    transition-colors
                    duration-300
                  "
                >

                  <div>

                    <p
                      className="
                        text-sm
                        text-morni-dark/70
                        dark:text-morni-light/70
                        leading-relaxed
                        mb-4
                      "
                    >
                      {place.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5 mb-4">

                      {place.highlights?.map((hl, idx) => (
                        <span
                          key={idx}
                          className="
                            px-2.5
                            py-1
                            rounded-md
                            text-[11px]
                            font-medium
                            bg-morni-dark/5
                            dark:bg-white/5
                            text-morni-dark/80
                            dark:text-morni-light/80
                          "
                        >
                          {hl}
                        </span>
                      ))}

                    </div>
                  </div>

                  {/* Footer */}
                  <div
                    className="
                      pt-4
                      border-t
                      border-morni-dark/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-between
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-morni-primary
                      dark:text-morni-secondary
                      group-hover:text-morni-accent
                      transition-colors
                    "
                  >
                    <span>View Details</span>

                    <div
                      className="
                        w-7
                        h-7
                        rounded-full
                        bg-morni-primary/10
                        dark:bg-morni-secondary/20
                        flex
                        items-center
                        justify-center
                        group-hover:bg-morni-accent
                        group-hover:text-morni-dark
                        transition-all
                        duration-300
                      "
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-center py-12">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-morni-primary" />

            <p className="text-morni-dark dark:text-morni-light">
              Nearby destinations are currently unavailable.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
