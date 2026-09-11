import React from 'react';
import Hero from '../sections/Hero';
import Partnership from '../sections/Partnership';
import Opportunity from '../sections/Opportunity';
import Transformation from '../sections/Transformation';
import Ecosystem from '../sections/Ecosystem';
import Solutions from '../sections/Solutions';
import Platform from '../sections/Platform';
import Roadmap from '../sections/Roadmap';
import BusinessModel from '../sections/BusinessModel';
import WhyPartnership from '../sections/WhyPartnership';
import PartnerNotVendor from '../sections/PartnerNotVendor';
// import CTA from '../sections/CTA';
import Contact from '../components/Contact';

export default function Home({ onOpenStrategyModal }) {
  return (
    <main>
      <Hero onOpenStrategyModal={onOpenStrategyModal} />
      <Partnership />
      <Opportunity />
      <Transformation />
      <Ecosystem />
      <Solutions />
      <Platform />
      <Roadmap />
      <BusinessModel />
      <WhyPartnership />
      <PartnerNotVendor />
      <Contact/>
    
    </main>
  );
}