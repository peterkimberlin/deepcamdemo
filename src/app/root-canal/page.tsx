import Image from "next/image";
import { CheckCircle2, ScanSearch, Signal, Crosshair } from "lucide-react";

export default function RootCanalPage() {
    return (
        <div className="flex flex-col items-center space-y-24">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Root Canal Treatment
                </h1>
                <p className="text-xl text-zinc-400">
                    Enhanced visualization for Endodontic procedures.
                </p>
            </div>

            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Info Column */}
                <div className="space-y-12">

                    {/* Clinical Applications */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
                            <Crosshair className="w-6 h-6" />
                            Clinical Applications
                        </h2>
                        <ul className="space-y-4">
                            <ListItem
                                title="Root Canal Orifice Finding"
                                desc="Clear visualization during access opening."
                            />
                            <ListItem
                                title="Accessory Canal Visualization"
                                desc="Identify complex canal structures."
                            />
                            <ListItem
                                title="Fractured File Confirmation"
                                desc="Locate broken files inside the canal."
                            />
                            <ListItem
                                title="Root Fracture Detection"
                                desc="High-definition video documentation of fractures."
                            />
                        </ul>
                    </div>

                    {/* Product Features */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Signal className="w-6 h-6 text-primary" />
                            Key Advantages
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <FeatureBox
                                icon={<ScanSearch className="w-5 h-5" />}
                                text="Microscope Blind Spot Compensation"
                            />
                            <FeatureBox
                                icon={<Signal className="w-5 h-5" />}
                                text="Real-Time Wireless Video"
                            />
                            <FeatureBox
                                icon={<CheckCircle2 className="w-5 h-5" />}
                                text="Improved Accuracy in Orifice Search"
                            />
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="space-y-8">
                    {/* Endodontics */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">Endodontics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/50">
                                <Image
                                    src="/assets/endodontics_1.png"
                                    alt="Endodontics 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/50">
                                <Image
                                    src="/assets/endodontics_2.png"
                                    alt="Endodontics 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Implantology */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">Implantology</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/50">
                                <Image
                                    src="/assets/implantology_1.png"
                                    alt="Implantology 1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/50">
                                <Image
                                    src="/assets/implantology_2.png"
                                    alt="Implantology 2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ListItem({ title, desc }: { title: string, desc: string }) {
    return (
        <li className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <div>
                <strong className="block text-white text-lg">{title}</strong>
                <span className="text-zinc-400">{desc}</span>
            </div>
        </li>
    );
}

function FeatureBox({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium">
            {icon}
            {text}
        </div>
    );
}
