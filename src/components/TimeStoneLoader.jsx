import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TimeStoneLoader({ onLoaded }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onLoaded) onLoaded();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508]"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-mystic-orange/20 via-mystic-emerald/30 to-mystic-cyan/20 blur-2xl animate-pulse" />
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="w-48 h-48 sm:w-56 sm:h-56"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#ff6b1a"
                strokeWidth="1.5"
                strokeDasharray="8 6 2 6"
                className="opacity-70"
              />
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="opacity-50"
              />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const cx = 100 + 84 * Math.cos(angle);
                const cy = 100 + 84 * Math.sin(angle);
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="2"
                    fill={i % 3 === 0 ? '#00e5ff' : '#ff9f1c'}
                  />
                );
              })}
            </motion.svg>

            <motion.svg
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-36 h-36 sm:w-40 sm:h-40"
              viewBox="0 0 160 160"
            >
              <polygon
                points="80,15 140,115 20,115"
                fill="none"
                stroke="#00e5ff"
                strokeWidth="1.5"
                className="opacity-60"
              />
              <polygon
                points="80,145 140,45 20,45"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                className="opacity-60"
              />
            </motion.svg>

            <div className="absolute flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  scale: [0.9, 1.15, 0.9],
                  boxShadow: [
                    '0 0 20px rgba(0, 229, 255, 0.6), 0 0 40px rgba(16, 185, 129, 0.4)',
                    '0 0 35px rgba(255, 107, 26, 0.8), 0 0 60px rgba(212, 175, 55, 0.6)',
                    '0 0 20px rgba(0, 229, 255, 0.6), 0 0 40px rgba(16, 185, 129, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-amber-500 flex items-center justify-center text-black font-bold text-lg"
              >
                <span className="font-cinzel text-xl font-black text-black select-none">ᛟ</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="font-cinzel text-base tracking-[0.3em] uppercase text-mystic-goldBright drop-shadow">
              Opening The Sanctum
            </p>
            <p className="text-xs text-gray-400 tracking-widest mt-1 font-mono">
              CHANNELING DIMENSIONAL RUNES...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
