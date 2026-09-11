import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function OpportunityCard({ icon: Icon, title, tag, description, points = [], delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-7 sm:p-8 rounded-3xl glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-400/50 transition-all duration-300">
            {Icon && <Icon className="w-7 h-7" />}
          </div>
          {tag && (
            <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 font-normal">
          {description}
        </p>
      </div>
      {points.length > 0 && (
        <div className="pt-5 border-t border-slate-800/80 space-y-2.5">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
