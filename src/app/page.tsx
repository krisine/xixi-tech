'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Innovation through Intelligence
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl">
            XIXI TECH specializes in AI and hardware integration, delivering
            high-performance, reliable intelligent system solutions for your
            business.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Our Cutting-Edge Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'XMail AI Assistant',
                description: 'Intelligent email management for businesses',
              },
              {
                name: 'XCore AI Computing Platform',
                description:
                  'Next-gen AI processing for enterprise applications',
              },
              {
                name: 'XSense Smart Perception System',
                description:
                  'Advanced sensor fusion for intelligent environments',
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <Link
                  href="/products"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Explore Features
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
