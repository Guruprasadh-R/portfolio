import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guruprasadh R — Software Engineer & Builder",
  description:
    "Software Engineer & CS student at Anna University, Chennai. Co-maintainer of Celtrix OS. Building high-throughput systems and resilient digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased text-[#fafafa] bg-[#0b0e14] selection:bg-[#f59e0b]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}