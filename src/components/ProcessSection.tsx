"use client";

import React from "react";
import { EDITORIAL_PROCESS } from "@/data/projects";

export default function ProcessSection() {
  return (
    <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
      {/* Editorial Marker */}
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-muted uppercase mb-12 sm:mb-16 border-b border-subtle pb-4">
        <span className="font-bold text-display">TIMELINE METHODOLOGY</span>
        <span>01 TO 04 METAPHOR</span>
      </div>

      <div className="mb-12">
        <h2 className="text-4xl sm:text-6xl font-light text-display uppercase tracking-tight">
          How A Scene Comes Alive
        </h2>
        <p className="mt-2 text-base text-secondary font-light max-w-xl">
          Visual storytelling dissected into four continuous phases—from chaotic raw footage to a razor-sharp master cut.
        </p>
      </div>

      {/* Process 4-Step Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {EDITORIAL_PROCESS.map((item) => (
          <div
            key={item.step}
            className="p-6 sm:p-7 bg-surface border border-subtle rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-6">
                <span className="text-muted font-semibold">PHASE {item.step}</span>
                <span className="pill-tag text-[10px] py-0.5 px-2.5 font-bold uppercase !bg-accent !text-display !border-accent">
                  {item.phase}
                </span>
              </div>

              <h3 className="text-xl font-medium text-display uppercase tracking-tight mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-secondary leading-relaxed font-light font-sans">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-subtle font-mono text-[11px] text-muted font-semibold">
              CHECKPOINT // 24 FPS VERIFIED
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
