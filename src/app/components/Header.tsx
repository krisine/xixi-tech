'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';

// export default function Header() {
//   return (
//     <motion.header
//       className="bg-gray-800 text-white py-4"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <Link
//           href="/"
//           className="font-bold px-4 flex items-center space-x-2"
//         >
//           <span className="text-sm sm:text-2xl lg:text-3xl text-grey-200">XIXI TECH</span>
//         </Link>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link
//                 href="/about"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/faq"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 F&Q
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/contact"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/legal"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 Legal
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/news"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 News
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/market-analysis"
//                 className="hover:text-blue-300 transition-colors"
//               >
//                 Market Analysis
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-gray-800 text-white py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold px-4 flex items-center space-x-2">
          <span className="text-sm sm:text-2xl lg:text-3xl text-gray-200">XIXI TECH</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden flex items-center space-x-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-gray-200 text-sm">Menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-blue-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-300 transition-colors">
                F&Q
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-blue-300 transition-colors">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-blue-300 transition-colors">
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

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-gray-700"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/about" className="hover:text-blue-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-blue-300 transition-colors">
                F&Q
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-blue-300 transition-colors">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-blue-300 transition-colors">
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
        </motion.div>
      )}
    </motion.header>
  );
}
