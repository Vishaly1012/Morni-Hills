import React, { useState } from "react";
import { MORNI_DATA } from "../data/morniData";
import {cssData} from "./cssData.js"

import {
  Calendar,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users,
  Calculator,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Sun,
} from "lucide-react";

export default function Contact({ prefilledStay }) {
  const { contactInfo, faqs } = MORNI_DATA;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    peopleCount: "2",
    stayType: prefilledStay || "Luxury Eco-Resort",
    interests: "Nature & Trekking",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Trip Cost Estimator State
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(2);
  const [tier, setTier] = useState("comfort"); // 'budget', 'comfort', 'luxury'

  const calculateEstimate = () => {
    const ratePerPersonPerDay = {
      budget: 1800,
      comfort: 3500,
      luxury: 6500,
    };
    return (travelers * days * ratePerPersonPerDay[tier]).toLocaleString(
      "en-IN",
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-${cssData.py} md:py-${cssData.md_py} relative bg-morni-light dark:bg-morni-dark transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary border border-morni-primary/20 text-xs font-semibold tracking-wider uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>CUSTOMIZED TRAVEL PLANNER</span>
          </div>

          <h2 className="heading-section mb-4">
            Plan Your{" "}
            <span className="italic text-morni-primary dark:text-morni-secondary">
              Morni Escape
            </span>
          </h2>

          <p className="subheading-section">
            Let our local tourism specialists assist you with resort
            reservations, guided lake safaris, nature treks, and custom
            itineraries.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Planner Form */}
          <div className="lg:col-span-7 bg-gradient-to-br from-morni-primary/10 via-white to-morni-accent/10 dark:from-morni-dark-card dark:to-morni-dark rounded-3xl p-8 sm:p-10 border border-morni-primary/20 dark:border-white/10 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-morni-dark dark:text-white">
                  Trip Request Received!
                </h3>
                <p className="text-sm sm:text-base text-morni-dark/70 dark:text-morni-light/70 max-w-md mx-auto">
                  Thank you,{" "}
                  <span className="font-semibold text-morni-primary dark:text-morni-secondary">
                    {formData.name || "Traveler"}
                  </span>
                  ! Our Morni Hills tourism concierge will contact you at{" "}
                  <span className="font-semibold">
                    {formData.phone || formData.email}
                  </span>{" "}
                  within 4 hours with your personalized travel itinerary.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-outline-dark !mt-6 text-xs font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="aarav@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    />
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      required
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    />
                  </div>

                  {/* Number of People */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Guests Count
                    </label>
                    <select
                      name="peopleCount"
                      value={formData.peopleCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    >
                      <option value="1">1 Solo Traveler</option>
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="3-5">3–5 Family / Friends</option>
                      <option value="6-10">6–10 Group Tour</option>
                      <option value="10+">10+ Corporate / Retreat</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Stay */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Stay Preference
                    </label>
                    <select
                      name="stayType"
                      value={formData.stayType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    >
                      <option value="Luxury Eco-Resort">
                        Luxury Shivalik Eco-Resort
                      </option>
                      <option value="Lakeside Glamping">
                        Tikkar Taal Lakeside Glamping Dome
                      </option>
                      <option value="Heritage Stone Cottage">
                        Royal Kotaha Heritage Cottage
                      </option>
                      <option value="Canopy Treehouse">
                        Pine Valley Treehouse Haven
                      </option>
                      <option value="Day Trip Only">
                        Day Trip Only (No Stay)
                      </option>
                    </select>
                  </div>

                  {/* Primary Interest */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                      Primary Interest
                    </label>
                    <select
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                    >
                      <option value="Nature & Trekking">
                        Nature Trails & Karoh Trek
                      </option>
                      <option value="Tikkar Taal & Boating">
                        Tikkar Taal Watersports & Boating
                      </option>
                      <option value="Heritage & Photography">
                        Morni Fort & Ancient Temples
                      </option>
                      <option value="Relaxation & Spa">
                        Peaceful Staycation & Wellness
                      </option>
                      <option value="Adventure Sports">
                        Ziplining & Obstacle Courses
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 mb-2">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Tell us about special dietary needs, bonfire setups, guide requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-morni-light dark:bg-morni-dark border border-morni-dark/15 dark:border-white/10 text-sm text-morni-dark dark:text-white focus:outline-none focus:border-morni-primary dark:focus:border-morni-secondary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Planning</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Interactive Cost Estimator & Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Interactive Trip Cost Calculator Widget */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-morni-primary/10 via-white to-morni-accent/10 dark:from-morni-dark-card dark:to-morni-dark border border-morni-primary/20 dark:border-white/10 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-morni-primary dark:text-morni-secondary mb-4">
                <Calculator className="w-4 h-4" />
                <span>Instant Trip Budget Estimator</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-morni-dark/80 dark:text-morni-light/80 mb-1">
                    <span>Travelers: {travelers} Persons</span>
                    <span className="font-bold">{travelers} Guests</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full accent-morni-primary cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-morni-dark/80 dark:text-morni-light/80 mb-1">
                    <span>Duration: {days} Days</span>
                    <span className="font-bold">
                      {days} Days / {days - 1} Nights
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value))}
                    className="w-full accent-morni-primary cursor-pointer"
                  />
                </div>

                <div>
                  <div className="text-xs font-medium text-morni-dark/80 dark:text-morni-light/80 mb-2">
                    Style:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "budget", label: "Budget" },
                      { id: "comfort", label: "Comfort" },
                      { id: "luxury", label: "Luxury" },
                    ].map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTier(t.id)}
                        className={`py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                          tier === t.id
                            ? "bg-morni-primary text-white border-morni-primary dark:bg-morni-accent dark:text-morni-dark dark:border-morni-accent"
                            : "bg-white dark:bg-morni-dark border-morni-dark/15 dark:border-white/10 text-morni-dark/70 dark:text-morni-light/70"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-morni-dark/60 dark:text-morni-light/60">
                    Est. Total Package
                  </span>
                  <span className="font-serif text-2xl font-bold text-morni-primary dark:text-morni-accent">
                    ₹{calculateEstimate()}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Information Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-morni-dark/50 dark:text-morni-light/50">
                    Visitor Center
                  </div>
                  <div className="text-sm font-medium text-morni-dark/90 dark:text-white mt-0.5">
                    {contactInfo.address}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-morni-dark-card border border-morni-dark/10 dark:border-white/10 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-morni-primary/10 dark:bg-morni-secondary/20 text-morni-primary dark:text-morni-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-morni-dark/50 dark:text-morni-light/50">
                    Inquiry Helpline
                  </div>
                  <div className="text-sm font-medium text-morni-dark/90 dark:text-white mt-0.5">
                    {contactInfo.phone}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                    Emergency Helpline: {contactInfo.emergency}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs Accordion */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-morni-dark/70 dark:text-morni-light/70 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-morni-accent" />
                  <span>Frequently Asked Questions</span>
                </h4>
                <span className="text-[10px] text-morni-dark/50 dark:text-morni-light/50 font-medium">
                  {faqs.length} Essential Answers
                </span>
              </div>

              <div className="space-y-2.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                        isOpen
                          ? "bg-white dark:bg-morni-dark-card border-morni-primary/40 dark:border-morni-secondary/40 shadow-lg shadow-morni-primary/5"
                          : "bg-white/80 dark:bg-morni-dark-card/60 border-morni-dark/10 dark:border-white/10 hover:border-morni-primary/25 hover:bg-white dark:hover:bg-morni-dark-card"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-morni-dark dark:text-white cursor-pointer group active:scale-[0.995] transition-transform duration-200"
                      >
                        <span
                          className={`transition-colors duration-300 ${isOpen ? "text-morni-primary dark:text-morni-secondary" : "group-hover:text-morni-primary dark:group-hover:text-morni-secondary"}`}
                        >
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen
                              ? "bg-morni-accent/20 text-morni-accent rotate-180 scale-105"
                              : "bg-morni-dark/5 dark:bg-white/5 text-morni-dark/50 dark:text-white/50 group-hover:bg-morni-primary/10 group-hover:text-morni-primary"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        </div>
                      </button>

                      {/* Silky-Smooth CSS Grid Animation for Height with Cascading Slide-Fade */}
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[grid-template-rows,opacity] ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className={`px-4 pb-4 pt-1.5 text-xs sm:text-[13px] text-morni-dark/80 dark:text-morni-light/80 leading-relaxed border-t border-morni-dark/5 dark:border-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isOpen
                                ? "translate-y-0 opacity-100"
                                : "-translate-y-2 opacity-0"
                            }`}
                          >
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
