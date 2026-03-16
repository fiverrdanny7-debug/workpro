import { motion } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="py-24 bg-neutral-light relative" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6">
            Real Results, Fast.
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto text-lg">
            Witness the transformation. Our clinical trials show a 94% improvement in skin hydration and a 82% reduction in fine lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Slider */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden cursor-ew-resize shadow-glass"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Base) */}
            <img 
              src="https://picsum.photos/seed/after/800/800" 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              After 4 Weeks
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://picsum.photos/seed/before/800/800?grayscale" 
                alt="Before" 
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100vw', maxWidth: containerRef.current?.offsetWidth || '100%' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                Day 1
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Testimonials & Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-neutral-light">
                <div className="text-4xl font-heading font-bold text-primary mb-2">+94%</div>
                <div className="text-secondary/80 font-medium">Skin Hydration</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-neutral-light">
                <div className="text-4xl font-heading font-bold text-primary mb-2">-82%</div>
                <div className="text-secondary/80 font-medium">Fine Lines</div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-glass relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-heading">"</div>
              <div className="flex items-center gap-4 mb-6">
                <img src="https://picsum.photos/seed/user5/100/100" alt="Sarah" className="w-14 h-14 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-secondary">Sarah Jenkins</h4>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-secondary/80 italic text-lg leading-relaxed">
                "I've tried every luxury serum on the market. PROWOK is the only one that delivered visible results in just a week. My skin has never looked this radiant and plump. It's truly beauty-tech."
              </p>
              <div className="mt-4 text-sm font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> Verified Buyer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
