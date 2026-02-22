import Link from "next/link";
import { Wrench, Shield, Truck, ArrowRight } from "lucide-react";

const services = [
  {
    id: "repair",
    icon: Wrench,
    title: "RO Repair",
    description: "Expert repair for all RO water purifier brands. We fix leaks, low flow, taste issues, and component failures. Same-day service available.",
    features: ["Same-day service", "All brands supported", "90-min response", "Genuine parts"],
  },
  {
    id: "amc",
    icon: Shield,
    title: "AMC (Annual Maintenance)",
    description: "Keep your RO purifier in top shape with our Annual Maintenance Contract. Regular servicing, filter replacement, and priority support.",
    features: ["Quarterly servicing", "Free filter replacement", "Priority support", "Best value plans"],
  },
  {
    id: "installation",
    icon: Truck,
    title: "Installation",
    description: "Professional installation of new RO water purifiers. We ensure correct setup, plumbing, and optimal performance from day one.",
    features: ["Professional setup", "Free plumbing", "Demo included", "Warranty support"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            Comprehensive RO water purifier solutions for your home and office.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl shadow-lg shadow-gray-200 p-8 md:p-10 hover:shadow-xl transition-shadow"
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
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
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
