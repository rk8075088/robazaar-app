"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Users, RefreshCw, Loader2 } from "lucide-react";

type Booking = {
  id: string;
  name: string;
  phone: string;
  service_type: string;
  created_at: string | null;
};

export default function AdminPanel() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase
        .from("bookings")
        .select("id, name, phone, service_type, created_at")
        .order("created_at", { ascending: false });

      if (err) {
        console.error("Admin fetch error:", err);
        setError(err.message);
        setBookings([]);
      } else {
        setBookings(data ?? []);
      }
    } catch (e) {
      console.error("Admin fetch exception:", e);
      setError("Failed to load bookings. Check console for details.");
      setBookings([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const formatDate = (iso: string | null) => {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-600" />
            Admin – Bookings
          </h1>
          <button
            onClick={fetchBookings}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-70"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw size={18} />}
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-xl">
            <p className="font-semibold">{error}</p>
            <p className="text-sm mt-2">
              To fix: Run this in Supabase SQL Editor:
            </p>
            <code className="block mt-1 p-2 bg-red-200 rounded text-xs overflow-x-auto">
              CREATE POLICY &quot;Allow anon select&quot; ON public.bookings FOR SELECT TO anon USING (true);
            </code>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 overflow-hidden">
          {loading && bookings.length === 0 ? (
            <div className="p-12 text-center">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Loading bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-12 text-center text-gray-600">
              No bookings yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-4 font-semibold text-gray-900">Name</th>
                    <th className="text-left px-4 py-4 font-semibold text-gray-900">Phone</th>
                    <th className="text-left px-4 py-4 font-semibold text-gray-900">Service</th>
                    <th className="text-left px-4 py-4 font-semibold text-gray-900">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-4 text-gray-900">{b.name}</td>
                      <td className="px-4 py-4 text-gray-700">
                        <a href={`tel:${b.phone}`} className="hover:text-blue-600">{b.phone}</a>
                      </td>
                      <td className="px-4 py-4 text-gray-700">{b.service_type}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{formatDate(b.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
