"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "WhatFlow transformed our customer communication. Order confirmations and updates are now instant and automated!",
      name: "Sarah Johnson",
      designation: "CEO, Trendy Threads",
      src: "/Testimonial_1.avif",
    },
    {
      quote:
        "Abandoned cart recovery boosted our sales by 15%! The automation is seamless.",
      name: "Michael Lee",
      designation: "Founder, Home Essentials Co.",
      src: "/Testimonial_2.avif",
    },
    {
      quote:
        "We no longer miss customer updates. The system is fast, reliable, and very easy to use.",
      name: "Emily Smith",
      designation: "Marketing Head, Luxe Decor",
      src: "/Testimonial_3.avif",
    },
    {
      quote:
        "We no longer miss customer updates. The system is fast, reliable, and very easy to use.",
      name: "Emily Smith",
      designation: "Marketing Head, Luxe Decor",
      src: "/Testimonial_4.avif",
    },
    {
      quote:
        "We no longer miss customer updates. The system is fast, reliable, and very easy to use.",
      name: "Emily Smith",
      designation: "Marketing Head, Luxe Decor",
      src: "/Testimonial_5.avif",
    },
  ];

  const autoplay = true;
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const id = setInterval(handleNext, 5000);
      return () => clearInterval(id);
    }
  }, [autoplay]);

  return (
    <div className="bg-gradient-to-b from-white via-teal-50/50 to-white px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 shadow-sm">
          Testimonials
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          See how businesses grow with{" "}
          <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">
            WhatsApp automation
          </span>
        </h2>
        <p className="mt-3 text-gray-600">
          Real stories from our customers about how automation made their work easier, faster, and more profitable.
        </p>
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Left - Image Stack */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {rotations.length > 0 &&
                testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index],
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm font-medium text-teal-600">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-lg leading-relaxed text-gray-600">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={handlePrev}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600"
            >
              <IconArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-teal-500 hover:bg-teal-50 hover:text-teal-600"
            >
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
