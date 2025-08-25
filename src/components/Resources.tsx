// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function Resources() {
//   const [activeTab, setActiveTab] = useState('demo');

//   const tabs = [
//     { id: 'demo', label: 'Demo Store Guide' },
//     { id: 'install', label: 'Installation Guide' },
//     { id: 'abandoned', label: 'Abandoned Checkout' },
//     { id: 'fulfillment', label: 'Order Fulfillment' },
//     { id: 'confirmation', label: 'Order Confirmation' },
//     { id: 'feedback', label: 'Customer Feedback' },
//   ];

//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources & Documentation</h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             Everything you need to get started with WhatFlow and make the most of your WhatsApp automation.
//           </p>
//         </div>

//         <div className="mt-10 border-b border-gray-200">
//           <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`
//                   whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//                   ${activeTab === tab.id
//                     ? 'border-teal text-teal'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//                 `}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="mt-8">
//           {activeTab === 'demo' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Using the Demo Store</h3>
//               <p>Our demo store allows you to experience WhatFlow's features firsthand without setting up your own store.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Getting Started</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Visit the <Link href="https://whatsappconnectdemo.myshopify.com/" className="text-teal hover:text-green" target="_blank" rel="noopener noreferrer">demo store</Link></li>
//                 <li>Browse products and add items to your cart</li>
//                 <li>Proceed to checkout and complete the purchase (test mode - no actual charges)</li>
//                 <li>Provide your WhatsApp number to receive automated messages</li>
//                 <li>Experience different automation scenarios</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Testing Specific Scenarios</h4>
//               <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                 <h5 className="font-medium">Abandoned Checkout</h5>
//                 <p>Add products to cart, start checkout, but leave before completing. You'll receive a recovery message after 30 minutes (accelerated to 2 minutes in demo mode).</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                 <h5 className="font-medium">Order Fulfillment</h5>
//                 <p>Complete a purchase and you'll receive an order confirmation immediately. In the demo store, fulfillment notifications are sent automatically after 5 minutes.</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                 <h5 className="font-medium">Order Confirmation</h5>
//                 <p>Immediately after checkout, you'll receive an order confirmation with details of your purchase.</p>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h5 className="font-medium">Customer Feedback</h5>
//                 <p>24 hours after delivery (simulated as 10 minutes in demo mode), you'll receive a feedback request message.</p>
//               </div>

//               <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
//                 <p className="text-sm font-medium text-teal">Note: Demo mode accelerates all timeframes. In a production environment, message timing follows standard e-commerce lifecycle.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'install' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Installing WhatFlow on Your Store</h3>
//               <p>Follow these steps to set up WhatFlow on your own Shopify store.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Installation Steps</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Visit the <Link href="https://apps.shopify.com/whatflow" className="text-teal hover:text-green" target="_blank" rel="noopener noreferrer">WhatFlow app page</Link> on the Shopify App Store</li>
//                 <li>Click "Add app" and follow the Shopify installation process</li>
//                 <li>Once installed, you'll be redirected to the WhatFlow dashboard</li>
//                 <li>Connect your WhatsApp account using the "Link Device" option</li>
//                 <li>Scan the QR code with your WhatsApp app</li>
//                 <li>Configure your desired automation features</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Connection Requirements</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Active WhatsApp account on a smartphone</li>
//                 <li>Stable internet connection on both your phone and computer</li>
//                 <li>WhatsApp must remain connected to the internet</li>
//                 <li>We recommend using a dedicated phone number for business communications</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Account Verification</h4>
//               <p>After connecting your WhatsApp account, you'll need to verify it:</p>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Enter your business name and contact information</li>
//                 <li>Add your business logo (this will appear in message threads)</li>
//                 <li>Send a test message to verify the connection</li>
//               </ol>

