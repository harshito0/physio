import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenlifephysio.com"),
  title: {
    default: "Dr. Sakshi's Zenlife Physio and Rehabilitation Centre | Sports Rehabilitation & Nutrition Clinic",
    template: "%s | Zenlife Physio",
  },
  description:
    "Dr. Sakshi's Zenlife Physio and Rehabilitation Centre provides expert orthopedic physiotherapy, sports rehabilitation, neurological recovery, spine therapy, and clinical nutrition support.",
  keywords: [
    "physiotherapy clinic",
    "Dr Sakshi",
    "sports rehabilitation",
    "spine care",
    "orthopedic physio",
    "back pain relief",
    "nutrition clinic",
    "rehabilitation centre",
  ],
  authors: [{ name: "Dr. Sakshi Kocher" }],
  creator: "Zenlife Physio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://zenlifephysio.com",
    siteName: "Dr. Sakshi's Zenlife Physio and Rehabilitation Centre",
    title: "Dr. Sakshi's Zenlife Physio and Rehabilitation Centre",
    description: "Expert Physiotherapy for a Pain-Free, Active Life. Specialized in sports rehabilitation, musculoskeletal therapy, and clinical nutrition.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sakshi's Zenlife Physio and Rehabilitation Centre",
    description: "Expert Physiotherapy for a Pain-Free, Active Life. Specialized in sports rehabilitation, musculoskeletal therapy, and clinical nutrition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#202A2A] font-sans selection:bg-[#0F766E] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
