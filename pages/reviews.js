// pages/reviews.jsx
import path from "path";
import fs from "fs/promises";
import React from "react";
import Head from "next/head";

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "data", "reviews.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const reviews = JSON.parse(jsonData);

  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = reviews.length ? (total / reviews.length).toFixed(1) : "0.0";

  return {
    props: {
      reviews,
      avgRating,
      totalReviews: reviews.length,
    },
  };
}

function StarRating({ rating }) {
  const value = Number(rating) || 0;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= value ? "text-yellow-400" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage({ reviews, avgRating, totalReviews }) {
  return (
    <>
      <Head>
        <title>Customer Reviews | Hyderabad</title>
        <meta
          name="description"
          content="Hyderabad customer reviews for Anil Packer and Movers."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Top banner */}
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-black text-white py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Customer Reviews — Hyderabad
              </h1>
              <p className="mt-3 text-sm md:text-base text-orange-100 max-w-xl">
                Real feedback from door-to-door house shifting, office moves and bike packing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">{avgRating}</span>
                <div>
                  <StarRating rating={avgRating} />
                  <p className="text-sm text-orange-100">
                    Based on {totalReviews}+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Review list */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Hyderabad Reviews</h2>
            <span className="text-sm text-gray-500">
              Showing {reviews.length} reviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {review.area} • {review.serviceType}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <h4 className="mt-3 text-sm font-semibold text-gray-800">
                  {review.title}
                </h4>

                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {review.review}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>{review.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700">
                    Hyderabad
                  </span>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
