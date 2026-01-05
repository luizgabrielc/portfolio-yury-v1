import Link from "next/link";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  // Get first 6 projects for the selected work section
  const selectedProjects = projects.slice(0, 6);

  return (
    <section className="relative z-10 bg-[#f6f3ec] px-6 py-16">
      {/* Section title */}
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-roc-grotesk font-bold tracking-tight mb-12 text-[#010103]">
        SELECTED WORK
      </h2>

      {/* Projects grid - asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Row 1: 1 large + 2 medium stacked */}
        <div className="lg:col-span-1 lg:row-span-2">
          {selectedProjects[0] && (
            <ProjectCard project={selectedProjects[0]} index={0} size="large" />
          )}
        </div>

        <div className="lg:col-span-1">
          {selectedProjects[1] && (
            <ProjectCard
              project={selectedProjects[1]}
              index={1}
              size="medium"
            />
          )}
        </div>

        <div className="lg:col-span-1">
          {selectedProjects[2] && (
            <ProjectCard
              project={selectedProjects[2]}
              index={2}
              size="medium"
            />
          )}
        </div>

        {/* Row 2: positioned automatically by grid */}
        <div className="lg:col-span-1">
          {selectedProjects[3] && (
            <ProjectCard
              project={selectedProjects[3]}
              index={3}
              size="medium"
            />
          )}
        </div>

        <div className="lg:col-span-1">
          {selectedProjects[4] && (
            <ProjectCard
              project={selectedProjects[4]}
              index={4}
              size="medium"
            />
          )}
        </div>

        {/* Row 3: 3 medium */}
        <div className="lg:col-span-1">
          {selectedProjects[5] && (
            <ProjectCard
              project={selectedProjects[5]}
              index={5}
              size="medium"
            />
          )}
        </div>
      </div>

      {/* View All button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/all-projects"
          className="group inline-flex items-center gap-2 font-bootzy text-sm tracking-[0.15em] uppercase text-[#010103] hover:opacity-70 transition-opacity"
        >
          <span className="rollover-container">
            <span className="rollover-text">
              <span className="rollover-item">VIEW ALL</span>
              <span className="rollover-item">VIEW ALL</span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
