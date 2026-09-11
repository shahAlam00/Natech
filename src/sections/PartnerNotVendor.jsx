import React from 'react';
import { motion } from 'framer-motion';
import { Target, Map, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Shared Vision',
    desc: 'Both partners are aligned on a single north star: a connected, scalable digital automotive ecosystem that creates lasting market infrastructure.',
  },
  {
    icon: Map,
    title: 'Shared Roadmap',
    desc: 'A jointly owned, jointly executed product and technology roadmap — with both leadership teams reviewing priorities quarterly.',
  },
  {
    icon: TrendingUp,
    title: 'Shared Growth',
    desc: 'Revenue growth, customer satisfaction, operational efficiency, and platform asset value are joint KPIs for both organizations.',
  },
];

export default function PartnerNotVendor() {
  return (
    <section id="partner-manifesto" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/8 via-indigo-600/8 to-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-widest mb-8">
            Partnership Philosophy
          </div>

          <blockquote className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            "Not a vendor relationship.
            <br />
            <span className="text-gradient-blue">
              A technology partnership built around shared outcomes.
            </span>"
          </blockquote>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            We measure success by{' '}
            <span className="text-blue-300 font-semibold">revenue growth</span>,{' '}
            <span className="text-indigo-300 font-semibold">operational efficiency</span>,{' '}
            <span className="text-cyan-300 font-semibold">customer experience</span>{' '}
            and the long-term value of the platform — not by billable hours.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-7 rounded-3xl glass-card-accent border border-blue-500/25 relative overflow-hidden text-left group hover:border-blue-400/50 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}