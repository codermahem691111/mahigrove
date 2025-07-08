import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: 'The Health Benefits of Pure Mangrove Honey',
      excerpt: 'Discover why mangrove honey is considered a superfood and how it can boost your immune system naturally.',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=400&fit=crop',
      author: 'Dr. Sarah Williams',
      readTime: '5 min read',
      category: 'Health & Wellness'
    },
    {
      id: 2,
      title: 'Perfect Mud Crab Cooking Guide',
      excerpt: 'Learn the secrets of preparing restaurant-quality mud crab dishes with our step-by-step cooking guide.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=400&fit=crop',
      author: 'Chef Michael Chen',
      readTime: '8 min read',
      category: 'Cooking Tips'
    },
    {
      id: 3,
      title: 'Sustainable Seafood: A Guide to Responsible Choices',
      excerpt: 'Understanding the importance of sustainable fishing and how to make environmentally conscious seafood choices.',
      image: 'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=800&h=400&fit=crop',
      author: 'Marine Biologist Emma Cooper',
      readTime: '6 min read',
      category: 'Sustainability'
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-blue-600">{blog.category}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">{blog.author}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{blog.readTime}</span>
                </div>

                {/* Read More Button */}
                <button className="group flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

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