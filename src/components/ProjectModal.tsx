"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, MessageCircle } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isVertical = project.aspectRatio === "9:16";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/92 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="player-title"
    >
      {/* Background Dim Click to Dismiss */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 cursor-pointer"
        aria-hidden="true"
      />

      {/* Centered Cinema Player Card */}
      <div
        className={`relative z-10 w-full my-auto flex flex-col justify-center transition-all duration-300 ${
          isVertical ? "max-w-[360px] sm:max-w-[400px]" : "max-w-4xl lg:max-w-5xl"
        }`}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between gap-3 mb-3 text-white">
          <div className="flex items-center gap-2 truncate">
            <span className="font-mono text-[10px] sm:text-xs font-bold py-0.5 px-2 rounded-full bg-accent text-white uppercase tracking-wider">
              {project.category}
            </span>
            <h3
              id="player-title"
              className="text-sm sm:text-base font-bold uppercase tracking-tight truncate text-white"
            >
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Direct High-Quality YouTube Link */}
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-tag text-[10px] sm:text-xs py-1 px-3 bg-white/10 hover:bg-accent text-white border-white/20 hover:border-accent flex items-center gap-1 font-bold transition-all"
              title="Open directly in YouTube for 4K / native player"
            >
              <span>{isVertical ? "SHORTS" : "4K"} YOUTUBE</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Accessible Touch-Friendly Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close Video Player"
              data-cursor="CLOSE"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame with Maximum Quality Embed */}
        <div
          className={`relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/15 ${
            isVertical
              ? "aspect-[9/16] max-h-[76vh] sm:max-h-[80vh] mx-auto"
              : "aspect-[16/9] max-h-[76vh] sm:max-h-[80vh]"
          }`}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&vq=hd1080&rel=0&modestbranding=1&playsinline=1`}
            title={project.title}
            width={isVertical ? "1080" : "1920"}
            height={isVertical ? "1920" : "1080"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0 rounded-2xl"
          />
        </div>

        {/* Clean Bottom Meta & Quick Action */}
        <div className="mt-3.5 bg-surface/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-visible flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-primary shadow-xl">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted">
              <span className="text-display font-bold">{project.aspectRatio}</span>
              <span>·</span>
              <span>{project.fps}</span>
              <span>·</span>
              <span className="text-accent font-bold">{project.resolution}</span>
            </div>
            <p className="text-xs sm:text-sm text-body font-normal line-clamp-2">
              {project.synopsis}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://wa.me/919042050028?text=Hi%20Nadheer,%20I%20saw%20your%20edit%20for%20${encodeURIComponent(
                project.title
              )}%20and%20want%20to%20collaborate`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-red text-xs py-2 px-4 font-mono font-bold flex items-center gap-1.5 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>DISCUSS THIS EDIT</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
