"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Phone } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "nadheeransari24@gmail.com";
  const phone = "9042050028";
  const phoneDisplay = "+91 90420 50028";
  const instagramUrl = "https://www.instagram.com/__nadzz_?stkn=ODhrMTVqc2hoNGo3";
  const youtubeUrl = "https://www.youtube.com/@NadheerAnsari";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full border-t border-subtle">
      {/* Editorial End Slate Marker */}
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-muted uppercase mb-12 sm:mb-16">
        <span className="font-bold text-display">COMMISSIONS & ENQUIRIES</span>
        <span>FINAL CREDIT REEL</span>
      </div>

      {/* Massive Film Ending Statement */}
      <div className="mb-16 sm:mb-20">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-display uppercase tracking-[-0.04em] leading-[0.92]">
          Let's make <br />
          <span className="text-accent font-normal">something worth</span> <br />
          watching.
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-body max-w-2xl font-light leading-relaxed">
          Currently taking on commercial campaigns, short narratives, YouTube series, and high-retention vertical edits. Based in Madurai, available worldwide for remote timelines.
        </p>

        {/* Quick Action Pill Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-red text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>START A WHATSAPP CHAT</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="btn-pill-outline text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>SEND EMAIL INQUIRY</span>
          </a>
        </div>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Email Direct */}
        <div className="p-6 bg-surface border border-subtle rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between text-muted font-mono text-xs mb-4">
              <span>ELECTRONIC MAIL</span>
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <a
              href={`mailto:${email}`}
              className="text-base font-semibold text-display hover:underline underline-offset-4 break-all block"
            >
              {email}
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between">
            <button
              onClick={copyEmail}
              className="text-xs font-mono font-medium text-display hover:text-accent flex items-center gap-1.5 focus:outline-none cursor-pointer"
              data-cursor="COPY"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY ADDRESS</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${email}`}
              className="text-display group-hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* WhatsApp Direct */}
        <div className="p-6 bg-surface border border-subtle rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between text-muted font-mono text-xs mb-4">
              <span>WHATSAPP CHAT</span>
              <Phone className="w-4 h-4 text-accent" />
            </div>
            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-display hover:underline underline-offset-4 block font-mono"
            >
              {phoneDisplay}
            </a>
            <span className="text-xs text-muted mt-1.5 block">
              Direct response for quick project quotes
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between">
            <span className="pill-tag text-[10px] py-0.5 px-2.5 font-bold !bg-emerald-950/80 !text-emerald-300 !border-emerald-500/40">
              ACTIVE DIRECT
            </span>
            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display group-hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Instagram */}
        <div className="p-6 bg-surface border border-subtle rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between text-muted font-mono text-xs mb-4">
              <span>INSTAGRAM FEED</span>
              <InstagramIcon className="w-4 h-4 text-accent" />
            </div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-display hover:underline underline-offset-4 block font-mono"
            >
              @__nadzz_
            </a>
            <span className="text-xs text-muted mt-1.5 block">
              Reels, micro-cuts & work-in-progress drops
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between">
            <span className="pill-tag text-[10px] py-0.5 px-2.5 text-display bg-surface-elevated border-visible">
              OFFICIAL REELS
            </span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display group-hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* YouTube */}
        <div className="p-6 bg-surface border border-subtle rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-lg">
          <div>
            <div className="flex items-center justify-between text-muted font-mono text-xs mb-4">
              <span>YOUTUBE CHANNEL</span>
              <YoutubeIcon className="w-4 h-4 text-accent" />
            </div>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-display hover:underline underline-offset-4 block"
            >
              Nadheer Ansari
            </a>
            <span className="text-xs text-muted mt-1.5 block">
              Long-form edits & pacing experiments
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between">
            <span className="pill-tag text-[10px] py-0.5 px-2.5 text-display bg-surface-elevated border-visible">
              WATCH CUTS
            </span>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display group-hover:text-accent transition-colors"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
