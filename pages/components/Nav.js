"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Usage: drop this file into your Next.js app (app/components/Nav.jsx or components/Nav.jsx)
// Make sure Tailwind CSS and Framer Motion are installed. (npm install framer-motion)

export default function Nav() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-orange-700 to-black text-white backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Left: Company logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="flex items-center gap-3"
            >
              {/* Company logo wrapper with orange theme */}
              <div className="p-2 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="w-[84px] h-[120px] object-contain"
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-2xl font-semibold text-white">Anil</h1>
                <p className="text-sm text-orange-100 -mt-1">Packer and Movers</p>
              </div>
            </motion.div>
          </div>

          {/* Middle: Nav links centered */}
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} legacyBehavior>
                    <a className="relative group text-white font-medium px-1 py-2 inline-block">
                      <motion.span
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {link.name}
                      </motion.span>

                      {/* Animated underline (adjusted to an orange -> light gradient) */}
                      <motion.span
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-yellow-300 via-orange-300 to-white rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.28 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}