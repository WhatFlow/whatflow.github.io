"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Bot, ShoppingCart, BarChart3 } from "lucide-react";
import FadeInSection from "./FadeIn";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  index: number;
};

const FeatureCard = ({ icon, title, text, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative flex flex-col h-full items-center text-center p-5 rounded-2xl border border-green-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Wrapper */}
      <motion.div
        className="relative rounded-full p-4 mb-5 bg-gradient-to-tr from-teal-50 via-emerald-50 to-teal-100 shadow-inner"
        animate={{
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered
            ? "0 8px 30px rgba(13,148,136,0.25)"
            : "0 0 0px rgba(13,148,136,0)",
        }}
        transition={{ duration: 0.35 }}
      >
        <motion.div className="relative z-10 text-teal-600">{icon}</motion.div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl font-semibold tracking-wide text-gray-900 mb-3"
        animate={{ color: isHovered ? "#0D9488" : "#1F2937" }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.h3>

      {/* Text */}
      <motion.p
        className="text-gray-600 leading-relaxed text-base"
        animate={{ opacity: isHovered ? 1 : 0.95 }}
      >
        {text}
      </motion.p>

      {/* Bottom Accent Bar */}
      <motion.div
        className="w-12 h-1 mt-5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500"
        animate={{
          width: isHovered ? "48px" : "12px",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
};

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "WhatsApp Integration",
    description:
      "Seamlessly connect WhatsApp to your Shopify store with powerful automation workflows.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Smart Automation",
    description:
      "Automate customer support, order updates, and marketing campaigns with intelligent bots.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Shopify Sync",
    description:
      "Real-time synchronization with your Shopify store for orders, inventory, and customer data.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Insights",
    description:
      "Track performance, monitor conversations, and optimize your automation workflows.",
  },
];

export default function HallMarks() {
  return (
    <div className="py-20 bg-gradient-to-br from-white via-teal-50 to-green-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 ring-1 ring-emerald-200 px-4 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
              <span className="text-base">💎</span> SIMPLE & POWERFUL
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Everything you need to {""}
              <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
                Automate
              </span>
            </h2>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              Powerful WhatsApp automation features designed to boost your
              Shopify store's sales and customer experience.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          {/* Feature Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                text={feature.description}
                index={idx}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
