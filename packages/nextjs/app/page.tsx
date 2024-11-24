'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Footer from '~~/components/LandingPage/Footer'

const FeatureCard = ({ icon, title, description }:any) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

const StepCard = ({ number, title, description }:any) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const TestimonialCard = ({ quote, author }:any) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-sm font-semibold text-gray-800">- {author}</p>
  </div>
)

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-green-50">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          DefiVerse
        </Link>
        <nav className="space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
            Testimonials
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
              Welcome to DefiVerse
            </span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Master DeFi with Hands-On Learning</h1>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              DefiVerse: Your interactive on-chain learning platform for mastering decentralized finance.
            </p>
            <Link
              href="/dashboard"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Start Learning
            </Link>
          </motion.div>
        </section>

        {/* About DeFi */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">What is DeFi?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Decentralized Finance (DeFi) is a revolutionary concept in blockchain that removes intermediaries in
                  financial transactions, providing open access to financial services. It empowers individuals to gain
                  control over their assets, reduces costs, and fosters financial inclusion globally.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Learn DeFi?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gain financial sovereignty and control over your assets</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access innovative financial products and services</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Participate in the future of finance and blockchain technology</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Explore new career opportunities in a rapidly growing field</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose DefiVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="📚"
              title="Learn the Basics of DeFi"
              description="Understand key concepts and principles of decentralized finance with simplified explanations."
            />
            <FeatureCard
              icon="📝"
              title="Quiz to Retain Knowledge"
              description="Reinforce your learning with engaging quizzes designed to test your understanding."
            />
            <FeatureCard
              icon="🔑"
              title="Keywords Explained"
              description="Master DeFi terminology with concise keyword explanations for better comprehension."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard number={1} title="Connect Wallet" description="Link your wallet to get started with DefiVerse." />
              <StepCard number={2} title="Start Learning" description="Access a curated learning dashboard with topics tailored for you." />
              <StepCard number={3} title="Take a Course" description="Select a course, explore the content, and deepen your knowledge." />
              <StepCard number={4} title="Learn & Quiz" description="Study the material and complete quizzes to solidify your understanding." />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="DefiVerse made complex DeFi concepts easy to understand. The hands-on approach is a game-changer!"
              author="Alex K., Blockchain Developer"
            />
            <TestimonialCard
              quote="I feel so much more confident navigating the DeFi space after completing DefiVerse modules."
              author="Sarah M., Crypto Enthusiast"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your DeFi Journey?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Join DefiVerse today and unlock the potential of decentralized finance.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Get Started Now
          </Link>
        </section>
        
      </main>
    </div>
  )
}

