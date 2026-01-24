import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import {
  projects,
  getProjectById,
  getOtherProjects,
} from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
import Link from "next/link";
import MagnifyText from "../../components/MagnifyText";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.id === slug);
  const otherProjects = getOtherProjects(slug, 3);

  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <Header />

      <main className="pt-24">
        {/* Hero section */}
        <section className="px-6 py-12">
          <div className="flex items-start justify-between mb-8">
            <div>
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103] mb-4 block">
                {project.category.toUpperCase()}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-roc-grotesk font-bold tracking-tight text-[#010103]">
                {project.title.toUpperCase()}
              </h1>
            </div>
            <span className="font-roc-grotesk text-4xl md:text-6xl text-[#010103]">
              ({projectIndex + 1})
            </span>
          </div>
        </section>

        {/* Main image/video */}
        <section className="w-full">
          {project.media[0] && (
            <div className="relative w-full aspect-video">
              {project.media[0].type === "video" ? (
                <video
                  src={project.media[0].src}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                />
              ) : project.media[0].type === "youtube" ? (
                <iframe
                  src={project.media[0].src}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <Image
                  src={project.media[0].src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          )}
        </section>

        {/* About section */}
        <section className="px-6 py-16 bg-[#f6f3ec]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103] mb-4 block">
                / ABOUT THE PROJECT
              </span>
              <div className="font-bootzy text-lg leading-relaxed text-[#010103]">
                {project.description}
              </div>
            </div>
            <div>
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103] mb-4 block">
                / CREDITS
              </span>
              <div className="font-bootzy text-lg text-[#010103] space-y-1">
                <p>Client: {project.title.split(" ")[0]}</p>
                <p>Art Director: Hyago Yury</p>
              </div>
              <div className="mt-6">
                <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103] mb-2 block">
                  / YEAR
                </span>
                <p className="font-bootzy text-lg text-[#010103]">2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Media gallery */}
        {project.media.length > 1 && (
          <section className="px-6 py-8 bg-[#f6f3ec]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.media.slice(1).map((media, index) => (
                <div key={index} className="relative aspect-video">
                  {media.type === "video" ? (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover rounded"
                      controls
                      playsInline
                    />
                  ) : media.type === "youtube" ? (
                    <iframe
                      src={media.src}
                      className="w-full h-full rounded"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <Image
                      src={media.src}
                      alt={`${project.title} - ${index + 2}`}
                      fill
                      className="object-cover rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other projects */}
        <section className="px-6 py-16 bg-[#f6f3ec]">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-roc-grotesk font-bold tracking-tight mb-12 text-[#010103]">
            OTHER PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((otherProject, index) => {
              const otherIndex = projects.findIndex(
                (p) => p.id === otherProject.id
              );
              return (
                <ProjectCard
                  key={otherProject.id}
                  project={otherProject}
                  index={otherIndex}
                  size="medium"
                />
              );
            })}
          </div>
        </section>

        {/* Contact section with footer */}
        <section className="relative min-h-screen flex flex-col justify-between px-6 py-16 bg-[#f6f3ec]">
          <div>
            <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103] mb-12 block">
              GET IN TOUCH
            </span>
            <div className="space-y-6">
              <Link href="tel:+5598985045688" className="block group">
                <div className="flex items-baseline gap-4">
                  <MagnifyText 
                    text="+55 98 98504-5688"
                    className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-[#010103]"
                  />
                  <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103]">
                    CALL
                  </span>
                </div>
              </Link>
              <Link href="mailto:placeholder@email.com" className="block group">
                <div className="flex items-baseline gap-4">
                  <MagnifyText 
                    text="Got a brief?"
                    className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-[#010103]"
                  />
                  <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103]">
                    MAIL
                  </span>
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-baseline gap-4">
                  <MagnifyText 
                    text="LinkedIn"
                    className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-[#010103]"
                  />
                  <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103]">
                    CHAT
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <footer className="pt-8 border-t border-[#010103]/10 mt-16">
            <div className="flex items-center justify-between font-bootzy text-xs tracking-[0.15em] uppercase text-[#010103]">
              <Link
                href="mailto:placeholder@email.com"
                className="hover:opacity-70 transition-opacity"
              >
                LET&apos;S CREATE TOGETHER
              </Link>
              <Link
                href="https://linkedin.com/in/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                LINKEDIN
              </Link>
              <span>MADE BY INÁCIO</span>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
