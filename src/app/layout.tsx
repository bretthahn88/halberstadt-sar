import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "Anthony Halberstadt Chapter | Sons of the American Revolution - Fort Wayne, Indiana",
    template: "%s | Anthony Halberstadt Chapter SAR",
  },
  description: "The Anthony Halberstadt Chapter of the Sons of the American Revolution in Fort Wayne, Indiana. Preserving American Revolution history, honoring patriot ancestors, and serving our community.",
  keywords: ["Sons of the American Revolution Fort Wayne", "SAR Indiana", "American Revolution history Fort Wayne", "Anthony Halberstadt Chapter"],
  openGraph: {
    title: "Anthony Halberstadt Chapter | Sons of the American Revolution",
    description: "Preserving American Revolution history in Fort Wayne, Indiana. Libertas et Patria.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
