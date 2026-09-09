
import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const galleryImages = [
  {
    id: 1,
    title: "Tikkar Taal Lake",
    category: "Lakes",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 2,
    title: "Morni Hills Landscape",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 3,
    title: "Forest Trails",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 4,
    title: "Mountain Sunset",
    category: "Sunsets",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 5,
    title: "Morni Fort",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 6,
    title: "Hilltop Stay",
    category: "Stays",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 7,
    title: "Mountain View",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 8,
    title: "Lake Reflections",
    category: "Lakes",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 9,
    title: "Green Valley",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 10,
    title: "Golden Hour",
    category: "Sunsets",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 11,
    title: "Peaceful Retreat",
    category: "Stays",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 12,
    title: "Mountain Road",
    category: "Mountains",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 13,
    title: "Forest Escape",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 14,
    title: "Heritage Architecture",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
  {
    id: 15,
    title: "Valley Sunset",
    category: "Sunsets",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    size: "large",
  },
  {
    id: 16,
    title: "Luxury Mountain Stay",
    category: "Stays",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    size: "normal",
  },
];

const categories = [
  "All",
  "Lakes",
  "Mountains",
  "Nature",
  "Heritage",
  "Stays",
  "Sunsets",
  "Dining",
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#eef1eb]">
        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <Camera size={18} className="text-emerald-700" />
                </span>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Visual Journey
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-8xl">
                Morni
                <span className="block font-serif italic text-emerald-700">
                  in Frames.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore the landscapes, lakes, forests, heritage and peaceful
                moments that make Morni Hills one of Haryana's most beautiful
                escapes.
              </p>
            </div>
          </ScrollReveal>

          {/* Small stats */}
          <ScrollReveal>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-slate-300/70 pt-8">
              <div>
                <p className="text-3xl font-bold text-slate-900">16+</p>
                <p className="mt-1 text-sm text-slate-500">Captured moments</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-slate-900">7</p>
                <p className="mt-1 text-sm text-slate-500">Gallery themes</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-slate-900">1</p>
                <p className="mt-1 text-sm text-slate-500">Beautiful destination</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================= */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Section heading */}
        <ScrollReveal>
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Explore the gallery
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                See Morni differently.
              </h2>

              <p className="mt-4 max-w-xl text-slate-600">
                From peaceful lakes to mountain roads and golden sunsets,
                discover the many moods of Morni Hills.
              </p>
            </div>

            <div className="hidden lg:block">
              <Sparkles className="text-amber-500" size={32} />
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================
            CATEGORY FILTER
        ========================================================= */}
        <ScrollReveal>
          <div className="mb-12 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedImage(null);
                      document.body.style.overflow = "auto";
                    }}
                    className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-700 text-white shadow-md"
                        : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================
            IMAGE GRID
        ========================================================= */}
        {filteredImages.length > 0 ? (
          <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((item, index) => (
              <ScrollReveal key={item.id}>
                <button
                  type="button"
                  onClick={() => openImage(item)}
                  className={`group relative h-full w-full overflow-hidden rounded-[28px] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    item.size === "large"
                      ? "sm:row-span-2"
                      : "row-span-1"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Category badge */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-800 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand icon */}
                  <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white/90 text-slate-800 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={17} />
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                      Morni Hills
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm ring-1 ring-slate-200">
            <Camera
              size={40}
              className="mx-auto mb-4 text-slate-400"
            />

            <h3 className="text-2xl font-bold text-slate-900">
              More photos coming soon
            </h3>

            <p className="mt-2 text-slate-500">
              We are preparing beautiful moments for this category.
            </p>
          </div>
        )}

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <ScrollReveal>
          <div className="mt-20 overflow-hidden rounded-[32px] bg-emerald-800 px-8 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
                  Your turn
                </p>

                <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Come experience the views yourself.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-emerald-100">
                  Pictures can show you Morni Hills. Being here lets you feel
                  it.
                </p>
              </div>

              <a
                href="/experience"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50"
              >
                Explore Experiences
                <ChevronRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeImage}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          {/* Counter */}
          <div className="absolute left-5 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            {currentIndex + 1} / {filteredImages.length}
          </div>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image container */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-1 text-sm text-white/60">
                Morni Hills, Haryana
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </main>
  );
}

export default GalleryPage;