import React, { useState } from "react";
import { Plane, Calendar, Wallet, Users } from "lucide-react";

const PlanTrip = () => {
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    travelType: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Plan Your Adventure
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
              <Plane className="w-5 h-5 mr-2 text-blue-600" />
              Where would you like to go?
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
              placeholder="Enter destination"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              How many days are you planning to travel?
            </label>
            <input
              type="number"
              min="1"
              value={formData.days}
              onChange={(e) => setFormData({...formData, days: e.target.value})}
              placeholder="Number of days"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
              <Wallet className="w-5 h-5 mr-2 text-blue-600" />
              What's your budget range?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Low', 'Medium', 'High'].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setFormData({...formData, budget: budget.toLowerCase()})}
                  className={`p-3 border rounded-lg transition-all ${
                    formData.budget === budget.toLowerCase()
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Who are you traveling with?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {['Solo', 'Couple', 'Family', 'Friends'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({...formData, travelType: type.toLowerCase()})}
                  className={`p-3 border rounded-lg transition-all ${
                    formData.travelType === type.toLowerCase()
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            Generate Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanTrip;