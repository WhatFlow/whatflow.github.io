"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AppScreenshot from "@/components/AppScreenshot";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
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
      <Hero />
      <AppScreenshot />
      <Features />
      <CTA />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}

