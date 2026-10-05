import React from "react";
import Attractions from "../components/Attractions";
import TikkarTaalFeature from "../components/TikkarTaalFeature";

function Explore() {
  const handleSelectAttraction = (attraction) => {
    console.log("Selected attraction:", attraction);
  };

  return (
    <main className="min-h-screen bg-morni-light dark:bg-morni-dark mt-20">

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