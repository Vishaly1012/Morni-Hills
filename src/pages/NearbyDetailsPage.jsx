import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock3,
  Navigation,
  Camera,
  Compass,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

/* =========================================================
   NEARBY DESTINATIONS DATA
========================================================= */

const destinations = {
  "yadavindra-gardens": {
    name: "Yadavindra Gardens",
    subtitle: "Pinjore",
    location: "Pinjore, Haryana",
    distance: "40 km from Morni",
    time: "55 mins",
    category: "Heritage & Gardens",

    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1800&q=85",

    description:
      "Yadavindra Gardens, popularly known as Pinjore Gardens, is a magnificent Mughal-style garden spread across beautifully terraced levels at the foothills of the Shivalik Hills.",

    longDescription:
      "Designed in the 17th century, the gardens combine Mughal-inspired architecture, landscaped terraces, fountains, water channels and historic pavilions. The peaceful setting makes it an excellent stop for visitors exploring the Morni Hills and Panchkula region.",

    highlights: [
      "Terraced Mughal-style gardens",
      "Historic Sheesh Mahal",
      "Rang Mahal and Jal Mahal",
      "Water fountains and channels",
      "Beautiful evening atmosphere",
      "Heritage architecture",
    ],

    tags: [
      "Heritage Architecture",
      "Mughal Gardens",
      "Water Fountains",
      "Photography",
    ],

    bestTime: "October – March",
  },

  "sukhna-lake": {
    name: "Sukhna Lake",
    subtitle: "Chandigarh",
    location: "Chandigarh",
    distance: "52 km from Morni",
    time: "1 hr 15 mins",
    category: "Lake & Nature",

    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1800&q=85",

    description:
      "Sukhna Lake is one of Chandigarh's most popular outdoor destinations, offering peaceful waterfront views, walking paths, boating and beautiful sunrise and sunset experiences.",

    longDescription:
      "Created at the foothills of the Shivaliks, Sukhna Lake provides a relaxing escape from the city. Visitors can enjoy the promenade, spend time beside the water, observe birds and experience the changing colours of the sky during sunrise and sunset.",

    highlights: [
      "Boating and water activities",
      "Lakeside promenade",
      "Sunrise and sunset views",
      "Bird watching",
      "Jogging and walking",
      "Peaceful waterfront",
    ],

    tags: [
      "Boating",
      "Nature",
      "Photography",
      "Walking",
    ],

    bestTime: "October – March",
  },

  "nada-sahib": {
    name: "Nada Sahib Gurudwara",
    subtitle: "Panchkula",
    location: "Panchkula, Haryana",
    distance: "33 km from Morni",
    time: "45 mins",
    category: "Spiritual & Heritage",

    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1800&q=85",

    description:
      "Gurudwara Nada Sahib is an important Sikh pilgrimage destination located on the banks of the Ghaggar River in Panchkula.",

    longDescription:
      "The peaceful complex attracts visitors throughout the year. Its distinctive white architecture, spiritual atmosphere and riverside surroundings make it an important cultural and religious destination near Morni Hills.",

    highlights: [
      "Historic Sikh pilgrimage site",
      "Beautiful white architecture",
      "Ghaggar River surroundings",
      "Peaceful spiritual atmosphere",
      "Community langar",
      "Photography and heritage",
    ],

    tags: [
      "Sikh Heritage",
      "Spiritual",
      "Architecture",
      "Riverfront",
    ],

    bestTime: "Throughout the year",
  },

  "timber-trail": {
    name: "Timber Trail Cable Car",
    subtitle: "Parwanoo",
    location: "Parwanoo, Himachal Pradesh",
    distance: "40 km from Morni",
    time: "55 mins",
    category: "Adventure & Views",

    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=85",

    description:
      "The Timber Trail experience offers a spectacular cable-car journey across the forested Shivalik landscape around Parwanoo.",

    longDescription:
      "The cable car provides an elevated perspective of the surrounding valleys and green mountain landscape. It is an ideal option for visitors looking for a short adventure combined with panoramic Himalayan foothill views.",

    highlights: [
      "Scenic cable car ride",
      "Panoramic mountain views",
      "Forest landscapes",
      "Photography opportunities",
      "Adventure experience",
      "Valley views",
    ],

    tags: [
      "Cable Car",
      "Adventure",
      "Mountain Views",
      "Photography",
    ],

    bestTime: "March – June & September – November",
  },

  kasauli: {
    name: "Kasauli Hill Town",
    subtitle: "Himachal Pradesh",
    location: "Kasauli, Himachal Pradesh",
    distance: "52 km from Morni",
    time: "1 hr 25 mins",
    category: "Hill Station",

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85",

    description:
      "Kasauli is a charming colonial-era hill town surrounded by pine forests, winding roads and panoramic views of the Himalayan foothills.",

    longDescription:
      "Known for its peaceful atmosphere, heritage buildings and scenic walking trails, Kasauli is a popular hill getaway from the Chandigarh-Panchkula region. Visitors can explore the Mall Road, nature trails and viewpoints while enjoying the cool mountain climate.",

    highlights: [
      "Colonial-era architecture",
      "Mountain viewpoints",
      "Pine forests",
      "Nature trails",
      "Mall Road",
      "Peaceful hill atmosphere",
    ],

    tags: [
      "Hill Station",
      "Nature Trails",
      "Colonial Heritage",
      "Mountain Views",
    ],

    bestTime: "March – June & September – November",
  },

  "national-cactus-garden": {
    name: "National Cactus Garden",
    subtitle: "Panchkula",
    location: "Panchkula, Haryana",
    distance: "33 km from Morni",
    time: "45 mins",
    category: "Nature & Botanical",

    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=1800&q=85",

    description:
      "The National Cactus Garden in Panchkula is a unique botanical destination featuring a remarkable collection of cactus and succulent plants.",

    longDescription:
      "The garden provides visitors with an interesting look at desert-adapted plants in a carefully maintained outdoor setting. Its distinctive landscapes make it a great destination for nature lovers, plant enthusiasts and photographers.",

    highlights: [
      "Cactus collections",
      "Succulent plants",
      "Botanical landscapes",
      "Photography",
      "Nature exploration",
      "Family-friendly visit",
    ],

    tags: [
      "Botanical Garden",
      "Cactus",
      "Nature",
      "Photography",
    ],

    bestTime: "October – March",
  },
};

