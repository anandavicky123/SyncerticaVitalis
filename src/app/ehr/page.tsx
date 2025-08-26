'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EHR() {
  const [showEHRDetails, setShowEHRDetails] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const healthRecords = [
    {
      id: 1,
      date: 'Aug 15, 2023',
      doctor: 'Dr. Sarah Johnson',
      diagnosis: 'Hypertension follow-up',
      specialty: 'Cardiology',
      details: {
        diagnosis: 'Hypertension, well controlled with current medication',
        prescriptions: [
          'Lisinopril 10mg - Take 1 tablet daily',
          'Amlodipine 5mg - Take 1 tablet daily'
        ],
        notes: "Patient's blood pressure is well controlled at 122/78 mmHg. Continue current medication regimen. Follow up in 6 months or sooner if symptoms change. Recommended low sodium diet and regular exercise.",
        vitals: {
          bloodPressure: '122/78 mmHg',
          heartRate: '72 bpm',
          temperature: '98.6°F',
          weight: '165 lbs'
        }
      }
    },
    {
      id: 2,
      date: 'Jun 3, 2023',
      doctor: 'Dr. Michael Chen',
      diagnosis: 'Migraine management',
      specialty: 'Neurology',
      details: {
        diagnosis: 'Chronic migraine with aura, responding well to treatment',
        prescriptions: [
          'Sumatriptan 50mg - As needed for migraine attacks',
          'Propranolol 40mg - Take twice daily for prevention'
        ],
        notes: 'Patient reports significant improvement in migraine frequency and intensity. Continue current preventive medication. Discussed trigger identification and lifestyle modifications.',
        vitals: {
          bloodPressure: '118/75 mmHg',
          heartRate: '68 bpm',
          temperature: '98.4°F',
          weight: '163 lbs'
        }
      }
    },
    {
      id: 3,
      date: 'Mar 12, 2023',
      doctor: 'Dr. Emily Wong',
      diagnosis: 'Annual physical exam',
      specialty: 'Family Medicine',
      details: {
        diagnosis: 'Overall good health, routine preventive care completed',
        prescriptions: [
          'Multivitamin - Take 1 tablet daily',
          'Vitamin D3 1000 IU - Take 1 tablet daily'
        ],
        notes: 'Annual physical examination completed. All routine screenings up to date. Patient maintains healthy lifestyle with regular exercise and balanced diet. Continue current health maintenance routine.',
        vitals: {
          bloodPressure: '120/80 mmHg',
          heartRate: '70 bpm',
          temperature: '98.6°F',
          weight: '162 lbs'
        }
      }
    }
  ];

  const viewDetails = (record) => {
    setSelectedRecord(record);
    setShowEHRDetails(true);
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
            <Link href="/medical-checkup" className="text-blue-700 hover:text-blue-500 font-medium">Checkup</Link>
            <Link href="/appointments" className="text-blue-700 hover:text-blue-500 font-medium">Appointments</Link>
            <Link href="/ehr" className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500">EHR</Link>
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
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Electronic Health Records</h1>
          <p className="text-lg text-gray-600">Access and manage your complete medical history in one secure location.</p>
        </section>

        {/* Health Summary Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Health Summary</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Records</p>
                  <p className="text-2xl font-bold text-blue-800">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-file-medical text-blue-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Active Medications</p>
                  <p className="text-2xl font-bold text-green-600">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-pills text-green-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Allergies</p>
                  <p className="text-2xl font-bold text-red-600">2</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Last Visit</p>
                  <p className="text-2xl font-bold text-purple-600">Aug 15</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar text-purple-500 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrated EHR */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between">
              <div className="relative mb-4 md:mb-0 md:w-1/3">
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                <input type="text" placeholder="Search records..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <option>Sort by Date</option>
                  <option>Sort by Doctor</option>
                  <option>Sort by Condition</option>
                </select>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors">
                  <i className="fas fa-download mr-2"></i>Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Date</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Doctor</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Diagnosis</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Specialty</th>
                    <th className="py-3 px-4 text-left text-blue-700 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {healthRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="py-4 px-4">{record.date}</td>
                      <td className="py-4 px-4">{record.doctor}</td>
                      <td className="py-4 px-4">{record.diagnosis}</td>
                      <td className="py-4 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          {record.specialty}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button 
                          onClick={() => viewDetails(record)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition-colors mr-2"
                        >
                          View Details
                        </button>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-sm transition-colors">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Expanded EHR Details */}
            {showEHRDetails && selectedRecord && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-blue-800">Visit Details - {selectedRecord.date}</h3>
                  <button 
                    onClick={() => setShowEHRDetails(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Diagnosis</h4>
                    <p className="text-blue-800">{selectedRecord.details.diagnosis}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Doctor</h4>
                    <p className="text-blue-800">{selectedRecord.doctor}, {selectedRecord.specialty}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Vital Signs</h4>
                    <div className="bg-white rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Blood Pressure</p>
                          <p className="font-medium">{selectedRecord.details.vitals.bloodPressure}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Heart Rate</p>
                          <p className="font-medium">{selectedRecord.details.vitals.heartRate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Temperature</p>
                          <p className="font-medium">{selectedRecord.details.vitals.temperature}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Weight</p>
                          <p className="font-medium">{selectedRecord.details.vitals.weight}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Prescriptions</h4>
                    <div className="bg-white rounded-lg p-4">
                      <ul className="list-disc list-inside text-blue-800 space-y-1">
                        {selectedRecord.details.prescriptions.map((prescription, index) => (
                          <li key={index}>{prescription}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Notes & Follow-up</h4>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-blue-800">{selectedRecord.details.notes}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Health Trends */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Health Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Blood Pressure Trend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Aug 2023</span>
                  <span className="text-blue-800 font-medium">122/78 mmHg</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Normal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jun 2023</span>
                  <span className="text-blue-800 font-medium">118/75 mmHg</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Normal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mar 2023</span>
                  <span className="text-blue-800 font-medium">120/80 mmHg</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Normal</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Weight Trend</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Aug 2023</span>
                  <span className="text-blue-800 font-medium">165 lbs</span>
                  <span className="text-red-500 text-sm">+2 lbs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jun 2023</span>
                  <span className="text-blue-800 font-medium">163 lbs</span>
                  <span className="text-green-500 text-sm">-1 lb</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mar 2023</span>
                  <span className="text-blue-800 font-medium">162 lbs</span>
                  <span className="text-gray-500 text-sm">Baseline</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Information */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Medical Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i className="fas fa-pills text-blue-500 mr-2"></i>
                Current Medications
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-medium text-blue-800">Lisinopril 10mg</p>
                  <p className="text-sm text-gray-600">Daily for blood pressure</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-medium text-blue-800">Amlodipine 5mg</p>
                  <p className="text-sm text-gray-600">Daily for blood pressure</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium text-blue-800">Sumatriptan 50mg</p>
                  <p className="text-sm text-gray-600">As needed for migraines</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                Allergies
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-3">
                  <p className="font-medium text-blue-800">Penicillin</p>
                  <p className="text-sm text-gray-600">Severe reaction - rash, swelling</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-medium text-blue-800">Shellfish</p>
                  <p className="text-sm text-gray-600">Mild reaction - hives</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i className="fas fa-dna text-purple-500 mr-2"></i>
                Chronic Conditions
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-medium text-blue-800">Hypertension</p>
                  <p className="text-sm text-gray-600">Well controlled with medication</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-medium text-blue-800">Chronic Migraine</p>
                  <p className="text-sm text-gray-600">Managed with preventive treatment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <button className="bg-white rounded-2xl shadow-lg p-6 card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-download text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Export Records</h3>
              <p className="text-gray-600 text-sm">Download your complete medical history</p>
            </button>
            
            <Link href="/appointments" className="bg-white rounded-2xl shadow-lg p-6 card-hover block text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar-plus text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Book Follow-up</h3>
              <p className="text-gray-600 text-sm">Schedule your next appointment</p>
            </Link>
            
            <button className="bg-white rounded-2xl shadow-lg p-6 card-hover text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-share-alt text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Share Records</h3>
              <p className="text-gray-600 text-sm">Share with healthcare providers</p>
            </button>
            
            <Link href="/medical-checkup" className="bg-white rounded-2xl shadow-lg p-6 card-hover block text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-plus text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Add Entry</h3>
              <p className="text-gray-600 text-sm">Complete a new health checkup</p>
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