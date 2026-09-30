"use client";

import React from "react";
import { ArrowDown, Film, Play } from "lucide-react";

export default function Hero() {
  const tools = ["Premiere Pro", "DaVinci Resolve", "CapCut Pro", "Blender 3D"];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 sm:pt-40 pb-14 px-6 sm:px-10 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Top Editorial Metadata Line */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-wider text-muted border-b border-subtle pb-5">
        <div className="flex items-center gap-2">
          <Film className="w-3.5 h-3.5 text-accent" />
          <span className="font-bold text-display">PORTFOLIO</span>
          <span>// POST-PRODUCTION SPECIFICATION</span>
        </div>
        <div className="flex items-center gap-5 text-secondary">
          <span className="hidden sm:inline">24.00 FPS / 4K DCI</span>
          <span>MADURAI, TN [ 09°55'N 78°07'E ]</span>
        </div>
      </div>

      {/* Main Monumental Editorial Centerpiece */}
      <div className="my-auto py-10 sm:py-16">
        <div className="max-w-5xl">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="pill-tag text-xs tracking-wider uppercase font-semibold text-display">
              // VIDEO EDITOR & CREATIVE DIRECTOR
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-light tracking-[-0.04em] leading-[0.9] text-display uppercase select-none">
            <span className="block font-medium text-display">Mohamed</span>
            <span className="block text-body font-light">Nadheer</span>
          </h1>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p className="text-xl sm:text-2xl text-primary font-light leading-snug tracking-tight">
                Editing stories through rhythm, motion, and image. Turning raw, unstructured footage into tight cinematic sequences that command attention.
              </p>

              {/* Reference-Style Software Pill Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="pill-tag text-xs py-1 px-3.5 text-display bg-surface-elevated hover:bg-white hover:text-black"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3 font-mono text-xs bg-surface p-5 border border-subtle rounded-xl shadow-lg">
              <div className="flex items-center justify-between border-b border-subtle pb-2.5">
                <span className="text-muted font-medium">VOLUME</span>
                <span className="text-accent font-bold text-sm">150+ PROJECTS CUT</span>
              </div>
              <div className="flex items-center justify-between border-b border-subtle pb-2.5">
                <span className="text-muted font-medium">EXPERIENCE</span>
                <span className="text-display font-semibold">1 YEAR CONCENTRATED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted font-medium">SPECIALTIES</span>
                <span className="text-display font-semibold">REELS · CINEMA · COMMERCIAL</span>
              </div>
            </div>
          </div>

          {/* Reference-Style CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#showreel"
              className="btn-pill-red text-sm"
              data-cursor="PLAY"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH 2026 SHOWREEL</span>
            </a>

            <a
              href="#work"
              className="btn-pill-outline text-sm"
              data-cursor="WORK"
            >
              <span>EXPLORE SELECTED WORK (150+)</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Cue */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-subtle text-xs font-mono text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-display font-medium">COMMISSIONS OPEN FOR 2026</span>
        </div>

        <div className="flex items-center gap-4 text-secondary">
          <span>SCROLL DOWN FOR MASTER REELS</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-accent" />
        </div>
      </div>
    </section>
  );
}
