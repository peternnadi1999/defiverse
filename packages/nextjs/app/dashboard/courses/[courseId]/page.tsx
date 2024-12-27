"use client";
import React, { useState } from 'react';
import { BookOpen, Layout, Home, BarChart, Settings, Users, ChevronDown, Check } from 'lucide-react';

const courseContent = [
  {
    title: "Introduction to DeFi",
    duration: "15 min",
    completed: false
  },
  {
    title: "Smart Contracts & DeFi Protocols",
    duration: "20 min",
    completed: false
  },
  {
    title: "Liquidity Pools & AMMs",
    duration: "25 min",
    completed: false
  },
  {
    title: "Yield Farming",
    duration: "20 min",
    completed: false
  },
  {
    title: "DeFi Risks & Security",
    duration: "15 min",
    completed: false
  },
  {
    title: "DeFi Use Cases",
    duration: "20 min",
    completed: false
  },
  {
    title: "Building on DeFi",
    duration: "25 min",
    completed: false
  },
  {
    title: "Future of DeFi",
    duration: "15 min",
    completed: false
  }
];

export default function DeFiDashboard() {
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">DeFi Learn</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              { icon: Home, text: 'Dashboard' },
              { icon: BookOpen, text: 'Courses' },
              { icon: BarChart, text: 'Progress' },
              { icon: Users, text: 'Community' },
              { icon: Settings, text: 'Settings' }
            ].map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`flex items-center space-x-3 p-2 rounded-lg 
                    ${index === 1 ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold">DeFi Fundamentals</h2>
          </div>
        </header>

        <main className="p-2">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow p-6">
              <div className="mb-6">
                <div className="text-sm text-blue-600 mb-2">Fundamentals</div>
                <p className="text-gray-600">
                  Master the core concepts of decentralized finance and understand how DeFi protocols work.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">8 lessons</span>
                </div>
              </div>

              <div className="space-y-4">
                {courseContent.map((lesson, index) => (
                  <div 
                    key={index}
                    className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedLesson(selectedLesson === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center
                          ${lesson.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                          {lesson.completed ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <span className="text-sm text-gray-600">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium">{lesson.title}</h3>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transform transition-transform
                          ${selectedLesson === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                    
                    {selectedLesson === index && (
                      <div className="mt-4 pl-10 text-gray-600">
                        <p>This lesson covers the fundamentals of {lesson.title.toLowerCase()}.</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                          Start Lesson
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}