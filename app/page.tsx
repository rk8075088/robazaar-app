"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const { error: err } = await supabase
      .from("bookings")
      .insert([{ name, phone, service_type: "Standard Service" }]);

    if (err) {
      console.error("Supabase error:", err);
      const msg = err.message;
      const isFailedFetch = msg.includes("Failed to fetch") || msg.includes("fetch");
      setError(
        isFailedFetch
          ? "Network error: Cannot reach Supabase. Check project status, .env.local, and internet."
          : `Error: ${msg}`
      );
    } else {
      setSuccess(true);
      setName("");
      setPhone("");
    }
    setLoading(false);
  };

  const testimonials = [
    { name: "Rajesh K.", text: "Excellent service! My RO was fixed same day. Highly recommend RoBazaar.", rating: 5 },
    { name: "Priya S.", text: "Professional and on-time. Water quality improved significantly.", rating: 5 },
    { name: "Amit M.", text: "Best AMC plan in town. Worth every rupee.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 text-center bg-gradient-to-b from-blue-50 to-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          RO Service in 90 Mins
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Book expert RO installation, filter replacement, or AMC. Fast, reliable, and affordable.
        </p>
        <Link
          href="/#book"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Book Now
        </Link>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-md mx-auto">
          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-xl font-semibold text-center">
              Booking Successful!
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl font-semibold text-center">
              {error}
            </div>
          )}
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Book Your Service</h2>
            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 bg-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70 transition-colors"
              >
                {loading ? "Booking..." : "Book Service Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center bg-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to book?</h2>
        <p className="mb-6">Get clean water in 90 minutes.</p>
        <Link
          href="/#book"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
