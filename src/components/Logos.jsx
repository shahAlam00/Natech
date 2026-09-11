import React from "react";

export function A1AutoKingLogo({ className = "h-8", showText = true, textClass = "text-white" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.25)] group-hover:border-blue-400 transition-colors shrink-0">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4L30 11V23L18 31L6 23V11L18 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 22L18 13L22 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 19.5H20.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="8" r="1.5" fill="#60A5FA" />
        </svg>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full blur-[2px] opacity-75" />
      </div>
      {showText && (
        <div className="flex flex-col text-left leading-tight min-w-0">
          <span className={`font-bold tracking-tight text-base sm:text-lg font-sans truncate ${textClass}`}>
            A1 AUTO KING
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-semibold mt-0.5">
            Automotive Enterprise
          </span>
        </div>
      )}
    </div>
  );
}

export function NATechLogo({ className = "h-8", showText = true, textClass = "text-white" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.25)] group-hover:border-indigo-400 transition-colors shrink-0">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 5L30 12V24L18 31L6 24V12L18 5Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M18 5V31" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
          <path d="M6 12L18 18L30 12" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2.5" fill="#818CF8" />
          <circle cx="18" cy="5" r="1.5" fill="#38BDF8" />
          <circle cx="30" cy="24" r="1.5" fill="#38BDF8" />
          <circle cx="6" cy="24" r="1.5" fill="#38BDF8" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full blur-[2px] opacity-75" />
      </div>
      {showText && (
        <div className="flex flex-col text-left leading-tight min-w-0">
          <span className={`font-bold tracking-tight text-base sm:text-lg font-sans truncate ${textClass}`}>
            NA TECH
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-indigo-400 font-semibold mt-0.5">
            Consulting LLC
          </span>
        </div>
      )}
    </div>
  );
}

export function PartnershipLockup({ className = "", compact = false }) {
  return (
    <div className={`inline-flex items-center gap-3 sm:gap-4 flex-wrap ${className}`}>
      <A1AutoKingLogo showText={!compact} />
      <span className="text-slate-400 font-light text-lg sm:text-xl select-none px-1">x</span>
      <NATechLogo showText={!compact} />
    </div>
  );
}