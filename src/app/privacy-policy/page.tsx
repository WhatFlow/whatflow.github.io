import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/Privacy";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security Information - WhatFlow",
  description: "Learn how WhatFlow securely handles your store and customer data. Read our privacy policy for compliance and privacy standards.",
  openGraph: {
    title: "Privacy Policy & Data Security Information - WhatFlow",
    description: "Learn how WhatFlow securely handles your store and customer data. Read our privacy policy for compliance and privacy standards.",
    url: "https://whatflow.tech/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy & Data Security Information - WhatFlow",
    description: "Learn how WhatFlow securely handles your store and customer data. Read our privacy policy for compliance and privacy standards.",
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageLoadingBar />
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
