import React from "react";
import { ArrowUp, Mail, Globe, Shield, Lock } from "lucide-react";

export default function Footer({ onOpenStrategyModal }) {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <footer className="relative bg-[#05070a] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {/* Updated Logo Matching NA Tech Consulting LLC Style */}
            <a href="#" className="flex items-center gap-3.5 group text-decoration-none">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-b from-[#38bdf8] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
                <span className="text-black font-extrabold text-base sm:text-lg tracking-tight">NA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-tight flex items-center gap-1.5">
                  NA Tech Consulting
                </span>
                <span className="text-slate-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase leading-none mt-1">
                  LLC
                </span>
              </div>
            </a>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-sm leading-relaxed font-light">
              Building the digital infrastructure for the next generation of automotive commerce. A unified co-engineering alliance.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 font-mono shadow-sm">
                <Lock className="w-3.5 h-3.5" /> SOC-2 Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 font-mono shadow-sm">
                <Shield className="w-3.5 h-3.5" /> Enterprise SLA
              </span>
            </div>
          </div>

          {/* Quick Nav: Partnership */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">Partnership</h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-light">
              <li><a href="#partnership" className="hover:text-blue-400 transition-colors">Two Strengths. One Platform.</a></li>
              <li><a href="#opportunity" className="hover:text-blue-400 transition-colors">Market Opportunity</a></li>
              <li><a href="#transformation" className="hover:text-blue-400 transition-colors">The Transformation</a></li>
              <li><a href="#why-partnership" className="hover:text-blue-400 transition-colors">Why This Partnership Works</a></li>
              <li><a href="#partner-manifesto" className="hover:text-blue-400 transition-colors">Partner, Not Vendor</a></li>
            </ul>
          </div>

          {/* Quick Nav: Platform */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300 font-light">
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Connected Ecosystem</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">12-Module Solution Stack</a></li>
              <li><a href="#platform" className="hover:text-blue-400 transition-colors">Digital Core Architecture</a></li>
              <li><a href="#roadmap" className="hover:text-blue-400 transition-colors">Phased 4-Stage Roadmap</a></li>
              <li><a href="#business-model" className="hover:text-blue-400 transition-colors">Partnership Models</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">Direct Contact</h4>
            <ul className="space-y-3.5 text-sm sm:text-base text-slate-300">
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                <span className="font-light">Global Digital Commerce</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                <span className="text-white font-medium">partner@natech-a1.com</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenStrategyModal("strategy")}
                  className="px-4 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-200 text-xs sm:text-sm font-semibold transition-colors cursor-pointer w-full text-center shadow-md shadow-blue-600/20"
                >
                  Book Strategy Session
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-light">
          <div>
            © 2026 <span className="text-white font-medium">A1 Auto King x NA Tech Consulting LLC</span>. Strategic Technology Partnership. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-400 font-medium">Enterprise Automotive Commerce</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-800 shadow-sm"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}