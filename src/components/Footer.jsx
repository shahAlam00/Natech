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
          <div className="lg:col-span-2 space-y-4">
            {/* Updated Logo Matching NA Tech Consulting LLC Style */}
            <a href="#" className="flex items-center gap-3 group text-decoration-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#38bdf8] to-[#0284c7] flex items-center justify-center shadow-lg shadow-sky-500/20 shrink-0">
                <span className="text-black font-extrabold text-sm tracking-tight">NA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-tight flex items-center gap-1.5">
                  NA Tech Consulting
                </span>
                <span className="text-slate-400 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase leading-none mt-0.5">
                  LLC
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Building the digital infrastructure for the next generation of automotive commerce. A unified co-engineering alliance.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-blue-400 font-mono">
                <Lock className="w-3 h-3" /> SOC-2 Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-emerald-400 font-mono">
                <Shield className="w-3 h-3" /> Enterprise SLA
              </span>
            </div>
          </div>

          {/* Quick Nav: Partnership */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 mb-4">Partnership</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#partnership" className="hover:text-blue-400 transition-colors">Two Strengths. One Platform.</a></li>
              <li><a href="#opportunity" className="hover:text-blue-400 transition-colors">Market Opportunity</a></li>
              <li><a href="#transformation" className="hover:text-blue-400 transition-colors">The Transformation</a></li>
              <li><a href="#why-partnership" className="hover:text-blue-400 transition-colors">Why This Partnership Works</a></li>
              <li><a href="#partner-manifesto" className="hover:text-blue-400 transition-colors">Partner, Not Vendor</a></li>
            </ul>
          </div>

          {/* Quick Nav: Platform */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#ecosystem" className="hover:text-blue-400 transition-colors">Connected Ecosystem</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition-colors">12-Module Solution Stack</a></li>
              <li><a href="#platform" className="hover:text-blue-400 transition-colors">Digital Core Architecture</a></li>
              <li><a href="#roadmap" className="hover:text-blue-400 transition-colors">Phased 4-Stage Roadmap</a></li>
              <li><a href="#business-model" className="hover:text-blue-400 transition-colors">Partnership Models</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300 mb-4">Direct Contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Global Digital Commerce</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-300">partner@natech-a1.com</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenStrategyModal("strategy")}
                  className="px-3.5 py-2 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-colors cursor-pointer w-full text-center"
                >
                  Book Strategy Session
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <span className="text-slate-300 font-medium">A1 Auto King x NA Tech Consulting LLC</span>. Strategic Technology Partnership. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Enterprise Automotive Commerce</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}