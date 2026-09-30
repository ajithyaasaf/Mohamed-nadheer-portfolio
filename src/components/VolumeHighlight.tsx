"use client";

import React from "react";

export default function VolumeHighlight() {
  return (
    <section className="py-20 sm:py-28 bg-surface border-y border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
          {/* Monumental Typographic Number */}
          <div className="flex flex-col">
            <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold mb-2">
              POST-PRODUCTION VOLUME
            </span>
            <div className="text-7xl sm:text-9xl lg:text-[10rem] font-bold tracking-[-0.05em] text-display leading-none select-none">
              150+
            </div>
            <span className="font-mono text-base sm:text-xl tracking-wider text-body uppercase mt-3 font-semibold">
              Projects Cut & Delivered
            </span>
          </div>

          {/* Editorial Philosophy Statement */}
          <div className="max-w-xl md:border-l-2 md:border-subtle md:pl-8 space-y-4">
            <p className="text-xl sm:text-2xl text-body font-light leading-relaxed">
              Every single project—from high-energy 30-second vertical reels to multi-camera wedding ceremonies and commercial films—is treated as an exercise in timing, emotional precision, and audio-visual synergy.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="pill-tag text-xs font-semibold text-display bg-surface-elevated border-visible">
                1 Year Focused Output
              </span>
              <span className="pill-tag text-xs font-semibold text-display bg-surface-elevated border-visible">
                Madurai & Worldwide Remote
              </span>
              <span className="pill-tag text-xs font-semibold text-display bg-surface-elevated border-visible">
                Zero Narrative Filler
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
