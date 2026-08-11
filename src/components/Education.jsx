import { education, certifications } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, Check } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Degree programs, achievements, and formal technical specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Items (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span>Degrees & Academics</span>
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded bg-blue-500/20 text-blue-300 mb-1 border border-blue-500/30">
                      {edu.badge}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.institution}
                    </h4>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-gray-400 gap-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium text-gray-300 mb-2">
                  {edu.degree}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold text-xs">
                  <Check className="w-3.5 h-3.5" />
                  <span>{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications (1 Col) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Certifications</span>
            </h3>

            {certifications.map((cert, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col justify-between h-auto">
                <div>
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4">
                    Issued by <span className="text-gray-300 font-medium">{cert.issuer}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-xs rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-3 border-t border-white/10"
                >
                  <span>Verify Certificate Credentials</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
