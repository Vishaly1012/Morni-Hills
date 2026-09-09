import React from "react";
import Attractions from "../components/Attractions";
import TikkarTaalFeature from "../components/TikkarTaalFeature";

function Explore() {
  const handleSelectAttraction = (attraction) => {
    console.log("Selected attraction:", attraction);
  };

  return (
    <main className="min-h-screen bg-morni-light dark:bg-morni-dark">
      
      {/* Page Header */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-morni-primary/10 via-transparent to-morni-secondary/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-morni-primary dark:text-morni-secondary">
            Discover Morni Hills
          </p>

          <h1 className="heading-section">
            Explore{" "}
            <span className="italic text-morni-primary dark:text-morni-secondary">
              Morni
            </span>
          </h1>

          <p className="subheading-section max-w-2xl mx-auto mt-5">
            Discover lakes, forests, heritage sites, viewpoints and
            unforgettable experiences hidden in the hills of Morni.
          </p>
        </div>
      </section>

      {/* Attractions */}
      <Attractions
        onSelectAttraction={handleSelectAttraction}
      />

      {/* Tikkar Taal */}
      <TikkarTaalFeature
        onSelectAttraction={handleSelectAttraction}
      />

    </main>
  );
}

export default Explore;