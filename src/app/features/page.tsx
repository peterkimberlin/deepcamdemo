import Image from "next/image";
import { BrainCircuit, Scan } from "lucide-react";

export default function FeaturesPage() {
    return (
        <div className="flex flex-col items-center space-y-32">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    <span className="text-yellow-400">Real-time. Treatment Confidence.</span> <br />
                    The Next-Generation Endoscopy Camera.
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Discover the technology that makes precise dental endoscopy possible.
                </p>
            </div>

            {/* Feature 1: AI Diagnosis */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/assets/feature-ai.png"
                        alt="Real-Time Root Canal Diagnosis"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 text-primary font-bold mb-1">
                            <BrainCircuit className="w-5 h-5" /> AI ASSISTED
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Scan className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                        Real-Time <br /> <span className="text-primary">Diagnosis</span>
                    </h2>
                    <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                        <ul className="space-y-3 list-none">
                            {[
                                "Root Canal Orifice Finding",
                                "Real-time Extirpation Process",
                                "Finding Root Fractures",
                                "Check Cervical Abfraction",
                                "Cavity Detection (Interproximal)",
                                "Lateral Window Sinus Floor Elevation (LWSFE)",
                                "Crestal Sinus Elevation (Transcrestal approach)"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Feature 2: Specifications */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">EZ-CAM 160</h2>
                    <ul className="space-y-4 text-xl text-zinc-300">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Voice activation
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            High Resolution
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            4 White LEDs
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Diagonal FOV : 120
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            DOF: 3~50mm
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            IP68 compliance
                        </li>
                    </ul>
                </div>

                <div className="relative flex justify-center">
                    <div className="relative w-full max-w-md aspect-[1/3]"> {/* Adjusted aspect ratio for likely tall product image */}
                        <Image
                            src="/assets/ez-cam-160.png"
                            alt="EZ-CAM 160"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]"
                        />
                    </div>
                </div>
            </section>


        </div >
    );
}


