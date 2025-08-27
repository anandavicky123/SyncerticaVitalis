"use client";

import Link from "next/link";

export default function SymptomChecker() {
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
              className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500"
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Sign In
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
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800 mr-2"
            >
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            AI Symptom Checker
          </h1>
          <p className="text-lg text-gray-600">
            Get AI-powered health assessments based on your symptoms. Please
            note this is for informational purposes only and not a substitute
            for professional medical advice.
          </p>
        </section>

        {/* AI Symptom Checker */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-blue-800">
              Describe Your Physical Symptoms
            </h2>
            <p className="text-gray-600 mt-2">
              Our AI focuses on physical health symptoms to provide accurate
              assessments.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="chat-history h-80 overflow-y-auto p-4 bg-gray-50">
              <div className="chat-message bg-blue-100 rounded-xl p-4 mb-4 ml-auto">
                <p className="text-blue-800">
                  Hello! I&apos;m your AI health assistant. What symptoms are
                  you experiencing today?
                </p>
              </div>
              <div className="chat-message bg-gray-200 rounded-xl p-4 mb-4 mr-auto max-w-md">
                <p>
                  I&apos;ve had a headache and fever since yesterday, and
                  I&apos;m feeling quite tired.
                </p>
              </div>
              <div className="chat-message bg-blue-100 rounded-xl p-4 mb-4 ml-auto">
                <p className="text-blue-800">
                  I understand. Have you experienced any nausea, vomiting, or
                  sensitivity to light?
                </p>
              </div>
              <div className="chat-message bg-gray-200 rounded-xl p-4 mb-4 mr-auto max-w-md">
                <p>
                  No nausea or vomiting, but I do feel a bit sensitive to bright
                  lights.
                </p>
              </div>
              <div className="chat-message bg-blue-100 rounded-xl p-4 mb-4 ml-auto">
                <p className="text-blue-800">
                  Thank you for the information. Based on your symptoms,
                  I&apos;m generating a health assessment for you.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex">
              <input
                type="text"
                placeholder="Describe your symptoms..."
                className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-r-xl transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>

          {/* Symptom Results */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Health Assessment Results
            </h3>
            <div className="mb-6">
              <h4 className="font-medium text-blue-700 mb-2">
                Possible Conditions
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800">Common Cold</span>
                    <span className="text-blue-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800">Influenza (Flu)</span>
                    <span className="text-blue-600">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-800">Migraine</span>
                    <span className="text-blue-600">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "42%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">
                  Recommended Medications
                </h4>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Acetaminophen - 500mg every 6 hours</li>
                  <li>Ibuprofen - 400mg every 8 hours</li>
                  <li>Decongestant if nasal congestion develops</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">
                  Lifestyle Guidance
                </h4>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Rest and stay hydrated</li>
                  <li>Use a cool compress for headache relief</li>
                  <li>Monitor temperature every 4 hours</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-red-700 mb-2 flex items-center">
                <i className="fas fa-exclamation-circle mr-2"></i> Important
                Disclaimer
              </h4>
              <p className="text-red-600 text-sm">
                This assessment is provided for informational purposes only and
                is not a substitute for professional medical advice, diagnosis,
                or treatment. If you have serious symptoms, please seek
                immediate medical attention.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="/appointments"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center"
              >
                <i className="fas fa-calendar-alt mr-2"></i> Book Appointment
              </Link>
              <Link
                href="/medical-checkup"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center"
              >
                <i className="fas fa-clipboard-check mr-2"></i> Complete Checkup
              </Link>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-xl transition-colors flex items-center">
                <i className="fas fa-download mr-2"></i> Save Results
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            What&apos;s Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/medical-checkup"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-check text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Complete Checkup
                </h3>
                <p className="text-gray-600">
                  Get a comprehensive health assessment
                </p>
              </div>
            </Link>
            <Link
              href="/appointments"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  See a Doctor
                </h3>
                <p className="text-gray-600">
                  Schedule an appointment with a specialist
                </p>
              </div>
            </Link>
            <Link
              href="/ehr"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-medical text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  View Records
                </h3>
                <p className="text-gray-600">Access your medical history</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Syncertica Vitalis</h3>
              <p className="text-blue-200">
                Integrating AI and healthcare for better patient outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="/symptom-checker" className="hover:text-white">
                    Symptom Checker
                  </Link>
                </li>
                <li>
                  <Link href="/medical-checkup" className="hover:text-white">
                    Health Checkup
                  </Link>
                </li>
                <li>
                  <Link href="/appointments" className="hover:text-white">
                    Doctor Appointments
                  </Link>
                </li>
                <li>
                  <Link href="/ehr" className="hover:text-white">
                    Health Records
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
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
