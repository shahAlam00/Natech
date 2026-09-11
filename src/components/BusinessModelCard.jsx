import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function BusinessModelCard({ number, title, tagline, description, recommended = false, features = [], upside = "", delay = 0 }) {
  const cardClass = recommended
    ? "bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-950 border-2 border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.25)]"
    : "glass-panel glass-panel-hover";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative p-7 sm:p-9 rounded-3xl flex flex-col justify-between transition-all duration-300 ${cardClass}`}
    >
      {recommended && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.6)] flex items-center gap-1.5 border border-blue-300/40 whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RECOMMENDED PARTNERSHIP</span>
        </div>
      )}
      <div>
        <div className="mb-4">
          <span className="text-xs font-mono font-bold text-blue-400 tracking-widest">{number}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm font-semibold text-blue-300/90 mb-4">{tagline}</p>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-light">{description}</p>
        <div className="space-y-3 pt-5 border-t border-slate-800/80 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
              <div className="w-5 h-5 rounded-full bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {upside && (
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="text-blue-400 font-semibold block mb-1">Shared Value:</span>
            {upside}
          </div>
        )}
      </div>
    </motion.div>
  );
}