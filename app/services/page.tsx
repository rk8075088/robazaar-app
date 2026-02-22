import Link from "next/link";
import { Truck, Filter, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    id: "installation",
    icon: Truck,
    title: "RO Installation",
    description: "Professional installation of new RO water purifiers. We handle plumbing, setup, and ensure optimal performance from day one. All major brands supported.",
    features: ["Professional setup", "Free plumbing", "Demo included", "Warranty support"],
  },
  {
    id: "filter",
    icon: Filter,
    title: "Filter Replacement",
    description: "Replace worn-out RO filters to restore water quality. We use genuine filters and ensure proper installation for maximum purification.",
    features: ["Genuine filters", "Same-day service", "All brands", "Quality assured"],
  },
  {
    id: "amc",
    icon: Shield,
    title: "AMC (Annual Maintenance)",
    description: "Keep your RO purifier in top shape with our Annual Maintenance Contract. Quarterly servicing, filter replacement, and priority support included.",
    features: ["Quarterly servicing", "Free filter replacement", "Priority support", "Best value plans"],
  },
];

export default function ServicesPage() {
  return (
    <div className="text-gray-900 min-h-screen py-8">
      <section className="py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up opacity-0">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto animate-fade-in-up opacity-0 animate-delay-100">
          Comprehensive RO water purifier solutions for your home and office.
        </p>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-strong rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 scroll-mt-24 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${200 + idx * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#book"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 btn-glow px-4 py-2 rounded-lg"
                    >
                      Book Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
