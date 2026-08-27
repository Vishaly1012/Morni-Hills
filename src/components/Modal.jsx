import React, { useEffect } from 'react';
import { X, MapPin, Clock, Star, Mountain, Check, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function Modal({ isOpen, onClose, data, type = 'attraction', onAction }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-morni-light dark:bg-morni-dark-card border border-morni-primary/20 dark:border-white/15 shadow-2xl z-10 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden">
          <img
            src={data.image}
            alt={data.title || data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Badges on Media */}
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {data.category && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-morni-accent text-morni-dark">
                  {data.category}
                </span>
              )}
              {data.type && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-morni-primary text-white">
                  {data.type}
                </span>
              )}
              {data.cuisine && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-morni-secondary/80 text-morni-dark">
                  {data.cuisine}
                </span>
              )}
              {data.rating && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-bold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{data.rating}</span>
                </span>
              )}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
              {data.title || data.name}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 text-morni-dark dark:text-morni-light">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-morni-dark/70 dark:text-morni-light/70 pb-4 border-b border-morni-dark/10 dark:border-white/10">
            {data.elevation && (
              <div className="flex items-center gap-1.5">
                <Mountain className="w-4 h-4 text-morni-primary dark:text-morni-secondary" />
                <span>Elevation: {data.elevation}</span>
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-morni-primary dark:text-morni-secondary" />
                <span>{data.location}</span>
              </div>
            )}
            {data.timings && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-morni-primary dark:text-morni-secondary" />
                <span>Timings: {data.timings}</span>
              </div>
            )}
            {data.entryFee && (
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-morni-accent" />
                <span>Entry: {data.entryFee}</span>
              </div>
            )}
            {data.pricePerNight && (
              <div className="flex items-center gap-1.5 text-morni-accent font-bold text-sm">
                <span>{data.pricePerNight} / night</span>
              </div>
            )}
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="font-serif text-lg font-bold text-morni-dark dark:text-white mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-morni-dark/80 dark:text-morni-light/80 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Highlights / Features list */}
          {(data.highlights || data.amenities || data.specialties) && (
            <div>
              <h3 className="font-serif text-lg font-bold text-morni-dark dark:text-white mb-3">
                {data.highlights ? 'Key Highlights' : data.amenities ? 'Included Amenities' : 'Signature Offerings'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(data.highlights || data.amenities || data.specialties).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-morni-dark/80 dark:text-morni-light/80 p-2.5 rounded-xl bg-morni-dark/5 dark:bg-white/5 border border-morni-dark/5 dark:border-white/5"
                  >
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Best Time / Tips Note */}
          {data.bestTime && (
            <div className="p-4 rounded-2xl bg-morni-accent/10 border border-morni-accent/30 text-xs sm:text-sm text-morni-dark dark:text-morni-accent-light">
              <span className="font-bold text-morni-accent-hover dark:text-morni-accent">Visitor Tip: </span>
              {data.bestTime}
            </div>
          )}

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-morni-dark/10 dark:border-white/10 flex flex-wrap items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="btn-outline-dark !py-2.5 !px-5 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onAction) onAction(data);
              }}
              className="btn-gold !py-2.5 !px-6 text-xs font-semibold flex items-center gap-2 shadow-lg"
            >
              <span>Plan This Experience</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
