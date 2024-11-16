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
          {/* 公司简介 */}
          <h1 className="text-4xl font-bold mb-8 text-center">About XIXI TECH</h1>
          <div className="max-w-4xl mx-auto">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Company Overview</h2>
              <p className="text-gray-300">
                Founded in 2024, XIXI TECH is an innovative technology company specializing in AI and hardware integration. 
                Our team brings together top experts in IC design, FPGA development, and AI algorithms, 
                aiming to deliver cutting-edge intelligent solutions. By combining software and hardware design, 
                we empower clients with high-performance, reliable, and intelligent system solutions.
              </p>
            </motion.section>

            {/* 使命 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                “Innovation through Intelligence” — We are dedicated to:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Advancing the seamless integration of AI and hardware.</li>
                <li>Delivering innovative intelligent solutions to industries.</li>
                <li>Assisting clients in achieving digital transformation.</li>
                <li>Creating a smarter, more efficient future for all industries.</li>
              </ul>
            </motion.section>

            {/* 愿景 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>To become a leading provider of AI-hardware integration solutions in the Asia-Pacific region.</li>
                <li>To spearhead industry-wide intelligent transformation.</li>
                <li>To foster the most innovative R&D team in the field.</li>
              </ul>
            </motion.section>

            {/* 核心价值观 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>
                  <strong>Innovation Excellence:</strong> Continuous technical breakthroughs and product quality.
                </li>
                <li>
                  <strong>Integrity & Collaboration:</strong> Trust-based relationships and teamwork.
                </li>
                <li>
                  <strong>Customer-Centric:</strong> Tailored solutions for every client’s needs.
                </li>
                <li>
                  <strong>Sustainable Development:</strong> Promoting green technologies and nurturing talent.
                </li>
              </ul>
            </motion.section>

            {/* 技术研发团队 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-4">
                <li>
                  <strong>Wu Zongxi (R&D Director):</strong> Expert in digital IC design and FPGA system development. 
                  Specialties: hardware architecture optimization, system-level design.
                </li>
                <li>
                  <strong>Zhang Yanxiang (Hardware Engineer):</strong> Specialist in circuit design and system integration. 
                  Core skills: FPGA development, PCB layout, and electronic circuit design.
                </li>
                <li>
                  <strong>Hong Weiqi (Hardware Engineer):</strong> Focuses on microcontroller design and analog systems. 
                  Key expertise: hardware testing and embedded system development.
                </li>
                <li>
                  <strong>Lin Yuanhua (AI Engineer):</strong> Innovator in intelligent algorithm design and AI-hardware integration solutions.
                  Proficiencies: AI algorithm development and system optimization.
                </li>
              </ul>
            </motion.section>

            {/* 发展里程碑 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Milestones</h2>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Q4 2024: Company founded, core team established.</li>
                <li>Q4 2024: Launched first AI-powered email assistant, XMail.</li>
                <li>Q4 2025: Introduced first AI accelerator prototype.</li>
                <li>Q2 2026: Planned completion of first funding round.</li>
                <li>Q4 2026: Expansion into international markets.</li>
              </ul>
            </motion.section>

            {/* 企业承诺 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-300">
                XIXI TECH is committed to:
              </p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Continuous innovation in research and development.</li>
                <li>Delivering top-notch products and services.</li>
                <li>Fostering professional talent in cutting-edge fields.</li>
                <li>Creating value for the industry and society.</li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}