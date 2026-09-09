import React from "react";
import TikkarTaalFeature from "../components/TikkarTaalFeature";

function TikkarTaal() {
  const handleSelectAttraction = (attraction) => {
    console.log("Selected attraction:", attraction);
  };

  const handleOpenPlanner = () => {
    console.log("Open planner");
  };

  return (
    <main className="min-h-screen bg-morni-light dark:bg-morni-dark">

      {/* Page Header */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-morni-primary/10 via-transparent to-morni-secondary/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-morni-primary dark:text-morni-secondary">
            Explore Morni Hills
          </p>

          <h1 className="heading-section">
            Tikkar{" "}
            <span className="italic text-morni-primary dark:text-morni-secondary">
              Taal
            </span>
          </h1>

          <p className="subheading-section max-w-2xl mx-auto mt-5">
            Two beautiful lakes surrounded by the peaceful forests and hills
            of Morni.
          </p>
        </div>
      </section>

      {/* Main Tikkar Taal Feature */}
      <TikkarTaalFeature
        onSelectAttraction={handleSelectAttraction}
        onOpenPlanner={handleOpenPlanner}
      />

      {/* Extra Information */}
      <section className="py-20 md:py-28 bg-morni-light-surface dark:bg-morni-dark/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10">
              <h3 className="font-serif text-xl font-bold mb-3">
                Peaceful Lakes
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Enjoy the calm atmosphere and beautiful surroundings of
                Tikkar Taal.
              </p>
            </div>

            <div className="rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10">
              <h3 className="font-serif text-xl font-bold mb-3">
                Nature & Views
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Experience green hills, forests and scenic landscapes around
                the lakes.
              </p>
            </div>

            <div className="rounded-2xl p-7 bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10">
              <h3 className="font-serif text-xl font-bold mb-3">
                Lake Activities
              </h3>

              <p className="text-sm leading-6 text-morni-dark/70 dark:text-white/65">
                Make your visit memorable with relaxing activities around
                the lake.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default TikkarTaal;