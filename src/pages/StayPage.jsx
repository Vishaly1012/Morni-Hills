
import React from "react";
import {
  BedDouble,
  Wifi,
  Utensils,
  Car,
  Trees,
  ArrowRight,
  Star,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const stays = [
  {
    name: "Mountain Resort",
    type: "Luxury Stay",
    price: "₹3,500",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    description:
      "A peaceful hillside stay surrounded by greenery and beautiful mountain views.",
  },
  {
    name: "Forest Cottage",
    type: "Nature Stay",
    price: "₹2,800",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax in a cozy cottage surrounded by forests and the quiet beauty of Morni.",
  },
  {
    name: "Lake View Retreat",
    type: "Premium Stay",
    price: "₹4,200",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy comfortable rooms, peaceful surroundings and scenic views close to the lakes.",
  },
];

const facilities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text: "Stay connected whenever you need.",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    text: "Enjoy fresh and delicious local meals.",
  },
  {
    icon: Car,
    title: "Parking",
    text: "Convenient parking for your vehicle.",
  },
  {
    icon: Trees,
    title: "Nature Views",
    text: "Wake up surrounded by greenery.",
  },
];

function StayPage() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=2000&q=85"
          alt="Stay in Morni Hills"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl text-white">

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-sm">
                <BedDouble size={16} />
                Stay in Morni
              </span>

              <h1 className="font-serif text-5xl md:text-7xl leading-tight mt-6">
                Stay Close
                <span className="block text-emerald-300">
                  To Nature
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
                From comfortable resorts to peaceful cottages, discover
                beautiful places to stay while exploring Morni Hills.
              </p>

              <a
                href="#stays"
                className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
              >
                Explore Stays
                <ArrowRight size={18} />
              </a>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <ScrollReveal>
            <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
              Where To Stay
            </span>

            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4">
              Wake Up To The Hills
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Make your Morni Hills trip more memorable by staying close to
              nature. Choose a peaceful cottage, a comfortable resort or a
              scenic retreat for your getaway.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* STAYS */}
      <section id="stays" className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <ScrollReveal>
            <div className="mb-12">
              <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                Accommodation
              </span>

              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-3">
                Find Your Perfect Stay
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {stays.map((stay) => (
              <ScrollReveal key={stay.name}>
                <article className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-slate-700">
                      {stay.type}
                    </div>

                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-sm font-semibold">
                      {stay.price}
                      <span className="text-xs text-slate-500">
                        {" "} / night
                      </span>
                    </div>
                  </div>

                  <div className="p-6">

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {stay.name}
                      </h3>

                      <div className="flex items-center gap-1 text-sm">
                        <Star
                          size={15}
                          className="fill-current text-amber-400"
                        />
                        <span className="font-medium">4.8</span>
                      </div>
                    </div>

                    <p className="mt-3 text-slate-600 leading-7">
                      {stay.description}
                    </p>

                    <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white py-3.5 font-semibold hover:bg-emerald-600 transition">
                      View Stay
                      <ArrowRight size={17} />
                    </button>

                  </div>
                </article>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">

            <ScrollReveal>
              <div>

                <span className="text-emerald-600 font-semibold uppercase tracking-[0.2em] text-sm">
                  Comfortable & Convenient
                </span>

                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mt-4 leading-tight">
                  Everything You Need
                  <span className="block text-emerald-600">
                    For A Relaxing Stay
                  </span>
                </h2>

                <p className="mt-6 text-slate-600 text-lg leading-8">
                  Whether you're visiting for adventure or simply looking for
                  a peaceful escape, Morni offers stays designed around
                  comfort and nature.
                </p>

              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">

              {facilities.map((facility) => {
                const Icon = facility.icon;

                return (
                  <ScrollReveal key={facility.title}>
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-100 transition">

                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 mt-5">
                        {facility.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-2 leading-6">
                        {facility.text}
                      </p>

                    </div>
                  </ScrollReveal>
                );
              })}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem]">

          <img
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1800&q=85"
            alt="Peaceful mountain stay"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 py-20 px-6 text-center text-white">

            <ScrollReveal>

              <h2 className="font-serif text-4xl md:text-5xl">
                Make Morni Your Next Escape
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-white/80 text-lg">
                Find a peaceful place to stay and experience the hills at
                your own pace.
              </p>

              <a
                href="/experience"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-emerald-50 transition"
              >
                Explore Experiences
                <ArrowRight size={18} />
              </a>

            </ScrollReveal>

          </div>
        </div>
      </section>

    </main>
  );
}

export default StayPage;

