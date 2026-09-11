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
      className={`relative p-7 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${baseClass}`}
    >
      {highlight && (
        <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.5)] flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          <span>Active Focus</span>
        </div>
      )}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-blue-400">{phase}</span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{timeline}</span>
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{title}</h3>
        {description && (
          <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">{description}</p>
        )}
      </div>
      <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Deliverables</h4>
        {deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span className="leading-tight">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
