import React from "react";

import About from "../components/About";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <main className="bg-[#F5F7F2] dark:bg-[#10201C]">

        {/* ================= ABOUT HERO BANNER ================= */}
        <section className="relative h-[400px] w-full overflow-hidden md:h-[480px] lg:h-[520px]">

          {/* Background Image */}
          <img
            src="/assets/About_us.png"
            alt="About Morni Hills"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10201C]/90 via-[#10201C]/55 to-[#10201C]/20" />

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#10201C]/70 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 flex h-full items-center">

            <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">

              <div className="max-w-3xl">

                {/* Decorative Line */}
                <div className="mb-6 flex items-center gap-4">

                  <span className="h-px w-14 bg-[#D8A85B]" />

                  <span className="text-xl text-[#D8A85B]">
                    ⛰
                  </span>

                  <span className="h-px w-14 bg-[#D8A85B]" />

                </div>


                {/* Main Heading */}
                <h1 className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  About{" "}
                  <span className="text-[#9BC8B8]">
                    Morni
                  </span>
                </h1>


                {/* Subtitle */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/80 sm:text-sm">

                  <span>Nature</span>

                  <span className="text-[#D8A85B]">
                    ◆
                  </span>

                  <span>Heritage</span>

                  <span className="text-[#D8A85B]">
                    ◆
                  </span>

                  <span>Serenity</span>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= EXISTING ABOUT SECTION ================= */}

        <About />


      </main>


      {/* ================= FOOTER ================= */}

      {/* Agar Footer chahiye to uncomment karo */}

      {/* <Footer /> */}

    </>
  );
}

export default AboutPage;