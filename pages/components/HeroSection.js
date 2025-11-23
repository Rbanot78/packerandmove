"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

/**
 * Configure these via environment variables (recommended)
 * NEXT_PUBLIC_EMAILJS_SERVICE_ID
 * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *
 * Or replace with the literal IDs (not recommended for public repos).
 */

export default function HeroSection() {
  const services = [
    "Door-to-door House Shifting",
    "Corporate Office Move",
    "Bike Packing & Transport",
    "Best Shifting Services in Hyderabad",
    "Most Affordable Rates in Market",
  ];

  // EmailJS config (prefer env variables)
  const SERVICE_ID = "service_fgsc9rj" ;
  const TEMPLATE_ID = "template_r8d94in" ;
  const PUBLIC_KEY = "JeFWuGFCPQe26o05-";

  // initialize once
  useEffect(() => {
    if (PUBLIC_KEY && PUBLIC_KEY !== "TieYYD_XbM3ALsikD6Gj1") {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % services.length), 2400);
    return () => clearInterval(t);
  }, [services.length]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    setStatusMessage("");

    // Basic client-side validation (you can extend)
    const form = formRef.current;
    if (!form) {
      setStatus("error");
      setStatusMessage("Form not available.");
      setSending(false);
      return;
    }

    // Prepare template parameters (match keys used in your EmailJS template)
    const templateParams = {
      from_name: form.name.value || "",
      phone: form.phone.value || "",
      service: form.service.value || "",
      message: form.message.value || "",
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Ensure EmailJS is initialized (or use send with public key param)
      // Using emailjs.send(serviceID, templateID, templateParams)
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      // res.status === 200 on success
      if (res.status === 200) {
        setStatus("ok");
        setStatusMessage("Request received — email sent.");
        form.reset();
      } else {
        throw new Error("EmailJS returned status " + res.status);
      }
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
      setStatusMessage(err.text || err.message || "Failed to send. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold leading-tight">
          Reliable, fast and safe shifting — wherever you go.
        </motion.h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          We specialise in house, office and bike moving with trained staff, robust packing and transparent pricing. Serving
          Hyderabad and beyond with punctual, insured moves.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm">Our Services</span>

          <div className="overflow-hidden h-8">
            <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="text-lg font-medium text-gray-800">
              {services[index]}
            </motion.div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-gray-700">• End-to-end insured moves — no hidden costs.</p>
          <p className="text-gray-700">• Professional packers, careful handling, on-time delivery.</p>
          <p className="text-gray-700">• Instant quotes & flexible booking slots.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-lg border border-gray-200" />
          <input name="phone" required placeholder="Phone number" className="px-4 py-3 rounded-lg border border-gray-200" />

          <select name="service" defaultValue={services[0]} className="px-4 py-3 rounded-lg border border-gray-200 sm:col-span-2">
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <textarea name="message" rows={3} placeholder="Short message (optional)" className="px-4 py-3 rounded-lg border border-gray-200 sm:col-span-2" />

          <button
            type="submit"
            disabled={sending}
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition disabled:opacity-60"
          >
            {sending ? "Sending..." : "Request a Quote"}
          </button>

          {status === "ok" && (
            <div className="sm:col-span-2 text-green-700 bg-green-50 px-3 py-2 rounded">{statusMessage}</div>
          )}
          {status === "error" && (
            <div className="sm:col-span-2 text-red-700 bg-red-50 px-3 py-2 rounded">Error: {statusMessage}</div>
          )}
        </form>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="w-full rounded-xl overflow-hidden shadow-lg">
          <img src="/images/herosection.jpg" alt="moving" className="w-full h-80 " />
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="absolute -bottom-6 left-6 bg-white rounded-xl p-4 shadow-md w-64 border">
          <h4 className="font-semibold">Why choose us</h4>
          <p className="text-sm text-gray-600 mt-2">Experienced crews · Transparent pricing · Quick bookings</p>

          <div className="mt-3 flex gap-2">
            <span className="px-2 py-1 text-sm rounded bg-green-50 text-green-700">Insured</span>
            <span className="px-2 py-1 text-sm rounded bg-blue-50 text-blue-700">Trusted</span>
            <span className="px-2 py-1 text-sm rounded bg-orange-50 text-orange-700">Fast</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
