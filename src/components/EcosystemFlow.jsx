import React from "react";
import { motion } from "framer-motion";
import {
  UserCheck, Globe, Binary, Search, Layers, Building2, Wrench, ShoppingCart, Truck,
  ChevronRight, CheckCircle2,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "customer", name: "Customer", icon: UserCheck, tag: "Demand Origin", desc: "B2C car owners and B2B wholesale buyers initiating part requests or service needs.", detail: "Seamless omnichannel entry via responsive web, mobile apps, or integrated dealer portals.", metric: "Instant Onboarding" },
  { id: "website", name: "Website & App", icon: Globe, tag: "Digital Core", desc: "High-performance digital storefront optimized for speed, clarity, and rapid search.", detail: "Sub-second page loads, real-time pricing, and intuitive multi-branch checkout.", metric: "< 400ms Response" },
  { id: "vin", name: "Vehicle / VIN", icon: Binary, tag: "Precision Lookup", desc: "17-digit VIN decoder with instant OEM model and sub-variant identification.", detail: "Guarantees 100% accurate vehicle fitment eliminating wrong-part order returns.", metric: "99.9% Fitment Match" },
  { id: "search", name: "Parts Search", icon: Search, tag: "Smart Catalog", desc: "Interactive visual exploded diagrams and cross-reference OE part number matching.", detail: "Instant alternative brand suggestions, OEM vs aftermarket specs, and warranty tags.", metric: "500k+ SKUs" },
  { id: "inventory", name: "Inventory Sync", icon: Layers, tag: "Live Logistics", desc: "Synchronized multi-warehouse stock visibility with low-stock alerts.", detail: "Automated warehouse allocation based on proximity and freight efficiency.", metric: "Real-time Sync" },
  { id: "dealer", name: "Dealer Portal", icon: Building2, tag: "B2B Wholesale", desc: "Dedicated enterprise portal with custom price tiers and volume rebates.", detail: "Quick bulk order CSV upload, credit term tracking, and account statement exports.", metric: "Tiered Pricing" },
  { id: "workshop", name: "Workshop Hub", icon: Wrench, tag: "Trade Integration", desc: "Direct mechanic bay ordering linked to active vehicle job repair cards.", detail: "Express dispatch alerts, mechanic quote generation, and instant trade approval.", metric: "Priority Dispatch" },
  { id: "order", name: "Order Routing", icon: ShoppingCart, tag: "Automated Commerce", desc: "Intelligent payment processing, ERP synchronization, and automated invoicing.", detail: "Instant invoice generation, accounting ledger sync, and digital packing slips.", metric: "Zero Manual Entry" },
  { id: "delivery", name: "Delivery", icon: Truck, tag: "Fulfillment", desc: "Automated courier dispatch, live GPS tracking, and proof-of-delivery alerts.", detail: "SMS and email tracking updates sent directly to buyers and workshops.", metric: "Live Tracking" },
];

export default function EcosystemFlow() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-full">
      <div className="relative mb-10 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="flex items-center justify-between min-w-[950px] px-3">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col items-center gap-2.5 transition-all duration-300 focus:outline-none cursor-pointer ${isActive ? "scale-110" : "hover:scale-105 opacity-75 hover:opacity-100"}`}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${isActive ? "bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.7)] border-2 border-blue-300" : isCompleted ? "bg-blue-950/70 text-blue-300 border border-blue-500/40" : "bg-slate-900 text-slate-400 border border-slate-800"}`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className={`text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap ${isActive ? "text-blue-400 font-bold" : "text-slate-300"}`}>
                    {step.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activePin"
                      className="absolute -bottom-2.5 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,1)]"
                    />
                  )}
                </button>
                {idx < STEPS.length - 1 && (
                  <div className="flex-1 mx-2.5 flex items-center justify-center">
                    <div className={`h-[3px] w-full transition-all duration-300 rounded-full ${idx < activeStep ? "bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-slate-800"}`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="glass-card-accent p-6 sm:p-10 rounded-3xl border border-blue-500/30 bg-slate-950/80 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-blue-400">
                  Step {String(activeStep + 1).padStart(2, "0")} of {String(STEPS.length).padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium">
                  {STEPS[activeStep].tag}
                </span>
              </div>
              <h4 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {STEPS[activeStep].name} Architecture
              </h4>
              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-light">
                {STEPS[activeStep].desc}
              </p>
              <div className="flex items-start gap-2.5 text-xs sm:text-base text-blue-200/90 font-medium pt-1">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-normal">{STEPS[activeStep].detail}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
              <div>
                <span className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-semibold block mb-1">Architecture Metric</span>
                <span className="text-2xl sm:text-3xl font-black text-gradient-cyan">{STEPS[activeStep].metric}</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-800 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  disabled={activeStep === STEPS.length - 1}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-blue-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/30"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}