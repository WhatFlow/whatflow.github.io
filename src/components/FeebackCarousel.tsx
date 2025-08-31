import React, { useState } from "react";
import type { JSX } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackCarousel() {
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
          text: 'Navigate to the "Customer Feedback" tab in your WhatFlow dashboard',
        },
        { id: "2", text: "Enable the feature by toggling the switch" },
        {
          id: "3",
          text: "Configure when to send feedback requests (e.g., days after delivery)",
        },
        {
          id: "4",
          text: "Customize your feedback request message",
        },
        {
          id: "5",
          text: "Set up response handling and follow-ups",
        },
        { id: "6", text: "Save your settings and activate" },
      ],
    },
    {
      heading: "Feedback Types",
      customContent: (
       <div className="space-y-4">
  {/* Rating Requests */}
  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
        {/* Star Icon */}
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.09 3.355a1 1 0 00.95.69h3.522c.969 0 1.371 1.24.588 1.81l-2.854 2.073a1 1 0 00-.364 1.118l1.09 3.356c.3.92-.755 1.688-1.54 1.118L10 13.347l-2.834 2.1c-.784.57-1.838-.197-1.539-1.118l1.09-3.356a1 1 0 00-.364-1.118L3.5 8.782c-.783-.57-.38-1.81.588-1.81h3.523a1 1 0 00.95-.69l1.09-3.355z"/>
        </svg>
      </div>
      <h4 className="font-semibold text-slate-800">Rating Requests</h4>
    </div>
    <p className="text-slate-600 text-sm">Ask for a numerical rating (1–5 stars)</p>
  </div>

  {/* Product Reviews */}
  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
        {/* Chat / Review Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 4h4m9 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h4 className="font-semibold text-slate-800">Product Reviews</h4>
    </div>
    <p className="text-slate-600 text-sm">Request detailed feedback about specific products</p>
  </div>

  {/* Service Experience */}
  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
        {/* Shopping Bag Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1.68 9.39A2 2 0 0115.35 20H8.65a2 2 0 01-1.97-1.61L5 9z"/>
        </svg>
      </div>
      <h4 className="font-semibold text-slate-800">Service Experience</h4>
    </div>
    <p className="text-slate-600 text-sm">Gather feedback about the shopping experience</p>
  </div>

  {/* NPS Surveys */}
  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
        {/* Thumbs Up/Down Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9V5a2 2 0 012-2h4v6h-6zM10 15v4a2 2 0 01-2 2H4v-6h6z" />
        </svg>
      </div>
      <h4 className="font-semibold text-slate-800">NPS Surveys</h4>
    </div>
    <p className="text-slate-600 text-sm">Measure Net Promoter Score with likelihood to recommend</p>
  </div>
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
          text: "{{product_name}} - Shows the specific product for review",
        },
        {
          id: "4",
          text: "{{product_image}} - Includes an image of the purchased product",
        },
        {
          id: "5",
          text: "{{review_link}} - Direct link to leave a review on your store",
        },
      ],
    },

    {
      heading: "Best Practices",
      steps: [
        {
          id: "1",
          text: "Send feedback requests 7-10 days after delivery",
        },
        {
          id: "2",
          text: "Keep surveys short and focused",
        },
        {
          id: "3",
          text: "Offer incentives for completing feedback (discount on next order)",
        },
        {
          id: "4",
          text: "Follow up on negative feedback to resolve issues",
        },
        {
          id: "5",
          text: "Ask permission to publish positive reviews on your store",
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
