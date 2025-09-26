'use client';

import Link from 'next/link';

export default function DoctorAppointments() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/doctor" className="text-blue-600 hover:text-blue-800 flex items-center mb-4">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-blue-800">All Appointments</h1>
          <p className="text-gray-600 mt-2">Manage all patient appointments</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center py-12">
            <i className="fas fa-calendar-alt text-gray-400 text-6xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Appointments Management</h3>
            <p className="text-gray-500">This page will contain detailed appointment management features.</p>
          </div>
        </div>
      </div>
    </div>
  );
}