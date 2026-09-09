import React, { useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Attractions from "../components/Attractions";
import TikkarTaalFeature from "../components/TikkarTaalFeature";
import Experience from "../components/Experience";
import Restaurants from "../components/Restaurants";
import Resorts from "../components/Resorts";
import NearbyPlaces from "../components/NearbyPlaces";
import Gallery from "../components/Gallery";
import VideoSection from "../components/VideoSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Modal from "../components/Modal";
import Lightbox from "../components/Lightbox";

export default function Home({ darkMode, setDarkMode }) {
  // Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
    type: "attraction",
  });

  // Lightbox State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  // Trip planner target stay
  const [prefilledStay, setPrefilledStay] = useState("");

  // --------------------------------
  // OPEN PLANNER
  // --------------------------------
  const openPlanner = (stayName) => {
    if (stayName) {
      setPrefilledStay(stayName);
    }

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const topOffset =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        70;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // --------------------------------
  // MODAL
  // --------------------------------
  const handleOpenModal = (
    data,
    type = "attraction"
  ) => {
    setModalState({
      isOpen: true,
      data,
      type,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  // --------------------------------
  // LIGHTBOX
  // --------------------------------
  const handleOpenLightbox = (
    images,
    index
  ) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handlePrevLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex -
          1 +
          prev.images.length) %
        prev.images.length,
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex:
        (prev.currentIndex + 1) %
        prev.images.length,
    }));
  };

  return (
    <div
      className="
        relative
        min-h-screen
        bg-morni-light
        dark:bg-morni-dark
        text-slate-900
        dark:text-white
        transition-colors
        duration-300
        selection:bg-morni-primary
        selection:text-white
      "
    >
      <main>
        {/* 1. Hero */}
        <Hero
          darkMode={darkMode}
          onOpenPlanner={() => openPlanner()}
        />

        {/* 2. About */}
        <About />

        {/* 3. Attractions */}
        <Attractions
          onSelectAttraction={(attr) =>
            handleOpenModal(attr, "attraction")
          }
        />

        {/* 4. Tikkar Taal */}
        <TikkarTaalFeature
          onSelectAttraction={(attr) =>
            handleOpenModal(attr, "attraction")
          }
          onOpenPlanner={() =>
            openPlanner(
              "Tikkar Taal Lakeside Glamping"
            )
          }
        />

        {/* 5. Experience */}
        <Experience
          onOpenPlanner={() => openPlanner()}
        />

        {/* 6. Restaurants */}
        <Restaurants
          onSelectRestaurant={(rest) =>
            handleOpenModal(rest, "restaurant")
          }
        />

        {/* 7. Resorts */}
        <Resorts
          onSelectStay={(stay) =>
            handleOpenModal(stay, "resort")
          }
          onOpenPlanner={(stayName) =>
            openPlanner(stayName)
          }
        />

        {/* 8. Nearby */}
        <NearbyPlaces
          onSelectNearby={(place) =>
            handleOpenModal(place, "nearby")
          }
        />

        {/* 9. Gallery */}
        <Gallery
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 10. Video */}
        <VideoSection />

        {/* 11. Contact */}
        <Contact
          prefilledStay={prefilledStay}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Modal */}
      <Modal
        isOpen={modalState.isOpen}
        data={modalState.data}
        type={modalState.type}
        onClose={handleCloseModal}
        onAction={(data) =>
          openPlanner(data.title || data.name)
        }
      />

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
