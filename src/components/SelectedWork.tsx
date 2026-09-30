"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["ALL", "CINEMATIC", "REELS", "COMMERCIAL", "WEDDING", "MOTION"];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <section id="work" className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
      {/* Editorial Section Heading (High Contrast) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-subtle pb-8 mb-12 sm:mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-1">
            CATALOGUE // REELS & CUTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-display uppercase">
            Selected Work
          </h2>
          <p className="mt-2 text-base text-secondary font-light max-w-xl">
            A curated selection from 150+ commercial edits, cinematic films, and high-retention social pieces.
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
                  : "hover:border-primary hover:text-display"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Deep-Dive Project Banner (Cinema Spotlight) */}
      {activeCategory === "ALL" && (
        <div className="mb-20 bg-surface border-2 border-visible rounded-xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between font-mono text-xs text-muted uppercase tracking-wider mb-6">
            <span className="flex items-center gap-2 text-accent font-bold">
              <Sparkles className="w-4 h-4" />
              FEATURED EDITORIAL SPOTLIGHT
            </span>
            <span className="pill-tag text-[10px] py-0.5 px-3 text-body border-visible">
              4K DCI CINEMA MASTER
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative aspect-[16/9] bg-canvas overflow-hidden rounded-lg border border-subtle group">
              <img
                src={featuredProject.poster}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                onClick={() => setSelectedProject(featuredProject)}
                className="absolute inset-0 bg-canvas/50 flex items-center justify-center cursor-pointer group-hover:bg-canvas/30 transition-all"
              >
                <div className="btn-pill-red text-xs tracking-wider uppercase flex items-center gap-2 shadow-2xl">
                  <span>LAUNCH FULL CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="pill-tag text-xs py-0.5 px-3 font-semibold mb-3 text-display bg-surface border-visible">
                  PROJECT {featuredProject.number} · {featuredProject.year}
                </span>
                <h3 className="text-3xl sm:text-4xl font-light text-display uppercase tracking-tight mt-3 mb-4 leading-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-base text-body leading-relaxed mb-6 font-light">
                  {featuredProject.synopsis}
                </p>

                <div className="space-y-2 border-l-2 border-accent pl-4 text-xs font-mono bg-surface-elevated p-3 rounded-r-lg">
                  <p className="text-body">
                    <span className="text-display font-bold">PACING:</span>{" "}
                    {featuredProject.editingNotes.timeline}
                  </p>
                  <p className="text-secondary">
                    <span className="text-display font-bold">COLOR:</span>{" "}
                    {featuredProject.editingNotes.colorGrade}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="btn-pill-red text-xs py-2.5 px-6 font-semibold tracking-wider uppercase cursor-pointer"
                >
                  WATCH CASE STUDY
                </button>
                <span className="font-mono text-xs text-muted font-medium">
                  {featuredProject.cutsCount} CUTS LOGGED
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
