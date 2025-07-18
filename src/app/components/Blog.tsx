import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import Image from 'next/image';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Health Benefits of Pure Mangrove Honey',
      excerpt: 'Discover why mangrove honey is considered a superfood and how it can boost your immune system naturally.',
      author: 'Dr. Sarah Williams',
      readTime: '5 min read',
      category: 'Health & Wellness'
    },
    {
      id: 2,
      title: 'Perfect Mud Crab Cooking Guide',
      excerpt: 'Learn the secrets of preparing restaurant-quality mud crab dishes with our step-by-step cooking guide.',
      author: 'Chef Michael Chen',
      readTime: '8 min read',
      category: 'Cooking Tips'
    },
    {
      id: 3,
      title: 'Sustainable Seafood: A Guide to Responsible Choices',
      excerpt: 'Understanding the importance of sustainable fishing and how to make environmentally conscious seafood choices.',
      author: 'Marine Biologist Emma Cooper',
      readTime: '6 min read',
      category: 'Sustainability'
    }
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
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest from Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Blog </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles about sustainable seafood, cooking tips, and healthy living
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow duration-300">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;