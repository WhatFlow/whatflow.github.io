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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="rounded-2xl bg-white backdrop-blur-sm bg-opacity-80 shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
      >
        <button
          className="flex w-full items-center justify-between text-left group"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-emerald-400 transition-all duration-300">
            {question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-4 flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center shadow-md"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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
                  height: { duration: 0.3 },
                  opacity: { duration: 0.3, delay: 0.1 },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="mt-6 text-lg leading-relaxed text-gray-700 pl-2 border-l-4 border-teal-400 bg-teal-50 bg-opacity-50 p-4 rounded-r-lg">
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
    <div id="faq" className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50 to-green-50 -z-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white bg-opacity-20 shadow-xl shadow-teal-600/10 ring-1 ring-teal-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="absolute -top-52 left-1/2 -z-10">
        <svg
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="400"
          className="fill-teal-100/50 opacity-30"
        >
          <path d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeInSection>
            <div className="mb-16 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
                <span className="text-base">⁉️</span>FAQ
              </span>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl mt-4 font-bold tracking-tight bg-black bg-clip-text text-transparent mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl leading-7 text-gray-600 max-w-2xl mx-auto">
                  Common questions about WhatFlow's WhatsApp automation suite
                </p>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-500 shadow-lg">
                <p className="text-white text-xl mb-4 font-medium">
                  Can't find the answer you're looking for?
                </p>
                <a
                  href="mailto:support@whatflow.tech"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-teal-600 font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
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
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
