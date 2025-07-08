'use client'
import React from 'react';
import './home.css'
import { motion } from 'framer-motion';
export default function Home () {
    
  
    return (
  
  
  <div>
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center" id='hero'>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="relative">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Fresh Seafood
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 relative">
                    {" "}Delivered Daily
                    {/* Scribble SVG */}
                    <svg 
                      className="absolute -bottom-2 left-0 w-full h-4 text-orange-400 opacity-60"
                      viewBox="0 0 300 20" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M5 15 C30 5, 70 18, 100 8 C130 15, 170 5, 200 12 C230 18, 270 8, 295 15"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M8 12 C35 8, 75 15, 105 5 C135 12, 175 8, 205 15 C235 20, 275 5, 292 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.2, delay: 0.7, ease: "easeInOut" }}
                      />
                    </svg>
                  </span>
                </h1>
              </div>
              <motion.p 
                className="text-xl text-white  leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Experience the finest ocean treasures with our premium selection of fresh seafood, 
                sourced directly from sustainable fisheries and delivered to your doorstep.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              <motion.button 
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Cards */}
          <motion.div 
            className="grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Shrimp Card */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl">🦐</div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Premium Shrimp</h3>
                  <p className="text-gray-600">Fresh tiger prawns</p>
                  <p className="text-blue-600 font-semibold">$24.99/lb</p>
                </div>
              </div>
            </motion.div>

            {/* Honey Card */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl">🍯</div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Wild Honey</h3>
                  <p className="text-gray-600">Pure mangrove honey</p>
                  <p className="text-blue-600 font-semibold">$18.99/jar</p>
                </div>
              </div>
            </motion.div>

            {/* Crab Card */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-3xl">🦀</div>
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Fresh Crab</h3>
                  <p className="text-gray-600">Live mud crabs</p>
                  <p className="text-blue-600 font-semibold">$32.99/lb</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  
    </div>
  );
}