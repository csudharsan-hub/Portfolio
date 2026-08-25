import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, ShieldCheck, Code2, Award, Zap, GraduationCap } from 'lucide-react';
import { stats } from '../data/portfolioData';

const iconMap = {
  Code2,
  Award,
  Zap,
  GraduationCap,
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-void/80 border-t border-mystic-orange/10 flex flex-col items-center justify-center"
    >
      {/* Mystic background mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-cw-slow">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#ff6b1a" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#d4af37" strokeWidth="2" />
          <polygon points="200,30 350,300 50,300" fill="none" stroke="#ff6b1a" strokeWidth="2" />
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Origin Story</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            The Arcane Genesis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
        </div>

        {/* Narrative Dual Cards */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="p-6 sm:p-8 rounded-2xl glass-mystic border border-mystic-orange/20 shadow-mystic-card relative overflow-hidden group hover:border-mystic-orange/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mystic-orange/10 rounded-full blur-2xl group-hover:bg-mystic-orange/20 transition-all" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-mystic-orange/15 border border-mystic-orange/30 text-mystic-orange">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                Kamar-Taj Academic Journey
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Pursuing Computer Science Engineering at{' '}
              <span className="text-mystic-goldBright font-medium">V.S.B Engineering College</span>{' '}
              (2023 – Expected May 2027) with an academic standing of{' '}
              <span className="text-mystic-cyan font-bold">7.7 CGPA</span>.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Trained in the sacred foundations of data structures, concurrent computation, and
              object-oriented paradigms — forging software with mathematical discipline.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl glass-mystic border border-mystic-orange/20 shadow-mystic-card relative overflow-hidden group hover:border-mystic-orange/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mystic-cyan/10 rounded-full blur-2xl group-hover:bg-mystic-cyan/20 transition-all" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-mystic-cyan/15 border border-mystic-cyan/30 text-mystic-cyan">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                Mastery of Backend Spells
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Specialized in crafting resilient{' '}
              <span className="text-mystic-orange font-semibold">Java & Spring Boot</span>{' '}
              architectures, role-secured RESTful services, and full-stack ecosystems infused with
              intelligent <span className="text-mystic-cyan font-semibold">AI workflows</span>.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Every system is built to withstand high concurrency, protect critical data boundaries,
              and maintain seamless real-time synchronization.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-cinzel text-xs uppercase tracking-widest text-mystic-gold/80">
              Runes of Algorithmic Mastery
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Zap;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/50 hover:shadow-sigil-orange transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-mystic-orange/20 to-mystic-gold/20 border border-mystic-orange/40 flex items-center justify-center text-mystic-goldBright mb-3 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,107,26,0.6)] transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="font-cinzel text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mystic-goldBright to-mystic-orange mb-1">
                    {item.value}
                  </span>
                  <span className="text-sm font-semibold text-gray-200 mb-1">{item.label}</span>
                  <span className="text-xs text-gray-400 font-mono">{item.sub}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
