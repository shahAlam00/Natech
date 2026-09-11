import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  FileQuestion,
  Layers,
  Users,
  EyeOff,
  Globe,
  Binary,
  RotateCw,
  Building2,
  Wrench,
  Bot,
  BarChart,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function Transformation() {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'before', 'after'

  const fragmentedItems = [
    { icon: MessageCircle, text: 'Manual enquiries over WhatsApp chats' },
    { icon: PhoneCall, text: 'Unrecorded phone orders and lost leads' },
    { icon: FileQuestion, text: 'Stock mismatches and disconnected inventory' },
    { icon: Layers, text: 'Manual dealer pricing negotiation & paperwork' },
    { icon: Users, text: 'Scattered customer purchase records' },
    { icon: EyeOff, text: 'Limited visibility into real-time business health' },
  ];

  const connectedItems = [
    { icon: Globe, text: '24/7 Digital storefront & automated checkout' },
    { icon: Binary, text: 'Instant 17-digit VIN verification engine' },
    { icon: RotateCw, text: 'Live multi-warehouse inventory synchronization' },
    { icon: Building2, text: 'Self-service B2B Dealer & Tiered Wholesale Portal' },
    { icon: Wrench, text: 'Workshop bay ordering & job-card integration' },
    { icon: Bot, text: 'AI-driven restock forecasting & CRM workflows' },
  ];

  return (
    <section id="transformation" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE BIG TRANSFORMATION"
          title="Connect Every Part of"
          highlight="The Business."
          description="Moving from fragmented manual communications to a synchronized digital platform that scales without adding administrative bottlenecks."
        />

        {/* Split Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12">
          {/* Today: Fragmented */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-rose-500/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
                  Current State
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                Frictional & Manual
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Today's Fragmented Operations
            </h3>
            <p className="text-sm text-slate-400 mb-8 font-light leading-relaxed">
              Business growth is constrained by manual WhatsApp messages, disconnected spreadsheets, unverified part inquiries, and phone tag.
            </p>

            <div className="space-y-3.5">
              {fragmentedItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-rose-950/10 border border-rose-500/15 flex items-center gap-3 text-slate-300 text-xs sm:text-sm"
                  >
                    <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tomorrow: Connected Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-3xl glass-card-accent border-2 border-blue-500/40 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.2)]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Future State
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40">
                Automated & Scalable
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Tomorrow's Connected Platform
            </h3>
            <p className="text-sm text-slate-300 mb-8 font-light leading-relaxed">
              A unified digital core that powers instant search, automated fulfillment, real-time inventory, and multi-tier wholesale ordering.
            </p>

            <div className="space-y-3.5">
              {connectedItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center gap-3 text-slate-100 text-xs sm:text-sm shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-lg bg-blue-500/30 text-blue-300 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.text}</span>
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