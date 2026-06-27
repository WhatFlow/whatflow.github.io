import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Shopify WhatsApp Automation Pricing - WhatFlow",
  description: "Choose the perfect WhatsApp automation plan for your Shopify store. Scale from a free tier up to enterprise volume with flexible, usage-based pricing.",
  openGraph: {
    title: "Affordable Shopify WhatsApp Automation Pricing - WhatFlow",
    description: "Choose the perfect WhatsApp automation plan for your Shopify store. Scale from a free tier up to enterprise volume with flexible, usage-based pricing.",
    url: "https://whatflow.tech/pricing",
  },
  twitter: {
    title: "Affordable Shopify WhatsApp Automation Pricing - WhatFlow",
    description: "Choose the perfect WhatsApp automation plan for your Shopify store. Scale from a free tier up to enterprise volume with flexible, usage-based pricing.",
  }
};

export default function PricingPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <Pricing />
      <Footer />
    </main>
  );
}
