import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Dummy data structure mapping specifically matched to "invisible"
const projectsData: Record<string, any> = {
    "invisible": {
        title: "Invisible",
        client: "Invisible Tech",
        services: "Digital Experience, Product Design",
        year: "2025",
        liveSite: "https://invisible.co",
        heroImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2664&auto=format&fit=crop",
        overview: "Invisible represents a paradigm shift in how users interact with digital workspaces. The challenge was to create an interface that felt completely non-intrusive yet incredibly powerful when summoned. We stripped away every unnecessary element, leaving only what matters. The result is a brutalist, high-performance web experience that prioritizes speed and clarity above all else.",
        gallery: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
        ]
    },
    // Adding Pivit just in case they click it
    "pivit": {
        title: "Pivit",
        client: "Pivit Financial",
        services: "Brand Identity, Web Application",
        year: "2025",
        liveSite: "https://pivit.finance",
        heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        overview: "Pivit needed a platform that demystified complex financial data. We built a robust, type-driven interface that brings clarity and confidence to fast-moving markets. The stark aesthetic differentiates them from legacy financial institutions.",
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
        ]
    }
};

const fallbackProject = {
    title: "Project Not Found",
    client: "Unknown",
    services: "N/A",
    year: "N/A",
    liveSite: "#",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    overview: "We could not find the details for this project. Please return to the works page to view our active portfolio and explore our latest case studies.",
    gallery: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2670&auto=format&fit=crop",
    ]
};

// Extremely strict typing rule for Next.js 13+ App Router
export default function ProjectDetail({
    params
}: {
    params: { slug: string }
}) {
    const { slug } = params;

    // Dynamic loading with a fallback if slug isn't strictly in our dummy data
    const project = projectsData[slug] || {
        ...fallbackProject,
        title: slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Unknown"
    };

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
            {/* 1. Project Header */}
            <section className="px-6 md:px-16 lg:px-24 pt-40 pb-24">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase mb-20 leading-none">
                    {project.title}
                </h1>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-zinc-800 pt-12">
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Client</span>
                        <span className="text-lg md:text-xl font-medium text-white">{project.client}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Services</span>
                        <span className="text-lg md:text-xl font-medium text-white">{project.services}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Year</span>
                        <span className="text-lg md:text-xl font-medium text-white">{project.year}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Live Site</span>
                        <a
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg md:text-xl font-medium text-white hover:text-zinc-400 transition-colors inline-flex items-center gap-2"
                        >
                            Visit Website
                            <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Hero Image */}
            <section className="w-full">
                <div className="relative w-full h-[80vh] bg-zinc-900 overflow-hidden">
                    <Image
                        src={project.heroImage}
                        alt={`${project.title} Hero Image`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* 3. Project Overview / The Challenge */}
            <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative">
                    <div className="md:w-1/4">
                        <div className="md:sticky md:top-32 text-sm tracking-widest text-zinc-500 font-mono uppercase">
                            (01) THE BRIEF
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug md:leading-tight text-white/90">
                            {project.overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Showcase Gallery */}
            <section className="px-6 md:px-16 lg:px-24 pb-24 md:pb-32 flex flex-col gap-8 md:gap-16">
                {/* Full Width Image */}
                <div className="relative w-full aspect-[16/9] bg-zinc-900 overflow-hidden">
                    <Image
                        src={project.gallery[0]}
                        alt={`${project.title} Showcase 1`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-zinc-900 overflow-hidden">
                        <Image
                            src={project.gallery[1]}
                            alt={`${project.title} Showcase 2`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/4] bg-zinc-900 overflow-hidden md:mt-24">
                        <Image
                            src={project.gallery[2]}
                            alt={`${project.title} Showcase 3`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 5. Next Project Navigation */}
            <section className="border-t border-zinc-800">
                <Link
                    href="/works"
                    className="group block w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 hover:bg-white hover:text-black transition-colors duration-500"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                        <div className="w-full text-center md:text-left">
                            <span className="text-zinc-500 group-hover:text-zinc-400 font-mono text-sm tracking-widest uppercase mb-4 block transition-colors">
                                NEXT STEP
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none inline-flex items-center gap-4">
                                View All Works
                                <span className="transform transition-transform duration-500 group-hover:translate-x-8">→</span>
                            </h2>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}
