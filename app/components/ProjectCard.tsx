"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  size?: "large" | "medium" | "small";
}

export default function ProjectCard({ project, index, size = "medium" }: ProjectCardProps) {
  const sizeClasses = {
    large: "row-span-2 aspect-[4/5]",
    medium: "aspect-[4/3]",
    small: "aspect-[4/3]",
  };

  return (
    <Link
      href={`/all-projects/${project.id}`}
      className={`group relative block overflow-hidden ${sizeClasses[size]}`}
    >
      {/* Project number and title with rollover animation */}
      <div className="mb-3 font-bootzy">
        <span className="text-xs tracking-[0.15em] uppercase text-[#010103] inline-block">
          {index + 1} /{" "}
          <span className="rollover-container inline-block align-middle">
            <span className="rollover-text">
              <span className="rollover-item">{project.title.toUpperCase()}</span>
              <span className="rollover-item">VIEW PROJECT</span>
            </span>
          </span>
        </span>
      </div>

      {/* Image container */}
      <div className="relative w-full h-full overflow-hidden bg-gray-200">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={size === "large" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
}
