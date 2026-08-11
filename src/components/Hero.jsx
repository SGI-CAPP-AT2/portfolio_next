import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { Mail, ArrowRight, Download, Building2, Code2, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
              <Building2 className="w-3.5 h-3.5" />
              JPMorgan Chase & Co. Summer Intern
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Code2 className="w-3.5 h-3.5" />
              Google Summer of Code '25
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
              <GraduationCap className="w-3.5 h-3.5" />
              VIT Pune CSE (AI)
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{" "}
              <span className="glow-gradient-text">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gray-300">
              {personalInfo.role}
            </p>
          </div>

          {/* Subheading & Bio */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-gray-200 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Get In Touch</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-blue-300 text-sm font-medium transition-all"
            >
              <Download className="w-4 h-4" />
              <span>LaTeX Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Connect With Me
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
