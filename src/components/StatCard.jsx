import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ value, label, subtext, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative p-8 sm:p-10 rounded-3xl glass-panel glass-panel-hover overflow-hidden group flex flex-col justify-between"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <div className="flex items-start justify-between mb-6 sm:mb-8">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-gradient-cyan">
            {value}
          </span>
          {Icon && (
            <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-sm">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{label}</h3>
      </div>
      {subtext && (
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mt-2">{subtext}</p>
      )}
    </motion.div>
  );
}