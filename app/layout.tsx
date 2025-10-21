import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEEV – THE FOUNDATION | Building Strong Foundations for a Brighter Future",
  description: "Premier educational coaching institute offering JEE, NEET, Foundation, and Board Excellence programs. Expert faculty, proven results, and personalized learning.",
  keywords: "coaching institute, JEE coaching, NEET coaching, foundation classes, board exam preparation, NEEV Foundation",
  authors: [{ name: "NEEV – THE FOUNDATION" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/branding/neev-logo.jpg",
    apple: "/images/branding/neev-logo.jpg",
  },
  openGraph: {
    title: "NEEV – THE FOUNDATION",
    description: "Building Strong Foundations for a Brighter Future",
    type: "website",
    images: [
      {
        url: "/images/branding/neev-logo.jpg",
        width: 800,
        height: 600,
        alt: "NEEV Foundation Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
