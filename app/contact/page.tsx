"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Get in touch for inquiries, support, or service bookings.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+9188788889789" className="text-gray-600 hover:text-blue-600">+91 88788 88989</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:hello@robazaar.com" className="text-gray-600 hover:text-blue-600">hello@robazaar.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">Delhi NCR, India</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Inquiry Form</h3>
              {sent ? (
                <div className="p-4 bg-green-100 text-green-800 rounded-xl font-medium">
                  Thank you! Your message has been sent. We will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