//               <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
//                 <p className="text-sm font-medium text-teal">Tip: For optimal performance, we recommend using a dedicated device for your WhatsApp business messages.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'abandoned' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Abandoned Checkout Configuration</h3>
//               <p>Set up automated recovery messages for customers who leave items in their cart.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Navigate to the "Abandoned Checkout" tab in your WhatFlow dashboard</li>
//                 <li>Enable the feature by toggling the switch</li>
//                 <li>Configure timing settings (how long after abandonment to send messages)</li>
//                 <li>Customize message templates for initial and follow-up messages</li>
//                 <li>Set up discount offers if desired (requires Shopify discount code configuration)</li>
//                 <li>Save your settings and activate</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
//               <p>Personalize your abandoned cart recovery messages with these variables:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
//                 <li><code>{'{{product_list}}'}</code> - Includes abandoned products with images</li>
//                 <li><code>{'{{checkout_link}}'}</code> - Direct link to complete checkout</li>
//                 <li><code>{'{{discount_code}}'}</code> - Displays any applicable discount code</li>
//                 <li><code>{'{{discount_amount}}'}</code> - Shows the discount percentage or amount</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Send the first recovery message within 1-2 hours of abandonment</li>
//                 <li>Use a friendly, helpful tone rather than pushy sales language</li>
//                 <li>Include product images to remind customers what they left behind</li>
//                 <li>Consider offering a time-limited discount in follow-up messages</li>
//                 <li>Always include a direct checkout link for easy conversion</li>
//               </ul>

//               <div className="mt-8 p-4 border border-yellow-400/20 rounded-lg bg-yellow-50">
//                 <p className="text-sm font-medium text-yellow-700">Note: Customers must enter their phone number during checkout to receive abandoned cart messages.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'fulfillment' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Order Fulfillment Notifications</h3>
//               <p>Keep customers informed about their order status with automated shipping and delivery updates.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Navigate to the "Order Fulfillment" tab in your WhatFlow dashboard</li>
//                 <li>Enable the feature by toggling the switch</li>
//                 <li>Configure which fulfillment events trigger notifications (shipping, delivery, etc.)</li>
//                 <li>Customize message templates for each event type</li>
//                 <li>Set up tracking link integration if applicable</li>
//                 <li>Save your settings and activate</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Available Notification Events</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><strong>Order Shipped</strong> - Sent when an order is marked as shipped</li>
//                 <li><strong>Out for Delivery</strong> - Notifies when package is out for delivery (requires carrier integration)</li>
//                 <li><strong>Order Delivered</strong> - Confirms successful delivery (requires carrier integration)</li>
//                 <li><strong>Shipping Delay</strong> - Alerts customers of potential delays</li>
//                 <li><strong>Delivery Exception</strong> - Notifies of delivery problems requiring attention</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
//               <p>Personalize your fulfillment notifications with these variables:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
//                 <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
//                 <li><code>{'{{tracking_number}}'}</code> - Shows the shipment tracking number</li>
//                 <li><code>{'{{tracking_link}}'}</code> - Provides a clickable tracking link</li>
//                 <li><code>{'{{carrier_name}}'}</code> - Displays the shipping carrier</li>
//                 <li><code>{'{{estimated_delivery}}'}</code> - Shows estimated delivery date range</li>
//               </ul>

//               <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
//                 <p className="text-sm font-medium text-teal">Tip: Include tracking information and estimated delivery dates to reduce "where is my order?" customer service inquiries.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'confirmation' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Order Confirmation Setup</h3>
//               <p>Send instant order confirmations to reassure customers their purchase was successful.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Navigate to the "Order Confirmation" tab in your WhatFlow dashboard</li>
//                 <li>Enable the feature by toggling the switch</li>
//                 <li>Customize your order confirmation message template</li>
//                 <li>Configure which order details to include</li>
//                 <li>Set up any follow-up messages if desired</li>
//                 <li>Save your settings and activate</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
//               <p>Personalize your order confirmation messages with these variables:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
//                 <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
//                 <li><code>{'{{order_date}}'}</code> - Shows the purchase date and time</li>
//                 <li><code>{'{{order_total}}'}</code> - Displays the total amount paid</li>
//                 <li><code>{'{{payment_method}}'}</code> - Shows the payment method used</li>
//                 <li><code>{'{{product_list}}'}</code> - Includes purchased products with images</li>
//                 <li><code>{'{{shipping_address}}'}</code> - Shows the delivery address</li>
//                 <li><code>{'{{order_link}}'}</code> - Direct link to view order details</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Send confirmation messages immediately after purchase</li>
//                 <li>Include essential order details but keep messages concise</li>
//                 <li>Provide a link to view complete order information</li>
//                 <li>Thank customers for their purchase</li>
//                 <li>Set expectations for next steps (fulfillment timelines, etc.)</li>
//               </ul>

