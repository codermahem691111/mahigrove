import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What makes Mangrove honey unique?',
    answer: 'Mangrove honey is unique due to its rich, dark amber color and distinct flavor profile. It\'s harvested from the nectar of mangrove flowers, containing high mineral content and antioxidant properties that set it apart from regular honey.',
    category: 'Products'
  },
  {
    question: 'How do you ensure the quality of your seafood?',
    answer: 'We maintain strict quality control measures throughout our supply chain. Our seafood is sourced from sustainable fisheries, processed within hours of harvest, and undergoes rigorous quality checks before reaching our customers.',
    category: 'Quality'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to select countries. Shipping costs and delivery times vary by location. All our products are carefully packaged to maintain freshness during transit.',
    category: 'Shipping'
  },
  {
    question: 'What\'s your return policy?',
    answer: 'We have a satisfaction guarantee policy. If you\'re not completely satisfied with your purchase, please contact us within 48 hours of delivery. Note that due to the perishable nature of our products, specific return conditions apply.',
    category: 'Policy'
  },
  {
    question: 'Are your products sustainably sourced?',
    answer: 'Absolutely! Sustainability is at the core of our business. We work directly with local communities and follow strict environmental guidelines to ensure our harvesting practices protect and preserve the mangrove ecosystems.',
    category: 'Sustainability'
  },
  {
    question: 'How should I store your products?',
    answer: 'Storage requirements vary by product. Honey should be stored at room temperature away from direct sunlight. Seafood products should be refrigerated or frozen according to the instructions on the packaging.',
    category: 'Storage'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...new Set(faqData.map(item => item.category))];
  
  const filteredFAQs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Find answers to common questions about our products and services
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-50"
              >
                <div className="p-6 text-gray-600">
                  {faq.answer}
                  <div className="mt-2 text-sm text-teal-600">
                    Category: {faq.category}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Can't find what you're looking for?
          </p>
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Contact Support
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FAQSection;