'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
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
            About XIXI TECH
          </h1>
          <div className="max-w-3xl mx-auto">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                At XIXI TECH, we are driven by a singular mission: to
                revolutionize industries through cutting-edge AI and hardware
                integration. We strive to create intelligent solutions that
                empower businesses to achieve unprecedented levels of
                efficiency, innovation, and growth.
              </p>
            </motion.section>
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                We envision a future where AI seamlessly integrates with every
                aspect of business and daily life, driving progress and solving
                complex challenges. XIXI TECH aims to be at the forefront of
                this transformation, continuously pushing the boundaries of
                what's possible in AI and hardware integration.
              </p>
            </motion.section>
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <p className="text-gray-300">
                XIXI TECH is home to a diverse team of world-class engineers,
                data scientists, and industry experts. Our collaborative
                environment fosters innovation and enables us to tackle the most
                challenging problems in AI and hardware integration.
              </p>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-300">
                We are committed to ethical AI development, data privacy, and
                sustainable technology practices. XIXI TECH continuously invests
                in research and development to ensure our solutions not only
                meet the needs of today but anticipate the challenges of
                tomorrow.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
