'use client';

import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MarketAnalysisPage() {
  const marketShareData = {
    labels: [
      'XIXI TECH',
      'Competitor A',
      'Competitor B',
      'Competitor C',
      'Others',
    ],
    datasets: [
      {
        label: 'Market Share (%)',
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'AI Solutions Market Share',
      },
    },
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
          <h1 className="text-4xl font-bold mb-8 text-center">
            Market Positioning Analysis
          </h1>
          <div className="max-w-4xl mx-auto">
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Our Position in the AI Solutions Market
              </h2>
              <p className="text-gray-300 mb-6">
                XIXI TECH has established itself as a leader in the AI solutions
                market, with a strong focus on innovative products and services
                that cater to the evolving needs of businesses across various
                industries.
              </p>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
                <Bar data={marketShareData} options={options} />
              </div>
            </motion.section>
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Competitive Advantages
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Cutting-edge AI algorithms integrated with robust hardware
                  solutions
                </li>
                <li>
                  Highly scalable platforms suitable for businesses of all sizes
                </li>
                <li>Strong focus on data privacy and security</li>
                <li>Continuous innovation and investment in R&D</li>
                <li>Exceptional customer support and tailored solutions</li>
              </ul>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Future Market Trends
              </h2>
              <p className="text-gray-300 mb-4">
                As the AI solutions market continues to evolve, XIXI TECH is
                well-positioned to capitalize on emerging trends, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Increased demand for edge AI computing</li>
                <li>Growing adoption of AI in IoT devices</li>
                <li>
                  Rising importance of explainable AI in decision-making
                  processes
                </li>
                <li>Expansion of AI applications in new industries</li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
