'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold text-blue-800">Syncertica Vitalis</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 1, 2025</p>
        </section>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using Syncertica Vitalis, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Description of Service</h2>
          <p className="text-gray-700 mb-6">
            Syncertica Vitalis provides AI-powered health assessment tools, electronic health record management, and healthcare provider connection services. Our services are for informational purposes only and do not constitute medical advice, diagnosis, or treatment.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Medical Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            The information provided by our AI systems is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Use the service in compliance with applicable laws</li>
            <li>Not misuse or attempt to gain unauthorized access to our systems</li>
            <li>Respect the privacy and rights of other users</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Privacy and Data Protection</h2>
          <p className="text-gray-700 mb-6">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your personal information.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            Syncertica Vitalis shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Termination</h2>
          <p className="text-gray-700 mb-6">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: legal@syncerticavitalis.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}