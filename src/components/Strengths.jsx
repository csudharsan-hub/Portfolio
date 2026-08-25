import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Flame, BrainCircuit, Users } from 'lucide-react';
import { strengthsData } from '../data/portfolioData';

const strengthIcons = {
  Clock,
  Flame,
  BrainCircuit,
  Users,
};

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-mystic-dark/70 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Core Disciplines</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Arcane Pillars of Craft
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-2" />
        </div>

        {/* Strengths Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {strengthsData.map((item, idx) => {
            const IconComp = strengthIcons[item.icon] || Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/50 hover:shadow-sigil-orange transition-all duration-300 flex flex-col items-center text-center group bg-[#090812]"
              >
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-mystic-orange/20 to-mystic-gold/20 border border-mystic-orange/40 flex items-center justify-center text-mystic-goldBright mb-4 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,107,26,0.6)] transition-all">
                  <IconComp className="w-6 h-6" />
                  <span className="absolute -bottom-1 -right-1 text-xs select-none">
                    {item.glyph}
                  </span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-white group-hover:text-mystic-goldBright transition-colors mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono tracking-wider text-mystic-cyan uppercase mb-2">
                  {item.loreTitle}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
