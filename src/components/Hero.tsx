"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-chat-cream border-b border-border">
      <div className="mx-auto max-w-7xl pe-6 sm:pe-0 ps-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-24 lg:ps-8">
        {/* Text Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-16 sm:mt-24 lg:mt-8">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink border border-border shadow-sm"
            >
              <span>Just launched v2.0</span>
            </span>
          </div>

          <h1 className="mt-10 text-4xl font-light tracking-tight text-ink sm:text-[56px] lg:text-6xl xl:text-[64px] leading-tight">
            Complete <br className="hidden sm:inline" />
            <span className="text-primary-mid font-semibold">WhatsApp Automation</span> Suite
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            WhatFlow boosts revenue & engagement by delivering automated
            WhatsApp messages — from order confirmations and abandoned cart
            recovery to fulfillment updates & cancellations.
          </p>

          <div className="mt-4 text-sm text-text-muted">
            <span className="font-semibold text-ink">Simple integration:</span> Connect
            in minutes with WhatsApp's <em>"link a device"</em> — no API or
            business account needed.
          </div>

          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="https://apps.shopify.com/whatflow"
              className="px-7 py-3.5 rounded-full bg-primary text-ink border border-ink font-semibold transition-all duration-300 hover:bg-ink hover:text-white hover:border-ink shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </Link>
            <Link
              href="https://whatsappconnectdemo.myshopify.com/"
              className="text-base font-semibold leading-6 text-ink hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo →
            </Link>
          </div>
        </div>

        {/* Flat Card Gallery */}
        <div className="sm:mx-auto mt-16 lg:ml-10 lg:mt-0 flex justify-center items-center flex-col sm:flex-row sm:space-x-[-4rem] relative">
          {/* Card 1 */}
          <div className="relative w-[22rem] h-[31rem] rounded-[32px] bg-white border border-border shadow-lg p-5 transition-transform duration-300 hover:-translate-y-2">
            <ChatCard
              title="Abandoned Checkout"
              messages={[
                [
                  "Hi Sarah! We noticed you left some items...",
                  "left",
                  "10:42 AM",
                ],
                ["Oh, I got distracted...", "right", "10:43 AM"],
                ["We can offer you 10% off...", "left", "10:45 AM"],
                ["Perfect! I'll complete...", "right", "10:46 AM"],
                [
                  "Awesome! Here’s your discount code: SAVE10",
                  "left",
                  "10:47 AM",
                ],
              ]}
            />
          </div>

          {/* Card 2 */}
          <div className="hidden sm:block relative w-[22rem] h-[31rem] rounded-[32px] bg-white border border-border shadow-lg p-5 transform scale-[0.95] transition-transform duration-300 hover:-translate-y-2 hover:scale-[0.98]">
            <ChatCard
              title="Order Fulfillment"
              messages={[
                [
                  "Great news, Michael! Your order has been shipped",
                  "left",
                  "2:15 PM",
                ],
                ["That’s awesome, thanks!", "right", "2:16 PM"],
                [
                  "Here’s your tracking link: track.order/123",
                  "left",
                  "2:17 PM",
                ],
                ["Got it, appreciate the update!", "right", "2:18 PM"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type Message = [string, "left" | "right", string];

interface ChatCardProps {
  title: string;
  messages: Message[];
}

function ChatCard({ title, messages }: ChatCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Title Bar */}
      <div className="p-4 bg-primary-mid flex items-center rounded-t-[20px] -mx-5 -mt-5">
        <svg
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <div className="ml-3 text-white text-base font-semibold">{title}</div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col gap-3 mt-4 text-sm overflow-y-auto flex-1">
        {messages.map(([text, side, time], idx) => (
          <div
            key={idx}
            className={`${
              side === "right"
                ? "bg-chat-green self-end rounded-tr-none"
                : "bg-chat-cream self-start rounded-tl-none"
            } rounded-[16px] p-3 border border-border/40 shadow-sm max-w-[85%] flex flex-col`}
          >
            <span className="text-ink leading-relaxed">{text}</span>
            <div className="text-[10px] text-text-muted text-right mt-1">
              {time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
