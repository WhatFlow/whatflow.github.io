import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - WhatFlow',
  description: 'WhatFlow privacy policy and data protection information',
};

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              At WhatFlow, your privacy and security are our top priorities. This Privacy Policy explains how we collect, use, and protect your data when you use our app.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>WhatsApp Account Access:</strong> When you connect your WhatsApp account, you log into our backend engine as a linked device. This allows us to securely manage the sending of order confirmation messages on your behalf. We have full access to your WhatsApp account for the purpose of sending messages, but we do not interact with or access other features (e.g., chats, media).
              </li>
              <li>
                <strong>Order Data:</strong> We collect information related to Shopify orders, such as customer details and order statuses, to send the appropriate messages via WhatsApp.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect basic app usage data to enhance performance and functionality.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Message Delivery:</strong> WhatFlow uses your WhatsApp account to send automated order confirmation messages to customers. Although we have access to your account as a linked device, our interaction is strictly limited to message transmission. No other WhatsApp data, such as conversations or media, is accessed.
              </li>
              <li>
                <strong>Data Security:</strong> All communications between your WhatsApp account, our servers, and Shopify are encrypted using secure protocols. We ensure that your WhatsApp data is used only for its intended purpose and is never exposed or shared with third parties.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. NoWeb Engine & Account Confidentiality</h2>
            <p className="text-gray-600">
              Our app runs on a NoWeb engine, meaning there is no interface to access your WhatsApp data beyond sending HTTP requests for message delivery. Your account remains completely confidential, and no sensitive information (chats, media, or contacts) is stored or accessed.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Customer Control</h2>
            <p className="text-gray-600 mb-4">You have full control of your WhatsApp account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disconnect your WhatsApp account at any time from the app.</li>
              <li>Delete the app from your Shopify store, and all access to your WhatsApp account will be revoked immediately. We do not retain any personal data after disconnection or deletion.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security Measures</h2>
            <p className="text-gray-600">
              We follow industry-standard security measures, including encryption and secure data storage. Although we access your WhatsApp as a linked device, the scope of interaction is strictly limited to what is necessary for service functionality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">GDPR Compliance</h2>
            <p className="text-gray-600 mb-4">
              If you are located in the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). WhatFlow ensures compliance with GDPR by providing you with the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You may request access to the personal data we hold about you at any time.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request corrections to any inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure:</strong> You may request the deletion of your personal data under certain conditions, including when it is no longer necessary for the purpose for which it was collected.</li>
              <li><strong>Right to Restrict Processing:</strong> You may request a limitation on how we process your personal data.</li>
              <li><strong>Right to Data Portability:</strong> You may request a copy of your personal data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              If you wish to exercise any of these rights, please contact us through the support information provided. We respond to all requests in accordance with GDPR timelines and regulations. Please note that disconnecting your WhatsApp account or uninstalling the app automatically removes all access to your data.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 