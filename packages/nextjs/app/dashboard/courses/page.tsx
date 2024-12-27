"use client";
import React from 'react';
import Header from '../../../components/LandingPage/Header';
import Footer from '../../../components/LandingPage/Footer';
import { useRouter } from 'next/navigation';



const CourseCard = ({ handleClick, id, title, description, image, category }:any) => (
  <div onClick={() => handleClick(id)} className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <span className="text-xs font-semibold px-2 py-1 bg-white/20 rounded-full text-white backdrop-blur-sm">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex justify-between items-center">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Start Learning →
        </button>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          <span className="text-xs text-gray-400">8 lessons</span>
        </div>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      title: 'DeFi Fundamentals',
      description: 'Master the core concepts of decentralized finance and understand how DeFi protocols work.',
      category: 'Fundamentals',
      image: 'defi-basics.jpg'
    },
    {
      id: 2,
      title: 'Advanced Yield Farming',
      description: 'Learn advanced strategies for maximizing returns through yield farming and liquidity provision.',
      category: 'Advanced',
      image: 'yield-farming.jpg'
    },
    {
      id: 3,
      title: 'DeFi Security',
      description: 'Understand security best practices and learn how to protect your assets in the DeFi ecosystem.',
      category: 'Security',
      image: 'defi-security.jpg'
    },
    {
      id: 4,
      title: 'Tokenomics Design',
      description: 'Explore the principles of token economics and learn how to analyze token models.',
      category: 'Economics',
      image: 'tokenomics.jpg'
    },
    {
      id: 5,
      title: 'Smart Contract Development',
      description: 'Build and deploy your own DeFi protocols with Solidity smart contracts.',
      category: 'Development',
      image: 'smart-contracts.jpg'
    },
    {
      id: 6,
      title: 'DeFi Trading Strategies',
      description: 'Master advanced trading techniques in decentralized exchanges and AMMs.',
      category: 'Trading',
      image: 'trading.jpg'
    }
  ];

  const router = useRouter();
const handleClick = (courseId: string) => {
    router.push(`/dashboard/courses/${courseId}`);
};	 
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Learning Journey
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated courses designed to take you from DeFi basics to advanced concepts.
            Each course is crafted by industry experts to provide you with practical knowledge.
          </p>
        </div>

        {/* Course Categories */}
        <div className="flex justify-center mb-8 space-x-4">
          {['All', 'Fundamentals', 'Advanced', 'Security', 'Development'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} handleClick={handleClick} />
            
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Available Courses', value: '15+' },
            { label: 'Active Learners', value: '2.5k+' },
            { label: 'Expert Instructors', value: '10+' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
             
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}