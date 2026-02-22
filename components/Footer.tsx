import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">RoBazaar</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner for RO water purifier service, repair, and installation. Clean water in 90 minutes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#book" className="hover:text-blue-600 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#repair" className="hover:text-blue-600 transition-colors">RO Repair</Link></li>
              <li><Link href="/services#amc" className="hover:text-blue-600 transition-colors">AMC</Link></li>
              <li><Link href="/services#installation" className="hover:text-blue-600 transition-colors">Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <a href="tel:+9188788889789" className="hover:text-blue-600">+91 88788 88989</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <a href="mailto:hello@robazaar.com" className="hover:text-blue-600">hello@robazaar.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-600 mt-0.5" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RoBazaar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
