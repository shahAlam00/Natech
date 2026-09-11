import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, ShieldCheck, Activity, Layers, Cpu } from 'lucide-react';
import PartnershipBadge from '../components/PartnershipBadge';
import Button from '../components/Button';
import { A1AutoKingLogo, NATechLogo } from '../components/Logos';

export default function Hero({ onOpenStrategyModal }) {
  const scrollToPartnership = (e) => {
    e.preventDefault();
    const target = document.querySelector('#partnership');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden grid-background">
      {/* Cinematic ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Badge */}
        <div className="mb-6 flex justify-center">
          <PartnershipBadge text="STRATEGIC TECHNOLOGY PARTNERSHIP" />
        </div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-4 max-w-5xl mx-auto"
        >
          Building the Digital Future of{' '}
          <span className="text-gradient-blue inline-block">
            Automotive Commerce
          </span>
        </motion.h1>

        {/* Co-Branded Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl font-bold text-slate-300 mb-6"
        >
          <span className="text-white">A1 Auto King</span>
          <span className="text-blue-400 font-light text-xl sm:text-2xl">×</span>
          <span className="text-white">NA Tech Consulting LLC</span>
        </motion.div>

        {/* Core Value Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          A strategic partnership combining{' '}
          <span className="text-white font-semibold">A1 Auto King’s</span> automotive expertise and market ecosystem with{' '}
          <span className="text-white font-semibold">NA Tech Consulting’s</span> technology capabilities to create a connected, scalable and intelligent automotive platform.
        </motion.p>

        {/* Equal Partners Visual Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl glass-card-accent mb-10 border border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.15)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
            {/* Left Partner */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  A1 Auto King
                </span>
              </div>
              <div className="text-sm font-semibold text-blue-300">
                Automotive Expertise
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                Inventory • Dealers • Workshops
              </div>
            </div>

            {/* Central Connector */}
            <div className="flex flex-col items-center justify-center py-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.7)] animate-pulse">
                ×
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1.5 font-mono">
                Co-Engineered
              </span>
            </div>

            {/* Right Partner */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] text-left sm:text-right">
              <div className="flex items-center gap-2 mb-1 justify-start sm:justify-end">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  NA Tech Consulting
                </span>
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
              <div className="text-sm font-semibold text-indigo-300">
                Technology Expertise
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                AI • Cloud • Software Platforms
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-center gap-2 text-xs font-semibold text-slate-200">
            <span className="text-blue-400 font-bold">Goal:</span>
            <span>One Connected Digital Automotive Ecosystem</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >



        </motion.div>
      </div>
    </section>
  );
}