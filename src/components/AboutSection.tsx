"use client";

import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-t border-subtle">
      {/* Editorial Section Marker */}
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-muted uppercase mb-12 sm:mb-16">
        <span className="font-bold text-display">BIOGRAPHY & CRAFT</span>
        <span>MADURAI, TAMIL NADU, INDIA</span>
      </div>

      {/* Main Two-Column Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Authentic Editorial Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full bg-surface overflow-hidden rounded-xl border-2 border-visible shadow-2xl">
            <img
              src="/media/nadheer-1.png"
              alt="Mohamed Nadheer — Video Editor"
              className="w-full h-full object-cover object-top filter contrast-[1.04]"
              loading="lazy"
            />

            {/* Cinematic Camera Stamp Overlays */}
            <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-display bg-canvas/85 px-3 py-1 rounded-sm border border-subtle">
              MOHAMED NADHEER // SUITE 01
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-primary bg-canvas/90 px-3.5 py-2 border border-subtle rounded-sm">
              <span>COLOR / DAVINCI STUDIO</span>
              <span className="text-emerald-400 font-bold">STATUS: ACTIVE</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-xs text-secondary">
            <span className="flex items-center gap-1.5 font-medium text-display">
              <MapPin className="w-4 h-4 text-accent" />
              Madurai, Tamil Nadu
            </span>
            <span className="pill-tag text-xs py-0.5 px-3 text-display bg-surface border-visible">
              150+ COMPLETED PROJECTS
            </span>
          </div>
        </div>

        {/* Right Column: Statement, Philosophy & Verification */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="mb-4">
              <span className="pill-tag text-xs tracking-wider uppercase font-semibold text-display">
                // EDITORIAL PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-display uppercase tracking-[-0.03em] leading-tight mb-8">
              "I work with motion, rhythm, and image to turn raw footage into stories."
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-body font-light leading-relaxed">
              <p>
                Based in the cultural heart of Madurai, Tamil Nadu, I approach video editing as musical composition. The pacing of a cut dictates how an audience feels, breathes, and remembers.
              </p>
              <p>
                In my first year of focused post-production, I have cut over <span className="text-display font-semibold underline decoration-accent underline-offset-4">150+ individual projects</span>—ranging from rapid-fire 9:16 Instagram Reels designed for viral retention to long-form cinematic narratives, corporate brand films, and emotional wedding cinema.
              </p>
              <p className="text-sm sm:text-base text-muted">
                Every timeline is built with structural intention: dialogue cleaned, color graded for filmic tone curve, and sound effects sculpted to immerse the viewer without visual clutter.
              </p>
            </div>
          </div>

          {/* Quick Verified Metrics Grid */}
          <div className="mt-10 pt-8 border-t border-subtle grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono">
            <div className="bg-surface p-5 rounded-xl border border-subtle shadow-md">
              <span className="text-3xl sm:text-4xl text-accent font-bold block">
                150+
              </span>
              <span className="text-xs text-secondary font-semibold tracking-wider uppercase mt-1 block">
                Edits Delivered
              </span>
            </div>

            <div className="bg-surface p-5 rounded-xl border border-subtle shadow-md">
              <span className="text-3xl sm:text-4xl text-display font-bold block">
                1 YEAR
              </span>
              <span className="text-xs text-secondary font-semibold tracking-wider uppercase mt-1 block">
                Focused Practice
              </span>
            </div>

            <div className="bg-surface p-5 rounded-xl border border-subtle shadow-md">
              <span className="text-3xl sm:text-4xl text-display font-bold block">
                100%
              </span>
              <span className="text-xs text-secondary font-semibold tracking-wider uppercase mt-1 block">
                Authentic Craft
              </span>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:nadheeransari24@gmail.com"
              className="btn-pill-red text-xs py-3 px-6 uppercase tracking-wider font-semibold"
            >
              <span>INQUIRE FOR POST-PRODUCTION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919042050028"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline text-xs py-3 px-6 uppercase tracking-wider font-semibold"
            >
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
