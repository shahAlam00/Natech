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
      <div className="relative mb-10 overflow-x-auto pb-4 pt-2">
        <div className="flex items-center justify-between min-w-[900px] px-2">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;
            return (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col items-center gap-2 transition-all duration-300 focus:outline-none cursor-pointer ${isActive ? "scale-110" : "hover:scale-105 opacity-70 hover:opacity-100"}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-300" : isCompleted ? "bg-blue-950/60 text-blue-300 border border-blue-500/30" : "bg-slate-900 text-slate-400 border border-slate-800"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-semibold tracking-tight whitespace-nowrap ${isActive ? "text-blue-400 font-bold" : "text-slate-400"}`}>
                    {step.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activePin"
                      className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)]"
                    />
                  )}
                </button>
                {idx < STEPS.length - 1 && (
                  <div className="flex-1 mx-2 flex items-center justify-center">
                    <div className={`h-[2px] w-full transition-all duration-300 ${idx < activeStep ? "bg-gradient-to-r from-blue-500 to-indigo-500" : "bg-slate-800"}`} />
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
          className="glass-card-accent p-6 sm:p-8 rounded-3xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
                  Step {String(activeStep + 1).padStart(2, "0")} of {String(STEPS.length).padStart(2, "0")}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">
                  {STEPS[activeStep].tag}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {STEPS[activeStep].name} Architecture
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                {STEPS[activeStep].desc}
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-300/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{STEPS[activeStep].detail}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Architecture Metric</span>
                <span className="text-2xl font-black text-gradient-cyan">{STEPS[activeStep].metric}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(STEPS.length - 1, prev + 1))}
                  disabled={activeStep === STEPS.length - 1}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
