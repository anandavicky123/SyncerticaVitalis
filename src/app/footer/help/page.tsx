'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function HelpCenter() {
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

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600">Find answers to common questions and get help with using Syncertica Vitalis.</p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-question-circle text-blue-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Getting Started</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Creating your account</a></li>
              <li><a href="#" className="hover:text-blue-600">Setting up your profile</a></li>
              <li><a href="#" className="hover:text-blue-600">First health checkup</a></li>
              <li><a href="#" className="hover:text-blue-600">Understanding your dashboard</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user-md text-green-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Using Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">AI Symptom Checker guide</a></li>
              <li><a href="#" className="hover:text-blue-600">Booking appointments</a></li>
              <li><a href="#" className="hover:text-blue-600">Managing health records</a></li>
              <li><a href="#" className="hover:text-blue-600">Understanding AI recommendations</a></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt text-purple-500 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Privacy & Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Data protection overview</a></li>
              <li><a href="#" className="hover:text-blue-600">Managing privacy settings</a></li>
              <li><a href="#" className="hover:text-blue-600">Two-factor authentication</a></li>
              <li><a href="#" className="hover:text-blue-600">Sharing data with providers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">How accurate is the AI symptom checker?</h3>
              <p className="text-gray-600">Our AI has been trained on millions of medical cases and provides assessments for informational purposes. Always consult healthcare professionals for medical decisions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Is my health data secure?</h3>
              <p className="text-gray-600">Yes, we use enterprise-grade encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Can I share my records with my doctor?</h3>
              <p className="text-gray-600">Absolutely! You can easily share your health records and assessments with any healthcare provider through our secure sharing feature.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <Link href="/footer/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors">
            Contact Support
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}