//               <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
//                 <p className="text-sm font-medium text-teal">Tip: Order confirmations have the highest open rates of any e-commerce message - they're a great opportunity to build customer trust.</p>
//               </div>
//             </div>
//           )}

//           {activeTab === 'feedback' && (
//             <div className="prose max-w-none">
//               <h3 className="text-xl font-semibold mb-4">Customer Feedback Collection</h3>
//               <p>Gather valuable customer feedback and product reviews through automated WhatsApp messages.</p>

//               <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
//               <ol className="list-decimal pl-6 space-y-2">
//                 <li>Navigate to the "Customer Feedback" tab in your WhatFlow dashboard</li>
//                 <li>Enable the feature by toggling the switch</li>
//                 <li>Configure when to send feedback requests (e.g., days after delivery)</li>
//                 <li>Customize your feedback request message</li>
//                 <li>Set up response handling and follow-ups</li>
//                 <li>Save your settings and activate</li>
//               </ol>

//               <h4 className="text-lg font-medium mt-6 mb-2">Feedback Types</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><strong>Rating Requests</strong> - Ask for a numerical rating (1-5 stars)</li>
//                 <li><strong>Product Reviews</strong> - Request detailed feedback about specific products</li>
//                 <li><strong>Service Experience</strong> - Gather feedback about the shopping experience</li>
//                 <li><strong>NPS Surveys</strong> - Measure Net Promoter Score with likelihood to recommend</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
//               <p>Personalize your feedback request messages with these variables:</p>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
//                 <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
//                 <li><code>{'{{product_name}}'}</code> - Shows the specific product for review</li>
//                 <li><code>{'{{product_image}}'}</code> - Includes an image of the purchased product</li>
//                 <li><code>{'{{review_link}}'}</code> - Direct link to leave a review on your store</li>
//               </ul>

//               <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
//               <ul className="list-disc pl-6 space-y-2">
//                 <li>Send feedback requests 7-10 days after delivery</li>
//                 <li>Keep surveys short and focused</li>
//                 <li>Offer incentives for completing feedback (discount on next order)</li>
//                 <li>Follow up on negative feedback to resolve issues</li>
//                 <li>Ask permission to publish positive reviews on your store</li>
//               </ul>

//               <div className="mt-8 p-4 border border-yellow-400/20 rounded-lg bg-yellow-50">
//                 <p className="text-sm font-medium text-yellow-700">Note: Be mindful of message frequency. Too many requests can lead to customer fatigue and opt-outs.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

