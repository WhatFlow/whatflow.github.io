import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export const metadata = {
  title: 'Features - WhatFlow',
  description: 'Complete WhatsApp automation for every stage of the customer journey',
};

export default function ResourcesPage() {
  return (
    <main>
      <div className="bg-white">
        <Navbar />
        <Features />
        <Footer />
      </div>
    </main>
  );
} 