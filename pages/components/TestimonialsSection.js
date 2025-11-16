"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const reviews = [
    { name: "Suresh K.", text: "Quick, careful and affordable. Packed everything safely and delivered on time." },
    { name: "Meena R.", text: "Excellent team. They handled my glassware and showpieces with great care." },
    { name: "Rao V.", text: "Best price in Hyderabad and professional staff. Highly recommended." },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">What our customers say</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">We love happy customers — here are a few recent notes.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-6 rounded-xl border shadow-sm">
              <p className="text-gray-700">“{t.text}”</p>
              <div className="mt-4 font-semibold">— {t.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg">Ready for a smooth move?</p>
          <a href="/contact" className="inline-block mt-4 px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition">Get a free quote</a>
        </div>
      </div>
    </section>
  );
}
