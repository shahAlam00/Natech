import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = true,
  iconComponent: IconComponent = ArrowRight,
  className = "",
  onClick,
  href,
  type = "button",
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: "px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold gap-1.5",
    md: "px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold gap-2",
    lg: "px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.65)] hover:from-blue-500 hover:to-indigo-500 border border-blue-400/30",
    secondary:
      "bg-slate-900/80 backdrop-blur-md text-slate-100 border border-slate-700/80 hover:border-blue-500/50 hover:bg-slate-800/90 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    outline:
      "bg-transparent text-slate-200 border border-slate-800 hover:border-slate-600 hover:bg-white/[0.04]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.05]",
  };

  const combinedClass = `inline-flex items-center justify-center rounded-xl transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} {...props}>
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {icon && IconComponent && (
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          )}
        </span>
      </a>
    );
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && IconComponent && (
          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
        )}
      </span>
    </motion.button>
  );
}