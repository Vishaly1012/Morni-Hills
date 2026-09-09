
import React from "react";
import {
  Mountain,
  Instagram,
  Facebook,
  Youtube,
  Send,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      const topOffset =
        element.getBoundingClientRect().top + window.pageYOffset - 80;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  const links = [
    ["Home", "hero"],
    ["About", "about"],
    ["Explore", "explore"],
    ["Tikkar Taal", "tikkar-taal-feature"],
    ["Stay", "stay"],
    ["Eat", "eat"],
    ["Gallery", "gallery"],
    ["Plan Your Visit", "contact"],
  ];

  return (
    <footer className="relative overflow-hidden text-white bg-[#101c2b]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#102a32] via-[#101c2b] to-[#182033]" />

      {/* Soft Ambient Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-72 rounded-full bg-teal-400/10 blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-96 h-72 rounded-full bg-emerald-400/10 blur-[100px]" />

      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-300/70 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 py-14">

          {/* BRAND */}

          <div className="lg:col-span-5">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                <Mountain className="w-5 h-5 text-white" />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold tracking-wider">
                  MORNI
                </h2>

                <p className="text-[9px] tracking-[0.4em] text-teal-300">
                  HILLS
                </p>
              </div>

            </div>

            <p className="text-sm text-slate-300/70 leading-relaxed max-w-md">
              Discover the peaceful beauty of Haryana's hill station —
              surrounded by forests, lakes, mountain trails and timeless
              landscapes.
            </p>

            {/* Location */}

            <div className="flex items-center gap-3 mt-6 text-sm text-slate-300/70">

              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-teal-300" />
              </div>

              <span>
                Morni Hills, Panchkula, Haryana
              </span>

            </div>

            {/* Social */}

            <div className="flex gap-2.5 mt-6">

              {[
                [Instagram, "Instagram", "https://instagram.com"],
                [Facebook, "Facebook", "https://facebook.com"],
                [Youtube, "YouTube", "https://youtube.com"],
              ].map(([Icon, name, href]) => (

                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300/60 hover:text-white hover:bg-teal-500/20 hover:border-teal-300/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>

              ))}

            </div>

          </div>


          {/* EXPLORE */}

          <div className="lg:col-span-3">

            <h3 className="font-serif text-lg font-bold mb-5">
              Explore
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3">

              {links.map(([label, id]) => (

                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className="group flex items-center gap-1.5 text-sm text-slate-300/60 hover:text-teal-300 transition-colors"
                >
                  {label}

                  <ArrowUpRight
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>

              ))}

            </div>

          </div>


          {/* NEWSLETTER */}

          <div className="lg:col-span-4">

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">

              <div className="flex items-center gap-2 mb-3">

                <div className="w-8 h-8 rounded-lg bg-teal-400/10 flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 text-teal-300" />
                </div>

                <h3 className="font-serif text-lg font-bold">
                  Stay Connected
                </h3>

              </div>

              <p className="text-xs text-slate-300/60 leading-relaxed mb-4">
                Get travel inspiration and useful updates from Morni Hills.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing!");
                }}
              >

                <div className="flex p-1 rounded-xl bg-white/5 border border-white/10 focus-within:border-teal-300/40">

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 bg-transparent px-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none"
                  />

                  <button
                    type="submit"
                    className="w-9 h-9 rounded-lg bg-teal-500 hover:bg-teal-400 flex items-center justify-center transition-all duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>

                </div>

              </form>

              <p className="text-[10px] text-slate-400/50 mt-2">
                No spam. Only useful travel updates.
              </p>

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


        {/* BOTTOM BAR */}

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400/60">

          <p>
            © 2026 Morni Hills. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made for nature lovers
            <Heart className="w-3 h-3 text-teal-300 fill-current" />
          </p>

          <div className="flex gap-4">
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              Privacy
            </a>

            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

