"use client";

import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Phone, CheckCircle, ClipboardList, Star, ChevronDown, ChevronUp } from "lucide-react";

export default function HomePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const process = [
    { step: 1, icon: ClipboardList, title: "Book Online", text: "Fill the form and get instant confirmation." },
    { step: 2, icon: Phone, title: "We Call", text: "Our team confirms your slot within minutes." },
    { step: 3, icon: CheckCircle, title: "Service Done", text: "Expert technician arrives in 90 mins." },
  ];

  const reviews = [
    { name: "Rajesh K.", text: "Excellent service! My RO was fixed same day. Highly recommend RoBazaar.", rating: 5 },
    { name: "Priya S.", text: "Professional and on-time. Water quality improved significantly.", rating: 5 },
    { name: "Amit M.", text: "Best AMC plan in town. Worth every rupee.", rating: 5 },
  ];

  const faqs = [
    { q: "How quickly can you service my RO?", a: "We promise service within 90 minutes of booking. Same-day slots are available." },
    { q: "Do you service all RO brands?", a: "Yes, we service all major brands including Kent, Aquaguard, Pureit, Livpure, and more." },
    { q: "What does the AMC include?", a: "AMC includes quarterly servicing, filter replacement, and priority support for repairs." },
    { q: "Is installation free?", a: "Yes, installation is free with purchase. We also offer free plumbing if needed." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">RO Service in 90 Mins</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Book expert RO repair, AMC, or installation. Fast, reliable, and affordable.
        </p>

        {success && (
          <div className="max-w-sm mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-xl font-semibold">
            Booking Successful!
          </div>
        )}

        {error && (
          <div className="max-w-sm mx-auto mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl font-semibold">
            {error}
          </div>
        )}

        <div id="book" className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg shadow-gray-200 p-6 scroll-mt-24">
          <form onSubmit={handleBooking} className="space-y-4">
            <input
              type="text"
              placeholder="Aapka Naam"
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
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map(({ step, icon: Icon, title, text }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{r.text}"</p>
                <p className="font-semibold text-gray-900">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-4 py-4 flex justify-between items-center text-left font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center bg-blue-600 text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to book?</h2>
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
