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
      className="group relative p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors pointer-events-none" />
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              {Icon && <Icon className="w-5 h-5" />}
            </div>
            <span className="text-xs font-mono font-bold text-blue-400/80 tracking-widest uppercase">
              {number}
            </span>
          </div>
          {category && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50">
              {category}
            </span>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
      </div>
      {features.length > 0 && (
        <div className="pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
          {features.map((feat, idx) => (
            <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/[0.06]">
              {feat}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
