"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GuideCarousel from "./GuideCarousel";
import AbandonCarousel from "./AbandonCarousel";
import FulfillCarousel from "./FulfillCarousel";
import ConfirmCarousel from "./ConfirmCarousel";
import FeedbackCarousel from "./FeebackCarousel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

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
    <TooltipProvider delayDuration={200}>
      <div className="relative min-h-screen bg-gradient-to-br from-white via-teal-50 to-green-50 py-24 sm:py-32 overflow-hidden">
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
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
              <span className="text-base">📚</span> RESOURCES & DOCUMENTS
            </span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-gray-900 via-slate-700 to-gray-800">
            Everything You Need to Succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Comprehensive guides to help you maximize your{" "}
            <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent font-semibold">
              WhatsApp
            </span>{" "}
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
                      className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
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
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className="relative rounded-xl overflow-hidden border border-slate-200/80 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() =>
                              setFullscreenImage("/demo-store.png")
                            }
                          >
                            <Image
                              src="/demo-store.png"
                              alt="Demo Store"
                              width={0} // allows Next.js to calculate from intrinsic size
                              height={0}
                              sizes="100vw" // makes it responsive
                              className="w-full h-auto rounded-xl shadow-md object-contain"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>Click to enlarge</TooltipContent>
                      </Tooltip>
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
                        WhatFlow's powerful features firsthand without setting
                        up your own store.
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
                          {
                            text: "Browse products and add items to your cart",
                          },
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
                        <div className="flex flex-col gap-8 p-4">
                          {[
                            {
                              src: "/connect-whatsapp.png",
                              alt: "Connect Whatsapp",
                            },
                            {
                              src: "/installation-guide.png",
                              alt: "Installation Guide",
                            },
                            { src: "/dashboard.png", alt: "Dashboard" },
                          ].map((img, i) => (
                            <Tooltip key={i}>
                              <TooltipTrigger asChild>
                                <div
                                  className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => setFullscreenImage(img.src)}
                                  tabIndex={0}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={0} // allows Next.js to calculate from intrinsic size
                                    height={0}
                                    sizes="100vw" // makes it responsive
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>Click to enlarge</TooltipContent>
                            </Tooltip>
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
                        Setting up WhatFlow is simple and straightforward.
                        Follow these steps to integrate it with your Shopify
                        store.
                      </p>

                      {/* Carousel */}
                      <GuideCarousel />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "abandoned" && (
                <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Side - Images */}
                    <div className="md:w-2/5">
                      <div className="relative rounded-xl overflow-hidden group">
                        <div className="flex flex-col gap-8 p-4">
                          {[
                            {
                              src: "abandoned-checkout1.png",
                              alt: "Abandoned Checkout",
                            },
                            {
                              src: "abandoned-checkout2.png",
                              alt: "Abandoned Checkout",
                            },
                            {
                              src: "abandoned-checkout3.png",
                              alt: "Abandoned Checkout",
                            },
                          ].map((img, i) => (
                            <Tooltip key={i}>
                              <TooltipTrigger asChild>
                                <div
                                  className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => setFullscreenImage(img.src)}
                                  tabIndex={0}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>Click to enlarge</TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Carousel Steps */}
                    <div className="md:w-3/5 flex flex-col">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                        Abandoned Checkout Recovery
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3 text-lg">
                        Automatically recover abandoned carts with personalized
                        WhatsApp messages that bring customers back to complete
                        their purchase.
                      </p>

                      {/* Carousel */}
                      <AbandonCarousel />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "fulfillment" && (
                <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Side - Images */}
                    <div className="md:w-2/5">
                      <div className="relative rounded-xl overflow-hidden group">
                        <div className="flex flex-col gap-8 p-4">
                          {[
                            {
                              src: "order-fulfill1.png",
                              alt: "Order Fulfillment",
                            },
                            {
                              src: "order-fulfill2.png",
                              alt: "Order Fulfillment",
                            },
                            {
                              src: "order-fulfill3.png",
                              alt: "Order Fulfillment",
                            },
                          ].map((img, i) => (
                            <Tooltip key={i}>
                              <TooltipTrigger asChild>
                                <div
                                  className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => setFullscreenImage(img.src)}
                                  tabIndex={0}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>Click to enlarge</TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Carousel Steps */}
                    <div className="md:w-3/5 flex flex-col">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                        Order Fulfillment Notifications
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3 text-lg">
                        Keep customers informed about their order status with
                        real-time WhatsApp notifications throughout the
                        fulfillment process.
                      </p>

                      {/* Carousel */}
                      <FulfillCarousel />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "confirmation" && (
                <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Side - Images */}
                    <div className="md:w-2/5">
                      <div className="relative rounded-xl overflow-hidden group">
                        <div className="flex flex-col gap-8 p-4">
                          {[
                            {
                              src: "order-confirmation1.png",
                              alt: "Order Confirmation",
                            },
                            {
                              src: "order-confirmation2.png",
                              alt: "Order Confirmation",
                            },
                            {
                              src: "order-confirmation3.png",
                              alt: "Order Confirmation",
                            },
                          ].map((img, i) => (
                            <Tooltip key={i}>
                              <TooltipTrigger asChild>
                                <div
                                  className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                                  onClick={() => setFullscreenImage(img.src)}
                                  tabIndex={0}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto object-cover rounded-xl shadow-md"
                                  />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>Click to enlarge</TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Carousel Steps */}
                    <div className="md:w-3/5 flex flex-col">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                         Order Confirmation Setup
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3 text-lg">
                       Send instant, personalized order confirmations that
                        improve customer satisfaction and reduce support
                        inquiries.
                      </p>

                      {/* Carousel */}
                      <ConfirmCarousel />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "feedback" && (
                <div className="bg-white/90 p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100/80 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Side - Images */}
                    <div className="md:w-2/5">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className="relative rounded-xl overflow-hidden border border-slate-200/80 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() =>
                              setFullscreenImage("/image.png")
                            }
                          >
                            <Image
                              src="/image.png"
                              alt="Feedback"
                              width={0} // allows Next.js to calculate from intrinsic size
                              height={0}
                              sizes="100vw" // makes it responsive
                              className="w-full h-auto rounded-xl shadow-md object-contain"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>Click to enlarge</TooltipContent>
                      </Tooltip>
                    </div>

                    {/* Right Side - Content */}
                    <div className="md:w-3/5 flex flex-col">
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-700 mb-6">
                         Customer Feedback Collection
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-3 text-lg">
                       Automatically collect valuable feedback and reviews to
                        improve your products and customer experience.
                      </p>

                      {/* Carousel */}
                      <FeedbackCarousel />
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
              Contact Us
            </a>
            .
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}
