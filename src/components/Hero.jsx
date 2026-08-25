import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';
import { soundManager } from '../utils/soundManager';

export default function Hero() {
  const scrollToSection = (id) => {
    soundManager.playSpellCast();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[680px] h-[340px] sm:h-[500px] md:h-[680px] rounded-full bg-gradient-to-tr from-mystic-orange/20 via-mystic-amber/15 to-mystic-gold/10 blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        {/* Concentric Rotating Sling-Ring Mandala Portal */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center mb-6 sm:mb-8">
          {/* Outer Ring 1 */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 w-full h-full pointer-events-none sling-ring-fire"
            viewBox="0 0 400 400"
          >
            <circle
              cx="200"
              cy="200"
              r="185"
              fill="none"
              stroke="#ff6b1a"
              strokeWidth="2.5"
              strokeDasharray="14 8 4 8"
              className="opacity-90"
            />
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#ffd700"
              strokeWidth="1.2"
              strokeDasharray="8 12"
              className="opacity-75"
            />
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const cx = 200 + 178 * Math.cos(angle);
              const cy = 200 + 178 * Math.sin(angle);
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={i % 2 === 0 ? '3.5' : '2'}
                  fill={i % 4 === 0 ? '#00e5ff' : '#ff9f1c'}
                />
              );
            })}
          </motion.svg>

          {/* Middle Ring 2 */}
          <motion.svg
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[82%] h-[82%] pointer-events-none"
            viewBox="0 0 320 320"
          >
            <circle
              cx="160"
              cy="160"
              r="145"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="opacity-60"
            />
            <polygon
              points="160,20 280,230 40,230"
              fill="none"
              stroke="#ff8c38"
              strokeWidth="1.2"
              className="opacity-50"
            />
            <polygon
              points="160,300 280,90 40,90"
              fill="none"
              stroke="#ffb347"
              strokeWidth="1.2"
              className="opacity-50"
            />
          </motion.svg>

          {/* Inner Ring 3 */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[60%] h-[60%] pointer-events-none"
            viewBox="0 0 240 240"
          >
            <rect
              x="45"
              y="45"
              width="150"
              height="150"
              fill="none"
              stroke="#00e5ff"
              strokeWidth="1"
              className="opacity-40"
            />
            <rect
              x="45"
              y="45"
              width="150"
              height="150"
              transform="rotate(45 120 120)"
              fill="none"
              stroke="#ffd700"
              strokeWidth="1"
              className="opacity-40"
            />
          </motion.svg>

          {/* Center Monogram / Avatar */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-mystic-orange via-mystic-gold to-mystic-cyan shadow-[0_0_40px_rgba(255,107,26,0.6)]"
          >
            <div className="w-full h-full rounded-full bg-[#090812] flex flex-col items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-mystic-orange/20 via-transparent to-mystic-purple/30 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fff275] via-[#ff9f1c] to-[#ffb703] drop-shadow-[0_0_15px_rgba(255,107,26,0.9)]">
                  C.S
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-mystic-cyan tracking-widest uppercase mt-1">
                  JAVA • AI
                </span>
              </div>
              <div className="absolute w-20 h-20 rounded-full bg-mystic-orange/20 blur-lg animate-pulse pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Sanctum Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-[#fce277] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(255,107,26,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-mystic-orange animate-spin-cw-slow" />
          <span>Sanctum of Full-Stack Sorcery</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_25px_rgba(255,107,26,0.5)] mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-grotesk text-base sm:text-xl md:text-2xl font-semibold text-gray-200 max-w-3xl leading-relaxed mb-4"
        >
          <span className="text-mystic-cyan font-bold">Java (Spring Boot)</span> Developer{' '}
          <span className="text-mystic-gold/60 mx-1">|</span> Full-Stack & AI-Integrated Applications
        </motion.h2>

        {/* Mystic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-400 font-marcellus text-base sm:text-lg md:text-xl italic max-w-2xl leading-relaxed mb-8"
        >
          "{personalInfo.tagline}"
        </motion.p>

        {/* Primary & Secondary Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-sm font-cinzel font-bold tracking-wider text-black bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 hover:brightness-110 shadow-[0_0_25px_rgba(255,107,26,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>View Projects</span>
            <span className="font-mono text-xs opacity-75">✦</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full text-sm font-cinzel font-semibold tracking-wider text-gray-200 bg-mystic-dark/80 hover:bg-mystic-card border border-mystic-orange/40 hover:border-mystic-orange shadow-[0_0_15px_rgba(255,107,26,0.2)] hover:shadow-[0_0_25px_rgba(255,107,26,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-mystic-orange group-hover:scale-110 transition-transform" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Sigils */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository Realm"
            className="p-3 rounded-full bg-mystic-dark/80 border border-mystic-orange/20 text-gray-300 hover:text-mystic-goldBright hover:border-mystic-orange/60 hover:shadow-[0_0_15px_rgba(255,107,26,0.4)] transition-all duration-300 transform hover:scale-110"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Astral Network"
            className="p-3 rounded-full bg-mystic-dark/80 border border-mystic-orange/20 text-gray-300 hover:text-mystic-cyan hover:border-mystic-cyan/60 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:scale-110"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Algorithmic Trial Chamber"
            className="p-3 rounded-full bg-mystic-dark/80 border border-mystic-orange/20 text-gray-300 hover:text-mystic-amber hover:border-mystic-amber/60 hover:shadow-[0_0_15px_rgba(255,159,28,0.4)] transition-all duration-300 transform hover:scale-110"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            title="Direct Astral Mail"
            className="p-3 rounded-full bg-mystic-dark/80 border border-mystic-orange/20 text-gray-300 hover:text-emerald-400 hover:border-emerald-400/60 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] font-mono tracking-widest text-mystic-gold uppercase">
          Descend
        </span>
        <ArrowDown className="w-4 h-4 text-mystic-orange" />
      </motion.div>
    </section>
  );
}
