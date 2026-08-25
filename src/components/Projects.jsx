import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { GitHubIcon } from './Icons';
import ProjectModal from './ProjectModal';
import { soundManager } from '../utils/soundManager';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInspect = (proj) => {
    soundManager.playPortalHum();
    setSelectedProject(proj);
  };

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-void/95 flex flex-col items-center justify-center"
    >
      {/* Dimensional glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-transparent via-mystic-orange/5 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Dimensions Traversed</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Featured Creations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Real-world backend realms, IoT transit networks, and full-stack software conjured with modern frameworks.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-6 sm:p-8 rounded-3xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/60 hover:shadow-portal-glow transition-all duration-300 flex flex-col justify-between text-left group overflow-hidden bg-[#0c0b16]/80"
            >
              {/* Corner portal aura */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-mystic-orange/15 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-mystic-orange/30 transition-all duration-500" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-mystic-orange/20 border-dashed rounded-full animate-spin-cw-slow pointer-events-none group-hover:border-mystic-orange/50 transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-mystic-orange/15 border border-mystic-orange/30 text-mystic-goldBright">
                    {project.type}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Signature Art
                    </span>
                  )}
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white group-hover:text-mystic-goldBright transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-mystic-cyan mb-4">{project.subtitle}</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metrics / Stats preview */}
                <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-black/40 border border-mystic-orange/10 font-mono text-xs">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k} className="flex flex-col">
                      <span className="text-[10px] uppercase text-gray-500">{k}</span>
                      <span className="text-mystic-gold font-semibold truncate">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-mystic-orange/10 border border-mystic-orange/20 text-mystic-orange">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Bottom Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-mystic-orange/15">
                  <button
                    onClick={() => handleInspect(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-cinzel font-semibold tracking-wider text-mystic-goldBright hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-mystic-orange" />
                    <span>Inspect Dimension</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-mystic-orange/10 border border-mystic-orange/30 text-gray-200 hover:text-white hover:bg-mystic-orange/25 hover:border-mystic-orange transition-all"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-mystic-orange" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
