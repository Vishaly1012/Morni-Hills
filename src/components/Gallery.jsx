import React, { useState } from 'react';
import { MORNI_DATA } from '../data/morniData';
import { Camera, MapPin, Maximize2 } from 'lucide-react';

const GALLERY_CATEGORIES = [
  'All',
  'Lakes',
  'Mountains',
  'Nature',
  'Heritage',
  'Stays',
  'Sunsets',
  'Dining',
];

export default function Gallery({ onOpenLightbox }) {
  const { gallery } = MORNI_DATA;

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery =
    activeCategory === 'All'
      ? gallery
      : gallery.filter(
          (item) =>
            item.category.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  // Maximum 9 images for the desktop Bento layout.
  // This prevents extra images from breaking the grid.
  const displayedGallery = filteredGallery.slice(0, 9);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-morni-light dark:bg-morni-dark transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Chronicles</span>
          </div>

          <h2 className="heading-section mb-4">
            Glimpses of{' '}
            <span className="italic text-morni-primary dark:text-morni-secondary">
              Morni
            </span>
          </h2>

          <p className="subheading-section">
            A curated photographic journey through misty hills,
            sunlit waters, ancient stone forts, and pine-clad horizons.
          </p>

          {/* ================= FILTERS ================= */}

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">

            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4
                  py-1.5
                  rounded-full
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  cursor-pointer

                  ${
                    activeCategory === cat
                      ? 'bg-morni-primary text-white shadow-md dark:bg-morni-accent dark:text-morni-dark'
                      : 'bg-white/80 dark:bg-morni-dark-card/80 text-morni-dark/70 dark:text-morni-light/70 hover:bg-white dark:hover:bg-morni-dark-surface border border-morni-dark/10 dark:border-white/10'
                  }
                `}
              >
                {cat}
              </button>
            ))}

          </div>
        </div>

        {/* =====================================================
            BENTO GRID
        ===================================================== */}

        <div
          className={`
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            auto-rows-[210px]
            gap-4
            lg:gap-5
          `}
        >

          {displayedGallery.map((item, index) => {

            /*
              PERFECT 4 x 4 BENTO

              Row 1:
              0 | 1 1 | 2

              Row 2:
              0 | 1 1 | 3

              Row 3:
              4 4 | 5 | 6

              Row 4:
              7 7 | 8 8

              Every grid cell is occupied.
              No overlapping.
              No empty spaces.
            */

            let layoutClass = '';

            if (index === 0) {
              // Tall left card
              layoutClass =
                'lg:col-span-1 lg:row-span-2';
            }

            else if (index === 1) {
              // Large center card
              layoutClass =
                'lg:col-span-2 lg:row-span-2';
            }

            else if (index === 2) {
              // Top right
              layoutClass =
                'lg:col-span-1 lg:row-span-1';
            }

            else if (index === 3) {
              // Right middle
              layoutClass =
                'lg:col-span-1 lg:row-span-1';
            }

            else if (index === 4) {
              // Large bottom-left
              layoutClass =
                'lg:col-span-2 lg:row-span-1';
            }

            else if (index === 5) {
              // Small middle
              layoutClass =
                'lg:col-span-1 lg:row-span-1';
            }

            else if (index === 6) {
              // Small right
              layoutClass =
                'lg:col-span-1 lg:row-span-1';
            }

            else if (index === 7) {
              // Bottom-left large
              layoutClass =
                'lg:col-span-2 lg:row-span-1';
            }

            else if (index === 8) {
              // Bottom-right large
              layoutClass =
                'lg:col-span-2 lg:row-span-1';
            }

            return (
              <div
                key={item.id}
                onClick={() =>
                  onOpenLightbox &&
                  onOpenLightbox(displayedGallery, index)
                }
                className={`
                  group
                  relative
                  min-h-0
                  w-full
                  h-full
                  overflow-hidden
                  rounded-3xl
                  cursor-pointer

                  border
                  border-white/20
                  dark:border-white/10

                  shadow-lg
                  hover:shadow-2xl

                  transition-all
                  duration-500

                  hover:-translate-y-1

                  ${layoutClass}
                `}
              >

                {/* ================= IMAGE ================= */}

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    block

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-105
                  "
                />

                {/* ================= OVERLAY ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/25
                    to-transparent

                    opacity-80
                    group-hover:opacity-95

                    transition-opacity
                    duration-500

                    pointer-events-none
                  "
                />

                {/* ================= CATEGORY ================= */}

                <div className="absolute top-4 left-4 z-20">

                  <span
                    className="
                      inline-flex
                      px-3
                      py-1

                      rounded-full

                      bg-black/50
                      backdrop-blur-md

                      border
                      border-white/20

                      text-morni-accent

                      text-[10px]
                      sm:text-[11px]

                      font-semibold
                      uppercase
                      tracking-wider
                    "
                  >
                    {item.category}
                  </span>

                </div>

                {/* ================= EXPAND ================= */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    z-20

                    w-9
                    h-9

                    rounded-full

                    bg-black/50
                    backdrop-blur-md

                    border
                    border-white/20

                    text-white

                    flex
                    items-center
                    justify-center

                    opacity-0
                    translate-y-2

                    group-hover:opacity-100
                    group-hover:translate-y-0

                    transition-all
                    duration-300
                  "
                >
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* ================= CONTENT ================= */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    bottom-0

                    z-20

                    p-5
                    sm:p-6
                  "
                >

                  <h3
                    className="
                      font-serif

                      text-lg
                      sm:text-xl
                      lg:text-2xl

                      font-bold
                      text-white

                      leading-tight

                      drop-shadow-lg

                      mb-2
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5

                      text-xs
                      sm:text-sm

                      text-white/75
                    "
                  >
                    <MapPin
                      className="
                        w-3.5
                        h-3.5
                        flex-shrink-0
                        text-morni-secondary
                      "
                    />

                    <span>
                      {item.location}
                    </span>
                  </div>

                </div>

                {/* ================= HOVER BORDER ================= */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl

                    border
                    border-transparent

                    group-hover:border-morni-accent/60

                    transition-colors
                    duration-500

                    pointer-events-none
                  "
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}