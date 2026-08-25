import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { soundManager } from '../utils/soundManager';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundManager.playSigilChime();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl glass-mystic border border-mystic-orange/40 rounded-3xl shadow-portal-glow p-6 sm:p-8 z-10 my-8 overflow-hidden bg-[#0a0a14]"
        >
          {/* Top Mystic Gradient Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-mystic-orange via-mystic-gold to-mystic-cyan" />

          {/* Close Button */}
          <button
            onClick={() => {
              soundManager.playSigilChime();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-mystic-orange/30 text-gray-300 hover:text-white hover:border-mystic-orange transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/15 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-2 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
              <span>{project.type}</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide">
              {project.title}
            </h3>
            <p className="text-mystic-cyan text-sm font-mono mt-1">{project.subtitle}</p>
          </div>

          {/* Summary */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 border-l-2 border-mystic-orange pl-4 bg-mystic-orange/5 py-2 rounded-r-lg">
            {project.summary}
          </p>

          {/* Architectural Feats */}
          <div className="mb-6">
            <h4 className="font-cinzel text-sm uppercase tracking-widest text-mystic-goldBright mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-mystic-orange" />
              <span>Architectural Feats & Capabilities</span>
            </h4>
            <div className="space-y-2.5">
              {project.details.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Artifact Tech Stack */}
          <div className="mb-8">
            <h4 className="font-cinzel text-xs uppercase tracking-widest text-gray-400 mb-2">
              Artifact Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-mystic-orange/30 text-mystic-gold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-mystic-orange/20">
            <div className="text-xs text-gray-400 font-mono">
              Base Repository:{' '}
              <span className="text-mystic-orange font-semibold">csudharsan-hub</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-cinzel font-bold tracking-wider text-black bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 hover:brightness-110 shadow-[0_0_15px_rgba(255,107,26,0.4)] transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Summon Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
