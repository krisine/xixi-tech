'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useRef } from 'react';

export default function ContactPage() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const handleSendMail = () => {
    const name = nameRef.current;
    const email = emailRef.current;
    const message = messageRef.current;

    // 构造 mailto 链接
    const mailtoLink = `mailto:xi@xixitech.io?subject=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // 打开邮件客户端
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-6">
                We would love to hear from you. Please use our contact
                information or send us a message.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 mr-2 text-blue-400" />
                  <span>xi@xixitech.io</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-blue-400" />
                  <span>123 Tech Street, Innovation City, 12345</span>
                </div>
              </div>
            </motion.div>

            {/* 表单区域 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => (nameRef.current = e.target.value)}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => (emailRef.current = e.target.value)}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    onChange={(e) => (messageRef.current = e.target.value)}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSendMail}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}