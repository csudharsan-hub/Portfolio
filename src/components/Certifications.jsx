import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Code, Cpu, Database, Flame, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const relicIcons = {
  Award,
  Code,
  Cpu,
  Database,
  Flame,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-void/90 border-t border-mystic-orange/10 flex flex-col items-center justify-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mystic-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Chamber of Relics</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Certified Artifacts & Honors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Authenticated credentials, competitive hackathons, and technical endorsements.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
          {certificationsData.map((item, idx) => {
            const IconComp = relicIcons[item.sigil] || Award;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/60 hover:shadow-sigil-gold transition-all duration-300 flex flex-col justify-between text-left group overflow-hidden bg-[#0c0b16]/75"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-mystic-orange/20 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-mystic-orange/20 to-mystic-gold/20 border border-mystic-orange/40 flex items-center justify-center text-mystic-goldBright group-hover:shadow-[0_0_12px_rgba(255,107,26,0.6)] transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-mystic-cyan px-2.5 py-0.5 rounded-full bg-mystic-cyan/10 border border-mystic-cyan/20">
                      {item.issuer}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-mystic-goldBright transition-colors mb-2">
                    {item.title}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 border border-mystic-gold/30 text-mystic-goldBright text-xs font-mono font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.score}</span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-mono">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-mystic-orange/15 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span className="text-mystic-gold/70 font-semibold">VERIFIED TALENT</span>
                  <span className="text-xs text-mystic-orange">✦ ✦ ✦</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
