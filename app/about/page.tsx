import { Droplets, Heart, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About RoBazaar</h1>
          <p className="text-xl text-blue-600 font-semibold">Our commitment to clean water</p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              RoBazaar was founded with a simple mission: to make clean, safe drinking water accessible to every home.
              We believe that every family deserves water they can trust—without the hassle of long waits or unreliable service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of certified technicians brings years of experience in RO water purifier service, repair, and installation.
              We work with all major brands and ensure that every job is done right the first time. When you book with RoBazaar,
              you get a 90-minute service promise—because we know your time matters.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From quick repairs to full installations and annual maintenance plans, we are here to keep your water pure.
              Trust RoBazaar for professional, transparent, and dependable service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Pure Water</h3>
              <p className="text-sm text-gray-600">Quality service for quality water you can drink with confidence.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-sm text-gray-600">Your satisfaction drives everything we do.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Trusted Service</h3>
              <p className="text-sm text-gray-600">Professional, on-time, and transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
