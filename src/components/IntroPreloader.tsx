"use client";

import React, { useEffect, useState } from "react";

export default function IntroPreloader() {
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if already viewed in this session
    const hasViewed = sessionStorage.getItem("nadheer_intro_seen");

    if (prefersReducedMotion || hasViewed) {
      setIsCompleted(true);
      setShouldRender(false);
      return;
    }

    // Sequence timing (total ~1.4 seconds)
    const timer1 = setTimeout(() => setStep(1), 350); // 01 MOHAMED NADHEER
    const timer2 = setTimeout(() => setStep(2), 750); // 02 VIDEO EDITOR
    const timer3 = setTimeout(() => setStep(3), 1150); // 03 MADURAI / INDIA
    const timer4 = setTimeout(() => {
      setIsCompleted(true);
      sessionStorage.setItem("nadheer_intro_seen", "true");
    }, 1500);

    const timer5 = setTimeout(() => {
      setShouldRender(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handleSkip = () => {
    setIsCompleted(true);
    sessionStorage.setItem("nadheer_intro_seen", "true");
    setTimeout(() => setShouldRender(false), 400);
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] bg-canvas flex flex-col justify-between p-8 sm:p-12 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isCompleted ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      aria-live="polite"
      role="status"
    >
      {/* Top Bar: Timecode & Slate Metadata */}
      <div className="flex items-center justify-between text-muted font-mono text-[11px] tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>REC [ 24.00 FPS ]</span>
        </div>
        <div>
          <span>TC: 00:00:01:{step < 2 ? "08" : step === 2 ? "16" : "24"}</span>
        </div>
      </div>

      {/* Center Cinematic Editorial Sequence */}
      <div className="max-w-4xl mx-auto w-full text-center py-12">
        <div className="overflow-hidden min-h-[90px] flex items-center justify-center">
          {step === 0 && (
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary animate-fadeIn">
              INITIALIZING TIMELINE
            </p>
          )}

          {step === 1 && (
            <div className="animate-fadeIn">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                01 / SLATE
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.04em] text-primary uppercase font-display">
                MOHAMED NADHEER
              </h1>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fadeIn">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                02 / ROLE
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.04em] text-primary uppercase font-display">
                VIDEO EDITOR
              </h2>
            </div>
          )}

          {step >= 3 && (
            <div className="animate-fadeIn">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                03 / BASE
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[-0.03em] text-primary uppercase font-display">
                MADURAI / INDIA
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar: Quick Dismiss */}
      <div className="flex items-center justify-between text-muted font-mono text-[10px] tracking-widest uppercase">
        <span>PRORES 422 HQ</span>
        <button
          onClick={handleSkip}
          className="hover:text-primary transition-colors focus:outline-none cursor-pointer"
        >
          [ CLICK TO SKIP INTRO ]
        </button>
        <span>CH 1/2 MASTER</span>
      </div>
    </div>
  );
}
