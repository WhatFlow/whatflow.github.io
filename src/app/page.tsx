import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'WhatFlow - Complete WhatsApp Automation Suite for E-commerce',
  description: 'WhatFlow offers a full suite of WhatsApp automations for e-commerce businesses - order confirmations, abandoned cart recovery, fulfillment updates, and cancellation management.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
