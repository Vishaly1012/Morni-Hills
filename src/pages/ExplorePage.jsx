import React from "react";
import Attractions from "../components/Attractions";
import TikkarTaalFeature from "../components/TikkarTaalFeature";
import Footer from "../components/Footer";

function Explore() {
  const handleSelectAttraction = (attraction) => {
    console.log("Selected attraction:", attraction);
  };

  return (
    <main className="min-h-screen bg-morni-light dark:bg-morni-dark mt-20 ">
      
      {/* Attractions */}
      <Attractions
        onSelectAttraction={handleSelectAttraction}
      />

      {/* Tikkar Taal */}
      <TikkarTaalFeature
        onSelectAttraction={handleSelectAttraction}
      />
  {/* <Footer /> */}
    </main>
  );
}

export default Explore;