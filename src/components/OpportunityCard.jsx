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
      className="group relative p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between"
    >
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:border-blue-400/50 transition-all duration-300">
            {Icon && <Icon className="w-8 h-8 sm:w-9 sm:h-9" />}
          </div>
          {tag && (
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-slate-800/90 text-slate-200 border border-slate-700/80 shadow-sm">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 font-light">
          {description}
        </p>
      </div>
      {points.length > 0 && (
        <div className="pt-6 border-t border-slate-800/80 space-y-3.5">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-medium">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span className="leading-normal">{point}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}