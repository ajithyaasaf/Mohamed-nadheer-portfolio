"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, Play, ExternalLink } from "lucide-react";

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["ALL", "WEDDING", "COMMERCIAL", "REELS", "MOTION"];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <section id="work" className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
      {/* Editorial Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-subtle pb-6 sm:pb-8 mb-10 sm:mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-1">
            CATALOGUE // 7 REAL PRODUCTION CUTS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-display uppercase font-display">
            Selected Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-secondary font-normal max-w-xl">
            A selection of Mohamed Nadheer's authentic work from 50+ delivered projects: cinematic wedding films, commercial brand ads, dynamic motion graphics, and high-retention viral reels.
          </p>
        </div>

        {/* Category Filter Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-tag cursor-pointer ${
                activeCategory === cat
                  ? "!bg-primary !text-canvas !border-primary font-bold shadow-md"
                  : "bg-surface border-visible text-secondary hover:border-primary hover:text-display"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Deep-Dive Project Banner (Cinema Spotlight) */}
      {activeCategory === "ALL" && (
        <div className="mb-14 sm:mb-20 bg-surface border-2 border-visible rounded-xl p-4 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted uppercase tracking-wider mb-5 sm:mb-6">
            <span className="flex items-center gap-2 text-accent font-bold">
              <Sparkles className="w-4 h-4" />
              FEATURED CINEMATIC MASTER
            </span>
            <span className="pill-tag text-[10px] py-0.5 px-3 font-semibold text-body border-visible">
              4K DCI WIDESCREEN
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div
              onClick={() => setSelectedProject(featuredProject)}
              className="lg:col-span-7 relative aspect-[16/9] bg-canvas overflow-hidden rounded-lg border border-visible group/banner cursor-pointer"
              data-cursor="PLAY"
            >
              <img
                src={featuredProject.poster}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover/banner:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/banner:opacity-100 flex items-center justify-center transition-opacity duration-200 pointer-events-none">
                <div className="btn-pill-red text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl py-2 px-5">
                  <Play className="w-4 h-4 fill-current" />
                  <span>PLAY VIDEO</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="pill-tag text-xs py-0.5 px-3 font-bold mb-3 text-display bg-surface-elevated border-visible">
                  PROJECT {featuredProject.number} · {featuredProject.year}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-display uppercase tracking-tight mt-2 sm:mt-3 mb-3 sm:mb-4 leading-tight font-display">
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base text-body leading-relaxed mb-4 sm:mb-6 font-normal">
                  {featuredProject.synopsis}
                </p>

                <div className="space-y-1.5 border-l-2 border-accent pl-3 sm:pl-4 text-xs font-mono bg-surface-elevated/70 p-3 rounded-r-lg border border-subtle">
                  <p className="text-primary font-medium">
                    <strong className="text-accent">PACING:</strong> {featuredProject.editingNotes.cutStyle}
                  </p>
                  <p className="text-secondary font-medium">
                    <strong className="text-muted">COLOR:</strong> {featuredProject.editingNotes.colorGrade}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-subtle flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {featuredProject.software.map((sw) => (
                    <span
                      key={sw}
                      className="pill-tag text-[10px] sm:text-[11px] py-0.5 px-2.5 font-semibold text-body bg-surface-elevated border-visible"
                    >
                      {sw}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={featuredProject.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-secondary hover:text-accent flex items-center gap-1 font-semibold transition-colors"
                  >
                    <span>YOUTUBE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="btn-pill-red text-xs py-1.5 px-4 font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>PLAY</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main List of Verified Real Projects */}
      <div className="space-y-4">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Responsive Cinema Video Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
