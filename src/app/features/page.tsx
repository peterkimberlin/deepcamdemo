import Image from "next/image";
import { BrainCircuit, Scan, Microscope, Layers } from "lucide-react";

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

            {/* Feature 2: Deep Visualization */}
            <section className="w-full space-y-12">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white">What You See Is What Is There</h2>
                    <p className="text-zinc-400">
                        Compare the naked eye view vs. DeepCAM's enhanced visualization.
                        Reveal cracks, lesions, and details that were previously invisible.
                    </p>
                </div>

                <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                    <Image
                        src="/assets/feature-comparison.jpg"
                        alt="DeepCAM Comparison"
                        width={1200}
                        height={1000}
                        className="w-full h-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureDetailCard
                        icon={<Microscope className="w-6 h-6" />}
                        title="High-Res Close-Up"
                        description="Detect early interproximal lesions with clinical precision."
                    />
                    <FeatureDetailCard
                        icon={<Layers className="w-6 h-6" />}
                        title="Enhanced Depth"
                        description="See fine surface details and subgingival areas without mirrors."
                    />
                    <FeatureDetailCard
                        icon={<Scan className="w-6 h-6" />}
                        title="Transillumination"
                        description="Built-in LED reveals hidden cracks and lesions instantly."
                    />
                </div>
            </section>
        </div>
    );
}

function FeatureDetailCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-white/5 hover:border-primary/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
