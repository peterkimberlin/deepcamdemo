import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeepCAM - The Future of Dental Imaging",
  description: "Experience the next generation of dental endoscopy with DeepCAM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/60 backdrop-blur-2xl border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              DeepCAM
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/root-canal"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Applications
            </Link>
            <Link
              href="/usecase"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Integration
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Our Team
            </Link>

          </div>
        </nav>
        <main className="min-h-screen pt-24 pb-12 w-full max-w-[1400px] mx-auto px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
