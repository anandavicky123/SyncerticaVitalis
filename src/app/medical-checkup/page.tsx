'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MedicalCheckup() {
  const [checkupProgress, setCheckupProgress] = useState(20);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setCheckupProgress(checkupProgress + 20);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setCheckupProgress(checkupProgress - 20);
    }
  };

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
            <Link href="/" className="text-blue-700 hover:text-blue-500 font-medium">Dashboard</Link>
            <Link href="/symptom-checker" className="text-blue-700 hover:text-blue-500 font-medium">Symptom Checker</Link>
            <Link href="/medical-checkup" className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500">Checkup</Link>
            <Link href="/appointments" className="text-blue-700 hover:text-blue-500 font-medium">Appointments</Link>
            <Link href="/ehr" className="text-blue-700 hover:text-blue-500 font-medium">EHR</Link>
            <Link href="/insurance" className="text-blue-700 hover:text-blue-500 font-medium">Insurance</Link>
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
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Fast Medical Checkup</h1>
          <p className="text-lg text-gray-600">Complete your comprehensive health assessment in just a few minutes.</p>
        </section>

        {/* Fast Medical Checkup */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-blue-800">Step {currentStep} of 5</h2>
                <span className="text-blue-600 font-medium">{checkupProgress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-green-500 h-2.5 rounded-full transition-all duration-500" style={{width: `${checkupProgress}%`}}></div>
              </div>
            </div>
            
            <div className="px-6 pb-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Basic Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">First Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">Last Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">Date of Birth</label>
                      <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">Biological Sex</label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Medical History */}
              {currentStep === 2 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Medical History</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">Do you have any chronic conditions?</label>
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
                      <label className="block text-blue-700 mb-2">Current Medications</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                        rows={3}
                        placeholder="List any medications you're currently taking..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Lifestyle */}
              {currentStep === 3 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Lifestyle Assessment</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">How often do you exercise?</label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Daily</option>
                        <option>3-4 times per week</option>
                        <option>1-2 times per week</option>
                        <option>Rarely</option>
                        <option>Never</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">Do you smoke?</label>
                      <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option>Never</option>
                        <option>Former smoker</option>
                        <option>Occasionally</option>
                        <option>Daily</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-blue-700 mb-2">How many hours of sleep do you get per night?</label>
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

              {/* Step 4: Current Symptoms */}
              {currentStep === 4 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Symptoms</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-blue-700 mb-2">Are you experiencing any symptoms today?</label>
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
                      <label className="block text-blue-700 mb-2">Additional symptoms or concerns</label>
                      <textarea 
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                        rows={3}
                        placeholder="Describe any other symptoms or health concerns..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Review Your Information</h3>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Personal Information</h4>
                        <p className="text-gray-600">John Doe, Male, Born: 1990-01-01</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Medical History</h4>
                        <p className="text-gray-600">No chronic conditions reported</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Lifestyle</h4>
                        <p className="text-gray-600">Exercises 3-4 times per week, Non-smoker</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-700 mb-2">Current Symptoms</h4>
                        <p className="text-gray-600">Mild headache, feeling tired</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                      <i className="fas fa-info-circle mr-2"></i> Next Steps
                    </h4>
                    <p className="text-blue-600 text-sm">After submitting your checkup, our AI will analyze your information and provide personalized health recommendations. You may also receive suggestions for follow-up appointments if needed.</p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={prevStep}
                  className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-xl transition-colors ${currentStep === 1 ? 'invisible' : ''}`}
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back
                </button>
                {currentStep < 5 ? (
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
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Why Complete a Medical Checkup?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Early Detection</h3>
              <p className="text-gray-600 text-center">Identify potential health issues before they become serious problems.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Health Tracking</h3>
              <p className="text-gray-600 text-center">Monitor your health trends and improvements over time.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-md text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">Personalized Care</h3>
              <p className="text-gray-600 text-center">Receive tailored health recommendations based on your profile.</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/symptom-checker" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search-plus text-red-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Symptom Checker</h3>
                <p className="text-gray-600">Get AI-powered symptom analysis</p>
              </div>
            </Link>
            <Link href="/appointments" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Book Appointment</h3>
                <p className="text-gray-600">Schedule with healthcare providers</p>
              </div>
            </Link>
            <Link href="/ehr" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-medical text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Health Records</h3>
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
              <p className="text-blue-200">Integrating AI and healthcare for better patient outcomes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="/symptom-checker" className="hover:text-white">Symptom Checker</Link></li>
                <li><Link href="/medical-checkup" className="hover:text-white">Health Checkup</Link></li>
                <li><Link href="/appointments" className="hover:text-white">Doctor Appointments</Link></li>
                <li><Link href="/ehr" className="hover:text-white">Health Records</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-blue-200 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-sm text-blue-300 text-center">
            <p>© 2023 Syncertica Vitalis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}