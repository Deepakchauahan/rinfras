import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/common/TopHeader";
import Footer from "@/components/common/Footer";

// Optimizing Google Inter Font for Core Web Vitals
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Completely eliminates Invisible Text Flash (FOIT)
  preload: true,   // High-priority resource hint injection
});

export const metadata: Metadata = {
  title: "RINFRAS | Enterprise IT & Cyber Security",
  description: "Managed IT, Cloud, and Cyber Security For Enterprise, Health, and Government Clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-white text-slate-900">
        {/* Semantic Header Component */}
        <TopHeader />
        
        {/* flex-1 prevents unexpected vertical content shifts during partial component loads */}
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
