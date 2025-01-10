'use client';
import React from "react";
import { Bot, Sparkles, Globe } from "lucide-react";
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate();
    const handleNavi=()=>{
        navigate('/createtrip')
    }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Plan Your Perfect Trip with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience intelligent travel planning powered by advanced AI technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <Bot className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Smart Recommendations</h3>
              <p className="text-gray-600">
                Our AI understands your preferences and suggests personalized destinations and activities.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <Sparkles className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Advanced AI Model</h3>
              <p className="text-gray-600">
                Powered by Gemini API, offering cutting-edge natural language understanding and trip planning capabilities.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <Globe className="w-12 h-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Global Coverage</h3>
              <p className="text-gray-600">
                Access to a vast database of destinations, attractions, and local insights worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-full inline-flex items-center transition-colors"
            onClick={handleNavi}
          >
            Let's Explore
            <Globe className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;