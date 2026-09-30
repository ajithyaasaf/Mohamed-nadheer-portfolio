"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { SHOWREEL_DATA } from "@/data/projects";

export default function ShowreelPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoSrc, setVideoSrc] = useState(SHOWREEL_DATA.localVideo);

  const handleVideoError = () => {
    if (videoSrc !== SHOWREEL_DATA.fallbackVideo) {
      setVideoSrc(SHOWREEL_DATA.fallbackVideo);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMute = !videoRef.current.muted;
    videoRef.current.muted = newMute;
    setIsMuted(newMute);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(curr);
    setDuration(dur);
    setProgress(dur > 0 ? (curr / dur) * 100 : 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * (videoRef.current.duration || 0);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
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

  const formatTimecode = (seconds: number) => {
    if (isNaN(seconds)) return "00:00:00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    const f = Math.floor((seconds % 1) * 24);
    return `00:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
  };

  return (
    <section id="showreel" className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
      {/* Section Header with High Contrast Labels */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-[rgba(245,242,235,0.14)] pb-4">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#FF6654] uppercase font-bold block">
            MASTER SEQUENCE 01
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white uppercase mt-1">
            2026 Editorial Showreel
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="pill-tag text-xs py-0.5 px-3 text-white bg-[#141413] border-[rgba(245,242,235,0.22)]">
            {SHOWREEL_DATA.codec}
          </span>
          <span className="pill-tag text-xs py-0.5 px-3 text-white bg-[#141413] border-[rgba(245,242,235,0.22)]">
            {SHOWREEL_DATA.fps}
          </span>
          <span className="text-white font-mono font-bold text-sm tracking-wider">
            {formatTimecode(currentTime)}
          </span>
        </div>
      </div>

      {/* Main Cinematic Video Player Container */}
      <div
        ref={containerRef}
        onClick={togglePlay}
        className="relative group w-full bg-[#0E0E0D] overflow-hidden rounded-xl border-2 border-[rgba(245,242,235,0.22)] shadow-2xl cursor-pointer select-none"
        data-cursor={isPlaying ? "PAUSE" : "PLAY REEL"}
      >
        {/* Aspect Ratio Frame: 16:9 widescreen */}
        <div className="relative aspect-[16/9] w-full bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={SHOWREEL_DATA.poster}
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onError={handleVideoError}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Letterbox Mask Accents */}
          <div className="absolute top-0 left-0 right-0 h-6 sm:h-9 bg-black/85 pointer-events-none z-10 flex items-center justify-between px-6 font-mono text-[10px] tracking-widest text-neutral-300">
            <span>CAMERA A // 2026 MASTER REEL</span>
            <span className="text-[#FF6654] font-bold">PRORES // REC.709</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-9 bg-black/85 pointer-events-none z-10" />

          {/* Initial Play State Center Action Button */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center transition-all duration-300">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-white bg-black/80 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#E55B4C] group-hover:border-[#E55B4C] transition-all duration-300 shadow-2xl mb-4">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </div>

              <span className="btn-pill-red text-xs uppercase tracking-widest py-2 px-6">
                PLAY SHOWREEL
              </span>
              <span className="font-mono text-xs text-neutral-200 tracking-wider mt-2.5">
                [ CLICK ANYWHERE TO ENGAGE AUDIO & PLAYBACK ]
              </span>
            </div>
          )}

          {/* Sound Muted Notification Overlay */}
          {isPlaying && isMuted && (
            <button
              onClick={toggleMute}
              className="absolute top-12 right-6 z-20 bg-black/90 border border-neutral-600 text-white px-3.5 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-[#E55B4C] transition-all shadow-xl"
            >
              <VolumeX className="w-4 h-4 text-amber-300" />
              <span>SOUND MUTED (CLICK TO UNMUTE)</span>
            </button>
          )}
        </div>

        {/* Minimal Timeline-Inspired Editorial Player Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#141412] border-t border-neutral-800 p-4 sm:px-6 sm:py-4 flex flex-col gap-3"
        >
          {/* Timeline Scrubber Bar */}
          <div
            onClick={handleSeek}
            className="group/track relative w-full h-3 bg-neutral-800 cursor-pointer flex items-center rounded-full"
            data-cursor="SEEK"
          >
            <div className="w-full h-1.5 bg-neutral-700 relative overflow-hidden group-hover/track:h-2 transition-all rounded-full">
              <div
                className="h-full bg-[#E55B4C] relative"
                style={{ width: `${progress}%` }}
              />
            </div>
            {/* Playhead Marker */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-4 bg-white rounded-sm pointer-events-none -translate-x-1/2 shadow-lg"
              style={{ left: `${progress}%` }}
            />
          </div>

          {/* Editorial Controls Row */}
          <div className="flex items-center justify-between text-xs font-mono text-neutral-200">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="hover:text-white flex items-center gap-1.5 focus:outline-none transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 text-[#FF6654]" />
                    <span className="font-semibold text-white">PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-[#FF6654]" />
                    <span className="font-semibold text-white">PLAY</span>
                  </>
                )}
              </button>

              <span className="text-neutral-600">|</span>

              <button
                onClick={toggleMute}
                className="hover:text-white flex items-center gap-1.5 focus:outline-none transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-amber-300" />
                    <span>MUTED</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">AUDIO ON</span>
                  </>
                )}
              </button>
            </div>

            {/* Timecode Readout */}
            <div className="text-center font-timecode text-xs text-white">
              <span className="text-[#FF6654] font-bold">{formatTimecode(currentTime)}</span>
              <span className="text-neutral-500 mx-2">/</span>
              <span className="text-neutral-300">{formatTimecode(duration || 84)}</span>
            </div>

            {/* Technical Specs & Fullscreen */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-neutral-300 text-[11px]">
                {SHOWREEL_DATA.resolution}
              </span>
              <button
                onClick={toggleFullscreen}
                className="hover:text-white transition-colors focus:outline-none p-1"
                aria-label="Toggle Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Caption / Showreel Description */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#A8A399] gap-3">
        <p className="max-w-2xl text-[#DDD8CE] font-sans text-sm leading-relaxed">
          {SHOWREEL_DATA.description}
        </p>
        <span className="pill-tag text-[10px] py-1 px-3 text-white bg-[#141413] border-[rgba(245,242,235,0.22)]">
          CUT & MASTERED IN PREMIERE PRO & DAVINCI RESOLVE
        </span>
      </div>
    </section>
  );
}
