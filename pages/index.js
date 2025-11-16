"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import PackagingSection from "./components/PackagingSection";
import TestimonialsSection from "./components/TestimonialsSection";


export default function Home() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    alert(`Thanks ${data.name}! We received your inquiry for \nService: ${data.service} \nPhone: ${data.phone}`);
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-white">
      <HeroSection onSubmit={handleSubmit} />
      <PackagingSection />
      <TestimonialsSection />
    </div>
  );
}