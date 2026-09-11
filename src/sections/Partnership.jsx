import React from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Cpu,
  Layers,
  Building2,
  Wrench,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Cloud,
  Bot,
  Network,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { A1AutoKingLogo, NATechLogo } from '../components/Logos';

export default function Partnership() {
  const autoKingPoints = [
    { title: 'Automotive Inventory', desc: 'Extensive multi-category parts inventory and physical warehouse footprint' },
    { title: 'Dealer Relationships', desc: 'Established trust and repeat wholesale purchasing accounts' },
    { title: 'Workshop Network', desc: 'Active automotive repair shops requiring daily parts replenishment' },
    { title: 'Customer Demand', desc: 'Continuous stream of automotive part queries, quotes, and buyers' },
    { title: 'Industry Knowledge', desc: 'Deep commercial domain mastery of automotive market dynamics' },
    { title: 'Parts Expertise', desc: 'Accurate technical specifications, cross-compatibility, and fitment know-how' },
  ];

  const naTechPoints = [
    { title: 'Web Platforms', desc: 'High-performance, sub-second latency digital storefronts and catalogs' },
    { title: 'Mobile Applications', desc: 'Native iOS and Android apps for mechanics, drivers, and field reps' },
    { title: 'Cloud Infrastructure', desc: 'Auto-scaling, enterprise AWS/GCP cloud environments with 99.99% SLA' },
    { title: 'AI Automation', desc: 'Intelligent inventory reordering, VIN decoding, and automated pricing' },
    { title: 'APIs & Integrations', desc: 'Seamless connectors to ERPs, accounting, courier tracking, and payment gateways' },
    { title: 'Data & Analytics', desc: 'Executive intelligence dashboards, customer LTV, and parts demand forecasting' },
  ];

  return (
    <section id="partnership" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="STRATEGIC ALLIANCE"
          title="Two Strengths."
          highlight="One Platform."
          description="A balanced co-engineering alliance combining established automotive commercial leadership with modern digital platform architecture."
        />

        {/* Dual Partner Cards with Center Nexus */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mt-12">
          {/* LEFT: A1 Auto King Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden border border-blue-500/20 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <A1AutoKingLogo className="h-10" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  Domain Leadership
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Automotive Intelligence
              </h3>
              <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
                Decades of real-world automotive parts distribution, dealer networks, workshop relationships, and physical inventory capabilities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {autoKingPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.05] hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-100">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug pl-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-300 font-medium">
              <span>Foundation: Proven Market Footprint</span>
              <span className="font-mono uppercase text-slate-400">Partner 01</span>
            </div>
          </motion.div>

          {/* Central Glowing Connector (Desktop Floating Badge) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 p-[1px] shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              <div className="w-full h-full bg-[#07090e] rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                ×
              </div>
            </motion.div>
            <div className="mt-2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest shadow-lg">
              Fusion
            </div>
          </div>

          {/* RIGHT: NA Tech Consulting LLC Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden border border-indigo-500/20 flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <NATechLogo className="h-10" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  Engineering Core
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Technology Intelligence
              </h3>
              <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
                Enterprise software engineering, modern cloud architecture, AI automation, custom APIs, and high-performance digital platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {naTechPoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-950/60 border border-white/[0.05] hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-100">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug pl-6 font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-indigo-300 font-medium">
              <span>Execution: Full-Stack Digital Acceleration</span>
              <span className="font-mono uppercase text-slate-400">Partner 02</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl glass-card-accent text-center max-w-4xl mx-auto border border-blue-500/30"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-slate-200">
            <span className="text-white font-bold">Together</span>
            <span className="text-blue-400 font-bold">→</span>
            <span className="text-gradient-cyan font-bold">
              Connected Digital Automotive Ecosystem
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1.5 font-light">
            Merging automotive commercial assets with enterprise software scalability to dominate modern automotive retail and B2B wholesale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}