"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";

/* ─── Gallery Data ─── */
const galleryCategories = ["All", "Interior", "Food", "Ambiance", "Exterior"];

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  gradient: string;
  accent: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "Interior", title: "The Grand Entrance", desc: "Arched glass doors adorned with golden neon signage", gradient: "from-blue-900/60 via-navy to-navy-deep", accent: "bg-blue-400/20" },
  { id: 2, category: "Food", title: "Butter Chicken Royale", desc: "Our signature dish, plated to perfection", gradient: "from-amber-900/60 via-navy to-navy-deep", accent: "bg-amber-400/20" },
  { id: 3, category: "Interior", title: "Vintage Elegance", desc: "Ornate mirrors and warm ambient lighting", gradient: "from-purple-900/60 via-navy to-navy-deep", accent: "bg-purple-400/20" },
  { id: 4, category: "Food", title: "Sizzling Platter", desc: "Hot off the grill, served on a sizzling cast-iron plate", gradient: "from-red-900/60 via-navy to-navy-deep", accent: "bg-red-400/20" },
  { id: 5, category: "Ambiance", title: "Candle-Lit Evening", desc: "Soft golden glow creating the perfect mood", gradient: "from-yellow-900/60 via-navy to-navy-deep", accent: "bg-yellow-400/20" },
  { id: 6, category: "Exterior", title: "The Blue Facade", desc: "Our iconic deep navy exterior with string lights", gradient: "from-indigo-900/60 via-navy to-navy-deep", accent: "bg-indigo-400/20" },
  { id: 7, category: "Food", title: "Dragon Chicken", desc: "Fiery, crispy, and packed with Indo-Chinese flavors", gradient: "from-orange-900/60 via-navy to-navy-deep", accent: "bg-orange-400/20" },
  { id: 8, category: "Interior", title: "The Dining Hall", desc: "Spacious seating with elegant table settings", gradient: "from-teal-900/60 via-navy to-navy-deep", accent: "bg-teal-400/20" },
  { id: 9, category: "Ambiance", title: "Fairy Light Canopy", desc: "Twinkling lights creating a magical atmosphere", gradient: "from-pink-900/60 via-navy to-navy-deep", accent: "bg-pink-400/20" },
  { id: 10, category: "Food", title: "Grilled Fish Steak", desc: "Herb-crusted and served with lemon-butter sauce", gradient: "from-emerald-900/60 via-navy to-navy-deep", accent: "bg-emerald-400/20" },
  { id: 11, category: "Exterior", title: "Night View", desc: "QUINOA glows under the starlit Guwahati sky", gradient: "from-slate-900/60 via-navy to-navy-deep", accent: "bg-slate-400/20" },
  { id: 12, category: "Ambiance", title: "The Corner Table", desc: "An intimate spot perfect for two", gradient: "from-rose-900/60 via-navy to-navy-deep", accent: "bg-rose-400/20" },
];

// Masonry heights - alternating for visual interest
const heights = ["h-64", "h-80", "h-64", "h-72", "h-80", "h-64", "h-72", "h-64", "h-80", "h-64", "h-72", "h-80"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  const lightboxItem = lightbox !== null ? galleryItems.find((i) => i.id === lightbox) : null;

  const goNext = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((i) => i.id === lightbox);
    const next = filtered[(idx + 1) % filtered.length];
    setLightbox(next.id);
  };
  const goPrev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((i) => i.id === lightbox);
    const prev = filtered[(idx - 1 + filtered.length) % filtered.length];
    setLightbox(prev.id);
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
              ✦ Visual Journey ✦
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-cream">
              Our Gallery
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
              A glimpse into the QUINOA experience
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[60px] z-40 bg-navy-deep/95 backdrop-blur-xl border-b border-gold/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 justify-center flex-wrap">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-inter font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-navy-deep"
                    : "text-text-secondary hover:text-cream border border-white/5 hover:border-gold/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5"
            >
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className={`mb-4 sm:mb-5 break-inside-avoid cursor-pointer group`}
                  onClick={() => setLightbox(item.id)}
                >
                  <div
                    className={`relative ${heights[idx % heights.length]} rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500`}
                  >
                    {/* Gradient Background (placeholder for real images) */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.06)_0%,transparent_70%)]" />

                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-full ${item.accent} flex items-center justify-center opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500`}>
                        <Camera size={24} className="text-white/60" />
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy-deep/0 group-hover:bg-navy-deep/60 transition-all duration-500 flex items-end">
                      <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-gold text-xs font-inter tracking-wider uppercase mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-playfair text-lg font-semibold text-cream mb-1">
                          {item.title}
                        </h3>
                        <p className="font-inter text-text-secondary text-xs">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 sm:left-8 p-3 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 sm:right-8 p-3 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Content */}
            <motion.div
              key={lightboxItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl mx-4 sm:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`relative h-[50vh] sm:h-[60vh] rounded-xl overflow-hidden bg-gradient-to-br ${lightboxItem.gradient} border border-gold/20`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full ${lightboxItem.accent} flex items-center justify-center opacity-50`}>
                    <Camera size={40} className="text-white/60" />
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-gold text-xs font-inter tracking-wider uppercase mb-1">
                  {lightboxItem.category}
                </p>
                <h3 className="font-playfair text-2xl font-semibold text-white mb-2">
                  {lightboxItem.title}
                </h3>
                <p className="font-inter text-white/50 text-sm">{lightboxItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
