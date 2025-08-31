import React, { useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmCarousel() {
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
          text: 'Navigate to the "Order Confirmation" tab in your WhatFlow dashboard',
        },
        { id: "2", text: "Enable the feature by toggling the switch" },
        {
          id: "3",
          text: "Customize your order confirmation message template",
        },
        {
          id: "4",
          text: "Configure which order details to include",
        },
        {
          id: "5",
          text: "Set up any follow-up messages if desired",
        },
        { id: "6", text: "Save your settings and activate" },
      ],
    },
    {
      heading: "Available Notification Events",
      customContent: (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
          <h4 className="font-semibold text-slate-800 mb-3">
            Sample Message Template
          </h4>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-slate-700 text-sm">
            <p className="mb-2">
              Thank you for your order from {`{shopName}`}. This is a
              confirmation message.
            </p>

            <p className="mb-2 font-semibold">Order Details:</p>

            <p className="mb-2">
              Order ID: {`{orderId}`} <br />
              Order Number: {`{orderNumber}`}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Items:</span> {`{itemsXquantity}`}{" "}
              <br />
              <span className="font-semibold">Subtotal:</span> {`{subtotal}`}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Address:</span> {`{address}`}{" "}
              <br />
              <span className="font-semibold">City:</span> {`{city}`}
            </p>

            <p>Please confirm your order.</p>
          </div>
        </div>
      ),
    },

    {
      heading: "Best Practices",
      steps: [
        {
          id: "1",
          text: "Send confirmation messages immediately after purchase",
        },
        {
          id: "2",
          text: "Include essential order details but keep messages concise",
        },
        {
          id: "3",
          text: "Provide a link to view complete order information",
        },
        {
          id: "4",
          text: "Thank customers for their purchase",
        },
        {
          id: "5",
          text: "Set expectations for next steps (fulfillment timelines, etc.)",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h4 className="text-xl font-semibold text-gray-800 text-center bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-700">
            {sections[current]?.heading}
          </h4>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="mb-11"
        >
          {sections[current]?.steps ? (
            <ol className="space-y-5 text-slate-700">
              {sections[current].steps?.map((step, index) => (
                <li
                  key={`${current}-${index}`}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-md shadow-teal-500/20">
                    {step.id}
                  </span>
                  <span className="text-lg">
                    {step.text}{" "}
                    {step.link && (
                      <Link
                        href={step.link.url}
                        className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium underline-offset-4 hover:underline transition-colors"
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
          className="px-4 py-2 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 transition"
        >
          ◀ Prev
        </button>
        <div className="flex gap-2">
          {sections.map((_, i) => (
            <span
              key={`dot-${i}`}
              className={`w-2.5 h-2.5 rounded-full ${
                i === current ? "bg-teal-600" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="px-4 py-2 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 transition"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
