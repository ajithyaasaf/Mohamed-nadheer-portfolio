"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["ALL", "COMMERCIAL", "REELS", "MOTION", "WEDDING"];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-16 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
      {/* Editorial Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-subtle pb-6 sm:pb-8 mb-8 sm:mb-12">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold block mb-1">
            CATALOGUE // 7 REAL PRODUCTION CUTS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-display uppercase font-display">
            Selected Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-secondary font-normal max-w-xl">
            A selection of Mohamed Nadheer's authentic work from 50+ delivered projects: commercial brand films, viral vertical reels, motion graphics, and cinematic wedding stories.
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

      {/* Main List of Verified Real Projects (Zero Redundancy) */}
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

      {/* Responsive Centered Cinema Video Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
