"use client";

import Link from "next/link";
import {
  ArrowRight,
  Star,
  Coffee,
  Utensils,
  Wine,
  MapPin,
  Clock,
  Quote,
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

// ─── DATA ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: Utensils,
    title: "Culinary Excellence",
    description:
      "A curated menu blending global inspirations with local flavors, crafted by master chefs.",
  },
  {
    icon: Wine,
    title: "Premium Ambiance",
    description:
      "Sip the finest mocktails & beverages in an atmosphere of refined elegance and warm lighting.",
  },
  {
    icon: Coffee,
    title: "Artisan Coffee",
    description:
      "Start your day or end your meal with our specialty coffee, brewed to perfection.",
  },
];

const signatureDishes = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    desc: "Creamy arborio rice, wild mushrooms, parmesan crisp, and a drizzle of white truffle oil.",
    price: "₹ 445",
    tag: "Chef's Special",
  },
  {
    id: 2,
    name: "Pan-Seared Atlantic Salmon",
    desc: "Served with asparagus, garlic mashed potatoes, and a delicate lemon butter sauce.",
    price: "₹ 795",
    tag: "Bestseller",
  },
  {
    id: 3,
    name: "Quinoa Signature Bowl",
    desc: "Roasted vegetables, organic quinoa, avocado, and tahini dressing.",
    price: "₹ 345",
    tag: "Healthy",
  },
];

const reviews = [
  {
    name: "Rahul S.",
    rating: 5,
    time: "2 weeks ago",
    text: "The ambiance is absolutely stunning. Deep navy walls with gold accents make it feel incredibly premium. The food was just as good as the decor!",
  },
  {
    name: "Anita B.",
    rating: 5,
    time: "1 month ago",
    text: "Best dining experience in Guwahati. The staff was courteous, and the Truffle Risotto is a must-try. Perfect place for a date night.",
  },
  {
    name: "Vikram P.",
    rating: 4,
    time: "3 months ago",
    text: "A luxurious escape right in Kahilipara. The mocktails are beautifully crafted, and the desserts are out of this world.",
  },
  {
    name: "Sneha D.",
    rating: 5,
    time: "4 months ago",
    text: "We hosted a private birthday dinner here and everything from the table setup to the service was flawless. Highly recommended.",
  },
];

// ─── REUSABLE COMPONENTS ────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < rating
              ? "fill-gold text-gold"
              : "fill-transparent text-gold/30"
          }
        />
      ))}
    </div>
  );
}

