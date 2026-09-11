import React from "react";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Building2, Wrench, ShieldCheck, Server,
  Layers, Database, Cpu, Boxes, Workflow, Sparkles, Zap,
} from "lucide-react";

const layers = [
  {
    id: "channels",
    title: "01. Unified Access & Touchpoints",
    subtitle: "Customer, Dealer & Workshop Portals",
    description: "Zero-friction web & mobile interfaces tailored specifically for each automotive persona.",
    items: [
      { name: "Customer Web Portal", icon: Globe, detail: "VIN-driven search, cart & tracking" },
      { name: "Mobile Apps (iOS/Android)", icon: Smartphone, detail: "Mechanic scans & quick re-order" },
      { name: "B2B Dealer Hub", icon: Building2, detail: "Tiered wholesale & bulk quotes" },
      { name: "Workshop POS & Dispatch", icon: Wrench, detail: "Live job card parts allocation" },
    ],
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  },
  {
    id: "gateway",
    title: "02. API Gateway & Security Core",
    subtitle: "Enterprise Orchestration & Microservices",
    description: "High-throughput secure routing, caching layer, rate-limiting and identity management.",
    items: [
      { name: "High-Speed Edge CDN", icon: Zap, detail: "Sub-400ms global latency" },
      { name: "Auth0 & Role-Based Access", icon: ShieldCheck, detail: "Granular dealer & staff permissions" },
      { name: "GraphQL & REST Gateway", icon: Server, detail: "Unified automotive data schema" },
    ],
    color: "from-indigo-500/20 to-purple-600/10 border-indigo-500/30",
  },
  {
    id: "engines",
    title: "03. Automotive Digital Core Engines",
    subtitle: "Business Logic & Inventory Processing",
    description: "Real-time synchronization engine connecting multiple physical warehouses, catalogs, and orders.",
    items: [
      { name: "Multi-Warehouse Inventory Engine", icon: Layers, detail: "Real-time SKU availability & stock sync" },
      { name: "Precision 17-Digit VIN Resolver", icon: Workflow, detail: "OEM catalog fitment verification" },
      { name: "B2B Wholesale Matrix", icon: Boxes, detail: "Tiered pricing, credit terms & tax" },
      { name: "Automotive CRM & Garage Hub", icon: Database, detail: "Vehicle history & service reminders" },
    ],
    color: "from-blue-600/20 to-cyan-500/10 border-blue-400/30",
  },
  {
    id: "ai_data",
    title: "04. AI Automation & Data Foundation",
    subtitle: "Predictive Intelligence & Cloud Scale",
    description: "Machine learning models predicting parts demand, automating restocks, and dynamic catalog enrichment.",
    items: [
      { name: "AI Demand & Restock Predictor", icon: Sparkles, detail: "Learns seasonal automotive maintenance trends" },
      { name: "Automated Catalog Enrichment", icon: Cpu, detail: "Auto-maps OEM numbers to aftermarket cross-refs" },
      { name: "Enterprise Cloud DB & Backups", icon: Database, detail: "Multi-region redundancy & 99.99% uptime" },
    ],
    color: "from-cyan-500/20 to-blue-700/10 border-cyan-500/30",
  },
];

export default function ArchitectureDiagram() {
  const [selectedLayer, setSelectedLayer] = React.useState(null);

  return (
    <div className="w-full space-y-5">
      {layers.map((layer, index) => {
        const isSelected = selectedLayer === layer.id;
        return (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedLayer(isSelected ? null : layer.id)}
            className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-r ${layer.color} border backdrop-blur-xl transition-all duration-300 cursor-pointer ${isSelected ? "ring-2 ring-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.25)]" : "hover:border-blue-400/50"}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                  {layer.title}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">{layer.subtitle}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light">{layer.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {layer.items.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/[0.08] hover:border-blue-500/40 hover:bg-slate-900/80 transition-all flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-light mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
