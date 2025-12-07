// pages/contact.jsx
"use client";

import React from "react";
import Head from "next/head";

export default function ContactPage() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    alert(
      `Thank you, ${data.name}!\n\nWe received your enquiry for "${data.service}".\nWe will call you on ${data.phone} soon.`
    );
    e.currentTarget.reset();
  }

  return (
    <>
      <Head>
        <title>Contact Us | Anil Packer and Movers Hyderabad</title>
        <meta
          name="description"
          content="Contact Anil Packer and Movers for house shifting, office relocation and bike transport in Hyderabad. Get a quick quote on call or WhatsApp."
        />
        <meta
          name="keywords"
          content="contact packers and movers hyderabad, anil packer and movers phone, shifting enquiry form"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero / heading */}
        <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-black text-white py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Contact Anil Packer and Movers
              </h1>
              <p className="mt-3 text-sm md:text-base text-orange-100 max-w-xl">
                Tell us your shifting plan and we’ll share the best quote for
                house, office or bike moving in Hyderabad.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 text-sm">
              <p className="font-semibold">Quick support</p>
              <p className="mt-1 text-orange-100">
                📞 +91 99999 99999
                <br />
                ✉️ support@example.com
              </p>
              <p className="mt-2 text-xs text-orange-100/80">
                Available 7 days a week, 8:00 AM – 9:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact form */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Get a free quote
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Share a few details about your move. Our team will call you with
                pricing and slot availability.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email (optional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    From Location
                  </label>
                  <input
                    name="from"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="e.g. Madhapur, Hyderabad"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    To Location
                  </label>
                  <input
                    name="to"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="e.g. Kondapur, Hyderabad"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Shifting Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Service Type
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    defaultValue="House Shifting"
                  >
                    <option>House Shifting</option>
                    <option>Corporate / Office Move</option>
                    <option>Bike Transport</option>
                    <option>Local Shifting (within city)</option>
                    <option>Outstation Shifting</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                    placeholder="Flat size, lift available, special items, etc."
                  />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-3 mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold text-sm shadow-sm hover:bg-orange-700 transition"
                  >
                    Request Callback
                  </button>
                  <p className="text-xs text-gray-500">
                    We usually respond within{" "}
                    <span className="font-semibold">10–20 minutes</span>.
                  </p>
                </div>
              </form>
            </section>

            {/* Right side */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Call or WhatsApp
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  📞 +91 99999 99999
                  <br />
                  ✉️ support@example.com
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Hyderabad Service Areas
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Madhapur, Gachibowli, Kondapur, Kukatpally, Miyapur, Manikonda,
                  LB Nagar, Secunderabad and more.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mt-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Office Address
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Anil Packer and Movers  
                  <br />
                  Hyderabad, Telangana  
                  <br />
                  India
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}
