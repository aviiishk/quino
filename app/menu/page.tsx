"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Flame, Star, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";

/* ─── Menu Data ─── */
const categories = [
  "All",
  "Starters",
  "Indian Mains",
  "Chinese",
  "Continental",
  "Biryani & Rice",
  "Breads",
  "Beverages",
  "Desserts",
];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  veg: boolean;
  spicy?: boolean;
  bestseller?: boolean;
  chefSpecial?: boolean;
  category: string;
}

const menuItems: MenuItem[] = [
  // Starters
  { name: "Paneer Tikka", desc: "Chargrilled cottage cheese marinated in smoky tandoori spices", price: "₹260", veg: true, bestseller: true, category: "Starters" },
  { name: "Chicken Malai Tikka", desc: "Creamy, melt-in-mouth chicken tikka with cashew and cream marinade", price: "₹300", veg: false, chefSpecial: true, category: "Starters" },
  { name: "Fish Amritsari", desc: "Crispy battered fish fillets with Amritsari spice blend", price: "₹320", veg: false, category: "Starters" },
  { name: "Veg Spring Rolls", desc: "Golden-fried rolls stuffed with shredded vegetables and glass noodles", price: "₹200", veg: true, category: "Starters" },
  { name: "Mutton Seekh Kebab", desc: "Smoky minced mutton kebabs with aromatic herbs and spices", price: "₹350", veg: false, spicy: true, category: "Starters" },
  { name: "Mushroom Galouti", desc: "Melt-on-tongue mushroom patties with royal Awadhi spices", price: "₹240", veg: true, chefSpecial: true, category: "Starters" },
  
  // Indian Mains
  { name: "Butter Chicken", desc: "Tender tandoori chicken simmered in rich, velvety tomato-butter gravy", price: "₹350", veg: false, bestseller: true, category: "Indian Mains" },
  { name: "Paneer Butter Masala", desc: "Cottage cheese cubes in creamy, luscious tomato-cashew gravy", price: "₹280", veg: true, bestseller: true, category: "Indian Mains" },
  { name: "Mutton Rogan Josh", desc: "Slow-cooked Kashmiri lamb curry with aromatic whole spices", price: "₹420", veg: false, chefSpecial: true, category: "Indian Mains" },
  { name: "Dal Makhani", desc: "Black lentils slow-simmered overnight with butter and cream", price: "₹220", veg: true, category: "Indian Mains" },
  { name: "Chicken Chettinad", desc: "Fiery South Indian chicken curry with freshly ground spices", price: "₹340", veg: false, spicy: true, category: "Indian Mains" },
  { name: "Palak Paneer", desc: "Fresh spinach purée with soft paneer cubes and subtle spicing", price: "₹260", veg: true, category: "Indian Mains" },
  { name: "Fish Curry", desc: "Traditional Assamese-style river fish in light mustard gravy", price: "₹360", veg: false, category: "Indian Mains" },
  { name: "Mix Veg Kadai", desc: "Seasonal vegetables tossed in rustic kadai masala with bell peppers", price: "₹240", veg: true, category: "Indian Mains" },

  // Chinese
  { name: "Dragon Chicken", desc: "Crispy fried chicken tossed in fiery Indo-Chinese dragon sauce", price: "₹320", veg: false, bestseller: true, spicy: true, category: "Chinese" },
  { name: "Chilli Paneer", desc: "Wok-tossed paneer with bell peppers, onions and spicy soy-chilli glaze", price: "₹260", veg: true, category: "Chinese" },
  { name: "Hakka Noodles", desc: "Stir-fried noodles with crisp vegetables and aromatic soy sauce", price: "₹220", veg: true, category: "Chinese" },
  { name: "Chicken Manchurian", desc: "Golden chicken balls in tangy, garlicky Manchurian gravy", price: "₹300", veg: false, category: "Chinese" },
  { name: "Veg Fried Rice", desc: "Wok-tossed basmati rice with seasonal vegetables and sesame oil", price: "₹200", veg: true, category: "Chinese" },
  { name: "Prawn Salt & Pepper", desc: "Crispy prawns tossed with crushed black pepper and curry leaves", price: "₹400", veg: false, chefSpecial: true, category: "Chinese" },

  // Continental
  { name: "Grilled Fish Steak", desc: "Fresh river fish, herb-crusted and grilled with lemon-butter sauce", price: "₹420", veg: false, chefSpecial: true, category: "Continental" },
  { name: "Chicken Sizzler", desc: "Sizzling grilled chicken with sautéed veggies and pepper sauce", price: "₹380", veg: false, bestseller: true, category: "Continental" },
  { name: "Mushroom Risotto", desc: "Creamy Italian arborio rice with wild mushrooms and parmesan", price: "₹340", veg: true, category: "Continental" },
  { name: "Pasta Alfredo", desc: "Penne in rich, garlicky white cream sauce with herbs", price: "₹280", veg: true, category: "Continental" },
  { name: "Lamb Chops", desc: "Herb-marinated prime lamb chops, char-grilled to perfection", price: "₹480", veg: false, chefSpecial: true, category: "Continental" },

  // Biryani & Rice
  { name: "Chicken Dum Biryani", desc: "Fragrant basmati rice layered with spiced chicken, slow-cooked in dum", price: "₹320", veg: false, bestseller: true, category: "Biryani & Rice" },
  { name: "Mutton Biryani", desc: "Succulent mutton pieces in aromatic saffron-infused biryani rice", price: "₹380", veg: false, category: "Biryani & Rice" },
  { name: "Veg Biryani", desc: "Garden-fresh vegetables in fragrant spiced rice with fried onions", price: "₹240", veg: true, category: "Biryani & Rice" },
  { name: "Jeera Rice", desc: "Fluffy basmati rice tempered with cumin seeds and ghee", price: "₹140", veg: true, category: "Biryani & Rice" },
  { name: "Steamed Rice", desc: "Perfectly steamed, fluffy long-grain basmati rice", price: "₹100", veg: true, category: "Biryani & Rice" },

  // Breads
  { name: "Butter Naan", desc: "Soft leavened bread brushed with golden butter from the tandoor", price: "₹60", veg: true, category: "Breads" },
  { name: "Garlic Naan", desc: "Tandoor-baked naan topped with roasted garlic and coriander", price: "₹70", veg: true, bestseller: true, category: "Breads" },
  { name: "Laccha Paratha", desc: "Flaky, multi-layered whole wheat paratha with ghee", price: "₹60", veg: true, category: "Breads" },
  { name: "Cheese Naan", desc: "Stuffed naan oozing with melted mozzarella and cheddar", price: "₹90", veg: true, category: "Breads" },
  { name: "Tandoori Roti", desc: "Wholesome whole wheat bread baked in clay tandoor", price: "₹40", veg: true, category: "Breads" },

  // Beverages
  { name: "Fresh Lime Soda", desc: "Zesty lime with sparkling soda — sweet or salted", price: "₹100", veg: true, category: "Beverages" },
  { name: "Mango Lassi", desc: "Thick, creamy yogurt smoothie with Alphonso mango pulp", price: "₹140", veg: true, bestseller: true, category: "Beverages" },
  { name: "Masala Chaas", desc: "Spiced buttermilk with roasted cumin and fresh mint", price: "₹80", veg: true, category: "Beverages" },
  { name: "Cold Coffee", desc: "Rich coffee blended with ice cream and chocolate drizzle", price: "₹160", veg: true, category: "Beverages" },
  { name: "Virgin Mojito", desc: "Refreshing mint and lime cooler with crushed ice", price: "₹150", veg: true, category: "Beverages" },
  { name: "Blue Lagoon", desc: "Electric blue citrus cooler with a tropical twist", price: "₹160", veg: true, category: "Beverages" },

  // Desserts
  { name: "Gulab Jamun", desc: "Soft, golden milk dumplings soaked in rose-cardamom syrup", price: "₹120", veg: true, bestseller: true, category: "Desserts" },
  { name: "Brownie with Ice Cream", desc: "Warm Belgian chocolate brownie with vanilla bean ice cream", price: "₹200", veg: true, chefSpecial: true, category: "Desserts" },
  { name: "Rasmalai", desc: "Delicate saffron-soaked milk cakes in chilled, thickened cream", price: "₹140", veg: true, category: "Desserts" },
  { name: "Phirni", desc: "Traditional ground rice pudding with pistachios and saffron strands", price: "₹120", veg: true, category: "Desserts" },
  { name: "Chocolate Lava Cake", desc: "Molten chocolate cake with a gooey, flowing center", price: "₹220", veg: true, category: "Desserts" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory);

  const grouped = filtered.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-cormorant text-gold/80 text-sm tracking-[0.4em] uppercase mb-4">
              ✦ Curated with Passion ✦
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-cream">
              Our Menu
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
              A symphony of flavors crafted for the discerning palate
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[60px] z-40 bg-navy-deep/95 backdrop-blur-xl border-b border-gold/10 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-inter font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
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

      {/* Menu Content */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category} className="mb-16 last:mb-0">
                  {/* Category Header */}
                  <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold/40" />
                      <Sparkles size={14} className="text-gold/60" />
                      <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold/40" />
                    </div>
                    <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-cream">
                      {category}
                    </h2>
                    <div className="w-8 h-[1px] bg-gold/40 mx-auto mt-3" />
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    {items.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04, duration: 0.4 }}
                        className="group relative py-5 px-4 sm:px-6 rounded-lg hover:bg-white/[0.02] transition-colors duration-300"
                      >
                        <div className="flex items-start gap-3">
                          {/* Veg/Non-veg indicator */}
                          <div className="mt-1.5 flex-shrink-0">
                            <div
                              className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
                                item.veg
                                  ? "border-green-500"
                                  : "border-red-500"
                              }`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  item.veg ? "bg-green-500" : "bg-red-500"
                                }`}
                              />
                            </div>
                          </div>

                          {/* Item details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <h3 className="font-playfair text-lg font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                                {item.name}
                              </h3>
                              {/* Tags */}
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {item.bestseller && (
                                  <span className="inline-flex items-center gap-1 text-[9px] font-inter font-bold tracking-wider uppercase bg-gold/15 text-gold px-2 py-0.5 rounded-sm">
                                    <Star size={8} className="fill-gold" />
                                    Bestseller
                                  </span>
                                )}
                                {item.chefSpecial && (
                                  <span className="inline-flex items-center gap-1 text-[9px] font-inter font-bold tracking-wider uppercase bg-purple-500/15 text-purple-400 px-2 py-0.5 rounded-sm">
                                    <Sparkles size={8} />
                                    Chef&apos;s Special
                                  </span>
                                )}
                                {item.spicy && (
                                  <span className="inline-flex items-center gap-1 text-[9px] font-inter font-bold tracking-wider uppercase bg-red-500/15 text-red-400 px-2 py-0.5 rounded-sm">
                                    <Flame size={8} />
                                    Spicy
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="font-cormorant text-text-secondary text-base italic mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          {/* Dotted line + Price */}
                          <div className="hidden sm:block menu-dots" />
                          <div className="flex-shrink-0 ml-2">
                            <span className="font-cormorant text-xl font-semibold text-gold">
                              {item.price}
                            </span>
                          </div>
                        </div>

                        {/* Bottom border */}
                        <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-white/[0.04]" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <FadeIn delay={0.2} className="mt-16">
            <div className="glass-card rounded-xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Leaf size={16} className="text-green-500" />
                <span className="text-green-500 text-xs font-inter font-medium tracking-wider uppercase">
                  Green = Vegetarian
                </span>
                <span className="text-text-secondary/30 mx-2">|</span>
                <div className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                <span className="text-red-400 text-xs font-inter font-medium tracking-wider uppercase">
                  Red = Non-Vegetarian
                </span>
              </div>
              <p className="text-text-secondary text-xs font-inter">
                Prices are inclusive of taxes. Menu items and prices may vary.
                Please inform our staff about any dietary requirements or allergies.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
