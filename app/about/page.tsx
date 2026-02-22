import { Clock, Shield, Droplets } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="text-gray-900 min-h-screen py-8">
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up opacity-0">
          About RoBazaar
        </h1>
        <p className="text-xl text-blue-600 font-semibold text-center animate-fade-in-up opacity-0 animate-delay-100">
          Your trusted RO service partner
        </p>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="glass-strong rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up opacity-0 animate-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/80 flex items-center justify-center">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">90-Minute Service Guarantee</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At RoBazaar, we promise to reach you within 90 minutes of your booking. We know that clean water can&apos;t wait,
              and neither should you. Our team is trained and equipped to serve you quickly and professionally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you need installation, filter replacement, or annual maintenance, we are committed to the same
              standard: fast, reliable, and transparent service. Your satisfaction is our guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center shadow-lg animate-fade-in-up opacity-0 animate-delay-300">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">90-Min Response</h3>
              <p className="text-sm text-gray-600">We reach you within 90 minutes, every time.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center shadow-lg animate-fade-in-up opacity-0 animate-delay-400">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">Genuine parts and expert workmanship.</p>
            </div>
            <div className="glass rounded-xl p-6 text-center shadow-lg animate-fade-in-up opacity-0 animate-delay-500">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clean Water</h3>
              <p className="text-sm text-gray-600">Pure water you can trust for your family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
