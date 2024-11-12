'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LegalInformationPage() {
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
            Legal Information
          </h1>
          <div className="max-w-3xl mx-auto">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Company Information
              </h2>
              <p className="text-gray-300 mb-4">
                XIXI TECH is a registered company in [Country], with company
                registration number [Registration Number].
              </p>
              <p className="text-gray-300">
                Registered Office: 123 Tech Street, Innovation City, 12345,
                [Country]
              </p>
            </motion.section>
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Legal Policies</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Acceptable Use Policy
                  </Link>
                </li>
              </ul>
            </motion.section>
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-300 mb-4">
                All intellectual property rights in our products, services, and
                content are owned by or licensed to XIXI TECH. This includes but
                is not limited to trademarks, patents, copyrights, and trade
                secrets.
              </p>
              <p className="text-gray-300">
                For any intellectual property inquiries, please contact our
                legal department at legal@xixitech.com.
              </p>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
              <p className="text-gray-300 mb-4">
                XIXI TECH is committed to complying with all applicable laws and
                regulations, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>
                  Health Insurance Portability and Accountability Act (HIPAA)
                </li>
                <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
