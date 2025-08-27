'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Resources() {
  const [activeTab, setActiveTab] = useState('demo');

  const tabs = [
    { id: 'demo', label: 'Demo Store Guide' },
    { id: 'install', label: 'Installation Guide' },
    { id: 'abandoned', label: 'Abandoned Checkout' },
    { id: 'fulfillment', label: 'Order Fulfillment' },
    { id: 'confirmation', label: 'Order Confirmation' },
    { id: 'feedback', label: 'Customer Feedback' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Resources & Documentation</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to get started with WhatFlow and make the most of your WhatsApp automation.
          </p>
        </div>

        <div className="mt-10 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-teal text-teal'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === 'demo' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Using the Demo Store</h3>
              <p>Our demo store allows you to experience WhatFlow's features firsthand without setting up your own store.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Getting Started</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit the <Link href="https://whatsappconnectdemo.myshopify.com/" className="text-teal hover:text-green" target="_blank" rel="noopener noreferrer">demo store</Link></li>
                <li>Browse products and add items to your cart</li>
                <li>Proceed to checkout and complete the purchase (test mode - no actual charges)</li>
                <li>Provide your WhatsApp number to receive automated messages</li>
                <li>Experience different automation scenarios</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Testing Specific Scenarios</h4>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium">Abandoned Checkout</h5>
                <p>Add products to cart, start checkout, but leave before completing. You'll receive a recovery message after 30 minutes (accelerated to 2 minutes in demo mode).</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium">Order Fulfillment</h5>
                <p>Complete a purchase and you'll receive an order confirmation immediately. In the demo store, fulfillment notifications are sent automatically after 5 minutes.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h5 className="font-medium">Order Confirmation</h5>
                <p>Immediately after checkout, you'll receive an order confirmation with details of your purchase.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium">Customer Feedback</h5>
                <p>24 hours after delivery (simulated as 10 minutes in demo mode), you'll receive a feedback request message.</p>
              </div>

              <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
                <p className="text-sm font-medium text-teal">Note: Demo mode accelerates all timeframes. In a production environment, message timing follows standard e-commerce lifecycle.</p>
              </div>
            </div>
          )}

          {activeTab === 'install' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Installing WhatFlow on Your Store</h3>
              <p>Follow these steps to set up WhatFlow on your own Shopify store.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Installation Steps</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit the <Link href="https://apps.shopify.com/whatflow" className="text-teal hover:text-green" target="_blank" rel="noopener noreferrer">WhatFlow app page</Link> on the Shopify App Store</li>
                <li>Click "Add app" and follow the Shopify installation process</li>
                <li>Once installed, you'll be redirected to the WhatFlow dashboard</li>
                <li>Connect your WhatsApp account using the "Link Device" option</li>
                <li>Scan the QR code with your WhatsApp app</li>
                <li>Configure your desired automation features</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Connection Requirements</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Active WhatsApp account on a smartphone</li>
                <li>Stable internet connection on both your phone and computer</li>
                <li>WhatsApp must remain connected to the internet</li>
                <li>We recommend using a dedicated phone number for business communications</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Account Verification</h4>
              <p>After connecting your WhatsApp account, you'll need to verify it:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Enter your business name and contact information</li>
                <li>Add your business logo (this will appear in message threads)</li>
                <li>Send a test message to verify the connection</li>
              </ol>

              <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
                <p className="text-sm font-medium text-teal">Tip: For optimal performance, we recommend using a dedicated device for your WhatsApp business messages.</p>
              </div>
            </div>
          )}

          {activeTab === 'abandoned' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Abandoned Checkout Configuration</h3>
              <p>Set up automated recovery messages for customers who leave items in their cart.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the "Abandoned Checkout" tab in your WhatFlow dashboard</li>
                <li>Enable the feature by toggling the switch</li>
                <li>Configure timing settings (how long after abandonment to send messages)</li>
                <li>Customize message templates for initial and follow-up messages</li>
                <li>Set up discount offers if desired (requires Shopify discount code configuration)</li>
                <li>Save your settings and activate</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
              <p>Personalize your abandoned cart recovery messages with these variables:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
                <li><code>{'{{product_list}}'}</code> - Includes abandoned products with images</li>
                <li><code>{'{{checkout_link}}'}</code> - Direct link to complete checkout</li>
                <li><code>{'{{discount_code}}'}</code> - Displays any applicable discount code</li>
                <li><code>{'{{discount_amount}}'}</code> - Shows the discount percentage or amount</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send the first recovery message within 1-2 hours of abandonment</li>
                <li>Use a friendly, helpful tone rather than pushy sales language</li>
                <li>Include product images to remind customers what they left behind</li>
                <li>Consider offering a time-limited discount in follow-up messages</li>
                <li>Always include a direct checkout link for easy conversion</li>
              </ul>

              <div className="mt-8 p-4 border border-yellow-400/20 rounded-lg bg-yellow-50">
                <p className="text-sm font-medium text-yellow-700">Note: Customers must enter their phone number during checkout to receive abandoned cart messages.</p>
              </div>
            </div>
          )}

          {activeTab === 'fulfillment' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Order Fulfillment Notifications</h3>
              <p>Keep customers informed about their order status with automated shipping and delivery updates.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the "Order Fulfillment" tab in your WhatFlow dashboard</li>
                <li>Enable the feature by toggling the switch</li>
                <li>Configure which fulfillment events trigger notifications (shipping, delivery, etc.)</li>
                <li>Customize message templates for each event type</li>
                <li>Set up tracking link integration if applicable</li>
                <li>Save your settings and activate</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Available Notification Events</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Order Shipped</strong> - Sent when an order is marked as shipped</li>
                <li><strong>Out for Delivery</strong> - Notifies when package is out for delivery (requires carrier integration)</li>
                <li><strong>Order Delivered</strong> - Confirms successful delivery (requires carrier integration)</li>
                <li><strong>Shipping Delay</strong> - Alerts customers of potential delays</li>
                <li><strong>Delivery Exception</strong> - Notifies of delivery problems requiring attention</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
              <p>Personalize your fulfillment notifications with these variables:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
                <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
                <li><code>{'{{tracking_number}}'}</code> - Shows the shipment tracking number</li>
                <li><code>{'{{tracking_link}}'}</code> - Provides a clickable tracking link</li>
                <li><code>{'{{carrier_name}}'}</code> - Displays the shipping carrier</li>
                <li><code>{'{{estimated_delivery}}'}</code> - Shows estimated delivery date range</li>
              </ul>

              <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
                <p className="text-sm font-medium text-teal">Tip: Include tracking information and estimated delivery dates to reduce "where is my order?" customer service inquiries.</p>
              </div>
            </div>
          )}

          {activeTab === 'confirmation' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Order Confirmation Setup</h3>
              <p>Send instant order confirmations to reassure customers their purchase was successful.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the "Order Confirmation" tab in your WhatFlow dashboard</li>
                <li>Enable the feature by toggling the switch</li>
                <li>Customize your order confirmation message template</li>
                <li>Configure which order details to include</li>
                <li>Set up any follow-up messages if desired</li>
                <li>Save your settings and activate</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
              <p>Personalize your order confirmation messages with these variables:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
                <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
                <li><code>{'{{order_date}}'}</code> - Shows the purchase date and time</li>
                <li><code>{'{{order_total}}'}</code> - Displays the total amount paid</li>
                <li><code>{'{{payment_method}}'}</code> - Shows the payment method used</li>
                <li><code>{'{{product_list}}'}</code> - Includes purchased products with images</li>
                <li><code>{'{{shipping_address}}'}</code> - Shows the delivery address</li>
                <li><code>{'{{order_link}}'}</code> - Direct link to view order details</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send confirmation messages immediately after purchase</li>
                <li>Include essential order details but keep messages concise</li>
                <li>Provide a link to view complete order information</li>
                <li>Thank customers for their purchase</li>
                <li>Set expectations for next steps (fulfillment timelines, etc.)</li>
              </ul>

              <div className="mt-8 p-4 border border-teal/20 rounded-lg bg-teal/5">
                <p className="text-sm font-medium text-teal">Tip: Order confirmations have the highest open rates of any e-commerce message - they're a great opportunity to build customer trust.</p>
              </div>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Customer Feedback Collection</h3>
              <p>Gather valuable customer feedback and product reviews through automated WhatsApp messages.</p>

              <h4 className="text-lg font-medium mt-6 mb-2">Setup Process</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the "Customer Feedback" tab in your WhatFlow dashboard</li>
                <li>Enable the feature by toggling the switch</li>
                <li>Configure when to send feedback requests (e.g., days after delivery)</li>
                <li>Customize your feedback request message</li>
                <li>Set up response handling and follow-ups</li>
                <li>Save your settings and activate</li>
              </ol>

              <h4 className="text-lg font-medium mt-6 mb-2">Feedback Types</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Rating Requests</strong> - Ask for a numerical rating (1-5 stars)</li>
                <li><strong>Product Reviews</strong> - Request detailed feedback about specific products</li>
                <li><strong>Service Experience</strong> - Gather feedback about the shopping experience</li>
                <li><strong>NPS Surveys</strong> - Measure Net Promoter Score with likelihood to recommend</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Message Customization</h4>
              <p>Personalize your feedback request messages with these variables:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><code>{'{{customer_name}}'}</code> - Inserts the customer's name</li>
                <li><code>{'{{order_number}}'}</code> - Displays the order reference number</li>
                <li><code>{'{{product_name}}'}</code> - Shows the specific product for review</li>
                <li><code>{'{{product_image}}'}</code> - Includes an image of the purchased product</li>
                <li><code>{'{{review_link}}'}</code> - Direct link to leave a review on your store</li>
              </ul>

              <h4 className="text-lg font-medium mt-6 mb-2">Best Practices</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send feedback requests 7-10 days after delivery</li>
                <li>Keep surveys short and focused</li>
                <li>Offer incentives for completing feedback (discount on next order)</li>
                <li>Follow up on negative feedback to resolve issues</li>
                <li>Ask permission to publish positive reviews on your store</li>
              </ul>

              <div className="mt-8 p-4 border border-yellow-400/20 rounded-lg bg-yellow-50">
                <p className="text-sm font-medium text-yellow-700">Note: Be mindful of message frequency. Too many requests can lead to customer fatigue and opt-outs.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}