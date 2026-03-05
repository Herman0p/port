import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 mt-24">
            <div className="px-6 md:px-16 lg:px-24 pt-24 md:pt-32 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 md:mb-32">
                    {/* CTA */}
                    <div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] max-w-2xl">
                            Your Embedded<br />Creative Team.
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-zinc-400 mb-12">
                            Scale confidently. Stay on-brand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors duration-300 flex items-center justify-center">
                                BOOK A DEMO
                            </Link>
                            <Link href="/contact" className="px-8 py-4 rounded-full border border-zinc-600 text-lg font-medium hover:border-white transition-colors duration-300 flex items-center justify-center">
                                Get Started Today
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="flex flex-col justify-end lg:items-end">
                        <div className="w-full max-w-md">
                            <h3 className="text-xl font-medium mb-2">Stay in the loop</h3>
                            <p className="text-zinc-500 mb-6 font-light">Receive occasional insights from our studio.</p>
                            <form className="flex w-full gap-2" action="#">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-zinc-800 px-6 py-3 rounded-lg font-medium hover:bg-zinc-700 transition-colors text-white"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Nav & Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-12 border-t border-zinc-900">
                    <div className="flex flex-wrap gap-x-16 gap-y-12">
                        <div className="flex flex-col gap-4">
                            <span className="text-zinc-600 font-mono text-sm tracking-widest mb-1">PLATFORM</span>
                            <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Platform</Link>
                            <Link href="/culture" className="text-zinc-400 hover:text-white transition-colors">Culture</Link>
                            <Link href="/works" className="text-zinc-400 hover:text-white transition-colors">Work</Link>
                            <Link href="/insights" className="text-zinc-400 hover:text-white transition-colors">Insights</Link>
                            <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-zinc-600 font-mono text-sm tracking-widest mb-1">SOCIALS</span>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Twitter (X)</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 text-zinc-600 text-sm">
                        <h1 className="text-3xl font-bold text-zinc-300 tracking-tighter mb-4">RADIANCE</h1>
                        <p>Different, by design.</p>
                        <p>© {new Date().getFullYear()} Radiance Digital Agency.</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
