import React, { useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AbandonCarousel() {
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
    steps?: Step[];
    customContent?: JSX.Element;
  };

  const sections: Section[] = [
    {
      heading: "Setup Process",
      steps: [
        {
          id: "1",
          text: 'Navigate to the "Abandoned Checkout" tab in your WhatFlow dashboard',
        },
        { id: "2", text: "Enable the feature by toggling the switch" },
        {
          id: "3",
          text: "Configure timing settings (how long after abandonment to send messages)",
        },
        {
          id: "4",
          text: "Customize message templates for initial and follow-up messages",
        },
        {
          id: "5",
          text: "Set up discount offers if desired (requires Shopify discount code config)",
        },
        { id: "6", text: "Save your settings and activate" },
      ],
    },
    {
      heading: "Abandoned Cart Message",
      customContent: (
        <div className="space-y-4">
          {/* Message Preview */}
          <div className="bg-chat-cream border border-border rounded-[20px] p-4 shadow-sm">
            <h4 className="font-semibold text-ink mb-3 text-sm">
              Message Template
            </h4>
            <div className="bg-white p-4 rounded-[16px] rounded-tl-none border border-border/40 text-ink text-sm shadow-sm">
              <p className="font-semibold text-ink mb-2">
                Checkout Reminder!
              </p>
              <p className="text-ink leading-relaxed">
                Hi <span className="font-semibold">{`{billingFirstName}`}</span>
                , you left items in your cart at{" "}
                <span className="font-semibold">{`{shopName}`}</span>!
                <br />
                Complete your purchase here:{" "}
                <span className="font-semibold">{`{recoveryLink}`}</span>!
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-white border border-border rounded-xl p-3 text-sm text-text-muted shadow-sm">
            <p className="mb-1 font-medium text-ink">
              Message sent to customers who abandon their checkout
            </p>
            <p>
              You can use the following placeholders in your message:{" "}
              <span className="font-mono text-ink bg-chat-cream px-1 py-0.5 rounded border border-border">
                {
                  "{billingFirstName}, {customerName}, {itemsXpricing}, {subtotal}, {shipping}, {recoveryLink}"
                }
              </span>
            </p>
            <p className="mt-2 text-text-muted italic">
              The <span className="font-mono text-ink">{`{recoveryLink}`}</span>{" "}
              placeholder is highly recommended so customers can easily return
              to their cart.
            </p>
          </div>
        </div>
      ),
    },
    {
      heading: "Best Practices",
      steps: [
        {
          id: "1",
          text: "Send the first recovery message within 1-2 hours of abandonment",
        },
        {
          id: "2",
          text: "Use a friendly, helpful tone rather than pushy sales language",
        },
        {
          id: "3",
          text: "Include product images to remind customers what they left behind",
        },
        {
          id: "4",
          text: "Consider offering a time-limited discount in follow-up messages",
        },
        {
          id: "5",
          text: "Always include a direct checkout link for easy conversion",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % sections.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + sections.length) % sections.length);

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
            {sections[current]?.heading}
          </h4>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="mb-11"
        >
          {sections[current]?.steps ? (
            <ol className="space-y-5 text-ink">
              {sections[current].steps?.map((step, index) => (
                <li
                  key={`${current}-${index}`}
                  className="flex items-start gap-4"
                >
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
            </ol>
          ) : (
            sections[current]?.customContent
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-auto mb-4">
        <button
          onClick={prev}
          className="px-4 py-2 text-sm rounded-full bg-chat-cream border border-border hover:bg-primary/20 text-ink transition cursor-pointer"
        >
          ◀ Prev
        </button>
        <div className="flex gap-2">
          {sections.map((_, i) => (
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
