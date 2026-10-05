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
import ScrollReveal from "../components/ScrollReveal";
import { CheckCircle2, MapPin, Sparkles, Trees } from "lucide-react";
import { MORNI_DATA } from "../data/morniData";

export default function Home({ darkMode, setDarkMode }) {
  // Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
    type: "attraction",
  });

    const { about } = MORNI_DATA;

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
        {/* <About /> */}

        {/* 2. About */}
        <div className="max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
                            grid grid-cols-1 sm:grid-cols-2 gap-x-5 lg:gap-x-6
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
      {/* <Footer /> */}

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
