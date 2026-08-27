import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';

// ✅ Your video
import MorniVideo from '../Videos/Morni_Video.mp4';

export default function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    // Autoplay ke liye muted
    video.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section screen par aate hi video automatically play
            video.play().catch((error) => {
              console.log('Autoplay prevented:', error);
            });
          } else {
            // Section se bahar jaate hi pause
            video.pause();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[720px] md:min-h-screen overflow-hidden bg-morni-dark"
    >

      {/* =====================================
          AUTOPLAY BACKGROUND VIDEO
      ====================================== */}

      <video
        ref={videoRef}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-[1.02]
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        {/* ✅ YOUR ACTUAL VIDEO */}
        <source
          src={MorniVideo}
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>


      {/* =====================================
          CINEMATIC OVERLAY
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          bg-morni-dark/45
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-morni-primary/25
          mix-blend-multiply
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-morni-dark/70
          via-morni-dark/20
          to-morni-dark/95
          pointer-events-none
        "
      />


      {/* =====================================
          CONTENT
      ====================================== */}

      <div
        className="
          relative
          z-10
          min-h-[720px]
          md:min-h-screen
          flex
          items-center
          justify-center
        "
      >

        <div
          className="
            max-w-5xl
            mx-auto
            px-5
            sm:px-6
            lg:px-8
            text-center
            text-white
          "
        >

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              text-xs
              font-semibold
              tracking-[0.25em]
              uppercase
              text-morni-accent
              mb-7
            "
          >
            <Sparkles className="w-3.5 h-3.5" />

            <span>
              SEE MORNI DIFFERENTLY
            </span>
          </div>


          {/* Heading */}

          <h2
            className="
              heading-hero
              text-4xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-[0.95]
              mb-7
            "
          >
            A Journey Worth

            <br />

            <span className="italic text-morni-accent">
              Taking
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              max-w-2xl
              mx-auto
              text-base
              sm:text-lg
              md:text-xl
              text-white/85
              leading-relaxed
            "
          >
            Watch the morning fog lift above the twin lakes of
            Tikkar Taal, pine winds brush through the Shivalik peaks,
            and dusk settle over Kotaha Fort.
          </p>

        </div>

      </div>


      {/* =====================================
          MUTE / UNMUTE BUTTON
      ====================================== */}

      <button
        type="button"
        onClick={toggleMute}
        className="
          absolute
          bottom-8
          left-8
          z-20
          w-12
          h-12
          rounded-full
          bg-black/40
          backdrop-blur-xl
          border
          border-white/20
          flex
          items-center
          justify-center
          text-white
          hover:bg-white/20
          transition-all
        "
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>

    </section>
  );
}