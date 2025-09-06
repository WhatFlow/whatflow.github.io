// app/llms.txt/route.ts
import { NextResponse } from "next/server";

// Force this route to be statically generated
export const dynamic = "force-static";

export async function GET() {
  const content = `# Complete WhatsApp Automation Suite
> WhatFlow boosts revenue & engagement by delivering automated WhatsApp messages — from order confirmations and abandoned cart recovery to fulfillment updates & cancellations.

## Key Pages
- [Home](https://whatflow.tech/): Main overview
- [Features](https://whatflow.tech/features): Benefits and highlights
- [Resources](https://whatflow.tech/resources): Get touch and resources

## Pricing Plans
- **Free**: $0/month, 50 messages,
- **Starter**: $4.99/month, 1,500 messages
- **Growth**: $9.99/month, 3,000 messages
- **Professional**: $14.99/month, 5,000 messages,
- **Enterprise**: $24.99/month, 12,500 messages
- **Ultimate**: $49.99/month, Unlimited messages
- [Pricing Plans](https://whatflow.tech/pricing)

## Features
- Order Updates
- Abandoned Cart Recovery
- Order Fulfillment Updates
- Cancellation Management
- Custom Message Templates
- Automatic Order Tagging
- Comprehensive Analytics
- Simple WhatsApp Integration
- Bulk Messenger with CSV Upload
- Back in Stock Alerts
- [All Features](https://whatflow.tech/features)

## Privacy Policy & Terms of Service
- [Privacy Policy](https://whatflow.tech/privacy-policy)
- [Terms of Service](https://whatflow.tech/terms)

  `;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
