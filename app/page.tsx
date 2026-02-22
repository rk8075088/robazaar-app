"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Star } from "lucide-react";

const brandLogos = [
  { name: "Kent", url: "https://logo.clearbit.com/kent.co.in" },
  { name: "Aquaguard", url: "https://logo.clearbit.com/eurekaforbes.com" },
  { name: "Pureit", url: "https://logo.clearbit.com/pureitwater.com" },
  { name: "Livpure", url: "https://logo.clearbit.com/livpure.com" },
  { name: "Blue Star", url: "https://logo.clearbit.com/bluestarindia.com" },
  { name: "Havells", url: "https://logo.clearbit.com/havells.com" },
];

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
    <div className="min-h-screen text-gray-900 bg-gradient-to-b from-blue-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between bg-white/60 backdrop-blur border-b border-white/70 shadow-sm">
          <div className="text-2xl font-black italic tracking-wide">ROBAZAAR</div>
          <a href="tel:+918227080442" className="text-blue-600 font-semibold hover:text-blue-700">
            +91 8227080442
          </a>
        </div>
      </div>

      <section className="pt-20 md:pt-24 py-16 md:py-24 px-4 text-center">
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

      <section className="py-8 px-4 animate-fade-in-up opacity-0 animate-delay-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Brands We Service</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center">
            {brandLogos.map((b) => (
              <div key={b.name} className="flex items-center justify-center p-4 bg-white/70 backdrop-blur rounded-xl shadow-sm border border-white/70">
                <img src={b.url} alt={b.name} className="h-10 md:h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <div className="rounded-2xl border border-white/70 bg-white/40 backdrop-blur-md shadow-lg p-6 md:p-8 animate-fade-in-up opacity-0 animate-delay-400">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Book Your Service</h2>
            <form onSubmit={handleBooking} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border border-white/70 rounded-xl text-gray-900 placeholder-gray-500 bg-white/60 backdrop-blur"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                className="w-full p-3 border border-white/70 rounded-xl text-gray-900 placeholder-gray-500 bg-white/60 backdrop-blur"
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
      <footer className="py-12 px-4">
        <div className="max-w-6xl mx-auto rounded-2xl border border-white/70 bg-white/60 backdrop-blur p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:rj8075088@gmail.com" className="text-blue-600 hover:text-blue-700">
                  rj8075088@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                Phone:{" "}
                <a href="tel:+918227080442" className="text-blue-600 hover:text-blue-700">
                  +91 8227080442
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-700">Service Areas: Coming Soon</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
