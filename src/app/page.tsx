"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Shield, ScanEye, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-24">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 animate-in fade-in duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10" />

        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Next Generation Endoscopy
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Ultra-Compact <br />
            <span className="text-yellow-400">Endoscopy Camera</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-relaxed">
            Visualize your confidence. <br />
            Optimize your workflow.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Link
              href="/demo"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-full transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
            >
              Start Interactive Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="px-8 py-4 text-zinc-300 font-medium hover:text-white transition-colors">
              View Specs
            </button>
          </div>
        </div>

        {/* Right Column: Product Image (No Zoom) */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] flex items-center justify-center">
          <div className="relative w-full h-full max-h-[800px]">
            <Image
              src="/assets/product_img.png"
              alt="DeepCAM Device"
              fill
              className="object-contain"
              priority
            />

            {/* Static Highlight Label if desired, or remove if "rollback" means completely plain. 
                      User said "rollback zoom function( no zoom effect)". 
                      I will keep a subtle static highlight or just the image as the image itself has text? 
                      The user provided image has "DeepCAM" and "EZ-CAM 160" on the product, which are likely part of the 3D render.
                      The "highlight point" request was for the animation. 
                      I will assume "no zoom effect" implies a static image.
                      I'll add the highlight label back if it fits the "static" look, but simpler. 
                      Actually, let's keep it simple: just the image first.
                  */}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<ScanEye className="w-6 h-6" />}
          title="720x720 AI Imaging"
          description="Real-time enhancement reveals micro-fractures invisible to the naked eye."
        />
        <FeatureCard
          icon={<Zap className="w-6 h-6" />}
          title="Zero Latency"
          description="Instant streaming to any iPad or display with sub-10ms delay."
        />
        <FeatureCard
          icon={<Shield className="w-6 h-6" />}
          title="Medical Grade"
          description="IP68 waterproof titanium build designed for daily clinical sterilization."
        />
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 flex flex-col items-center text-center space-y-6 border-t border-white/5">
        <h2 className="text-3xl font-bold text-white">Ready to upgrade your practice?</h2>
        <Link href="/demo" className="text-primary hover:text-primary/80 flex items-center gap-2 font-medium">
          Try the simulator <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Link
      href="/features"
      className="block p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </Link>
  );
}
