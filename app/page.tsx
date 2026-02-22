"use client";
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LandingPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    // Table name: ensure your Supabase table is named "bookings" (lowercase).
    // If your table has a different name (e.g. "booking", "Bookings"), change it here.
    const { error: err } = await supabase
      .from('bookings')
      .insert([{ name, phone, service_type: 'Standard Service' }]);

    if (err) {
      console.error('Supabase error:', {
        message: err.message,
        details: err.details,
        hint: err.hint,
        code: err.code,
        full: err,
      });
      const msg = err.message;
      const isFailedFetch = msg.includes('Failed to fetch') || msg.includes('fetch');
      setError(
        isFailedFetch
          ? 'Network error: Cannot reach Supabase. Check: (1) Project not paused at supabase.com/dashboard (2) Correct URL in .env.local (3) Internet connection'
          : `Error: ${msg}`
      );
    } else {
      setSuccess(true);
      setName('');
      setPhone('');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 flex justify-between items-center border-b border-gray-200 bg-white">
        <h1 className="text-2xl font-black text-blue-600">RoBazaar</h1>
      </nav>

      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">RO Service in 90 Mins</h2>

        {success && (
          <div className="mt-6 max-w-sm mx-auto p-4 bg-green-100 border border-green-400 text-green-800 rounded-xl font-semibold">
            Booking Successful!
          </div>
        )}

        {error && (
          <div className="mt-6 max-w-sm mx-auto p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl font-semibold">
            {error}
          </div>
        )}

        <div className="mt-8 max-w-sm mx-auto bg-white rounded-2xl shadow-lg shadow-gray-200 p-6">
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
              {loading ? 'Booking...' : 'Book Service Now'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
