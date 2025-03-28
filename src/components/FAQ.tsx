'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-start justify-between py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "How does WhatFlow's automation suite work?",
      answer: "WhatFlow connects to your WhatsApp Business API and Shopify store to automate communication throughout the customer journey. It handles order confirmations, abandoned cart recovery, shipping updates, and order cancellations, all while maintaining a personal touch with customizable templates."
    },
    {
      question: "Do I need a WhatsApp Business API account?",
      answer: "Yes, you need a WhatsApp Business API account to use WhatFlow. We can help guide you through the application process if you don't already have one. This API access is what allows our automation to send messages on your behalf."
    },
    {
      question: "Can I customize the automated messages?",
      answer: "Absolutely! WhatFlow provides customizable templates for each automation type. You can personalize the content, add your brand voice, include dynamic product information, and tailor the messaging to match your communication style."
    },
    {
      question: "How does the abandoned cart recovery feature work?",
      answer: "When a customer abandons their cart, WhatFlow automatically sends a WhatsApp message after a set delay (which you can configure). The message reminds them about the items in their cart and provides a direct link to complete their purchase, significantly boosting conversion rates."
    },
    {
      question: "Will I be notified of customer responses?",
      answer: "Yes, any customer responses to automated messages will be forwarded to your WhatsApp Business account where you can continue the conversation personally. This creates a seamless transition from automation to personal service when needed."
    },
    {
      question: "How does the pricing model work?",
      answer: "Our pricing is based on the number of messages sent per month across all automation types. Every plan includes our full suite of features - the only difference is the message volume. Plans automatically upgrade if you exceed your limit to ensure uninterrupted service."
    }
  ];

  return (
    <div id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center mb-10">
            Common questions about WhatFlow's WhatsApp automation suite
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </dl>
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Can't find the answer you're looking for?{' '}
              <a href="mailto:support@whatflow.com" className="font-medium text-teal hover:text-green">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 