import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUINOA — Multicuisine Dine Inn | Guwahati",
  description:
    "QUINOA — Premium multicuisine dining experience in Kahilipara, Guwahati. Elegant ambiance, exquisite Indian, Chinese & Continental cuisine. Reserve your table today.",
  keywords:
    "QUINOA, restaurant, Guwahati, multicuisine, fine dining, Indian food, Chinese food, Continental, Kahilipara, Assam",
  openGraph: {
    title: "QUINOA — Multicuisine Dine Inn",
    description:
      "Where every flavor tells a story. Premium multicuisine dining in Guwahati.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
