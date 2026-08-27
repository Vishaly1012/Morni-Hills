import React from 'react';
import { Mountain, Instagram, Facebook, Youtube, Send, Heart, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0c1815] text-white pt-20 pb-12 border-t border-morni-secondary/15 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-morni-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-morni-primary to-morni-secondary flex items-center justify-center text-white shadow-lg">
                <Mountain className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                MORNI <span className="text-morni-accent font-sans font-light text-sm tracking-widest uppercase">HILLS</span>
              </span>
            </div>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Haryana's only hill station, nestled peacefully in the Shivalik range. Experience emerald twin lakes, historic stone forts, pine-covered ridges, and pristine mountain calmness.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
                { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
                { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.name}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-morni-primary/80 border border-white/10 hover:border-white/30 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-white/70">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, 'hero')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="hover:text-morni-accent transition-colors"
                >
                  About Morni
                </a>
              </li>
              <li>
                <a
                  href="#explore"
                  onClick={(e) => scrollToSection(e, 'explore')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Explore Attractions
                </a>
              </li>
              <li>
                <a
                  href="#tikkar-taal-feature"
                  onClick={(e) => scrollToSection(e, 'tikkar-taal-feature')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Tikkar Taal Lakes
                </a>
              </li>
              <li>
                <a
                  href="#stay"
                  onClick={(e) => scrollToSection(e, 'stay')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Resorts & Stays
                </a>
              </li>
              <li>
                <a
                  href="#eat"
                  onClick={(e) => scrollToSection(e, 'eat')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Restaurants & Cafes
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, 'gallery')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-morni-accent transition-colors"
                >
                  Plan Your Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Newsletter & Updates (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Stay in the Loop
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Subscribe for seasonal weather updates, festival schedules, trekking permits, and exclusive resort offers.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Morni Hills updates!');
              }}
              className="space-y-2.5"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-morni-accent transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-morni-primary hover:bg-morni-primary-light text-white text-xs font-semibold flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] text-white/50 block">
                No spam. Unsubscribe anytime.
              </span>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 Morni Hills. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Designed for nature explorers & travelers</span>
          </div>

          <div className="flex items-center gap-4 text-white/60">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-white transition-colors">Terms of Travel</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
