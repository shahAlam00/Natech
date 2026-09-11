import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PartnershipBadge({
  text = "STRATEGIC TECHNOLOGY PARTNERSHIP",
  icon: Icon = Sparkles,
  variant = "default",
  className = "",
}) {
  const variantClass =
    variant === "cyan"
      ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
      : variant === "indigo"
      ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
      : "bg-blue-500/10 text-blue-300 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.18)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all ${variantClass} ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-blue-500"></span>
      </span>
      {Icon && <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-90 shrink-0" />}
      <span className="truncate">{text}</span>
    </motion.div>
  );
}