"use client";

import React from "react";
import { ArrowDown, Film, Play } from "lucide-react";
import SoftwareIcon from "./SoftwareIcon";

export default function Hero() {
  const tools = ["Premiere Pro", "DaVinci Resolve", "CapCut Pro", "Blender 3D"];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 sm:pt-40 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Top Editorial Metadata Line */}
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs tracking-wider text-muted border-b border-subtle pb-4 sm:pb-5">
        <div className="flex items-center gap-2">
          <Film className="w-3.5 h-3.5 text-accent" />
          <span className="font-bold text-display">PORTFOLIO</span>
          <span className="hidden xs:inline">// SPECIFICATION</span>
        </div>
        <div className="flex items-center gap-4 text-secondary font-medium text-[11px] sm:text-xs">
          <span className="hidden sm:inline">24.00 FPS / 4K DCI</span>
          <span>MADURAI, TN [ 09°55'N ]</span>
        </div>
      </div>

      {/* Main Monumental Editorial Centerpiece */}
      <div className="my-auto py-8 sm:py-16">
        <div className="max-w-5xl">
          <div className="inline-block mb-3 sm:mb-6">
            <span className="pill-tag text-[11px] sm:text-xs tracking-wider uppercase font-bold text-display bg-surface border-visible">
              // VIDEO EDITOR & CREATIVE DIRECTOR
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-[-0.04em] leading-[0.92] sm:leading-[0.9] text-display uppercase select-none font-display">
            <span className="block font-extrabold text-display">Mohamed</span>
            <span className="block text-primary font-medium">Nadheer</span>
          </h1>

          <div className="mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="md:col-span-7">
              <p className="text-lg sm:text-2xl text-primary font-normal leading-snug tracking-tight">
                Editing stories through rhythm, motion, and image. Turning raw, unstructured footage into tight cinematic sequences that command attention.
              </p>

              {/* Reference-Style Software Pill Badges (Sampled from Reference "STACK") */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="pill-tag text-[11px] sm:text-xs py-1 px-3 sm:px-3.5 font-bold text-display bg-surface-elevated hover:bg-primary hover:text-canvas flex items-center gap-1.5"
                  >
                    <SoftwareIcon name={tool} className="w-3.5 h-3.5 shrink-0 rounded-xs" />
                    <span>{tool}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3 font-mono text-xs bg-surface p-4 sm:p-5 border border-visible rounded-xl shadow-md">
              <div className="flex items-center justify-between border-b border-subtle pb-2">
                <span className="text-muted font-bold">VOLUME</span>
                <span className="text-accent font-bold text-sm">50+ PROJECTS CUT</span>
              </div>
              <div className="flex items-center justify-between border-b border-subtle pb-2">
                <span className="text-muted font-bold">EXPERIENCE</span>
                <span className="text-display font-bold">1 YEAR CONCENTRATED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted font-bold">SPECIALTIES</span>
                <span className="text-display font-bold text-[11px] sm:text-xs">REELS · CINEMA · COMMERCIAL</span>
              </div>
            </div>
          </div>

          {/* Reference-Style CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#showreel"
              className="btn-pill-red text-sm justify-center"
              data-cursor="PLAY"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH 2026 SHOWREEL</span>
            </a>

            <a
              href="#work"
              className="btn-pill-outline text-sm justify-center"
              data-cursor="WORK"
            >
              <span>EXPLORE SELECTED WORK (50+)</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Cue */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-subtle text-xs font-mono text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-display font-bold">COMMISSIONS OPEN FOR 2026</span>
        </div>
        <div className="flex items-center gap-4 text-secondary font-medium">
          <span>STATUS: POST-PRODUCTION ACTIVE</span>
          <span className="hidden sm:inline">TAMIL NADU, INDIA</span>
        </div>
      </div>
    </section>
  );
}
