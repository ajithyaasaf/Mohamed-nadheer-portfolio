"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"cream" | "cinema">("cream");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize theme from localStorage or default to "cream" (Reference Design)
    const savedTheme = localStorage.getItem("nadheer_theme") as "cream" | "cinema" | null;
    const initialTheme = savedTheme || "cream";
    setTheme(initialTheme);
    if (initialTheme === "cinema") {
      document.documentElement.classList.add("theme-cinema");
    } else {
      document.documentElement.classList.remove("theme-cinema");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "cream" ? "cinema" : "cream";
    setTheme(nextTheme);
    localStorage.setItem("nadheer_theme", nextTheme);
    if (nextTheme === "cinema") {
      document.documentElement.classList.add("theme-cinema");
    } else {
      document.documentElement.classList.remove("theme-cinema");
    }
  };

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
            ? "bg-canvas/95 backdrop-blur-md border-b border-subtle py-4 shadow-xl"
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
            <span className="text-base sm:text-lg font-bold tracking-tight text-display group-hover:text-accent transition-colors uppercase">
              Mohamed Nadheer
            </span>
            <span className="font-mono text-[11px] tracking-widest text-muted uppercase flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Video Editor · Madurai, IN
            </span>
          </a>

          {/* Desktop Minimal Editorial Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs tracking-wider text-secondary"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-display font-medium transition-colors relative py-1 focus:outline-none"
                data-cursor="GOTO"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Pill (Cream Editorial ↔ Cinema Dark) */}
            <button
              onClick={toggleTheme}
              className="pill-tag text-[11px] py-1 px-3 cursor-pointer flex items-center gap-1.5 font-bold hover:bg-primary hover:text-canvas transition-all"
              title={`Switch to ${theme === "cream" ? "Cinema Dark" : "Editorial Cream"} Mode`}
              aria-label="Toggle Theme Palette"
              data-cursor="THEME"
            >
              {theme === "cream" ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-accent" />
                  <span>CINEMA MODE</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>CREAM PALETTE</span>
                </>
              )}
            </button>

            {/* Direct Connect Pill Button */}
            <a
              href="https://wa.me/919042050028"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-outline text-xs py-1.5 px-4 font-mono font-bold hover:bg-primary hover:text-canvas"
              data-cursor="CHAT"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="pill-tag text-[11px] py-1 px-2.5 cursor-pointer flex items-center gap-1"
              aria-label="Toggle Theme Palette"
            >
              {theme === "cream" ? (
                <Moon className="w-3.5 h-3.5 text-accent" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-display focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-canvas px-8 pt-28 pb-12 flex flex-col justify-between md:hidden transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col space-y-5">
          <span className="font-mono text-xs tracking-widest text-muted uppercase">
            // INDEX NAVIGATION
          </span>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-display tracking-tight hover:text-accent transition-colors flex items-center justify-between border-b border-subtle pb-3"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-muted">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-4 pt-6 border-t border-subtle">
          <div className="flex justify-between items-center text-xs font-mono text-secondary">
            <span>LOCATION</span>
            <span className="text-display font-medium">MADURAI, TAMIL NADU</span>
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-secondary">
            <span>PALETTE MODE</span>
            <button
              onClick={toggleTheme}
              className="pill-tag text-xs py-1 px-3 text-display font-bold"
            >
              {theme === "cream" ? "SWITCH TO CINEMA DARK" : "SWITCH TO CREAM"}
            </button>
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
