"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold text-blue-800">
              Syncertica Vitalis
            </h1>
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 1, 2025</p>
        </section>

        <div className="bg-white rounded-2xl shadow-lg p-8 prose max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 mb-6">
            Syncertica Vitalis (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) is committed to protecting your privacy and ensuring
            the security of your personal health information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our healthcare platform.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Personal Information
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
            <li>Name, email address, phone number</li>
            <li>Date of birth, gender, address</li>
            <li>Emergency contact information</li>
            <li>Insurance information</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Health Information
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Medical history and conditions</li>
            <li>Symptoms and health assessments</li>
            <li>Medications and allergies</li>
            <li>Appointment and consultation records</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Provide healthcare services and AI-powered assessments</li>
            <li>Facilitate appointments with healthcare providers</li>
            <li>Maintain and improve our platform</li>
            <li>Communicate with you about your health and our services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Information Sharing
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell your personal health information. We may share your
            information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>With your explicit consent</li>
            <li>With healthcare providers you choose to consult</li>
            <li>As required by law or legal process</li>
            <li>To protect the rights, property, or safety of our users</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Data Security
          </h2>
          <p className="text-gray-700 mb-6">
            We implement industry-standard security measures including
            encryption, access controls, and regular security audits. Our
            platform is HIPAA compliant and undergoes regular third-party
            security assessments.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Access and review your personal information</li>
            <li>Request corrections to inaccurate information</li>
            <li>Delete your account and associated data</li>
            <li>Export your health data</li>
            <li>Opt-out of non-essential communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, please contact us
            at:
            <br />
            Email: privacy@syncerticavitalis.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
