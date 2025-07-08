'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Gift, Globe, Briefcase, Bell, MapPin } from 'lucide-react';

const NewsletterContactSection = () => {
  const [email, setEmail] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showFlashSale, setShowFlashSale] = useState(true);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Flash Sale Banner */}
      {showFlashSale && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-4 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Bell className="w-5 h-5" />
              </motion.div>
              <span className="font-bold text-sm md:text-base">
                🎉 Festival Special: 25% OFF on all organic produce! Limited time offer
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Use code: FESTIVAL25</span>
              <button
                onClick={() => setShowFlashSale(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 translate-x-full animate-pulse"></div>
        </motion.div>
      )}

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Newsletter Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Grove!
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Get 10% off your first order — subscribe to our grove and stay updated with fresh deals!
              </p>
            </motion.div>

            {/* Email Signup Form */}
            <motion.form
         
              onSubmit={handleEmailSubmit}
              className="max-w-md mx-auto mb-12"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors text-gray-900"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-700 hover:to-emerald-700"
                >
                  Subscribe & Save
                </motion.button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                🎁 Get 10% off your first order + exclusive deals
              </p>
            </motion.form>

            {/* Contact Options */}
            <motion.div
             
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            >
              <motion.a
                href="https://wa.me/+8801234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-600"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </motion.a>

              <motion.a
                href="tel:+8801234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: +880 123 456 7890
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Bonus Sections Grid */}
          <motion.div
      
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            {/* Language Switcher */}
            <motion.div
              
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Language & Region</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    whileHover={{ scale: 1.02 }}
                    className={`
                      w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200
                      ${selectedLanguage === lang.code 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{lang.flag}</span>
                      <span className="font-medium text-gray-900">{lang.name}</span>
                    </div>
                    {selectedLanguage === lang.code && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </motion.button>
                ))}
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                Serving: Khulna Division, Bangladesh
              </div>
            </motion.div>

            {/* Business Partnership */}
            <motion.div
           
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-semibold">Business Partnership</h3>
                </div>
                <p className="text-purple-100 mb-4">
                  Looking for wholesale or bulk orders? Partner with us for special rates and exclusive deals.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                >
                  Become a Partner
                </motion.button>
              </div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
            </motion.div>

            {/* Special Offers */}
            <motion.div
         
              className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Gift className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-semibold">Special Offers</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="font-medium">🎯 First Order: 10% OFF</p>
                    <p className="text-sm text-orange-100">Use code: WELCOME10</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="font-medium">🔥 Bulk Orders: 20% OFF</p>
                    <p className="text-sm text-orange-100">Orders above ৳2000</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="font-medium">📅 Weekly Fresh: 15% OFF</p>
                    <p className="text-sm text-orange-100">Subscribe to save</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterContactSection;