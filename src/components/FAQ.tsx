"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "./FadeIn";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <FadeInSection>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="rounded-[20px] bg-white p-6 border border-border shadow-sm"
      >
        <button
          className="flex w-full items-center justify-between text-left group cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-bold text-ink group-hover:text-primary-mid transition-colors duration-200">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="ml-4 flex-shrink-0 h-8 w-8 rounded-full bg-chat-cream border border-border flex items-center justify-center text-ink group-hover:bg-primary/20 transition-colors duration-200"
          >
            <svg
              className="h-4 w-4 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 6v12m6-6H6"
              />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  height: { duration: 0.25 },
                  opacity: { duration: 0.25, delay: 0.05 },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.25 },
                  opacity: { duration: 0.15 },
                },
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -5 }}
                animate={{ y: 0 }}
                exit={{ y: -5 }}
                transition={{ duration: 0.15 }}
              >
                <p className="mt-4 text-base leading-relaxed text-text-muted pl-4 border-l-2 border-primary-mid">
                  {answer}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeInSection>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "How does WhatFlow's automation suite work?",
      answer:
        "WhatFlow uses WhatsApp's 'link a device' feature to securely connect to your WhatsApp account. Once connected, our platform automates communication throughout the customer journey, handling order confirmations, abandoned cart recovery, shipping updates, and order cancellations, all with customizable templates that maintain your brand voice.",
    },
    {
      question: "Do I need a WhatsApp Business API account?",
      answer:
        "No, you don't need the WhatsApp Business API. WhatFlow works with regular WhatsApp accounts and takes a simpler approach. You just need to link your WhatsApp account through our secure setup process, similar to how you'd connect WhatsApp Web on your computer.",
    },
    {
      question: "Is my WhatsApp data secure with WhatFlow?",
      answer:
        "Absolutely. Our browserless technology only interacts with WhatsApp to send your automated messages - we never access, read, or store your existing conversations, contacts, or media. Our connection is limited strictly to the automation features you enable, and you can disconnect anytime with a single click.",
    },
    {
      question: "Can I customize the automated messages?",
      answer:
        "Yes! WhatFlow provides customizable templates for each automation type. You can personalize the content, add your brand voice, include dynamic product information, and tailor the messaging to match your communication style.",
    },
    {
      question: "How does the abandoned cart recovery feature work?",
      answer:
        "When a customer abandons their cart, WhatFlow automatically sends a WhatsApp message after a set delay (which you can configure). The message reminds them about the items in their cart and provides a direct link to complete their purchase, significantly boosting conversion rates.",
    },
    {
      question: "Will I be notified of customer responses?",
      answer:
        "Yes, any customer responses to automated messages will appear directly in your WhatsApp account where you can continue the conversation personally. This creates a seamless transition from automation to personal service when needed.",
    },
    {
      question: "How does the pricing model work?",
      answer:
        "Our pricing is based on the number of messages sent per month across all automation types. Every plan includes our full suite of features - the only difference is the message volume. Plans automatically upgrade if you exceed your limit to ensure uninterrupted service.",
    },
  ];

  return (
    <div id="faq" className="relative isolate overflow-hidden py-24 sm:py-32 bg-chat-cream border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm">
                FAQ
              </span>

              <h2 className="text-3xl mt-4 font-light tracking-tight text-ink mb-6 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="text-lg leading-relaxed text-text-muted max-w-2xl mx-auto">
                Common questions about WhatFlow's WhatsApp automation suite
              </p>
            </div>
          </FadeInSection>

          <div className="grid gap-6 sm:grid-cols-1">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>

          <FadeInSection>
            <div className="mt-16 text-center">
              <div className="p-8 rounded-[24px] bg-ink border border-border text-center">
                <p className="text-white text-lg mb-4 font-normal">
                  Can't find the answer you're looking for?
                </p>
                <a
                  href="mailto:support@whatflow.tech"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-ink border border-primary font-semibold hover:bg-white hover:border-white transition-all duration-300 shadow-sm"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Contact Support Team
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
