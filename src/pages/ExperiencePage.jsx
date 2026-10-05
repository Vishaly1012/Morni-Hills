import React from "react";
import {
  Mountain,
  Camera,
  Waves,
  Compass,
  Trees,
  Sunrise,
  MapPin,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

const experiences = [
  {
    icon: Mountain,
    title: "Hiking & Trekking",
    description:
      "Explore peaceful forest trails, rolling hills and scenic routes across the Morni landscape.",
    tag: "Adventure",
  },
  {
    icon: Waves,
    title: "Tikkar Taal",
    description:
      "Spend a relaxing day around the beautiful twin lakes surrounded by the Shivalik hills.",
    tag: "Nature",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capture panoramic viewpoints, forests, lakes, sunsets and the natural beauty of Morni Hills.",
    tag: "Creative",
  },
  {
    icon: Trees,
    title: "Forest Exploration",
    description:
      "Discover peaceful forest paths and experience the greenery and wildlife of the Shivalik region.",
    tag: "Wildlife",
  },
  {
    icon: Sunrise,
    title: "Sunrise & Sunset",
    description:
      "Watch the sky transform over the hills from some of Morni's most scenic viewpoints.",
    tag: "Scenic",
  },
  {
    icon: Compass,
    title: "Village Experience",
    description:
      "Experience the peaceful surroundings, traditional lifestyle and local charm of the hill villages.",
    tag: "Culture",
  },
];

function ExperiencePage() {
  return (
    <main className="bg-white text-slate-800 dark:bg-morni-dark dark:text-white transition-colors duration-300">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Morni Hills Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl text-white">
              {/* Badge */}

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm mb-6">
                <Compass size={16} />
                Discover Morni
              </span>

              {/* Heading */}

              <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                Experiences
                <span className="block text-emerald-300">
                  Worth Remembering
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                From peaceful lakes and forest trails to breathtaking
                viewpoints, discover experiences that make Morni Hills special.
              </p>

              {/* Button */}

              <a
                href="#experiences"
                className="inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-100 transition"
              >
                Explore Experiences
                <ArrowRight size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-20 md:py-28 bg-white dark:bg-morni-dark transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-[0.2em] text-sm">
              Experience Morni
            </span>

            <h2 className="font-serif text-4xl md:text-5xl mt-4 text-slate-900 dark:text-white transition-colors duration-300">
              More Than Just a Destination
            </h2>

            <p className="mt-6 text-slate-600 dark:text-white/65 text-lg leading-8 max-w-3xl mx-auto transition-colors duration-300">
              Morni Hills is a place where adventure, nature and peaceful
              moments come together. Whether you want to explore the hills,
              relax beside a lake or simply enjoy the view, there is something
              for every kind of traveller.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CARDS
      ===================================================== */}

      <section
        id="experiences"
        className="pb-24 md:pb-32 bg-slate-50 dark:bg-white/[0.03] transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
              <div>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-[0.2em] text-sm">
                  Things To Do
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mt-3">
                  Choose Your Experience
                </h2>
              </div>

              <p className="text-slate-500 dark:text-white/50 max-w-md">
                Take your time, explore at your own pace and create your own
                Morni Hills story.
              </p>
            </div>
          </ScrollReveal>

          {/* EXPERIENCE GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <ScrollReveal key={experience.title} className="h-full">
                  <article
                    className=" group h-full flex flex-col bg-white dark:bg-white/[0.05] rounded-3xl p-7 border border-slate-200 dark:border-white/10 hover:-translate-y-2
                         hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300"
                  >
                    {/* Top Row */}

                    <div className="flex items-center justify-between">
                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          bg-emerald-50
                          dark:bg-emerald-500/10
                          flex
                          items-center
                          justify-center
                          text-emerald-600
                          dark:text-emerald-400
                          group-hover:bg-emerald-600
                          dark:group-hover:bg-emerald-500
                          group-hover:text-white
                          transition
                        "
                      >
                        <Icon size={25} />
                      </div>

                      {/* Tag */}

                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-white/40">
                        {experience.tag}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="text-2xl font-semibold mt-7 text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-slate-600 dark:text-white/60 leading-7">
                      {experience.description}
                    </p>

                    {/* Discover */}

                    <div className="mt-7 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                      {/* Discover */}
                      {/* <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition"
                      /> */}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE SECTION
      ===================================================== */}

      <section className="py-24 md:py-32 bg-white dark:bg-morni-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* IMAGE */}

            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
                  alt="Morni Hills landscape"
                  className="w-full h-[500px] object-cover rounded-[2rem]"
                />

                {/* Location Card */}

                <div
                  className="
                    absolute
                    -bottom-7
                    -right-5
                    md:right-8
                    bg-white
                    dark:bg-slate-900/90
                    backdrop-blur-md
                    rounded-2xl
                    shadow-xl
                    dark:shadow-black/40
                    p-5
                    border
                    border-slate-100
                    dark:border-white/10
                    transition-colors
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      className="text-emerald-600 dark:text-emerald-400"
                      size={22}
                    />

                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Morni Hills
                      </p>

                      <p className="text-sm text-slate-500 dark:text-white/50">
                        Panchkula, Haryana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CONTENT */}

            <ScrollReveal>
              <div>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-[0.2em] text-sm">
                  Slow Down
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mt-4 leading-tight">
                  Find Your Own
                  <span className="block text-emerald-600 dark:text-emerald-400">
                    Way Into Nature
                  </span>
                </h2>

                <p className="mt-6 text-slate-600 dark:text-white/65 text-lg leading-8">
                  Leave the busy city behind and spend a day surrounded by
                  forests, hills and peaceful landscapes. Morni gives you the
                  freedom to explore or simply slow down.
                </p>

                {/* STATS */}

                <div className="grid grid-cols-2 gap-5 mt-8">
                  {/* Elevation */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      bg-slate-50
                      dark:bg-white/[0.05]
                      border
                      border-slate-100
                      dark:border-white/10
                      transition-colors
                      duration-300
                    "
                  >
                    <p className="text-3xl font-serif text-slate-900 dark:text-white">
                      1,220m
                    </p>

                    <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                      Hill Elevation
                    </p>
                  </div>

                  {/* Distance */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      bg-slate-50
                      dark:bg-white/[0.05]
                      border
                      border-slate-100
                      dark:border-white/10
                      transition-colors
                      duration-300
                    "
                  >
                    <p className="text-3xl font-serif text-slate-900 dark:text-white">
                      45km
                    </p>

                    <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                      From Chandigarh
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-24 bg-white dark:bg-morni-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative">
          {/* Background Image */}

          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
            alt="Morni Hills sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/50" />

          {/* CTA Content */}

          <div className="relative z-10 py-20 px-6 text-center text-white">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl">
                Your Morni Story Starts Here
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-white/80 text-lg">
                Explore the hills, discover hidden places and experience nature
                at your own pace.
              </p>

              <a
                href="/explore"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-8
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  text-slate-900
                  font-semibold
                  hover:bg-emerald-50
                  dark:hover:bg-emerald-100
                  transition
                "
              >
                Explore Morni Hills
                <ArrowRight size={18} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
}

export default ExperiencePage;
