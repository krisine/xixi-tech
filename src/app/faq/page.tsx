'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const faqs = [
    {
      question: `What makes XIXI TECH's AI solutions unique?`,
      answer: `XIXI TECH combines cutting-edge AI algorithms with robust hardware integration, providing unparalleled performance and reliability in our intelligent system solutions.`,
    },
    {
      question: 'How can XMail AI Assistant improve my email productivity?',
      answer: 'XMail AI Assistant uses advanced machine learning to categorize emails, suggest responses, and manage your inbox priorities, significantly reducing time spent on email management.',
    },
    {
      question: 'Is the XCore AI Computing Platform scalable for different business sizes?',
      answer: 'Yes, the XCore AI Computing Platform is designed to be highly scalable, catering to businesses of all sizes, from startups to large enterprises.',
    },
    {
      question: 'What industries can benefit from the XSense Smart Perception System?',
      answer: 'The XSense Smart Perception System is versatile and can be applied in various industries, including automotive, security, smart cities, and industrial automation.',
    },
    {
      question: 'How does XIXI TECH ensure data privacy and security in its AI solutions?',
      answer: 'XIXI TECH implements state-of-the-art encryption, secure data handling practices, and complies with international data protection regulations to ensure the highest level of data privacy and security.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-700 bg-opacity-50 p-4 rounded-b-lg mt-1"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}