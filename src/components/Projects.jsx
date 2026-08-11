import { projects } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Software & Open-Source Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Real-world systems, cross-platform applications, and utility tools built from scratch.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/40 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-blue-300 tracking-wide mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags & Footer Link */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mb-5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>View Repository & Code</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
