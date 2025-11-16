import React from "react";

export default function PackagingSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Packaging — how we protect your possessions</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">A short peek into our packing process — professional materials, labelled boxes and secure padding for fragile goods.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow">
            <img src="/images/packing-1.jpg" alt="packing" className="w-full h-96 object-cover" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden shadow">
              <img src="/images/packing-2.jpg" alt="detail" className="w-full h-44 object-cover" />
            </div>

            <div className="rounded-xl overflow-hidden shadow bg-black">
              <video controls className="w-full h-44 object-cover">
                <source src="/videos/packing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
