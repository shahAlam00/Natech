import React from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Cpu,
  Users,
  TrendingUp,
  Layers,
  Building2,
  Globe,
  Smartphone,
  Bot,
  Cloud,
  Network,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowDown,
  Plus,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const autoKingStrengths = [
  { icon: Car, label: 'Automotive Expertise', desc: 'Deep commercial knowledge of the parts industry' },
  { icon: Layers, label: 'Physical Inventory', desc: 'Multi-warehouse stock ready for digital activation' },
  { icon: Building2, label: 'Dealer Relationships', desc: 'Established B2B wholesale accounts and trust' },
  { icon: Users, label: 'Workshop Ecosystem', desc: 'Active trade network with recurring demand' },
  { icon: TrendingUp, label: 'Customer Demand', desc: 'Proven market pull and inbound sales activity' },
  { icon: Globe, label: 'Market Distribution', desc: 'Established geographic reach and brand presence' },
];

const naTechStrengths = [
  { icon: Cpu, label: 'Software Engineering', desc: 'Full-stack product and platform development' },
  { icon: Cloud, label: 'Cloud Infrastructure', desc: 'Scalable, fault-tolerant enterprise cloud systems' },
  { icon: Bot, label: 'AI & Automation', desc: 'Intelligent automation and demand prediction models' },
  { icon: Network, label: 'APIs & Integrations', desc: 'Connecting every system through a unified API layer' },
  { icon: Smartphone, label: 'Mobile Development', desc: 'Native iOS and Android applications' },
  { icon: BarChart3, label: 'Data & Analytics', desc: 'Executive dashboards and business intelligence' },
];

const combinedAdvantages = [
  'Industry Knowledge',
  'Technology',
  'Distribution',
  'Automation',
];

export default function WhyPartnership() {
  return (
    <section id="why-partnership" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="COMBINED ADVANTAGE"
          title="Why This Partnership"
          highlight="Works"
          description="The most successful technology partnerships in history combine proven domain mastery with cutting-edge engineering. This is exactly that combination — applied to automotive commerce."
        />

        {/* Three-Column Split: A1 Auto King | + | NA Tech */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-12">
          {/* A1 Auto King Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-8 rounded-3xl glass-panel border border-blue-500/20 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-300" />
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-4">
              A1 Auto King Brings
            </div>
            <h3 className="text-xl font-extrabold text-white mb-6">
              Automotive Domain Power
            </h3>
            <div className="space-y-3.5">
              {autoKingStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 font-light">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Center: Combined Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center justify-center gap-5 lg:py-4"
          >
            <div className="p-6 sm:p-7 rounded-3xl glass-card-accent border border-blue-400/30 text-center w-full shadow-[0_0_40px_rgba(37,99,235,0.2)]">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-extrabold text-white mb-3">
                Combined Advantage
              </h4>
              <div className="space-y-2 mb-4">
                {combinedAdvantages.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-2">
                    <div className="text-sm font-semibold text-slate-100">{item}</div>
                    {idx < combinedAdvantages.length - 1 && (
                      <Plus className="w-3 h-3 text-blue-400" />
                    )}
                  </div>
                ))}
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-4" />
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-5 h-5 text-blue-400 animate-bounce" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 font-mono">
                  Equals
                </span>
              </div>
              <div className="mt-3 p-3 rounded-xl bg-blue-600/20 border border-blue-500/40">
                <span className="text-sm font-extrabold text-gradient-cyan block leading-snug">
                  Digital Automotive Platform
                </span>
              </div>
            </div>
          </motion.div>

          {/* NA Tech Consulting Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-8 rounded-3xl glass-panel border border-indigo-500/20 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-4">
              NA Tech Consulting Brings
            </div>
            <h3 className="text-xl font-extrabold text-white mb-6">
              Technology Platform Power
            </h3>
            <div className="space-y-3.5">
              {naTechStrengths.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 font-light">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}