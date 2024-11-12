'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  const products = [
    {
      name: 'XMail AI Assistant',
      description:
        'Intelligent email management system powered by advanced AI algorithms.',
      features: [
        'Smart email categorization',
        'Automated response suggestions',
        'Priority inbox management',
      ],
    },
    {
      name: 'XCore AI Computing Platform',
      description:
        'High-performance computing solution for enterprise-grade AI applications.',
      features: [
        'Scalable architecture',
        'Real-time data processing',
        'Advanced machine learning capabilities',
      ],
    },
    {
      name: 'XSense Smart Perception System',
      description:
        'Cutting-edge sensor fusion technology for intelligent environmental awareness.',
      features: [
        'Multi-modal sensor integration',
        'Real-time object detection and tracking',
        'Adaptive learning algorithms',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Products & Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
