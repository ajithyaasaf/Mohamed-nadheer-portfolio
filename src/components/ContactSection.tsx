"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Phone } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
      strokeWidth="2"
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
    <section id="contact" className="py-20 sm:py-36 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full border-t border-subtle">
      {/* Editorial End Slate Marker */}
      <div className="flex items-center justify-between font-mono text-xs tracking-wider text-muted uppercase mb-10 sm:mb-16">
        <span className="font-bold text-display">COMMISSIONS & ENQUIRIES</span>
        <span className="font-medium text-secondary">FINAL CREDIT REEL</span>
      </div>

      {/* Massive Film Ending Statement */}
      <div className="mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-display uppercase tracking-[-0.04em] leading-[0.95] sm:leading-[0.92] font-display">
          Let's make <br />
          <span className="text-accent font-extrabold">something worth</span> <br />
          watching.
        </h2>
        <p className="mt-5 sm:mt-6 text-base sm:text-xl text-body max-w-2xl font-normal leading-relaxed">
          Currently taking on commercial campaigns, short narratives, YouTube series, and high-retention vertical edits. Based in Madurai, available worldwide for remote timelines.
        </p>

        {/* Quick Action Pill Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <a
            href={`https://wa.me/91${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-red text-sm justify-center"
          >
            <Phone className="w-4 h-4" />
            <span>START A WHATSAPP CHAT</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="btn-pill-outline text-sm justify-center"
          >
            <Mail className="w-4 h-4" />
            <span>SEND EMAIL INQUIRY</span>
          </a>
        </div>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Email Direct */}
        <div className="p-6 bg-surface border border-visible rounded-xl flex flex-col justify-between group hover:border-accent transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-muted mb-4">
              <span className="font-bold">INBOX DIRECT</span>
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <span className="text-base font-bold text-display block truncate">
              {email}
            </span>
            <p className="text-xs text-secondary mt-1 font-normal">
              Direct inbox for edits, briefs, and client inquiries.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between font-mono text-xs">
            <button
              onClick={copyEmail}
              className="text-muted hover:text-display flex items-center gap-1.5 transition-colors cursor-pointer font-bold"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-bold">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="text-accent hover:underline flex items-center gap-1 font-bold"
            >
              <span>WRITE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* WhatsApp Direct */}
        <div className="p-6 bg-surface border border-visible rounded-xl flex flex-col justify-between group hover:border-emerald-500 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-muted mb-4">
              <span className="font-bold">INSTANT CHAT</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-base font-bold text-display block">
              {phoneDisplay}
            </span>
            <p className="text-xs text-secondary mt-1 font-normal">
              Fast turnaround responses for urgent cuts & calls.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between font-mono text-xs">
            <span className="text-emerald-500 font-bold">AVAILABLE NOW</span>
            <a
              href={`https://wa.me/91${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display hover:text-emerald-500 flex items-center gap-1 font-bold"
            >
              <span>OPEN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Profile */}
        <div className="p-6 bg-surface border border-visible rounded-xl flex flex-col justify-between group hover:border-pink-500 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-muted mb-4">
              <span className="font-bold">REELS & SHORT-FORM</span>
              <InstagramIcon className="w-4 h-4 text-pink-500" />
            </div>
            <span className="text-base font-bold text-display block">
              @__nadzz_
            </span>
            <p className="text-xs text-secondary mt-1 font-normal">
              Latest vertical edits, client cuts & motion clips.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between font-mono text-xs">
            <span className="text-muted font-bold">INSTAGRAM</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display hover:text-pink-500 flex items-center gap-1 font-bold"
            >
              <span>FOLLOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* YouTube Channel */}
        <div className="p-6 bg-surface border border-visible rounded-xl flex flex-col justify-between group hover:border-red-500 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-muted mb-4">
              <span className="font-bold">LONG-FORM & 4K</span>
              <YoutubeIcon className="w-4 h-4 text-red-500" />
            </div>
            <span className="text-base font-bold text-display block">
              @NadheerAnsari
            </span>
            <p className="text-xs text-secondary mt-1 font-normal">
              Widescreen master exports & cinematic edits.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-subtle flex items-center justify-between font-mono text-xs">
            <span className="text-muted font-bold">YOUTUBE</span>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display hover:text-red-500 flex items-center gap-1 font-bold"
            >
              <span>WATCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
