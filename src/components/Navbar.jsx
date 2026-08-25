import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
import { soundManager } from '../utils/soundManager';

const navLinks = [
  { name: 'Origin', href: '#about' },
  { name: 'Spells & Stack', href: '#skills' },
  { name: 'Dimensions', href: '#projects' },
  { name: 'Chronicles', href: '#education' },
  { name: 'Relics', href: '#certifications' },
  { name: 'Transmission', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const state = soundManager.toggleSound();
    setSoundActive(state);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundManager.playSpellCast();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-3 sm:py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-mystic shadow-portal-inner border border-mystic-orange/30 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
            : 'bg-mystic-dark/60 backdrop-blur-md border border-mystic-orange/20'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-mystic-orange to-mystic-gold p-[1px] group-hover:shadow-[0_0_15px_rgba(255,107,26,0.8)] transition-all duration-300">
            <div className="w-full h-full bg-[#07070a] rounded-full flex items-center justify-center">
              <span className="font-cinzel text-xs font-bold text-mystic-goldBright group-hover:scale-110 transition-transform">
                ⚡
              </span>
            </div>
            <div className="absolute inset-0 rounded-full border border-mystic-orange/40 border-dashed animate-spin-cw-slow pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel font-bold text-sm sm:text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-300">
              SUDHARSAN C
            </span>
            <span className="text-[10px] tracking-widest text-mystic-gold/70 uppercase font-mono hidden sm:block">
              Sanctum of Code
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold shadow-[0_0_12px_rgba(255,107,26,0.3)] bg-gradient-to-r from-mystic-orange/20 to-mystic-gold/20 border border-mystic-orange/40'
                    : 'text-gray-300 hover:text-mystic-goldBright hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeRune"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mystic-orange shadow-[0_0_8px_#ff6b1a]"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Procedural Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            title={soundActive ? 'Silence Arcane Audio' : 'Summon Arcane Audio'}
            className={`p-2 rounded-full border transition-all duration-300 ${
              soundActive
                ? 'border-mystic-cyan bg-mystic-cyan/10 text-mystic-cyan shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                : 'border-gray-700 bg-white/5 text-gray-400 hover:text-white hover:border-gray-500'
            }`}
            aria-label="Toggle Mystic Sound"
          >
            {soundActive ? (
              <Volume2 className="w-4 h-4 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-cinzel font-semibold tracking-wider text-black bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 hover:brightness-110 shadow-[0_0_15px_rgba(255,107,26,0.4)] transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conjure</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              soundManager.playSigilChime();
            }}
            className="md:hidden p-2 rounded-full border border-mystic-orange/30 bg-mystic-card text-mystic-goldBright hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Modal Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-4 right-4 max-w-md mx-auto p-4 rounded-2xl glass-mystic border border-mystic-orange/40 shadow-portal-glow md:hidden flex flex-col gap-2 z-50"
          >
            <div className="text-center py-1 border-b border-mystic-orange/20 mb-1">
              <span className="font-cinzel text-xs text-mystic-gold uppercase tracking-widest">
                Sanctum Dimensions
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium tracking-wide text-gray-200 hover:text-white hover:bg-mystic-orange/15 hover:border hover:border-mystic-orange/30 transition-all"
              >
                <span>{link.name}</span>
                <span className="text-mystic-gold text-xs font-mono">✦</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
