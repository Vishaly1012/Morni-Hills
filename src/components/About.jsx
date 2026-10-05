import React from "react";
import { MORNI_DATA } from "../data/morniData";
import {
  CheckCircle2,
  Trees,
  Mountain,
  MapPin,
  Feather,
  Sparkles,
  Compass,
  Heart,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutFull() {
  const { about } = MORNI_DATA;

  return (
    <>
      {/* =====================================================
          MAIN ABOUT SECTION
      ===================================================== */}

      <section
        id="about"
        className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 relative bg-morni-light dark:bg-morni-dark transition-colors duration-500 overflow-hidden"
      >
        {/* Background Ambient Effects */}

        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-morni-primary/10 dark:bg-morni-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-morni-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-morni-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* =====================================================
              HERO / MAIN ABOUT
          ===================================================== */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

            {/* LEFT - VIDEO */}
            <div className="lg:col-span-6 relative">

              <ScrollReveal delay={0} distance={45}>

                <div className="relative mx-auto max-w-md lg:max-w-none">

                  {/* Decorative Frame */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-morni-primary/20 via-morni-accent/20 to-transparent blur-lg opacity-70" />

                  {/* Video */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 dark:border-white/10 group">

                    <video
                      src="/assets/Morni_02.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[480px] sm:h-[560px] lg:h-[650px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                    {/* Video Text */}
                    <div className="absolute bottom-7 left-7 right-7 text-white">

                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-morni-accent" />

                        <span className="text-xs uppercase tracking-widest">
                          Panchkula, Haryana
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                        Discover Morni Hills
                      </h3>

                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div
                    className="
                      absolute -top-4 right-3
                      sm:-top-5 sm:right-4
                      lg:-right-4 xl:-right-5
                      z-20
                      bg-white dark:bg-morni-dark-card
                      px-4 py-3 sm:px-5 sm:py-4
                      rounded-2xl shadow-xl
                      border border-morni-primary/20 dark:border-morni-secondary/20
                      flex items-center gap-3
                      animate-float-slow
                    "
                  >

                    <div
                      className="
                        w-10 h-10 shrink-0 rounded-xl
                        bg-morni-primary/15 dark:bg-morni-secondary/20
                        text-morni-primary dark:text-morni-secondary
                        flex items-center justify-center
                      "
                    >
                      <Trees className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="text-base sm:text-lg font-serif font-bold text-morni-dark dark:text-white whitespace-nowrap">
                        100% Pure
                      </div>

                      <div className="text-xs text-morni-dark/60 dark:text-morni-light/60 whitespace-nowrap">
                        Mountain Air
                      </div>
                    </div>

                  </div>

                </div>

              </ScrollReveal>

            </div>

            {/* RIGHT - CONTENT */}
            <div className="w-full min-w-0 lg:col-span-6">

              <ScrollReveal delay={100} distance={25}>

                <div className="w-full max-w-none">

                  {/* Tag */}
                  <div
                    className="
                      inline-flex items-center gap-2
                      px-3 py-1.5
                      rounded-full
                      bg-morni-primary/10 dark:bg-morni-secondary/20
                      text-morni-primary dark:text-morni-secondary
                      border border-morni-primary/20
                      text-[11px] sm:text-xs
                      font-semibold tracking-wider uppercase
                      mb-4 lg:mb-5
                    "
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />

                    <span>ABOUT MORNI HILLS</span>
                  </div>

                  {/* Heading */}
                  <h1
                    className="
                      heading-section
                      !text-4xl sm:!text-5xl xl:!text-6xl
                      !leading-[1.05]
                      !tracking-tight
                      mb-5 lg:mb-6
                    "
                  >
                    Where the Hills
                    <br />

                    <span className="italic text-morni-primary dark:text-morni-secondary">
                      Begin to Breathe
                    </span>
                  </h1>

                  {/* Main Description */}
                  <p
                    className="
                      text-[15px] sm:text-base lg:text-lg
                      text-morni-dark/80 dark:text-morni-light/80
                      leading-[1.7]
                      mb-4 lg:mb-5
                    "
                  >
                    {about.description}
                  </p>

                  {/* Existing Data */}
                  {about.paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="
                        text-sm sm:text-[15px] lg:text-base
                        text-morni-dark/70 dark:text-morni-light/70
                        leading-[1.7]
                        mb-4
                      "
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Additional Content */}
                  <p
                    className="
                      text-sm sm:text-[15px] lg:text-base
                      text-morni-dark/70 dark:text-morni-light/70
                      leading-[1.7]
                      mb-5
                    "
                  >
                    Away from the fast pace of city life, Morni offers
                    travellers the opportunity to slow down and enjoy the
                    simple beauty of nature. A drive through the hills, a
                    peaceful morning beside the lake or an evening overlooking
                    the valleys can turn an ordinary weekend into a memorable
                    experience.
                  </p>

                </div>

              </ScrollReveal>

              {/* HIGHLIGHTS */}
              <ScrollReveal delay={150} distance={20}>

                <div
                  className="
                    grid grid-cols-1 sm:grid-cols-2
                    gap-x-5 lg:gap-x-6
                    gap-y-3
                    mb-7 lg:mb-8
                  "
                >
                  {about.highlights?.map((item, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-start gap-2.5
                        text-[13px] sm:text-sm
                        font-medium
                        text-morni-dark/90 dark:text-morni-light/90
                        leading-relaxed
                        min-w-0
                      "
                    >
                      <CheckCircle2
                        className="
                          w-4 h-4 mt-0.5
                          text-morni-primary dark:text-morni-secondary
                          shrink-0
                        "
                      />

                      <span className="min-w-0">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </ScrollReveal>

              {/* STATISTICS */}
              <ScrollReveal delay={200} distance={20}>

                <div
                  className="
                    grid grid-cols-2 sm:grid-cols-4
                    gap-3
                    pt-5 lg:pt-6
                    border-t border-morni-dark/10 dark:border-white/10
                  "
                >
                  {about.stats?.map((stat, idx) => (
                    <div
                      key={idx}
                      className="
                        min-w-0 p-3 sm:p-3.5
                        rounded-xl lg:rounded-2xl
                        bg-white/70 dark:bg-morni-dark-card/60
                        backdrop-blur-sm
                        border border-morni-dark/5 dark:border-white/5
                        text-center sm:text-left
                        transition-transform
                        hover:-translate-y-1
                        duration-300
                      "
                    >
                      <div
                        className="
                          font-serif
                          text-xl sm:text-2xl
                          font-bold
                          text-morni-primary dark:text-morni-accent
                          leading-tight
                        "
                      >
                        {stat.value}
                      </div>

                      <div
                        className="
                          text-xs
                          font-semibold
                          text-morni-dark/90 dark:text-white
                          mt-1
                          leading-snug
                        "
                      >
                        {stat.label}
                      </div>

                      <div
                        className="
                          text-[10px]
                          text-morni-dark/60 dark:text-morni-light/60
                          mt-1
                          leading-snug
                        "
                      >
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>

              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          WHY VISIT MORNI HILLS
      ===================================================== */}

      <section className="mt-28 md:mt-36 bg-morni-light dark:bg-morni-dark transition-colors duration-500">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal delay={100} distance={35}>

            <div className="max-w-3xl mx-auto text-center">

              <div
                className="
                  inline-flex items-center gap-2
                  px-3.5 py-1.5
                  rounded-full
                  bg-morni-primary/10 dark:bg-morni-secondary/20
                  text-morni-primary dark:text-morni-secondary
                  border border-morni-primary/20
                  text-xs font-semibold tracking-wider uppercase
                  mb-5
                "
              >
                <Mountain className="w-3.5 h-3.5" />

                <span>WHY VISIT MORNI</span>
              </div>

              <h2 className="heading-section mb-5">
                A Place to
                <span className="italic text-morni-primary dark:text-morni-secondary">
                  {" "}Slow Down
                </span>
              </h2>

              <p className="text-base sm:text-lg text-morni-dark/70 dark:text-morni-light/70 leading-relaxed">
                Morni Hills brings together peaceful landscapes, scenic
                viewpoints, local experiences and outdoor adventures. Whether
                you are travelling with friends, family or simply looking for
                some quiet time, the hills offer a refreshing change from
                everyday surroundings.
              </p>

            </div>

          </ScrollReveal>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

            {/* Nature */}
            <ScrollReveal delay={100} distance={30}>
              <div className="h-full p-7 rounded-3xl bg-white/70 dark:bg-morni-dark-card/60 backdrop-blur-sm border border-morni-dark/5 dark:border-white/10 hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center mb-5">
                  <Trees className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white mb-3">
                  Surrounded by Nature
                </h3>

                <p className="text-sm leading-relaxed text-morni-dark/65 dark:text-morni-light/65">
                  Explore green forests, peaceful trails, mountain landscapes
                  and fresh surroundings that provide a natural escape from
                  the busy city environment.
                </p>

              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={200} distance={30}>
              <div className="h-full p-7 rounded-3xl bg-white/70 dark:bg-morni-dark-card/60 backdrop-blur-sm border border-morni-dark/5 dark:border-white/10 hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white mb-3">
                  Close to Chandigarh
                </h3>

                <p className="text-sm leading-relaxed text-morni-dark/65 dark:text-morni-light/65">
                  Located in Panchkula district, Morni Hills provides an
                  accessible mountain escape for travellers from Chandigarh,
                  Panchkula and nearby regions.
                </p>

              </div>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal delay={300} distance={30}>
              <div className="h-full p-7 rounded-3xl bg-white/70 dark:bg-morni-dark-card/60 backdrop-blur-sm border border-morni-dark/5 dark:border-white/10 hover:-translate-y-2 transition-all duration-300">

                <div className="w-12 h-12 rounded-2xl bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white mb-3">
                  Experiences to Remember
                </h3>

                <p className="text-sm leading-relaxed text-morni-dark/65 dark:text-morni-light/65">
                  Discover lakes, viewpoints, temples, forests, adventure
                  activities, local food and peaceful stays that make every
                  visit different.
                </p>

              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* =====================================================
          PLACES & EXPERIENCES
      ===================================================== */}

      <section className="mt-28 md:mt-36 bg-morni-light dark:bg-morni-dark transition-colors duration-500">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal delay={100} distance={35}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <div>

                <div
                  className="
                    inline-flex items-center gap-2
                    px-3.5 py-1.5
                    rounded-full
                    bg-morni-primary/10 dark:bg-morni-secondary/20
                    text-morni-primary dark:text-morni-secondary
                    border border-morni-primary/20
                    text-xs font-semibold tracking-wider uppercase
                    mb-5
                  "
                >
                  <Feather className="w-3.5 h-3.5" />

                  <span>EXPLORE & EXPERIENCE</span>
                </div>

                <h2 className="heading-section mb-6">
                  Every Turn Has
                  <br />

                  <span className="italic text-morni-primary dark:text-morni-secondary">
                    A Story to Tell
                  </span>
                </h2>

                <p className="text-base text-morni-dark/70 dark:text-morni-light/70 leading-relaxed mb-5">
                  From the historic Morni Fort to the peaceful waters of
                  Tikkar Taal, the region offers different experiences for
                  different kinds of travellers.
                </p>

                <p className="text-base text-morni-dark/70 dark:text-morni-light/70 leading-relaxed mb-6">
                  Nature lovers can explore forests and viewpoints, adventure
                  seekers can enjoy outdoor activities, while travellers
                  looking for peace can simply enjoy the scenery and relaxed
                  mountain atmosphere.
                </p>

                <div className="space-y-3">

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-morni-primary dark:text-morni-secondary" />

                    <span className="text-sm text-morni-dark/80 dark:text-morni-light/80">
                      Scenic mountain roads and viewpoints
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-morni-primary dark:text-morni-secondary" />

                    <span className="text-sm text-morni-dark/80 dark:text-morni-light/80">
                      Tikkar Taal and peaceful natural surroundings
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-morni-primary dark:text-morni-secondary" />

                    <span className="text-sm text-morni-dark/80 dark:text-morni-light/80">
                      Morni Fort and local heritage
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-morni-primary dark:text-morni-secondary" />

                    <span className="text-sm text-morni-dark/80 dark:text-morni-light/80">
                      Outdoor adventures and nature experiences
                    </span>
                  </div>

                </div>

              </div>

              {/* Experience Card */}
              <div className="grid grid-cols-2 gap-4">

                <div className="p-6 min-h-[180px] rounded-3xl bg-morni-primary text-white flex flex-col justify-end">

                  <Mountain className="w-8 h-8 mb-auto text-morni-accent" />

                  <h3 className="font-serif text-xl font-bold">
                    Mountains
                  </h3>

                  <p className="text-xs text-white/70 mt-1">
                    Peaceful Shivalik landscapes
                  </p>

                </div>

                <div className="p-6 min-h-[180px] rounded-3xl bg-white dark:bg-morni-dark-card border border-morni-dark/5 dark:border-white/10 flex flex-col justify-end">

                  <Trees className="w-8 h-8 mb-auto text-morni-primary dark:text-morni-secondary" />

                  <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white">
                    Forests
                  </h3>

                  <p className="text-xs text-morni-dark/60 dark:text-morni-light/60 mt-1">
                    Green trails and natural beauty
                  </p>

                </div>

                <div className="p-6 min-h-[180px] rounded-3xl bg-white dark:bg-morni-dark-card border border-morni-dark/5 dark:border-white/10 flex flex-col justify-end">

                  <MapPin className="w-8 h-8 mb-auto text-morni-primary dark:text-morni-secondary" />

                  <h3 className="font-serif text-xl font-bold text-morni-dark dark:text-white">
                    Places
                  </h3>

                  <p className="text-xs text-morni-dark/60 dark:text-morni-light/60 mt-1">
                    Forts, lakes and viewpoints
                  </p>

                </div>

                <div className="p-6 min-h-[180px] rounded-3xl bg-morni-accent text-morni-dark flex flex-col justify-end">

                  <Heart className="w-8 h-8 mb-auto" />

                  <h3 className="font-serif text-xl font-bold">
                    Memories
                  </h3>

                  <p className="text-xs text-morni-dark/70 mt-1">
                    Moments worth remembering
                  </p>

                </div>

              </div>

            </div>

          </ScrollReveal>

        </div>
      </section>

      {/* =====================================================
          FINAL STORY
      ===================================================== */}

      <section className="bg-morni-light dark:bg-morni-dark transition-colors duration-500 py-28 md:py-36">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal delay={100} distance={35}>

            <div className="relative overflow-hidden rounded-3xl bg-morni-primary dark:bg-morni-dark-card border border-morni-primary/20 dark:border-white/10">

              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-morni-secondary/10 blur-3xl" />

              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-morni-accent/10 blur-3xl" />

              <div className="relative z-10 px-6 py-14 sm:px-10 md:px-16 md:py-20 text-center">

                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6">

                  <Mountain className="w-7 h-7 text-morni-accent" />

                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5">
                  Come for the Hills.
                  <br />
                  Stay for the Feeling.
                </h2>

                <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/70 leading-relaxed">
                  Morni Hills is more than a destination. It is a place to
                  pause, breathe, explore and reconnect with nature. Take the
                  scenic road, discover peaceful corners, experience the
                  mountains and create memories that stay with you long after
                  the journey ends.
                </p>

              </div>

            </div>

          </ScrollReveal>

        </div>
      </section>
    </>
  );
}
