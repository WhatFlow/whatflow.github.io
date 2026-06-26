"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bot, ShoppingCart, BarChart3 } from "lucide-react";
import FadeInSection from "./FadeIn";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  index: number;
};

const FeatureCard = ({ icon, title, text, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="relative flex flex-col h-full items-center text-center p-6 rounded-[24px] border border-border bg-white shadow-sm transition-all duration-300 group"
    >
      {/* Icon Wrapper */}
      <div className="relative rounded-full p-4 mb-5 bg-chat-cream border border-border transition-colors duration-300 group-hover:bg-primary/20">
        <div className="relative z-10 text-primary-mid transition-colors duration-300 group-hover:text-primary-dark">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-ink mb-3 transition-colors duration-300 group-hover:text-primary-mid">
        {title}
      </h3>

      {/* Text */}
      <p className="text-text-muted leading-relaxed text-base">
        {text}
      </p>
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
    <div className="py-20 bg-chat-cream relative border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <FadeInSection>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm">
              SIMPLE & POWERFUL
            </span>

            <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Everything you need to <span className="text-primary-mid font-semibold">Automate</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Powerful WhatsApp automation features designed to boost your
              Shopify store's sales and customer experience.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          {/* Feature Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
