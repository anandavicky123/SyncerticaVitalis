'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: isAnnual ? 0 : 0,
      period: 'Free Forever',
      description: 'Perfect for individuals getting started with digital health management',
      features: [
        'Basic symptom checker',
        'Health record storage (up to 10 records)',
        'Appointment booking',
        'Email support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      popular: false
    },
    {
      name: 'Pro',
      price: isAnnual ? 19 : 29,
      period: isAnnual ? '/month (billed annually)' : '/month',
      description: 'Advanced features for comprehensive health management',
      features: [
        'Advanced AI symptom analysis',
        'Unlimited health records',
        'Priority appointment booking',
        'Telemedicine consultations',
        'Health trend analysis',
        'Family account management',
        'Priority support'
      ],
      buttonText: 'Start Pro Trial',
      buttonClass: 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:from-blue-600 hover:to-green-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact for pricing',
      description: 'Tailored solutions for healthcare organizations and large teams',
      features: [
        'All Pro features',
        'Custom AI model training',
        'API access',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'On-premise deployment option'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-blue-800 text-white hover:bg-blue-900',
      popular: false
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold text-blue-800">Syncertica Vitalis</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="text-blue-700 hover:text-blue-500 font-medium">Dashboard</Link>
            <Link href="/symptom-checker" className="text-blue-700 hover:text-blue-500 font-medium">Symptom Checker</Link>
            <Link href="/medical-checkup" className="text-blue-700 hover:text-blue-500 font-medium">Checkup</Link>
            <Link href="/appointments" className="text-blue-700 hover:text-blue-500 font-medium">Appointments</Link>
            <Link href="/ehr" className="text-blue-700 hover:text-blue-500 font-medium">EHR</Link>
            <Link href="/insurance" className="text-blue-700 hover:text-blue-500 font-medium">Insurance</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-blue-700 hover:text-blue-500 font-medium">
              <i className="fas fa-user mr-2"></i>Profile
            </Link>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Sign Out
            </button>
            <button className="md:hidden text-blue-700">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-800 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that&apos;s right for you. Start free and upgrade as your health management needs grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'text-blue-800 font-semibold' : 'text-gray-600'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-blue-800 font-semibold' : 'text-gray-600'}`}>
                Annual <span className="text-green-600 text-sm">(Save 35%)</span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {typeof plan.price === 'number' ? (
                      <div>
                        <span className="text-4xl font-bold text-blue-900">${plan.price}</span>
                        <span className="text-gray-600">{plan.period}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-blue-900">{plan.price}</span>
                        <div className="text-gray-600">{plan.period}</div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-3 mt-1"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll prorate any billing adjustments.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! Pro plan comes with a 14-day free trial. No credit card required to start your trial.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Is my data secure?</h3>
              <p className="text-gray-600">Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your health data is never shared without your explicit consent.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare?</h2>
            <p className="text-xl mb-6 text-blue-100">Join thousands of users who trust Syncertica Vitalis with their health.</p>
            <Link href="/signin" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors inline-block">
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Syncertica Vitalis</h3>
              <p className="text-blue-200">Integrating AI and healthcare for better patient outcomes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/footer/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/footer/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/footer/security" className="hover:text-white">Security</Link></li>
                <li><Link href="/footer/api" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/footer/about" className="hover:text-white">About Us</Link></li>
                <li><span className="hover:text-white cursor-help" title="Coming Soon!">Careers</span></li>
                <li><span className="hover:text-white cursor-help" title="Coming Soon!">Press</span></li>
                <li><span className="hover:text-white cursor-help" title="Coming Soon!">Blog</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/footer/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/footer/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/footer/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/footer/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-blue-300 text-center">
            <p>© 2025 Syncertica Vitalis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}