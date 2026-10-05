import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main
      className="
        min-h-screen
        bg-[#f8f7f3]
        text-slate-900
        dark:bg-morni-dark
        dark:text-white
        transition-colors
        duration-300
      "
    >

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#eaf0e9]
          dark:bg-[#132822]
          transition-colors
          duration-300
        "
      >

        {/* Decorative circles */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-emerald-100/70
            dark:bg-emerald-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-96
            w-96
            rounded-full
            bg-amber-100/70
            dark:bg-amber-500/10
            blur-3xl
          "
        />


        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <ScrollReveal>

            <div className="max-w-4xl">

              {/* Label */}

              <div className="mb-6 flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    dark:bg-white/10
                    shadow-sm
                    dark:shadow-black/20
                  "
                >

                  <Mail
                    size={18}
                    className="text-emerald-700 dark:text-emerald-400"
                  />

                </span>


                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">

                  Get in touch

                </span>

              </div>


              {/* Heading */}

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

                Let's talk

                <span className="block font-serif italic text-emerald-700 dark:text-emerald-400">

                  Morni.

                </span>

              </h1>


              {/* Description */}

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-white/65 sm:text-lg">

                Planning a trip to Morni Hills? Have a question about
                attractions, experiences or places to stay? We'd love to
                hear from you.

              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:px-8
          lg:px-12
          lg:py-24
        "
      >

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">


          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}

          <ScrollReveal>

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">

                Contact information

              </p>


              <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">

                We're here to help.

              </h2>


              <p className="mt-5 max-w-lg leading-7 text-slate-600 dark:text-white/60">

                Whether you're looking for travel information, planning a
                weekend escape or simply want to know more about Morni Hills,
                send us a message.

              </p>


              {/* =================================================
                  CONTACT CARDS
              ================================================= */}

              <div className="mt-10 space-y-4">


                {/* LOCATION */}

                <div
                  className="
                    group flex
                    gap-5
                    rounded-3xl
                    bg-white
                    dark:bg-white/[0.05]
                    p-6
                    shadow-sm
                    dark:shadow-black/20
                    ring-1
                    ring-slate-200
                    dark:ring-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-50
                      dark:bg-emerald-500/10
                      text-emerald-700
                      dark:text-emerald-400
                      transition
                      group-hover:bg-emerald-700
                      group-hover:text-white
                      dark:group-hover:bg-emerald-500
                    "
                  >

                    <MapPin size={21} />

                  </div>


                  <div>

                    <p className="text-sm font-semibold text-slate-500 dark:text-white/45">

                      Location

                    </p>

                    <h3 className="mt-1 font-bold text-slate-900 dark:text-white">

                      Morni Hills, Panchkula

                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">

                      Haryana, India

                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <div
                  className="
                    group
                    flex
                    gap-5
                    rounded-3xl
                    bg-white
                    dark:bg-white/[0.05]
                    p-6
                    shadow-sm
                    dark:shadow-black/20
                    ring-1
                    ring-slate-200
                    dark:ring-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-50
                      dark:bg-emerald-500/10
                      text-emerald-700
                      dark:text-emerald-400
                      transition
                      group-hover:bg-emerald-700
                      group-hover:text-white
                      dark:group-hover:bg-emerald-500
                    "
                  >

                    <Phone size={21} />

                  </div>


                  <div>

                    <p className="text-sm font-semibold text-slate-500 dark:text-white/45">

                      Phone

                    </p>

                    <h3 className="mt-1 font-bold text-slate-900 dark:text-white">

                      +91 00000 00000

                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">

                      Mon – Sun

                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div
                  className="
                    group
                    flex
                    gap-5
                    rounded-3xl
                    bg-white
                    dark:bg-white/[0.05]
                    p-6
                    shadow-sm
                    dark:shadow-black/20
                    ring-1
                    ring-slate-200
                    dark:ring-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-50
                      dark:bg-emerald-500/10
                      text-emerald-700
                      dark:text-emerald-400
                      transition
                      group-hover:bg-emerald-700
                      group-hover:text-white
                      dark:group-hover:bg-emerald-500
                    "
                  >

                    <Mail size={21} />

                  </div>


                  <div>

                    <p className="text-sm font-semibold text-slate-500 dark:text-white/45">

                      Email

                    </p>

                    <h3 className="mt-1 break-all font-bold text-slate-900 dark:text-white">

                      hello@mornihills.com

                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">

                      We usually reply within 24 hours

                    </p>

                  </div>

                </div>


                {/* AVAILABILITY */}

                <div
                  className="
                    group
                    flex
                    gap-5
                    rounded-3xl
                    bg-white
                    dark:bg-white/[0.05]
                    p-6
                    shadow-sm
                    dark:shadow-black/20
                    ring-1
                    ring-slate-200
                    dark:ring-white/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-amber-50
                      dark:bg-amber-500/10
                      text-amber-700
                      dark:text-amber-400
                      transition
                      group-hover:bg-amber-500
                      group-hover:text-white
                    "
                  >

                    <Clock size={21} />

                  </div>


                  <div>

                    <p className="text-sm font-semibold text-slate-500 dark:text-white/45">

                      Availability

                    </p>

                    <h3 className="mt-1 font-bold text-slate-900 dark:text-white">

                      09:00 AM – 06:00 PM

                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">

                      Every day

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </ScrollReveal>


          {/* =====================================================
              CONTACT FORM
          ===================================================== */}

          <ScrollReveal>

            <div
              className="
                rounded-[32px]
                bg-white
                dark:bg-white/[0.05]
                p-6
                shadow-xl
                shadow-slate-200/50
                dark:shadow-black/30
                ring-1
                ring-slate-200
                dark:ring-white/10
                sm:p-8
                lg:p-10
                transition-colors
                duration-300
              "
            >

              <div className="mb-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">

                  Send a message

                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">

                  How can we help?

                </h2>

              </div>


              {/* =================================================
                  SUCCESS MESSAGE
              ================================================= */}

              {submitted && (

                <div
                  className="
                    mb-6
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    bg-emerald-50
                    dark:bg-emerald-500/10
                    p-4
                    text-emerald-800
                    dark:text-emerald-300
                  "
                >

                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0"
                  />

                  <div>

                    <p className="font-bold">

                      Message sent successfully!

                    </p>

                    <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-400">

                      Thank you for contacting us. We'll get back to you soon.

                    </p>

                  </div>

                </div>

              )}


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                    >

                      Your name

                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        dark:border-white/10
                        bg-slate-50
                        dark:bg-white/[0.04]
                        px-5
                        py-4
                        text-sm
                        text-slate-900
                        dark:text-white
                        placeholder:text-slate-400
                        dark:placeholder:text-white/35
                        outline-none
                        transition
                        focus:border-emerald-600
                        dark:focus:border-emerald-400
                        focus:bg-white
                        dark:focus:bg-white/[0.07]
                        focus:ring-4
                        focus:ring-emerald-100
                        dark:focus:ring-emerald-500/10
                      "
                    />

                  </div>


                  {/* EMAIL */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                    >

                      Email address

                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        dark:border-white/10
                        bg-slate-50
                        dark:bg-white/[0.04]
                        px-5
                        py-4
                        text-sm
                        text-slate-900
                        dark:text-white
                        placeholder:text-slate-400
                        dark:placeholder:text-white/35
                        outline-none
                        transition
                        focus:border-emerald-600
                        dark:focus:border-emerald-400
                        focus:bg-white
                        dark:focus:bg-white/[0.07]
                        focus:ring-4
                        focus:ring-emerald-100
                        dark:focus:ring-emerald-500/10
                      "
                    />

                  </div>

                </div>


                {/* SUBJECT */}

                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                  >

                    Subject

                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to know?"
                    required
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-slate-50
                      dark:bg-white/[0.04]
                      px-5
                      py-4
                      text-sm
                      text-slate-900
                      dark:text-white
                      placeholder:text-slate-400
                      dark:placeholder:text-white/35
                      outline-none
                      transition
                      focus:border-emerald-600
                      dark:focus:border-emerald-400
                      focus:bg-white
                      dark:focus:bg-white/[0.07]
                      focus:ring-4
                      focus:ring-emerald-100
                      dark:focus:ring-emerald-500/10
                    "
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-white/80"
                  >

                    Message

                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                    className="
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-slate-200
                      dark:border-white/10
                      bg-slate-50
                      dark:bg-white/[0.04]
                      px-5
                      py-4
                      text-sm
                      text-slate-900
                      dark:text-white
                      placeholder:text-slate-400
                      dark:placeholder:text-white/35
                      outline-none
                      transition
                      focus:border-emerald-600
                      dark:focus:border-emerald-400
                      focus:bg-white
                      dark:focus:bg-white/[0.07]
                      focus:ring-4
                      focus:ring-emerald-100
                      dark:focus:ring-emerald-500/10
                    "
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-emerald-700
                    px-6
                    py-4
                    font-bold
                    text-white
                    shadow-lg
                    shadow-emerald-700/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-emerald-800
                    hover:shadow-xl
                    dark:bg-emerald-600
                    dark:hover:bg-emerald-500
                  "
                >

                  Send Message

                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </form>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =========================================================
          MAP / DISCOVER SECTION
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">

        <ScrollReveal>

          <div className="relative overflow-hidden rounded-[32px] bg-slate-200 dark:bg-slate-900">

            {/* Background Image */}

            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85"
              alt="Morni Hills landscape"
              className="h-[420px] w-full object-cover"
            />


            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />


            {/* Content */}

            <div className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-16">

              <div className="max-w-xl text-white">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">

                  <MapPin size={22} />

                </div>


                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">

                  Find your way

                </p>


                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">

                  Your Morni adventure starts here.

                </h2>


                <p className="mt-5 leading-7 text-white/80">

                  Discover peaceful lakes, forest trails, viewpoints and
                  unforgettable experiences across the hills.

                </p>


                <a
                  href="/explore"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    rounded-full
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-slate-900
                    transition
                    hover:-translate-y-1
                    hover:bg-emerald-50
                  "
                >

                  Explore Morni

                  <ArrowRight size={17} className="ml-2" />

                </a>

              </div>

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        className="
          bg-[#eaf0e9]
          dark:bg-[#132822]
          transition-colors
          duration-300
        "
      >

        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <ScrollReveal>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">

              Still planning?

            </p>


            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">

              Discover everything Morni has to offer.

            </h2>


            <a
              href="/experience"
              className="
                mt-7
                inline-flex
                items-center
                rounded-full
                bg-emerald-700
                px-7
                py-4
                text-sm
                font-bold
                text-white
                shadow-lg
                transition
                hover:-translate-y-1
                hover:bg-emerald-800
                dark:bg-emerald-600
                dark:hover:bg-emerald-500
              "
            >

              Explore Experiences

              <ArrowRight size={18} className="ml-2" />

            </a>

          </ScrollReveal>

        </div>

      </section>

    </main>
  );
}

export default ContactPage;
