'usenext';
'use client';

import { useState } from 'react';
import { Mail, User, Send, CheckCircle2, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TeamPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        setSubmitted(true);
    }

    return (
        <div className="flex flex-col items-center space-y-24">
            {/* Header */}
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Our Team
                </h1>
                <p className="text-xl text-zinc-400">
                    Changing the future of dentistry, together.
                </p>
            </div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <p className="text-zinc-400 mb-6">
                            Interested in DeepCAM technology? Get in touch with our team directly.
                        </p>

                        <div className="flex items-center gap-4 text-zinc-200">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <a href="mailto:dsmholdings@naver.com" className="text-lg font-medium hover:text-primary transition-colors">
                                dsmholdings@naver.com
                            </a>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5">
                        <h3 className="text-xl font-semibold text-white mb-2">Global Headquarters</h3>
                        <div className="flex items-start gap-4 text-zinc-400 mt-4">
                            <Building2 className="w-5 h-5 mt-1 text-primary" />
                            <p>
                                DSM Holdings<br />
                                Seoul, South Korea
                            </p>
                        </div>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-1">Join the Waitlist</h3>
                            <p className="text-sm text-zinc-400 mb-6">
                                Sign up to receive updates and early access information. A member of our team receives your request instantly.
                            </p>

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-zinc-900/80 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                        placeholder="Dr. Jane Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-zinc-900/80 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                        placeholder="jane@clinic.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="org" className="text-sm font-medium text-zinc-300 ml-1">Clinic / Organization</label>
                                <input
                                    type="text"
                                    id="org"
                                    className="w-full bg-zinc-900/80 border border-white/10 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                                    placeholder="Optional"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-2 bg-primary text-black font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Join Waitlist <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in zoom-in duration-300">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Request Sent!</h3>
                            <p className="text-zinc-400 max-w-xs">
                                Thank you for your interest. We have received your information and will be in touch shortly via
                                <span className="text-primary font-medium"> dsmholdings@naver.com</span>.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-sm text-zinc-500 hover:text-white underline mt-4"
                            >
                                Send another request
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
