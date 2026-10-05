import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Explore from "./pages/ExplorePage";
import ExperiencePage from "./pages/ExperiencePage";
import TikkarTaal from "./pages/TikkarTaalPage";
import StayPage from "./pages/StayPage";
import EatPage from "./pages/EatPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import NearbyDestinationPage from "./pages/NearbyDestinationPage";
import GalleryPage from "./pages/GalleryPage";
import AttractionDetailsPage from "./pages/AttractionDetailsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("morni-theme");

    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;

    return true;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("morni-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("morni-theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div
        className={`
          min-h-screen
          transition-colors
          duration-300
          ${
            darkMode
              ? "bg-morni-dark text-white"
              : "bg-morni-light text-gray-900"
          }
        `}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/stay" element={<StayPage />} />
          
          {/* Restaurants */}
          <Route path="/eat" element={<EatPage />} />
          <Route path="/eat/:slug" element={<RestaurantDetailsPage />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Tikkar Taal */}
          <Route path="/explore/tikkar-taal" element={<TikkarTaal />} />

          <Route path="/explore/:slug" element={<AttractionDetailsPage />} />

          {/* Nearby */}
          <Route path="/nearby/:slug" element={<NearbyDestinationPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
