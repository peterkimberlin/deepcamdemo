"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
    Maximize2,
    Camera,
    Settings,
    Battery,
    Wifi,
    ZoomIn,
    ZoomOut,
    Aperture,
    Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DemoPage() {
    const [zoom, setZoom] = useState(1);
    const [isScanning, setIsScanning] = useState(true);
    const [captured, setCaptured] = useState(false);

    useEffect(() => {
        if (captured) {
            const timer = setTimeout(() => setCaptured(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [captured]);

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black relative shadow-2xl">
            {/* Top Status Bar like an iPad App */}
            <div className="absolute top-0 w-full z-20 flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-4 text-primary font-mono text-sm">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        LIVE READY
                    </div>
                    <span className="text-zinc-400">FPS: 30</span>
                    <span className="text-zinc-400">720x720 HDR</span>
                </div>

                <div className="flex items-center gap-4 text-zinc-300">
                    <Wifi className="w-5 h-5" />
                    <div className="flex items-center gap-1">
                        <span className="text-sm font-bold font-mono">98%</span>
                        <Battery className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Main Viewport */}
            <div className="active-area relative flex-1 w-full bg-zinc-900 overflow-hidden flex items-center justify-center">
                <motion.div
                    animate={{ scale: zoom }}
                    transition={{ type: "spring", damping: 20 }}
                    className="relative w-full h-full"
                >
                    {/* Simulated Camera Feed */}
                    {/* Simulated Camera Feed */}
                    <video
                        src="/assets/DemoVideo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-90"
                    />

                    {/* AI Scan Overlay */}
                    <AnimatePresence>
                        {isScanning && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <motion.div
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                />
                                <div className="absolute top-4 right-4 p-4">
                                    <div className="border border-primary/30 bg-black/50 backdrop-blur-md p-4 rounded-lg">
                                        <div className="flex items-center gap-2 mb-2 text-primary text-xs uppercase font-bold tracking-wider">
                                            <Activity className="w-4 h-4" /> AI Diagnostics
                                        </div>
                                        <div className="space-y-1 font-mono text-xs text-zinc-300">
                                            <div className="flex justify-between w-48">
                                                <span>Plaque Detected</span>
                                                <span className="text-green-400">Low</span>
                                            </div>
                                            <div className="flex justify-between w-48">
                                                <span>Enamel Integrity</span>
                                                <span className="text-primary">99.8%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
                </div>

                {/* Flash Effect on Capture */}
                <AnimatePresence>
                    {captured && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white z-50 pointer-events-none"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="h-24 bg-black/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between px-12 z-20">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setZoom(Math.max(1, zoom - 0.5))}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                        <ZoomOut className="w-6 h-6" />
                    </button>
                    <span className="font-mono text-primary font-bold w-12 text-center">{zoom}x</span>
                    <button
                        onClick={() => setZoom(Math.min(4, zoom + 0.5))}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                    >
                        <ZoomIn className="w-6 h-6" />
                    </button>
                </div>

                <button
                    onClick={() => setCaptured(true)}
                    className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center relative group active:scale-95 transition-all"
                >
                    <div className="w-12 h-12 rounded-full bg-white group-hover:bg-primary transition-colors" />
                </button>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsScanning(!isScanning)}
                        className={cn(
                            "p-3 rounded-full transition-colors font-mono text-xs flex flex-col items-center gap-1",
                            isScanning ? "text-primary bg-primary/10" : "text-zinc-500 hover:text-white"
                        )}
                    >
                        <Aperture className="w-6 h-6" />
                        AI SCAN
                    </button>
                </div>
            </div>
        </div>
    );
}
