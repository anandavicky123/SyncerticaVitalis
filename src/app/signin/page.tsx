'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    uuid: '',
    role: 'patient',
    firstName: '',
    lastName: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Generate UUID for new user or use existing UUID
    let userUUID = formData.uuid;
    if (isSignUp && !userUUID) {
      // Generate UUID here or get from backend
      userUUID = crypto.randomUUID();
    }
    
    // Store authentication data
    localStorage.setItem('userUUID', userUUID);
    localStorage.setItem('userRole', formData.role);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect based on role
      if (formData.role === 'doctor') {
        window.location.href = '/doctor';
      } else {
        window.location.href = '/patient';
      }
    }, 2000);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      uuid: '',
      role: 'patient',
      firstName: '',
      lastName: '',
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-blue-800">Syncertica Vitalis</h1>
          </Link>
          <h2 className="text-3xl font-bold text-blue-900">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-blue-700">
            {isSignUp 
              ? 'Join thousands of users managing their health with AI' 
              : 'Sign in to access your health dashboard'
            }
          </p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                I am signing in as
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required={isSignUp}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required={isSignUp}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="uuid" className="block text-sm font-medium text-gray-700 mb-2">
                {isSignUp ? 'Your UUID will be generated automatically' : 'UUID'}
              </label>
              {isSignUp ? (
                <div className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-500 flex items-center">
                  <i className="fas fa-key mr-3"></i>
                  <span>UUID will be generated upon account creation</span>
                </div>
              ) : (
                <div className="relative">
                  <input
                    id="uuid"
                    name="uuid"
                    type="text"
                    required={!isSignUp}
                    value={formData.uuid}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your UUID"
                  />
                  <i className="fas fa-key absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              )}
            </div>

            {!isSignUp && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot UUID?
                </a>
              </div>
            )}

            {isSignUp && (
              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  required={isSignUp}
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <i className={`fas ${isSignUp ? 'fa-user-plus' : 'fa-sign-in-alt'} mr-2`}></i>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </div>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <i className="fab fa-google text-red-500 mr-2"></i>
              Google
            </button>
            <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <i className="fab fa-apple text-gray-900 mr-2"></i>
              Apple
            </button>
          </div>

          {/* Toggle Sign Up/Sign In */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={toggleMode}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <i className="fas fa-shield-alt text-green-500"></i>
            <span>Your data is protected with enterprise-grade security</span>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-500 flex items-center justify-center">
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}