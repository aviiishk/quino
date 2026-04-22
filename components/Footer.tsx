import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep border-t border-gold/10">
      {/* Decorative gold line */}
      <div className="gold-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-playfair text-3xl font-bold text-gold-gradient mb-2">
                QUINOA
              </h3>
              <p className="font-cormorant text-sm text-gold/60 tracking-widest uppercase">
                Multicuisine Dine Inn
              </p>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed font-inter">
              An exquisite dining experience where every flavor tells a story.
              Premium multicuisine restaurant in the heart of Guwahati.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/quinoa_guwahati"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="mailto:quinoa@gmail.com"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm font-inter hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-text-secondary text-sm font-inter leading-relaxed">
                  Kahilipara Main Rd, Kahilipara,
                  <br />
                  Guwahati, Assam 781019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-text-secondary text-sm font-inter hover:text-gold transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-text-secondary text-sm font-inter leading-relaxed">
                  <p>Mon – Sun: 11 AM – 10 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-6">
              Find Us
            </h4>
            <div className="rounded-lg overflow-hidden border border-gold/10 h-[180px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8!2d91.7693308!3d26.1441339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59c5e494388d%3A0xabc0fe3c3947679e!2sQUINOA!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QUINOA location"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-secondary/50 text-xs font-inter">
              © {new Date().getFullYear()} QUINOA — Multicuisine Dine Inn. All
              rights reserved.
            </p>
            <p className="text-text-secondary/30 text-xs font-inter">
              Crafted with passion in Guwahati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
