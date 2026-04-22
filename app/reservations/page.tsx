"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Users,
  Calendar,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/components/ScrollAnimations";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual QUINOA WhatsApp number

const timeSlots = [
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
  "9:00 PM", "9:30 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    occasion: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const message = [
      `🍽️ *QUINOA — Table Reservation*`,
      ``,
      `👤 *Name:* ${formData.name}`,
      `📱 *Phone:* ${formData.phone}`,
      `👥 *Guests:* ${formData.guests}`,
      `📅 *Date:* ${formData.date}`,
      `🕐 *Time:* ${formData.time}`,
      formData.occasion ? `🎉 *Occasion:* ${formData.occasion}` : "",
      formData.notes ? `📝 *Notes:* ${formData.notes}` : "",
      ``,
      `Please confirm my reservation. Thank you! 🙏`,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-cormorant text-gold/80 text-sm tracking-[0.4em] uppercase mb-4">
              ✦ Your Table Awaits ✦
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-cream">
              Reservations
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
              Reserve via WhatsApp — we&apos;ll personally confirm your table
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <FadeIn>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card rounded-2xl p-10 sm:p-14 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-cream mb-4">
                  Request Sent!
                </h2>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  Your reservation request has been sent via WhatsApp.
                  Our team will review it and confirm your table shortly.
                </p>
                <p className="font-inter text-gold text-sm">
                  Please check your WhatsApp for confirmation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", guests: "", date: "", time: "", occasion: "", notes: "" });
                  }}
                  className="mt-8 btn-outline-gold px-6 py-2.5 rounded-sm text-xs font-inter tracking-widest uppercase"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />

                <div className="text-center mb-10">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={24} className="text-gold" />
                  </div>
                  <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-cream mb-2">
                    Book Your Experience
                  </h2>
                  <p className="font-inter text-text-secondary text-sm">
                    Fill in the details below and we&apos;ll send your reservation request via WhatsApp
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Guests + Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Number of Guests *
                      </label>
                      <div className="relative">
                        <Users
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-navy text-text-secondary">
                            Select guests
                          </option>
                          {guestOptions.map((g) => (
                            <option key={g} value={g} className="bg-navy text-cream">
                              {g} {g === "1" ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={minDate}
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Time + Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-navy text-text-secondary">
                            Select time
                          </option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t} className="bg-navy text-cream">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                        Occasion <span className="text-text-secondary/40">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Sparkles
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary/40"
                        />
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-navy text-text-secondary">
                            Select occasion
                          </option>
                          <option value="Birthday" className="bg-navy text-cream">🎂 Birthday</option>
                          <option value="Anniversary" className="bg-navy text-cream">💍 Anniversary</option>
                          <option value="Date Night" className="bg-navy text-cream">❤️ Date Night</option>
                          <option value="Business Dinner" className="bg-navy text-cream">💼 Business Dinner</option>
                          <option value="Family Gathering" className="bg-navy text-cream">👨‍👩‍👧‍👦 Family Gathering</option>
                          <option value="Friends Meetup" className="bg-navy text-cream">🎉 Friends Meetup</option>
                          <option value="Other" className="bg-navy text-cream">✨ Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-inter font-medium text-gold/80 tracking-wider uppercase mb-2">
                      Special Requests <span className="text-text-secondary/40">(Optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={16}
                        className="absolute left-4 top-4 text-text-secondary/40"
                      />
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Window seat, high chair, dietary needs, etc."
                        className="w-full bg-navy-light/50 border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-cream text-sm font-inter placeholder:text-text-secondary/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full btn-gold py-4 rounded-lg text-sm font-inter font-semibold tracking-widest uppercase flex items-center justify-center gap-3"
                    >
                      <Send size={16} />
                      Send via WhatsApp
                    </button>
                    <p className="text-text-secondary/40 text-xs font-inter text-center mt-4">
                      You&apos;ll be redirected to WhatsApp to send your reservation request.
                      Our team will confirm your table within 30 minutes.
                    </p>
                  </div>
                </form>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
