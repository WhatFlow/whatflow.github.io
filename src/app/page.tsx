import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AppScreenshot from '@/components/AppScreenshot';

export const metadata = {
  title: 'WhatFlow - Complete WhatsApp Automation Suite for E-commerce',
  description: 'WhatFlow offers a full suite of WhatsApp automations for e-commerce businesses - order confirmations, abandoned cart recovery, fulfillment updates, and cancellation management.',
};

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <Navbar />
        <Hero />
        <AppScreenshot />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
