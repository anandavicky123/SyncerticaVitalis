"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: "fas fa-robot",
      title: "AI-Powered Diagnosis",
      description:
        "Get instant health assessments using advanced artificial intelligence technology.",
    },
    {
      icon: "fas fa-file-medical-alt",
      title: "Electronic Health Records",
      description:
        "Secure, comprehensive digital health records accessible anytime, anywhere.",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Easy Appointments",
      description:
        "Book appointments with healthcare providers seamlessly through our platform.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "HIPAA Compliant",
      description:
        "Your health data is protected with enterprise-grade security and privacy.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Friendly",
      description:
        "Access your health information on any device, anywhere you go.",
    },
    {
      icon: "fas fa-users-cog",
      title: "Care Coordination",
      description:
        "Connect with your entire healthcare team for coordinated care.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image: "/api/placeholder/60/60",
      quote:
        "Syncertica Vitalis has revolutionized how I manage my health. The AI symptom checker is incredibly accurate!",
    },
    {
      name: "Dr. Michael Chen",
      role: "Cardiologist",
      image: "/api/placeholder/60/60",
      quote:
        "This platform has improved patient engagement and made my practice more efficient. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "/api/placeholder/60/60",
      quote:
        "Having all my health records in one place has made managing my chronic condition so much easier.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                <i className="fas fa-heartbeat text-white text-xl"></i>
              </div>
              <h1 className="text-xl font-bold text-blue-800">
                Syncertica Vitalis
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-blue-700 hover:text-blue-500 font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-blue-700 hover:text-blue-500 font-medium"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-blue-700 hover:text-blue-500 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-blue-700 hover:text-blue-500 font-medium"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-blue-700 hover:text-blue-500 font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signin"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get Started
              </Link>
              <button
                className="md:hidden text-blue-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#features"
                  className="text-blue-700 hover:text-blue-500 font-medium"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-blue-700 hover:text-blue-500 font-medium"
                >
                  About
                </a>
                <a
                  href="#testimonials"
                  className="text-blue-700 hover:text-blue-500 font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-blue-700 hover:text-blue-500 font-medium"
                >
                  Contact
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Your Health, <span className="text-green-600">Simplified</span>
            </h1>
            <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
              Experience the future of healthcare with AI-powered diagnostics,
              comprehensive health records, and seamless provider connections
              all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signin"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-rocket mr-2"></i>
                Start Your Health Journey
              </Link>
              <a
                href="#features"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
              >
                <i className="fas fa-play mr-2"></i>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Discover how Syncertica Vitalis transforms your healthcare
              experience with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Revolutionizing Healthcare Through Technology
              </h2>
              <p className="text-lg text-blue-700 mb-6">
                Syncertica Vitalis combines artificial intelligence, secure data
                management, and intuitive design to create a comprehensive
                healthcare platform that puts patients first.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      AI-Powered Insights
                    </h4>
                    <p className="text-gray-600">
                      Advanced algorithms provide personalized health
                      recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Secure & Private
                    </h4>
                    <p className="text-gray-600">
                      Enterprise-grade security ensures your data stays
                      protected
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      Seamless Integration
                    </h4>
                    <p className="text-gray-600">
                      Connect with healthcare providers and systems effortlessly
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-blue-100">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-100">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">HIPAA</div>
                    <div className="text-blue-100">Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Join thousands of satisfied patients and healthcare providers who
              trust Syncertica Vitalis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the power of
            AI-driven healthcare management.
          </p>
          <Link
            href="/signin"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
