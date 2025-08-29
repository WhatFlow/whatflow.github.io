import React, { useState } from "react";
import type { JSX } from "react";
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
    steps?: Step[];
    customContent?: JSX.Element;
  };

  const sections: Section[] = [
    {
      heading: "Setup Process",
      steps: [
        {
          id: "1",
          text: 'Navigate to the "Order Fulfillment" tab in your WhatFlow dashboard',
        },
        { id: "2", text: "Enable the feature by toggling the switch" },
        {
          id: "3",
          text: "Configure which fulfillment events trigger notifications (shipping, delivery, etc.)",
        },
        {
          id: "4",
          text: "Customize message templates for each event type",
        },
        {
          id: "5",
          text: "Set up tracking link integration if applicable",
        },
        { id: "6", text: "Save your settings and activate" },
      ],
    },
    {
      heading: "Available Notification Events",
      customContent: (
        <div className="space-y-4">
          {[
          
            {
              stage: "Order Shipped",
              description:
                "Send tracking information and estimated delivery dates",
            },
            {
              stage: "Out for Delivery",
              description:
                "Alert customers when their package is out for delivery",
            },
            {
              stage: "Delivered",
              description:
                "Confirm delivery and request feedback on their purchase",
            },
            {
              stage: "Shipping Delay",
              description:
                "Alerts customers of potential delays",
            },
            {
              stage: "Delivery Exception",
              description:
                "Notifies of delivery problems requiring attention",
            },
          ].map((stage, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                  {index + 1}
                </div>
                {index < 4 && (
                  <div className="absolute top-8 left-1/2 w-0.5 h-10 bg-gradient-to-b from-teal-500 to-transparent transform -translate-x-1/2"></div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-semibold text-slate-800">{stage.stage}</h4>
                <p className="text-slate-600 text-sm">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },

    {
      heading: "Message Customization",
     steps: [
        {
          id: "1",
          text: "{{customer_name}} - Inserts the customer's name",
        },
        {
          id: "2",
          text: "{{order_number}} - Displays the order reference number",
        },
        {
          id: "3",
          text: "{{tracking_number}} - Shows the shipment tracking number",
        },
        {
          id: "4",
          text: "{{tracking_link}} - Provides a clickable tracking link",
        },
        {
          id: "5",
          text: "{{carrier_name}} - Displays the shipping carrier",
        },
        {
          id: "6",
          text: "{{estimated_delivery}} - Shows estimated delivery date range",
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
