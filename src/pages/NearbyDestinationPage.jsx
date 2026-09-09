
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Navigation,
  Camera,
  Compass,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const destinations = {
  panchkula: {
    name: "Panchkula",
    type: "City",
    distance: "35 km",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2000&q=85",
    intro:
      "A modern city surrounded by the Shivalik foothills and one of the main gateways to Morni Hills.",
    description:
      "Panchkula offers a convenient combination of urban attractions, peaceful surroundings and easy access to the hills. It is an excellent stop before or after exploring Morni Hills.",
    highlights: [
      "Gateway to the Morni Hills region",
      "Shivalik foothill landscapes",
      "Easy access to nearby attractions",
      "Great base for exploring the region",
    ],
  },

  chandigarh: {
    name: "Chandigarh",
    type: "City & Heritage",
    distance: "45 km",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=2000&q=85",
    intro:
      "India's famous planned city, known for its architecture, gardens, cultural attractions and relaxed urban atmosphere.",
    description:
      "Chandigarh makes a perfect addition to a Morni Hills trip. Explore its distinctive architecture, green spaces, cafés and cultural landmarks before heading into the hills.",
    highlights: [
      "Beautiful planned city",
      "Distinctive modern architecture",
      "Gardens and green spaces",
      "Cafés and cultural attractions",
    ],
  },

  "pinjore-gardens": {
    name: "Pinjore Gardens",
    type: "Heritage",
    distance: "30 km",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=85",
    intro:
      "A historic garden destination where landscaped greenery, fountains and heritage architecture create a peaceful escape.",
    description:
      "Pinjore Gardens is an ideal stop when travelling through the region. The gardens offer beautiful pathways, landscaped spaces and a glimpse into the area's historic heritage.",
    highlights: [
      "Historic Mughal-style garden design",
      "Beautiful landscaped spaces",
      "Peaceful walking paths",
      "Great photography location",
    ],
  },

  kasauli: {
    name: "Kasauli",
    type: "Hill Station",
    distance: "65 km",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2000&q=85",
    intro:
      "A peaceful hill destination known for its colonial charm, pine-covered landscapes and mountain atmosphere.",
    description:
      "Kasauli offers a different hill experience from Morni Hills, with quiet streets, scenic viewpoints and a charming old-world atmosphere.",
    highlights: [
      "Colonial-era atmosphere",
      "Mountain viewpoints",
      "Peaceful walking routes",
      "Pine-covered landscapes",
    ],
  },

  "sukhna-lake": {
    name: "Sukhna Lake",
    type: "Nature",
    distance: "50 km",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
    intro:
      "A peaceful waterfront destination offering open views, relaxing surroundings and a refreshing break from the city.",
    description:
      "Sukhna Lake is one of the popular leisure destinations around Chandigarh. It is a relaxing place to spend time outdoors and enjoy the surrounding landscape.",
    highlights: [
      "Peaceful waterfront setting",
      "Open scenic views",
      "Relaxing outdoor atmosphere",
      "Popular Chandigarh attraction",
    ],
  },

  "mansa-devi": {
    name: "Mata Mansa Devi",
    type: "Spiritual",
    distance: "40 km",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85",
    intro:
      "A prominent spiritual destination near Panchkula set against the backdrop of the Shivalik region.",
    description:
      "Mata Mansa Devi is an important temple destination in the Panchkula region. Visitors can combine a visit here with nearby attractions and a trip towards Morni Hills.",
    highlights: [
      "Important regional temple",
      "Located near the Shivalik foothills",
      "Peaceful spiritual atmosphere",
      "Easy to combine with nearby attractions",
    ],
  },
};

function NearbyDestinationPage() {
  const { slug } = useParams();

  const destination = destinations[slug];

  // If URL doesn't match any destination
  if (!destination) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <Compass
            size={50}
            className="mx-auto text-emerald-600"
          />

          <h1 className="mt-6 text-4xl font-serif text-slate-900">
            Destination Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The destination you are looking for doesn't exist.
          </p>

          <Link
            to="/nearby"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition"
          >
            <ArrowLeft size={18} />
            Back to Nearby
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-800">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-20">
          <ScrollReveal>
            <Link
              to="/nearby"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm hover:bg-white/25 transition"
            >
              <ArrowLeft size={16} />
              Back to Nearby
            </Link>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold">
                  {destination.type}
                </span>

                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white text-sm border border-white/20">
                  <MapPin size={15} />
                  {destination.distance} from Morni Hills
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mt-5">
                {destination.name}
              </h1>

              <p className="max-w-3xl mt-5 text-lg md:text-xl text-white/85 leading-8">
                {destination.intro}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== OVERVIEW ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <ScrollReveal>
              <div>
                <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                  Discover {destination.name}
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4">
                  A Place Worth Adding To Your Journey
                </h2>

                <p className="mt-6 text-lg text-slate-600 leading-8">
                  {destination.description}
                </p>

                <Link
                  to="/nearby"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition"
                >
                  <ArrowLeft size={17} />
                  Explore Other Places
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="rounded-[2rem] bg-emerald-50 border border-emerald-100 p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                  <Navigation size={25} />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mt-6">
                  From Morni Hills
                </h3>

                <div className="flex items-center gap-3 mt-5">
                  <MapPin
                    size={20}
                    className="text-emerald-600"
                  />

                  <div>
                    <p className="text-sm text-slate-500">
                      Approximate distance
                    </p>

                    <p className="text-2xl font-semibold text-slate-900">
                      {destination.distance}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-slate-600 leading-7">
                  Add this destination to your Morni Hills travel plan and make
                  your journey more memorable.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== HIGHLIGHTS ==================== */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                Highlights
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-3">
                What Makes It Special
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destination.highlights.map((highlight, index) => (
              <ScrollReveal key={highlight} delay={index * 0.08}>
                <div className="h-full bg-white rounded-3xl border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Camera size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {highlight}
                  </h3>

                  <p className="mt-3 text-sm text-slate-500 leading-6">
                    A memorable part of exploring the destination around Morni
                    Hills.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PLAN YOUR VISIT ==================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <Navigation size={25} />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-6">
              Plan Your Visit
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-lg text-slate-600 leading-8">
              Make {destination.name} part of your Morni Hills adventure and
              explore more of the beautiful region around the hills.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                to="/nearby"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition"
              >
                <ArrowLeft size={18} />
                Back to Nearby
              </Link>

              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 text-slate-900 font-semibold hover:border-emerald-500 hover:text-emerald-600 transition"
              >
                View Experiences
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

export default NearbyDestinationPage;

