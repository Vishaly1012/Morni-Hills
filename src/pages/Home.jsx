import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Attractions from '../components/Attractions';
import TikkarTaalFeature from '../components/TikkarTaalFeature';
import Experience from '../components/Experience';
import Restaurants from '../components/Restaurants';
import Resorts from '../components/Resorts';
import NearbyPlaces from '../components/NearbyPlaces';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
// import ParallaxSection from '../components/ParallaxSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Modal from '../components/Modal';
import Lightbox from '../components/Lightbox';

export default function Home({ darkMode, setDarkMode }) {
  // Modal State for Attractions, Stays, and Dining
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
    type: 'attraction',
  });

  // Lightbox State for Gallery
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  // Trip planner target stay
  const [prefilledStay, setPrefilledStay] = useState('');

  const openPlanner = (stayName) => {
    if (stayName) setPrefilledStay(stayName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = contactSection.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (data, type = 'attraction') => {
    setModalState({
      isOpen: true,
      data,
      type,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenLightbox = (images, index) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleNextLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  return (
    <div className="relative min-h-screen bg-morni-light dark:bg-morni-dark transition-colors duration-300 selection:bg-morni-primary selection:text-white">
      {/* Top Navbar with Dark Mode Toggle */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenPlanner={() => openPlanner()}
      />

      {/* Main Single-Page Journey */}
      <main>
        {/* 1. Cinematic Fullscreen Hero with 3D Canvas */}
        <Hero onOpenPlanner={() => openPlanner()} />

        {/* 2. About Morni Hills with Split Layout & Statistics */}
        <About />

        {/* 3. Explore Morni (Attractions & Heritage) */}
        <Attractions
          onSelectAttraction={(attr) => handleOpenModal(attr, 'attraction')}
        />

        {/* 4. Tikkar Taal Signature Feature */}
        <TikkarTaalFeature
          onSelectAttraction={(attr) => handleOpenModal(attr, 'attraction')}
          onOpenPlanner={() => openPlanner('Tikkar Taal Lakeside Glamping')}
        />

        {/* 5. Experience Morni (Outdoor Activities) */}
        <Experience onOpenPlanner={() => openPlanner()} />

        {/* 6. Restaurants & Mountain Flavors */}
        <Restaurants
          onSelectRestaurant={(rest) => handleOpenModal(rest, 'restaurant')}
        />

        {/* 7. Resorts & Stays */}
        <Resorts
          onSelectStay={(stay) => handleOpenModal(stay, 'resort')}
          onOpenPlanner={(stayName) => openPlanner(stayName)}
        />

        {/* 8. Nearby Destinations (Beyond Morni) */}
        <NearbyPlaces
          onSelectNearby={(place) => handleOpenModal(place, 'nearby')}
        />

        {/* 9. Masonry Photo Gallery */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 10. Cinematic Video Showcase */}
        <VideoSection />

        {/* 11. Full-Screen Parallax Quote Banner */}
        {/* <ParallaxSection /> */}

        {/* 12. Trip Planner & Contact Section */}
        <Contact prefilledStay={prefilledStay} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top with Progress Ring */}
      <ScrollToTop />

      {/* Detail Modal Dialog */}
      <Modal
        isOpen={modalState.isOpen}
        data={modalState.data}
        type={modalState.type}
        onClose={handleCloseModal}
        onAction={(data) => openPlanner(data.title || data.name)}
      />

      {/* Fullscreen Lightbox Gallery */}
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
