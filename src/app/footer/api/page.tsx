'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function API() {
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">API Documentation</h1>
          <p className="text-lg text-gray-600">Integrate Syncertica Vitalis into your healthcare applications with our comprehensive API.</p>
        </section>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Healthcare API</h2>
          <p className="text-gray-600 mb-6">
            Our RESTful API provides secure access to health data, symptom analysis, and appointment management features. 
            Built for healthcare developers who need reliable, HIPAA-compliant integration.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>RESTful API design</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>OAuth 2.0 authentication</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>HIPAA compliant endpoints</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Real-time webhooks</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Comprehensive documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Available Endpoints</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-code text-blue-500 mr-2"></i>Patient Management</li>
                <li className="flex items-center"><i className="fas fa-code text-blue-500 mr-2"></i>Symptom Analysis</li>
                <li className="flex items-center"><i className="fas fa-code text-blue-500 mr-2"></i>Appointment Scheduling</li>
                <li className="flex items-center"><i className="fas fa-code text-blue-500 mr-2"></i>Health Records</li>
                <li className="flex items-center"><i className="fas fa-code text-blue-500 mr-2"></i>Provider Directory</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-2">Getting Started</h4>
            <p className="text-gray-600 mb-4">Contact our API team to get access credentials and detailed documentation.</p>
            <Link href="/footer/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition-colors">
              Request API Access
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}