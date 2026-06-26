import Navbar from "@/components/Navbar";
import OfficialApiPricing from "@/components/OfficialApiPricing";
import Footer from "@/components/Footer";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official WhatsApp Business API Pricing Plans - WhatFlow",
  description: "Check our official WhatsApp Cloud API pricing. Connect your own Meta business account and send automated notification messages directly to customers.",
  openGraph: {
    title: "Official WhatsApp Business API Pricing Plans - WhatFlow",
    description: "Check our official WhatsApp Cloud API pricing. Connect your own Meta business account and send automated notification messages directly to customers.",
    url: "https://whatflow.tech/official-api-pricing",
  },
  twitter: {
    title: "Official WhatsApp Business API Pricing Plans - WhatFlow",
    description: "Check our official WhatsApp Cloud API pricing. Connect your own Meta business account and send automated notification messages directly to customers.",
  }
};

export default function OfficialApiPricingPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <OfficialApiPricing />
      <Footer />
    </main>
  );
}
