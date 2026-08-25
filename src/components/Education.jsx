import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, GraduationCap, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-dark/80 flex flex-col items-center justify-center"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-mystic-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Sanctum Chronicles</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Education & Academy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            The chronological timeline of foundational scholarship and academic disciplines.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-4xl mx-auto relative">
          {/* Central spine */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-mystic-orange via-mystic-gold to-mystic-cyan opacity-40" />

          <div className="space-y-8 sm:space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.institution + item.degree}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Central Node Rune */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0a12] border-2 border-mystic-orange shadow-[0_0_15px_rgba(255,107,26,0.6)] flex items-center justify-center text-sm z-10">
                    <span className="select-none">{item.seal}</span>
                  </div>

                  {/* Spacer for Alternate side */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-14 sm:pl-0">
                    <div className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/50 hover:shadow-mystic-card-hover transition-all duration-300 text-left relative overflow-hidden group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono tracking-widest text-mystic-cyan uppercase px-2.5 py-0.5 rounded-full bg-mystic-cyan/10 border border-mystic-cyan/20">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-mystic-orange" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-mystic-goldBright transition-colors mb-1">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-mystic-orange shrink-0" />
                        <span>{item.institution}</span>
                      </p>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-mystic-gold/30 text-mystic-goldBright font-mono text-xs font-bold mb-3">
                        <Award className="w-3.5 h-3.5 text-mystic-gold" />
                        <span>{item.score}</span>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed font-mono">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
