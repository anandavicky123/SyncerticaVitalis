"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Features() {
  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Symptom Checker",
      description:
        "Advanced machine learning algorithms analyze your symptoms and provide instant health assessments with high accuracy.",
      benefits: [
        "Instant results",
        "24/7 availability",
        "Continuously learning",
        "Evidence-based recommendations",
      ],
    },
    {
      icon: "fas fa-file-medical-alt",
      title: "Electronic Health Records",
      description:
        "Secure, comprehensive digital health records that are accessible anytime, anywhere, with full privacy protection.",
      benefits: [
        "Cloud-based storage",
        "Easy sharing with doctors",
        "Complete medical history",
        "HIPAA compliant",
      ],
    },
    {
      icon: "fas fa-calendar-check",
      title: "Smart Appointment Booking",
      description:
        "Seamlessly book appointments with healthcare providers based on your location, insurance, and medical needs.",
      benefits: [
        "Real-time availability",
        "Insurance verification",
        "Automated reminders",
        "Virtual consultations",
      ],
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Comprehensive Health Checkups",
      description:
        "Complete health assessments that track your wellness over time and identify potential health risks early.",
      benefits: [
        "Personalized assessments",
        "Trend analysis",
        "Risk prediction",
        "Preventive care recommendations",
      ],
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security measures protect your sensitive health information at all times.",
      benefits: [
        "End-to-end encryption",
        "Multi-factor authentication",
        "Regular security audits",
        "Compliance certified",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile-First Design",
      description:
        "Access your health information on any device with our responsive, mobile-optimized platform.",
      benefits: [
        "Cross-platform compatibility",
        "Offline access",
        "Push notifications",
        "Intuitive interface",
      ],
    },
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
            <h1 className="text-xl font-bold text-blue-800">
              Syncertica Vitalis
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/dashboard"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/symptom-checker"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Symptom Checker
            </Link>
            <Link
              href="/medical-checkup"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Checkup
            </Link>
            <Link
              href="/appointments"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Appointments
            </Link>
            <Link
              href="/ehr"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              EHR
            </Link>
            <Link
              href="/insurance"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Insurance
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/profile"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
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
            <h1 className="text-5xl font-bold text-blue-800 mb-4">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Syncertica Vitalis transforms your healthcare
              experience with cutting-edge AI technology and comprehensive
              health management tools.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-6">
                    <i className={`${feature.icon} text-white text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                  </div>
                </div>
                <div className="ml-22">
                  <h4 className="font-semibold text-blue-700 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center text-gray-600"
                      >
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Seamless Integration
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hospital text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Healthcare Providers
                </h3>
                <p className="text-blue-700">
                  Connect with hospitals, clinics, and specialists in your
                  network.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-pills text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Pharmacy Networks
                </h3>
                <p className="text-blue-700">
                  Seamless prescription management and pharmacy integration.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heartbeat text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Wearable Devices
                </h3>
                <p className="text-blue-700">
                  Sync with fitness trackers and health monitoring devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience the Future of Healthcare?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Join thousands of users who have already transformed their health
              management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signin"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/footer/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
