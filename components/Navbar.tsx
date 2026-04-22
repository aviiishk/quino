"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-navy-deep/95 backdrop-blur-xl shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative">
                <span className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">
                  QU
                </span>
                <span className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">
                  I
                </span>
                <span className="font-playfair text-2xl sm:text-3xl font-bold tracking-wider text-gold-gradient">
                  NOA
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-inter font-medium tracking-wider uppercase transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[1px] bg-gold"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/reservations"
                className="hidden sm:inline-flex btn-gold px-5 py-2.5 rounded-sm text-xs font-inter font-semibold tracking-widest uppercase"
              >
                Reserve a Table
              </Link>

              <button
                onClick={() => setIsMobileOpen(true)}
                className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-navy-deep/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-playfair text-2xl font-bold text-gold-gradient">
                QUINOA
              </span>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-cream hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-playfair font-medium tracking-wider py-3 transition-colors ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/reservations"
                  className="btn-gold px-8 py-3 rounded-sm text-sm font-inter font-semibold tracking-widest uppercase"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </nav>

            <div className="px-6 py-8 text-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm"
              >
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
