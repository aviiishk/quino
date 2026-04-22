"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Navigation,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Kahilipara Main Rd, Kahilipara", "Guwahati, Assam 781019"],
    action: { label: "Get Directions", href: "https://maps.google.com/?q=QUINOA+Guwahati" },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210"],
    action: { label: "Call Now", href: "tel:+919876543210" },
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Monday – Sunday", "11:00 AM – 10:00 PM"],
    action: null,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["quinoa@gmail.com"],
    action: { label: "Send Email", href: "mailto:quinoa@gmail.com" },
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-cormorant text-gold/80 text-sm tracking-[0.4em] uppercase mb-4">
              ✦ Get in Touch ✦
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-cream">
              Contact Us
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-5 font-cormorant text-xl sm:text-2xl text-cream/60 italic">
              We&apos;d love to hear from you
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title}>
                <div className="glass-card rounded-xl p-6 h-full text-center hover:border-gold/30 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <info.icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-cream mb-3">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="font-inter text-text-secondary text-sm">
                      {line}
                    </p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold text-xs font-inter font-medium tracking-wider uppercase mt-4 hover:gap-2.5 transition-all duration-300"
                    >
                      {info.action.label}
                      <Navigation size={12} />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map */}
            <FadeIn direction="left">
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-gold/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.8!2d91.7693308!3d26.1441339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59c5e494388d%3A0xabc0fe3c3947679e!2sQUINOA!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)",
                    minHeight: "400px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="QUINOA location map"
                />
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="right">
              <div className="glass-card rounded-2xl p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-cream mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-inter text-text-secondary text-sm mb-6">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="btn-outline-gold px-6 py-2.5 rounded-sm text-xs font-inter tracking-widest uppercase"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-playfair text-2xl font-bold text-cream mb-2">
                        Send Us a Message
                      </h3>
                      <p className="font-inter text-text-secondary text-sm">
                        Questions, feedback, or private event inquiries — we&apos;re all ears.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full input-premium rounded-lg px-4 py-3 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your email"
                            className="w-full input-premium rounded-lg px-4 py-3 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm font-inter focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-navy text-text-secondary">Select subject</option>
                          <option value="General Inquiry" className="bg-navy text-cream">General Inquiry</option>
                          <option value="Feedback" className="bg-navy text-cream">Feedback</option>
                          <option value="Private Event" className="bg-navy text-cream">Private Event Booking</option>
                          <option value="Catering" className="bg-navy text-cream">Catering Services</option>
                          <option value="Collaboration" className="bg-navy text-cream">Collaboration</option>
                          <option value="Complaint" className="bg-navy text-cream">Complaint</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Tell us what's on your mind..."
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg px-4 py-3 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-gold py-3.5 rounded-lg text-sm font-inter font-semibold tracking-widest uppercase flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-cream mb-4">
              Follow Us for Updates
            </h3>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-inter text-text-secondary text-sm mb-8">
              Stay connected for menu updates, events, and behind-the-scenes moments
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/quinoa_guwahati"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/40 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <span className="group-hover:scale-110 transition-transform inline-flex">
                  <InstagramIcon size={22} />
                </span>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/40 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <span className="group-hover:scale-110 transition-transform inline-flex">
                  <FacebookIcon size={22} />
                </span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/40 transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <span className="group-hover:scale-110 transition-transform inline-flex">
                  <MessageSquare size={22} />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
