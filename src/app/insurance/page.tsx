"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

interface InsurancePlan {
  id: number;
  name: string;
  type: string;
  network: string;
  monthlyPremium: number;
  deductible: number;
  copay: number;
  coverage: number;
  recommended: boolean;
  features: string[];
}

interface InsuranceFilters {
  coverageType: string;
  monthlyPremium: string;
  deductible: string;
}

export default function Insurance() {
  const [filters, setFilters] = useState<InsuranceFilters>({
    coverageType: "All Types",
    monthlyPremium: "Any Price",
    deductible: "Any Amount",
  });

  const insurancePlans: InsurancePlan[] = [
    {
      id: 1,
      name: "BlueCross BlueShield Gold",
      type: "PPO Plan",
      network: "National Network",
      monthlyPremium: 389,
      deductible: 1500,
      copay: 25,
      coverage: 90,
      recommended: true,
      features: [
        "Nationwide coverage",
        "No referrals needed",
        "Prescription drug coverage",
        "Mental health services",
        "Preventive care covered 100%",
      ],
    },
    {
      id: 2,
      name: "Aetna Silver Advantage",
      type: "HMO Plan",
      network: "Regional Network",
      monthlyPremium: 279,
      deductible: 3000,
      copay: 35,
      coverage: 80,
      recommended: false,
      features: [
        "Lower monthly premiums",
        "Primary care physician required",
        "Prescription drug coverage",
        "Wellness programs",
        "Telehealth services",
      ],
    },
    {
      id: 3,
      name: "United Healthcare Bronze",
      type: "EPO Plan",
      network: "Regional Network",
      monthlyPremium: 199,
      deductible: 5000,
      copay: 50,
      coverage: 70,
      recommended: false,
      features: [
        "Most affordable option",
        "Emergency coverage",
        "Basic prescription coverage",
        "Preventive care included",
        "Online health tools",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState<InsurancePlan | null>(null);

  const handleFilterChange = (
    filterType: keyof InsuranceFilters,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const viewPlanDetails = (plan: InsurancePlan) => {
    setSelectedPlan(plan);
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
            <h1 className="text-xl font-bold text-blue-800">
              Syncertica Vitalis
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/symptom-checker"
              className="text-blue-700 hover:text-blue-500 font-medium"
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
              className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500"
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
            <Link href="/" className="text-blue-600 hover:text-blue-800 mr-2">
              <i className="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Insurance Finder
          </h1>
          <p className="text-lg text-gray-600">
            Find the perfect health insurance plan that fits your needs and
            budget.
          </p>
        </section>

        {/* Insurance Finder */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <label className="block text-blue-700 mb-2">
                Search Insurance Providers
              </label>
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search by provider, plan, or network..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-blue-700 mb-2">
                  Coverage Type
                </label>
                <select
                  value={filters.coverageType}
                  onChange={(e) =>
                    handleFilterChange("coverageType", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>All Types</option>
                  <option>HMO</option>
                  <option>PPO</option>
                  <option>EPO</option>
                  <option>POS</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-700 mb-2">
                  Monthly Premium
                </label>
                <select
                  value={filters.monthlyPremium}
                  onChange={(e) =>
                    handleFilterChange("monthlyPremium", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>Any Price</option>
                  <option>Under $200</option>
                  <option>$200 - $400</option>
                  <option>$400 - $600</option>
                  <option>Over $600</option>
                </select>
              </div>
              <div>
                <label className="block text-blue-700 mb-2">Deductible</label>
                <select
                  value={filters.deductible}
                  onChange={(e) =>
                    handleFilterChange("deductible", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>Any Amount</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>Over $5,000</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {insurancePlans.map((plan) => (
                <div
                  key={plan.id}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-blue-800 text-lg">
                        {plan.name}
                      </h3>
                      <p className="text-blue-600">
                        {plan.type} · {plan.network}
                      </p>
                    </div>
                    {plan.recommended && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Monthly Premium</p>
                      <p className="text-blue-800 font-medium">
                        ${plan.monthlyPremium}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Deductible</p>
                      <p className="text-blue-800 font-medium">
                        ${plan.deductible.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Copay</p>
                      <p className="text-blue-800 font-medium">${plan.copay}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Coverage</p>
                      <p className="text-blue-800 font-medium">
                        {plan.coverage}%
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => viewPlanDetails(plan)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors"
                    >
                      View Plan Details
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors">
                      Get Quote
                    </button>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-xl transition-colors">
                      Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Details Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-800">
                    {selectedPlan.name}
                  </h2>
                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-blue-700 mb-3">
                      Plan Overview
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan Type:</span>
                        <span className="font-medium">{selectedPlan.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Network:</span>
                        <span className="font-medium">
                          {selectedPlan.network}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Premium:</span>
                        <span className="font-medium text-blue-800">
                          ${selectedPlan.monthlyPremium}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Annual Deductible:
                        </span>
                        <span className="font-medium">
                          ${selectedPlan.deductible.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-blue-700 mb-3">
                      Coverage Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Primary Care Copay:
                        </span>
                        <span className="font-medium">
                          ${selectedPlan.copay}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Coverage Percentage:
                        </span>
                        <span className="font-medium">
                          {selectedPlan.coverage}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Out-of-Pocket Max:
                        </span>
                        <span className="font-medium">$8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Prescription Drugs:
                        </span>
                        <span className="font-medium">Covered</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-blue-700 mb-3">
                    Plan Features
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedPlan.features.map(
                      (feature: string, index: number) => (
                        <li key={index} className="text-gray-700">
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Estimated Annual Cost
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Annual Premiums</p>
                      <p className="text-lg font-bold text-blue-800">
                        ${selectedPlan.monthlyPremium * 12}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">With Deductible</p>
                      <p className="text-lg font-bold text-blue-800">
                        $
                        {selectedPlan.monthlyPremium * 12 +
                          selectedPlan.deductible}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors flex-1">
                    <i className="fas fa-shopping-cart mr-2"></i>Enroll Now
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors flex-1">
                    <i className="fas fa-download mr-2"></i>Get Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Insurance Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Understanding Health Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i className="fas fa-question-circle text-blue-500 mr-2"></i>
                Plan Types Explained
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700">
                    HMO (Health Maintenance Organization)
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lower costs, requires primary care physician, referrals
                    needed for specialists.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    PPO (Preferred Provider Organization)
                  </h4>
                  <p className="text-sm text-gray-600">
                    More flexibility, no referrals needed, higher costs,
                    nationwide coverage.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    EPO (Exclusive Provider Organization)
                  </h4>
                  <p className="text-sm text-gray-600">
                    No referrals needed, must use network providers, moderate
                    costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <i className="fas fa-calculator text-green-500 mr-2"></i>
                Cost Breakdown
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700">Premium</h4>
                  <p className="text-sm text-gray-600">
                    Monthly payment to maintain your insurance coverage.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Deductible</h4>
                  <p className="text-sm text-gray-600">
                    Amount you pay before insurance starts covering costs.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Copay</h4>
                  <p className="text-sm text-gray-600">
                    Fixed amount you pay for covered services.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">
                    Out-of-Pocket Maximum
                  </h4>
                  <p className="text-sm text-gray-600">
                    Maximum you&apos;ll pay in a year for covered services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Insurance Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calculator text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Cost Calculator
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Estimate your annual healthcare costs
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors">
                Calculate Costs
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-balance-scale text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Plan Comparison
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare multiple plans side by side
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors">
                Compare Plans
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 card-hover text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Provider Search
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Find doctors in your network
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition-colors">
                Find Providers
              </button>
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
              href="/appointments"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-md text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Find Doctors
                </h3>
                <p className="text-gray-600">
                  Book appointments with in-network providers
                </p>
              </div>
            </Link>
            <Link
              href="/ehr"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-medical text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Health Records
                </h3>
                <p className="text-gray-600">Manage your medical information</p>
              </div>
            </Link>
            <Link
              href="/medical-checkup"
              className="bg-white rounded-2xl shadow-lg p-6 card-hover block"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-check text-purple-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Health Checkup
                </h3>
                <p className="text-gray-600">Complete your health assessment</p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
