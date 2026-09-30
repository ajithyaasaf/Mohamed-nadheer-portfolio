"use client";

import React, { useState, useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const isReels = project.category === "REELS";

  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer border-t border-[rgba(245,242,235,0.14)] pt-10 pb-14 transition-all duration-300"
      data-cursor="VIEW EDIT"
    >
      {/* Top Editorial Index & Meta Line (High Contrast) */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#A8A399] mb-5">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-sm tracking-wider">[{project.number}]</span>
          <span className="pill-tag text-xs uppercase font-semibold text-white bg-[rgba(245,242,235,0.08)] border-[rgba(245,242,235,0.25)]">
            {project.category}
          </span>
          <span className="text-[#C5BFB3] font-medium">{project.year}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="pill-tag text-[11px] py-0.5 px-2.5 text-[#DDD8CE] border-[rgba(245,242,235,0.2)]">
            {project.aspectRatio}
          </span>
          <span className="text-xs text-[#A8A399] hidden sm:inline">{project.fps}</span>
          <span className="text-white font-timecode font-bold tracking-wider">{project.duration}</span>
        </div>
      </div>

      {/* Main Layout Grid: Title & Large Media Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Project Titles, Role & Narrative Brief */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white uppercase tracking-[-0.03em] group-hover:text-[#FF6654] transition-colors leading-tight">
              {project.title}
            </h3>

            <div className="mt-4 font-mono text-xs space-y-2 bg-[#141413] p-4 rounded-lg border border-[rgba(245,242,235,0.1)]">
              <p className="text-[#E8E4DA] leading-relaxed">
                <span className="text-[#FF6654] font-bold mr-1.5">ROLE:</span>
                {project.role}
              </p>
              <p className="text-[#C5BFB3] leading-relaxed">
                <span className="text-[#A8A399] font-semibold mr-1.5">PACING:</span>
                {project.editingNotes.cutStyle}
              </p>
            </div>

            <p className="mt-4 text-base text-[#DDD8CE] font-light leading-relaxed">
              {project.synopsis}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(245,242,235,0.1)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.software.map((sw) => (
                <span
                  key={sw}
                  className="pill-tag text-[11px] py-0.5 px-3 text-[#E8E4DA] bg-[#181816] border-[rgba(245,242,235,0.2)]"
                >
                  {sw.replace("Adobe ", "").replace(" Studio", "")}
                </span>
              ))}
            </div>

            <span className="btn-pill-outline text-xs py-1.5 px-4 font-mono font-medium group-hover:bg-white group-hover:text-black transition-all">
              <span>EXPLORE CUT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Right Column: Monumental Media Frame */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div
            className={`relative w-full bg-[#121211] overflow-hidden rounded-lg border-2 border-[rgba(245,242,235,0.2)] group-hover:border-[#FF6654] transition-all duration-500 shadow-xl ${
              isReels ? "max-w-xs sm:max-w-sm mx-auto aspect-[9/16]" : "aspect-[16/9]"
            }`}
          >
            {/* Poster Image */}
            <div className="relative w-full h-full">
              <img
                src={project.poster}
                alt={project.title}
                className="w-full h-full object-cover object-center filter group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Hover Video Preview Layer */}
            <video
              ref={videoRef}
              src={project.videoSrc}
              muted
              loop
              playsInline
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* View Indicator Badge */}
            <div className="absolute bottom-4 right-4 z-10">
              <span className="btn-pill-red text-xs py-1.5 px-4 flex items-center gap-1.5 shadow-xl">
                <Play className="w-3 h-3 fill-current" />
                <span>CASE STUDY</span>
              </span>
            </div>

            {/* Resolution Stamp */}
            <div className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-wider text-white bg-black/85 px-2.5 py-1 rounded-sm border border-[rgba(245,242,235,0.15)]">
              <span>{project.resolution}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
