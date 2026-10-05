import React from "react";
import TikkarTaalFeature from "../components/TikkarTaalFeature";
import tikkarTaalImage from "../assets/images/Tikkar_taal_pages.png";

function TikkarTaal() {
  const handleSelectAttraction = (attraction) => {
    console.log("Selected attraction:", attraction);
  };

  const handleOpenPlanner = () => {
    console.log("Open planner");
  };

  return (
    <main className="min-h-screen bg-morni-light dark:bg-morni-dark">

      {/* =========================================
          HERO / PAGE HEADER
      ========================================= */}
      <section className="relative min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden">

        {/* Background Image */}
        <img
          src={tikkarTaalImage}
          alt="Tikkar Taal, Morni Hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

          {/* Small Label */}
          <p className="mb-5 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            Explore Morni Hills
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Tikkar{" "}
            <span className="italic font-normal">
              Taal
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto mt-7 text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            Two beautiful lakes surrounded by the peaceful forests and hills
            of Morni.
          </p>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80">
          <span className="text-[10px] uppercase tracking-[0.3em] mb-3">
            Explore
          </span>

          <div className="w-px h-10 bg-white/60" />
        </div>

      </section>


      {/* =========================================
          MAIN TIKKAR TAAL FEATURE
      ========================================= */}
      <TikkarTaalFeature
        onSelectAttraction={handleSelectAttraction}
        onOpenPlanner={handleOpenPlanner}
      />


      {/* =========================================
          EXTRA INFORMATION
      ========================================= */}
      <section className="py-20 md:py-28 bg-morni-light-surface dark:bg-morni-dark/95">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-morni-primary dark:text-morni-secondary">
              Discover Tikkar Taal
            </p>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-morni-dark dark:text-white">
              A Peaceful Escape
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base leading-7 text-morni-dark/70 dark:text-white/65">
              Surrounded by lush green hills, forests and calm waters,
              Tikkar Taal is one of the most beautiful places to experience
              the natural charm of Morni Hills.
            </p>

          </div>


          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="w-12 h-12 rounded-full bg-morni-primary/10 flex items-center justify-center mb-5">

                <span className="text-xl">
                  🌊
                </span>

              </div>

              <h3 className="font-serif text-xl font-bold mb-3 text-morni-dark dark:text-white">
                Peaceful Lakes
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Enjoy the calm atmosphere and beautiful surroundings of
                Tikkar Taal while taking in the peaceful lake views.
              </p>

            </div>


            {/* Card 2 */}
            <div className="group rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="w-12 h-12 rounded-full bg-morni-primary/10 flex items-center justify-center mb-5">

                <span className="text-xl">
                  ⛰️
                </span>

              </div>

              <h3 className="font-serif text-xl font-bold mb-3 text-morni-dark dark:text-white">
                Nature & Views
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Experience green hills, forests and scenic landscapes
                surrounding the beautiful Tikkar Taal lakes.
              </p>

            </div>


            {/* Card 3 */}
            <div className="group rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="w-12 h-12 rounded-full bg-morni-primary/10 flex items-center justify-center mb-5">

                <span className="text-xl">
                  🌿
                </span>

              </div>

              <h3 className="font-serif text-xl font-bold mb-3 text-morni-dark dark:text-white">
                Lake Activities
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Make your visit memorable by spending relaxing moments
                around the lake and exploring the surrounding nature.
              </p>

            </div>

          </div>

        </div>

      </section>



    </main>
  );
}

export default TikkarTaal;