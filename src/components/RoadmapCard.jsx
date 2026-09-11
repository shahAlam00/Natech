import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Sparkles } from "lucide-react";

export default function RoadmapCard({ phase, title, timeline, description, deliverables = [], highlight = false, delay = 0 }) {
  const baseClass = highlight
    ? "glass-card-accent shadow-[0_0_35px_rgba(59,130,246,0.15)] border-blue-500/40 border"
    : "glass-panel glass-panel-hover";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-8 sm:p-10 rounded-3xl transition-all duration-300 flex flex-col justify-between ${baseClass}`}
    >
      {highlight && (
        <div className="absolute -top-3.5 left-8 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.5)] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Active Focus</span>
        </div>
      )}
      <div>
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-blue-400">{phase}</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs sm:text-sm font-medium shadow-sm">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span>{timeline}</span>
          </div>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        {description && (
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">{description}</p>
        )}
      </div>
      <div className="pt-6 border-t border-slate-800/80 space-y-3.5">
        <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">Key Deliverables</h4>
        {deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-medium">
            <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <span className="leading-normal">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}