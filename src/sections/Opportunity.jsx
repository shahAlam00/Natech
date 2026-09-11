import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Building2, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import OpportunityCard from '../components/OpportunityCard';

export default function Opportunity() {
  const opportunities = [
    {
      icon: Layers,
      title: 'Automotive Inventory',
      tag: 'Physical Asset',
      description:
        'Transform static physical warehouse stock into an omnichannel, real-time live digital catalog accessible to retail and wholesale buyers 24/7.',
      points: [
        'Live stock visibility across warehouses',
        'Automatic low-stock reorder triggers',
        'Rapid SKU lookup by brand & part category',
      ],
    },
    {
      icon: Users,
      title: 'Customer Demand',
      tag: 'Direct Commerce',
      description:
        'Capture and convert inbound buyer inquiries into high-speed digital transactions with instant VIN compatibility and automated quotes.',
      points: [
        'Instant 17-digit VIN fitment lookup',
        'Transparent retail & trade pricing',
        'Automated digital order confirmation',
      ],
    },
    {
      icon: Building2,
      title: 'Dealer Network',
      tag: 'B2B Wholesale',
      description:
        'Equip independent dealers with dedicated wholesale portals, volume tier pricing, bulk order uploads, and instant credit term management.',
      points: [
        'Self-service B2B ordering portal',
        'Customized tiered contract pricing',
        'CSV bulk order upload & history',
      ],
    },
    {
      icon: Wrench,
      title: 'Workshop Ecosystem',
      tag: 'Trade Integration',
      description:
        'Integrate directly with local mechanics and repair workshops for rapid part ordering linked to active service job cards and priority delivery.',
      points: [
        'Direct mechanic bay order dispatch',
        'Job-card parts bundling & quotes',
        'Same-day priority logistics alerts',
      ],
    },
  ];

  return (
    <section id="opportunity" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="MARKET OPPORTUNITY"
          title="From Automotive Business to"
          highlight="Digital Automotive Platform"
          description="A1 Auto King already has the most valuable foundation — automotive inventory, customer demand, dealer relationships and workshop activity. The opportunity is to connect these assets through one intelligent digital platform."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {opportunities.map((item, index) => (
            <OpportunityCard
              key={index}
              icon={item.icon}
              title={item.title}
              tag={item.tag}
              description={item.description}
              points={item.points}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}