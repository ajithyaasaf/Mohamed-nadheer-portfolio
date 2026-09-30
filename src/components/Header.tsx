"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORK", href: "#work" },
    { label: "SHOWREEL", href: "#showreel" },
    { label: "ABOUT", href: "#about" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B0A]/95 backdrop-blur-md border-b border-[rgba(245,242,235,0.12)] py-4 shadow-xl"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Name & Location */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            data-cursor="TOP"
          >
            <span className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-[#FF6654] transition-colors uppercase">
              Mohamed Nadheer
            </span>
            <span className="font-mono text-[11px] tracking-widest text-[#A8A399] uppercase flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Video Editor · Madurai, IN
            </span>
          </a>

          {/* Desktop Minimal Editorial Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-xs tracking-wider text-[#C5BFB3]"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white font-medium transition-colors relative py-1 focus:outline-none"
                data-cursor="GOTO"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/919042050028"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline text-xs py-1.5 px-4 font-mono font-medium hover:bg-white hover:text-black"
              data-cursor="CHAT"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Clean Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0B0A] px-8 pt-28 pb-12 flex flex-col justify-between md:hidden transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col space-y-5">
          <span className="font-mono text-xs tracking-widest text-[#A8A399] uppercase">
            // INDEX NAVIGATION
          </span>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-light text-white tracking-tight hover:text-[#FF6654] transition-colors flex items-center justify-between border-b border-[rgba(245,242,235,0.1)] pb-3"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-[#A8A399]">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-4 pt-6 border-t border-[rgba(245,242,235,0.14)]">
          <div className="flex justify-between items-center text-xs font-mono text-[#C5BFB3]">
            <span>LOCATION</span>
            <span className="text-white font-medium">MADURAI, TAMIL NADU</span>
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-[#C5BFB3]">
            <span>PORTFOLIO VOLUME</span>
            <span className="text-[#FF6654] font-semibold">150+ EDITS</span>
          </div>
          <a
            href="https://wa.me/919042050028"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-pill-red w-full justify-center text-xs font-mono tracking-wider uppercase py-3"
          >
            <span>WHATSAPP CHAT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}
