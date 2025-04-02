import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Resources from '@/components/Resources';

export const metadata = {
  title: 'Resources & Documentation - WhatFlow',
  description: 'Setup guides and documentation for WhatFlow WhatsApp automation features - abandoned checkout recovery, order fulfillment, confirmations, and customer feedback collection.',
};

export default function ResourcesPage() {
  return (
    <main>
      <div className="bg-white">
        <Navbar />
        <Resources />
        <Footer />
      </div>
    </main>
  );
} 