import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureDetails from "@/components/FeatureDetails";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify WhatsApp Marketing & Automation Features - WhatFlow",
  description: "Discover WhatFlow's powerful WhatsApp automation features: abandoned cart recovery, automated order confirmation, shipment tracking alerts, and reviews collection.",
  openGraph: {
    title: "Shopify WhatsApp Marketing & Automation Features - WhatFlow",
    description: "Discover WhatFlow's powerful WhatsApp automation features: abandoned cart recovery, automated order confirmation, shipment tracking alerts, and reviews collection.",
    url: "https://whatflow.tech/features",
  },
  twitter: {
    title: "Shopify WhatsApp Marketing & Automation Features - WhatFlow",
    description: "Discover WhatFlow's powerful WhatsApp automation features: abandoned cart recovery, automated order confirmation, shipment tracking alerts, and reviews collection.",
  }
};

export default function FeaturesPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <FeatureDetails />
      <Footer />
    </main>
  );
}