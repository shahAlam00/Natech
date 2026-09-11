import React from "react";
import { Mail, Phone, Handshake, Calendar, FileText } from "lucide-react";

export default function Contact({ isOpen, onClose, initialType = "strategy" }) {
  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-[#0b1329] border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-sky-400 text-xs font-bold tracking-[0.2em] uppercase">
                NEXT STEP
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Let's define the first phase together.
              </h2>
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                A 45-minute strategy call to review inventory data, priority channels and the fastest path to a live platform — followed by a written phase-one scope and timeline.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
         
                

              </div>
            </div>

            {/* Right Column: Contact Detail Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email Card */}
              <div className="bg-[#070d1f] border border-slate-800/90 rounded-2xl p-5 flex items-start gap-4 transition-all hover:border-sky-500/30">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-1">
                    EMAIL
                  </span>
                  <a 
                    href="mailto:partnerships@natechconsulting.com" 
                    className="text-white text-sm sm:text-base font-semibold hover:text-sky-400 transition-colors break-all"
                  >
                    partnerships@natechconsulting.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#070d1f] border border-slate-800/90 rounded-2xl p-5 flex items-start gap-4 transition-all hover:border-sky-500/30">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-1">
                    PHONE
                  </span>
                  <span className="text-white text-sm sm:text-base font-semibold">
                    Available on request
                  </span>
                </div>
              </div>

              {/* Proposal For Card */}
              <div className="bg-[#070d1f] border border-slate-800/90 rounded-2xl p-5 flex items-start gap-4 transition-all hover:border-sky-500/30">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block mb-1">
                    PROPOSAL FOR
                  </span>
                  <span className="text-white text-sm sm:text-base font-semibold leading-snug block">
                    A1 Auto King — Strategic Technology Partnership
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}