'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface PatientHeaderProps {
  currentPage?: string;
}

export default function PatientHeader({ currentPage = '' }: PatientHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSignOut = () => {
    // Clear any stored authentication data
    localStorage.removeItem('userUUID');
    localStorage.removeItem('userRole');
    // Redirect to landing page
    router.push('/');
  };

  const isActivePage = (page: string) => {
    if (page === 'dashboard') {
      return pathname === '/patient';
    }
    return pathname === `/patient/${page}` || currentPage === page;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
            <i className="fas fa-heartbeat text-white text-xl"></i>
          </div>
          <h1 className="text-xl font-bold text-blue-800">Syncertica Vitalis</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/patient" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('dashboard') ? 'border-b-2 border-blue-500' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/patient/symptom-checker" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('symptom-checker') ? 'border-b-2 border-blue-500' : ''}`}
          >
            Symptom Checker
          </Link>
          <Link 
            href="/patient/medical-checkup" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('medical-checkup') ? 'border-b-2 border-blue-500' : ''}`}
          >
            Checkup
          </Link>
          <Link 
            href="/patient/appointments" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('appointments') ? 'border-b-2 border-blue-500' : ''}`}
          >
            Appointments
          </Link>
          <Link 
            href="/patient/ehr" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('ehr') ? 'border-b-2 border-blue-500' : ''}`}
          >
            EHR
          </Link>
          <Link 
            href="/patient/insurance" 
            className={`text-blue-700 hover:text-blue-500 font-medium ${isActivePage('insurance') ? 'border-b-2 border-blue-500' : ''}`}
          >
            Insurance
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/patient/profile" className="text-blue-700 hover:text-blue-500 font-medium">
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
  );
}