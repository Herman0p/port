'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const teamMembers = [
    {
        slug: 'hermansyah-adika-putra',
        name: 'Hermansyah Adika Putra',
        role: 'CEO & Founder / Lead Architect',
        image: '/hermansyah.jpg',
        headline: 'LEAD ARCHITECT FOR DIGITAL EXPERIENCES, SHAPED BY RELENTLESS INNOVATION',
        bio: [
            "Latar belakang Hermansyah mencakup rekayasa perangkat lunak modern, pengembangan web bertenaga tinggi, dan pemahaman mendalam tentang estetika desain brutalist. Kombinasi tersebut memberikannya perspektif yang tak tertandingi: dia tidak hanya mengerti cara menulis kode, tapi dia tahu mengapa sebuah antarmuka gagal berinteraksi dengan pengguna, dan apa yang berantakan saat sistem diuji di bawah tekanan lalu lintas tinggi.",
            "Banyak yang hanya tahu cara membuat website. Hermansyah mengamati ratusan produk digital dan tahu persis di mana letak titik kelemahannya. Pengetahuan inilah yang menyatu ketika ia mendirikan UNCLEMAN.",
            "Akumulasi pengalaman ini adalah hal yang membedakan UNCLEMAN. Kami tidak sekadar merancang antarmuka yang indah, tapi kami membereskan 5% sentuhan akhir di mana banyak brand sering tersandung dan gagal. Kami membangun arsitektur digital yang tahan banting berdasarkan skenario kegagalan nyata di industri nyata.",
            "Hermansyah tidak terafiliasi dengan satu tumpukan teknologi usang. Pemahamannya yang mendalam terhadap ekosistem modern memastikan bahwa tujuan utamanya bukan sekadar merilis website, melainkan membuat dominasi digital klien menjadi absolut."
        ],
        stats: [
            'Based in Bogor, Indonesia',
            'Modern Stack Engineering',
            'End-to-End Product Architecture'
        ],
        quote: 'KAMI DI SINI UNTUK MEMBONGKAR KELEMAHAN DIGITAL ANDA SEBELUM HAL ITU MENGHANCURKAN BISNIS ANDA DI PASAR.'
    },
    {
        slug: 'sibel-damar',
        name: 'Sibel Damar',
        role: 'Head of Marketing',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop',
        headline: 'DRIVING GROWTH THROUGH BOLD STRATEGY',
        bio: ['Detailed bio coming soon.'],
        stats: ['Based in Global', 'Marketing Strategy'],
        quote: 'STRATEGY WITHOUT EXECUTION IS JUST A HALLUCINATION.'
    },
    {
        name: "Dave Blakely",
        slug: "dave-blakely",
        role: "Advisor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        headline: "STRATEGIC INSIGHT FOR ORGANIZATIONAL SCALING",
        bio: [
            "Dave Blakely brings unparalleled strategic insight to the UNCLEMAN advisory board.",
            "His deep understanding of organizational scaling and operational excellence helps guide the agency's long-term trajectory.",
            "An industry veteran, Dave mentors the leadership team, ensuring that creative ambition is always matched by structural rigor."
        ],
        stats: [
            "Based in San Francisco, CA",
            "Strategic Insight",
            "Organizational Scaling"
        ],
        quote: "True innovation happens at the intersection of discipline and creativity."
    }
];

export default function TeamMemberPage() {
    const params = useParams();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="min-h-screen bg-black" />; // Prevent hydration mismatch

    const slug = params?.slug as string;
    const member = teamMembers.find((m) => m.slug === slug);

    if (!member) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-red-500 text-3xl font-medium mb-4">MEMBER NOT FOUND</h1>
                <p className="text-zinc-500 mb-8">The requested profile '{slug}' does not exist.</p>
                <Link href="/culture" className="border-b border-white pb-1 hover:text-zinc-400 transition-colors">
                    RETURN TO CULTURE
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24">
            <div className="max-w-[1800px] mx-auto px-4 md:px-12 lg:px-24">
                {/* Header Section */}
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} className="mb-16 md:mb-24">
                    <Link href="/culture" className="text-zinc-500 text-sm uppercase tracking-widest hover:text-white transition-colors mb-8 inline-block">
                        [ Back to Culture ]
                    </Link>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tighter mb-6">
                        {member.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 border-b border-white/20 pb-12">
                        {member.role}
                    </p>
                </motion.div>

                {/* Editorial Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left: Massive Portrait */}
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }} className="lg:col-span-5 relative aspect-[3/4] w-full overflow-hidden">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                    </motion.div>

                    {/* Right: Biography & Stats */}
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }} className="lg:col-span-7 flex flex-col">
                        <h2 className="text-2xl md:text-4xl font-medium uppercase leading-snug mb-12 text-zinc-200">
                            {member.headline}
                        </h2>

                        <div className="space-y-8 mb-16">
                            {member.bio.map((paragraph, idx) => (
                                <p key={idx} className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Stats List */}
                        <div className="flex flex-col w-full border-t border-white/20">
                            {member.stats.map((stat, idx) => (
                                <div key={idx} className="border-b border-white/20 py-4 text-zinc-300 uppercase tracking-wide text-sm md:text-base">
                                    ✦ {stat}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Massive Quote Section */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full mt-32 md:mt-48 px-4 md:px-12 lg:px-24">
                <h3 className="text-4xl md:text-6xl lg:text-8xl font-serif italic font-light text-center leading-tight tracking-tight text-zinc-200">
                    "{member.quote}"
                </h3>
            </motion.div>
        </main>
    );
}
