import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Term from "@/components/Terms";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Usage Agreement - WhatFlow",
  description: "Read the terms of service and usage conditions for using WhatFlow's WhatsApp automation services for Shopify store owners.",
  openGraph: {
    title: "Terms of Service & Usage Agreement - WhatFlow",
    description: "Read the terms of service and usage conditions for using WhatFlow's WhatsApp automation services for Shopify store owners.",
    url: "https://whatflow.tech/terms",
  },
  twitter: {
    title: "Terms of Service & Usage Agreement - WhatFlow",
    description: "Read the terms of service and usage conditions for using WhatFlow's WhatsApp automation services for Shopify store owners.",
  }
};

export default function TermsPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <Term />
      <Footer />
    </main>
  );
}
