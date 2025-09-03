"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/Privacy";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// export const metadata = {
//   title: "Terms of Service - WhatFlow",
//   description:
//     "WhatFlow terms of service and usage conditions for our complete WhatsApp automation suite",
// };

export default function Terms() {
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
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
