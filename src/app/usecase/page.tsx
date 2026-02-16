import Image from "next/image";
import { Users, Workflow, MonitorSmartphone } from "lucide-react";

export default function UsecasePage() {
    return (
        <div className="flex flex-col items-center space-y-32">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Clinical Scenarios
                </h1>
                <p className="text-xl text-zinc-400">
                    Designed for the modern dental workflow.
                </p>
            </div>

            {/* Feature 1: Seamless Workflow */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/assets/usecase-workflow-new.jpg"
                        alt="Seamless Workflow"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Workflow className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                        Seamless Integration
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        DeepCAM integrates effortlessly into your existing operatory setup.
                        Stream live video directly to an iPad for instant patient education
                        and better ergonomic positioning during treatment.
                    </p>
                </div>
            </section>

            {/* Feature 2: Ergonomic Design */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 space-y-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <MonitorSmartphone className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                        Ergonomic Freedom
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Compatible with loupes and smart glasses. The lightweight design ensures
                        you can maintain a comfortable posture while accessing high-definition
                        intraoral views hands-free.
                    </p>
                </div>
                <div className="order-2 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src="/assets/usecase-ergonomics.jpg"
                        alt="Ergonomic Design"
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </section>


        </div>
    );
}
