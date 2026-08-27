import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Top Header Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold">
          <Camera className="w-3.5 h-3.5 text-morni-accent" />
          <span>
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div className="relative z-10 max-w-5xl max-h-[80vh] flex flex-col items-center justify-center select-none">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10 animate-scaleUp"
        />

        {/* Caption & Location Bottom */}
        <div className="mt-4 text-center text-white space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            {currentImage.title}
          </h3>
          <div className="flex items-center justify-center gap-2 text-xs text-white/70">
            <MapPin className="w-3.5 h-3.5 text-morni-accent" />
            <span>{currentImage.location}</span>
            <span>•</span>
            <span className="text-morni-secondary font-semibold uppercase tracking-wider">
              {currentImage.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
