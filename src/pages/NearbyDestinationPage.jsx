import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  MapPin,
  Navigation,
  CheckCircle2,
  Car,
  Sparkles,
} from "lucide-react";

import { MORNI_DATA } from "../data/morniData";

export default function NearbyDestinationPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find destination from MORNI_DATA
  const destination = MORNI_DATA.nearbyPlaces.find(
    (item) => item.id === slug
  );

  // ==============================
  // NOT FOUND
  // ==============================

  if (!destination) {
    return (
      <main className="min-h-screen bg-morni-light dark:bg-morni-dark flex items-center justify-center px-6">

        <div className="text-center max-w-lg">

          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-morni-primary/10 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-morni-primary" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-morni-dark dark:text-white mb-4">
            Destination Not Found
          </h1>

          <p className="text-morni-dark/60 dark:text-white/60 mb-8">
            The destination you're looking for could not be found.
          </p>

          <button
            onClick={() => navigate("/explore")}
            className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-morni-primary
              text-white
              font-semibold
              hover:bg-morni-primary/90
              transition-all
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Explore
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-morni-light-surface dark:bg-morni-dark text-morni-dark dark:text-white transition-colors duration-500">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[72vh] lg:min-h-[82vh] overflow-hidden">

        {/* Background Image */}

        <img
          src={destination.image}
          alt={destination.name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        {/* Top Overlay */}

        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Back Button */}

        <div className="absolute top-24 left-4 sm:left-8 lg:left-12 z-20">

          <button
            onClick={() => navigate("/explore")}
            className="
              group
              inline-flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-full
              bg-black/40
              backdrop-blur-xl
              border border-white/20
              text-white
              text-sm
              font-medium
              hover:bg-white
              hover:text-morni-dark
              transition-all
              duration-300
            "
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />

            Back to Explore
          </button>

        </div>

        {/* Hero Content */}

        <div className="absolute inset-x-0 bottom-0 z-10">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 lg:pb-16">

            {/* Nearby Badge */}

            <div className="mb-5">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-morni-accent
                  text-morni-dark
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                <Sparkles className="w-3.5 h-3.5" />

                Nearby Destination
              </span>

            </div>

            {/* Title */}

            <h1
              className="
                max-w-5xl
                font-serif
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-bold
                leading-[0.95]
                text-white
                mb-5
              "
            >
              {destination.name}
            </h1>

            {/* Distance / Time */}

            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-black/40
                  backdrop-blur-md
                  border border-white/20
                  text-white
                  text-sm
                "
              >
                <Navigation className="w-4 h-4" />

                {destination.distance}
              </span>

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-black/40
                  backdrop-blur-md
                  border border-white/20
                  text-white
                  text-sm
                "
              >
                <Clock className="w-4 h-4" />

                {destination.driveTime}
              </span>

            </div>

            {/* Description */}

            <p
              className="
                max-w-3xl
                text-base
                sm:text-lg
                lg:text-xl
                text-white/80
                leading-relaxed
              "
            >
              {destination.description}
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          QUICK INFO
      ========================================================= */}

      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto">

          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              rounded-3xl
              overflow-hidden
              bg-white
              dark:bg-morni-dark-card
              border
              border-morni-dark/10
              dark:border-white/10
              shadow-2xl
            "
          >

            <InfoItem
              icon={<MapPin />}
              label="Destination"
              value={destination.name}
            />

            <InfoItem
              icon={<Navigation />}
              label="Distance"
              value={destination.distance}
            />

            <InfoItem
              icon={<Clock />}
              label="Drive Time"
              value={destination.driveTime}
            />

            <InfoItem
              icon={<Car />}
              label="Travel"
              value="Road Trip"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12">

        <div className="max-w-6xl mx-auto">

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.5fr_0.8fr]
              gap-14
              lg:gap-20
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div>

              {/* OVERVIEW */}

              <div className="mb-16">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-[2px] bg-morni-primary dark:bg-morni-secondary" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-morni-primary dark:text-morni-secondary">
                    Overview
                  </span>

                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">

                  Discover{" "}

                  <span className="italic text-morni-primary dark:text-morni-secondary">
                    {destination.name}
                  </span>

                </h2>

                <p className="text-base sm:text-lg leading-8 text-morni-dark/70 dark:text-morni-light/70">
                  {destination.description}
                </p>

              </div>


              {/* HIGHLIGHTS */}

              {destination.highlights?.length > 0 && (

                <div>

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-10 h-[2px] bg-morni-primary dark:bg-morni-secondary" />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-morni-primary dark:text-morni-secondary">
                      Highlights
                    </span>

                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {destination.highlights.map(
                      (highlight, index) => (

                        <div
                          key={index}
                          className="
                            group
                            flex
                            items-center
                            gap-4
                            p-5
                            rounded-2xl
                            bg-white
                            dark:bg-morni-dark-card
                            border
                            border-morni-dark/10
                            dark:border-white/10
                            hover:-translate-y-1
                            hover:shadow-xl
                            hover:border-morni-primary/30
                            transition-all
                            duration-300
                          "
                        >

                          <div
                            className="
                              flex
                              flex-shrink-0
                              items-center
                              justify-center
                              w-10
                              h-10
                              rounded-full
                              bg-morni-primary/10
                              dark:bg-morni-secondary/10
                              text-morni-primary
                              dark:text-morni-secondary
                              group-hover:bg-morni-primary
                              group-hover:text-white
                              transition-all
                            "
                          >

                            <CheckCircle2 className="w-5 h-5" />

                          </div>

                          <span className="text-sm sm:text-base font-semibold">
                            {highlight}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

            </div>


            {/* =====================================================
                RIGHT SIDEBAR
            ===================================================== */}

            <aside>

              <div
                className="
                  sticky
                  top-28
                  rounded-3xl
                  overflow-hidden
                  bg-morni-dark
                  dark:bg-morni-dark-card
                  border
                  border-white/10
                  shadow-2xl
                "
              >

                {/* Header */}

                <div className="p-7 border-b border-white/10">

                  <span className="text-xs uppercase tracking-[0.2em] text-morni-accent font-bold">
                    Plan Your Visit
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-white mt-3">
                    Make the most of your trip
                  </h3>

                </div>


                {/* Details */}

                <div className="p-7 space-y-6">

                  <DetailRow
                    icon={<MapPin />}
                    title="Destination"
                    value={destination.name}
                  />

                  <DetailRow
                    icon={<Navigation />}
                    title="Distance from Morni"
                    value={destination.distance}
                  />

                  <DetailRow
                    icon={<Clock />}
                    title="Approx. Drive"
                    value={destination.driveTime}
                  />

                  <DetailRow
                    icon={<Car />}
                    title="Recommended Travel"
                    value="Private car or cab"
                  />

                </div>


                {/* CTA */}

                <div className="p-7 pt-0">

                  <button
                    onClick={() => navigate("/contact")}
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-4
                      rounded-2xl
                      bg-morni-accent
                      text-morni-dark
                      font-bold
                      uppercase
                      tracking-wider
                      text-xs
                      hover:bg-white
                      transition-all
                      duration-300
                      group
                    "
                  >

                    Plan Your Visit

                    <ArrowUpRight
                      className="
                        w-4
                        h-4
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-transform
                      "
                    />

                  </button>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="px-5 sm:px-8 lg:px-12 pb-20 lg:pb-28">

        <div
          className="
            max-w-6xl
            mx-auto
            relative
            overflow-hidden
            rounded-[2rem]
            bg-morni-primary
            dark:bg-morni-dark-card
            border
            border-white/10
            p-8
            sm:p-12
            lg:p-16
          "
        >

          {/* Decorative Circle */}

          <div
            className="
              absolute
              -right-20
              -top-20
              w-72
              h-72
              rounded-full
              bg-white/10
              blur-2xl
            "
          />

          <div className="relative z-10 max-w-2xl">

            <span className="text-xs uppercase tracking-[0.2em] font-bold text-morni-accent">
              Explore More
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5">
              Discover more places around Morni
            </h2>

            <p className="text-white/70 leading-relaxed mb-8">
              Explore more destinations, forests, lakes, viewpoints and
              heritage sites around the beautiful Morni Hills region.
            </p>

            <button
              onClick={() => navigate("/explore")}
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3.5
                rounded-full
                bg-white
                text-morni-dark
                font-bold
                text-sm
                hover:bg-morni-accent
                transition-all
                duration-300
                group
              "
            >

              Explore All Destinations

              <ArrowUpRight
                className="
                  w-4
                  h-4
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform
                "
              />

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ===============================================================
   INFO ITEM
================================================================= */

function InfoItem({ icon, label, value }) {

  return (
    <div
      className="
        p-5
        sm:p-6
        border-r
        border-b
        last:border-r-0
        border-morni-dark/10
        dark:border-white/10
        lg:border-b-0
        hover:bg-morni-primary/5
        dark:hover:bg-white/5
        transition-colors
      "
    >

      <div className="flex items-start gap-3">

        <div
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-xl
            bg-morni-primary/10
            dark:bg-morni-secondary/10
            text-morni-primary
            dark:text-morni-secondary
            flex-shrink-0
          "
        >

          {React.cloneElement(icon, {
            className: "w-4 h-4",
          })}

        </div>

        <div className="min-w-0">

          <p
            className="
              text-[10px]
              uppercase
              tracking-widest
              font-bold
              text-morni-dark/40
              dark:text-morni-light/40
              mb-1
            "
          >
            {label}
          </p>

          <p className="text-xs sm:text-sm font-semibold leading-5">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ===============================================================
   DETAIL ROW
================================================================= */

function DetailRow({ icon, title, value }) {

  return (
    <div className="flex gap-4">

      <div
        className="
          flex
          items-center
          justify-center
          w-10
          h-10
          rounded-xl
          bg-white/10
          text-morni-accent
          flex-shrink-0
        "
      >

        {React.cloneElement(icon, {
          className: "w-4 h-4",
        })}

      </div>

      <div>

        <p
          className="
            text-[10px]
            uppercase
            tracking-widest
            font-bold
            text-white/40
            mb-1
          "
        >
          {title}
        </p>

        <p className="text-sm text-white/80 leading-5">
          {value}
        </p>

      </div>

    </div>
  );
}