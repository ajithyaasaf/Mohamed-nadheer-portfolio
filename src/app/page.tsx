"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import IntroPreloader from "@/components/IntroPreloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShowreelPlayer from "@/components/ShowreelPlayer";
import SelectedWork from "@/components/SelectedWork";
import VolumeHighlight from "@/components/VolumeHighlight";
import AboutSection from "@/components/AboutSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-canvas text-primary selection:bg-primary selection:text-canvas">
        {/* Editorial Intro Preloader (1.4s) */}
        <IntroPreloader />

        {/* Custom Dot / Action Cursor */}
        <CustomCursor />

        {/* Minimal Fixed Navigation */}
        <Header />

        {/* Main Continuous Edited Sequence */}
        <main className="relative flex flex-col w-full overflow-hidden">
          {/* 01: Hero Statement */}
          <Hero />

          {/* 02: Cinematic Showreel Centerpiece */}
          <ShowreelPlayer />

          {/* 03: Selected Work with Deep-Dive Case Studies */}
          <SelectedWork />

          {/* 04: 50+ Projects Volume Typographic Monument */}
          <VolumeHighlight />

          {/* 05: About Mohamed Nadheer & Editorial Portrait */}
          <AboutSection />

          {/* 06: Disciplines & Software Repertoire */}
          <CapabilitiesSection />

          {/* 07: Editorial Timeline Metaphor (Raw to Final Cut) */}
          <ProcessSection />

          {/* 08: End Film Credits Contact Section */}
          <ContactSection />
        </main>

        {/* Minimalist Studio Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
