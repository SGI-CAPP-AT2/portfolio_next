import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Key software engineering, cloud backend, and open-source contributions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-gray-900 border-2 border-blue-500 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-base font-semibold text-blue-300">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-gray-400 gap-1">
                    <span className="inline-flex items-center gap-1.5 font-medium text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
