"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Define TypeScript interface for a review
interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  image: string; // Optional: Image of the reviewer
}

const reviews: Review[] = [
  // Real testimonials will be added here when available
];

const Middle3: React.FC = () => {
  // Hide section if no reviews available
  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-indigo-900 mb-12">Client Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-20 h-20 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{review.name}</h3>
            <div className="flex items-center mb-4 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-gray-600 text-center">{review.review}</p>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Middle3
