'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      className="bg-gray-800 text-white py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          XIXI TECH
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/about"
                className="hover:text-blue-300 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-blue-300 transition-colors"
              >
                F&Q
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/legal"
                className="hover:text-blue-300 transition-colors"
              >
                Legal
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="hover:text-blue-300 transition-colors"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/market-analysis"
                className="hover:text-blue-300 transition-colors"
              >
                Market Analysis
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
