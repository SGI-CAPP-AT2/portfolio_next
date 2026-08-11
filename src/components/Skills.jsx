"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolioData";
import { Wrench, CheckCircle2, Code, Cpu, Database, Layers } from "lucide-react";

const getCategoryIcon = (category) => {
  switch (category) {
    case "Languages":
      return Code;
    case "Frameworks & Libraries":
      return Layers;
    case "Tools & Platforms":
      return Cpu;
    case "Databases":
      return Database;
    default:
      return Wrench;
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const categoriesToDisplay =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Core technologies, programming languages, and engineering tools I work with.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "All"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesToDisplay.map((catGroup) => {
            const Icon = getCategoryIcon(catGroup.category);
            return (
              <div key={catGroup.category} className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {catGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {catGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300 transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
