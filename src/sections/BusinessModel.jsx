import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import BusinessModelCard from '../components/BusinessModelCard';
import StrategyModal from '../components/StrategyModal';

export default function BusinessModel() {
  const [modalOpen, setModalOpen] = useState(false);

  const models = [
    {
      number: '01',
      title: 'Partnership Model',
      tagline: 'Long-Term Strategic Technology Alliance',
      recommended: true,
      description:
        'NA Tech Consulting LLC acts as the permanent, embedded technology arm of A1 Auto King — not an external vendor. A dedicated engineering team, shared KPIs, and a joint innovation roadmap create a unified operational structure built around shared growth.',
      features: [
        'Dedicated embedded product & engineering team',
        'Shared performance KPIs and business targets',
        'Joint executive product roadmap planning',
        'Quarterly strategy alignment sessions',
        'Priority support with guaranteed response SLA',
        'Co-ownership of IP and platform innovations',
      ],
      upside:
        'Both partners share in revenue uplift, operational efficiency gains, and long-term platform asset value — creating true incentive alignment.',
    
      delay: 0,
    },
    {
      number: '02',
      title: 'Build & Retain',
      tagline: 'Phased Delivery + Managed Technology Operations',
      recommended: false,
      description:
        'Structured fixed-scope development phases deliver a defined set of platform capabilities. Following each phase, NA Tech transitions into a managed technology operations role ensuring platform stability, optimization, and scaling.',
      features: [
        'Fixed-scope phase-by-phase delivery',
        'Clear milestones and delivery timelines',
        'Managed technical operations post-launch',
        'Priority bug resolution and performance tuning',
        'Scalable infrastructure management',
      ],
      upside:
        'Predictable investment per phase with clear deliverables. Technology operations fee replaces the overhead of an internal IT team.',
     
      delay: 0.1,
    },
    {
      number: '03',
      title: 'Revenue-Share SaaS',
      tagline: 'Build Once. License to the Market.',
      recommended: false,
      description:
        'After building the A1 Auto King platform, both partners co-own the right to license the entire technology as a white-label SaaS product to other automotive distributors, regional wholesalers, and workshop chains across the market.',
      features: [
        'Co-ownership of platform technology IP',
        'White-label SaaS packaging and branding',
        'Dealer and distributor licensing framework',
        'Shared recurring SaaS subscription revenue',
        'Minimal reinvestment required per new customer',
      ],
      upside:
        'A single platform investment generates compounding returns as each new SaaS licensee adds to shared recurring revenue without proportional cost increase.',

      delay: 0.2,
    },
  ];

  return (
    <section id="business-model" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PARTNERSHIP MODELS"
          title="A Partnership Designed for"
          highlight="Long-Term Growth"
          description="Three commercial engagement frameworks — each designed to create measurable value for both A1 Auto King and NA Tech Consulting LLC. Both companies share the platform upside."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {models.map((model, index) => (
            <BusinessModelCard
              key={index}
              number={model.number}
              title={model.title}
              tagline={model.tagline}
              recommended={model.recommended}
              description={model.description}
              features={model.features}
              upside={model.upside}
              ctaText={model.ctaText}
              onSelect={() => setModalOpen(true)}
              delay={model.delay}
            />
          ))}
        </div>
      </div>

      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType="proposal"
      />
    </section>
  );
}