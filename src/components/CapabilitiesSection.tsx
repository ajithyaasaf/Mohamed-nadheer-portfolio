"use client";

import React from "react";
import { CAPABILITIES } from "@/data/projects";
import { Check } from "lucide-react";

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-t border-[rgba(245,242,235,0.14)]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(245,242,235,0.14)] pb-8 mb-12 sm:mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#FF6654] uppercase font-bold block mb-1">
            TECHNICAL REPERTOIRE // DISCIPLINES
          </span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase">
            Capabilities & Software
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm font-mono text-[#C5BFB3]">
          No arbitrary percentage bars. Battle-tested workflows across commercial post-production.
        </p>
      </div>

      {/* Editorial Grouped Capabilities List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {CAPABILITIES.map((group, groupIdx) => (
          <div key={group.category} className="bg-[#141413] p-6 sm:p-8 rounded-xl border border-[rgba(245,242,235,0.14)] flex flex-col justify-between shadow-xl">
            <div>
              <div className="border-b border-[rgba(245,242,235,0.1)] pb-4 mb-6 flex items-center justify-between">
                <span className="font-mono text-xs tracking-wider text-white uppercase font-bold">
                  {group.category}
                </span>
                <span className="pill-tag text-[10px] py-0.5 px-2 text-[#DDD8CE] border-[rgba(245,242,235,0.2)]">
                  0{groupIdx + 1}
                </span>
              </div>

              <div className="space-y-6">
                {group.items.map((item) => (
                  <div key={item.name} className="group">
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-[#FF6654] transition-colors flex items-baseline gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6654] shrink-0" />
                      <span>{item.name}</span>
                    </h3>
                    <p className="text-xs text-[#C5BFB3] mt-1.5 pl-4 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(245,242,235,0.08)] font-mono text-[11px] text-[#A8A399] font-medium">
              DISCIPLINE VERIFIED IN PRODUCTION
            </div>
          </div>
        ))}
      </div>

      {/* Software Badges Bar */}
      <div className="mt-14 p-6 sm:p-8 bg-[#141413] border border-[rgba(245,242,235,0.14)] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#FF6654] uppercase font-bold block mb-2">
            CORE TIMELINE ARSENAL // STACK
          </span>
          <div className="flex flex-wrap gap-2.5 mt-2">
            {["Adobe Premiere Pro", "DaVinci Resolve Studio", "CapCut Pro", "Blender 3D", "After Effects", "Fairlight Audio"].map((tool) => (
              <span key={tool} className="pill-tag text-xs font-semibold py-1 px-3.5 text-white bg-[#181816] border-[rgba(245,242,235,0.25)] hover:bg-white hover:text-black">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="font-mono text-xs text-[#C5BFB3] flex flex-wrap items-center gap-4">
          <span className="pill-tag text-xs py-1 px-3 flex items-center gap-1.5 font-medium text-emerald-300 border-emerald-500/30">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            4K DCI Workflow
          </span>
          <span className="pill-tag text-xs py-1 px-3 flex items-center gap-1.5 font-medium text-emerald-300 border-emerald-500/30">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            Color Calibrated
          </span>
        </div>
      </div>
    </section>
  );
}
