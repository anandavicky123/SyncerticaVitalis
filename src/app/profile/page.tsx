"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

interface ProfileData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;

  // Location Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Identity & Preferences
  pronouns: string;
  preferredLanguage: string;
  emergencyContact: string;
  emergencyPhone: string;

  // Medical Information
  congenitalDiseases: string[];
  allergies: string[];
  disabilities: string[];
  bloodType: string;
  height: string;
  weight: string;

  // Additional Medical Info
  medications: string[];
  medicalConditions: string[];
  surgeries: string[];
  familyHistory: string[];
}

export default function Profile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("personal");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState<ProfileData>({
    // Personal Information
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    gender: "male",

    // Location Information
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",

    // Identity & Preferences
    pronouns: "he/him",
    preferredLanguage: "english",
    emergencyContact: "Jane Doe",
    emergencyPhone: "+1 (555) 987-6543",

    // Medical Information
    congenitalDiseases: ["Type 1 Diabetes"],
    allergies: ["Penicillin", "Shellfish"],
    disabilities: [],
    bloodType: "O+",
    height: "5'10\"",
    weight: "175 lbs",

    // Additional Medical Info
    medications: ["Insulin", "Metformin"],
    medicalConditions: ["Diabetes Type 1", "Hypertension"],
    surgeries: ["Appendectomy (2015)"],
    familyHistory: ["Heart Disease (Father)", "Diabetes (Mother)"],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  type ArrayFields = keyof Pick<
    ProfileData,
    | "congenitalDiseases"
    | "allergies"
    | "disabilities"
    | "medications"
    | "medicalConditions"
    | "surgeries"
    | "familyHistory"
  >;

  const handleArrayInputChange = (
    field: ArrayFields,
    index: number,
    value: string
  ) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: prev[field].map((item: string, i: number) =>
        i === index ? value : item
      ),
    }));
  };

  const addArrayItem = (field: ArrayFields) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field: ArrayFields, index: number) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i: number) => i !== index),
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      // Show success message
    }, 2000);
  };

  const handleSignOut = () => {
    // Clear any stored authentication data
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    // Redirect to landing page
    router.push("/");
  };

  const tabs = [
    { id: "personal", label: "Personal Info", icon: "fas fa-user" },
    { id: "medical", label: "Medical Info", icon: "fas fa-heartbeat" },
    { id: "emergency", label: "Emergency", icon: "fas fa-phone" },
    { id: "preferences", label: "Preferences", icon: "fas fa-cog" },
  ];

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
              href="/dashboard"
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
              className="text-blue-700 hover:text-blue-500 font-medium"
            >
              Insurance
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/profile"
              className="text-blue-700 hover:text-blue-500 font-medium border-b-2 border-blue-500"
            >
              <i className="fas fa-user mr-2"></i>Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
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
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-user text-white text-3xl"></i>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-900">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-blue-700">{profileData.email}</p>
                <p className="text-gray-600">
                  Patient ID: #SV-
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center"
                >
                  <i className="fas fa-edit mr-2"></i>
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center disabled:opacity-50"
                  >
                    {isSaving ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Saving...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-save mr-2"></i>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Personal Information Tab */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Personal Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={profileData.dateOfBirth}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={profileData.gender}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pronouns
                    </label>
                    <select
                      name="pronouns"
                      value={profileData.pronouns}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    >
                      <option value="he/him">He/Him</option>
                      <option value="she/her">She/Her</option>
                      <option value="they/them">They/Them</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-blue-800 mt-8 mb-4">
                  Address Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={profileData.city}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={profileData.state}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={profileData.zipCode}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={profileData.country}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Medical Information Tab */}
            {activeTab === "medical" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Medical Information
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Type
                    </label>
                    <select
                      name="bloodType"
                      value={profileData.bloodType}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height
                    </label>
                    <input
                      type="text"
                      name="height"
                      value={profileData.height}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="5'10&quot;"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weight
                    </label>
                    <input
                      type="text"
                      name="weight"
                      value={profileData.weight}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="175 lbs"
                    />
                  </div>
                </div>

                {/* Congenital Diseases */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Congenital Diseases
                  </label>
                  {profileData.congenitalDiseases.map((disease, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={disease}
                        onChange={(e) =>
                          handleArrayInputChange(
                            "congenitalDiseases",
                            index,
                            e.target.value
                          )
                        }
                        disabled={!isEditing}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        placeholder="Enter congenital disease"
                      />
                      {isEditing && (
                        <button
                          onClick={() =>
                            removeArrayItem("congenitalDiseases", index)
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <button
                      onClick={() => addArrayItem("congenitalDiseases")}
                      className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
                    >
                      <i className="fas fa-plus mr-1"></i>
                      Add Congenital Disease
                    </button>
                  )}
                </div>

                {/* Allergies */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Allergies
                  </label>
                  {profileData.allergies.map((allergy, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={allergy}
                        onChange={(e) =>
                          handleArrayInputChange(
                            "allergies",
                            index,
                            e.target.value
                          )
                        }
                        disabled={!isEditing}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        placeholder="Enter allergy"
                      />
                      {isEditing && (
                        <button
                          onClick={() => removeArrayItem("allergies", index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <button
                      onClick={() => addArrayItem("allergies")}
                      className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
                    >
                      <i className="fas fa-plus mr-1"></i>
                      Add Allergy
                    </button>
                  )}
                </div>

                {/* Disabilities */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Disabilities
                  </label>
                  {profileData.disabilities.length === 0 && !isEditing && (
                    <p className="text-gray-500 italic">
                      No disabilities reported
                    </p>
                  )}
                  {profileData.disabilities.map((disability, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        type="text"
                        value={disability}
                        onChange={(e) =>
                          handleArrayInputChange(
                            "disabilities",
                            index,
                            e.target.value
                          )
                        }
                        disabled={!isEditing}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                        placeholder="Enter disability"
                      />
                      {isEditing && (
                        <button
                          onClick={() => removeArrayItem("disabilities", index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <button
                      onClick={() => addArrayItem("disabilities")}
                      className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
                    >
                      <i className="fas fa-plus mr-1"></i>
                      Add Disability
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Emergency Contact Tab */}
            {activeTab === "emergency" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Emergency Contact
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={profileData.emergencyContact}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={profileData.emergencyPhone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Preferences
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Language
                    </label>
                    <select
                      name="preferredLanguage"
                      value={profileData.preferredLanguage}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50"
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                      <option value="chinese">Chinese</option>
                      <option value="japanese">Japanese</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
