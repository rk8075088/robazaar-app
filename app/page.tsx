"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";

const brands = ["Kent", "Aquaguard", "Pureit", "Livpure"];

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
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up opacity-0">
          RO Service in 90 Mins
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 animate-delay-100">
          Book expert RO installation, filter replacement, or AMC. Fast, reliable, and affordable.
        </p>
        <div className="animate-fade-in-up opacity-0 animate-delay-200">
          <Link
            href="/#book"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 btn-glow"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-8 px-4 animate-fade-in-up opacity-0 animate-delay-300">
        <p className="text-center text-sm font-medium text-gray-500 mb-4">Trusted by top brands</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {brands.map((brand, i) => (
            <span
              key={brand}
              className="px-5 py-2 rounded-xl glass text-gray-700 font-semibold text-sm md:text-base"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-md mx-auto">
          {success && (
            <div className="mb-6 p-4 bg-green-100/90 backdrop-blur border border-green-400/50 text-green-800 rounded-xl font-semibold text-center animate-fade-in-up">
              Booking Successful!
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100/90 backdrop-blur border border-red-400/50 text-red-800 rounded-xl font-semibold text-center animate-fade-in-up">
              {error}
            </div>
          )}
          <div className="glass-strong rounded-2xl shadow-xl p-6 md:p-8 animate-fade-in-up opacity-0 animate-delay-400">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Book Your Service</h2>
            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-white/60 rounded-xl text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full p-3 border border-white/60 rounded-xl text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-70 btn-glow"
              >
                {loading ? "Booking..." : "Book Service Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up opacity-0 animate-delay-500">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((r, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 shadow-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
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
      <section className="py-12 px-4 text-center bg-blue-600/90 backdrop-blur text-white">
        <h2 className="text-2xl font-bold mb-2">Ready to book?</h2>
        <p className="mb-6">Get clean water in 90 minutes.</p>
        <Link
          href="/#book"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 btn-glow"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}
