import React, { useState } from "react";
import { MORNI_DATA } from "../data/morniData";
import mornihills from "../assets/images/tikkar-taal-boating.jpg.png";
import { ArrowRight, Droplets, MapPin, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TikkarTaalFeature({
  onSelectAttraction,
  onOpenPlanner,
}) {
  const { tikkarTaalSpecial } = MORNI_DATA;

  const [isHovered, setIsHovered] = useState(false);

  const tikkarAttraction = MORNI_DATA.attractions.find(
    (a) => a.id === "tikkar-taal",
  );

  return (
    <section
      id="tikkar-taal-feature"
      className="
        relative
        overflow-hidden
        bg-[#071b24]
        py-12
        sm:py-16
        md:py-20
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0">
        <div
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            transition-transform
            duration-[800ms]
            ease-out
            ${isHovered ? "scale-[1.02]" : "scale-100"}
          `}
          style={{
            backgroundImage: `url(${mornihills})`,
          }}
        />

        {/* Background dark tint */}
        <div className="absolute inset-0 bg-[#071b24]/35" />

        {/* Soft center vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              circle_at_center,
              rgba(7,27,36,0.05)_0%,
              rgba(7,27,36,0.20)_55%,
              rgba(7,27,36,0.55)_100%
            )]
          "
        />

        {/* Top fade */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-32
            bg-gradient-to-b
            from-[#071b24]/55
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-36
            bg-gradient-to-t
            from-[#071b24]/70
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[76vh]
          max-w-7xl
          items-center
          justify-center
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <ScrollReveal
          delay={0}
          distance={25}
          className="relative w-full max-w-4xl"
        >
          {/* =================================================
              SOFT FROSTED BACKDROP
          ================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-5
              rounded-[2.5rem]
              bg-[#071b24]/15
              backdrop-blur-sm
            "
          />

          {/* =================================================
              MAIN FROSTED GLASS PANEL
          ================================================= */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-white/30
              bg-[#102c34]/58
              px-5
              py-7
              text-center
              backdrop-blur-[40px]
              sm:px-7
              sm:py-8
              md:px-9
              md:py-9
              lg:px-10
              lg:py-10
            "
          >
            {/* =================================================
                FROSTED GLASS LIGHT
            ================================================= */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.14]
                via-white/[0.03]
                to-transparent
              "
            />

            {/* Top glass highlight */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-px
                w-[65%]
                -translate-x-1/2
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
              "
            />

            {/* =================================================
                CONTENT
            ================================================= */}
            <div className="relative z-10">
              {/* =================================================
                  TOP LABELS
              ================================================= */}
              <div
                className="
                  mb-5
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                {/* Signature Attraction */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/25
                    bg-white/[0.10]
                    px-3.5
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    backdrop-blur-xl
                    sm:text-xs
                  "
                >
                  <Droplets
                    className="
                      h-3.5
                      w-3.5
                      text-[#e4d6b7]
                    "
                  />

                  <span>{tikkarTaalSpecial.badge}</span>
                </div>

                {/* Location */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-[#071b24]/35
                    px-3.5
                    py-1.5
                    text-xs
                    text-white/90
                    backdrop-blur-xl
                  "
                >
                  <MapPin
                    className="
                      h-3.5
                      w-3.5
                      text-[#e4d6b7]
                    "
                  />

                  <span>Morni Hills, Haryana</span>
                </div>
              </div>

              {/* =================================================
                  EYEBROW
              ================================================= */}
              <div
                className="
                  mb-3.5
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-10
                    bg-[#e4d6b7]/80
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#f0dfbd]
                    sm:text-xs
                  "
                >
                  Tikkar Taal
                </span>

                <span
                  className="
                    h-px
                    w-10
                    bg-[#e4d6b7]/80
                  "
                />
              </div>

              {/* =================================================
                  MAIN HEADING
              ================================================= */}
              <h2
                className="
                  mx-auto
                  max-w-3xl
                  font-serif
                  text-3xl
                  font-bold
                  leading-[1]
                  tracking-tight
                  text-white
                  drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                Two Lakes.
                <br />
                <span
                  className="
                    font-medium
                    italic
                    text-[#f0dfbd]
                  "
                >
                  One Peaceful Escape.
                </span>
              </h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}
              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/85
                  sm:text-base
                  sm:leading-7
                "
              >
                {tikkarTaalSpecial.description}
              </p>

              {/* =================================================
                  FEATURE CARDS
              ================================================= */}
              <div
                className="
                  mx-auto
                  mt-7
                  grid
                  max-w-3xl
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {tikkarTaalSpecial.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="
                      group
                      rounded-xl
                      border
                      border-white/20
                      bg-[#16343c]/65
                      p-4
                      text-left
                      backdrop-blur-[30px]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/35
                      hover:bg-[#1c4149]/75
                    "
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/15
                          bg-[#e4d6b7]/15
                        "
                      >
                        <Sparkles
                          className="
                            h-4
                            w-4
                            text-[#f0dfbd]
                          "
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <h3
                          className="
                            font-serif
                            text-sm
                            font-semibold
                            text-white
                            sm:text-base
                          "
                        >
                          {feat.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            leading-4.5
                            text-white/70
                            sm:text-xs
                            sm:leading-5
                          "
                        >
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  STATS
              ================================================= */}
              <div
                className="
                  mx-auto
                  mt-7
                  grid
                  max-w-3xl
                  grid-cols-2
                  border-y
                  border-white/20
                  py-5
                  sm:grid-cols-4
                "
              >
                {tikkarTaalSpecial.stats.map((st, idx) => (
                  <div
                    key={idx}
                    className={`
                      px-2
                      sm:px-3
                      ${
                        idx !== tikkarTaalSpecial.stats.length - 1
                          ? "sm:border-r sm:border-white/20"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        font-serif
                        text-xl
                        font-bold
                        text-[#f0dfbd]
                        sm:text-2xl
                      "
                    >
                      {st.value}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[8px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-white/60
                        sm:text-[9px]
                      "
                    >
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  BUTTONS
              ================================================= */}
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-2.5
                  sm:flex-row
                "
              >
                {/* Primary Button */}
                <button
                  onClick={() =>
                    tikkarAttraction && onSelectAttraction(tikkarAttraction)
                  }
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-[#f0dfbd]
                    px-6
                    py-3
                    text-xs
                    font-bold
                    text-[#10252c]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                  "
                >
                  <span>Explore Tikkar Taal</span>

                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* Secondary Button */}
                <button
                  onClick={onOpenPlanner}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/[0.08]
                    px-6
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-white/50
                    hover:bg-white/[0.15]
                  "
                >
                  Book Lake Activities
                </button>
              </div>

              {/* =================================================
                  BOTTOM DETAIL
              ================================================= */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-12
                    bg-[#e4d6b7]/50
                  "
                />

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#e4d6b7]/30
                    bg-[#e4d6b7]/10
                  "
                >
                  <Sparkles
                    className="
                      h-3
                      w-3
                      text-[#f0dfbd]
                    "
                  />
                </div>

                <span
                  className="
                    h-px
                    w-12
                    bg-[#e4d6b7]/50
                  "
                />
              </div>

              <p
                className="
                  mt-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#f0dfbd]/70
                "
              >
                Nature. Peace. Memories.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* =====================================================
          DECORATIVE CIRCLES
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-20
          h-72
          w-72
          rounded-full
          border
          border-white/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-4
          h-40
          w-40
          rounded-full
          border
          border-white/10
        "
      />
    </section>
  );
}
