"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Security() {
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
              Security & Privacy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your health data security is our top priority. Learn about our
              comprehensive security measures and privacy protections.
            </p>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lock text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                End-to-End Encryption
              </h3>
              <p className="text-gray-600 mb-4">
                All your health data is encrypted using AES-256 encryption both
                in transit and at rest. Your information is protected with the
                same level of security used by banks and government agencies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>256-bit
                  AES encryption
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>TLS 1.3
                  for data in transit
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Zero-knowledge architecture
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                HIPAA Compliance
              </h3>
              <p className="text-gray-600 mb-4">
                We are fully compliant with HIPAA regulations and undergo
                regular audits to ensure the highest standards of healthcare
                data protection.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>HIPAA
                  certified infrastructure
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>Regular
                  compliance audits
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>Business
                  Associate Agreements
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-user-shield text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Multi-Factor Authentication
              </h3>
              <p className="text-gray-600 mb-4">
                Protect your account with multiple layers of security including
                SMS, email, and authenticator app verification.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>SMS
                  verification
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  Authenticator app support
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>Biometric
                  authentication
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-server text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Secure Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Our infrastructure is hosted on enterprise-grade cloud platforms
                with 99.9% uptime guarantee and automatic backups.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>AWS/Azure
                  enterprise hosting
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>Automated
                  daily backups
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>DDoS
                  protection
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Security Certifications
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-blue-500 text-2xl"></i>
                </div>
                <h3 className="font-bold text-blue-800">SOC 2 Type II</h3>
                <p className="text-blue-700 text-sm">
                  Audited security controls
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-green-500 text-2xl"></i>
                </div>
                <h3 className="font-bold text-blue-800">ISO 27001</h3>
                <p className="text-blue-700 text-sm">
                  Information security management
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-purple-500 text-2xl"></i>
                </div>
                <h3 className="font-bold text-blue-800">HIPAA</h3>
                <p className="text-blue-700 text-sm">
                  Healthcare data protection
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-orange-500 text-2xl"></i>
                </div>
                <h3 className="font-bold text-blue-800">GDPR</h3>
                <p className="text-blue-700 text-sm">
                  European data protection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Our Privacy Principles
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Data Minimization
                </h3>
                <p className="text-gray-600 mb-6">
                  We only collect the minimum amount of data necessary to
                  provide our services effectively.
                </p>

                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Transparency
                </h3>
                <p className="text-gray-600 mb-6">
                  We clearly explain what data we collect, how we use it, and
                  who we share it with in plain language.
                </p>

                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  User Control
                </h3>
                <p className="text-gray-600">
                  You have complete control over your data with the ability to
                  view, edit, export, or delete your information at any time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Purpose Limitation
                </h3>
                <p className="text-gray-600 mb-6">
                  Your health data is used only for the specific purposes
                  you&apos;ve consented to and never for unauthorized purposes.
                </p>

                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Data Retention
                </h3>
                <p className="text-gray-600 mb-6">
                  We retain your data only as long as necessary to provide
                  services or as required by law.
                </p>

                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  No Sale of Data
                </h3>
                <p className="text-gray-600">
                  We never sell your personal health information to third
                  parties. Your data is yours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
