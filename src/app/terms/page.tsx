'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <div className="max-w-3xl mx-auto">
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300">
                By accessing or using XIXI TECH&#39s services, you agree to be
                bound by these Terms of Service. If you disagree with any part
                of the terms, you may not access our services.
              </p>
            </motion.section>
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                2. Use of Services
              </h2>
              <p className="text-gray-300">
                Our services are provided for your personal and non-commercial
                use. You may not modify, copy, distribute, transmit, display,
                perform, reproduce, publish, license, create derivative works
                from, transfer, or sell any information, software, products or
                services obtained from our services.
              </p>
            </motion.section>
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">3. Privacy Policy</h2>
              <p className="text-gray-300">
                Your use of our services is also governed by our Privacy Policy.
                Please review our Privacy Policy, which also governs the Site
                and informs users of our data collection practices.
              </p>
            </motion.section>
            <motion.section
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300">
                The content, organization, graphics, design, compilation,
                magnetic translation, digital conversion and other matters
                related to the Site are protected under applicable copyrights,
                trademarks and other proprietary rights.
              </p>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">5. Governing Law</h2>
              <p className="text-gray-300">
                These terms and conditions are governed by and construed in
                accordance with the laws of the jurisdiction where XIXI TECH is
                incorporated and you irrevocably submit to the exclusive
                jurisdiction of the courts in that State or location.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
