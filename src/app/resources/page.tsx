'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Resources from '@/components/Resources';
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: 'Resources & Documentation - WhatFlow',
//   description: 'Setup guides and documentation for WhatFlow WhatsApp automation features - abandoned checkout recovery, order fulfillment, confirmations, and customer feedback collection.',
// };

export default function ResourcesPage() {
   const [progress, setProgress] = useState(0);
    const pathname = usePathname();
  
    useEffect(() => {
      // Trigger loading bar whenever route changes
      setProgress(40);
      const timer = setTimeout(() => setProgress(100), 300);
  
      return () => clearTimeout(timer);
    }, [pathname]);
  return (
    <main>
     <LoadingBar
        color="teal"
        progress={progress}
        waitingTime={600}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
        <Navbar />
        <Resources />
        <Footer />
      
    </main>
  );
} 