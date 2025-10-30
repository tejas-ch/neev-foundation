import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/common/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://tejas-ch.github.io/neev-foundation'),
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
      <body>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold-500 focus:text-navy-950 focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

