import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Layers, RefreshCw, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EcosystemFlow from '../components/EcosystemFlow';
import StatCard from '../components/StatCard';

export default function Ecosystem() {
  const stats = [
    {
      value: '12+',
      label: 'Platform Modules',
      subtext: 'Covering every commercial automotive channel from consumer to B2B wholesale',
      icon: Layers,
      delay: 0,
    },
    {
      value: '4',
      label: 'Transformation Phases',
      subtext: 'A structured 11-month deployment journey from foundation to full AI intelligence',
      icon: RefreshCw,
      delay: 0.1,
    },
    {
      value: '360°',
      label: 'Connected Operations',
      subtext: 'Every business touchpoint unified through a single data fabric and intelligence core',
      icon: Activity,
      delay: 0.2,
    },
    {
      value: '24/7',
      label: 'Digital Infrastructure',
      subtext: 'Enterprise cloud architecture with multi-region redundancy and guaranteed uptime SLA',
      icon: Globe,
      delay: 0.3,
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE CONNECTED ECOSYSTEM"
          title="Every Channel."
          highlight="One Intelligent Platform."
          description="Nine interconnected touchpoints forming a seamless automotive commerce loop — from the moment a customer searches to the moment a part is delivered."
        />

        {/* Interactive Ecosystem Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <EcosystemFlow />
        </motion.div>

        {/* Metrics */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-2">
              Platform Benchmarks & Scale
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Built for Enterprise Automotive Scale
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                subtext={stat.subtext}
                icon={stat.icon}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}