/* =========================================================
   PAGE
========================================================= */

const NearbyDetailsPage = () => {
  const { slug } = useParams();

  const destination = destinations[slug];

  /* Invalid slug */
  if (!destination) {
    return (
      <div className="min-h-screen bg-[#f5f7f2] dark:bg-[#10201c] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#2f6b5f] mb-4">
            Destination Not Found
          </p>

          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            We couldn't find this place.
          </h1>

          <Link
            to="/nearby"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2f6b5f] text-white hover:bg-[#245448] transition"
          >
            <ArrowLeft size={17} />
            Back to Nearby Places
          </Link>
        </div>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    destination.name + ", " + destination.location
  )}`;

  return (
    <main className="min-h-screen bg-[#f5f7f2] dark:bg-[#10201c] text-slate-900 dark:text-white transition-colors duration-300">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden">

        {/* Background Image */}
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full min-h-[72vh] md:min-h-[78vh] flex flex-col justify-between py-8">

          {/* Back */}
          <div>
            <Link
              to="/nearby"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition"
            >
              <ArrowLeft size={17} />
              <span className="text-sm font-medium">
                Back to Nearby Places
              </span>
            </Link>
          </div>

          {/* Hero Bottom */}
          <div className="max-w-4xl pb-4">

            {/* Category */}
            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="px-4 py-2 rounded-full bg-[#d8a85b] text-white text-xs font-semibold uppercase tracking-wider">
                {destination.category}
              </span>

              <span className="px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xs">
                {destination.distance}
              </span>

              <span className="px-4 py-2 rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white text-xs">
                {destination.time}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              {destination.name}
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-white/85 font-serif">
              {destination.subtitle}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 mt-6 text-white/80">
              <MapPin size={19} />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFO
      ===================================================== */}

      <section className="relative -mt-8 z-20 max-w-6xl mx-auto px-5 lg:px-8">

        <div className="bg-white dark:bg-[#172c26] rounded-3xl shadow-xl border border-slate-200/70 dark:border-white/10 p-5 md:p-7">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0">

            {/* Location */}
            <div className="flex items-center gap-4 md:px-6 md:border-r border-slate-200 dark:border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-[#2f6b5f]/10 dark:bg-[#2f6b5f]/20 flex items-center justify-center text-[#2f6b5f]">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Location
                </p>
                <p className="font-semibold text-sm mt-1">
                  {destination.location}
                </p>
              </div>
            </div>

            {/* Distance */}
            <div className="flex items-center gap-4 md:px-6 md:border-r border-slate-200 dark:border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-[#d8a85b]/15 flex items-center justify-center text-[#b1843e]">
                <Compass size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Distance
                </p>
                <p className="font-semibold text-sm mt-1">
                  {destination.distance}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4 md:px-6 md:border-r border-slate-200 dark:border-white/10">
              <div className="w-11 h-11 rounded-2xl bg-[#2f6b5f]/10 dark:bg-[#2f6b5f]/20 flex items-center justify-center text-[#2f6b5f]">
                <Clock3 size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Travel Time
                </p>
                <p className="font-semibold text-sm mt-1">
                  {destination.time}
                </p>
              </div>
            </div>

            {/* Best Time */}
            <div className="flex items-center gap-4 md:px-6">
              <div className="w-11 h-11 rounded-2xl bg-[#d8a85b]/15 flex items-center justify-center text-[#b1843e]">
                <Sparkles size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Best Time
                </p>
                <p className="font-semibold text-sm mt-1">
                  {destination.bestTime}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">

        <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20">

          {/* LEFT */}
          <div>

            {/* About */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#2f6b5f] dark:text-[#d8a85b] font-semibold mb-4">
                Discover the destination
              </p>

              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-7">
                About {destination.name}
              </h2>

              <p className="text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-300">
                {destination.description}
              </p>

              <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
                {destination.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-16">

              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#2f6b5f] dark:text-[#d8a85b] font-semibold mb-2">
                    What to experience
                  </p>

                  <h2 className="font-serif text-3xl md:text-4xl font-bold">
                    Highlights
                  </h2>
                </div>

                <Camera
                  className="hidden sm:block text-[#d8a85b]"
                  size={32}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">

                {destination.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-[#172c26] border border-slate-200 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#2f6b5f]/10 dark:bg-[#2f6b5f]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2
                        size={18}
                        className="text-[#2f6b5f] dark:text-[#8dc9b9]"
                      />
                    </div>

                    <span className="font-medium text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Tags */}
            <div className="mt-14">

              <h3 className="font-serif text-2xl font-bold mb-5">
                Experience Type
              </h3>

              <div className="flex flex-wrap gap-3">

                {destination.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 text-sm text-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}

              </div>
            </div>

          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="lg:sticky lg:top-28 h-fit">

            <div className="rounded-3xl overflow-hidden bg-[#10201c] text-white shadow-2xl">

              {/* Small image */}
              <div className="h-52 relative">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Plan your visit
                  </p>

                  <h3 className="font-serif text-2xl font-bold mt-1">
                    {destination.name}
                  </h3>
                </div>

              </div>

              {/* Sidebar content */}
              <div className="p-6 md:p-7">

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <MapPin
                      size={20}
                      className="text-[#d8a85b] flex-shrink-0"
                    />

                    <div>
                      <p className="text-xs text-white/50">
                        Location
                      </p>
                      <p className="text-sm mt-1">
                        {destination.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Navigation
                      size={20}
                      className="text-[#d8a85b] flex-shrink-0"
                    />

                    <div>
                      <p className="text-xs text-white/50">
                        From Morni Hills
                      </p>
                      <p className="text-sm mt-1">
                        {destination.distance}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock3
                      size={20}
                      className="text-[#d8a85b] flex-shrink-0"
                    />

                    <div>
                      <p className="text-xs text-white/50">
                        Approx. Travel Time
                      </p>
                      <p className="text-sm mt-1">
                        {destination.time}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Map button */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-[#d8a85b] text-[#10201c] font-semibold hover:bg-[#e4bd7b] transition"
                >
                  <Navigation size={18} />
                  Get Directions
                </a>

              </div>
            </div>

          </aside>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 lg:px-8 pb-24">

        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-[#2f6b5f] dark:bg-[#17372f] px-7 py-14 md:px-14 md:py-16">

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-black/10" />

          <div className="relative z-10 max-w-3xl">

            <p className="text-sm uppercase tracking-[0.25em] text-[#d8a85b] font-semibold mb-4">
              Explore more
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Continue exploring the places around Morni Hills.
            </h2>

            <p className="mt-5 text-white/75 text-base md:text-lg leading-7 max-w-2xl">
              Discover more scenic destinations, heritage sites and peaceful
              escapes around the Shivalik region.
            </p>

            <Link
              to="/nearby"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full bg-white text-[#2f6b5f] font-semibold hover:bg-[#f4eee2] transition"
            >
              Explore Nearby Places
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </section>

    </main>
  );
};

export default NearbyDetailsPage;