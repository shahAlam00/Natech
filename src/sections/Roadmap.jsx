import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import RoadmapCard from "../components/RoadmapCard";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 01", title: "Foundation", timeline: "Months 1-3", highlight: false,
      description: "Establish the digital infrastructure bedrock — data architecture, catalog structure, core web platform, and initial checkout flow.",
      deliverables: ["Technical audit & platform blueprint","Cloud infrastructure provisioning","Product data architecture & taxonomy","Automotive parts catalog setup","Core web storefront development","Secure payment & checkout integration"],
    },
    {
      phase: "Phase 02", title: "Operations", timeline: "Months 4-6", highlight: true,
      description: "Activate the operational intelligence layer — inventory synchronization, CRM workflows, customer self-service portal, and VIN decoder.",
      deliverables: ["Real-time inventory management system","Multi-warehouse sync & stock control","Customer CRM & garage vehicle hub","Self-service customer account portal","VIN-based precision search engine","Analytics dashboards & reporting"],
    },
    {
      phase: "Phase 03", title: "B2B Expansion", timeline: "Months 7-10", highlight: false,
      description: "Scale the B2B wholesale channel — dealer portal, workshop integration, mobile apps, and automated repeat ordering workflows.",
      deliverables: ["Dealer self-service wholesale portal","Tiered pricing & credit term engine","Workshop bay ordering integration","Repeat & quick-order automation","Native iOS & Android mobile apps","B2B invoice & payment ERP sync"],
    },
    {
      phase: "Phase 04", title: "Scale & Intelligence", timeline: "Months 11+", highlight: false,
      description: "Deploy artificial intelligence, open the API ecosystem for third parties, and unlock white-label SaaS licensing opportunities.",
      deliverables: ["AI demand forecasting & restock AI","Intelligent dynamic pricing engine","Open API for third-party integrations","Partner ecosystem onboarding","White-label SaaS platform packaging","Revenue-share licensing framework"],
    },
  ];

  return (
    <section id="roadmap" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="EXECUTION ROADMAP"
          title="A Phased Path to a"
          highlight="Connected Platform"
          description="A structured, milestone-driven deployment strategy ensuring each phase delivers measurable business value before the next begins."
        />

        <div className="hidden lg:flex items-center justify-between mb-6 px-12 relative">
          {phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black font-mono border-2 ${phase.highlight ? "bg-blue-600 text-white border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.6)]" : "bg-slate-900 text-slate-300 border-slate-700"}`}>
                  0{idx + 1}
                </div>
                <span className="text-xs text-slate-400 mt-1.5 font-mono">{phase.timeline}</span>
              </div>
              {idx < phases.length - 1 && (
                <div className="flex-1 mx-3 h-[2px] bg-gradient-to-r from-slate-700 to-slate-800" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <RoadmapCard
              key={index}
              phase={phase.phase}
              title={phase.title}
              timeline={phase.timeline}
              description={phase.description}
              deliverables={phase.deliverables}
              highlight={phase.highlight}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
