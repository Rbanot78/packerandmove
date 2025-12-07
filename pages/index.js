// pages/index.jsx
import React from "react";
import Head from "next/head";
import path from "path";
import fs from "fs/promises";

import HeroSection from "./components/HeroSection"; 
import PackagingSection from "./components/PackagingSection"; 
import TestimonialsSection from "./components/TestimonialsSection";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "homeSeo.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const seoContent = JSON.parse(jsonData);

  return {
    props: {
      seoContent,
    },
  };
}

export default function Home({ seoContent }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    alert(
      `Thanks ${data.name}! We received your inquiry for \nService: ${data.service} \nPhone: ${data.phone}`
    );
    e.currentTarget.reset();
  }

  return (
    <>
      <Head>
        <title>
          House Packers and Movers in Hyderabad | Anil Packer and Movers
        </title>
        <meta
          name="description"
          content="Anil Packer and Movers provides affordable house shifting, office relocation and bike transport services in Hyderabad. Door-to-door packers and movers with safe packing, on-time delivery and trusted service."
        />
        <meta
          name="keywords"
          content="house packers and movers in Hyderabad, best packers and movers Hyderabad, home shifting Hyderabad, local shifting Hyderabad, bike transport Hyderabad, office shifting Hyderabad"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
        <HeroSection onSubmit={handleSubmit} />
        <PackagingSection />
        <TestimonialsSection />

        {/* SEO Content loaded via SSR from JSON */}
        <section className="bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-6 text-gray-800">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {seoContent.title}
            </h2>

            {seoContent.paragraphs.map((p, index) => (
              <p
                key={index}
                className="text-sm sm:text-base leading-relaxed text-gray-700"
              >
                {p}
              </p>
            ))}

            <h3 className="text-xl font-semibold mt-4">
              Why Choose Our Packers and Movers?
            </h3>

            <ul className="list-disc pl-5 text-sm sm:text-base space-y-1 text-gray-700">
              {seoContent.features.map((f, index) => (
                <li key={index}>{f}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
