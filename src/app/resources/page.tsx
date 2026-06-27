import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatFlow Setup Guides, FAQ, & Developer Documentation",
  description: "Need help setting up WhatsApp automation for Shopify? Access our step-by-step documentation, user guides, and FAQs to get started with WhatFlow.",
  openGraph: {
    title: "WhatFlow Setup Guides, FAQ, & Developer Documentation",
    description: "Need help setting up WhatsApp automation for Shopify? Access our step-by-step documentation, user guides, and FAQs to get started with WhatFlow.",
    url: "https://whatflow.tech/resources",
  },
  twitter: {
    title: "WhatFlow Setup Guides, FAQ, & Developer Documentation",
    description: "Need help setting up WhatsApp automation for Shopify? Access our step-by-step documentation, user guides, and FAQs to get started with WhatFlow.",
  }
};

export default function ResourcesPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <Resources />
      <Footer />
    </main>
  );
}