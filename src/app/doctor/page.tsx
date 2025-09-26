'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function DoctorDashboard() {
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);
  const router = useRouter();

  const upcomingAppointments = [
    {
      id: 1,
      patientName: 'John Smith',
      patientUUID: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      condition: 'Hypertension Follow-up',
      scheduledTime: '9:00 AM',
      date: 'Today',
      type: 'Virtual',
      status: 'confirmed',
      notes: 'Regular blood pressure monitoring'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      patientUUID: 'b2c3d4e5-f6g7-8901-bcde-f23456789012',
      condition: 'Annual Physical',
      scheduledTime: '10:30 AM',
      date: 'Today',
      type: 'In-Person',
      status: 'confirmed',
      notes: 'First time patient'
    },
    {
      id: 3,
      patientName: 'Mike Chen',
      patientUUID: 'c3d4e5f6-g7h8-9012-cdef-345678901234',
      condition: 'Diabetes Management',
      scheduledTime: '2:00 PM',
      date: 'Today',
      type: 'Virtual',
      status: 'pending',
      notes: 'Review recent lab results'
    }
  ];

  const recentPatients = [
    {
      name: 'Emily Davis',
      uuid: 'd4e5f6g7-h8i9-0123-defg-456789012345',
      lastVisit: '2 days ago',
      condition: 'Migraine Treatment',
      status: 'Stable'
    },
    {
      name: 'Robert Wilson',
      uuid: 'e5f6g7h8-i9j0-1234-efgh-567890123456',
      lastVisit: '1 week ago',
      condition: 'Cardiac Check-up',
      status: 'Follow-up needed'
    }
  ];

  const handleSignOut = () => {
    localStorage.removeItem('userUUID');
    localStorage.removeItem('userRole');
    router.push('/');
  };

  const joinVirtualAppointment = (appointmentId: number) => {
    // Simulate joining virtual appointment
    alert(`Joining virtual appointment for appointment ID: ${appointmentId}`);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fas fa-user-md text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold text-blue-800">Syncertica Vitalis</h1>
            <span className="text-sm text-gray-600 ml-2">Doctor Portal</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/doctor" className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500">Dashboard</Link>
            <Link href="/doctor/appointments" className="text-blue-700 hover:text-blue-500 font-medium">All Appointments</Link>
            <Link href="/doctor/patients" className="text-blue-700 hover:text-blue-500 font-medium">Patients</Link>
            <Link href="/doctor/schedule" className="text-blue-700 hover:text-blue-500 font-medium">Schedule</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/doctor/profile" className="text-blue-700 hover:text-blue-500 font-medium">
              <i className="fas fa-user mr-2"></i>Profile
            </Link>
            <button 
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Sign Out
            </button>
            <button className="md:hidden text-blue-700">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-16 rounded-2xl bg-gradient-to-r from-green-100 to-blue-100 p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Good Morning, Doctor!</h2>
            <p className="text-lg text-blue-700 mb-8">Welcome to your medical practice dashboard. Manage patient appointments, review medical records, and provide quality healthcare through our integrated platform.</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => joinVirtualAppointment(1)} 
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
              >
                <i className="fas fa-video mr-2"></i> Join Next Appointment
              </button>
              <Link href="/doctor/patients" className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
                <i className="fas fa-users mr-2"></i> View Patients
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Today&apos;s Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Today&apos;s Appointments</p>
                  <p className="text-2xl font-bold text-blue-800">{upcomingAppointments.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-check text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Virtual Consultations</p>
                  <p className="text-2xl font-bold text-green-600">2</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-video text-green-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending Reviews</p>
                  <p className="text-2xl font-bold text-orange-600">1</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-clipboard-list text-orange-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Patients</p>
                  <p className="text-2xl font-bold text-purple-600">247</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-purple-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Appointments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Today&apos;s Appointments</h2>
          <div className="bg-white rounded-2xl shadow-lg">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-6 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-blue-500 text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800 text-lg">{appointment.patientName}</h3>
                      <p className="text-blue-600">{appointment.condition}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span><i className="fas fa-clock mr-1"></i>{appointment.scheduledTime}</span>
                        <span><i className="fas fa-calendar mr-1"></i>{appointment.date}</span>
                        <span className={`flex items-center ${appointment.type === 'Virtual' ? 'text-green-600' : 'text-blue-600'}`}>
                          <i className={`fas ${appointment.type === 'Virtual' ? 'fa-video' : 'fa-clinic-medical'} mr-1`}></i>
                          {appointment.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setSelectedAppointment(appointment.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors"
                    >
                      <i className="fas fa-eye mr-2"></i>View Details
                    </button>
                    {appointment.type === 'Virtual' && (
                      <button 
                        onClick={() => joinVirtualAppointment(appointment.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors"
                      >
                        <i className="fas fa-video mr-2"></i>Join Call
                      </button>
                    )}
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-colors">
                      <i className="fas fa-edit mr-2"></i>Edit
                    </button>
                  </div>
                </div>
                {selectedAppointment === appointment.id && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-blue-800 mb-2">Patient Details</h4>
                    <p className="text-sm text-gray-700 mb-2"><strong>UUID:</strong> {appointment.patientUUID}</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Notes:</strong> {appointment.notes}</p>
                    <div className="flex space-x-2 mt-3">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        View EHR
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm transition-colors">
                        Add Notes
                      </button>
                      <button 
                        onClick={() => setSelectedAppointment(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recent Patients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Recent Patients</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-user text-blue-500 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">{patient.name}</h4>
                      <p className="text-sm text-gray-600">{patient.condition}</p>
                      <p className="text-xs text-gray-500">Last visit: {patient.lastVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      patient.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm transition-colors">
                      View Records
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/doctor/patients" className="text-blue-600 hover:text-blue-800 font-medium">
                View all patients →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/doctor/schedule" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-plus text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Manage Schedule</h3>
                <p className="text-gray-600">Set availability and manage appointments</p>
              </div>
            </Link>
            <Link href="/doctor/patients" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-friends text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Patient Management</h3>
                <p className="text-gray-600">View and manage patient records</p>
              </div>
            </Link>
            <button className="bg-white rounded-2xl shadow-lg p-6 card-hover block w-full text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Analytics</h3>
                <p className="text-gray-600">View practice performance metrics</p>
              </div>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}