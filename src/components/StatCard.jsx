import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ value, label, subtext, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover overflow-hidden group"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-gradient-cyan">
          {value}
        </span>
        {Icon && (
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-1">{label}</h3>
      {subtext && (
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">{subtext}</p>
      )}
    </motion.div>
  );
}
