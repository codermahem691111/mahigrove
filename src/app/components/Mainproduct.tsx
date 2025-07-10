import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Heart, Plus } from 'lucide-react';

// Define types for our data structures
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  weight: string;
  features: string[];
  discount: string;
};

type FavoritesState = {
  [key: number]: boolean;
};

type CartItemsState = {
  [key: number]: number;
};

export default function ProductCardsSection() {
  const [favorites, setFavorites] = useState<FavoritesState>({});
  const [cartItems, setCartItems] = useState<CartItemsState>({});

  const toggleFavorite = (id: number): void => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = (product: Product): void => {
    setCartItems(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Tiger Shrimp",
      category: "Fresh Seafood",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 127,
      image: "🦐",
      description: "Fresh jumbo tiger prawns, sustainably sourced from pristine coastal waters. Perfect for grilling, stir-frying, or elegant presentations.",
      weight: "1 lb",
      features: ["Wild Caught", "Jumbo Size", "Flash Frozen"],
      discount: "17% OFF"
    },
    {
      id: 2,
      name: "Pure Mangrove Honey",
      category: "Natural Sweetener",
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.9,
      reviews: 203,
      image: "🍯",
      description: "Raw, unfiltered honey harvested from pristine mangrove forests. Rich in antioxidants with a unique, complex flavor profile.",
      weight: "16 oz jar",
      features: ["Raw & Unfiltered", "Single Origin", "Organic"],
      discount: "18% OFF"
    },
    {
      id: 3,
      name: "Live Mud Crabs",
      category: "Premium Seafood",
      price: 32.99,
      originalPrice: 38.99,
      rating: 4.7,
      reviews: 89,
      image: "🦀",
      description: "Fresh live mud crabs, known for their sweet, tender meat. Ideal for steaming, boiling, or traditional crab preparations.",
      weight: "2-3 lbs each",
      features: ["Live Delivery", "Premium Grade", "Locally Sourced"],
      discount: "15% OFF"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

 

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Main 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              {" "}Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of fresh seafood and natural products, 
            carefully curated for the finest dining experience.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
            
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-orange-50">
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </div>
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                >
                  <Heart 
                    size={20} 
                    className={favorites[product.id] ? "fill-red-500 text-red-500" : "text-gray-400"}
                  />
                </button>

                {/* Product Image */}
                <div className="flex justify-center mb-4">
                  <motion.div 
                    className="text-8xl bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.image}
                  </motion.div>
                </div>

                {/* Category */}
                <p className="text-sm text-blue-600 font-medium text-center mb-2">
                  {product.category}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Weight */}
                <p className="text-sm text-gray-500 mb-4">
                  Weight: {product.weight}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">per {product.weight}</p>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={20} />
                  <span>
                    {cartItems[product.id] ? `Added (${cartItems[product.id]})` : 'Add to Cart'}
                  </span>
                  {cartItems[product.id] && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-white/20 rounded-full p-1"
                    >
                      <Plus size={12} />
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}