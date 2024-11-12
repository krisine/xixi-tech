'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export default function LatestNewsPage() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'XIXI TECH Launches Revolutionary AI-Powered Smart Home System',
      date: '2024-03-15',
      excerpt:
        'Our latest product integrates cutting-edge AI technology with home automation, setting a new standard for smart living.',
      category: 'Product Launch',
    },
    {
      id: 2,
      title: 'XIXI TECH Secures $50 Million in Series B Funding',
      date: '2024-02-28',
      excerpt:
        'This significant investment will fuel our expansion into new markets and accelerate our R&D efforts in AI and hardware integration.',
      category: 'Company News',
    },
    {
      id: 3,
      title: 'XIXI TECH Partners with Leading Automotive Manufacturer',
      date: '2024-02-10',
      excerpt:
        'Our AI solutions will be integrated into next-generation vehicles, enhancing safety and user experience.',
      category: 'Partnership',
    },
    {
      id: 4,
      title: "XIXI TECH Wins 'Most Innovative AI Company' Award",
      date: '2024-01-20',
      excerpt:
        "We're honored to receive this prestigious award, recognizing our commitment to pushing the boundaries of AI technology.",
      category: 'Award',
    },
    {
      id: 5,
      title: 'XIXI TECH Announces New AI Ethics Board',
      date: '2024-01-05',
      excerpt:
        "As part of our commitment to responsible AI development, we've established an independent ethics board to guide our practices.",
      category: 'Company News',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>
          <div className="grid gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold mb-2 md:mb-0">
                    {item.title}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <span className="px-2 py-1 bg-blue-600 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
