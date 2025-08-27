'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutUs() {
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
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">About Syncertica Vitalis</h1>
          <p className="text-lg text-gray-600">Revolutionizing healthcare through artificial intelligence and innovative technology.</p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Syncertica Vitalis, we believe that everyone deserves access to high-quality healthcare. Our mission is to democratize healthcare by leveraging artificial intelligence and cutting-edge technology to provide personalized, accessible, and comprehensive health solutions.
            </p>
            <p className="text-lg text-gray-700">
              We're committed to bridging the gap between patients and healthcare providers, making medical expertise available at your fingertips while maintaining the highest standards of privacy and security.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Vision</h2>
            <p className="text-lg text-blue-800 mb-6">
              To create a world where healthcare is proactive, personalized, and accessible to all. We envision a future where AI-powered health insights help prevent diseases before they occur, and where every individual has the tools they need to take control of their health journey.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Privacy & Security</h3>
              <p className="text-gray-600">Your health data is sacred. We employ enterprise-grade security measures and comply with all healthcare privacy regulations to protect your information.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Patient-Centered Care</h3>
              <p className="text-gray-600">Every feature we build is designed with the patient in mind. We prioritize user experience and health outcomes above all else.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Innovation</h3>
              <p className="text-gray-600">We continuously push the boundaries of what's possible in healthcare technology, always seeking better ways to serve our users.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Dr. Sarah Chen</h3>
              <p className="text-blue-600 mb-3">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">Former Chief Medical Officer at leading health tech companies. MD from Harvard Medical School, MBA from Stanford.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Michael Rodriguez</h3>
              <p className="text-blue-600 mb-3">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">AI researcher with 15+ years in machine learning. PhD in Computer Science from MIT, former Google AI team lead.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Dr. James Wilson</h3>
              <p className="text-blue-600 mb-3">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">Board-certified physician with expertise in digital health. MD from Johns Hopkins, former Mayo Clinic researcher.</p>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-blue-100">Health Assessments</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-blue-100">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}