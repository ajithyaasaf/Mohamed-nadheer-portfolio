"use client";

import React from "react";
import { Play, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  const isVertical = project.aspectRatio === "9:16";

  return (
    <article
      className="relative border-t border-subtle pt-8 sm:pt-10 pb-12 sm:pb-14 transition-all duration-300"
    >
      {/* Top Editorial Index & Meta Line */}
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted mb-4 sm:mb-5">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-display font-extrabold text-sm tracking-wider">[{project.number}]</span>
          <span className="pill-tag text-xs uppercase font-bold text-display bg-surface border-visible">
            {project.category}
          </span>
          <span className="text-secondary font-semibold">{project.year}</span>
          <span className="pill-tag text-[10px] py-0.5 px-2.5 font-bold text-accent border-accent/40 bg-accent/10">
            {isVertical ? "YOUTUBE SHORTS" : "YOUTUBE 4K"}
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="pill-tag text-[11px] py-0.5 px-2.5 font-medium text-body border-visible">
            {project.aspectRatio}
          </span>
          <span className="text-display font-timecode font-bold tracking-wider">{project.duration}</span>
        </div>
      </div>

      {/* Main Layout Grid: Title & Large Media Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Titles, Role & Narrative Brief */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
          <div>
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-display uppercase tracking-[-0.03em] hover:text-accent cursor-pointer transition-colors leading-tight font-display"
            >
              {project.title}
            </h3>

            <div className="mt-3 sm:mt-4 font-mono text-xs space-y-1.5 bg-surface p-3.5 sm:p-4 rounded-xl border border-visible shadow-sm">
              <p className="text-body font-medium leading-relaxed">
                <span className="text-accent font-bold mr-1.5">ROLE:</span>
                {project.role}
              </p>
              <p className="text-secondary leading-relaxed">
                <span className="text-muted font-bold mr-1.5">PACING:</span>
                {project.editingNotes.cutStyle}
              </p>
            </div>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-body font-normal leading-relaxed">
              {project.synopsis}
            </p>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-subtle flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {project.software.map((sw) => (
                <span
                  key={sw}
                  className="pill-tag text-[10px] sm:text-[11px] py-0.5 px-2.5 sm:px-3 font-semibold text-body bg-surface-elevated border-visible"
                >
                  {sw.replace("Adobe ", "").replace(" Studio", "")}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-secondary hover:text-accent flex items-center gap-1 font-semibold transition-colors"
                title="Watch directly on YouTube"
              >
                <span>YOUTUBE</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => onSelect(project)}
                className="btn-pill-red text-xs py-1.5 px-4 font-mono font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                data-cursor="PLAY"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>PLAY</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Monumental Media Frame — Hover scoped strictly to the video card */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div
            onClick={() => onSelect(project)}
            data-cursor="PLAY"
            className={`group/video relative w-full bg-surface overflow-hidden rounded-xl border-2 border-visible hover:border-accent cursor-pointer transition-all duration-300 shadow-xl ${
              isVertical ? "max-w-xs sm:max-w-sm mx-auto aspect-[9/16]" : "aspect-[16/9]"
            }`}
          >
            {/* Real YouTube Poster Image — Always 100% crisp & unblurred */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={project.poster}
                alt={project.title}
                className="w-full h-full object-cover object-center filter contrast-[1.04] group-hover/video:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>

            {/* Hover Center Play Indicator — ONLY triggers when mouse is directly ON this video */}
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/video:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-2xl scale-75 group-hover/video:scale-100 transition-transform duration-200">
                <Play className="w-6 h-6 fill-current ml-0.5 text-white" />
              </div>
            </div>

            {/* View Indicator Badge */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 pointer-events-none">
              <span className="btn-pill-red text-xs py-1 px-3 sm:py-1.5 sm:px-4 flex items-center gap-1.5 shadow-xl">
                <Play className="w-3 h-3 fill-current" />
                <span>PLAY</span>
              </span>
            </div>

            {/* Resolution Stamp */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 font-mono text-[10px] tracking-wider text-display bg-canvas/90 px-2.5 py-1 rounded-sm border border-subtle font-bold pointer-events-none">
              <span>{project.resolution}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
