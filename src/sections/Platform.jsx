import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

export default function Platform() {
  return (
    <section id="platform" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PLATFORM ARCHITECTURE"
          title="One Digital Core."
          highlight="Every Business Channel."
          description="A layered enterprise architecture — customer touchpoints at the top, an intelligent AI data fabric at the foundation, and four specialized business engines in between. Click any layer to explore in detail."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ArchitectureDiagram />
        </motion.div>

        {/* Architecture Legend */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 p-6 rounded-2xl glass-panel max-w-3xl mx-auto"
        >
          <div className="text-center text-xs font-mono font-bold uppercase tracking-widest text-blue-400 mb-4">
            Architecture Principles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-slate-300">
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">API-First Design</div>
              <div className="text-slate-400 font-light">Every service exposes a secure, versioned API gateway for internal and third-party integration</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">Event-Driven Core</div>
              <div className="text-slate-400 font-light">Real-time webhooks and pub/sub event streaming keep every business system synchronized</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">Cloud-Native Infrastructure</div>
              <div className="text-slate-400 font-light">Auto-scaling containers with multi-region redundancy and 99.99% enterprise uptime SLA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}