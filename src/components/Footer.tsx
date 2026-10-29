"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 border-t border-subtle bg-canvas text-secondary font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Identity */}
        <div>
          <span className="text-display font-bold tracking-tight uppercase block text-sm">
            Mohamed Nadheer
          </span>
          <span className="text-[11px] tracking-wider text-muted uppercase block mt-1">
            Video Editor · Madurai, Tamil Nadu, India
          </span>
        </div>

        {/* Center: Real Links as Clean Pills */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <a
            href="mailto:nadheeransari24@gmail.com"
            className="pill-tag py-1 px-3.5 uppercase font-medium text-display bg-surface border-visible hover:bg-primary hover:text-canvas"
          >
            Email
          </a>
          <a
            href="https://wa.me/919042050028"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-tag py-1 px-3.5 uppercase font-medium text-display bg-surface border-visible hover:bg-primary hover:text-canvas"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/__nadzz_?stkn=ODhrMTVqc2hoNGo3"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-tag py-1 px-3.5 uppercase font-medium text-display bg-surface border-visible hover:bg-primary hover:text-canvas"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@NadheerAnsari"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-tag py-1 px-3.5 uppercase font-medium text-display bg-surface border-visible hover:bg-primary hover:text-canvas"
          >
            YouTube
          </a>
        </div>

        {/* Right: Back to Top & Time */}
        <div className="flex items-center gap-6">
          <span className="text-[11px] text-muted hidden lg:inline font-mono">
            TIMELINE END [ 24.00 FPS ]
          </span>

          <button
            onClick={scrollToTop}
            className="btn-pill-outline text-xs py-1.5 px-4 font-mono font-medium text-display border-visible hover:bg-primary hover:text-canvas flex items-center gap-1.5 cursor-pointer"
            aria-label="Back to Top"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-8 pt-6 border-t border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted">
        <span>© {new Date().getFullYear()} MOHAMED NADHEER. ALL CUTS & TIMELINES RESERVED.</span>
        <span className="mt-2 sm:mt-0 font-medium text-secondary">DESIGNED WITH EDITORIAL RESTRAINT</span>
      </div>
    </footer>
  );
}
