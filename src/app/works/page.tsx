import Image from "next/image";
import Footer from "@/components/Footer";

export default function Works() {
    const portfolioItems = [
        {
            title: "Invisible",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
            aspect: "aspect-[4/5]",
        },
        {
            title: "Pivit",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
            aspect: "aspect-square",
        },
        {
            title: "West Operators",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop",
            aspect: "aspect-[4/5]",
        },
        {
            title: "Infinity Constellation",
            image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop",
            aspect: "aspect-square",
        },
        {
            title: "Vosk",
            image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2664&auto=format&fit=crop",
            aspect: "aspect-[4/5]",
        },
        {
            title: "Havencraft",
            image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2664&auto=format&fit=crop",
            aspect: "aspect-square",
        },
        {
            title: "Sciemo",
            image: "https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
            aspect: "aspect-[4/5]",
        },
        {
            title: "Solvea",
            image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
            aspect: "aspect-square",
        },
        {
            title: "Prime Builders",
            image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2670&auto=format&fit=crop",
            aspect: "aspect-[4/5]",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* 1. Works Hero Section */}
            <section className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 pt-48 pb-32 md:pb-48">
                <div className="text-sm tracking-widest text-zinc-500 font-mono uppercase mb-8">
                    Works
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] max-w-7xl">
                    We make <br className="hidden md:block" />cool things.
                </h1>
            </section>

            {/* 2. Massive Portfolio Grid */}
            <section className="px-6 md:px-16 lg:px-24 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className={`relative ${item.aspect} w-full overflow-hidden bg-zinc-900 mb-6`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors duration-300">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Pagination / Load More */}
            <section className="px-6 md:px-16 lg:px-24 pb-32 flex justify-center">
                <button className="group flex items-center gap-4 py-4 px-8 border border-zinc-800 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    <span className="text-xl font-medium">Next page</span>
                    <span className="text-2xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
            </section>

            {/* 4. Footer */}
            <Footer />
        </div>
    );
}