function StepCarousel() {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <h4 className="text-xl font-semibold text-gray-800 text-center bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-700">
            {heads[current]?.heading}
          </h4>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.ol
          key={`list-${current}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="space-y-5 text-slate-700 mb-11"
        >
          {chunkedSteps[current]?.map((step, index) => (
            <li key={`${current}-${index}`} className="flex items-start gap-4">
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
        </motion.ol>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-auto mb-4">
        <button
          onClick={prev}
          className="px-4 py-2 text-sm rounded-lg bg-slate-100 hover:bg-slate-200 transition"
        >
          ◀ Prev
        </button>
        <div className="flex gap-2">
          {chunkedSteps.map((_, i) => (
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

export default function Resources() {
  const [activeTab, setActiveTab] = useState("demo");
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: "demo", label: "Demo Store Guide", icon: "📱" },
    { id: "install", label: "Installation Guide", icon: "🔧" },
    { id: "abandoned", label: "Abandon Checkout", icon: "🛒" },
    { id: "fulfillment", label: "Order Fulfillment", icon: "📦" },
    { id: "confirmation", label: "Order Confirmation", icon: "✅" },
    { id: "feedback", label: "Customer Feedback", icon: "⭐" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 sm:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-teal-100/30 to-teal-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/20 to-indigo-200/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-gradient-to-br from-purple-100/20 to-pink-200/10 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10"
      >
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20">
            Resources & Documentation
          </span>
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-gray-900 via-slate-700 to-gray-800">
          Everything You Need to Succeed
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Comprehensive guides to help you maximize your{" "}
          <span className="text-teal-600 font-semibold">WhatFlow</span>{" "}
          experience and transform your WhatsApp automation strategy.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mt-14 flex justify-center relative z-10"
      >
        <div className="max-w-7xl w-full mx-auto px-6 overflow-x-auto scrollbar-hide">
          <nav className="flex rounded-xl bg-white/80 p-1.5 shadow-lg shadow-slate-200/50 backdrop-blur-sm border border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 min-w-[160px] px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2
                  ${
                    activeTab === tab.id
                      ? "text-white shadow-md z-10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.icon}</span>
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-12 max-w-7xl mx-auto text-left px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "demo" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Left Side - Images */}
                  <div className="md:w-2/5">
                    <div
                      className="relative rounded-xl overflow-hidden border border-slate-200/80 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setFullscreenImage("/demo-store.png")}
                    >
                      <Image
                        src="/demo-store.png"
                        alt="Demo Store"
                        width={500}
                        height={500}
                        className="object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </div>
                  

                  {/* Right Side - Content */}
                  <div className="md:w-3/5">
                    {" "}
                    {/* compressed a bit */}
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                      Using the Demo Store
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                      Our interactive demo store allows you to experience
                      WhatFlow's powerful features firsthand without setting up
                      your own store.
                    </p>
                    <ol className="space-y-5 text-slate-700">
                      {" "}
                      {/* more spacing in steps */}
                      {[
                        {
                          text: "Visit the",
                          link: {
                            url: "https://whatsappconnectdemo.myshopify.com/",
                            label: "demo store",
                          },
                        },
                        { text: "Browse products and add items to your cart" },
                        {
                          text: "Proceed to checkout and complete the purchase (test mode - no actual charges)",
                        },
                        {
                          text: "Provide your WhatsApp number to receive automated messages",
                        },
                        { text: "Experience different automation scenarios" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-md shadow-teal-500/20">
                            {index + 1}
                          </span>
                          <span>
                            {item.text}{" "}
                            {item.link && (
                              <Link
                                href={item.link.url}
                                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium underline-offset-4 hover:underline transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.link.label}
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
                    <button className="mt-10 inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      Try Demo Store
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
             
              </div>
              
            )}

            {activeTab === "install" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-10">
                  {/* Left Side - Images */}
                  <div className="md:w-2/5">
                    <div className="relative rounded-xl overflow-hidden group">
                      {/* <div className="flex flex-col gap-8 p-4">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                          <Image
                            src="/connect-whatsapp.png"
                            alt="Connect Whatsapp"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl shadow-md"
                          />
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                          <Image
                            src="/installation-guide.png"
                            alt="Installation Guide"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl shadow-md"
                          />
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                          <Image
                            src="/dashboard.png"
                            alt="Dashboard"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-xl shadow-md"
                          />
                        </div>
                      </div> */}
                      <div className="flex flex-col gap-8 p-4">
  {[
    { src: "/connect-whatsapp.png", alt: "Connect Whatsapp" },
    { src: "/installation-guide.png", alt: "Installation Guide" },
    { src: "/dashboard.png", alt: "Dashboard" },
  ].map((img, i) => (
    <div
      key={i}
      className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => setFullscreenImage(img.src)}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-xl shadow-md"
      />
    </div>
  ))}
</div>

                    </div>
                  </div>

                  {/* Right Side - Carousel Steps */}
                  <div className="md:w-3/5 flex flex-col">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                      Installing WhatFlow on Your Store
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-3 text-lg">
                      Setting up WhatFlow is simple and straightforward. Follow
                      these steps to integrate it with your Shopify store.
                    </p>

                    {/* Carousel */}
                    <StepCarousel />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "abandoned" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="/images/abandoned-cart.png"
                        alt="Abandoned Cart"
                        className="w-full h-auto object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-4">
                      Abandoned Checkout Recovery
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      Automatically recover abandoned carts with personalized
                      WhatsApp messages that bring customers back to complete
                      their purchase.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Timing Control",
                          description:
                            "Set when reminder messages are sent: 1 hour, 24 hours, or custom intervals",
                        },
                        {
                          title: "Personalized Content",
                          description:
                            "Include product images, prices, and a direct link to complete checkout",
                        },
                        {
                          title: "Discount Offers",
                          description:
                            "Automatically add one-time discount codes to incentivize purchases",
                        },
                        {
                          title: "Performance Analytics",
                          description:
                            "Track recovery rates and ROI for your abandoned cart campaigns",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="bg-slate-50 p-4 rounded-lg border border-slate-100"
                        >
                          <h4 className="font-semibold text-teal-700 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-8 inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      Set Up Recovery Flows
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fulfillment" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="/images/order-fulfillment.png"
                        alt="Order Fulfillment"
                        className="w-full h-auto object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-4">
                      Order Fulfillment Notifications
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      Keep customers informed about their order status with
                      real-time WhatsApp notifications throughout the
                      fulfillment process.
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          stage: "Processing",
                          description:
                            "Notify customers when their order is being prepared",
                        },
                        {
                          stage: "Shipped",
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
                      ].map((stage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                              {index + 1}
                            </div>
                            {index < 3 && (
                              <div className="absolute top-8 left-1/2 w-0.5 h-10 bg-gradient-to-b from-teal-500 to-transparent transform -translate-x-1/2"></div>
                            )}
                          </div>
                          <div className="flex-1 pt-1">
                            <h4 className="font-semibold text-slate-800">
                              {stage.stage}
                            </h4>
                            <p className="text-slate-600 text-sm">
                              {stage.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="mt-8 inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      Configure Notifications
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "confirmation" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="/images/order-confirmation.png"
                        alt="Order Confirmation"
                        className="w-full h-auto object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-4">
                      Order Confirmation Setup
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      Send instant, personalized order confirmations that
                      improve customer satisfaction and reduce support
                      inquiries.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Sample Message Template
                      </h4>
                      <div className="bg-white p-4 rounded-lg border border-slate-200 text-slate-700 text-sm">
                        <p className="mb-2">
                          <span className="font-bold">
                            Thank you for your order, [Customer Name]! 🎉
                          </span>
                        </p>
                        <p className="mb-2">
                          Your order #[Order Number] has been received and is
                          being processed.
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold">Order Summary:</span>
                          <br />
                          [Product List with Prices]
                          <br />
                          Subtotal: [Subtotal]
                          <br />
                          Shipping: [Shipping Cost]
                          <br />
                          Total: [Order Total]
                        </p>
                        <p>Track your order status here: [Tracking Link]</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                        Customize Template
                      </button>
                      <button className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium border border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-300">
                        Preview Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "feedback" && (
              <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="relative rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src="/images/feedback.png"
                        alt="Customer Feedback"
                        className="w-full h-auto object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-4">
                      Customer Feedback Collection
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                      Automatically collect valuable feedback and reviews to
                      improve your products and customer experience.
                    </p>
                    <div className="space-y-5">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-slate-800">
                            Automated Timing
                          </h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          Schedule feedback requests to be sent at the optimal
                          time after delivery, increasing response rates.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-slate-800">
                            Interactive Surveys
                          </h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          Create simple surveys customers can complete directly
                          in WhatsApp without leaving the app.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-slate-800">
                            Feedback Analytics
                          </h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          Track customer satisfaction over time with detailed
                          analytics and reporting tools.
                        </p>
                      </div>
                    </div>

                    <button className="mt-8 inline-flex items-center px-6 py-3 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      Create Feedback Campaign
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
       
      
      </div>
      <AnimatePresence>
  {fullscreenImage && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={fullscreenImage}
          alt="Fullscreen View"
          width={1200}
          height={800}
          className="rounded-lg object-contain max-h-[90vh] mx-auto"
        />
        {/* Close Button */}
        <button
          onClick={() => setFullscreenImage(null)}
          className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-red-400 transition cursor-pointer"
        >
          ✕
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="mt-16 text-center relative z-10"
      >
        <div className="inline-flex items-center text-slate-500 text-sm">
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
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Need additional help? Visit our{" "}
          <a
            href="#"
            className="text-teal-600 hover:text-teal-700 font-medium underline-offset-4 hover:underline transition-colors mx-1"
          >
            Support Center
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="text-teal-600 hover:text-teal-700 font-medium underline-offset-4 hover:underline transition-colors ml-1"
          >
            contact us
          </a>
          .
        </div>
      </motion.div>
    </div>
  );
}
