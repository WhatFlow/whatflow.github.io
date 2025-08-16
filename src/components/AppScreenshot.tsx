"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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
      className="relative flex flex-col h-full   items-center text-center p-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent"
        animate={{
          background: isHovered ? "transparent" : "transparent",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Icon Wrapper */}
      <motion.div
        className="relative rounded-full p-4 mb-5 bg-gradient-to-tr from-emerald-50 via-teal-100 to-emerald-200 shadow-inner"
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? "0 0 25px rgba(20,184,166,0.25)"
            : "0 0 0px rgba(20,184,166,0)",
        }}
        transition={{ duration: 0.35 }}
      >
        <motion.div className="relative z-10">{icon}</motion.div>
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
    icon: (
      <svg
        className="h-6 w-6 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    ),
    title: "Simple Setup",
    text: "Connect WhatsApp in seconds with our intuitive interface.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Full Customization",
    text: "Tailor automations and templates to match your brand voice.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Detailed Analytics",
    text: "Track performance with comprehensive delivery metrics.",
  },
];

export default function AppScreenshot() {
  return (
    <div className="py-20 bg-gradient-to-br from-white via-teal-50 to-green-50 relative">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.15),transparent_60%)] animate-pulse"></div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800 shadow-sm">
            💪🏻 Simple & Powerful
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            See WhatFlow in Action
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Take control of your WhatsApp automation with an intuitive
            dashboard. Connect your account, customize templates, and watch your
            engagement soar.
          </p>
        </div>

        {/* Screenshot Card */}
        <div className="mt-16 relative flex justify-center">
          <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden max-w-5xl border border-gray-100 bg-white">
            {/* Fake Browser Top Bar */}
            <div className="bg-teal-600 h-10 w-full flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <Image
              src="/app-screenshot.png"
              alt="WhatFlow App Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          {/* Glow Background */}
          <div className="absolute -z-10 w-[100%] h-[100%] bg-gradient-to-r from-green-100/40 via-teal-100/40 to-green-50/40 blur-3xl rounded-3xl"></div>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
  {features.map((feature, idx) => (
    <div key={idx} className={`
      ${idx === features.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
    `}>
      <FeatureCard
        icon={feature.icon}
        title={feature.title}
        text={feature.text}
        index={idx}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
