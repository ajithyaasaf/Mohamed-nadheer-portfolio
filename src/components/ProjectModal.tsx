"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Scissors, Sliders, Music, Film } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration || 0);
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec)) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex justify-end overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Background Dim Dismiss Click */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 cursor-pointer"
        aria-hidden="true"
      />

      {/* Main Editorial Case Study Panel */}
      <div className="relative z-10 w-full max-w-4xl min-h-screen bg-surface text-primary border-l-2 border-visible p-6 sm:p-10 lg:p-14 flex flex-col justify-between shadow-2xl">
        {/* Top Control Bar */}
        <div>
          <div className="flex items-center justify-between border-b border-subtle pb-5 mb-8">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="pill-tag text-xs font-bold !bg-surface-elevated !text-primary !border-subtle">
                PROJECT {project.number}
              </span>
              <span className="pill-tag text-xs !bg-accent !text-display !border-accent uppercase font-semibold">
                {project.category}
              </span>
              <span className="text-muted font-mono">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="btn-pill-outline text-xs py-1 px-3.5 !border-visible !text-primary hover:!bg-primary hover:!text-canvas cursor-pointer"
              aria-label="Close Case Study"
              data-cursor="CLOSE"
            >
              <span>[ ESC / CLOSE ]</span>
              <X className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Project Title & Category */}
          <div className="mb-8">
            <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-1">
              POST-PRODUCTION CASE STUDY
            </span>
            <h2
              id="modal-title"
              className="text-3xl sm:text-5xl font-light tracking-tight text-primary uppercase leading-tight font-display"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-secondary font-mono">
              ROLE: <span className="text-primary font-semibold">{project.role}</span>
            </p>
          </div>

          {/* Embedded Video Showcase Player */}
          <div className="relative mb-10 bg-black border-2 border-subtle rounded-lg overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/9] w-full bg-black">
              <video
                ref={videoRef}
                src={project.videoSrc}
                poster={project.poster}
                playsInline
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
              />

              {/* Center Play Button Overlay */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-primary bg-black/80 flex items-center justify-center text-primary hover:scale-110 hover:bg-accent hover:border-accent hover:text-display transition-all">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls Bar */}
            <div className="bg-surface-elevated p-3 px-4 flex items-center justify-between font-mono text-xs text-secondary border-t border-subtle">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-primary flex items-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-accent" /> : <Play className="w-3.5 h-3.5 fill-current text-accent" />}
                  <span className="font-semibold">{isPlaying ? "PAUSE" : "PLAY"}</span>
                </button>
                <span className="text-muted">|</span>
                <button
                  onClick={toggleMute}
                  className="hover:text-primary flex items-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                  <span>{isMuted ? "MUTED" : "AUDIO ON"}</span>
                </button>
              </div>

              <div className="text-xs text-muted">
                {formatSeconds(currentTime)} / {formatSeconds(duration || 120)}
              </div>

              <div className="text-[11px] text-muted">
                {project.resolution} · {project.fps}
              </div>
            </div>
          </div>

          {/* About The Project */}
          <div className="mb-10">
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase font-bold mb-3">
              // PROJECT SYNOPSIS
            </h3>
            <p className="text-base sm:text-lg text-secondary leading-relaxed font-light">
              {project.synopsis}
            </p>
          </div>

          {/* The Edit: Deep Technical Breakdown */}
          <div className="mb-10">
            <h3 className="font-mono text-xs tracking-widest text-accent uppercase font-bold mb-4">
              // EDITORIAL ARCHITECTURE & CONTRIBUTION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-surface-elevated border border-subtle rounded-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                  <Scissors className="w-4 h-4 text-accent" />
                  <span>TIMELINE PACING</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-sans">
                  {project.editingNotes.timeline}
                </p>
              </div>

              <div className="p-4 bg-surface-elevated border border-subtle rounded-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                  <Film className="w-4 h-4 text-accent" />
                  <span>CUTTING STYLE</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-sans">
                  {project.editingNotes.cutStyle}
                </p>
              </div>

              <div className="p-4 bg-surface-elevated border border-subtle rounded-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                  <Sliders className="w-4 h-4 text-accent" />
                  <span>COLOR GRADE</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-sans">
                  {project.editingNotes.colorGrade}
                </p>
              </div>

              <div className="p-4 bg-surface-elevated border border-subtle rounded-lg">
                <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold mb-2">
                  <Music className="w-4 h-4 text-accent" />
                  <span>SOUND DESIGN & FOLEY</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed font-sans">
                  {project.editingNotes.soundDesign}
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specs Metadata Grid */}
          <div className="border-t border-subtle pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div>
              <span className="text-muted block text-[10px] font-semibold">CUTS LOGGED</span>
              <span className="text-primary font-bold text-sm">{project.cutsCount} CUTS</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] font-semibold">ASPECT RATIO</span>
              <span className="text-primary font-bold text-sm">{project.aspectRatio}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] font-semibold">DURATION</span>
              <span className="text-primary font-bold text-sm">{project.duration}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] font-semibold">PLATFORM</span>
              <span className="text-primary font-bold text-sm">{project.deliveryPlatform}</span>
            </div>
          </div>

          {/* Software Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.software.map((tool) => (
              <span
                key={tool}
                className="pill-tag text-xs font-semibold !bg-surface-elevated !text-primary !border-subtle"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="border-t border-subtle pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted">
            NEED A SIMILAR CINEMATIC CUT FOR YOUR PROJECT?
          </span>
          <a
            href="https://wa.me/919042050028"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-red text-xs py-3 px-6 uppercase tracking-wider font-semibold"
          >
            DISCUSS THIS PROJECT
          </a>
        </div>
      </div>
    </div>
  );
}
