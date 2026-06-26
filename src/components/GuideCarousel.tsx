import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function GuideCarousel() {
  type Step = {
    id: string;
    text: string;
    link?: {
      url: string;
      label: string;
    };
  };
  type Section = {
    heading: string;
    steps: Step[];
  };
  const sections: Section[] = [
    {
      heading: "Installation Steps",
      steps: [
        {
          id: "1",
          text: "Visit the",
          link: {
            url: "https://apps.shopify.com/whatflow",
            label: "WhatFlow app page",
          },
        },
        {
          id: "2",
          text: 'Click "Add app" and follow the Shopify installation process',
        },
        {
          id: "3",
          text: "Once installed, you’ll be redirected to the WhatFlow dashboard",
        },
        {
          id: "4",
          text: 'Connect your WhatsApp account using the "Link Device" option',
        },
        { id: "5", text: "Scan the QR code with your WhatsApp app" },
        { id: "6", text: "Configure your desired automation features" },
      ],
    },
    {
      heading: "Connection Requirements",
      steps: [
        { id: "1", text: "Active WhatsApp account on a smartphone" },
        {
          id: "2",
          text: "Stable internet connection on both your phone and computer",
        },
        { id: "3", text: "WhatsApp must remain connected to the internet" },
        {
          id: "4",
          text: "We recommend using a dedicated phone number for business communications",
        },
      ],
    },
    {
      heading: "Account Verification",
      steps: [
        { id: "1", text: "Enter your business name and contact information" },
        {
          id: "2",
          text: "Add your business logo (this will appear in message threads)",
        },
        { id: "3", text: "Send a test message to verify the connection" },
      ],
    },
  ];

  // If you still want a chunked array like before:
  const chunkedSteps: Step[][] = sections.map((s) => s.steps);
  const heads = sections.map((s) => ({ heading: s.heading }));

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % chunkedSteps.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + chunkedSteps.length) % chunkedSteps.length
    );

  return (
    <div className="relative flex flex-col h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={`head-${current}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="mb-6"
        >
          <h4 className="text-xl font-semibold text-ink text-center">
            {heads[current]?.heading}
          </h4>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.ol
          key={`list-${current}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="space-y-5 text-ink mb-11"
        >
          {chunkedSteps[current]?.map((step, index) => (
            <li key={`${current}-${index}`} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-chat-green text-primary-dark border border-border/30 rounded-full text-sm font-semibold shadow-sm">
                {step.id}
              </span>
              <span className="text-lg">
                {step.text}{" "}
                {step.link && (
                  <Link
                    href={step.link.url}
                    className="inline-flex items-center text-primary-mid hover:text-primary-dark font-medium underline-offset-4 hover:underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {step.link.label}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </span>
            </li>
          ))}
        </motion.ol>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-auto mb-4">
        <button
          onClick={prev}
          className="px-4 py-2 text-sm rounded-full bg-chat-cream border border-border hover:bg-primary/20 text-ink transition cursor-pointer"
        >
          ◀ Prev
        </button>
        <div className="flex gap-2">
          {chunkedSteps.map((_, i) => (
            <span
              key={`dot-${i}`}
              className={`w-2.5 h-2.5 rounded-full ${
                i === current ? "bg-primary-mid" : "bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="px-4 py-2 text-sm rounded-full bg-chat-cream border border-border hover:bg-primary/20 text-ink transition cursor-pointer"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
