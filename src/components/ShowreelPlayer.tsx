"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink } from "lucide-react";
import { SHOWREEL_DATA } from "@/data/projects";

export default function ShowreelPlayer() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <section id="showreel" className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
      {/* Section Header with High Contrast Labels */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-subtle pb-4">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block">
            MASTER SEQUENCE 01 // FEATURED FILM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-display uppercase mt-1 font-display">
            {SHOWREEL_DATA.featuredFilm}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="pill-tag text-xs py-0.5 px-3 font-bold text-display bg-surface border-visible">
            {SHOWREEL_DATA.codec}
          </span>
          <span className="pill-tag text-xs py-0.5 px-3 font-bold text-display bg-surface border-visible">
            {SHOWREEL_DATA.fps}
          </span>
          <a
            href={SHOWREEL_DATA.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-tag text-xs py-0.5 px-3 font-bold text-accent border-accent/40 hover:bg-accent hover:text-white flex items-center gap-1.5"
          >
            <span>YOUTUBE 4K</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Cinematic Video Player Container */}
      <div
        ref={containerRef}
        className="relative group w-full bg-canvas overflow-hidden rounded-xl border-2 border-visible shadow-xl select-none"
      >
        {/* Aspect Ratio Frame: 16:9 widescreen */}
        <div className="relative aspect-[16/9] w-full bg-black">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${SHOWREEL_DATA.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={SHOWREEL_DATA.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div
              onClick={togglePlay}
              className="relative w-full h-full cursor-pointer group"
              data-cursor="PLAY REEL"
            >
              <img
                src={SHOWREEL_DATA.poster}
                alt={SHOWREEL_DATA.title}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />

              {/* Letterbox Mask Accents */}
              <div className="absolute top-0 left-0 right-0 h-6 sm:h-9 bg-canvas/90 pointer-events-none z-10 flex items-center justify-between px-6 font-mono text-[10px] tracking-widest text-secondary font-bold">
                <span>CAMERA A // 2026 MASTER REEL</span>
                <span className="text-accent font-bold">PRORES // REC.709</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-9 bg-canvas/90 pointer-events-none z-10" />

              {/* Center Action Button */}
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 group-hover:bg-black/35">
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-white/80 bg-black/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-2xl mb-4">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-accent group-hover:text-white" />
                </div>

                <span className="btn-pill-red text-xs uppercase tracking-widest py-2 px-6">
                  PLAY FEATURED MASTER FILM
                </span>
                <span className="font-mono text-xs text-white font-bold tracking-wider mt-2.5 drop-shadow">
                  [ STREAM REAL WORK WITH ORIGINAL AUDIO ]
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Minimal Timeline-Inspired Editorial Player Bar */}
        <div className="bg-surface border-t border-subtle p-4 sm:px-6 sm:py-4 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-1.5 hover:text-accent transition-colors text-display focus:outline-none"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <span className="font-bold text-display tracking-wider font-timecode">
                {isPlaying ? "00:00:24" : "00:00:00"}
              </span>
              <span className="text-muted">/</span>
              <span className="text-secondary font-timecode font-medium">{SHOWREEL_DATA.duration}</span>
              <span className="text-accent text-[11px] font-bold hidden md:inline ml-2">
                [ WEDDING RAGA · 4K MASTER ]
              </span>
            </div>

            <div className="flex items-center gap-4 text-secondary">
              <span className="hidden sm:inline text-muted font-bold">24 FPS SYNC</span>
              <button
                onClick={toggleFullscreen}
                className="hover:text-display transition-colors focus:outline-none"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Minimal Editorial Trackline */}
          <div className="w-full h-1 bg-surface-elevated rounded-full overflow-hidden">
            <div
              className={`h-full bg-accent transition-all duration-300 ${
                isPlaying ? "w-2/3" : "w-1/6"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
