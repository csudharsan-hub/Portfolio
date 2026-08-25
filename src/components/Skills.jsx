import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Terminal, Database, Wrench } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { soundManager } from '../utils/soundManager';

const categoryIcons = {
  backend: Layers,
  languages: Terminal,
  databases: Database,
  tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilter = (catId) => {
    soundManager.playSigilChime();
    setActiveCategory(catId);
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.name })))
      : skillsData
          .find((cat) => cat.id === activeCategory)
          ?.skills.map((s) => ({
            ...s,
            category: skillsData.find((cat) => cat.id === activeCategory).name,
          })) || [];

  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-dark/90 flex flex-col items-center justify-center"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-mystic-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Grimoire of Spells</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Arcane Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Mastery over distributed frameworks, backend engines, and database sanctuaries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => handleFilter('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-cinzel tracking-wider transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 text-black font-bold shadow-[0_0_15px_rgba(255,107,26,0.5)]'
                : 'glass-mystic text-gray-300 hover:text-white hover:border-mystic-orange/40'
            }`}
          >
            All Spells (16)
          </button>
          {skillsData.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-cinzel tracking-wider transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 text-black font-bold shadow-[0_0_15px_rgba(255,107,26,0.5)]'
                    : 'glass-mystic text-gray-300 hover:text-white hover:border-mystic-orange/40'
                }`}
              >
                <span>{cat.rune}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-5 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/60 hover:shadow-sigil-orange transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-[10px] font-mono tracking-widest text-mystic-cyan/80 px-2 py-0.5 rounded-full bg-mystic-cyan/10 border border-mystic-cyan/20">
                  {skill.runeTag}
                </div>

                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-mystic-goldBright transition-colors mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono mb-4 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-300 mb-1.5">
                    <span className="text-mystic-gold/80 text-[11px] uppercase">Proficiency</span>
                    <span className="text-mystic-orange font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-black/60 overflow-hidden p-[0.5px] border border-mystic-orange/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-mystic-orange via-amber-400 to-mystic-goldBright shadow-[0_0_8px_#ff6b1a]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
