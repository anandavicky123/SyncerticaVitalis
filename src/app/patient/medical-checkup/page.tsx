"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import PatientHeader from "@/components/PatientHeader";

export default function MedicalCheckup() {
  const [checkupProgress, setCheckupProgress] = useState(33);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      setCheckupProgress(checkupProgress + 33);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCheckupProgress(checkupProgress - 33);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <PatientHeader currentPage="medical-checkup" />

      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Link
              href="/patient"
              className="text-blue-600 hover:text-blue-800 mr-2"
            >
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Fast Medical Checkup
          </h1>
          <p className="text-lg text-gray-600">
            Complete your comprehensive health assessment in just a few minutes.
            Your basic information will be automatically retrieved from your
            profile.
          </p>
        </section>

        {/* Profile Info Notice */}
        <section className="mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center">
              <i className="fas fa-info-circle text-blue-500 mr-3"></i>
              <div>
                <h4 className="font-medium text-blue-700">
                  Using Your Profile Information
                </h4>
                <p className="text-blue-600 text-sm">
                  We&apos;ll use the personal information from your profile for
                  this checkup. You can update your details in your{" "}
                  <Link
                    href="/profile"
                    className="underline hover:text-blue-800"
                  >
                    profile settings
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fast Medical Checkup */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-800">
                  Step {currentStep} of 3
                </h2>
                <span className="text-blue-600 font-medium">
                  {Math.min(checkupProgress, 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(checkupProgress, 100)}%` }}
                ></div>
              </div>
            </div>

            <div className="px-6 pb-6">
              {/* Step 1: Medical History */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Medical History
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">
                        Do you have any chronic conditions?
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Diabetes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Hypertension</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Heart Disease</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Asthma</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>None of the above</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">
                        Current Medications
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows={3}
                        placeholder="List any medications you're currently taking..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Lifestyle */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Lifestyle Assessment
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">
                        How often do you exercise?
                      </label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Daily</option>
                        <option>3-4 times per week</option>
                        <option>1-2 times per week</option>
                        <option>Rarely</option>
                        <option>Never</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">
                        Do you smoke?
                      </label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Never</option>
                        <option>Former smoker</option>
                        <option>Occasionally</option>
                        <option>Daily</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">
                        How many hours of sleep do you get per night?
                      </label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Less than 5 hours</option>
                        <option>5-6 hours</option>
                        <option>7-8 hours</option>
                        <option>More than 8 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Current Symptoms */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Current Symptoms
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">
                        Are you experiencing any symptoms today?
                      </label>
                      <div className="grid md:grid-cols-2 gap-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Headache</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Fever</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Cough</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Fatigue</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Nausea</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>Joint Pain</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">
                        Additional symptoms or concerns
                      </label>
                      <textarea
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows={3}
                        placeholder="Describe any other symptoms or health concerns..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                      <i className="fas fa-info-circle mr-2"></i> Next Steps
                    </h4>
                    <p className="text-blue-600 text-sm">
                      After submitting your checkup, our AI will analyze your
                      information and provide personalized health
                      recommendations. You may also receive suggestions for
                      follow-up appointments if needed.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-xl transition-colors ${
                    currentStep === 1 ? "invisible" : ""
                  }`}
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back
                </button>
                {currentStep < 3 ? (
                  <button
                    onClick={nextStep}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition-colors ml-auto"
                  >
                    Next <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                ) : (
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl transition-colors ml-auto">
                    Submit Checkup <i className="fas fa-check ml-2"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Checkup Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Why Complete a Medical Checkup?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">
                Early Detection
              </h3>
              <p className="text-gray-600 text-center">
                Identify potential health issues before they become serious
                problems.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">
                Health Tracking
              </h3>
              <p className="text-gray-600 text-center">
                Monitor your health trends and improvements over time.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-md text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">
                Personalized Care
              </h3>
              <p className="text-gray-600 text-center">
                Receive tailored health recommendations based on your profile.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/symptom-checker"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search-plus text-red-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Symptom Checker
                </h3>
                <p className="text-gray-600">Get AI-powered symptom analysis</p>
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
                  Book Appointment
                </h3>
                <p className="text-gray-600">
                  Schedule with healthcare providers
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
                  Health Records
                </h3>
                <p className="text-gray-600">Access your medical history</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
