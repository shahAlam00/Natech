import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function SolutionCard({ number, icon: Icon, title, category, description, features = [], delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors pointer-events-none" />
      <div>
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              {Icon && <Icon className="w-7 h-7 sm:w-8 sm:h-8" />}
            </div>
            <span className="text-sm sm:text-base font-mono font-bold text-blue-400/90 tracking-widest uppercase">
              {number}
            </span>
          </div>
          {category && (
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700/80 shadow-sm">
              {category}
            </span>
          )}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors flex items-center justify-between tracking-tight">
          <span>{title}</span>
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2" />
        </h3>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">{description}</p>
      </div>
      {features.length > 0 && (
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
          {features.map((feat, idx) => (
            <span key={idx} className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08] font-medium shadow-sm">
              {feat}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}