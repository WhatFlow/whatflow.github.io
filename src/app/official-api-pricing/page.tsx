"use client";
import Navbar from "@/components/Navbar";
import OfficialApiPricing from "@/components/OfficialApiPricing";
import Footer from "@/components/Footer";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function OfficialApiPricingPage() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
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
      <OfficialApiPricing />
      <Footer />
    </main>
  );
}
