import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import AppScreenshot from "@/components/HallMarks";
import PageLoadingBar from "@/components/PageLoadingBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatFlow - WhatsApp Automation for Shopify",
  description: "Automate your Shopify store's WhatsApp marketing. Recover abandoned carts, send order confirmations, and track fulfillment updates automatically with WhatFlow.",
  openGraph: {
    title: "WhatFlow - WhatsApp Automation for Shopify",
    description: "Automate your Shopify store's WhatsApp marketing. Recover abandoned carts, send order confirmations, and track fulfillment updates automatically with WhatFlow.",
    url: "https://whatflow.tech",
  },
  twitter: {
    title: "WhatFlow - WhatsApp Automation for Shopify",
    description: "Automate your Shopify store's WhatsApp marketing. Recover abandoned carts, send order confirmations, and track fulfillment updates automatically with WhatFlow.",
  }
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does WhatFlow's automation suite work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WhatFlow uses WhatsApp's 'link a device' feature to securely connect to your WhatsApp account. Once connected, our platform automates communication throughout the customer journey, handling order confirmations, abandoned cart recovery, shipping updates, and order cancellations, all with customizable templates that maintain your brand voice."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a WhatsApp Business API account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you don't need the WhatsApp Business API. WhatFlow works with regular WhatsApp accounts and takes a simpler approach. You just need to link your WhatsApp account through our secure setup process, similar to how you'd connect WhatsApp Web on your computer."
        }
      },
      {
        "@type": "Question",
        "name": "Is my WhatsApp data secure with WhatFlow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our browserless technology only interacts with WhatsApp to send your automated messages - we never access, read, or store your existing conversations, contacts, or media. Our connection is limited strictly to the automation features you enable, and you can disconnect anytime with a single click."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the automated messages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! WhatFlow provides customizable templates for each automation type. You can personalize the content, add your brand voice, include dynamic product information, and tailor the messaging to match your communication style."
        }
      },
      {
        "@type": "Question",
        "name": "How does the abandoned cart recovery feature work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a customer abandons their cart, WhatFlow automatically sends a WhatsApp message after a set delay (which you can configure). The message reminds them about the items in their cart and provides a direct link to complete their purchase, significantly boosting conversion rates."
        }
      },
      {
        "@type": "Question",
        "name": "Will I be notified of customer responses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, any customer responses to automated messages will appear directly in your WhatsApp account where you can continue the conversation personally. This creates a seamless transition from automation to personal service when needed."
        }
      },
      {
        "@type": "Question",
        "name": "How does the pricing model work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is based on the number of messages sent per month across all automation types. Every plan includes our full suite of features - the only difference is the message volume. Plans automatically upgrade if you exceed your limit to ensure uninterrupted service."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WhatFlow",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.00",
      "highPrice": "49.99"
    },
    "description": "Streamline your WhatsApp communication and confirmation process with WhatFlow, a complete WhatsApp automation suite for Shopify."
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageLoadingBar />
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
