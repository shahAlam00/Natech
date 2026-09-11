import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import StrategyModal from '../components/StrategyModal';
import { PartnershipLockup } from '../components/Logos';

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('strategy');

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <section id="contact" className="hidden md:block relative py-24 sm:py-36 overflow-hidden bg-[#050505]">
      {/* Premium layered background */}
      <div className="absolute inset-0 grid-background opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 h-72 bg-gradient-to-b from-blue-600/14 via-indigo-600/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Begin?</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-5"
        >
          Let's Build the Future of{' '}
          <span className="text-gradient-blue">Automotive Commerce</span> Together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Start with the first phase. Build the foundation. Connect the ecosystem. Scale together.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-xs text-slate-400"
        >
          {['Phase 1 Kick-off Ready', 'Dedicated Joint Team', 'Shared Growth Model', 'No Vendor Lock-in'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={() => openModal('strategy')}
            iconComponent={Calendar}
            className="w-full sm:w-auto text-base shadow-[0_0_40px_rgba(37,99,235,0.5)]"
          >
            Schedule a Strategy Call
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => openModal('proposal')}
            iconComponent={FileText}
            className="w-full sm:w-auto text-base"
          >
            Request Full Proposal
          </Button>
        </motion.div>

        {/* Partnership Lockup Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col items-center gap-4 pt-10 border-t border-slate-900"
        >
          <PartnershipLockup />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
            Strategic Technology Partnership
          </span>
        </motion.div>
      </div>

      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </section>
  );
}