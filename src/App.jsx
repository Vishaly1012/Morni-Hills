
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Explore from "./pages/ExplorePage";
import ExperiencePage from "./pages/ExperiencePage";
import TikkarTaal from "./pages/TikkarTaalPage";
import StayPage from "./pages/StayPage";
import EatPage from "./pages/EatPage";
import NearbyDestinationPage from "./pages/NearbyDestinationPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function App() {
  // --------------------------------
  // DARK / LIGHT MODE STATE
  // --------------------------------
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("morni-theme");

    // If theme is saved as dark
    if (savedTheme === "dark") {
      return true;
    }

    // If theme is saved as light
    if (savedTheme === "light") {
      return false;
    }

    // Default theme
    return true;
  });

  // --------------------------------
  // APPLY THEME TO <html>
  // --------------------------------
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
      {/* =========================
          MAIN APPLICATION
      ========================= */}
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
        {/* =========================
            NAVBAR
        ========================= */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* =========================
            ROUTES
        ========================= */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/about" element={<About />} />

          <Route path="/explore" element={<Explore />} />

          <Route
            path="/experience"
            element={<ExperiencePage />}
          />

          <Route
            path="/stay"
            element={<StayPage />}
          />

          <Route
            path="/eat"
            element={<EatPage />}
          />

          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* Tikkar Taal */}
          <Route
            path="/explore/tikkar-taal"
            element={<TikkarTaal />}
          />

          {/* Nearby Dynamic Pages */}
          <Route
            path="/nearby/:slug"
            element={<NearbyDestinationPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
