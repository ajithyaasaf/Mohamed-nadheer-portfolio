"use client";

import React from "react";
import { EDITORIAL_PROCESS } from "@/data/projects";

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
      {/* Editorial Marker */}
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-muted uppercase mb-12 sm:mb-16 border-b border-subtle pb-4">
        <span className="font-bold text-display">TIMELINE METHODOLOGY</span>
        <span className="font-medium text-secondary">01 TO 04 METAPHOR</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-6xl font-bold text-display uppercase tracking-tight font-display">
          How A Scene Comes Alive
        </h2>
        <p className="mt-2 text-base text-secondary font-normal max-w-xl">
          Visual storytelling dissected into four continuous phases—from chaotic raw footage to a razor-sharp master cut.
        </p>
      </div>

      {/* Process 4-Step Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EDITORIAL_PROCESS.map((item) => (
          <div
            key={item.step}
            className="p-6 sm:p-7 bg-surface border border-visible rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-6">
                <span className="text-muted font-bold">PHASE {item.step}</span>
                <span className="pill-tag text-[10px] py-0.5 px-2.5 font-bold uppercase !bg-accent !text-white !border-accent">
                  {item.phase}
                </span>
              </div>

              <h3 className="text-xl font-bold text-display uppercase tracking-tight mb-3 font-display">
                {item.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed font-normal font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-subtle font-mono text-[11px] text-muted font-bold">
              CHECKPOINT // 24 FPS VERIFIED
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
