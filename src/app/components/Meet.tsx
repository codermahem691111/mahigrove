'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf } from 'lucide-react';
import Image from 'next/image';

// Import local images
import image1 from '../assets/Meet/meet1.jpg';
import image2 from '../assets/Meet/meet2.jpg';

const MeetTheGatherers = () => {
  const images = [
    {
      url: image1,
      alt: 'Local farmer in Sundarban',
      span: 'row-span-2'
    },
    {
      url: image2,
      alt: 'Sundarban mangrove forest',
      span: 'col-span-1'
    },
    {
      url: image1,
      alt: 'Fresh harvest from local farmers',
      span: 'col-span-1'
    },
    {
      url: image1,
      alt: 'Traditional farming community',
      span: 'col-span-2'
    },
    {
      url: image2,
      alt: 'Sustainable farming practices',
      span: 'col-span-1'
    },
    {
      url: image1,
      alt: 'Fresh produce delivery',
      span: 'col-span-1'
    }
  ];

  const stats = [
    { icon: Users, number: '150+', label: 'Local Farmers' },
    { icon: Heart, number: '50+', label: 'Communities' },
    { icon: Leaf, number: '100%', label: 'Sustainable' }
  ];

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

  


  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Story Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet the{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Gatherers
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6"></div>
            </motion.div>

            <motion.p 
           
              className="text-lg text-gray-700 leading-relaxed"
            >
              At MaheGrove, we believe in the power of community and the wisdom of tradition. 
              Our mission is to bridge the gap between the rich biodiversity of the Sundarban 
              region and your table, while empowering local communities who have been the 
              guardians of this unique ecosystem for generations. Every purchase you make 
              directly supports over 150 local farmers and their families, preserving both 
              their livelihoods and the natural heritage of the Sundarbans.
            </motion.p>

            {/* Stats */}
            <motion.div 
       
              className="grid grid-cols-3 gap-6 py-8"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 

              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-4 rounded-full
                  bg-gradient-to-r from-green-600 to-emerald-600
                  text-white font-semibold text-lg shadow-lg
                  hover:shadow-xl transition-all duration-300
                  hover:from-green-700 hover:to-emerald-700
                "
              >
                Read Our Story
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-4 rounded-full
                  border-2 border-green-600 text-green-600
                  font-semibold text-lg hover:bg-green-600 hover:text-white
                  transition-all duration-300
                "
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
              {images.map((image, index) => (
                <motion.div
                  key={index}
   
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`
                    relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl
                    transition-all duration-300 cursor-pointer
                    ${image.span}
                  `}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay content on hover */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 hover:translate-y-0 hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium drop-shadow-lg">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheGatherers;