import Header from "../components/Header";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f6f3ec]">
      <Header />

      <main className="pt-24">
        {/* Page title */}
        <section className="px-6 py-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-roc-grotesk font-bold tracking-tight text-[#010103]">
            ALL PROJECTS
          </h1>
        </section>

        {/* Projects grid */}
        <section className="px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                size="medium"
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 bg-[#f6f3ec] border-t border-[#010103]/10">
          <Footer variant="hero" />
        </footer>
      </main>
    </div>
  );
}
