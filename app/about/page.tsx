"use client";

import { Heart, Utensils, Users, Award, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Passion for Flavor",
    desc: "Every dish is a labor of love, crafted with the freshest ingredients and time-honored techniques from around the world.",
  },
  {
    icon: Utensils,
    title: "Multicuisine Mastery",
    desc: "From robust Indian curries to delicate Continental preparations and bold Chinese wok flavors — we celebrate global cuisine.",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    desc: "At QUINOA, you're not just a guest — you're family. Our team is dedicated to making every visit special and memorable.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "We source premium ingredients, maintain exacting standards, and never cut corners. Excellence is our minimum benchmark.",
  },
];

const milestones = [
  { year: "2023", title: "The Beginning", desc: "QUINOA opens its doors in Kahilipara, Guwahati — a dream realized." },
  { year: "2023", title: "First 100 Reviews", desc: "Overwhelmed by love from our guests, reaching 100 Google reviews." },
  { year: "2024", title: "Menu Expansion", desc: "Introducing Continental & expanded Chinese menu based on guest feedback." },
  { year: "2025", title: "499 Reviews & Counting", desc: "4.1★ rating on Google — a testament to consistent quality and love." },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-cormorant text-gold/80 text-sm tracking-[0.4em] uppercase mb-4">
              ✦ Our Story ✦
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-cream">
              About Quinoa
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
              Where culinary artistry meets heartfelt hospitality
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Decorative Image Area */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy border border-gold/10 h-[400px] sm:h-[500px] flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.08)_0%,transparent_70%)]" />
                  <div className="text-center p-8 relative z-10">
                    <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <Sparkles size={36} className="text-gold/60" />
                    </div>
                    <p className="font-playfair text-4xl font-bold text-gold-gradient mb-2">QUINOA</p>
                    <p className="font-cormorant text-cream/40 text-lg tracking-widest uppercase">Est. 2023</p>
                  </div>
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gold/10 backdrop-blur-sm border border-gold/20 flex items-center justify-center">
                  <p className="font-playfair text-2xl font-bold text-gold">4.1★</p>
                </div>
              </div>
            </FadeIn>

            {/* Right — Text */}
            <div>
              <FadeIn>
                <p className="font-cormorant text-gold text-sm tracking-[0.3em] uppercase mb-4">
                  The Quinoa Story
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-cream leading-tight mb-6">
                  Born from a Love
                  <br />
                  <span className="text-gold-gradient">for Great Food</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="w-16 h-[1px] bg-gold mb-6" />
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                  QUINOA was born from a simple yet profound belief — that extraordinary
                  food deserves an extraordinary setting. Nestled in the heart of Kahilipara,
                  Guwahati, we opened our doors with a vision to create a dining destination
                  that celebrates the art of multicuisine cooking.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                  Our name, inspired by the ancient superfood quinoa, represents our
                  commitment to quality, nourishment, and the perfect blend of tradition
                  and innovation. Every dish on our menu is thoughtfully crafted, every
                  ingredient carefully sourced, and every presentation meticulously designed.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed">
                  Today, with nearly 500 glowing Google reviews and a loyal community
                  of food lovers, QUINOA stands as a beloved culinary landmark in Guwahati —
                  and we&apos;re just getting started.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="The principles that guide every plate we serve and every guest we welcome"
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-card rounded-xl p-8 h-full flex gap-5 group hover:border-gold/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                    <v.icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-cream mb-2">
                      {v.title}
                    </h3>
                    <p className="font-inter text-text-secondary text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gold/20 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-navy-deep -translate-x-1/2 mt-2 z-10" />
                    
                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <span className="font-cormorant text-gold text-xl font-semibold">{m.year}</span>
                      <h3 className="font-playfair text-lg font-semibold text-cream mt-1 mb-2">{m.title}</h3>
                      <p className="font-inter text-text-secondary text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
              Come, Be Part of
              <br />
              <span className="text-gold-gradient">Our Story</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservations"
                className="btn-gold px-8 py-3.5 rounded-sm text-sm font-inter font-semibold tracking-widest uppercase"
              >
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-gold font-inter text-sm font-medium tracking-wider uppercase hover:gap-3 transition-all duration-300"
              >
                View Our Menu <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
