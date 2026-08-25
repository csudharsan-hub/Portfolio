import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, Send, Check, Copy, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';
import { soundManager } from '../utils/soundManager';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    soundManager.playSigilChime();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundManager.playSpellCast();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff6b1a', '#ffd700', '#00e5ff', '#ff8c38'],
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-mystic-void border-t border-mystic-orange/20 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background portal energy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-mystic-orange/10 via-mystic-gold/10 to-mystic-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-orange/10 border border-mystic-orange/30 text-mystic-gold text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-mystic-orange" />
            <span>Astral Transmission</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffe066] via-[#ff9f1c] to-[#ffd700] drop-shadow-[0_0_20px_rgba(255,107,26,0.35)]">
            Open A Dimensional Portal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mystic-orange to-transparent mt-3" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mt-3">
            Send an incantation or establish direct communication across realms.
          </p>
        </div>

        {/* Dual Layout: Info Cards & Form */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/50 transition-all group bg-[#0d0c18]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-mystic-orange/15 border border-mystic-orange/30 flex items-center justify-center text-mystic-orange">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-mystic-orange/40 text-xs flex items-center gap-1 transition-all"
                  title="Copy Astral Address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span className="font-mono text-[10px]">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-mystic-gold/80 block mb-1">
                Direct Astral Mail
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-grotesk text-sm sm:text-base font-semibold text-white group-hover:text-mystic-goldBright transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-cyan/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all group block bg-[#0d0c18]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-mystic-cyan/15 border border-mystic-cyan/30 flex items-center justify-center text-mystic-cyan">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mystic-cyan block">
                    Professional Network
                  </span>
                  <span className="font-cinzel text-base font-bold text-white group-hover:text-mystic-cyan transition-colors">
                    LinkedIn Connection
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Connect for full-time roles, software engineering, and collaborations.
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-mystic-orange/60 hover:shadow-sigil-orange transition-all group block bg-[#0d0c18]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-mystic-orange/15 border border-mystic-orange/30 flex items-center justify-center text-mystic-orange">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mystic-gold block">
                    Source Grimoire
                  </span>
                  <span className="font-cinzel text-base font-bold text-white group-hover:text-mystic-goldBright transition-colors">
                    GitHub Profile
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Inspect public repositories, commits, and project architectures.
              </p>
            </a>

            {/* LeetCode Card */}
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-mystic border border-mystic-orange/20 hover:border-amber-500/60 transition-all group block bg-[#0d0c18]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <LeetCodeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block">
                    Algorithmic Sanctuary
                  </span>
                  <span className="font-cinzel text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    LeetCode Profile (250+ Solved)
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Review data structures mastery, Java solutions, and streak badges.
              </p>
            </a>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-mystic border border-mystic-orange/30 shadow-portal-glow bg-[#0d0c18] relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-mystic-orange/20">
                <Sparkles className="w-4 h-4 text-mystic-orange" />
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                  Dispatch Message Through Portal
                </h3>
              </div>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your incantation has traversed the portal! I will respond promptly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Name / Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Master Wong"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-mystic-orange/20 focus:border-mystic-orange focus:ring-1 focus:ring-mystic-orange text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                      Astral Email Coordinates
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@dimension.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-mystic-orange/20 focus:border-mystic-orange focus:ring-1 focus:ring-mystic-orange text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Time Java Role / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-mystic-orange/20 focus:border-mystic-orange focus:ring-1 focus:ring-mystic-orange text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Incantation / Message Content
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Weave your message into the portal..."
                    className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-mystic-orange/20 focus:border-mystic-orange focus:ring-1 focus:ring-mystic-orange text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl text-sm font-cinzel font-bold tracking-widest uppercase text-black bg-gradient-to-r from-mystic-goldBright via-mystic-orange to-amber-400 hover:brightness-110 shadow-[0_0_20px_rgba(255,107,26,0.5)] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Channeling Portal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                      <span>Cast Astral Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
