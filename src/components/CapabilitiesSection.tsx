"use client";

import React from "react";
import { CAPABILITIES } from "@/data/projects";
import { Check } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full border-t border-subtle">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-subtle pb-8 mb-12 sm:mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-1">
            TECHNICAL REPERTOIRE // DISCIPLINES
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-display uppercase font-display">
            Capabilities & Software
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm font-mono text-secondary font-medium">
          No arbitrary percentage bars. Battle-tested workflows across commercial post-production.
        </p>
      </div>

      {/* Editorial Grouped Capabilities List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {CAPABILITIES.map((group, groupIdx) => (
          <div key={group.category} className="bg-surface p-6 sm:p-8 rounded-xl border border-visible flex flex-col justify-between shadow-sm hover:border-accent transition-colors">
            <div>
              <div className="border-b border-subtle pb-4 mb-6 flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider text-display uppercase font-bold">
                  {group.category}
                </span>
                <span className="pill-tag text-[10px] py-0.5 px-2.5 font-bold text-body bg-surface-elevated border-visible">
                  0{groupIdx + 1}
                </span>
              </div>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.name} className="group">
                    <h3 className="text-base sm:text-lg font-bold text-display group-hover:text-accent transition-colors flex items-baseline gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span>{item.name}</span>
                    </h3>
                    <p className="text-xs text-secondary mt-1.5 pl-4 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-subtle font-mono text-[11px] text-muted font-bold">
              DISCIPLINE VERIFIED IN PRODUCTION
            </div>
          </div>
        ))}
      </div>

      {/* Software Badges Bar — Directly inspired by the "STACK" block in Reference Design */}
      <div className="mt-14 p-6 sm:p-8 bg-surface border-2 border-visible rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-2">
            CORE TIMELINE ARSENAL // STACK
          </span>
          <div className="flex flex-wrap gap-2.5 mt-3">
            {[
              "Adobe Premiere Pro",
              "DaVinci Resolve Studio",
              "CapCut Pro",
              "Blender 3D",
              "After Effects",
              "Fairlight Audio",
              "Cinema DNG",
              "Apple ProRes 422",
            ].map((tool) => (
              <span
                key={tool}
                className="pill-tag text-xs font-bold py-1 px-3.5 text-display bg-surface-elevated border-visible hover:bg-primary hover:text-canvas"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="font-mono text-xs text-secondary flex flex-wrap items-center gap-3 shrink-0">
          <span className="pill-tag text-xs py-1 px-3 flex items-center gap-1.5 font-bold text-emerald-600 bg-emerald-500/10 border-emerald-500/30">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            4K DCI Workflow
          </span>
          <span className="pill-tag text-xs py-1 px-3 flex items-center gap-1.5 font-bold text-emerald-600 bg-emerald-500/10 border-emerald-500/30">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            Color Calibrated
          </span>
        </div>
      </div>
    </section>
  );
}
