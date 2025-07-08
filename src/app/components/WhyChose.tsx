import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const trustItems = [
    {
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center',
      title: '100% Natural & Organic',
      description: 'Certified organic produce with no harmful chemicals or pesticides',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=300&fit=crop&crop=center',
      title: 'Sourced from Local Farmers',
      description: 'Direct partnerships with trusted local farmers in your region',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center',
      title: 'Fast Delivery',
      description: 'Same-day delivery to keep your produce fresh and crisp',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop&crop=center',
      title: 'Money-Back Guarantee',
      description: '100% satisfaction guaranteed or your money back, no questions asked',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              MaheGrove?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for fresh, organic produce delivered straight to your door
          </p>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => {
            return (
              <motion.div
                key={index}
               
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className={`
                  relative overflow-hidden rounded-2xl p-8 h-full
                  bg-white shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-gray-100 hover:border-transparent
                  ${item.bgColor}
                `}>
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.4 }}
                    className="relative mb-6"
                  >
                    <div className="w-[180px] h-[200px] mx-auto rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Decorative border */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-12 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center px-8 py-4 rounded-full
              bg-gradient-to-r from-green-600 to-emerald-600
              text-white font-semibold text-lg shadow-lg
              hover:shadow-xl transition-all duration-300
              hover:from-green-700 hover:to-emerald-700
            "
          >
            Start Shopping Now
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSection;