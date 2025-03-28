import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing - WhatFlow',
  description: 'Choose the perfect WhatFlow pricing plan for your business needs',
};

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
} 