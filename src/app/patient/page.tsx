'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import PatientHeader from '@/components/PatientHeader';

export default function Dashboard() {
  const [currentTip, setCurrentTip] = useState(0);

  const healthTips = [
    {
      icon: 'fas fa-tint',
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily. Proper hydration improves energy, brain function, and overall health.'
    },
    {
      icon: 'fas fa-bed',
      title: 'Sleep Hygiene',
      description: 'Aim for 7-9 hours of quality sleep per night. Maintain a consistent sleep schedule and create a restful environment.'
    },
    {
      icon: 'fas fa-tooth',
      title: 'Oral Care',
      description: 'Brush twice daily and floss regularly. Good oral hygiene prevents dental issues and supports overall health.'
    }
  ];

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % healthTips.length);
  };

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + healthTips.length) % healthTips.length);
  };

  const shareTip = async () => {
    try {
      await navigator.clipboard.writeText(healthTips[currentTip].description);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <PatientHeader currentPage="dashboard" />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-16 rounded-2xl bg-gradient-to-r from-blue-100 to-green-100 p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Welcome Back!</h2>
            <p className="text-lg text-blue-700 mb-8">Your health dashboard is ready. Syncertica Vitalis brings together AI-powered healthcare tools, electronic health records, and provider connections in one seamless experience.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/patient/symptom-checker" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                <i className="fas fa-notes-medical mr-2"></i> Start Health Check
              </Link>
              <Link href="/patient/appointments" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                <i className="fas fa-calendar-alt mr-2"></i> Book Appointment
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Health Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Last Checkup</p>
                  <p className="text-2xl font-bold text-blue-800">Aug 15</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-stethoscope text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Health Score</p>
                  <p className="text-2xl font-bold text-green-600">85/100</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-heart text-green-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Medications</p>
                  <p className="text-2xl font-bold text-blue-800">2</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-pills text-orange-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Next Appointment</p>
                  <p className="text-2xl font-bold text-blue-800">Oct 9</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-check text-purple-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Appointment Reminder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Upcoming Appointments</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 text-lg">Dr. Sarah Johnson</h3>
                  <p className="text-blue-600">Cardiology Follow-up</p>
                  <p className="text-sm text-gray-600">October 9, 2023 at 9:00 AM</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors">
                  <i className="fas fa-video mr-2"></i>Join Virtual
                </button>
                <Link href="/patient/appointments" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-colors">
                  Reschedule
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/patient/appointments" className="text-blue-600 hover:text-blue-800 font-medium">
                View all appointments →
              </Link>
            </div>
          </div>
        </section>

        {/* Daily Health Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Daily Health Tips</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="relative">
              <div className="animate-fade-in">
                <div className="flex items-start">
                  <div className="text-4xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mr-4">
                    <i className={healthTips[currentTip].icon}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{healthTips[currentTip].title}</h3>
                    <p className="text-blue-700">{healthTips[currentTip].description}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex space-x-2">
                  {healthTips.map((_, index) => (
                    <button 
                      key={index}
                      className={`rounded-full w-3 h-3 ${index === currentTip ? 'bg-blue-500' : 'bg-blue-100'}`}
                      onClick={() => setCurrentTip(index)}
                    ></button>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={prevTip}
                    className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-10 h-10 rounded-full transition-colors"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button 
                    onClick={nextTip}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full transition-colors"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={shareTip}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl mt-6 transition-colors flex items-center"
            >
              <i className="fas fa-share-alt mr-2"></i> Share this tip
            </button>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/patient/symptom-checker" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search-plus text-red-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Check Symptoms</h3>
                <p className="text-gray-600">Get AI-powered health assessments</p>
              </div>
            </Link>
            <Link href="/patient/medical-checkup" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-check text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Health Checkup</h3>
                <p className="text-gray-600">Complete your medical assessment</p>
              </div>
            </Link>
            <Link href="/patient/ehr" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-medical text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Health Records</h3>
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