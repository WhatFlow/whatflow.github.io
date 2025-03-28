import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing - WhatFlow',
  description: 'Choose the perfect WhatFlow pricing plan for your complete WhatsApp automation needs - order confirmations, abandoned cart recovery, fulfillment updates, and more',
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