function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
}: {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? "text-center" : ""}`}>
      <FadeIn>
        <p className="font-cormorant text-gold/80 text-sm sm:text-base tracking-[0.3em] uppercase mb-3">
          {subtitle}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`mt-4 font-inter text-text-secondary text-sm sm:text-base max-w-2xl ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="page-transition">
      {/* ════════════════════════ HERO SECTION ════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients & Noise */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,83,0.15)_0%,transparent_50%)]" />
        
        {/* Animated Floating Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] animate-ambient-drift" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
          <ScaleIn>
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
                <span className="font-cormorant text-gold text-xs sm:text-sm tracking-[0.4em] uppercase">
                  Est. 2024
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
              </div>
            </div>
          </ScaleIn>

          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cream tracking-tight mb-6 heading-glow shimmer-text">
              QUINOA
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-cream/80 italic max-w-2xl mx-auto mb-10 drop-shadow-md">
              A symphony of global flavors wrapped in unparalleled ambiance.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/reservations"
                className="btn-gold px-8 py-3.5 rounded-sm text-xs font-inter font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)] group"
              >
                Book a Table
              </Link>
              <Link
                href="/menu"
                className="btn-outline-gold px-8 py-3.5 rounded-sm text-xs font-inter font-medium tracking-widest uppercase bg-black/20 backdrop-blur-sm"
              >
                Explore Menu
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-inter text-[10px] uppercase tracking-widest text-gold">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ════════════════════════ FEATURES SECTION ════════════════════════ */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, idx) => (
              <StaggerItem key={idx}>
                <div className="glass-card rounded-xl p-8 sm:p-10 text-center h-full hover:border-gold/30 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center mx-auto mb-6 border border-gold/10 group-hover:bg-gold/20 transition-colors duration-500">
                    <feature.icon
                      size={24}
                      className="text-gold group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-playfair text-xl text-cream mb-4 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════ SIGNATURE DISHES ════════════════════════ */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Tase The Perfection"
            title="Signature Curations"
            description="Discover our chef's handpicked favorites, designed to tantalize your taste buds."
            centered={true}
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {signatureDishes.map((dish) => (
              <StaggerItem key={dish.id}>
                <div className="glass-card rounded-2xl overflow-hidden group hover:border-gold/30 transition-all duration-500">
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-navy-mid overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent z-10" />
                    {/* Hover scale effect on the placeholder */}
                    <div className="absolute inset-0 bg-navy-light group-hover:scale-105 transition-transform duration-700 opacity-50" />
                    
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gold/90 text-navy-deep text-[10px] font-inter font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
                        {dish.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 relative z-20 -mt-8 bg-gradient-to-b from-transparent to-navy-deep">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-playfair text-xl font-bold text-cream group-hover:text-gold transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-inter font-semibold text-gold whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>
                    <p className="font-inter text-text-secondary text-sm leading-relaxed mb-6">
                      {dish.desc}
                    </p>
                    <div className="w-full h-[1px] border-b border-dashed border-white/10" />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-gold font-inter text-sm font-medium tracking-wider uppercase hover:gap-4 transition-all duration-300 group"
            >
              View Full Menu
              <ArrowRight size={16} className="group-hover:text-cream transition-colors" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════ AMBIANCE SECTION ════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Grid */}
            <FadeIn direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-2xl bg-navy-mid border border-white/5 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light opacity-50" />
                  </div>
                  <div className="h-48 rounded-2xl bg-navy-mid border border-white/5 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light opacity-50" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 rounded-2xl bg-navy-mid border border-white/5 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light opacity-50" />
                  </div>
                  <div className="h-80 rounded-2xl bg-navy-mid border border-white/5 overflow-hidden relative">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.1)_0%,transparent_100%)]" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Content */}
            <div className="lg:pl-10">
              <SectionHeading
                subtitle="The Experience"
                title="A Captivating Atmosphere"
                centered={false}
              />
              <FadeIn delay={0.2}>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  Step into a world where design meets comfort. QUINOA boasts a deep navy aesthetic accented by warm gold notes, creating an environment that feels both exclusive and welcoming.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-10">
                  Whether it&apos;s a romantic dinner under our soft ambient lighting, or a celebratory feast with friends surrounded by arched mirrors, every corner is crafted for memories.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-cream font-medium">Daily</h4>
                      <p className="font-inter text-text-secondary text-xs">11 AM - 10 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-cream font-medium">Location</h4>
                      <p className="font-inter text-text-secondary text-xs">Kahilipara, GHY</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <Link
                  href="/gallery"
                  className="btn-outline-gold px-8 py-3 rounded-sm text-xs font-inter font-medium tracking-widest uppercase inline-block"
                >
                  View Gallery
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ GOOGLE REVIEWS ════════════════════════ */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Guest Experiences"
            title="What Our Guests Say"
            description="Real stories from our beloved patrons"
            centered={true}
          />

          {/* Overall Rating Card */}
          <ScaleIn className="mb-14 mt-10">
            <div className="glass-card rounded-xl p-8 sm:p-10 max-w-sm mx-auto text-center border-t border-t-white/10 hover:border-gold/30 transition-all duration-500">
              <div className="flex items-center justify-center gap-2 mb-4">
                {/* Google "G" Icon */}
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="font-playfair text-4xl font-bold text-cream">
                  4.1
                </span>
              </div>
              <div className="flex justify-center mb-3">
                <StarRating rating={4} />
              </div>
              <p className="text-text-secondary text-sm font-inter">
                Based on 499+ Reviews
              </p>
            </div>
          </ScaleIn>

          {/* Reviews Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review, idx) => (
              <StaggerItem key={idx}>
                <div className="glass-card rounded-xl p-8 h-full flex flex-col relative group hover:border-gold/30 transition-all duration-500">
                  <Quote size={24} className="text-gold/20 absolute top-6 right-6 group-hover:text-gold/40 transition-colors" />
                  <div className="flex mb-4">
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="font-inter text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                    <span className="text-cream text-sm font-inter font-medium">
                      {review.name}
                    </span>
                    <span className="text-text-secondary/50 text-xs font-inter">
                      {review.time}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ════════════════════════ CTA SECTION ════════════════════════ */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,83,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-cormorant text-gold/90 text-sm tracking-[0.4em] uppercase mb-4">
              Your Table Awaits
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-6">
              Make Every Meal
              <br />
              <span className="text-gold">an Occasion</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-inter text-text-secondary text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Reserve your table at QUINOA and experience the art of fine dining.
              We&apos;ll confirm your reservation personally via WhatsApp.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservations"
                className="btn-gold px-10 py-4 rounded-sm text-sm font-inter font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Reserve Now
              </Link>
              <Link
                href="/contact"
                className="btn-outline-gold px-10 py-4 rounded-sm text-sm font-inter font-medium tracking-widest uppercase bg-black/20"
              >
                Find Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
