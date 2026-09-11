import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Binary,
  Layers,
  Building2,
  Wrench,
  Users,
  ShoppingCart,
  Bot,
  Network,
  Boxes,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SolutionCard from '../components/SolutionCard';

export default function Solutions() {
  const solutions = [
    {
      number: '01',
      icon: Globe,
      title: 'Web Platform',
      category: 'Commerce',
      description:
        'High-performance digital storefront with lightning-fast catalog navigation, advanced filtering, live pricing, and seamless checkout.',
      features: ['VIN Search', 'Live Stock', 'Fast Checkout'],
    },
    {
      number: '02',
      icon: Smartphone,
      title: 'Mobile Applications',
      category: 'Access',
      description:
        'Native iOS and Android apps for retail customers, mechanics, and field sales reps with offline-capable catalog browsing.',
      features: ['iOS & Android', 'Barcode Scan', 'Push Alerts'],
    },
    {
      number: '03',
      icon: Binary,
      title: 'VIN-Based Parts Search',
      category: 'Precision',
      description:
        'Decode any 17-digit VIN to instantly surface exact-fit OEM and aftermarket parts with zero cross-compatibility guesswork.',
      features: ['17-Digit VIN', 'OEM Match', 'Fitment Guard'],
    },
    {
      number: '04',
      icon: Layers,
      title: 'Inventory Management',
      category: 'Operations',
      description:
        'Unified multi-warehouse inventory hub with real-time stock sync, automated reorder triggers, and intelligent lot tracking.',
      features: ['Multi-Branch', 'Auto-Reorder', 'Low-Stock Alert'],
    },
    {
      number: '05',
      icon: Building2,
      title: 'Dealer Portal',
      category: 'B2B Wholesale',
      description:
        'Dedicated wholesale hub with tiered contract pricing, credit term management, bulk CSV ordering, and AR statement exports.',
      features: ['Tiered Pricing', 'Bulk Orders', 'Credit Terms'],
    },
    {
      number: '06',
      icon: Wrench,
      title: 'Workshop Portal',
      category: 'Trade',
      description:
        'Purpose-built mechanic ordering system linked directly to vehicle job cards for rapid, priority dispatch and same-day fulfillment.',
      features: ['Job Cards', 'Priority Dispatch', 'Trade Discounts'],
    },
    {
      number: '07',
      icon: Users,
      title: 'CRM & Customer Portal',
      category: 'Retention',
      description:
        'Intelligent customer lifecycle management with full purchase history, garage vehicle profiles, and automated service reminders.',
      features: ['Garage Hub', 'Auto Reminders', 'LTV Tracking'],
    },
    {
      number: '08',
      icon: ShoppingCart,
      title: 'B2B Ordering Engine',
      category: 'Automation',
      description:
        'Automated B2B commerce pipeline from quote to digital invoice with ERP sync, payment gateway, and automated packing slips.',
      features: ['Auto Invoice', 'ERP Sync', 'Multi-Payment'],
    },
    {
      number: '09',
      icon: Bot,
      title: 'AI Automation',
      category: 'Intelligence',
      description:
        'Machine learning models predicting demand, automating restocks, dynamically enriching catalog data, and flagging order anomalies.',
      features: ['Demand AI', 'Auto Catalog', 'Smart Alerts'],
    },
    {
      number: '10',
      icon: Network,
      title: 'APIs & Integrations',
      category: 'Connectivity',
      description:
        'Open API gateway enabling deep integrations with third-party ERPs, accounting software, courier services, and payment processors.',
      features: ['REST & GraphQL', 'Webhook Events', 'OAuth 2.0'],
    },
    {
      number: '11',
      icon: Boxes,
      title: 'White-Label SaaS',
      category: 'Scale',
      description:
        'Package the entire automotive platform as a licensed SaaS product for other distributors and regional parts networks.',
      features: ['Multi-Tenant', 'Custom Branding', 'Revenue Share'],
    },
    {
      number: '12',
      icon: ShieldCheck,
      title: 'Security & Compliance',
      category: 'Trust',
      description:
        'Enterprise-grade RBAC, SOC-2 aligned audit logging, data encryption at rest and transit, and payment PCI-DSS compliance.',
      features: ['RBAC', 'SOC-2 Ready', 'PCI-DSS'],
    },
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SOLUTION STACK"
          title="One Ecosystem."
          highlight="Every Channel Connected."
          description="A comprehensive 12-module digital platform purpose-built for the full spectrum of automotive commerce — from retail consumer to B2B wholesale distribution."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.number}
              number={solution.number}
              icon={solution.icon}
              title={solution.title}
              category={solution.category}
              description={solution.description}
              features={solution.features}
              delay={Math.min(index * 0.05, 0.5)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}