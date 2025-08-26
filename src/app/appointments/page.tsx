'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState(9);
  const [selectedTime, setSelectedTime] = useState('9:00 AM');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Johnson');

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
            <Link href="/medical-checkup" className="text-blue-700 hover:text-blue-500 font-medium">Checkup</Link>
            <Link href="/appointments" className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500">Appointments</Link>
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Schedule Appointments</h1>
          <p className="text-lg text-gray-600">Book appointments with healthcare providers that fit your schedule.</p>
        </section>

        {/* Scheduling Appointments */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Select Date & Time</h3>
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <div className="text-center text-blue-700 font-medium mb-3">October 2023</div>
                  <div className="grid grid-cols-7 gap-2">
                    <div className="text-center text-sm text-gray-500 py-1">S</div>
                    <div className="text-center text-sm text-gray-500 py-1">M</div>
                    <div className="text-center text-sm text-gray-500 py-1">T</div>
                    <div className="text-center text-sm text-gray-500 py-1">W</div>
                    <div className="text-center text-sm text-gray-500 py-1">T</div>
                    <div className="text-center text-sm text-gray-500 py-1">F</div>
                    <div className="text-center text-sm text-gray-500 py-1">S</div>
                    {/* Calendar days */}
                    {Array.from({length: 31}, (_, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedDate(i + 1)}
                        className={`text-center py-1 cursor-pointer rounded-full transition-colors ${
                          selectedDate === i + 1 
                            ? 'bg-blue-500 text-white' 
                            : 'hover:bg-blue-100'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <h4 className="text-blue-700 font-medium mb-2">Available Times</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((time) => (
                    <div 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`text-center py-2 rounded-lg cursor-pointer transition-colors ${
                        selectedTime === time 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Select Doctor</h3>
                <div className="mb-4">
                  <label className="block text-blue-700 mb-2">Filter by Specialty</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>All Specialties</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                    <option>Pediatrics</option>
                    <option>Orthopedics</option>
                  </select>
                </div>
                <div className="space-y-4">
                  {/* Doctor Cards */}
                  <div 
                    onClick={() => setSelectedDoctor('Dr. Sarah Johnson')}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      selectedDoctor === 'Dr. Sarah Johnson' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-800">Dr. Sarah Johnson</h4>
                        <p className="text-blue-600">Cardiologist</p>
                        <div className="flex items-center mt-1">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          <span className="text-sm text-gray-600">4.9 (128 reviews)</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">15+ years experience</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-800 font-medium">$150</p>
                        <p className="text-sm text-gray-500">Consultation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    onClick={() => setSelectedDoctor('Dr. Michael Chen')}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      selectedDoctor === 'Dr. Michael Chen' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-800">Dr. Michael Chen</h4>
                        <p className="text-blue-600">Neurologist</p>
                        <div className="flex items-center mt-1">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          <span className="text-sm text-gray-600">4.8 (94 reviews)</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">12+ years experience</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-800 font-medium">$175</p>
                        <p className="text-sm text-gray-500">Consultation</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedDoctor('Dr. Emily Wong')}
                    className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      selectedDoctor === 'Dr. Emily Wong' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-800">Dr. Emily Wong</h4>
                        <p className="text-blue-600">Family Medicine</p>
                        <div className="flex items-center mt-1">
                          <i className="fas fa-star text-yellow-400 mr-1"></i>
                          <span className="text-sm text-gray-600">4.7 (156 reviews)</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">10+ years experience</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-800 font-medium">$120</p>
                        <p className="text-sm text-gray-500">Consultation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Appointment Summary</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Date & Time</p>
                    <p className="text-blue-800 font-medium">October {selectedDate}, 2023 at {selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Doctor</p>
                    <p className="text-blue-800 font-medium">{selectedDoctor}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Appointment Type</p>
                    <div className="flex space-x-2 mt-1">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">In-person</button>
                      <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">Virtual</button>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Estimated Cost</p>
                    <p className="text-blue-800 font-medium">$30 copay</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center">
                  <i className="fas fa-calendar-check mr-2"></i> Confirm Appointment
                </button>
                <Link href="/insurance" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center">
                  <i className="fas fa-shield-alt mr-2"></i> Check Insurance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Appointments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Your Upcoming Appointments</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 text-lg">Dr. Sarah Johnson</h3>
                    <p className="text-blue-600">Cardiology Follow-up</p>
                    <p className="text-sm text-gray-600">October 9, 2023 at 9:00 AM</p>
                    <p className="text-sm text-gray-500">In-person visit</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors">
                    <i className="fas fa-video mr-2"></i>Join Virtual
                  </button>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-colors">
                    Reschedule
                  </button>
                  <button className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-xl transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user-md text-green-500 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 text-lg">Dr. Emily Wong</h3>
                    <p className="text-blue-600">Annual Physical Exam</p>
                    <p className="text-sm text-gray-600">October 15, 2023 at 2:00 PM</p>
                    <p className="text-sm text-gray-500">In-person visit</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-colors">
                    Reschedule
                  </button>
                  <button className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-xl transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Recent Appointments</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Date</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Doctor</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Type</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Status</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">Aug 15, 2023</td>
                    <td className="py-4 px-4">Dr. Sarah Johnson</td>
                    <td className="py-4 px-4">Cardiology</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                    </td>
                    <td className="py-4 px-4">
                      <Link href="/ehr" className="text-blue-600 hover:text-blue-800">View Notes</Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">Jun 3, 2023</td>
                    <td className="py-4 px-4">Dr. Michael Chen</td>
                    <td className="py-4 px-4">Neurology</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                    </td>
                    <td className="py-4 px-4">
                      <Link href="/ehr" className="text-blue-600 hover:text-blue-800">View Notes</Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">Mar 12, 2023</td>
                    <td className="py-4 px-4">Dr. Emily Wong</td>
                    <td className="py-4 px-4">Physical Exam</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>
                    </td>
                    <td className="py-4 px-4">
                      <Link href="/ehr" className="text-blue-600 hover:text-blue-800">View Notes</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Check Symptoms</h3>
                <p className="text-gray-600">Before your appointment</p>
              </div>
            </Link>
            <Link href="/insurance" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Insurance</h3>
                <p className="text-gray-600">Check coverage and costs</p>
              </div>
            </Link>
            <Link href="/ehr" className="bg-white rounded-2xl shadow-lg p-6 card-hover block">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-medical text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Health Records</h3>
                <p className="text-gray-600">Review your medical history</p>
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