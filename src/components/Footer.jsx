import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundManager } from '../utils/soundManager';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playSigilChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#040407] border-t border-mystic-orange/15 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Mystic Monogram Sigil */}
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-mystic-orange to-mystic-gold p-[1px] mb-4 shadow-[0_0_20px_rgba(255,107,26,0.4)]">
          <div className="w-full h-full bg-[#050508] rounded-full flex items-center justify-center">
            <span className="font-cinzel text-base font-bold text-mystic-goldBright">ᛟ</span>
          </div>
        </div>

        <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] mb-2">
          {personalInfo.name}
        </h3>
        <p className="text-xs text-gray-400 font-mono tracking-wider uppercase mb-6">
          Java (Spring Boot) Developer • Full-Stack & AI Systems Architect
        </p>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-gray-400 mb-8">
          <a href="#about" className="hover:text-mystic-gold transition-colors">
            Origin
          </a>
          <span className="text-gray-700">•</span>
          <a href="#skills" className="hover:text-mystic-gold transition-colors">
            Spells
          </a>
          <span className="text-gray-700">•</span>
          <a href="#projects" className="hover:text-mystic-gold transition-colors">
            Dimensions
          </a>
          <span className="text-gray-700">•</span>
          <a href="#education" className="hover:text-mystic-gold transition-colors">
            Chronicles
          </a>
          <span className="text-gray-700">•</span>
          <a href="#certifications" className="hover:text-mystic-gold transition-colors">
            Relics
          </a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="hover:text-mystic-gold transition-colors">
            Transmission
          </a>
        </div>

        {/* Dividing Star Rune */}
        <div className="relative w-full max-w-xs flex items-center justify-center mb-6">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-mystic-orange/30 to-transparent" />
          <span className="absolute text-[10px] text-mystic-gold bg-[#040407] px-2">✦</span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-xs text-gray-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Sudharsan C. Woven with React, Tailwind & Mystic Arts.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-mystic-orange/20 text-mystic-gold hover:text-white hover:border-mystic-orange transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Ascend to Peak</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
